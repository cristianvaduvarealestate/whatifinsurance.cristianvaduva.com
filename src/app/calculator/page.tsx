'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Calculator,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Info,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sliders,
  DollarSign,
  TrendingDown,
  Building,
  Car,
  Plane,
  Briefcase,
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import {
  calculateFinancialExposure,
  FinancialExposureInput,
  PRESET_EXPOSURE_SCENARIOS,
  PresetScenario
} from '@/lib/financialExposureCalculator';
import { trackEvent } from '@/lib/analytics';

export default function FinancialExposureCalculatorPage() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('conducta-baie-vecini');

  // Input states
  const [assetValue, setAssetValue] = useState<number>(120000);
  const [totalEstimatedLoss, setTotalEstimatedLoss] = useState<number>(38000);
  const [eligibleLoss, setEligibleLoss] = useState<number>(38000);
  const [deductibleType, setDeductibleType] = useState<'fixed' | 'percentage'>('fixed');
  const [deductibleValue, setDeductibleValue] = useState<number>(0);
  const [availableLimit, setAvailableLimit] = useState<number>(120000);
  const [hasExclusionFlag, setHasExclusionFlag] = useState<boolean>(false);
  const [hasSublimit, setHasSublimit] = useState<boolean>(false);
  const [sublimitApplied, setSublimitApplied] = useState<number>(10000);
  const [currency, setCurrency] = useState<'RON' | 'EUR'>('RON');

  // Load preset handler
  const handleSelectPreset = (preset: PresetScenario) => {
    setSelectedPresetId(preset.id);
    const inp = preset.inputs;
    setAssetValue(inp.assetValue || 100000);
    setTotalEstimatedLoss(inp.totalEstimatedLoss);
    setEligibleLoss(inp.eligibleLoss ?? inp.totalEstimatedLoss);
    setDeductibleType(inp.deductibleType);
    setDeductibleValue(inp.deductibleValue);
    setAvailableLimit(inp.availableLimit);
    setHasExclusionFlag(Boolean(inp.hasExclusionFlag));
    setHasSublimit(typeof inp.sublimitApplied === 'number');
    if (typeof inp.sublimitApplied === 'number') {
      setSublimitApplied(inp.sublimitApplied);
    }
    setCurrency(inp.currency || 'RON');

    trackEvent('calculator_preset_select', {
      preset_id: preset.id,
      category: preset.category
    });
  };

  const selectedPreset = useMemo(() => {
    return PRESET_EXPOSURE_SCENARIOS.find((p) => p.id === selectedPresetId);
  }, [selectedPresetId]);

  // Perform calculation
  const result = useMemo(() => {
    const input: FinancialExposureInput = {
      assetValue,
      totalEstimatedLoss,
      eligibleLoss: hasExclusionFlag ? 0 : eligibleLoss,
      deductibleType,
      deductibleValue,
      availableLimit,
      hasExclusionFlag,
      sublimitApplied: hasSublimit ? sublimitApplied : undefined,
      currency
    };
    return calculateFinancialExposure(input, selectedPreset?.nature || 'ILUSTRATIV_SIMULAT');
  }, [
    assetValue,
    totalEstimatedLoss,
    eligibleLoss,
    deductibleType,
    deductibleValue,
    availableLimit,
    hasExclusionFlag,
    hasSublimit,
    sublimitApplied,
    currency,
    selectedPreset
  ]);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumbs & Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
            <Link href="/" className="hover:text-slate-900 transition-colors">WHAT IF INSURANCE</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">FINANCIAL EXPOSURE CALCULATOR</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#E10600]" />
            <span>Simulator Educațional de Risc Financiar</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#06141B] tracking-tight">
            Financial Exposure Calculator
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Calculează transparent diferența dintre prejudiciul total al unei daune, despăgubirea teoretică a asigurătorului și pierderea pe care riști să o suporți din fonduri proprii (out-of-pocket).
          </p>
        </div>

        {/* Quick Presets Carousel / Tabs */}
        <div className="mb-8 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
              Exemple Demonstrative Documentate
            </span>
            <span className="text-xs text-slate-400">Apasă pentru încărcare automată</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {PRESET_EXPOSURE_SCENARIOS.map((preset) => {
              const isSelected = selectedPresetId === preset.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handleSelectPreset(preset)}
                  className={`p-3 text-left rounded-xl border transition-all text-xs ${
                    isSelected
                      ? 'border-[#06141B] bg-slate-900 text-white shadow-sm'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <div className={`font-mono text-[10px] uppercase font-bold mb-1 ${isSelected ? 'text-[#E10600]' : 'text-slate-500'}`}>
                    {preset.category}
                  </div>
                  <div className="font-semibold leading-snug line-clamp-2">
                    {preset.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main 2-Column Interface: Inputs (Left 6) + Output Simulator (Right 6) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Inputs Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold text-[#06141B] flex items-center gap-2">
                <Sliders className="w-5 h-5 text-slate-600" />
                Parametrii Simulării
              </h2>
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setCurrency('RON')}
                  className={`px-2.5 py-1 text-xs font-mono font-bold rounded ${currency === 'RON' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}
                >
                  RON
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('EUR')}
                  className={`px-2.5 py-1 text-xs font-mono font-bold rounded ${currency === 'EUR' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}
                >
                  EUR
                </button>
              </div>
            </div>

            {/* Field 1: Total Loss */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="totalLoss" className="text-sm font-semibold text-slate-900">
                  Prejudiciul Total Estimat al Evenimentului
                </label>
                <span className="text-xs font-mono font-bold text-[#06141B]">
                  {totalEstimatedLoss.toLocaleString('ro-RO')} {currency}
                </span>
              </div>
              <input
                id="totalLoss"
                type="number"
                min="0"
                step="500"
                value={totalEstimatedLoss}
                onChange={(e) => setTotalEstimatedLoss(Math.max(0, Number(e.target.value) || 0))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <p className="text-xs text-slate-500 mt-1">
                Costul integral estimat al reparațiilor, pieselor, manoperei sau despăgubirii terților.
              </p>
            </div>

            {/* Field 2: Asset Value */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="assetValue" className="text-sm font-semibold text-slate-900">
                  Valoarea Activului Asigurat (Locuință / Mașină)
                </label>
                <span className="text-xs font-mono font-bold text-slate-600">
                  {assetValue.toLocaleString('ro-RO')} {currency}
                </span>
              </div>
              <input
                id="assetValue"
                type="number"
                min="0"
                step="1000"
                value={assetValue}
                onChange={(e) => setAssetValue(Math.max(0, Number(e.target.value) || 0))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <p className="text-xs text-slate-500 mt-1">
                Valoarea de reconstrucție/piață declarată a imobilului sau vehiculului.
              </p>
            </div>

            {/* Field 3: Deductible (Franșiză) */}
            <div className="pt-2 border-t border-slate-100">
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-sm font-semibold text-slate-900">
                  Franșiza Contractuală per Eveniment
                </label>
                <div className="flex items-center gap-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setDeductibleType('fixed')}
                    className={`px-2 py-0.5 rounded ${deductibleType === 'fixed' ? 'bg-slate-900 text-white font-bold' : 'bg-slate-100 text-slate-600'}`}
                  >
                    Sumă Fixă
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeductibleType('percentage')}
                    className={`px-2 py-0.5 rounded ${deductibleType === 'percentage' ? 'bg-slate-900 text-white font-bold' : 'bg-slate-100 text-slate-600'}`}
                  >
                    % Procent
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  step={deductibleType === 'percentage' ? '1' : '50'}
                  value={deductibleValue}
                  onChange={(e) => setDeductibleValue(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
                <span className="text-sm font-mono text-slate-500 font-bold px-2">
                  {deductibleType === 'percentage' ? '%' : currency}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Partea din fiecare daună agreată prin contract pe care asiguratul o suportă obligatoriu din buzunar (ex. 100 EUR la CASCO sau 0 la clădire Eurocasa).
              </p>
            </div>

            {/* Field 4: Available Limit */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="availLimit" className="text-sm font-semibold text-slate-900">
                  Limita / Suma Maximă Asigurată
                </label>
                <span className="text-xs font-mono font-bold text-slate-600">
                  {availableLimit.toLocaleString('ro-RO')} {currency}
                </span>
              </div>
              <input
                id="availLimit"
                type="number"
                min="0"
                step="5000"
                value={availableLimit}
                onChange={(e) => setAvailableLimit(Math.max(0, Number(e.target.value) || 0))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <p className="text-xs text-slate-500 mt-1">
                Plafonul maxim pe care asigurătorul îl poate plăti conform contractului.
              </p>
            </div>

            {/* Advanced Toggles: Exclusion & Sublimit */}
            <div className="pt-2 border-t border-slate-100 space-y-3">
              <span className="text-xs font-mono uppercase text-slate-400 font-bold block">
                Condiții Speciale & Clauze Restrictive
              </span>

              {/* Exclusion toggle */}
              <label className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={hasExclusionFlag}
                  onChange={(e) => setHasExclusionFlag(e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#E10600] rounded focus:ring-0"
                />
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">
                    Evenimentul intră sub incidența unei excluderi contractuale
                  </span>
                  <span className="text-slate-500 block mt-0.5">
                    Ex: locuință nelocuită peste 30–60 zile fără notificare, conducere sub influența alcoolului, uzură sau viciu ascuns.
                  </span>
                </div>
              </label>

              {/* Sublimit toggle */}
              <label className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={hasSublimit}
                  onChange={(e) => setHasSublimit(e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#E10600] rounded focus:ring-0"
                />
                <div className="text-xs flex-1">
                  <span className="font-bold text-slate-900 block">
                    Se aplică o sublimită specifică pentru această categorie de risc
                  </span>
                  <span className="text-slate-500 block mt-0.5">
                    Ex: plafon de 2.000 € pentru căutare/acces fisură instalații, sau 1.000 € pentru bijuterii.
                  </span>
                  {hasSublimit && (
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-slate-600">Sublimită:</span>
                      <input
                        type="number"
                        min="0"
                        step="500"
                        value={sublimitApplied}
                        onChange={(e) => setSublimitApplied(Math.max(0, Number(e.target.value) || 0))}
                        className="px-2 py-1 rounded border border-slate-300 text-xs w-32 focus:outline-none focus:ring-1 focus:ring-slate-900"
                      />
                      <span className="text-xs font-mono text-slate-500">{currency}</span>
                    </div>
                  )}
                </div>
              </label>
            </div>
          </div>

          {/* RIGHT: Results & Transparent Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Visual Result Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-slate-500 block">
                    Rezultatul Simulării Financiare
                  </span>
                  <span className={`inline-block mt-1 text-[11px] font-mono px-2 py-0.5 rounded font-bold ${
                    result.calculationNature === 'DOCUMENTAT_ORIENTATIV'
                      ? 'bg-blue-100 text-blue-900 border border-blue-200'
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}>
                    {result.calculationNature === 'DOCUMENTAT_ORIENTATIV'
                      ? 'Bazat pe Condiții Contractuale Documentate (Orientativ)'
                      : 'Simulare Ilustrativă Generică'}
                  </span>
                </div>
                <span className={`self-start sm:self-auto px-2.5 py-1 rounded text-xs font-mono font-bold uppercase ${
                  result.statusVerdict === 'FULL_COVERAGE'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : result.statusVerdict === 'PARTIAL_COVERAGE'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : result.statusVerdict === 'HIGH_EXPOSURE'
                    ? 'bg-amber-50 text-amber-700 border border-amber-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {result.statusVerdict}
                </span>
              </div>

              {selectedPreset && (
                <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                  <span className="font-bold text-slate-800 block mb-0.5">Preset: {selectedPreset.label}</span>
                  <span className="text-[11px] text-slate-500 font-mono block">Bază contractuală: {selectedPreset.contractualBasis}</span>
                </div>
              )}

              {/* Limit Exceeded Alert if applicable */}
              {result.isLimitExceeded && (
                <div className="mt-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-900 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Plafon Contractual Depășit:</strong> Prejudiciul eligibil după franșiză depășește limita disponibilă cu <strong>{result.limitExceededAmount.toLocaleString('ro-RO')} {currency}</strong>. Această diferență este suportată integral din fonduri proprii.
                  </div>
                </div>
              )}

              {/* Deductible Absorbed Alert if applicable */}
              {result.isDeductibleAbsorbed && (
                <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Daună sub Franșiză:</strong> Cuantumul daunei eligibile este mai mic sau egal cu franșiza deductibilă contractuală ({result.calculatedDeductible.toLocaleString('ro-RO')} {currency}). Asigurătorul nu efectuează plată.
                  </div>
                </div>
              )}

              {/* Huge Numbers Comparison */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Out of Pocket Box */}
                <div className={`p-5 rounded-2xl border ${
                  result.estimatedOutOfPocket > 0
                    ? 'bg-red-50/60 border-red-200'
                    : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className="text-xs font-mono text-red-700 font-bold block mb-1">
                    PIERDERE DIN FONDURI PROPRII
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-[#06141B] tracking-tight">
                    {result.estimatedOutOfPocket.toLocaleString('ro-RO')} <span className="text-lg font-normal text-slate-500">{currency}</span>
                  </div>
                  <div className="mt-1 text-xs text-slate-600 font-medium">
                    {result.outOfPocketPercentage}% din prejudiciul total estimat
                  </div>
                </div>

                {/* Insurer Payment Box */}
                <div className="p-5 rounded-2xl border bg-emerald-50/60 border-emerald-200">
                  <span className="text-xs font-mono text-emerald-700 font-bold block mb-1">
                    DESPĂGUBIRE TEORETICĂ ASIGURĂTOR
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-950 tracking-tight">
                    {result.estimatedInsurerPayment.toLocaleString('ro-RO')} <span className="text-lg font-normal text-slate-500">{currency}</span>
                  </div>
                  <div className="mt-1 text-xs text-emerald-700 font-medium">
                    {100 - result.outOfPocketPercentage}% preluat conform ipotezelor
                  </div>
                </div>
              </div>

              {/* Status Explanation */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-sm text-[#06141B] mb-1">
                  {result.statusTitleRo}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {result.statusExplanationRo}
                </p>
              </div>

              {/* Step-by-Step Breakdown */}
              <div className="mt-6 space-y-2.5 text-xs font-mono">
                <span className="text-slate-400 uppercase tracking-wider block font-bold mb-1">
                  Descompunerea Matematică a Calculului
                </span>

                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">Prejudiciu total declarat:</span>
                  <span className="font-bold text-slate-900">{result.totalLoss.toLocaleString('ro-RO')} {currency}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">Partea contractual eligibilă:</span>
                  <span className="font-bold text-slate-900">{result.eligibleLoss.toLocaleString('ro-RO')} {currency}</span>
                </div>

                {result.excludedLoss > 0 && (
                  <div className="flex justify-between py-1.5 border-b border-slate-100 text-red-600">
                    <span>Partea exclusă / neacoperită:</span>
                    <span className="font-bold">+{result.excludedLoss.toLocaleString('ro-RO')} {currency}</span>
                  </div>
                )}

                <div className="flex justify-between py-1.5 border-b border-slate-100 text-slate-600">
                  <span>Franșiză scăzută conform contract:</span>
                  <span className="font-bold">-{result.calculatedDeductible.toLocaleString('ro-RO')} {currency}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-100 text-slate-600">
                  <span>Limită / Sublimită aplicabilă:</span>
                  <span className="font-bold">{result.effectiveLimit.toLocaleString('ro-RO')} {currency}</span>
                </div>

                <div className="flex justify-between py-2 pt-3 text-sm font-bold text-slate-900 border-t-2 border-slate-900">
                  <span>Out-of-Pocket Net Suportat:</span>
                  <span className="text-[#E10600]">{result.estimatedOutOfPocket.toLocaleString('ro-RO')} {currency}</span>
                </div>
              </div>

              {/* Assumptions Used */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-bold">
                  Ipoteze de Calcul Utilizate
                </span>
                <ul className="space-y-1 text-xs text-slate-500 list-disc list-inside">
                  {result.assumptions.map((ass, i) => (
                    <li key={i}>{ass}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mandatory Educational Disclaimer */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block mb-0.5">Notă Educațională Obligatorie · Natura Calculului</span>
                {result.officialGeneraliDisclaimer}
              </div>
            </div>

            {/* Action Card — Distinction between educational simulation and individual advisory */}
            <div className="p-6 rounded-3xl bg-[#06141B] text-white space-y-4 border border-slate-800">
              <div className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
                Traseul Tău de Protecție
              </div>
              <h3 className="text-xl font-black leading-tight text-white">
                Vrei să verifici dacă polița ta actuală acoperă aceste riscuri?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                WHAT IF INSURANCE este un calculator educațional ilustrativ. Pentru o analiză detaliată a dosarului tău și consultanță individuală dedicată, accesează platforma de consultanță.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/verificare-polita"
                  className="py-3 px-5 rounded-full bg-[#E10600] hover:bg-red-700 text-white font-bold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2"
                >
                  <span>Mergi la Verificare Poliță</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://insurance.cristianvaduva.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-1.5 border border-slate-700"
                >
                  <span>Consultanță: insurance.cristianvaduva.com</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
