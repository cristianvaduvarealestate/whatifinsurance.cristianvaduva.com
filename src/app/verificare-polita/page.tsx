'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Download,
  ArrowLeft,
  Building2,
  Car,
  Plane,
  HeartPulse,
  Briefcase,
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  category: string;
  title: string;
  question: string;
  importance: 'Critic' | 'Recomandat' | 'Opțional';
  reason: string;
}

const CHECKLIST_ITEMS: Record<string, ChecklistItem[]> = {
  casa: [
    {
      id: 'c1',
      category: 'Locuință & Casă',
      title: 'Avarii la instalațiile interioare de apă (apă de conductă)',
      question: 'Este acoperită spargerea țevilor interioare și căutarea/localizarea avariei în perete?',
      importance: 'Critic',
      reason: 'Avariile de apă reprezintă principala cauză de daună pe locuințe și sunt complet excluse de polița obligatorie PAD.',
    },
    {
      id: 'c2',
      category: 'Locuință & Casă',
      title: 'Răspundere civilă față de vecini (Inundație / Incendiu)',
      question: 'Care este limita maximă de despăgubire dacă apa sau focul afectează apartamentele din jur?',
      importance: 'Critic',
      reason: 'Dacă inunzi vecinii, costurile de zugrăveală, parchet și bunuri avariate pot depăși zeci de mii de lei.',
    },
    {
      id: 'c3',
      category: 'Locuință & Casă',
      title: 'Clauza de neocupare (Locuință vacantă)',
      question: 'Câte zile consecutive poate sta casa nelocuită fără suspendarea acoperirii la furt sau îngheț?',
      importance: 'Recomandat',
      reason: 'Multe polițe suspendă acoperirea la 30 sau 60 de zile de nelocuire dacă nu oprești apa și nu notifici asigurătorul.',
    },
  ],
  auto: [
    {
      id: 'a1',
      category: 'Auto CASCO',
      title: 'Franșiza la avarii produse cu autor necunoscut / parcare',
      question: 'Ai franșiză fixă sau procentuală dacă găsești mașina zgâriată sau lovită în parcare?',
      importance: 'Critic',
      reason: 'Unele contracte aplică franșize mai mari dacă nu există un șofer vinovat identificat de Poliție.',
    },
    {
      id: 'a2',
      category: 'Auto CASCO',
      title: 'Reparație în reprezentanța oficială a mărcii',
      question: 'Contractul impune ateliere independente generice sau permite reprezentanța autorizată cu piese OE?',
      importance: 'Recomandat',
      reason: 'Păstrarea garanției de producător și calibrarea senzorilor ADAS necesită service omologat de marcă.',
    },
    {
      id: 'a3',
      category: 'Auto CASCO',
      title: 'Excluderea forțării apelor stătătoare (Hidrolock)',
      question: 'Este exclusă aspirarea apei la motor la traversarea unor zone cu bălți sau pasaje inundate?',
      importance: 'Critic',
      reason: 'Aspirarea apei în motorul termic atrage daune totale de mii de euro și este frecvent exclusă sub prezumția de neglijență.',
    },
  ],
  calatorii: [
    {
      id: 't1',
      category: 'Călătorii Internaționale',
      title: 'Plafonul de asistență medicală de urgență',
      question: 'Plafonul este de minim 30.000 EUR pentru Europa sau 100.000 EUR pentru SUA/Asia?',
      importance: 'Critic',
      reason: 'O zi de spitalizare la terapie intensivă în America de Nord poate depăși 15.000 USD fără acoperire.',
    },
    {
      id: 't2',
      category: 'Călătorii Internaționale',
      title: 'Apelarea obligatorie a centralei de alarmă',
      question: 'Ești obligat să suni la asistență ÎNAINTE de a merge la spital?',
      importance: 'Critic',
      reason: 'Nerespectarea procedurii de notificare prealabilă a asistenței poate atrage o franșiză suplimentară sau decontarea doar parțială a cheltuielilor.',
    },
  ],
  viata: [
    {
      id: 'v1',
      category: 'Viață & Sănătate',
      title: 'Perioada de grație și carantină medicală (Waiting Period)',
      question: 'Există un termen de 30-90 de zile de la emitere în care bolile nu sunt despăgubite?',
      importance: 'Critic',
      reason: 'Pentru a preveni subscrierea oportunistă, afecțiunile acute apărute în primele luni sunt adesea excluse.',
    },
    {
      id: 'v2',
      category: 'Viață & Sănătate',
      title: 'Definiția incapacității de muncă',
      question: 'Polița acoperă imposibilitatea de a profesa meseria ta specifică sau orice muncă?',
      importance: 'Recomandat',
      reason: 'Clauza de incapacitate specifică profesiei oferă o protecție superioară celei generale.',
    },
  ],
  business: [
    {
      id: 'b1',
      category: 'Business & Cyber',
      title: 'Perioada de indemnizare la întreruperea activității (BI)',
      question: 'Acoperirea de pierdere a profitului brut este pentru 6, 12 sau 24 de luni?',
      importance: 'Critic',
      reason: 'Reconstrucția unui spațiu comercial și livrarea utilajelor specializate durează frecvent peste 9 luni.',
    },
    {
      id: 'b2',
      category: 'Business & Cyber',
      title: 'Ingineria socială și frauda de plată (Phishing)',
      question: 'Polița Cyber include transferurile frauduloase autorizate prin manipulare umană?',
      importance: 'Critic',
      reason: 'Multe polițe cyber acoperă doar breșele tehnice directe, excluzând plățile efectuate prin înșelăciune.',
    },
  ],
};

