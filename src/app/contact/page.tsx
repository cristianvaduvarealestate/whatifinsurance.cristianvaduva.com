'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Mail,
  Phone,
  MessageSquare,
  ShieldCheck,
  Building2,
  FileText,
  HelpCircle,
  Briefcase,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ArrowLeft,
  Lock,
} from 'lucide-react';
import { getStoredAttribution } from '@/lib/referralManager';
import { trackEvent } from '@/lib/analytics';

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialTopic = searchParams.get('topic');
  const initialScenario = searchParams.get('scenario');

  // Form type: 'general' | 'review' | 'scenario' | 'business'
  const [formType, setFormType] = useState<'general' | 'review' | 'scenario' | 'business'>('general');

  useEffect(() => {
    if (initialScenario) {
      setFormType('scenario');
    } else if (initialTopic === 'review-polita') {
      setFormType('review');
    } else if (initialTopic === 'business') {
      setFormType('business');
    } else if (initialTopic === 'sugestie-scenariu' || initialTopic === 'sugestie') {
      setFormType('scenario');
    }
  }, [initialTopic, initialScenario]);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('casa');
  const [scenarioTitle, setScenarioTitle] = useState(initialScenario ? `Scenariu: ${initialScenario}` : '');
  const [message, setMessage] = useState('');
  const [preferredContact, setPreferredContact] = useState('email');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  // Status
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmedLeadId, setConfirmedLeadId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Vă rugăm să introduceți numele dumneavoastră.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Vă rugăm să introduceți o adresă de e-mail validă.');
      return;
    }
    if (!consent) {
      setErrorMessage('Vă rugăm să bifați acordul privind prelucrarea datelor cu caracter personal.');
      return;
    }

    setLoading(true);

    try {
      const attribution = getStoredAttribution();

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType,
          name,
          email,
          phone,
          category,
          scenarioTitle,
          scenarioSlug: initialScenario || '',
          message,
          preferredContact,
          consent,
          website_honeypot: honeypot,
          referralToken: attribution.referralToken || undefined,
          referralLandingPath: attribution.landingPath || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'A apărut o problemă la transmiterea solicitării.');
      }

      const assignedLeadId = data.leadId || '';
      setSuccess(true);
      setConfirmedLeadId(assignedLeadId);

      // Track lead submission
      trackEvent('lead_submitted', {
        leadId: assignedLeadId || 'lead_contact_page',
        category,
        persisted: Boolean(data.persisted),
        hasReferral: Boolean(attribution.referralToken),
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'Eroare de conexiune cu serverul.');
      trackEvent('lead_submission_failed', {
        category,
        errorReason: err.message || 'unknown',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#06141B] pb-24">
      {/* Header */}
      <div className="border-b border-slate-200 bg-slate-50/70 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#06141B] transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Înapoi la pagina principală</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-[#E10600]" />
            <span>Contact &amp; Consultanță Dedicată</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#06141B] tracking-tight">
            Hai să vorbim despre riscurile reale, nu despre formulare standard.
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Ai o nelămurire despre o clauză, vrei un audit al poliței actuale sau ai o întrebare tehnică? Alege tipul de solicitare și hai să discutăm deschis — direct pe contracte, fără discursuri corporatiste.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Side: Contact Forms */}
        <div className="lg:col-span-8 space-y-6">
          {/* Tab selector for the 4 form types */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            {[
              { id: 'general', label: 'Dilemă Generală', icon: MessageSquare },
              { id: 'review', label: 'Audit Poliță', icon: FileText },
              { id: 'scenario', label: 'Caz Specific', icon: HelpCircle },
              { id: 'business', label: 'Risc Business', icon: Briefcase },
            ].map((tab) => {
              const active = formType === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setFormType(tab.id as any);
                    setSuccess(false);
                    setErrorMessage('');
                  }}
                  className={`py-3 px-3 rounded-xl text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-2 ${
                    active
                      ? 'bg-white text-[#06141B] shadow-sm border border-slate-200'
                      : 'text-slate-600 hover:text-[#06141B]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-[#E10600]' : 'text-slate-500'}`} />
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Form Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            {success ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#06141B]">
                  Solicitarea ta a fost înregistrată
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Am salvat detaliile solicitării tale cu numărul de referință{' '}
                  <span className="font-mono text-[#06141B] font-bold">{confirmedLeadId}</span>. Analizăm clauzele aplicabile și revenim prin metoda de contact aleasă de tine.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-full border border-slate-300 hover:bg-slate-50 text-xs font-mono font-bold text-[#06141B] uppercase"
                  >
                    Trimite alt mesaj
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot field (hidden from real users, traps spam bots) */}
                <input
                  type="text"
                  name="website_honeypot"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-[#06141B]">
                    {formType === 'general' && 'Dilemă de risc sau întrebare generală'}
                    {formType === 'review' && 'Audit & analiză de clauze contractuale'}
                    {formType === 'scenario' && 'Consultare specifică pe un scenariu documentat'}
                    {formType === 'business' && 'Consultanță pentru companii și răspundere profesională'}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {formType === 'general' && 'Scrie-ne despre orice clauză sau situație din asigurări pe care vrei s-o lămurești.'}
                    {formType === 'review' && 'Spune-ne ce tip de contract deții și analizăm excluderile și punctele critice.'}
                    {formType === 'scenario' && 'Discutăm cum se aplică scenariul analizat la proprietatea sau mașina ta.'}
                    {formType === 'business' && 'Pentru riscuri comerciale, flote, întreruperea activității sau răspundere civilă.'}
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 space-y-2.5">
                    <div className="flex items-center gap-2.5 font-bold">
                      <AlertCircle className="w-4 h-4 text-[#E10600] shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                    <div className="pt-1 flex flex-wrap items-center gap-2">
                      <span className="text-slate-600 font-medium">Alternative directe de contact:</span>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono uppercase text-slate-700 font-bold block">
                      Nume Complet <span className="text-[#E10600]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      maxLength={100}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Ion Popescu"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#06141B] text-sm focus:outline-none focus:border-[#06141B] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono uppercase text-slate-700 font-bold block">
                      Adresă E-mail <span className="text-[#E10600]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      maxLength={120}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nume@exemplu.ro"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#06141B] text-sm focus:outline-none focus:border-[#06141B] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="text-xs font-mono uppercase text-slate-700 font-bold block">
                      Număr Telefon (Opțional)
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={20}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="07xxxxxxxx"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#06141B] text-sm focus:outline-none focus:border-[#06141B] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-preferred" className="text-xs font-mono uppercase text-slate-700 font-bold block">
                      Metodă de contact preferată
                    </label>
                    <select
                      id="contact-preferred"
                      name="preferredContact"
                      value={preferredContact}
                      onChange={(e) => setPreferredContact(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#06141B] text-sm focus:outline-none focus:border-[#06141B] focus:bg-white transition-colors"
                    >
                      <option value="email">Răspuns pe E-mail</option>
                      <option value="whatsapp">Mesaj pe WhatsApp</option>
                      <option value="phone">Apel telefonic</option>
                    </select>
                  </div>
                </div>

                {/* Form Type Specific Fields */}
                {(formType === 'review' || formType === 'general') && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-700 font-bold block">
                      Categoria de interes
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#06141B] text-sm focus:outline-none focus:border-[#06141B] focus:bg-white transition-colors"
                    >
                      <option value="casa">Casă &amp; Locuință</option>
                      <option value="auto">Auto &amp; CASCO</option>
                      <option value="calatorii">Călătorii &amp; Medical internațional</option>
                      <option value="viata-sanatate">Sănătate &amp; Viață</option>
                      <option value="raspundere-civila">Răspundere Civilă</option>
                      <option value="business">Business &amp; Cyber</option>
                      <option value="luxury-bunuri">Bunuri de Lux &amp; Valori</option>
                    </select>
                  </div>
                )}

                {formType === 'scenario' && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-700 font-bold block">
                      Scenariul analizat
                    </label>
                    <input
                      type="text"
                      value={scenarioTitle}
                      onChange={(e) => setScenarioTitle(e.target.value)}
                      placeholder="Ex: Se sparge o țeavă în apartament"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#06141B] text-sm focus:outline-none focus:border-[#06141B] focus:bg-white transition-colors"
                    />
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-700 font-bold block">
                    {formType === 'review' ? 'Descrie pe scurt ce dorești să verificăm' : 'Mesajul tău'}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      formType === 'review'
                        ? 'Ex: Dețin o poliță facultativă la compania X și doresc să aflu dacă acoperă inundațiile provocate vecinilor...'
                        : 'Scrie-ne detalii despre situația ta...'
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#06141B] text-sm focus:outline-none focus:border-[#06141B] focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#06141B] focus:ring-0"
                    />
                    <span className="text-xs text-slate-600 leading-relaxed">
                      Sunt de acord cu prelucrarea datelor furnizate în conformitate cu{' '}
                      <Link href="/confidentialitate" className="text-slate-900 font-semibold underline hover:text-[#E10600]">
                        Politica de Confidențialitate
                      </Link>
                      , exclusiv în scopul transmiterii unui răspuns la această solicitare. Datele nu sunt înstrăinate terților.
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Se transmite...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-300" />
                        <span>Trimite pentru analiză</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Nu solicităm niciodată parole, coduri PIN, date de card bancar sau documente medicale confidențiale prin formular.</span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Right Side: Verified Contact Details & Personal Brand */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                FONDATOR &amp; CONSULTANT
              </span>
              <h3 className="text-xl font-bold text-[#06141B] mt-0.5">Cristian Văduva</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Inițiatorul proiectului WHAT IF INSURANCE și dezvoltator de ecosisteme digitale în asigurări, finanțe și real-estate.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-slate-200 text-xs">
              <a
                href="tel:+40767110439"
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-slate-400 text-slate-800 transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-mono">TELEFON ASIGURĂRI</span>
                  <span className="font-bold text-[#06141B]">+40 767 110 439</span>
                </div>
              </a>

              <a
                href="https://wa.me/436509536345"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-slate-400 text-slate-800 transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-mono">WHATSAPP DIRECT</span>
                  <span className="font-bold text-[#06141B]">+43 650 953 6345</span>
                </div>
              </a>

              <a
                href="mailto:cristianvaduva@duck.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-slate-400 text-slate-800 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <div className="overflow-hidden">
                  <span className="text-[10px] text-slate-400 block font-mono">E-MAIL SECURIZAT</span>
                  <span className="font-bold text-[#06141B] truncate block">cristianvaduva@duck.com</span>
                </div>
              </a>
            </div>

            <div className="pt-2 border-t border-slate-200 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block font-bold">
                CANALE VERIFICATE
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href="https://t.me/CristianVaduva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-400 text-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  <span>Telegram</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <a
                  href="https://insurance.cristianvaduva.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-400 text-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  <span>insurance.cristianvaduva.com</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <a
                  href="https://linktr.ee/CristianVaduvaRealEstate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-400 text-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  <span>Linktree</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Educational notice */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 space-y-2">
            <span className="font-mono text-[11px] uppercase font-bold text-slate-700 block">
              NOTĂ PRIVIND INTERMEDIEREA
            </span>
            <p className="leading-relaxed">
              Consultanța educațională oferită prin această platformă este realizată în calitate de partener Generali de către Cristian Văduva. Orice emitere formală de poliță se derulează prin canalele autorizate ale asigurătorului, conform legislației în vigoare.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
