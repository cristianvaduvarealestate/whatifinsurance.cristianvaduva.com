'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  HelpCircle,
  X,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  ArrowRight,
  Phone,
  Mail,
  User,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { SCENARIOS } from '@/data/scenarios';
import { useSmartScroll } from '@/hooks/useSmartScroll';
import { getStoredAttribution } from '@/lib/referralManager';
import { trackEvent } from '@/lib/analytics';

const INSURANCE_OBJECTS = [
  { id: 'locuinta', label: 'Locuința (Casă, Apartament sau Bunuri din casă)' },
  { id: 'auto', label: 'Mașina (RCA, CASCO sau Avarii speciale)' },
  { id: 'sanatate', label: 'Sănătatea personală & Spitalizare privată' },
  { id: 'calatorie', label: 'Călătoriile (Vacanțe, Bagaje sau Urgențe externe)' },
  { id: 'viata', label: 'Familia & Siguranța financiară pe termen lung' },
  { id: 'business', label: 'Afacerea & Răspunderea profesională' },
  { id: 'luxury', label: 'Bunuri de mare valoare (Ceasuri, Artă, Yachturi)' },
  { id: 'altele', label: 'O situație specifică / Alt tip de protecție' },
];

export const PersistentQuoteCTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [confirmedLeadId, setConfirmedLeadId] = useState<string | null>(null);

  const [hasFocus, setHasFocus] = useState(false);

  const pathname = usePathname();

  const isCtaVisible = useSmartScroll({
    threshold: 8,
    topOffset: 50,
    disableWhen: isOpen || hasFocus,
  });

  // Form State: Exploratory First, then Contact
  const [category, setCategory] = useState('locuinta');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  // Contextual Scenario Info
  const [scenarioContext, setScenarioContext] = useState<{
    title: string;
    slug: string;
  } | null>(null);

  // Preselect insurance category based on current URL
  useEffect(() => {
    if (pathname.startsWith('/scenarii/')) {
      const parts = pathname.split('/').filter(Boolean);
      // parts[0] = 'scenarii', parts[1] = category, parts[2] = slug
      if (parts[1]) {
        const catMap: Record<string, string> = {
          casa: 'locuinta',
          auto: 'auto',
          calatorii: 'calatorie',
          viata: 'viata',
          'viata-sanatate': 'sanatate',
          business: 'business',
          'digital-tech': 'business',
          'luxury-bunuri': 'luxury',
          'proprietari-chiriasi': 'locuinta',
          'familie-lifestyle': 'viata',
          raspundere: 'business',
        };
        const preselected = catMap[parts[1]] || 'locuinta';
        setCategory(preselected);
      }

      if (parts[2]) {
        const found = SCENARIOS.find((s) => s.slug === parts[2]);
        if (found) {
          setScenarioContext({ title: found.title, slug: found.slug });
        }
      }
    } else {
      setScenarioContext(null);
    }
  }, [pathname]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setServerError(null);

    // Client-side validation
    if (!name || name.trim().length < 2) {
      setServerError('Vă rugăm să introduceți numele complet (minim 2 caractere).');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    if (!cleanPhone || cleanPhone.length < 6) {
      setServerError('Vă rugăm să introduceți un număr de telefon valid (minim 6 cifre) pentru a vă putea transmite opțiunile.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setServerError('Vă rugăm să introduceți o adresă de e-mail validă.');
      return;
    }

    if (!consent) {
      setServerError('Este necesar acordul pentru prelucrarea datelor în vederea prezentării opțiunilor.');
      return;
    }

    setIsSubmitting(true);

    try {
      const attribution = getStoredAttribution();

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'asigurare_intrebare',
          name: name.trim(),
          phone: cleanPhone,
          email: email.trim().toLowerCase(),
          category,
          scenarioTitle: scenarioContext?.title || undefined,
          scenarioSlug: scenarioContext?.slug || undefined,
          message: message.trim(),
          consent,
          website_honeypot: honeypot,
          referralToken: attribution.referralToken || undefined,
          referralLandingPath: attribution.landingPath || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'A apărut o problemă la înregistrarea solicitării.');
      }

      // Confirmed server-issued lead ID
      const newLeadId = data.leadId || `lead_${Date.now()}`;
      setConfirmedLeadId(newLeadId);

      // Track successful lead submission with zero PII
      trackEvent('lead_submitted', {
        leadId: newLeadId,
        category,
        persisted: Boolean(data.persisted),
        hasReferral: Boolean(attribution.referralToken),
      });
    } catch (err: any) {
      setServerError(err.message || 'Eroare de comunicare cu serverul.');
      trackEvent('lead_submission_failed', {
        category,
        errorReason: err.message || 'unknown',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setConfirmedLeadId(null);
      setServerError(null);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setConsent(false);
    }, 300);
  };

  return (
    <>
      {/* Persistent Fixed Trigger Button with Smart Hide & Mobile Navigation Offset */}
      <div
        onFocusCapture={() => setHasFocus(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setHasFocus(false);
          }
        }}
        className={`fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] right-3.5 sm:bottom-6 sm:right-6 z-40 print:hidden transform transition-all duration-300 ease-in-out motion-reduce:transition-none ${
          isCtaVisible
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-32 opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            trackEvent('quote_cta_clicked', {
              sourceLocation: 'persistent_button',
              preselectedCategory: category,
            });
          }}
          aria-label="Deschide dialogul Ce vrei să știi despre asigurarea ta?"
          className="group relative flex items-center gap-2.5 py-3 px-5 sm:py-3.5 sm:px-6 rounded-full bg-[#06141B] hover:bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-xl shadow-slate-900/25 hover:shadow-2xl hover:shadow-slate-900/40 border border-slate-700/60 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse" />
          <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          
          {/* Full label on desktop, responsive compact on very small screens */}
          <span className="tracking-tight font-extrabold hidden xs:inline">
            Ce vrei să verifici?
          </span>
          <span className="tracking-tight font-extrabold xs:hidden">
            Audit clauze
          </span>

          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Accessible Exploratory Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-sm overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="explore-modal-title"
        >
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 my-auto overflow-hidden text-[#06141B]">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[10px] font-mono font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3 h-3 text-[#E10600]" />
                  <span>Audit de Clauze · Fără Presiune Comercială</span>
                </div>
                <h3 id="explore-modal-title" className="text-xl sm:text-2xl font-black text-[#06141B]">
                  Ce vrei să știi despre asigurarea ta?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Spune-ne ce te preocupă sau ce poliță vrei să clarifici. Analizăm clauzele exacte și îți explicăm unde sunt capcanele, fără discursuri de vânzare.
                </p>
              </div>
              <button
                type="button"
                onClick={handleResetAndClose}
                aria-label="Închide dialogul"
                className="p-1.5 rounded-xl text-slate-400 hover:text-[#06141B] hover:bg-slate-100 transition-colors shrink-0 ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contextual Scenario Attribution Banner */}
            {scenarioContext && (
              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] shrink-0 mt-1.5" />
                <div>
                  <span className="font-bold text-[#06141B]">Scenariu explorat anterior:</span>{' '}
                  <span className="italic">{scenarioContext.title}</span>
                </div>
              </div>
            )}

            {/* Body: Form or Server-Confirmed Success */}
            {confirmedLeadId ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-lg font-bold text-[#06141B]">
                    Solicitarea ta a fost înregistrată
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Analizăm situația și clauzele aplicabile și revenim cu un răspuns clar, direct și documentat pe contracte reale. Fără insistențe comerciale.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 inline-block">
                  <span className="text-slate-400">ID Solicitare:</span>{' '}
                  <strong className="text-[#06141B] select-all">{confirmedLeadId}</strong>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="py-2.5 px-6 rounded-xl bg-[#06141B] text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    Închide fereastra
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 mt-5">
                {serverError && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-[#E10600] space-y-2">
                    <div className="flex items-center gap-2 font-bold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{serverError}</span>
                    </div>
                    <div className="pt-0.5 flex flex-wrap items-center gap-2">
                      <a
                        href="https://wa.me/436509536345"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors inline-flex items-center gap-1 text-[11px]"
                      >
                        WhatsApp Direct (+43 650 953 6345)
                      </a>
                      <a
                        href="mailto:cristianvaduva@duck.com"
                        className="px-2.5 py-1 rounded-lg bg-[#06141B] text-white font-bold hover:bg-slate-800 transition-colors inline-flex items-center gap-1 text-[11px]"
                      >
                        Trimite E-mail
                      </a>
                    </div>
                  </div>
                )}

                {/* Honeypot field for anti-spam bots */}
                <input
                  type="text"
                  name="website_honeypot"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* 1. Insurance Object / Need (Exploratory Choice First) */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    1. Ce bun sau risc te preocupă? <span className="text-[#E10600]">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                  >
                    {INSURANCE_OBJECTS.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Optional Situation Description */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    2. Detalii despre situația ta sau clauza care te pune pe gânduri <span className="text-slate-400 font-normal lowercase">(opțional)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ex: am o casă de vacanță lăsată iarna, mă tem de infiltrații la bloc sau vreau CASCO fără bătăi de cap..."
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* 3. Contact Details */}
                <div className="pt-2 border-t border-slate-100 space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                    3. Unde îți trimitem analiza?
                  </span>

                  {/* Full Name */}
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="quote-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      maxLength={100}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Numele tău complet *"
                      className="w-full py-2.5 pl-9 pr-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        id="quote-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        maxLength={20}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Număr de telefon *"
                        className="w-full py-2.5 pl-9 pr-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        id="quote-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        maxLength={120}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Adresă de e-mail *"
                        className="w-full py-2.5 pl-9 pr-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Privacy Consent */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 select-none">
                    <input
                      id="quote-consent"
                      name="consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 rounded border-slate-300 text-[#06141B] focus:ring-[#06141B]"
                    />
                    <span>
                      Sunt de acord cu prelucrarea datelor de contact în conformitate cu{' '}
                      <Link
                        href="/confidentialitate"
                        target="_blank"
                        className="underline text-[#06141B] font-semibold hover:text-[#E10600]"
                      >
                        politica de confidențialitate
                      </Link>{' '}
                      pentru a primi analiza clauzelor și opțiunile aplicabile.
                    </span>
                  </label>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl bg-[#06141B] hover:bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Se transmite solicitarea ta...</span>
                      </>
                    ) : (
                      <>
                        <span>Cere analiza clauzelor tale</span>
                        <ArrowRight className="w-4 h-4 text-slate-300" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Fără vânzări forțate. Analiză contractuală documentată.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
