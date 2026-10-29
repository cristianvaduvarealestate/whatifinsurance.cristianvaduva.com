'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CATEGORIES } from '@/data/categories';
import { SCENARIOS, getScenarioOfTheDay, getRandomScenario } from '@/data/scenarios';
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

export default function HomePage() {
  const router = useRouter();
  const [activeShareScenario, setActiveShareScenario] = useState<Scenario | null>(null);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

  // Curated hero spotlight scenario
  const heroScenario = useMemo(() => {
    return SCENARIOS.find((s) => s.slug === 'daune-vecini') || SCENARIOS[0];
  }, []);

  // Scenario of the Day (deterministic for 24h)
  const scenarioOfTheDay = useMemo(() => {
    return getScenarioOfTheDay();
  }, []);

  // Curated 6-8 scenarios for Section D (editorial selection)
  const curatedSelection = useMemo(() => {
    const slugs = [
      'masina-spalat-furtun',
      'baterie-vehicul-electric-avarie',
      'urgenta-medicala-strainatate',
      'copil-dauna-tv-rude',
      'ransomware-criptare-fisiere',
      'parbriz-fisurat-autostrada',
    ];
    const found = slugs.map((slug) => SCENARIOS.find((s) => s.slug === slug)).filter(Boolean) as Scenario[];
    return found.length >= 6 ? found : SCENARIOS.slice(0, 6);
  }, []);

  // Debate-worthy scenarios for Section C ("Trimite asta unui prieten")
  const debateScenarios = useMemo(() => {
    const list = [
      {
        scenario: SCENARIOS.find((s) => s.slug === 'teava-inghetata-absenta') || SCENARIOS[0],
        question: 'Tu ai fi acoperit?',
        angle: 'Dacă o țeavă îngheață cât ești plecat 10 zile de acasă, plătește asigurarea sau se consideră neglijență?',
      },
      {
        scenario: SCENARIOS.find((s) => s.slug === 'baterie-vehicul-electric-avarie') || SCENARIOS[1],
        question: 'Crezi că asigurarea plătește?',
        angle: 'O simplă deformare sub mașina electrică poate atrage daună totală economică de 25.000 EUR.',
      },
      {
        scenario: SCENARIOS.find((s) => s.slug === 'copil-dauna-tv-rude') || SCENARIOS[2],
        question: 'Cine suportă costul?',
        angle: 'Copilul tău sparge accidental un ecran OLED scump în vizită la prieteni. Ce poliță poate acoperi dauna?',
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
                <span className="uppercase tracking-wider">Ce se întâmplă dacă...?</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight text-[#06141B] leading-[1.05]">
                Ai fi acoperit <br />
                <span className="text-slate-900 underline decoration-[#E10600] decoration-4 underline-offset-8">
                  dacă s-ar întâmpla mâine?
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-xl font-normal leading-relaxed">
                Descoperă riscurile reale ale vieții cotidiene la care nu te-ai gândit niciodată. Înțelege diferența critică dintre ce presupui că acoperă o poliță și ce plătești din propriul buzunar.
              </p>

              {/* Action Buttons & Self-Explanatory Surprinde-mă */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center gap-3.5">
                  {/* Signature "Surprinde-mă cu un scenariu" */}
                  <button
                    type="button"
                    onClick={handleSurpriseMe}
                    aria-label="Surprinde-mă cu un scenariu — Descoperă scenarii neașteptate și află ce ai putea să nu știi despre asigurări"
                    title="Surprinde-mă cu un scenariu — Descoperă situații neașteptate și află ce ai putea să nu știi despre asigurări."
                    className="py-4 px-6 sm:px-7 rounded-full bg-[#06141B] hover:bg-slate-900 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-slate-900/20 hover:shadow-xl transition-all group"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E10600] group-hover:scale-125 transition-transform animate-pulse" />
                    <Shuffle className="w-4 h-4 text-slate-300 group-hover:rotate-45 transition-transform" />
                    <span>Surprinde-mă cu un scenariu</span>
                  </button>

                  {/* Explore Scenarios */}
                  <Link
                    href="/scenarii"
                    className="py-4 px-6 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300/80 text-[#06141B] font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all"
                  >
                    <Compass className="w-4 h-4 text-slate-600" />
                    <span>Explorează 121 Scenarii</span>
                  </Link>

                  {/* Direct Policy Check */}
                  <button
                    type="button"
                    onClick={() => setIsPolicyModalOpen(true)}
                    className="py-4 px-4 text-slate-600 hover:text-[#06141B] text-sm font-semibold underline underline-offset-4 transition-colors"
                  >
                    Verifică polița ta
                  </button>
                </div>

                {/* Visible supporting explanation sentence */}
                <div className="p-3 rounded-2xl bg-slate-100/80 border border-slate-200/90 text-xs text-slate-700 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#06141B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                    <span>Descoperă scenarii neașteptate și află ce ai putea să nu știi despre asigurări.</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-normal leading-relaxed pl-3.5">
                    Fiecare click alege la întâmplare o situație din viața reală și îți arată clar dacă ar fi acoperită sau dacă ai suporta costul din economii proprii.
                  </p>
                </div>
              </div>

              {/* Micro-metrics Editorial */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6 text-xs">
                <div>
                  <span className="font-mono text-xl font-black text-[#06141B] block">
                    121
                  </span>
                  <span className="text-slate-500 font-medium">Scenarii Distincte</span>
                </div>
                <div>
                  <span className="font-mono text-xl font-black text-[#06141B] block">
                    10
                  </span>
                  <span className="text-slate-500 font-medium">Categorii de Risc</span>
                </div>
                <div>
                  <span className="font-mono text-xl font-black text-[#E10600] block">
                    100%
                  </span>
                  <span className="text-slate-500 font-medium">Bazat pe Condiții Reale</span>
                </div>
              </div>
            </div>

            {/* Right Spotlight Scenario Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-2xl shadow-slate-200/80 transition-all">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#E10600] font-bold">
                    Cazul Săptămânii
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">
                    {heroScenario.categoryName}
                  </span>
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-200">
                  <Image
                    src={heroScenario.heroImage}
                    alt={heroScenario.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="py-1 px-2.5 rounded-full text-[10px] font-bold uppercase bg-white/95 text-[#E10600] border border-red-200 shadow-sm">
                      {heroScenario.severityLabel || 'Risc Critic'}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#06141B] leading-tight">
                  {heroScenario.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2">
                  „{heroScenario.mainQuestion}”
                </p>

                {/* Comparison preview snippet */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#E10600] font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Fără acoperire:
                    </span>
                    <span className="text-[#06141B] font-mono font-bold">
                      {heroScenario.withoutInsurance.financialImpact}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                    <span className="text-slate-800 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" />
                      Cu poliță relevantă:
                    </span>
                    <span className="text-slate-700 font-mono">
                      Despăgubit conform deviz
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-5">
                  <Link
                    href={`/scenarii/${heroScenario.categoryId}/${heroScenario.slug}`}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors text-center shadow-sm"
                  >
                    <span>Analizează acest scenariu</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setActiveShareScenario(heroScenario)}
                    className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-[#06141B] transition-colors"
                    title="Surprinde-ți prietenii"
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
          SECȚIUNEA B — „AI ȘTIUT ASTA?” (MODUL DE CURIOZITATE)
         ======================================================== */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E10600]/10 border border-[#E10600]/20 text-xs font-mono font-bold text-[#E10600] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Ai știut asta?
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#06141B] leading-tight">
                O țeavă înghețată se sparge cât ești plecat de acasă în concediu.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Știai că majoritatea polițelor facultative de locuință conțin o clauză de „imobil neocupat” care suspendă sau exclude daunele provocate de îngheț dacă locuința rămâne nelocuită mai mult de 30 sau 60 de zile consecutive fără oprirea apei?
              </p>

              <div className="text-xs font-mono text-slate-400">
                Sursă normativă: Condiții generale de asigurare a locuinței (clauze de absență prelungită)
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <Link
                href="/scenarii/casa/teava-inghetata-absenta"
                className="py-3.5 px-6 rounded-full bg-[#06141B] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2"
              >
                <span>Descoperă scenariul</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </Link>

              <button
                type="button"
                onClick={() => {
                  const s = SCENARIOS.find((item) => item.slug === 'teava-inghetata-absenta');
                  if (s) setActiveShareScenario(s);
                }}
                className="py-3.5 px-5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Share2 className="w-3.5 h-3.5 text-[#E10600]" />
                <span>Trimite unui prieten</span>
              </button>
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
              Discuții Reale · Provoacă-ți Prietenii
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#06141B] tracking-tight">
              Trimite asta unui prieten
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Situații surprinzătoare unde părerile sunt împărțite până la citirea clauzelor din contract. Pune-i pe gânduri:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {debateScenarios.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#E10600] shadow-sm">
                      {item.question}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#06141B] mb-2 leading-snug">
                    {item.scenario.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.angle}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                  <Link
                    href={`/scenarii/${item.scenario.categoryId}/${item.scenario.slug}`}
                    className="text-xs font-bold text-[#06141B] hover:text-[#E10600] flex items-center gap-1 transition-colors"
                  >
                    <span>Vezi răspunsul</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setActiveShareScenario(item.scenario)}
                    className="py-1.5 px-3 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#06141B] text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
                    title="Trimite provocarea"
                  >
                    <Send className="w-3 h-3 text-[#E10600]" />
                    <span>Provoacă</span>
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
                Selecție Editorială
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#06141B] tracking-tight">
                Explorează după situația ta
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                O selecție curatoriată de situații cotidiene frecvente. Descoperă riscul, află condițiile și vezi ce s-ar schimba dacă ai o poliță adecvată.
              </p>
            </div>

            <Link
              href="/scenarii"
              className="py-3 px-5 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 transition-colors shrink-0 shadow-sm"
            >
              <span>Explorează toate cele 121 scenarii</span>
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
                Cauți un risc specific? Avem 121 de situații documentate.
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Casă, mașini electrice, călătorii exotice, răspundere civilă, tehnologie, proprietăți de lux și familie.
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
          SECȚIUNEA E — „TESTEAZĂ-ȚI INTUIȚIA” (QUIZ PROVOCARE)
         ======================================================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#06141B] text-white p-8 sm:p-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-mono font-semibold uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5 text-[#E10600]" />
                Provocare Interactivă
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                8 situații. <br />
                <span className="text-slate-300">Câte răspunsuri nimerești?</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Trotinete electrice, baterii EV zgâriate, inundație de la vecinul de sus sau bagaje furate în vacanță. Crezi că știi ce acoperă o asigurare standard? Pune-ți intuiția la încercare și află deciziile reale ale asigurătorilor.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <Link
                href="/quiz"
                className="py-4 px-8 rounded-full bg-[#E10600] hover:bg-red-700 text-white font-extrabold text-sm sm:text-base text-center transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Acceptă provocarea</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <button
                type="button"
                onClick={handleSurpriseMe}
                className="py-4 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm text-center transition-all flex items-center justify-center gap-2"
              >
                <Shuffle className="w-4 h-4 text-slate-300" />
                <span>Un caz aleatoriu</span>
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
                Instrument Gratuit · Fără Date Personale
              </span>

              <h2 className="text-2xl sm:text-4xl font-black text-[#06141B] tracking-tight">
                Verifică ce contează cu adevărat în polița ta
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nu aștepta momentul unei daune pentru a afla ce nu acoperă contractul. Am sintetizat clauzele critice, franșizele ascunse și obligațiile de notificare pe care trebuie să le verifici chiar azi în propriul dosar de asigurare.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#06141B] shrink-0" />
                  <span>Termenele limită de notificare (adesea 24h - 48h de la eveniment)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#06141B] shrink-0" />
                  <span>Clauzele specifice de neglijență sau absență din locuință</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#06141B] shrink-0" />
                  <span>Franșizele per eveniment și sub-limitele la bunuri de valoare</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/verificare-polita"
                  className="py-3.5 px-6 rounded-full bg-[#06141B] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-sm"
                >
                  <CheckSquare className="w-4 h-4 text-slate-300" />
                  <span>Generează checklistul tău</span>
                </Link>
              </div>
            </div>

            {/* Checklist Preview Box */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold uppercase text-slate-900">
                    Exemplu de Clauze de Verificat
                  </span>
                  <span className="text-xs font-mono text-slate-400">PDF / Printabil</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#06141B] mb-0.5">Locuință · Infiltrații de la vecini</div>
                    <p className="text-slate-600">Polița acoperă doar daunele provocate ție sau include și răspunderea ta civilă față de terți?</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#06141B] mb-0.5">Auto · Apă aspirată la motor</div>
                    <p className="text-slate-600">CASCO menționează expres excluderea intrării voluntare pe drumuri inundate?</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#06141B] mb-0.5">Călătorii · Urgențe fără notificare prealabilă</div>
                    <p className="text-slate-600">Este obligatoriu să suni la centrala de asistență înainte de a merge la spital?</p>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic pt-1">
                  * Generează lista completă adaptată situației tale prin instrumentul gratuit.
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
            Consultanță &amp; Audit Profesional
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-[#06141B] tracking-tight">
            Ai descoperit un risc pe care vrei să-l înțelegi mai bine?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Fiecare situație este unică. Dacă ai întrebări despre polița ta actuală sau vrei să afli cum te poți proteja împotriva unui scenariu specific, solicită o analiză individuală fără niciun angajament.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/contact?topic=review-polita"
              className="w-full sm:w-auto py-4 px-8 rounded-full bg-[#06141B] hover:bg-slate-800 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>Solicită o analiză a poliței</span>
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto py-4 px-7 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[#06141B] font-semibold text-sm sm:text-base transition-all"
            >
              Pune o întrebare
            </Link>
          </div>

          <div className="mt-8 text-xs font-mono text-slate-500">
            Inițiativă de Cristian Văduva · Consultanță independentă și audit de clauze
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
              WHAT IF INSURANCE te ajută să explorezi situații neașteptate. Pe platforma de consultanță în asigurări poți merge mai departe și discuta despre nevoile tale reale de protecție.
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
                  Audit Independent de Polițe
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Analizăm contractele tale actuale pentru a depista excluderile ascunse, franșizele nerealiste și clauzele de neocupare înainte de producerea daunei.
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
                  Ghidaj dedicat pentru persoane fizice, familii și antreprenori. Identificăm riscurile specifice stilului tău de viață sau afacerii tale.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-400 mt-4 pt-3 border-t border-slate-100">
                Soluții 100% personalizate
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <span className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center font-mono font-black text-xs text-[#E10600]">
                  03
                </span>
                <h3 className="font-bold text-base text-[#06141B] leading-snug">
                  Parteneriat Oficial Generali
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Acces la portofoliul unuia dintre cei mai stabili asigurători mondiali: All-Risks locuință, CASCO fără bătăi de cap, sănătate și călătorii internaționale.
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#C21B17] font-bold mt-4 pt-3 border-t border-slate-100">
                Subscriere autorizată
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
                  Management de risc pentru supercaruri, ambarcațiuni, colecții de artă, răspunderea administratorilor (D&O) și riscuri cibernetice complexe.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-400 mt-4 pt-3 border-t border-slate-100">
                Evaluare la valoare agreată
              </span>
            </div>

          </div>

          {/* Action Callout */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#06141B] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#E10600]" />
                <span>PLATFORMA DE BROKERAJ &amp; CONSULTANȚĂ</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Treci de la curiozitate la siguranță contractuală.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Vizitează platforma principală pentru emitere de polițe, asistență la daune și consultanță directă cu Cristian Văduva.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="https://insurance.cristianvaduva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-4 px-7 rounded-full bg-white hover:bg-slate-100 text-[#06141B] font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-md group"
              >
                <span>Descoperă Insurance.CristianVaduva.com</span>
                <ArrowUpRight className="w-4 h-4 text-[#E10600] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <Link
                href="/contact?topic=review-polita"
                className="w-full sm:w-auto py-4 px-6 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm flex items-center justify-center gap-2 border border-slate-700 transition-all text-center"
              >
                Solicită un audit gratuit
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
    </div>
  );
}
