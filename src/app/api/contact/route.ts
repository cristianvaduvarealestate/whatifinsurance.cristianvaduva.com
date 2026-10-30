import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { sendTelegramLeadNotification } from '@/lib/telegramNotifier';

// Simple in-memory IP rate limiter: max 5 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || entry.expiresAt < now) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + 10 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 5) {
    return false;
  }
  entry.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Prea multe solicitări transmise recent. Vă rugăm să reîncercați în câteva minute.' },
        { status: 429 }
      );
    }

    const body = await req.json();

    // 1. Spam protection: Honeypot check
    // If the hidden 'website_honeypot' field is filled in by bots, reject quietly
    if (body.website_honeypot && body.website_honeypot.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Mesajul a fost procesat.' });
    }

    // 2. Server-side validation
    const { name, email, phone, formType, message, category, scenarioTitle, scenarioSlug, consent, referralToken, referralLandingPath } = body;

    // Name validation with upper boundary limit
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Numele complet este obligatoriu (minim 2 caractere).' },
        { status: 400 }
      );
    }
    if (name.trim().length > 100) {
      return NextResponse.json(
        { error: 'Numele introdus depășește lungimea maximă admisă (100 de caractere).' },
        { status: 400 }
      );
    }

    // Email validation with RFC-compliant regex and upper boundary limit
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim()) || email.trim().length > 120) {
      return NextResponse.json(
        { error: 'Adresa de e-mail introdusă este invalidă sau depășește limita admisă.' },
        { status: 400 }
      );
    }

    // Explicit GDPR consent is mandatory
    if (!consent) {
      return NextResponse.json(
        { error: 'Este necesar acordul pentru prelucrarea datelor în vederea contactării.' },
        { status: 400 }
      );
    }

    // Reasonable phone validation: required for quote & consultation forms
    const isQuoteForm =
      formType === 'oferta' ||
      formType === 'quote_request' ||
      formType === 'asigurare_intrebare' ||
      formType === 'ce_vrei_sa_asiguri';

    const phoneClean = typeof phone === 'string' ? phone.trim().replace(/[^0-9+]/g, '') : '';

    if (isQuoteForm) {
      if (!phoneClean || phoneClean.length < 8 || phoneClean.length > 20) {
        return NextResponse.json(
          { error: 'Numărul de telefon este obligatoriu pentru prezentarea opțiunilor (între 8 și 20 de caractere).' },
          { status: 400 }
        );
      }
    } else if (phoneClean && (phoneClean.length < 8 || phoneClean.length > 20)) {
      return NextResponse.json(
        { error: 'Numărul de telefon introdus este invalid (trebuie să aibă între 8 și 20 de caractere).' },
        { status: 400 }
      );
    }

    // Sanitize string inputs (strip potential HTML/tags and enforce strict length bounds)
    const sanitize = (str: any, maxLen = 200) => {
      if (typeof str !== 'string') return '';
      return str.replace(/[<>]/g, '').trim().substring(0, maxLen);
    };

    // Sanitize referral attribution (opaque token: max 32 chars, strictly alphanumeric / dash / underscore)
    const cleanReferralToken =
      typeof referralToken === 'string' && /^[a-zA-Z0-9_-]{8,32}$/.test(referralToken.trim())
        ? referralToken.trim()
        : undefined;

    const cleanReferralLanding =
      typeof referralLandingPath === 'string' ? sanitize(referralLandingPath, 100) : undefined;

    const leadRecord = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
      formType: sanitize(formType, 50) || 'general',
      name: sanitize(name, 100),
      email: email.trim().toLowerCase().substring(0, 120),
      phone: phoneClean.substring(0, 20),
      category: sanitize(category, 80),
      scenarioTitle: sanitize(scenarioTitle, 200),
      scenarioSlug: sanitize(scenarioSlug, 100),
      sourcePage: cleanReferralLanding || sanitize(scenarioSlug ? `/scenarii/${category}/${scenarioSlug}` : req.headers.get('referer') || '/contact', 120),
      message: sanitize(message, 2500),
      referralToken: cleanReferralToken,
      referralLandingPath: cleanReferralLanding,
      ipMasked: ip.split('.').slice(0, 3).join('.') + '.xxx', // Masked IP for privacy
      status: 'pending_review',
    };

    // 3. Deduplication Check (Durable via Netlify Blobs with in-memory fast path)
    // Compute SHA-256 fingerprint from sanitized submission components (zero PII stored in key)
    const crypto = await import('crypto');
    const fingerprintSource = `${email.trim().toLowerCase()}|${sanitize(formType, 50)}|${phoneClean}|${sanitize(message, 120)}`;
    const submissionFingerprint = crypto.createHash('sha256').update(fingerprintSource).digest('hex');

    const { saveLead, checkAndRegisterDeduplication } = await import('@/lib/leadStorage');
    const dedupCheck = await checkAndRegisterDeduplication(submissionFingerprint, leadRecord.id);

    if (dedupCheck.isDuplicate) {
      console.info(`[ContactRoute] Duplicate submission detected. Returning existing lead reference.`);
      return NextResponse.json({
        success: true,
        leadId: dedupCheck.existingLeadId || leadRecord.id,
        persisted: true,
        duplicatePrevented: true,
        message: 'Solicitarea dumneavoastră a fost deja recepționată și este în curs de procesare de către consultant.',
      });
    }

    // 4. Persistent Lead Storage (Netlify Blobs in production, Local Disk in development)
    const storageResult = await saveLead(leadRecord);

    // 5. Shared Telegram Notification Infrastructure (Decoupled from persistence)
    let telegramDispatched = false;
    try {
      const result = await sendTelegramLeadNotification(leadRecord);
      telegramDispatched = Boolean(result.success);
    } catch (telegramErr: any) {
      // Safe error logging without tokens or PII
      console.warn(`[ContactRoute] Telegram notification dispatch failed for lead ${leadRecord.id}:`, telegramErr?.message || 'unknown');
    }

    // 5. Fail-Safe Guarantee: Never report false success if lead cannot be guaranteed
    // If persistent storage failed AND Telegram notification failed, do not deceive the user.
    if (!storageResult.persisted && !telegramDispatched) {
      console.error(`[ContactRoute] Lead ${leadRecord.id} could not be persisted or notified.`);
      return NextResponse.json(
        {
          success: false,
          error: 'Sistemul automat de recepție este temporar indisponibil. Solicitarea dumneavoastră nu a putut fi salvată în siguranță.',
          fallbackContact: {
            phone: '0767110439',
            whatsapp: '+43 650 953 6345',
            whatsappUrl: 'https://wa.me/436509536345',
            email: 'cristianvaduva@duck.com',
          },
        },
        { status: 503 }
      );
    }

    if (!storageResult.persisted && telegramDispatched) {
      console.warn(`[ContactRoute] Lead ${leadRecord.id} was notified via Telegram, but persistent storage was unavailable.`);
    }

    // Return confirmed submission with decoupled statuses and transparent messaging
    const responseMessage = storageResult.persisted
      ? 'Solicitarea dumneavoastră a fost înregistrată și securizată în baza de date. Vă vom contacta în cel mai scurt timp.'
      : 'Solicitarea a fost transmisă consultantului pe canal direct de urgență. Pentru siguranță sporită, vă recomandăm să notați numărul de referință sau să ne contactați direct.';

    return NextResponse.json({
      success: true,
      leadId: leadRecord.id,
      persisted: storageResult.persisted,
      storageEngine: storageResult.engine,
      telegramNotified: telegramDispatched,
      message: responseMessage,
      ...(!storageResult.persisted && {
        fallbackContact: {
          phone: '0767110439',
          whatsapp: '+43 650 953 6345',
          whatsappUrl: 'https://wa.me/436509536345',
          email: 'cristianvaduva@duck.com',
        },
      }),
    });
  } catch (error: any) {
    console.error('Contact form submission error:', error?.message);
    return NextResponse.json(
      { error: 'A apărut o eroare tehnică internă la înregistrarea solicitării.' },
      { status: 500 }
    );
  }
}
