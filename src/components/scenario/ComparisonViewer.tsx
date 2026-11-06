'use client';

import React, { useState } from 'react';
import { Scenario } from '@/types/scenario';
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  BookOpen,
  Info,
  Check,
  FileCheck,
} from 'lucide-react';

interface ComparisonViewerProps {
  scenario: Scenario;
}

type TabType = 'without' | 'with' | 'verify';

export const ComparisonViewer: React.FC<ComparisonViewerProps> = ({ scenario }) => {
  const [activeTab, setActiveTab] = useState<TabType>('without');
  const [dilemmaAnswer, setDilemmaAnswer] = useState<'automatic' | 'conditional' | null>(null);

  // Extract core points for rapid scanning
  const primaryExclusion = scenario.whatToCheck.exclusions?.[0] || 'Neglijența gravă, uzura normală sau lipsa de întreținere';
  const primaryCheckItem = scenario.whatToCheck.items?.[0]?.label || 'Clauza de răspundere civilă și sumele asigurate';

  return (
    <div className="w-full space-y-8">
      {/* ========================================================
          1. REZUMAT PE SCURT ÎN 15 SECUNDE (Executive Snapshot)
         ======================================================== */}
      <div className="w-full rounded-3xl bg-slate-50 border border-slate-200 p-5 sm:p-7 shadow-sm text-[#06141B]">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E10600] animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10600]">
            Pe scurt în 15 secunde · Ce trebuie să știi
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Card 1: Ce s-a întâmplat */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1.5 flex flex-col justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-slate-700" />
              1. Ce s-a întâmplat
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#06141B] line-clamp-3">
              {scenario.situation || scenario.shortDescription}
            </p>
            <span className="text-[10px] text-slate-400 font-mono mt-1 block">Risc cotidian real</span>
          </div>

          {/* Card 2: Consecință fără poliță */}
          <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200 shadow-2xs space-y-1.5 flex flex-col justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#B91C1C] flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-[#E10600]" />
              2. Fără polița potrivită
            </span>
            <p className="text-xs sm:text-sm font-bold text-[#06141B] line-clamp-3">
              {scenario.withoutInsurance.financialImpact}
            </p>
            <span className="text-[10px] text-red-700 font-semibold block mt-1">Plată din fonduri proprii</span>
          </div>

          {/* Card 3: Ce acoperă polița */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 shadow-2xs space-y-1.5 flex flex-col justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#15803D] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
              3. Ce acoperă polița
            </span>
            <p className="text-xs sm:text-sm font-bold text-[#06141B] line-clamp-3">
              {scenario.withInsurance.title}
            </p>
            <span className="text-[10px] text-emerald-700 font-semibold block mt-1">În limita sumei contractate</span>
          </div>

          {/* Card 4: Ce verifici în contract */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1.5 flex flex-col justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-slate-800" />
              4. Ce verifici
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-800 line-clamp-3">
              {primaryCheckItem}
            </p>
            <span className="text-[10px] text-slate-500 italic block mt-1">Evită excluderile</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. DILEMĂ INTERACTIVĂ: TU CE AI FI CREZUT?
         ======================================================== */}
      <div className="w-full rounded-3xl bg-slate-900 text-white p-5 sm:p-7 shadow-lg overflow-hidden relative">
        <div className="max-w-3xl space-y-3.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
            Test de intuiție contractuală
          </div>

          <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
            Tu ce ai fi crezut că se întâmplă în această situație?
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Dacă ai o asigurare standard, crezi că despăgubirea este garantată automat sau depinde de clauze specifice?
          </p>

          {/* Interactive choices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              onClick={() => setDilemmaAnswer('automatic')}
              className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between text-xs sm:text-sm font-bold min-h-[44px] ${
                dilemmaAnswer === 'automatic'
                  ? 'bg-red-500/20 border-red-500 text-white shadow-md'
                  : 'bg-white/5 border-white/15 text-slate-200 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              <span>„Credeam că o poliță acoperă automat dauna.”</span>
              {dilemmaAnswer === 'automatic' && <Check className="w-4 h-4 text-red-400 shrink-0" />}
            </button>

            <button
              type="button"
              onClick={() => setDilemmaAnswer('conditional')}
              className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between text-xs sm:text-sm font-bold min-h-[44px] ${
                dilemmaAnswer === 'conditional'
                  ? 'bg-emerald-500/20 border-emerald-500 text-white shadow-md'
                  : 'bg-white/5 border-white/15 text-slate-200 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              <span>„Știam că depinde de clauze specifice și excluderi.”</span>
              {dilemmaAnswer === 'conditional' && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
            </button>
          </div>

          {/* Feedback reveal */}
          {dilemmaAnswer && (
            <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-xs sm:text-sm leading-relaxed animate-fadeIn space-y-1.5 mt-3">
              <div className="flex items-center gap-2 font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Educație, nu frică: Realitatea contractuală</span>
              </div>
              <p className="text-slate-200">
                Majoritatea asiguraților presupun că simpla existență a unei polițe garantează plata integrală. În realitate, 
                orice indemnizație depinde strict de <strong>clauza specifică contractată</strong> (de ex. răspundere civilă, apă de conductă, fenomene naturale), 
                de <strong>limita sumei asigurate</strong> și de absența <strong>excluderilor</strong> contractuale.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================
          3. COMPARAȚIE DIRECTĂ DETALIATĂ (TABBED VIEWER)
         ======================================================== */}
      <div className="w-full rounded-3xl bg-white border border-slate-200 p-5 sm:p-8 shadow-sm text-[#06141B]">
        {/* Tab Switcher Header */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs uppercase font-mono tracking-wider text-[#E10600] font-bold block mb-1">
              Comparație Directă
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#06141B]">
              Ce se schimbă când ai polița potrivită?
            </h3>
          </div>

          {/* Segmented Control with comfortable touch targets */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-full border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab('without')}
              className={`py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 min-h-[40px] ${
                activeTab === 'without'
                  ? 'bg-white text-[#E10600] shadow-sm'
                  : 'text-slate-600 hover:text-[#06141B]'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">FĂRĂ POLIȚĂ RELEVANTĂ</span>
              <span className="sm:hidden">Fără Poliță</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('with')}
              className={`py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 min-h-[40px] ${
                activeTab === 'with'
                  ? 'bg-[#06141B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#06141B]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">CU POLIȚĂ RELEVANTĂ</span>
              <span className="sm:hidden">Cu Poliță</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('verify')}
              className={`py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 min-h-[40px] ${
                activeTab === 'verify'
                  ? 'bg-white text-[#06141B] shadow-sm'
                  : 'text-slate-600 hover:text-[#06141B]'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">CE VERIFICI ÎN POLIȚĂ</span>
              <span className="sm:hidden">Ce Verifici</span>
            </button>
          </div>
        </div>

        {/* Tab Panels */}
        <div className="pt-6">
          {/* TAB 1: FĂRĂ ASIGURARE */}
          {activeTab === 'without' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-red-50/70 border border-red-200">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase bg-white text-[#E10600] border border-red-200 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#E10600]" />
                    {scenario.withoutInsurance.statusLabel}
                  </span>
                  <h4 className="text-lg font-bold text-[#06141B] mt-2">
                    {scenario.withoutInsurance.title}
                  </h4>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs uppercase font-mono text-slate-500 block">Impact Financiar (Estimare orientativă)</span>
                  <span className="text-xl font-black text-[#E10600]">
                    {scenario.withoutInsurance.financialImpact}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">* Costurile reale variază în funcție de circumstanțe și deviz.</span>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-500">
                  Consecințe practice și cheltuieli imediate:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {scenario.withoutInsurance.points.map((point, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                    >
                      <div className="p-1 rounded-md bg-white border border-red-200 mt-0.5 shrink-0">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#E10600]" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <strong className="text-[#06141B]">Concluzie situație:</strong> {scenario.withoutInsurance.summary}
              </div>
            </div>
          )}

          {/* TAB 2: CU POLIȚĂ RELEVANTĂ */}
          {activeTab === 'with' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#06141B] text-white shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {scenario.withInsurance.statusLabel}
                  </span>
                  <h4 className="text-lg font-bold text-[#06141B] mt-2">
                    {scenario.withInsurance.title}
                  </h4>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs uppercase font-mono text-slate-500 block">Acoperire prin Poliță (Estimare orientativă)</span>
                  <span className="text-xl font-black text-[#06141B]">
                    {scenario.withInsurance.financialImpact}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">* Poate fi acoperit în condițiile prevăzute de contract și în limita sumei asigurate.</span>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-500">
                  Mecanism de despăgubire și avantaje:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {scenario.withInsurance.points.map((point, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                    >
                      <div className="p-1 rounded-md bg-white border border-slate-200 mt-0.5 shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <strong className="text-[#06141B]">Concluzie situație:</strong> {scenario.withInsurance.summary}
              </div>
            </div>
          )}

          {/* TAB 3: CE TREBUIE SĂ VERIFICI */}
          {activeTab === 'verify' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h5 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-500 mb-3">
                  Clauze cheie, franșize și condiții contractuale:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {scenario.whatToCheck.items.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <span className="text-xs font-mono font-bold text-[#06141B] uppercase block mb-1">
                        {item.label}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {scenario.whatToCheck.exclusions && scenario.whatToCheck.exclusions.length > 0 && (
                <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E10600] flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    Excluderi importante de reținut
                  </span>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
                    {scenario.whatToCheck.exclusions.map((exclusion, i) => (
                      <li key={i}>{exclusion}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mandatory Educational Disclaimer */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex items-start gap-2.5 text-xs text-slate-500">
          <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-800 font-semibold">Notă educațională:</strong>{' '}
            Informațiile prezentate pe WHAT IF INSURANCE au caracter strict didactic. Acoperirea efectivă și plata indemnizației depind exclusiv de formularea exactă a clauzelor din contractul dumneavoastră individual și de circumstanțele reale constatate ale daunei.
          </p>
        </div>
      </div>

      {/* ========================================================
          4. CELE 4 PRINCIPII FUNDAMENTALE: DE CE CONTEAZĂ ASIGURAREA
         ======================================================== */}
      <div className="w-full rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm text-[#06141B] space-y-5">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            Ghid educațional
          </span>
          <h3 className="text-lg sm:text-xl font-black text-[#06141B]">
            Cele 4 diferențe esențiale care decid dacă primești despăgubire
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Asigurarea nu este o promisiune generică că totul va fi bine. Este un contract de precizie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* Punctul 1 */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="text-xs font-mono font-bold text-[#E10600] uppercase block">
              1. A avea o poliță vs Polița potrivită
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              O asigurare obligatorie (PAD) acoperă exclusiv cele 3 riscuri de dezastru natural prevăzute de lege (cutremur, inundații naturale, alunecări de teren) și nu este interschimbabilă cu o asigurare facultativă. Nu despăgubește o țeavă spartă, un incendiu accidental din interior sau daunele provocate vecinilor. Pentru aceste riscuri este necesară o poliță facultativă cu clauze contractate distinct.
            </p>
          </div>

          {/* Punctul 2 */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="text-xs font-mono font-bold text-[#06141B] uppercase block">
              2. Acoperire suficientă (Subasigurarea)
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Dacă suma asigurată agreată în contract este inferioară valorii reale de reconstrucție sau de piață a bunului, în caz de daună parțială indemnizația poate fi redusă proporțional (regula proporțională). Verifică actualizarea periodică a sumelor asigurate.
            </p>
          </div>

          {/* Punctul 3 */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="text-xs font-mono font-bold text-slate-800 uppercase block">
              3. Cunoașterea excluderilor contractuale
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Fiecare contract conține o listă precisă de excluderi specifice. Neglijența gravă, lipsa mentenanței obligatorii sau nerespectarea cerințelor de prevenție stipulate în condițiile generale pot atrage refuzul parțial sau total al dosarului de daună.
            </p>
          </div>

          {/* Punctul 4 */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="text-xs font-mono font-bold text-[#15803D] uppercase block">
              4. Franșiza și termenul de notificare
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Franșiza contractuală reprezintă partea din daună suportată de asigurat, dacă este prevăzută în condițiile de asigurare. Respectă termenul de notificare prevăzut în poliță și procedura de avizare a daunei, conservând probele foto/video ale evenimentului.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

