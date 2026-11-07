'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  MinusCircle,
  Printer,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Info,
  ExternalLink,
  Home,
  Car,
  Plane,
  FileText,
  Phone,
  AlertCircle,
  AlertTriangle,
  ArrowUpRight
} from 'lucide-react';
import {
  GENERALI_AUDIT_PRODUCTS,
  GeneraliAuditProduct,
  GeneraliAuditClause,
  AuditAnswer,
  evaluateGeneraliPolicyAudit
} from '@/data/generaliPolicyAuditData';
import { trackEvent } from '@/lib/analytics';

export default function PolicyChecklistPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <PolicyChecklistContent />
    </Suspense>
  );
}

function PolicyChecklistContent() {
  const searchParams = useSearchParams();
  const paramProduct = searchParams.get('product') as 'eurocasa' | 'casco' | 'turist_plus' | null;

  // Selected Generali Product (default to eurocasa)
  const [selectedProductId, setSelectedProductId] = useState<'eurocasa' | 'casco' | 'turist_plus'>(
    paramProduct && GENERALI_AUDIT_PRODUCTS[paramProduct] ? paramProduct : 'eurocasa'
  );

  // User answers per clause: Record<clauseId, AuditAnswer>
  const [answers, setAnswers] = useState<Record<string, AuditAnswer>>({});

  // Optional contextual note (non-sensitive: e.g. "Apartament 3 camere București" or "Volkswagen Golf 2021")
  const [contextNote, setContextNote] = useState<string>('');

  const currentProduct: GeneraliAuditProduct = GENERALI_AUDIT_PRODUCTS[selectedProductId] || GENERALI_AUDIT_PRODUCTS.eurocasa;

  // Answer handler
  const handleAnswer = (clauseId: string, answer: AuditAnswer) => {
    setAnswers((prev) => ({
      ...prev,
      [clauseId]: answer
    }));

    trackEvent('audit_answer_select', {
      product: selectedProductId,
      clauseId,
      answer
    });
  };

  // Reset answers for current product
  const handleReset = () => {
    setAnswers({});
  };

  // Switch product
  const handleProductChange = (prodId: 'eurocasa' | 'casco' | 'turist_plus') => {
    setSelectedProductId(prodId);
    setAnswers({});
  };

  // Calculate audit evaluation
  const evaluation = useMemo(() => {
    return evaluateGeneraliPolicyAudit(selectedProductId, answers);
  }, [selectedProductId, answers]);

  // Handle PDF Export / Print via native browser window.print()
  const handlePrintPDF = () => {
    trackEvent('audit_pdf_export', {
      product: selectedProductId,
      score: evaluation.scoreDisplay,
      confirmedCount: evaluation.confirmedCount,
      declaredAbsentCount: evaluation.declaredAbsentCount,
      unverifiedCount: evaluation.unverifiedCount
    });
    window.print();
  };

  const currentDateFormatted = new Intl.DateTimeFormat('ro-RO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date());

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 print:min-h-0 print:bg-white print:p-0 print:m-0">
      
      {/* ========================================================
          ON-SCREEN INTERFACE (HIDDEN DURING PRINT)
         ======================================================== */}
      <div id="mini-audit-screen-interface" data-print-hide="true" className="print:hidden max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
          <Link href="/" className="hover:text-slate-900 transition-colors">WHAT IF INSURANCE</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">MINI-AUDIT GENERALI</span>
        </div>

        {/* Title & Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E10600]/10 border border-[#E10600]/20 text-[#E10600] text-xs font-mono font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mini-Audit Contractual Interactiv · Referință Generali România</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#06141B] tracking-tight">
            Verificarea Poliței Tale
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Evaluează clauzele critice din polița ta înainte de producerea unei daune. Răspunsurile reflectă exclusiv declarația ta și nu constituie o verificare documentară juridică sau decizie de daună. Fără colectare de date personale, fără CNP, fără încărcare de documente.
          </p>
        </div>

        {/* STEP 1: Select Generali Product Tabs */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
            Pasul 1 · Selectează Tipul Poliței Generali Documentate
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Eurocasa */}
            <button
              type="button"
              onClick={() => handleProductChange('eurocasa')}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                selectedProductId === 'eurocasa'
                  ? 'border-[#06141B] bg-slate-900 text-white shadow-md'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Home className={`w-5 h-5 ${selectedProductId === 'eurocasa' ? 'text-[#E10600]' : 'text-slate-500'}`} />
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                  selectedProductId === 'eurocasa' ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  Mod. E18 (Complet)
                </span>
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base">Generali Eurocasa</div>
                <div className={`text-xs mt-1 ${selectedProductId === 'eurocasa' ? 'text-slate-300' : 'text-slate-500'}`}>
                  Locuințe & bunuri, conducte, vecini, nelocuire
                </div>
              </div>
            </button>

            {/* CASCO Perfecto */}
            <button
              type="button"
              onClick={() => handleProductChange('casco')}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                selectedProductId === 'casco'
                  ? 'border-[#06141B] bg-slate-900 text-white shadow-md'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Car className={`w-5 h-5 ${selectedProductId === 'casco' ? 'text-[#E10600]' : 'text-slate-500'}`} />
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                  selectedProductId === 'casco' ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  Mod. CSC 18 (Complet)
                </span>
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base">Generali CASCO Perfecto</div>
                <div className={`text-xs mt-1 ${selectedProductId === 'casco' ? 'text-slate-300' : 'text-slate-500'}`}>
                  Coliziune, parcare, grindină PDR, reprezentanță
                </div>
              </div>
            </button>

            {/* Turist Plus Premium */}
            <button
              type="button"
              onClick={() => handleProductChange('turist_plus')}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                selectedProductId === 'turist_plus'
                  ? 'border-[#06141B] bg-slate-900 text-white shadow-md'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Plane className={`w-5 h-5 ${selectedProductId === 'turist_plus' ? 'text-[#E10600]' : 'text-slate-500'}`} />
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                  selectedProductId === 'turist_plus' ? 'bg-amber-400 text-slate-900' : 'bg-amber-100 text-amber-900'
                }`}>
                  Doar PID 2025
                </span>
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base">Turist Plus Premium</div>
                <div className={`text-xs mt-1 ${selectedProductId === 'turist_plus' ? 'text-slate-300' : 'text-slate-500'}`}>
                  Urgențe medicale 50k €, repatriere, bagaje (PID)
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Documentation sufficiency banner if PID only */}
        {currentProduct.documentationSufficiency === 'DOCUMENTATIE_INSUFICIENTA' && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5">Documentație contractuală completă insuficientă în proiect</span>
              Pentru <strong>{currentProduct.title}</strong> este disponibil exclusiv Documentul de Informare privind Produsul de Asigurare (PID 2025). Condițiile contractuale integrale, definițiile exhaustive și excluderile complete nu sunt prezente în baza locală a proiectului. Întrebările de mai jos reflectă sumarul din PID.
            </div>
          </div>
        )}

        {/* STEP 2: Optional Context Note */}
        <div className="mb-8 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <label htmlFor="contextNote" className="text-xs font-mono uppercase text-slate-500 font-bold block">
                Pasul 2 · Detaliu Contextual pentru Raport (Opțional)
              </label>
              <p className="text-xs text-slate-600 mt-0.5">
                Ex: „Apartament 3 camere bloc 2018” sau „Volkswagen Golf 2022”. Nu introduce CNP, parole sau date sensibile.
              </p>
            </div>
            <input
              id="contextNote"
              type="text"
              placeholder="Ex: Apartament proprietate personală"
              value={contextNote}
              onChange={(e) => setContextNote(e.target.value)}
              className="w-full sm:w-72 px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>
        </div>

        {/* LIVE SCORECARD BAR */}
        <div className="sticky top-20 z-20 mb-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#06141B] text-white flex items-center justify-center font-black text-lg font-mono">
              {evaluation.confirmedCount}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black text-[#06141B]">
                  {evaluation.scoreDisplay} Clauze Declarate ca Identificate
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">
                  ({evaluation.scoreRatio}%)
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs mt-0.5 font-mono flex-wrap">
                <span className="text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {evaluation.confirmedCount} confirmate declarativ
                </span>
                <span className="text-amber-700 flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5" /> {evaluation.unverifiedCount} neverificate
                </span>
                {evaluation.declaredAbsentCount > 0 && (
                  <span className="text-red-700 flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" /> {evaluation.declaredAbsentCount} declarate absente
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handlePrintPDF}
              className="flex-1 sm:flex-none py-2.5 px-4 rounded-full bg-[#E10600] hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
              title="Deschide fereastra nativă de tipărire pentru salvare în format PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Tipărește / Salvează ca PDF</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="py-2.5 px-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-mono flex items-center justify-center transition-colors"
              title="Resetează răspunsurile"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* STEP 3: Clause Cards List */}
        <div className="space-y-4 mb-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Pasul 3 · Răspunde la Întrebările Despre Clauze ({currentProduct.clauses.length} elemente)
            </span>
            <span className="text-xs text-slate-500">
              Contract de referință: <strong className="text-slate-800">{currentProduct.officialContractCode}</strong>
            </span>
          </div>

          {currentProduct.clauses.map((clause, idx) => {
            const currentAns = answers[clause.id];
            return (
              <div
                key={clause.id}
                className={`p-5 sm:p-6 rounded-3xl border transition-all ${
                  currentAns === 'DA'
                    ? 'bg-white border-emerald-300 shadow-sm'
                    : currentAns === 'NU'
                    ? 'bg-white border-red-300 shadow-sm'
                    : currentAns === 'NU_SE_APLICA'
                    ? 'bg-slate-100/60 border-slate-200 opacity-60'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                {/* Clause Title & Reference */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-base text-[#06141B]">
                      {clause.clauseName}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {clause.documentationSufficiency === 'DOCUMENTATIE_INSUFICIENTA' && (
                      <span className="text-[10px] font-mono text-amber-900 bg-amber-100 px-2 py-0.5 rounded font-bold">
                        Doar PID
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                      {clause.categoryTag}
                    </span>
                  </div>
                </div>

                {/* Audit Question (Prominent) */}
                <div className="my-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1">
                    Întrebare de Audit Declarativ
                  </div>
                  <p className="text-sm font-semibold text-slate-900 leading-snug">
                    {clause.auditQuestion}
                  </p>
                </div>

                {/* Context & Reference Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 mb-3">
                  <div>
                    <span className="font-bold text-slate-800 block">De ce este important:</span>
                    <span>{clause.whyItMatters}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">Unde verifici în poliță:</span>
                    <span className="font-mono text-[11px] text-slate-500">{clause.whereToCheckInPolicy}</span>
                  </div>
                </div>

                {/* Relevant conditions & limits */}
                <div className="mb-4 p-3 rounded-xl bg-slate-100/70 border border-slate-200 text-xs text-slate-600">
                  <span className="font-bold text-slate-700 block mb-0.5">Condiții contractuale & limite de referință:</span>
                  <p className="text-[11px] leading-relaxed text-slate-600">{clause.relevantConditionsAndLimits}</p>
                  <div className="mt-1 text-[10px] font-mono text-slate-500">
                    Sursă: {clause.exactDocumentName} ({clause.documentVersionDate}) · {clause.exactClauseSection}
                  </div>
                </div>

                {/* 4 Interactive Answer Buttons with corrected semantics */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleAnswer(clause.id, 'DA')}
                    className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      currentAns === 'DA'
                        ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-600/30'
                        : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
                    }`}
                    title="Confirmat de utilizator / Clauză identificată declarativ"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>DA (Confirmat declarativ)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAnswer(clause.id, 'NU')}
                    className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      currentAns === 'NU'
                        ? 'bg-red-600 text-white shadow-sm ring-2 ring-red-600/30'
                        : 'bg-red-50 text-red-800 hover:bg-red-100 border border-red-200'
                    }`}
                    title="Declarat absent de utilizator / Necesită verificare documentară"
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>NU (Declarat absent)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAnswer(clause.id, 'NU_STIU')}
                    className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      currentAns === 'NU_STIU' || !currentAns
                        ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-600/30'
                        : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
                    }`}
                    title="Neverificat în poliță"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>NU ȘTIU (Neverificat)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAnswer(clause.id, 'NU_SE_APLICA')}
                    className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      currentAns === 'NU_SE_APLICA'
                        ? 'bg-slate-700 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                    }`}
                    title="Nerelevant pentru situația declarată"
                  >
                    <MinusCircle className="w-3.5 h-3.5" />
                    <span>NU SE APLICĂ (Nerelevant)</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Legal & Methodological Disclaimer */}
        <div className="p-5 rounded-3xl bg-amber-50/90 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3.5 mb-10">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block mb-1">Notă Legală Obligatorie & Limitările Evaluării</span>
            {evaluation.mandatoryDisclaimer}
            <span className="block mt-1 text-xs text-amber-800">
              Acest instrument educațional nu reprezintă o decizie de daună, o autorizare instituțională sau o confirmare prealabilă a acoperirii din partea Generali România. Interpretarea definitivă a oricărui dosar aparține exclusiv inspectorilor de daună conform contractului original încheiat.
            </span>
          </div>
        </div>

        {/* CTA Card for Advisory Consultation */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#06141B] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold mb-1">
              Consultanță Gratuită Cristian Văduva
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Vrei o verificare profesională a poliței tale Generali?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
              WHAT IF INSURANCE este un instrument educațional declarativ. Pentru auditul documentar contractual, optimizarea franșizelor și consultanță individuală dedicată, accesează platforma de consultanță.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={handlePrintPDF}
              className="py-3 px-5 rounded-full bg-white hover:bg-slate-100 text-[#06141B] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm shrink-0"
            >
              <Printer className="w-4 h-4 text-[#E10600]" />
              <span>Tipărește / Salvează ca PDF</span>
            </button>
            <a
              href="https://insurance.cristianvaduva.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all border border-slate-700 shrink-0"
            >
              <span>Consultanță: insurance.cristianvaduva.com</span>
              <ArrowUpRight className="w-4 h-4 text-slate-300" />
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================
          PRINTABLE PDF REPORT LAYOUT (VISIBLE ONLY WHEN PRINTING)
          Styled strictly for A4 print output with Romanian diacritics
         ======================================================== */}
      <div className="hidden print:block p-8 max-w-4xl mx-auto bg-white text-slate-900 font-sans leading-normal">
        
        {/* Printable Header */}
        <div className="border-b-2 border-slate-900 pb-5 mb-5 flex justify-between items-start">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-[#E10600] uppercase">
              WHAT IF INSURANCE · RISK ADVISORY
            </div>
            <h1 className="text-2xl font-black text-slate-900 mt-1">
              Raport Mini-Audit Clauze Poliță Asigurare
            </h1>
            <div className="text-sm font-semibold text-slate-700 mt-0.5">
              Produs evaluat: {currentProduct.title} ({currentProduct.officialContractCode})
            </div>
            {currentProduct.documentationSufficiency === 'DOCUMENTATIE_INSUFICIENTA' && (
              <div className="text-xs text-amber-800 font-semibold mt-0.5">
                [Atenție: Bază documentară exclusivă din PID 2025 — Condiții contractuale complete neintegrate în proiect]
              </div>
            )}
            {contextNote && (
              <div className="text-xs text-slate-600 mt-1">
                Obiect asigurat / Detaliu contextual: <strong>{contextNote}</strong>
              </div>
            )}
          </div>
          <div className="text-right text-xs font-mono text-slate-500">
            <div>Data generării: {currentDateFormatted}</div>
            <div>Consultant Partener: Cristian Văduva</div>
            <div>Telefon: +40 767 110 439</div>
          </div>
        </div>

        {/* Score Summary Box in Print */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-4 mb-6 flex justify-between items-center break-inside-avoid">
          <div>
            <div className="text-xs font-mono font-bold uppercase text-slate-500">
              Scor Clauze Declarate de Utilizator
            </div>
            <div className="text-2xl font-black text-slate-900">
              {evaluation.scoreDisplay} Clauze Declarate ca Identificate ({evaluation.scoreRatio}%)
            </div>
            <div className="text-xs text-slate-600 mt-0.5">
              {evaluation.confirmedCount} confirmate declarativ · {evaluation.unverifiedCount} neverificate · {evaluation.declaredAbsentCount} declarate absente
            </div>
          </div>
          <div className="text-right max-w-xs text-[10px] text-slate-500 italic">
            {evaluation.mandatoryDisclaimer}
          </div>
        </div>

        {/* Detailed Clauses Table in Print */}
        <div className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-700 border-b border-slate-200 pb-1 mb-3">
            Detaliul Clauzelor Analizate
          </h2>

          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-300 text-slate-500 font-mono text-[10px] uppercase">
                <th className="py-2 pr-2">Nr</th>
                <th className="py-2 pr-3">Denumire Clauză & Document Oficial</th>
                <th className="py-2 pr-3">Întrebare & Unde se verifică</th>
                <th className="py-2 text-right">Răspuns Declarat</th>
              </tr>
            </thead>
            <tbody>
              {currentProduct.clauses.map((clause, i) => {
                const ans = answers[clause.id] || 'NU_STIU';
                return (
                  <tr key={clause.id} className="border-b border-slate-200 py-2 break-inside-avoid">
                    <td className="py-2 pr-2 font-mono font-bold align-top text-slate-400">{i + 1}</td>
                    <td className="py-2 pr-3 align-top">
                      <strong className="block text-slate-900">{clause.clauseName}</strong>
                      <span className="text-[10px] text-slate-500 font-mono block">{clause.exactDocumentName} ({clause.documentVersionDate})</span>
                      <span className="text-[10px] text-slate-400 font-mono block">{clause.exactClauseSection}</span>
                      {clause.documentationSufficiency === 'DOCUMENTATIE_INSUFICIENTA' && (
                        <span className="text-[9px] text-amber-700 font-mono block font-bold">Documentație contractuală completă insuficientă (PID)</span>
                      )}
                    </td>
                    <td className="py-2.5 pr-3 align-top text-slate-700">
                      <div className="font-medium text-slate-900">{clause.auditQuestion}</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">Unde se verifică: {clause.whereToCheckInPolicy}</div>
                      {clause.whyItMatters && (
                        <div className="text-[10px] text-slate-600 mt-1 leading-snug">
                          <strong className="text-slate-800">Impact practic:</strong> {clause.whyItMatters}
                        </div>
                      )}
                      {clause.relevantConditionsAndLimits && (
                        <div className="text-[9.5px] text-slate-500 font-mono mt-0.5 leading-tight">
                          Condiții &amp; limite oficiale: {clause.relevantConditionsAndLimits}
                        </div>
                      )}
                    </td>
                    <td className="py-2 text-right align-top font-bold font-mono text-[11px] whitespace-nowrap">
                      {ans === 'DA' ? (
                        <span className="text-emerald-700">Confirmat declarativ</span>
                      ) : ans === 'NU' ? (
                        <span className="text-red-700">Declarat absent</span>
                      ) : ans === 'NU_SE_APLICA' ? (
                        <span className="text-slate-400">Nerelevant</span>
                      ) : (
                        <span className="text-amber-700">Neverificat</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Recommendations & Action Plan for Unverified Items */}
        {evaluation.unverifiedClauses.length > 0 && (
          <div className="mb-6 p-4 rounded-xl border border-amber-300 bg-amber-50 text-xs text-amber-950 break-inside-avoid">
            <span className="font-bold block mb-1">
              Recomandări pentru Clauzele Neverificate ({evaluation.unverifiedCount} elemente):
            </span>
            <ul className="list-disc list-inside space-y-0.5 text-[11px]">
              {evaluation.unverifiedClauses.map((cl) => (
                <li key={cl.id}>
                  <strong>{cl.clauseName}:</strong> {cl.recommendedAction}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Legal Disclaimer in Print */}
        <div className="border-t border-slate-300 pt-4 text-[10px] text-slate-500 leading-relaxed break-inside-avoid">
          <p>
            <strong>DECLINARE DE RESPONSABILITATE:</strong> Acest raport are scop strict educativ și orientativ. Datele reflectă exclusiv răspunsurile declarate de utilizator și documentația contractuală de referință a produsului <em>{currentProduct.officialContractCode}</em>. Nu reprezintă o verificare documentară juridică a contractului tău individual, un certificat de asigurare, o ofertă sau o confirmare prealabilă de acordare a despăgubirii în caz de daună din partea Generali România.
          </p>
          <div className="mt-3 flex justify-between items-center text-slate-400 font-mono text-[9px]">
            <span>Generat prin WHAT IF INSURANCE (whatifinsurance.cristianvaduva.com)</span>
            <span>Cristian Văduva · Risk Advisory · Tel: +40 767 110 439</span>
          </div>
        </div>

      </div>

    </div>
  );
}
