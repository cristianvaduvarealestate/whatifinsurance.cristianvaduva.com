'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Shield, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  ExternalLink, 
  FileText, 
  Home, 
  Car, 
  Plane, 
  Briefcase, 
  Clock, 
  ArrowRight,
  Sparkles,
  HelpCircle,
  Camera,
  CheckSquare
} from 'lucide-react';
import { GENERALI_PRODUCTS, GENERALI_CLAIMS_GUIDE } from '@/data/generaliKnowledgeBase';

export default function GhidGeneraliPage() {
  const [activeTab, setActiveTab] = useState<'casa' | 'auto' | 'calatorii' | 'business' | 'daune'>('casa');

  const productKeyMap: Record<string, string> = {
    casa: 'eurocasa',
    auto: 'casco',
    calatorii: 'turist_plus_premium',
    business: 'asigurare_imm',
  };

  const currentProduct = activeTab !== 'daune' ? GENERALI_PRODUCTS[productKeyMap[activeTab]] : null;

  return (
    <div className="min-h-screen bg-slate-50 text-[#06141B]">
      
      {/* Hero Header */}
      <div className="bg-[#06141B] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E10600]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold tracking-wider text-red-300 mb-6 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse" />
            PARTENERIAT EXCLUSIV · GENERALI ROMÂNIA
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-3xl text-white">
            <span className="text-white">Ghidul Oficial al Asigurărilor</span>{' '}
            <span className="text-[#E10600]">Generali România</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Produse verificate, condiții contractuale oficiale, pachete de clauze extinse și procedurile oficiale de notificare a daunelor pentru fiecare categorie de asigurare.
          </p>

          {/* Quick Contact & Verified Intermediary Badge */}
          <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E10600] flex items-center justify-center font-black text-white shrink-0 shadow-lg shadow-red-900/30">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Ghid Independent &amp; Asistență
                </span>
                <span className="text-sm font-bold text-white">
                  Cristian Văduva · Powered by CristianVaduva.com
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:0372010202"
                className="py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-400" />
                <span>Call Center Daune: 0372.010.202</span>
              </a>

              <a
                href="tel:0767110439"
                className="py-2.5 px-4 rounded-xl bg-[#E10600] hover:bg-[#c20500] text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                <span>Consultanță &amp; Asistență: +40 767 110 439</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-14 z-30 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 sm:space-x-8 overflow-x-auto py-2.5 no-scrollbar text-xs sm:text-sm font-semibold">
            <button
              onClick={() => setActiveTab('casa')}
              className={`py-2 px-3 rounded-lg flex items-center gap-2 transition-colors whitespace-nowrap ${
                activeTab === 'casa'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Locuință (Eurocasa)</span>
            </button>

            <button
              onClick={() => setActiveTab('auto')}
              className={`py-2 px-3 rounded-lg flex items-center gap-2 transition-colors whitespace-nowrap ${
                activeTab === 'auto'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Auto (CASCO Perfecto)</span>
            </button>

            <button
              onClick={() => setActiveTab('calatorii')}
              className={`py-2 px-3 rounded-lg flex items-center gap-2 transition-colors whitespace-nowrap ${
                activeTab === 'calatorii'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Plane className="w-4 h-4" />
              <span>Călătorii (Turist Plus)</span>
            </button>

            <button
              onClick={() => setActiveTab('business')}
              className={`py-2 px-3 rounded-lg flex items-center gap-2 transition-colors whitespace-nowrap ${
                activeTab === 'business'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Companii (Asigurarea IMM)</span>
            </button>

            <button
              onClick={() => setActiveTab('daune')}
              className={`py-2 px-3 rounded-lg flex items-center gap-2 transition-colors whitespace-nowrap ${
                activeTab === 'daune'
                  ? 'bg-[#E10600] text-white shadow-xs'
                  : 'text-[#E10600] hover:bg-red-50'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Ghid Notificare Daune</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* =========================================================================
            PRODUCT VIEW (Casa / Auto / Călătorii / Business)
           ========================================================================= */}
        {currentProduct && activeTab !== 'daune' && (
          <div className="space-y-10 animate-fadeIn">
            
            {/* Product Overview Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold">
                  {currentProduct.categoryBadge}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Document oficial: <strong className="text-slate-800">{currentProduct.officialContractCode}</strong>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#06141B] tracking-tight">
                {currentProduct.commercialName}
              </h2>
              <p className="text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
                {currentProduct.summary}
              </p>

              {/* Verified Product Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                    Regim Franșiză
                  </span>
                  <span className="text-xs font-semibold text-slate-900 mt-1 block">
                    {currentProduct.deductiblesInfo}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                    Termen Avizare Daună
                  </span>
                  <span className="text-xs font-semibold text-slate-900 mt-1 block">
                    {currentProduct.claimsNoticeDeadline}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                    Documentație Oficială
                  </span>
                  <a
                    href={currentProduct.officialSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#E10600] hover:underline flex items-center gap-1 mt-1"
                  >
                    <span>Vizualizează pe Generali.ro</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Core Coverages vs Free Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Base Coverages */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-lg font-bold text-[#06141B]">
                    Acoperiri Principale în Pachetul de Bază
                  </h3>
                </div>
                <div className="space-y-4">
                  {currentProduct.keyBaseCoverages.map((cov, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60">
                      <div className="flex items-center justify-between">
                        <strong className="text-xs font-bold text-slate-900">{cov.title}</strong>
                        {cov.highlight && (
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold">
                            Inclus Standard
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {cov.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Free Benefits */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#E10600]" />
                  <h3 className="text-lg font-bold text-[#06141B]">
                    Gratuități &amp; Beneficii Suplimentare Incluse
                  </h3>
                </div>
                <div className="space-y-4">
                  {currentProduct.freeIncludedBenefits.map((ben, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-red-50/30 border border-red-100">
                      <strong className="text-xs font-bold text-[#06141B] block">{ben.title}</strong>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {ben.description}
                      </p>
                    </div>
                  ))}
                  
                  <div className="p-4 rounded-xl bg-slate-900 text-white mt-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 block font-bold">
                      Consultantul tău Generali
                    </span>
                    <p className="text-xs text-slate-300 mt-1">
                      Ai nevoie de o analiză punctuală a bunurilor tale? Cristian Văduva te ajută să configurezi corect sumele asigurate și franșizele.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-red-300 mt-3"
                    >
                      <span>Solicită consultanță dedicată</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Riders (The Core Insurance Value) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="max-w-2xl mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                  Module Suplimentare
                </span>
                <h3 className="text-xl font-bold text-[#06141B] mt-1">
                  Clauze Opționale Esențiale (Diferența la Daună)
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Cele mai frecvente litigii apar din cauza clauzelor omise la emiterea contractului. Acestea sunt opțiunile cheie pe care le poți adăuga pe polița ta Generali:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentProduct.optionalRiders.map((rider) => (
                  <div
                    key={rider.code}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <strong className="text-xs font-bold text-slate-900">
                          {rider.name}
                        </strong>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold shrink-0">
                          {rider.code}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {rider.description}
                      </p>
                      
                      <div className="mt-3 p-2.5 rounded-lg bg-white border border-slate-200/80 text-[11px] text-slate-700">
                        <strong className="text-slate-900 block mb-0.5">Scenariu real de risc:</strong>
                        {rider.practicalScenario}
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500">
                      Recomandat pentru: <strong className="text-slate-800">{rider.recommendedFor}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Studio Connection */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-[#06141B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold block">
                  Studio Social Media &amp; Educație Vizuală
                </span>
                <h4 className="text-lg font-bold">
                  Vezi scenariile practice create în Social Content Studio
                </h4>
                <p className="text-xs text-slate-300 max-w-xl">
                  Am transformat aceste condiții contractuale în grafice editoriale clare pentru Instagram, Facebook și LinkedIn.
                </p>
              </div>
              <Link
                href="/studio"
                className="py-3 px-6 rounded-full bg-[#E10600] hover:bg-[#c20500] text-white text-xs font-bold whitespace-nowrap transition-all shadow-md shrink-0 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Deschide Studio Share</span>
              </Link>
            </div>
          </div>
        )}

        {/* =========================================================================
            CLAIMS GUIDE VIEW (Proceduri Oficiale Notificare Daune pe Produse)
           ========================================================================= */}
        {activeTab === 'daune' && (
          <div className="space-y-12 animate-fadeIn">
            
            {/* Official Contact & Rapid Dispatch Bar */}
            <div className="bg-[#06141B] text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-800">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E10600]/20 text-[#E10600] text-xs font-mono font-bold tracking-wider mb-2 border border-[#E10600]/30">
                    <Shield className="w-3.5 h-3.5" />
                    CENTRALE OFICIALE GENERALI ROMÂNIA
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    Dispecerat &amp; Avizare Rapidă Daune
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
                    Contactează canalul oficial dedicat produsului tău pentru asistență de urgență și deschiderea dosarului de daună fără întârzieri.
                  </p>
                </div>

                <a
                  href={GENERALI_CLAIMS_GUIDE.onlineNoticeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-xl bg-[#E10600] hover:bg-[#c20500] text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-md shrink-0 transition-all"
                >
                  <span>Portal Generali Daune Online</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* 3 Dedicated Phone Channels */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <a
                  href="tel:0372010202"
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-start gap-3.5 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-[#E10600] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                      Locuință &amp; Daune Generale (L-V 09:00-17:00)
                    </span>
                    <strong className="text-sm font-bold text-white group-hover:text-red-400 transition-colors block mt-0.5">
                      0372.010.202
                    </strong>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Call Center Daune Generali
                    </span>
                  </div>
                </a>

                <a
                  href="tel:0313200222"
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-start gap-3.5 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-[#E10600] group-hover:text-white transition-colors">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                      Auto CASCO Non-Stop (24/7)
                    </span>
                    <strong className="text-sm font-bold text-white group-hover:text-red-400 transition-colors block mt-0.5">
                      0313.200.222
                    </strong>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Tractare &amp; Asistență Rutieră
                    </span>
                  </div>
                </a>

                <a
                  href="tel:0313202020"
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-start gap-3.5 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-[#E10600] group-hover:text-white transition-colors">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                      Urgențe Călătorii Internaționale
                    </span>
                    <strong className="text-sm font-bold text-white group-hover:text-red-400 transition-colors block mt-0.5">
                      0313.20.20.20
                    </strong>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Europ Assistance (Grup Generali)
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Product-Specific Deadlines Table */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#E10600] font-bold block">
                    Termene Oficiale Diferențiate
                  </span>
                  <h3 className="text-xl font-bold text-[#06141B] mt-1">
                    Când și Cum Notifici Dauna în Funcție de Produs
                  </h3>
                </div>
                <div className="text-xs text-slate-500 font-medium bg-slate-100 py-1.5 px-3 rounded-lg shrink-0">
                  Termenul de 3 zile lucrătoare este specific asigurării de Locuință
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {GENERALI_CLAIMS_GUIDE.productDeadlines.map((dl) => (
                  <div
                    key={dl.category}
                    className="p-5 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          {dl.category === 'casa' && <Home className="w-4 h-4 text-[#E10600]" />}
                          {dl.category === 'auto' && <Car className="w-4 h-4 text-[#E10600]" />}
                          {dl.category === 'calatorii' && <Plane className="w-4 h-4 text-[#E10600]" />}
                          {dl.category === 'business' && <Briefcase className="w-4 h-4 text-[#E10600]" />}
                          <strong className="text-sm font-bold text-slate-900">
                            {dl.productName}
                          </strong>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-bold shrink-0">
                          {dl.deadlineTitle}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        {dl.deadlineDetails}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900">
                      <strong className="block font-bold text-amber-950 mb-0.5">Regulă specifică:</strong>
                      {dl.criticalNoticeRule}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5-Step Process */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h3 className="text-xl font-bold text-[#06141B] mb-2">
                Cei 5 Pași Cruciali la Deschiderea Dosarului de Daună
              </h3>
              <p className="text-xs text-slate-600 mb-8 max-w-2xl leading-relaxed">
                Ce trebuie să faci din minutul 1 pentru a evita diminuarea despăgubirii sau respingerea dosarului:
              </p>

              <div className="space-y-6">
                {GENERALI_CLAIMS_GUIDE.stepByStepProcess.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center gap-5"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                      {step.stepNumber}
                    </div>

                    <div className="flex-1 space-y-1">
                      <strong className="text-sm font-bold text-slate-900 block">
                        {step.title}
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.action}
                      </p>
                    </div>

                    <div className="w-full md:w-72 p-3 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900 shrink-0">
                      <strong className="block font-bold text-amber-950 mb-0.5">Atenție critică:</strong>
                      {step.criticalTip}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents Checklist by Category */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h3 className="text-xl font-bold text-[#06141B] mb-2">
                Documente Obligatorii pentru Dosarul de Daună
              </h3>
              <p className="text-xs text-slate-600 mb-8 max-w-2xl leading-relaxed">
                Pregătește aceste acte înainte de întâlnirea cu inspectorul de daune sau încărcarea în portalul online Generali:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {GENERALI_CLAIMS_GUIDE.requiredDocumentsByCategory.map((catGroup) => (
                  <div
                    key={catGroup.category}
                    className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
                  >
                    <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                      <FileText className="w-4 h-4 text-[#E10600]" />
                      <strong className="text-sm font-bold text-slate-900">
                        {catGroup.title}
                      </strong>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-700">
                      {catGroup.documents.map((doc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Advisor Help Banner */}
            <div className="p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold block">
                  Consultanță &amp; Asistență
                </span>
                <h4 className="text-xl font-bold">
                  Nu ești sigur cum să formulezi cererea de despăgubire?
                </h4>
                <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                  Cristian Văduva este alături de tine la fiecare pas: de la documentarea corectă a fotografiilor până la depunerea dosarului complet la Generali România.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="tel:0767110439"
                  className="py-3 px-6 rounded-full bg-[#E10600] hover:bg-[#c20500] text-white text-xs font-bold text-center transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-white" />
                  <span>Sună: +40 767 110 439</span>
                </a>
                <Link
                  href="/contact"
                  className="py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold text-center transition-all border border-white/20 flex items-center justify-center"
                >
                  Trimite un mesaj
                </Link>
              </div>
            </div>

          </div>
        )}

      </main>

    </div>
  );
}
