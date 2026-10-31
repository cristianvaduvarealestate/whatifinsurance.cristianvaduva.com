'use client';

import React, { useState } from 'react';
import { Scenario } from '@/types/scenario';
import { ShieldAlert, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';

interface ComparisonViewerProps {
  scenario: Scenario;
}

type TabType = 'without' | 'with' | 'verify';

export const ComparisonViewer: React.FC<ComparisonViewerProps> = ({ scenario }) => {
  const [activeTab, setActiveTab] = useState<TabType>('without');

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm text-[#06141B]">
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

        {/* Segmented Control */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-full border border-slate-200">
          <button
            type="button"
            onClick={() => setActiveTab('without')}
            className={`py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'without'
                ? 'bg-white text-[#E10600] shadow-sm'
                : 'text-slate-600 hover:text-[#06141B]'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Fără Asigurare</span>
            <span className="sm:hidden">Fără</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('with')}
            className={`py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'with'
                ? 'bg-[#06141B] text-white shadow-sm'
                : 'text-slate-600 hover:text-[#06141B]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Cu Asigurare</span>
            <span className="sm:hidden">Cu Asig.</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('verify')}
            className={`py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'verify'
                ? 'bg-white text-[#06141B] shadow-sm'
                : 'text-slate-600 hover:text-[#06141B]'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Ce Verifici</span>
            <span className="sm:hidden">Verifică</span>
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
                <span className="text-[10px] text-slate-400 block mt-0.5">* Conform condițiilor contractuale și franșizelor alese.</span>
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
  );
};
