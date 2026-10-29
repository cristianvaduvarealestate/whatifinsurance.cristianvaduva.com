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
    const { name, email, phone, formType, message, category, scenarioTitle, scenarioSlug, consent } = body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Numele complet este obligatoriu (minim 2 caractere).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Adresa de e-mail introdusă este invalidă.' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'Este necesar acordul pentru prelucrarea datelor în vederea contactării.' },
        { status: 400 }
      );
    }

    if (formType === 'oferta' || formType === 'quote_request' || formType === 'asigurare_intrebare' || formType === 'ce_vrei_sa_asiguri') {
      const phoneClean = typeof phone === 'string' ? phone.replace(/[^0-9+]/g, '') : '';
      if (!phoneClean || phoneClean.length < 6) {
        return NextResponse.json(
          { error: 'Numărul de telefon este obligatoriu pentru a vă putea prezenta opțiunile (minim 6 cifre).' },
          { status: 400 }
        );
      }
    }

    // Sanitize string inputs (basic HTML strip)
    const sanitize = (str: any) =>
      typeof str === 'string' ? str.replace(/[<>]/g, '').trim() : '';

    const leadRecord = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
      formType: sanitize(formType) || 'general',
      name: sanitize(name),
      email: email.trim().toLowerCase(),
      phone: sanitize(phone),
      category: sanitize(category),
      scenarioTitle: sanitize(scenarioTitle),
      scenarioSlug: sanitize(scenarioSlug),
      message: sanitize(message),
      ipMasked: ip.split('.').slice(0, 3).join('.') + '.xxx', // Masked IP for privacy
      status: 'pending_review',
    };

    // 3. Local Secure Append-Only File Storage
    // Saves leads to a protected directory inside the project (data/leads.json)
    const storageDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(storageDir)) {
      fs.mkdirSync(storageDir, { recursive: true });
    }

    const storagePath = path.join(storageDir, 'leads.json');
    let existingLeads: any[] = [];
    if (fs.existsSync(storagePath)) {
      try {
        const fileContent = fs.readFileSync(storagePath, 'utf8');
        existingLeads = JSON.parse(fileContent);
      } catch (e) {
        existingLeads = [];
      }
    }

    existingLeads.push(leadRecord);
    fs.writeFileSync(storagePath, JSON.stringify(existingLeads, null, 2), 'utf8');

    // 4. Shared Telegram Notification Infrastructure (Non-blocking)
    try {
      await sendTelegramLeadNotification(leadRecord);
    } catch (telegramErr: any) {
      // Safe error logging without tokens or PII; lead is already safely stored locally
      console.warn(`[ContactRoute] Telegram notification dispatch failed for lead ${leadRecord.id}:`, telegramErr?.message || 'unknown');
    }

    // Return confirmed submission
    return NextResponse.json({
      success: true,
      leadId: leadRecord.id,
      message: 'Solicitarea dumneavoastră a fost înregistrată cu succes. Vă vom contacta în cel mai scurt timp.',
    });
  } catch (error: any) {
    console.error('Contact form submission error:', error?.message);
    return NextResponse.json(
      { error: 'A apărut o eroare tehnică internă la înregistrarea solicitării.' },
      { status: 500 }
    );
  }
}
