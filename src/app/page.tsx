'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CATEGORIES } from '@/data/categories';
import { SCENARIOS, getRandomScenario } from '@/data/scenarios';
import { getScenarioOfTheDay, getScenarioOfTheWeek } from '@/lib/seasonalScenarios';
import { ScenarioCard } from '@/components/scenario/ScenarioCard';
import { Scenario } from '@/types/scenario';
import {
  ArrowRight,
  Shield,
  Sparkles,
  Shuffle,
  HelpCircle,
  CheckSquare,
  AlertTriangle,
  Share2,
  CheckCircle2,
  Compass,
  ArrowUpRight,
  ShieldAlert,
  Send,
  MessageCircle,
} from 'lucide-react';
import { ShareStudioModal } from '@/components/share/ShareStudioModal';
import { PolicyCheckModal } from '@/components/lead/PolicyCheckModal';
import { ProposeScenarioModal } from '@/components/scenario/ProposeScenarioModal';
import { APPROVED_READER_SCENARIOS } from '@/data/readerScenarios';

export default function HomePage() {
  const router = useRouter();
  const [activeShareScenario, setActiveShareScenario] = useState<Scenario | null>(null);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [isProposeModalOpen, setIsProposeModalOpen] = useState(false);

  // Curated hero spotlight: both Scenario of the Day and Scenario of the Week
  const [spotlightTab, setSpotlightTab] = useState<'day' | 'week'>('day');
  const dayInfo = useMemo(() => getScenarioOfTheDay(), []);
  const weekInfo = useMemo(() => getScenarioOfTheWeek(), []);
  const activeSpotlight = spotlightTab === 'day' ? dayInfo.scenario : weekInfo.scenario;

  // Curated 6-8 scenarios for Section D (editorial selection)
  const curatedSelection = useMemo(() => {
    const slugs = [
      'masina-spalat-furtun',
      'baterie-vehicul-electric-avarie',
      'urgenta-medicala-spitalizare-strainatate',
      'copil-sparge-televizor-magazin',
      'atac-ransomware-blocare-servere',
      'parbriz-crapat-autostrada',
    ];
    const found = slugs.map((slug) => SCENARIOS.find((s) => s.slug === slug)).filter(Boolean) as Scenario[];
    return found.length >= 6 ? found : SCENARIOS.slice(0, 6);
  }, []);

  // Debate-worthy scenarios for Section C ("Trimite asta unui prieten")
  const debateScenarios = useMemo(() => {
    const s1 = SCENARIOS.find((s) => s.slug === 'teava-inghetata-iarna') || SCENARIOS[0];
    const s2 = SCENARIOS.find((s) => s.slug === 'baterie-vehicul-electric-avarie') || SCENARIOS[1];
    const s3 = SCENARIOS.find((s) => s.slug === 'copil-sparge-televizor-magazin') || SCENARIOS[2];

    const list = [
      {
        scenario: s1,
        question: 'Tu ai fi acoperit?',
        angle: 'Dacă o țeavă îngheață cât ești plecat de acasă în timpul unui val de ger, plătește asigurarea sau se consideră neglijență?',
      },
      {
        scenario: s2,
        question: 'Crezi că asigurarea plătește?',
        angle: 'O simplă deformare a carcasei bateriei la o mașină electrică poate atrage daună totală economică de peste 20.000 EUR.',
      },
      {
        scenario: s3,
        question: 'Cine suportă costul?',
        angle: 'Copilul tău trage de pe stand și sparge un televizor de 15.000 RON într-un showroom. Ce poliță poate acoperi dauna părinților?',
      },
    ];
    return list;
  }, []);

  const handleSurpriseMe = () => {
    const random = getRandomScenario();
    router.push(`/scenarii/${random.categoryId}/${random.slug}`);
  };

  return (
    <div className="w-full bg-white text-[#06141B]">
      
      {/* ========================================================
          SECȚIUNEA A — HERO EDITORIAL MEMORABIL
         ======================================================== */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Headline & Main Action (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-[#E10600]" />
                <span className="uppercase tracking-wider">Simulator Educațional de Risc Financiar</span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight text-[#06141B] leading-[1.08] break-words">
                Crezi că ești asigurat. <br />
                <span className="text-slate-900 underline decoration-[#E10600] decoration-4 underline-offset-8">
                  Dar dacă mâine se întâmplă asta?
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-xl font-normal leading-relaxed">
                O țeavă ascunsă în perete cedează. Apa distruge parchetul, mobilierul și ajunge la vecini. Cât crezi că te-ar costa această situație?
              </p>

              {/* Action Buttons with Single Main CTA */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Single Primary CTA */}
                  <Link
                    href="/scenarii/casa/teava-sparta"
                    className="py-4 px-8 rounded-full bg-[#E10600] hover:bg-red-700 text-white font-extrabold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg shadow-red-600/25 hover:shadow-xl transition-all group min-h-[52px] active:scale-95 text-center"
                  >
                    <span>Descoperă dacă ești protejat</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {/* Secondary Explore Scenarios */}
                  <Link
                    href="/scenarii"
                    className="py-3.5 px-6 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[#06141B] font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all min-h-[48px] active:scale-95 text-center"
                  >
                    <Compass className="w-4 h-4 text-slate-600 shrink-0" />
                    <span>Explorează {SCENARIOS.length} Scenarii</span>
                  </Link>

                  {/* Financial Exposure Calculator */}
                  <Link
                    href="/calculator"
                    className="py-3.5 px-5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all min-h-[48px] text-center"
                  >
                    <span>Calculator Pierdere</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E10600]" />
                  </Link>
                </div>
              </div>

              {/* Micro-metrics Editorial */}
              <div className="pt-6 sm:pt-8 border-t border-slate-200 grid grid-cols-3 gap-2 sm:gap-6 text-xs">
                <div>
                  <span className="font-mono text-lg sm:text-xl font-black text-[#06141B] block">
                    {SCENARIOS.length}
                  </span>
                  <span className="text-slate-500 font-medium text-[11px] sm:text-xs">Scenarii Reale</span>
                </div>
                <div>
                  <span className="font-mono text-lg sm:text-xl font-black text-[#06141B] block">
                    {CATEGORIES.length}
                  </span>
                  <span className="text-slate-500 font-medium text-[11px] sm:text-xs">Categorii de Risc</span>
                </div>
                <div>
                  <span className="font-mono text-lg sm:text-xl font-black text-[#E10600] block">
                    100%
                  </span>
                  <span className="text-slate-500 font-medium text-[11px] sm:text-xs">Simulator Gratuit</span>
                </div>
              </div>
            </div>

            {/* Right Spotlight Scenario Card with Day / Week Switcher (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-2xl shadow-slate-200/80 transition-all">
                
                {/* Pill Switcher */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl mb-4">
                  <button
                    type="button"
                    onClick={() => setSpotlightTab('day')}
                    className={`flex-1 py-1.5 px-2.5 rounded-lg text-[11px] font-mono font-bold transition-all text-center ${
                      spotlightTab === 'day'
                        ? 'bg-white shadow-sm text-[#06141B]'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Scenariul Zilei
                  </button>
                  <button
                    type="button"
                    onClick={() => setSpotlightTab('week')}
                    className={`flex-1 py-1.5 px-2.5 rounded-lg text-[11px] font-mono font-bold transition-all text-center ${
                      spotlightTab === 'week'
                        ? 'bg-white shadow-sm text-[#06141B]'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Scenariul Săptămânii
                  </button>
                </div>

                <div className="pb-3 border-b border-slate-100 mb-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#E10600] font-bold">
                      {spotlightTab === 'day' ? `EDIȚIE ZILNICĂ · ${dayInfo.dateFormatted}` : `SĂPTĂMÂNA ${weekInfo.weekNumber}`}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 font-semibold">
                      {activeSpotlight.categoryName}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {spotlightTab === 'day' ? dayInfo.seasonalRelevance : weekInfo.weeklyThemeTitle}
                  </p>
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-200">
                  <Image
                    src={activeSpotlight.heroImage}
                    alt={`Ilustrație: ${activeSpotlight.title}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="py-1 px-2.5 rounded-full text-[10px] font-bold uppercase bg-white/95 text-[#E10600] border border-red-200 shadow-sm">
                      {activeSpotlight.severityLabel || 'Risc Critic'}
                    </span>
                    <span className="text-white text-[10px] font-mono font-medium drop-shadow">
                      {spotlightTab === 'day' ? 'Stabil 24h' : weekInfo.seasonName}
                    </span>
                  </div>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-[#06141B] leading-tight">
                  {activeSpotlight.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2">
                  „{activeSpotlight.mainQuestion}”
                </p>

                {/* Comparison preview snippet */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#E10600] font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Fără poliță relevantă:
                    </span>
                    <span className="text-[#06141B] font-mono font-bold">
                      {activeSpotlight.withoutInsurance.financialImpact}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                    <span className="text-slate-800 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" />
                      Cu poliță relevantă:
                    </span>
                    <span className="text-slate-700 font-mono">
                      Acoperire conform poliței
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-5">
                  <Link
                    href={`/scenarii/${activeSpotlight.categoryId}/${activeSpotlight.slug}`}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors text-center shadow-sm"
                  >
                    <span>Deschide scenariul ilustrativ</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setActiveShareScenario(activeSpotlight)}
                    className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-[#06141B] transition-colors"
                    title="Distribuie acest scenariu"
                    aria-label="Distribuie acest scenariu"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          TRASEUL PRINCIPAL DE PROTECȚIE:
          DESCOPERĂ → ÎNȚELEGE → TESTEAZĂ → VERIFICĂ → ACȚIONEAZĂ
         ======================================================== */}
      <section className="py-12 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
                Traseul Tău de Protecție
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                De la Conștientizare la Siguranță Financiară
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              5 pași logici prin care treci de la ipoteze nesigure la verificarea contractuală a riscului tău.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {/* 1. DESCOPERĂ */}
            <Link
              href="/scenarii"
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase mb-1">
                  Pasul 1
                </div>
                <div className="font-black text-sm text-white group-hover:text-[#E10600] transition-colors flex items-center justify-between">
                  <span>DESCOPERĂ</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Explorează cele 121 de scenarii practice din viața reală.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-500 mt-3 pt-2 border-t border-white/5 block">
                Catalog Complet →
              </span>
            </Link>

            {/* 2. ÎNȚELEGE */}
            <Link
              href="/calculator"
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase mb-1">
                  Pasul 2
                </div>
                <div className="font-black text-sm text-white group-hover:text-[#E10600] transition-colors flex items-center justify-between">
                  <span>ÎNȚELEGE</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Calculează pierderea din fonduri proprii (out-of-pocket).
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-500 mt-3 pt-2 border-t border-white/5 block">
                Calculator Expunere →
              </span>
            </Link>

            {/* 3. TESTEAZĂ */}
            <Link
              href="/quiz"
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase mb-1">
                  Pasul 3
                </div>
                <div className="font-black text-sm text-white group-hover:text-[#E10600] transition-colors flex items-center justify-between">
                  <span>TESTEAZĂ</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Răspunde la Quiz și vezi scorul de conștientizare a riscului.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-500 mt-3 pt-2 border-t border-white/5 block">
                Risk Quiz →
              </span>
            </Link>

            {/* 4. VERIFICĂ */}
            <Link
              href="/verificare-polita"
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase mb-1">
                  Pasul 4
                </div>
                <div className="font-black text-sm text-white group-hover:text-[#E10600] transition-colors flex items-center justify-between">
                  <span>VERIFICĂ</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Mini-Audit clauze pe polița ta Generali și export raport PDF.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-500 mt-3 pt-2 border-t border-white/5 block">
                Mini-Audit Poliță →
              </span>
            </Link>

            {/* 5. ACȚIONEAZĂ */}
            <Link
              href="/contact"
              className="p-5 rounded-2xl bg-[#E10600]/15 hover:bg-[#E10600]/25 border border-[#E10600]/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono font-bold text-[#E10600] uppercase mb-1">
                  Pasul 5
                </div>
                <div className="font-black text-sm text-white group-hover:text-[#E10600] transition-colors flex items-center justify-between">
                  <span>ACȚIONEAZĂ</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E10600]" />
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Solicită o analiză profesională dedicată cu Cristian Văduva.
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#E10600] mt-3 pt-2 border-t border-white/10 block font-bold">
                Consultanță Generali →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECȚIUNEA — PARTICIPARE ACTIVĂ & VALOARE IMEDIATĂ
          "What's in it for me if I participate?"
         ======================================================== */}
      <section className="py-20 lg:py-24 bg-slate-50/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#051F20]/5 border border-[#051F20]/15 text-xs font-mono font-bold text-[#051F20] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
              <span>Valoare Practică · De ce să participi?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#06141B] tracking-tight leading-tight">
              Scenarii ilustrative bazate pe condiții contractuale. <br className="hidden sm:inline" />
              <span className="text-[#051F20]">Fii mai pregătit pentru ce urmează.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Nu trebuie să ai o asigurare ca să beneficiezi de WHAT IF INSURANCE. Platforma este construită pentru oricine vrea să recunoască din timp riscurile financiare, să știe ce întrebări să pună și să evite surprizele neplăcute.
            </p>
          </div>

          {/* 4 Participation Activity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* Card 1: Explore Scenarios */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#235347] group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6 text-[#235347]" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    01 · Explorare
                  </span>
                  <h3 className="text-lg font-bold text-[#06141B] leading-snug">
                    Descoperă riscuri ascunse
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Înveți să recunoști capcanele înainte de a semna un contract sau de a cumpăra un bun scump. Afli ce plătește o poliță și ce rămâne în sarcina ta.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/scenarii"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#051F20] hover:text-[#DE1110] transition-colors"
                >
                  <span>Explorează cele 121 de scenarii</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Challenge a Friend */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-[#DE1110] group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 text-[#DE1110]" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    02 · Dezbatere
                  </span>
                  <h3 className="text-lg font-bold text-[#06141B] leading-snug">
                    Provoacă un prieten
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Deschide o discuție utilă despre situații frecvente: de la ecrane sparte la vecini inundați. Comparați intuiția pe baza condițiilor contractuale concrete.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/studio?concept=surprinde-prietenii"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#051F20] hover:text-[#DE1110] transition-colors"
                >
                  <span>Creează o provocare</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Suggest a Situation */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#051F20] group-hover:scale-105 transition-transform">
                  <Send className="w-6 h-6 text-[#051F20]" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    03 · Caz Personal
                  </span>
                  <h3 className="text-lg font-bold text-[#06141B] leading-snug">
                    Propune o situație
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ai o dilemă neclară sau ai trăit o întâmplare bizară? Trimite-ne situația ta. O analizăm din perspectiva clauzelor reale din contractele din România și îți trimitem un punct de vedere util.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsProposeModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#051F20] hover:text-[#DE1110] transition-colors"
                >
                  <span>Trimite o situație</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 4: Test Intuition Quiz */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 group-hover:scale-105 transition-transform">
                  <CheckSquare className="w-6 h-6 text-amber-700" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    04 · Autoevaluare
                  </span>
                  <h3 className="text-lg font-bold text-[#06141B] leading-snug">
                    Testează-ți intuiția
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    8 întrebări scurte despre clauze cotidiene. Afli în 3 minute cât de bine distingi presupunerile comune de realitatea contractelor din România.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#051F20] hover:text-[#DE1110] transition-colors"
                >
                  <span>Începe testul (3 min)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* Honest Value Exchange Callout */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                <strong className="text-[#06141B]">Schimb onest de valoare:</strong> Investești puțină atenție și câștigi pregătire reală, întrebări mai bune la semnare și claritate financiară. Fără cont obligatoriu, acces direct la scenarii și quiz educațional.
              </p>
            </div>

            <Link
              href="/studio"
              className="py-2.5 px-5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#06141B] font-bold text-xs shrink-0 transition-colors"
            >
              Trimite prietenilor
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECȚIUNEA B — „CLAUZA CARE SCHIMBĂ TOTUL” (CURIOZITATE)
         ======================================================== */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Photographic Preview (5 cols) */}
            <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[260px] bg-slate-900 overflow-hidden">
              <Image
                src="/images/scenarios/vacant-freeze-damage.jpg"
                alt="Avarie de conductă spartă de ger într-un imobil neocupat"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2.5 py-1 rounded bg-[#E10600] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                  Clauza de Nelocuire (30–60 zile)
                </span>
                <p className="text-white text-xs font-medium mt-1">
                  Condiții de prevenție la îngheț în imobile neocupate
                </p>
              </div>
            </div>

            {/* Right Editorial Copy (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E10600]/10 border border-[#E10600]/20 text-xs font-mono font-bold text-[#E10600] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Clauza care schimbă totul
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#06141B] leading-tight">
                Pleci 30 de zile în vacanță. Știai că o avarie de îngheț poate fi exclusă dacă locuința rămâne neîncălzită?
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Multe polițe facultative conțin clauze specifice de neocupare: dacă imobilul rămâne nelocuit peste 30–60 de zile fără menținerea unei temperaturi minime sau fără oprirea alimentării cu apă, daunele produse de îngheț pot fi refuzate ori limitate contractual. Verifică cerințele exacte din contractul tău.
              </p>

              <div className="text-xs font-mono text-slate-400">
                Sursă: Condițiile Generale pentru Asigurarea Locuinței (clauza de neocupare 30-60 de zile)
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/scenarii/casa/teava-inghetata-iarna"
                  className="py-3.5 px-6 rounded-full bg-[#06141B] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2"
                >
                  <span>Vezi cum funcționează clauza</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    const s = SCENARIOS.find((item) => item.slug === 'teava-inghetata-iarna');
                    if (s) setActiveShareScenario(s);
                  }}
                  className="py-3.5 px-5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#E10600]" />
                  <span>Trimite-i cuiva care călătorește des</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECȚIUNEA C — „TRIMITE ASTA UNUI PRIETEN” (DEZBATERI)
         ======================================================== */}
      <section className="py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10600] block mb-2">
              Situații la care nu te-ai gândit · Ce ar spune prietenii tăi?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#06141B] tracking-tight">
              Trimite-i asta persoanei care spune «mie nu mi se poate întâmpla»
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Trei situații cu prevederi contractuale surprinzătoare: ai identifica răspunsul corect în această situație?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {debateScenarios.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative w-full h-44 overflow-hidden bg-slate-200">
                    <Image
                      src={item.scenario.heroImage || '/images/scenarios/pipe-burst.jpg'}
                      alt={`Ilustrație: ${item.scenario.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 text-white text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-xs">
                      {item.question}
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-white/90 text-[#06141B] text-[10px] font-mono font-bold">
                      0{idx + 1}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-base sm:text-lg font-bold text-[#06141B] mb-2 leading-snug">
                      {item.scenario.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.angle}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-200/60 mt-4 flex items-center justify-between gap-3">
                  <Link
                    href={`/scenarii/${item.scenario.categoryId}/${item.scenario.slug}`}
                    aria-label={`Vezi analiza clauzei: ${item.scenario.title}`}
                    className="text-xs font-bold text-[#06141B] hover:text-[#E10600] flex items-center gap-1 transition-colors"
                  >
                    <span>Vezi analiza clauzei</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setActiveShareScenario(item.scenario)}
                    aria-label={`Distribuie dilema: ${item.scenario.title}`}
                    className="py-1.5 px-3 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#06141B] text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
                    title="Distribuie dilema"
                  >
                    <Send className="w-3 h-3 text-[#E10600]" />
                    <span>Distribuie dilema</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECȚIUNEA D — „EXPLOREAZĂ DUPĂ SITUAȚIA TA” (EDITORIAL 6)
         ======================================================== */}
      <section id="exploreaza" className="py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Situații Frecvente, Decizii Grele
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#06141B] tracking-tight">
                Casa ta arată perfect. Riscul nu se vede în poze.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                De la furtunul mașinii de spălat până la bateria unei mașini electrice: vezi exact unde se oprește acoperirea standard și unde începe răspunderea ta.
              </p>
            </div>

            <Link
              href="/scenarii"
              className="py-3 px-5 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 transition-colors shrink-0 shadow-sm"
            >
              <span>Explorează toate cele 121 de cazuri</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
            </Link>
          </div>

          {/* 6 Curated Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {curatedSelection.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>

          {/* Callout towards the Full Scenario Library */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h3 className="text-base font-bold text-[#06141B]">
                Ai o întrebare despre o situație anume? Avem 121 de scenarii ilustrative analizate pe baza clauzelor contractuale.
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Casă, baterii EV, spitale peste hotare, răspundere pentru copii, riscuri cyber și bunuri de colecție.
              </p>
            </div>
            <Link
              href="/scenarii"
              className="py-2.5 px-5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#06141B] font-bold text-xs transition-colors shrink-0"
            >
              Deschide Catalogul Complet (121)
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECȚIUNEA — „DE LA CITITORI” (FLUX EDITORIAL MODERAT)
         ======================================================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldAlert className="w-3.5 h-3.5 text-slate-600" />
                <span>Flux Editorial Moderat · Exemple Ilustrative</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#06141B] tracking-tight">
                Exemple ilustrative de analiză a situațiilor primite
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                Modele metodologice care arată cum sunt descompuse situațiile transmise de cititori. Situațiile autentice din comunitate vor fi publicate exclusiv după verificarea provenienței și obținerea acordului explicit de publicare anonimizată.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsProposeModalOpen(true)}
              className="py-3 px-6 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shrink-0 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Propune o situație</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {APPROVED_READER_SCENARIOS.map((scenario) => (
              <div
                key={scenario.id}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all shadow-2xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {scenario.categoryName}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-700 bg-slate-200/80 px-2 py-0.5 rounded border border-slate-300">
                      Exemplu Ilustrativ
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#06141B] leading-snug">
                    {scenario.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed italic bg-white p-3 rounded-xl border border-slate-200">
                    „{scenario.situation}”
                  </p>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-bold uppercase text-[#E10600] block">
                      Întrebare de clarificat:
                    </span>
                    <p className="text-xs font-semibold text-slate-800">
                      {scenario.keyQuestion}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/80 space-y-1">
                    <span className="text-[11px] font-mono font-bold uppercase text-slate-500 block">
                      Mecanismul contractual aplicabil:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {scenario.editorialAnalysis}
                    </p>
                  </div>
                </div>

                {scenario.relatedScenarioUrl && (
                  <Link
                    href={scenario.relatedScenarioUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06141B] hover:text-[#E10600] transition-colors pt-3 border-t border-slate-200"
                  >
                    <span>Explorează clauza similară</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECȚIUNEA E — „TESTEAZĂ-ȚI INTUIȚIA” (QUIZ PROVOCARE)
         ======================================================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#06141B] text-white p-8 sm:p-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-mono font-semibold uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5 text-[#E10600]" />
                Provocare · Testează-ți Intuiția
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Crezi că știi ce acoperă polița ta? <br />
                <span className="text-slate-300">8 întrebări scurte.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Trotinete electrice, telefoane scăpate în apă, baterii EV sau apă aspirată la motor. Fără teorie și fără discursuri corporatiste: doar situații concrete și verdicte contractuale documentate.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <Link
                href="/quiz"
                className="py-4 px-8 rounded-full bg-[#E10600] hover:bg-red-700 text-white font-extrabold text-sm sm:text-base text-center transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Începe testul (3 minute)</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <button
                type="button"
                onClick={handleSurpriseMe}
                className="py-4 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm text-center transition-all flex items-center justify-center gap-2"
              >
                <Shuffle className="w-4 h-4 text-slate-300" />
                <span>Un caz la întâmplare</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECȚIUNEA F — „VERIFICĂ CE CONTEAZĂ ÎN POLIȚA TA”
         ======================================================== */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                Practic &amp; Imediat · Fără Înregistrare Obligatorie
              </span>

              <h2 className="text-2xl sm:text-4xl font-black text-[#06141B] tracking-tight">
                Ai un contract sau te gândești să închei unul? Ai răspunsul la aceste 3 întrebări?
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nu aștepta momentul unei daune ca să afli ce nu acoperă contractul. Am extras clauzele critice, franșizele din parcare și termenele contractuale exacte de avizare pe care trebuie să le cauți chiar azi în propriul dosar.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#06141B] shrink-0" />
                  <span>Termenele limită de notificare (specifice fiecărui produs, ex. max. 3 zile lucrătoare la Eurocasa)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#06141B] shrink-0" />
                  <span>Clauzele specifice de neocupare prelungită sau oprire a apei</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#06141B] shrink-0" />
                  <span>Franșizele per eveniment și plafoanele separate la electronice sau bijuterii</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/verificare-polita"
                  className="py-3.5 px-6 rounded-full bg-[#06141B] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-sm"
                >
                  <CheckSquare className="w-4 h-4 text-slate-300" />
                  <span>Deschide lista celor 8 verificări</span>
                </Link>
              </div>
            </div>

            {/* Checklist Preview Box */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold uppercase text-slate-900">
                    Exemple de Clauze din Contract
                  </span>
                  <span className="text-xs font-mono text-slate-400">PDF / Printabil</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#06141B] mb-0.5">Locuință · Infiltrații de la vecini</div>
                    <p className="text-slate-600">Polița acoperă doar daunele provocate ție sau include și răspunderea ta civilă față de vecinii de dedesubt?</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#06141B] mb-0.5">Auto · Apă aspirată la motor (hidrolock)</div>
                    <p className="text-slate-600">CASCO menționează expres excluderea traversării zonelor cu acumulări de apă?</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#06141B] mb-0.5">Călătorii · Urgențe fără notificare prealabilă</div>
                    <p className="text-slate-600">Este obligatoriu să suni la centrala de asistență înainte de a merge la spital?</p>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic pt-1">
                  * Deschide lista completă în 8 puncte adaptată situației tale prin instrumentul gratuit.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECȚIUNEA G — CONVERSIE PREMIUM (SOLICITARE AUDIT)
         ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10600] block mb-3">
            Claritate Contractuală · Fără Presiune
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-[#06141B] tracking-tight">
            Vrei să știi exact ce ai semnat? Sau ce ar trebui să semnezi?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Fiecare contract are detalii particulare. Dacă vrei o analiză obiectivă asupra poliței tale actuale — fără discursuri de vânzare și fără niciun angajament financiar — solicită o verificare de clauze.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/contact?topic=review-polita"
              className="w-full sm:w-auto py-4 px-8 rounded-full bg-[#06141B] hover:bg-slate-800 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>Solicită o analiză de clauze</span>
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto py-4 px-7 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[#06141B] font-semibold text-sm sm:text-base transition-all"
            >
              Întreabă un specialist
            </Link>
          </div>

          <div className="mt-8 text-xs font-mono text-slate-500">
            Inițiativă de Cristian Văduva · Consultanță prin partener Generali și audit de clauze
          </div>
        </div>
      </section>

      {/* ========================================================
          SECȚIUNEA H — PLATFORMA OFICIALĂ DE ASIGURĂRI (INSURANCE)
         ======================================================== */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-[11px] font-mono font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 text-[#E10600]" />
              <span>Consultanță &amp; Management de Risc · Partener Generali</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#06141B] tracking-tight leading-tight">
              Ai descoperit ce s-ar putea întâmpla. <br className="hidden sm:inline" />
              <span className="text-[#E10600]">Acum află ce poți face.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              WHAT IF INSURANCE te ajută să înțelegi riscurile. Pe platforma dedicată de consultanță discutăm despre soluții contractuale concrete, adaptate situației tale reale.
            </p>
          </div>

          {/* 4 Feature Pillars of Insurance Platform */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-mono font-black text-xs text-[#06141B]">
                  01
                </span>
                <h3 className="font-bold text-base text-[#06141B] leading-snug">
                  Audit &amp; Verificare de Clauze
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Depistăm excluderile ascunse, franșizele din parcare și clauzele de neocupare înainte de producerea daunei.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-400 mt-4 pt-3 border-t border-slate-100">
                Fără costuri sau obligații
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-mono font-black text-xs text-[#06141B]">
                  02
                </span>
                <h3 className="font-bold text-base text-[#06141B] leading-snug">
                  Consultanță Fără Presiune
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ghidaj direct pentru persoane fizice, familii și antreprenori. Identificăm riscurile reale ale stilului tău de viață.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-400 mt-4 pt-3 border-t border-slate-100">
                Recomandări bazate pe contracte reale
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <span className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center font-mono font-black text-xs text-[#E10600]">
                  03
                </span>
                <h3 className="font-bold text-base text-[#06141B] leading-snug">
                  Partener Generali România
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Acces la portofoliul unuia dintre cei mai stabili asigurători mondiali: All-Risks locuință, CASCO complet, sănătate și călătorii internaționale.
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#C21B17] font-bold mt-4 pt-3 border-t border-slate-100">
                Consultanță prin partener Generali
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-mono font-black text-xs text-[#06141B]">
                  04
                </span>
                <h3 className="font-bold text-base text-[#06141B] leading-snug">
                  Active de Valoare &amp; Companii
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Management de risc pentru supercaruri, ambarcațiuni, colecții de artă, răspunderea administratorilor (D&amp;O) și riscuri cibernetice.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-400 mt-4 pt-3 border-t border-slate-100">
                Evaluare la valoare agreată
              </span>
            </div>

          </div>

          {/* Action Callout — Distinct Advisory Positioning */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#06141B] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-red-400">
                <span className="w-2 h-2 rounded-full bg-[#E10600]" />
                <span>PLATFORMĂ EDUCAȚIONALĂ &amp; CONSULTANȚĂ DEDICATĂ</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Treci de la presupuneri la certitudini contractuale.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                <strong className="text-white">WHAT IF INSURANCE</strong> te ajută să înțelegi riscurile prin scenarii practice. Pentru consultanță individuală în asigurări, audit detaliat de clauze și emiterea de polițe personalizate, vizitează platforma dedicată.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="https://insurance.cristianvaduva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-4 px-7 rounded-full bg-white hover:bg-slate-100 text-[#06141B] font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-md group"
              >
                <span>Consultanță: insurance.cristianvaduva.com</span>
                <ArrowUpRight className="w-4 h-4 text-[#E10600] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <Link
                href="/verificare-polita"
                className="w-full sm:w-auto py-4 px-6 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm flex items-center justify-center gap-2 border border-slate-700 transition-all text-center"
              >
                Mini-Audit Clauze
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Share Studio Modal for Hero or Direct triggers */}
      {activeShareScenario && (
        <ShareStudioModal
          scenario={activeShareScenario}
          isOpen={!!activeShareScenario}
          onClose={() => setActiveShareScenario(null)}
        />
      )}

      {/* Policy Check Modal Instance */}
      <PolicyCheckModal
        isOpen={isPolicyModalOpen}
        onClose={() => setIsPolicyModalOpen(false)}
      />

      {/* Reader Scenario Proposal Modal */}
      <ProposeScenarioModal
        isOpen={isProposeModalOpen}
        onClose={() => setIsProposeModalOpen(false)}
      />
    </div>
  );
}