export default function PolicyChecklistPage() {
  const [selectedPillars, setSelectedPillars] = useState<string[]>(['casa', 'auto', 'calatorii']);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const togglePillar = (pillar: string) => {
    setSelectedPillars((prev) =>
      prev.includes(pillar) ? prev.filter((p) => p !== pillar) : [...prev, pillar]
    );
  };

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const activeChecklist = selectedPillars.flatMap((p) => CHECKLIST_ITEMS[p] || []);
  const verifiedCount = Object.values(checkedItems).filter(Boolean).length;

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
            <FileCheck2 className="w-3.5 h-3.5 text-[#E10600]" />
            <span>Audit Practic · Fără Înregistrare · Fără Date Personale</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#06141B] tracking-tight">
            Nu ghici. Verifică ce ai semnat.
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            11 clauze contractuale care decid dosarul de daună: excluderi la țeavă spartă, franșize ascunse în parcare, carantină medicală și termenul critic de notificare.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
        
        {/* Step 1: Select Pillars */}
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase text-slate-500 font-bold block">
            PASUL 1: ALEGE DOMENIILE TALE DE ASIGURARE
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { id: 'casa', label: 'Casă & Locuință', icon: Building2 },
              { id: 'auto', label: 'Auto & CASCO', icon: Car },
              { id: 'calatorii', label: 'Călătorii', icon: Plane },
              { id: 'viata', label: 'Viață & Sănătate', icon: HeartPulse },
              { id: 'business', label: 'Business & Cyber', icon: Briefcase },
            ].map((pillar) => {
              const active = selectedPillars.includes(pillar.id);
              const Icon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  onClick={() => togglePillar(pillar.id)}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 ${
                    active
                      ? 'border-[#06141B] bg-[#06141B] text-white shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? 'text-white' : 'text-slate-500'}`} />
                  <span className="text-xs font-bold leading-snug">{pillar.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: The Generated Checklist */}
        <div className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-mono uppercase text-slate-500 font-bold block">
                PASUL 2: CLAUZE CONTRACTUALE CU IMPACT FINANCIAR DIRECT
              </span>
              <p className="text-xs text-slate-600 mt-0.5">
                Bifează fiecare clauză pe măsură ce o identifici în contractul tău sau în condițiile generale.
              </p>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 font-bold">
              Verificate: <span className="text-[#06141B]">{verifiedCount}</span> din {activeChecklist.length}
            </div>
          </div>

          <div className="space-y-3.5">
            {activeChecklist.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    isChecked
                      ? 'border-emerald-300 bg-emerald-50/60'
                      : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      {isChecked ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <div className="w-5 h-5 rounded-md border-2 border-slate-300 flex items-center justify-center bg-white" />
                      )}
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-700 font-bold px-2 py-0.5 rounded bg-slate-100">
                          {item.category}
                        </span>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded ${
                            item.importance === 'Critic'
                              ? 'bg-red-50 text-[#E10600] border border-red-200'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {item.importance}
                        </span>
                      </div>

                      <h3
                        className={`text-sm sm:text-base font-bold ${
                          isChecked ? 'line-through text-slate-400' : 'text-[#06141B]'
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-700 font-medium">
                        Întrebare: „{item.question}”
                      </p>

                      <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                        De ce contează: {item.reason}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA to get professional review */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E10600] font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Vrei o a doua privire pe contractul tău?</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[#06141B]">
            Trimiți contractul, primești o analiză fără filtre comerciale
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
            Literele mici și definițiile juridice pot schimba complet soarta unui dosar de daună. Solicită o revizuire aplicată a polițelor tale — fără presiune de vânzare, doar o analiză clară a clauzelor.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/contact?topic=review-polita"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Cere o analiză dedicată de clauze</span>
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </Link>

            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-slate-300 hover:bg-slate-100 text-[#06141B] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>Imprimă / Salvează PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
