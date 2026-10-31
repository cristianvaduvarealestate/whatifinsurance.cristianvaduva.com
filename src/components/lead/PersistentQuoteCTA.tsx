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
  Shield,
  FileText,
  AlertTriangle,
  ChevronLeft,
  Home,
  Car,
  Plane,
  Briefcase,
  ExternalLink,
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

type AssistantView =
  | 'hub'
  | 'intrebare'
  | 'asigurare'
  | 'asigurare_form'
  | 'polita'
  | 'polita_form'
  | 'clauza'
  | 'dauna'
  | 'dauna_form';

export const PersistentQuoteCTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<AssistantView>('hub');
  const [viewHistory, setViewHistory] = useState<AssistantView[]>(['hub']);
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

  // Form State (Preserved across all view navigation without reset)
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

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleResetAndClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Preselect insurance category based on current URL
  useEffect(() => {
    if (pathname.startsWith('/scenarii/')) {
      const parts = pathname.split('/').filter(Boolean);
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

  const navigateTo = (view: AssistantView) => {
    setServerError(null);
    setViewHistory((prev) => {
      if (prev[prev.length - 1] === view) return prev;
      return [...prev, view];
    });
    setCurrentView(view);
  };

  const handleBack = () => {
    setServerError(null);
    setViewHistory((prev) => {
      if (prev.length <= 1) {
        setCurrentView('hub');
        return ['hub'];
      }
      const nextHistory = prev.slice(0, -1);
      const target = nextHistory[nextHistory.length - 1] || 'hub';
      setCurrentView(target);
      return nextHistory;
    });
  };

  const handleBackToHub = () => {
    setServerError(null);
    setViewHistory(['hub']);
    setCurrentView('hub');
  };

  const handleSubmit = async (e: React.FormEvent, formTopic: string = 'asigurare_intrebare') => {
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
      setServerError('Vă rugăm să introduceți un număr de telefon valid (minim 6 cifre).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setServerError('Vă rugăm să introduceți o adresă de e-mail validă.');
      return;
    }

    if (!consent) {
      setServerError('Este necesar acordul pentru prelucrarea datelor de contact.');
      return;
    }

    setIsSubmitting(true);

    try {
      const attribution = getStoredAttribution();

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: formTopic,
          name: name.trim(),
          phone: cleanPhone,
          email: email.trim().toLowerCase(),
          category,
          scenarioTitle: scenarioContext?.title || undefined,
          scenarioSlug: scenarioContext?.slug || undefined,
          sourceName: 'Asistentul „Cu ce te putem ajuta?”',
          sourcePage:
            typeof window !== 'undefined'
              ? window.location.pathname + window.location.search
              : pathname,
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

      const newLeadId = data.leadId || `lead_${Date.now()}`;
      setConfirmedLeadId(newLeadId);

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
      setCurrentView('hub');
      setViewHistory(['hub']);
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
            setCurrentView('hub');
            trackEvent('quote_cta_clicked', {
              sourceLocation: 'persistent_button',
              preselectedCategory: category,
            });
          }}
          aria-label="Deschide asistentul: Cu ce te putem ajuta?"
          className="group relative flex items-center gap-2.5 py-3 px-4 sm:py-3.5 sm:px-6 rounded-full bg-[#06141B] hover:bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-xl shadow-slate-900/25 hover:shadow-2xl hover:shadow-slate-900/40 border border-slate-700/60 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#E10600] animate-pulse shrink-0" />
          <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition-transform shrink-0" />

          {/* Friendly prompt */}
          <span className="tracking-tight font-extrabold hidden xs:inline">
            Cu ce te putem ajuta?
          </span>
          <span className="tracking-tight font-extrabold xs:hidden">
            Cu ce te ajutăm?
          </span>

          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-0.5 transition-transform shrink-0" />
        </button>
      </div>

      {/* Accessible Assistant Modal Panel */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-sm overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="assistant-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleResetAndClose();
            }
          }}
        >
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl p-5 sm:p-7 my-auto overflow-hidden text-[#06141B] max-h-[92vh] flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between pb-3.5 border-b border-slate-200 shrink-0">
              <div className="space-y-1 pr-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[10px] font-mono font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-[#E10600]" />
                  <span>Asistent WhatIf · Ghidaj direct & fără presiune</span>
                </div>
                <h3 id="assistant-modal-title" className="text-xl sm:text-2xl font-black text-[#06141B]">
                  {currentView === 'hub' && 'Cu ce te putem ajuta?'}
                  {currentView === 'intrebare' && 'Am o întrebare'}
                  {currentView === 'asigurare' && 'Vreau o asigurare'}
                  {currentView === 'asigurare_form' && 'Cerere de ofertă personalizată'}
                  {currentView === 'polita' && 'Am deja o poliță'}
                  {currentView === 'polita_form' && 'Verificare poliță activă'}
                  {currentView === 'clauza' && 'Vreau să înțeleg o clauză'}
                  {currentView === 'dauna' && 'Am nevoie de ajutor pentru o daună'}
                  {currentView === 'dauna_form' && 'Asistență dosar daună'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentView === 'hub' && 'Îți găsim direcția potrivită în câteva secunde. Alege situația ta:'}
                  {currentView === 'intrebare' && 'Scrie întrebarea ta despre riscuri, clauze sau polițe. Îți răspundem clar și fără presiune comercială.'}
                  {currentView === 'asigurare' && 'Caută o poliță nouă. Explorează categoriile sau cere o propunere personalizată.'}
                  {currentView === 'asigurare_form' && 'Spune-ne ce dorești să asiguri și îți transmitem o analiză consultativă fără comisioane ascunse.'}
                  {currentView === 'polita' && 'Ai deja o poliță activă? Te ajutăm cu verificarea clauzelor, optimizări sau suport.'}
                  {currentView === 'polita_form' && 'Transmite detaliile generale ale poliței tale pentru identificarea franșizelor ascunse sau a excluderilor.'}
                  {currentView === 'clauza' && 'Audit independent de clauze. Trimite detaliile poliței pentru explicarea excluderilor și franșizelor.'}
                  {currentView === 'dauna' && 'Ai un incident în desfășurare? Iată pașii imediați de urmat și contactele oficiale de avizare.'}
                  {currentView === 'dauna_form' && 'Completează detaliile incidentului pentru a primi îndrumare pas cu pas în dosarul de daună.'}
                </p>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                aria-label="Închide dialogul"
                className="p-1.5 rounded-xl text-slate-400 hover:text-[#06141B] hover:bg-slate-100 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto py-3.5 space-y-4 flex-1">
              {/* Contextual Scenario Banner (if opened while browsing a scenario) */}
              {scenarioContext && currentView !== 'hub' && (
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] shrink-0 mt-1.5" />
                  <div>
                    <span className="font-bold text-[#06141B]">Scenariu explorat:</span>{' '}
                    <span className="italic">{scenarioContext.title}</span>
                  </div>
                </div>
              )}

              {/* SUCCESS CONFIRMATION STATE */}
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
                      Analizăm solicitarea și revenim cu un răspuns clar, direct și documentat pe contracte reale. Fără insistențe comerciale.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 inline-block">
                    <span className="text-slate-400">ID Solicitare:</span>{' '}
                    <strong className="text-[#06141B] select-all">{confirmedLeadId}</strong>
                  </div>

                  <div className="pt-2 flex items-center justify-center gap-3">
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
                <>
                  {/* Universal Back Navigation Bar across ALL sub-screens */}
                  {currentView !== 'hub' && (
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <button
                        type="button"
                        onClick={handleBack}
                        aria-label="Înapoi la opțiuni"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/90 text-slate-700 hover:text-[#06141B] text-xs font-bold transition-all group border border-slate-200 shadow-sm active:scale-95"
                      >
                        <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:-translate-x-0.5 group-hover:text-[#06141B] transition-transform" />
                        <span>
                          {currentView === 'asigurare_form'
                            ? '← Înapoi la categorii'
                            : currentView === 'dauna_form'
                            ? '← Înapoi la urgențe & numere'
                            : currentView === 'polita_form'
                            ? '← Înapoi la opțiuni poliță'
                            : '← Înapoi la opțiuni'}
                        </span>
                      </button>

                      {currentView === 'asigurare_form' ||
                      currentView === 'dauna_form' ||
                      currentView === 'polita_form' ? (
                        <button
                          type="button"
                          onClick={handleBackToHub}
                          className="text-[11px] text-slate-500 hover:text-[#06141B] underline font-medium"
                        >
                          ← Înapoi la opțiuni principale
                        </button>
                      ) : (
                        <span className="text-[11px] text-slate-400 font-medium hidden xs:inline">
                          Schimbă opțiunea oricând
                        </span>
                      )}
                    </div>
                  )}

                  {/* ======================================================== */}
                  {/* VIEW: HUB (Friendly Choice Entry Point)                  */}
                  {/* ======================================================== */}
                  {currentView === 'hub' && (
                    <div className="space-y-2.5">
                      {/* Option 1: Am o întrebare */}
                      <button
                        type="button"
                        onClick={() => navigateTo('intrebare')}
                        className="w-full text-left p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 hover:border-slate-300 transition-all group flex items-start gap-3.5"
                      >
                        <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <HelpCircle className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-sm text-[#06141B] group-hover:text-sky-700 transition-colors">
                              Am o întrebare
                            </h4>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
                          </div>
                          <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">
                            Vreau doar să întreb ceva despre asigurări, fără angajamente sau presiune de vânzare.
                          </p>
                        </div>
                      </button>

                      {/* Option 2: Vreau o asigurare */}
                      <button
                        type="button"
                        onClick={() => navigateTo('asigurare')}
                        className="w-full text-left p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 hover:border-slate-300 transition-all group flex items-start gap-3.5"
                      >
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-sm text-[#06141B] group-hover:text-emerald-700 transition-colors">
                              Vreau o asigurare
                            </h4>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
                          </div>
                          <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">
                            Caut o poliță nouă pentru locuință, mașină, călătorie, viață sau afacerea mea.
                          </p>
                        </div>
                      </button>

                      {/* Option 3: Am deja o poliță */}
                      <button
                        type="button"
                        onClick={() => navigateTo('polita')}
                        className="w-full text-left p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 hover:border-slate-300 transition-all group flex items-start gap-3.5"
                      >
                        <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-sm text-[#06141B] group-hover:text-indigo-700 transition-colors">
                              Am deja o poliță
                            </h4>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
                          </div>
                          <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">
                            Am deja un contract și am nevoie de clarificări, modificări sau optimizarea protecției.
                          </p>
                        </div>
                      </button>

                      {/* Option 4: Vreau să înțeleg o clauză */}
                      <button
                        type="button"
                        onClick={() => navigateTo('clauza')}
                        className="w-full text-left p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 hover:border-slate-300 transition-all group flex items-start gap-3.5"
                      >
                        <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-sm text-[#06141B] group-hover:text-[#E10600] transition-colors">
                              Vreau să înțeleg o clauză
                            </h4>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
                          </div>
                          <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">
                            Audit gratuit de clauze. Trimite textul sau polița ta pentru o analiză independentă.
                          </p>
                        </div>
                      </button>

                      {/* Option 5: Am nevoie de ajutor pentru o daună */}
                      <button
                        type="button"
                        onClick={() => navigateTo('dauna')}
                        className="w-full text-left p-3.5 rounded-2xl bg-amber-50/70 hover:bg-amber-100/60 border border-amber-200 hover:border-amber-300 transition-all group flex items-start gap-3.5"
                      >
                        <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-sm text-amber-950 group-hover:text-amber-800 transition-colors">
                              Am nevoie de ajutor pentru o daună
                            </h4>
                            <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform shrink-0" />
                          </div>
                          <p className="text-xs text-amber-900/80 mt-0.5 line-clamp-2">
                            Ai un incident activ? Ghidul complet de avizare daune și numerele oficiale de asistență.
                          </p>
                        </div>
                      </button>

                      {/* Quick Contact Line */}
                      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                        <span>Preferi contact direct?</span>
                        <div className="flex items-center gap-2">
                          <a
                            href="tel:+40767110439"
                            className="font-bold text-[#06141B] hover:text-[#E10600] inline-flex items-center gap-1 transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5 text-[#E10600]" />
                            <span>+40 767 110 439</span>
                          </a>
                          <span className="text-slate-300">·</span>
                          <a
                            href="https://wa.me/436509536345"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 transition-colors"
                          >
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ======================================================== */}
                  {/* VIEW 1: AM O ÎNTREBARE                                   */}
                  {/* ======================================================== */}
                  {currentView === 'intrebare' && (
                    <div className="space-y-4">
                      {serverError && (
                        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-[#E10600]">
                          {serverError}
                        </div>
                      )}

                      <form onSubmit={(e) => handleSubmit(e, 'intrebare_generala')} className="space-y-3.5">
                        <input
                          type="text"
                          name="website_honeypot"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                          style={{ display: 'none' }}
                          tabIndex={-1}
                          autoComplete="off"
                        />

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Întrebarea ta despre asigurări <span className="text-[#E10600]">*</span>
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Ex: Cum funcționează franșiza la CASCO? Este acoperită infiltrația prin terasă la Eurocasa? Ce fac dacă vecinul mă inundă?"
                            className="w-full py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                              Numele tău *
                            </label>
                            <input
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Ion Popescu"
                              className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                              Telefon *
                            </label>
                            <input
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="0767 110 439"
                              className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Adresă de e-mail *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ion.popescu@exemplu.ro"
                            className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        <label className="flex items-start gap-2 cursor-pointer text-[11px] text-slate-600 select-none">
                          <input
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="mt-0.5 rounded border-slate-300 text-[#06141B]"
                          />
                          <span>
                            Sunt de acord cu prelucrarea datelor pentru a primi răspunsul la întrebare conform{' '}
                            <Link href="/confidentialitate" target="_blank" className="underline font-bold text-[#06141B]">
                              politicii de confidențialitate
                            </Link>.
                          </span>
                        </label>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 px-4 rounded-xl bg-[#06141B] hover:bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-white" />
                              <span>Se trimite...</span>
                            </>
                          ) : (
                            <>
                              <span>Trimite întrebarea</span>
                              <ArrowRight className="w-4 h-4 text-slate-300" />
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  )}

                  {/* ======================================================== */}
                  {/* VIEW 2: VREAU O ASIGURARE (Hub & Categorii)               */}
                  {/* ======================================================== */}
                  {currentView === 'asigurare' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                          Alege categoria de risc pe care vrei să o asiguri:
                        </span>

                        <div className="grid grid-cols-2 gap-2.5">
                          <Link
                            href="/scenarii/casa"
                            onClick={handleResetAndClose}
                            className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all flex items-center gap-2.5 group"
                          >
                            <Home className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                            <div className="text-xs font-bold text-[#06141B]">Locuință & Casă</div>
                          </Link>

                          <Link
                            href="/scenarii/auto"
                            onClick={handleResetAndClose}
                            className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all flex items-center gap-2.5 group"
                          >
                            <Car className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                            <div className="text-xs font-bold text-[#06141B]">Auto & CASCO</div>
                          </Link>

                          <Link
                            href="/scenarii/calatorii"
                            onClick={handleResetAndClose}
                            className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all flex items-center gap-2.5 group"
                          >
                            <Plane className="w-4 h-4 text-sky-600 group-hover:scale-110 transition-transform" />
                            <div className="text-xs font-bold text-[#06141B]">Călătorii & Sănătate</div>
                          </Link>

                          <Link
                            href="/scenarii/business"
                            onClick={handleResetAndClose}
                            className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all flex items-center gap-2.5 group"
                          >
                            <Briefcase className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
                            <div className="text-xs font-bold text-[#06141B]">Business & IMM</div>
                          </Link>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => navigateTo('asigurare_form')}
                          className="w-full py-3 px-4 rounded-xl bg-[#06141B] hover:bg-slate-900 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                        >
                          <span>Sau cere o ofertă consultativă personalizată</span>
                          <ArrowRight className="w-4 h-4 text-slate-300" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ======================================================== */}
                  {/* VIEW 2-SUB: FORMULAR SOLICITARE OFERTĂ                   */}
                  {/* ======================================================== */}
                  {currentView === 'asigurare_form' && (
                    <div className="space-y-3.5">
                      {serverError && (
                        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-[#E10600]">
                          {serverError}
                        </div>
                      )}

                      <form onSubmit={(e) => handleSubmit(e, 'oferta_noua')} className="space-y-3.5">
                        <input
                          type="text"
                          name="website_honeypot"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                          style={{ display: 'none' }}
                          tabIndex={-1}
                          autoComplete="off"
                        />

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Ce tip de asigurare cauți? *
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

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Detalii despre ce dorești să protejezi <span className="text-slate-400 font-normal lowercase">(opțional)</span>
                          </label>
                          <textarea
                            rows={2}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Ex: Caut CASCO pentru mașină nouă, fără franșiză la furt sau o asigurare completă pentru un apartament în chirie..."
                            className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                              Numele tău *
                            </label>
                            <input
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Ion Popescu"
                              className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                              Telefon *
                            </label>
                            <input
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="0767 110 439"
                              className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Adresă de e-mail *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ion.popescu@exemplu.ro"
                            className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        <label className="flex items-start gap-2 cursor-pointer text-[11px] text-slate-600 select-none">
                          <input
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="mt-0.5 rounded border-slate-300 text-[#06141B]"
                          />
                          <span>
                            Sunt de acord cu prelucrarea datelor pentru calcularea propunerilor conform{' '}
                            <Link href="/confidentialitate" target="_blank" className="underline font-bold text-[#06141B]">
                              politicii de confidențialitate
                            </Link>.
                          </span>
                        </label>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 px-4 rounded-xl bg-[#06141B] hover:bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-white" />
                              <span>Se procesează cererea...</span>
                            </>
                          ) : (
                            <>
                              <span>Cere propunere personalizată</span>
                              <ArrowRight className="w-4 h-4 text-slate-300" />
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  )}

                  {/* ======================================================== */}
                  {/* VIEW 3: AM DEJA O POLIȚĂ                                 */}
                  {/* ======================================================== */}
                  {currentView === 'polita' && (
                    <div className="space-y-4">
                      <div className="space-y-2.5">
                        <button
                          type="button"
                          onClick={() => navigateTo('clauza')}
                          className="w-full text-left p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all group flex items-start gap-3"
                        >
                          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-bold text-[#06141B] group-hover:text-emerald-700 transition-colors">
                              Vreau să verific dacă sunt acoperit la un risc anume
                            </h4>
                            <p className="text-xs text-slate-600 mt-0.5">
                              Trimite clauza sau polița curentă pentru un audit independent al limitărilor și franșizelor.
                            </p>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => navigateTo('polita_form')}
                          className="w-full text-left p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all group flex items-start gap-3"
                        >
                          <FileText className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-bold text-[#06141B] group-hover:text-indigo-700 transition-colors">
                              Vreau optimizarea sau reînnoirea contractului curent
                            </h4>
                            <p className="text-xs text-slate-600 mt-0.5">
                              Solicită o analiză fără costuri a poliței existente pentru condiții mai clare și economii.
                            </p>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => navigateTo('dauna')}
                          className="w-full text-left p-3.5 rounded-2xl bg-amber-50/70 hover:bg-amber-100/60 border border-amber-200 transition-all group flex items-start gap-3"
                        >
                          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-bold text-amber-950 group-hover:text-amber-800 transition-colors">
                              Am un incident și am nevoie de asistență daune
                            </h4>
                            <p className="text-xs text-amber-900/80 mt-0.5">
                              Ghidul complet de notificare a daunei și contactele rapide pentru avizare.
                            </p>
                          </div>
                        </button>

                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                            Consultanță directă cu Cristian Văduva
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Poți discuta direct despre polița ta activă, transferul de contracte sau reînnoire fără comisioane ascunse:
                          </p>
                          <div className="flex flex-wrap gap-2 pt-1">
                            <a
                              href="tel:+40767110439"
                              className="py-2 px-3 rounded-xl bg-[#06141B] text-white text-xs font-bold hover:bg-slate-800 transition-colors inline-flex items-center gap-1.5"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              <span>Sună: +40 767 110 439</span>
                            </a>
                            <a
                              href="https://wa.me/436509536345"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="py-2 px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
                            >
                              <span>WhatsApp Direct</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ======================================================== */}
                  {/* VIEW 3-SUB: VERIFICARE POLIȚĂ ACTIVĂ                     */}
                  {/* ======================================================== */}
                  {currentView === 'polita_form' && (
                    <div className="space-y-3.5">
                      {serverError && (
                        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-[#E10600]">
                          {serverError}
                        </div>
                      )}

                      <form onSubmit={(e) => handleSubmit(e, 'asistenta_polita')} className="space-y-3.5">
                        <input
                          type="text"
                          name="website_honeypot"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                          style={{ display: 'none' }}
                          tabIndex={-1}
                          autoComplete="off"
                        />

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Ce poliță ai încheiată? *
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

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Ce dorești să clarificăm sau să îmbunătățim? <span className="text-[#E10600]">*</span>
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Ex: Am o poliță CASCO la o companie și aș vrea să știu ce franșiză am la daună parțială sau când expiră contractul..."
                            className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                              Numele tău *
                            </label>
                            <input
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Ion Popescu"
                              className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                              Telefon *
                            </label>
                            <input
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="0767 110 439"
                              className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Adresă de e-mail *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ion.popescu@exemplu.ro"
                            className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        <label className="flex items-start gap-2 cursor-pointer text-[11px] text-slate-600 select-none">
                          <input
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="mt-0.5 rounded border-slate-300 text-[#06141B]"
                          />
                          <span>
                            Sunt de acord cu prelucrarea datelor pentru asistență conform{' '}
                            <Link href="/confidentialitate" target="_blank" className="underline font-bold text-[#06141B]">
                              politicii de confidențialitate
                            </Link>.
                          </span>
                        </label>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 px-4 rounded-xl bg-[#06141B] hover:bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-white" />
                              <span>Se transmite...</span>
                            </>
                          ) : (
                            <>
                              <span>Solicită verificarea poliței</span>
                              <ArrowRight className="w-4 h-4 text-slate-300" />
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  )}

                  {/* ======================================================== */}
                  {/* VIEW 4: AUDIT CLAUZĂ                                     */}
                  {/* ======================================================== */}
                  {currentView === 'clauza' && (
                    <div className="space-y-3.5">
                      {serverError && (
                        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-[#E10600]">
                          {serverError}
                        </div>
                      )}

                      <form onSubmit={(e) => handleSubmit(e, 'audit_clauza')} className="space-y-3.5">
                        <input
                          type="text"
                          name="website_honeypot"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                          style={{ display: 'none' }}
                          tabIndex={-1}
                          autoComplete="off"
                        />

                        {/* 1. Insurance Object */}
                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            1. Ce tip de contract sau risc vrei să verifici? <span className="text-[#E10600]">*</span>
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

                        {/* 2. Clause Details */}
                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            2. Detalii despre clauză sau situație <span className="text-slate-400 font-normal lowercase">(opțional)</span>
                          </label>
                          <textarea
                            rows={2}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Ex: Am o clauză despre infiltrații la acoperiș și vreau să știu dacă acoperă și terasa necirculabilă..."
                            className="w-full py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        {/* 3. Contact Details */}
                        <div className="pt-2 border-t border-slate-100 space-y-3">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                            3. Unde îți trimitem analiza independentă?
                          </span>

                          <div className="relative">
                            <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Numele tău complet *"
                              className="w-full py-2.5 pl-9 pr-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="relative">
                              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                              <input
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Număr telefon *"
                                className="w-full py-2.5 pl-9 pr-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                              />
                            </div>

                            <div className="relative">
                              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                              <input
                                type="email"
                                required
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
                              type="checkbox"
                              checked={consent}
                              onChange={(e) => setConsent(e.target.checked)}
                              className="mt-0.5 rounded border-slate-300 text-[#06141B] focus:ring-[#06141B]"
                            />
                            <span>
                              Sunt de acord cu prelucrarea datelor în conformitate cu{' '}
                              <Link
                                href="/confidentialitate"
                                target="_blank"
                                className="underline text-[#06141B] font-semibold hover:text-[#E10600]"
                              >
                                politica de confidențialitate
                              </Link>{' '}
                              pentru a primi analiza clauzelor.
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
                    </div>
                  )}

                  {/* ======================================================== */}
                  {/* VIEW 5: AM NEVOIE DE AJUTOR PENTRU O DAUNĂ               */}
                  {/* ======================================================== */}
                  {currentView === 'dauna' && (
                    <div className="space-y-4">
                      {/* Prominent link to the dedicated claims guide */}
                      <Link
                        href="/ghid-generali?tab=daune"
                        onClick={handleResetAndClose}
                        className="p-4 rounded-2xl bg-[#06141B] text-white hover:bg-slate-900 transition-all flex items-center justify-between group shadow-lg"
                      >
                        <div className="space-y-1">
                          <div className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>Procedură oficială</span>
                          </div>
                          <div className="font-extrabold text-sm sm:text-base">
                            Deschide Ghidul de Notificare Daune Generali
                          </div>
                          <p className="text-xs text-slate-300">
                            Termene de avizare, documente necesare și checklist foto complet.
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1.5 transition-transform shrink-0 ml-3" />
                      </Link>

                      {/* Official Call Center Numbers */}
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                          Numere oficiale avizare daune:
                        </span>

                        <div className="space-y-2">
                          <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                            <div>
                              <div className="text-xs font-bold text-[#06141B]">
                                Call Center Daune Generali
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Luni – Vineri 09:00 – 17:00
                              </div>
                            </div>
                            <a
                              href="tel:0372010202"
                              className="py-1.5 px-3 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors inline-flex items-center gap-1"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              <span>0372.010.202</span>
                            </a>
                          </div>

                          <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                            <div>
                              <div className="text-xs font-bold text-[#06141B]">
                                Asistență Broker Cristian Văduva
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Ghidaj pentru deschiderea dosarului
                              </div>
                            </div>
                            <a
                              href="tel:+40767110439"
                              className="py-1.5 px-3 rounded-lg bg-[#06141B] text-white text-xs font-bold hover:bg-slate-800 transition-colors inline-flex items-center gap-1"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              <span>+40 767 110 439</span>
                            </a>
                          </div>
                        </div>

                        {/* Critical Damage Rule */}
                        <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
                          <span className="font-bold text-amber-800 shrink-0">⚠️ Important:</span>
                          <span>
                            Fotografiază detaliat toate avariile înainte de curățenie sau remediere provizorie și conservă probele fizice pentru inspectorul de daune.
                          </span>
                        </div>
                      </div>

                      {/* Callback / Direct Claim Request Form Button */}
                      <button
                        type="button"
                        onClick={() => navigateTo('dauna_form')}
                        className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[#06141B] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4 text-[#E10600]" />
                        <span>Sau solicită suport direct pentru dosar</span>
                      </button>
                    </div>
                  )}

                  {/* ======================================================== */}
                  {/* VIEW 5-SUB: FORMULAR ASISTENȚĂ DAUNĂ                    */}
                  {/* ======================================================== */}
                  {currentView === 'dauna_form' && (
                    <div className="space-y-3.5">
                      {serverError && (
                        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-[#E10600]">
                          {serverError}
                        </div>
                      )}

                      <form onSubmit={(e) => handleSubmit(e, 'asistenta_dauna')} className="space-y-3.5">
                        <input
                          type="text"
                          name="website_honeypot"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                          style={{ display: 'none' }}
                          tabIndex={-1}
                          autoComplete="off"
                        />

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Scurtă descriere incident / avarie *
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Ex: Am fost implicat într-un accident rutier și am nevoie de ajutor cu constatarea amiabilă / Mi-a fost inundat apartamentul de la etajul superior..."
                            className="w-full py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                              Numele tău *
                            </label>
                            <input
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Ion Popescu"
                              className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                              Telefon *
                            </label>
                            <input
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="0767 110 439"
                              className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Adresă de e-mail *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ion.popescu@exemplu.ro"
                            className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-300 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        <label className="flex items-start gap-2 cursor-pointer text-[11px] text-slate-600 select-none">
                          <input
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="mt-0.5 rounded border-slate-300 text-[#06141B]"
                          />
                          <span>
                            Sunt de acord cu prelucrarea datelor pentru contact de urgență conform{' '}
                            <Link href="/confidentialitate" target="_blank" className="underline font-bold text-[#06141B]">
                              politicii de confidențialitate
                            </Link>.
                          </span>
                        </label>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 px-4 rounded-xl bg-[#06141B] hover:bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-white" />
                              <span>Se transmite solicitarea...</span>
                            </>
                          ) : (
                            <>
                              <span>Trimite solicitarea de asistență</span>
                              <ArrowRight className="w-4 h-4 text-slate-300" />
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
