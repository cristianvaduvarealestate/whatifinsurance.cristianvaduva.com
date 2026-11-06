'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Info,
  HelpCircle,
  ExternalLink,
  SlidersHorizontal,
  Home,
  Car,
  Plane,
  Users,
  HeartPulse,
  Briefcase,
  Gem,
  Key,
} from 'lucide-react';
import {
  CHECKLIST_CATEGORIES,
  CHECKLIST_CONTEXTS,
  ChecklistCategory,
  ChecklistContext,
  ChecklistClause,
  getPersonalizedChecklist,
} from '@/data/personalizedChecklist';
import { trackEvent } from '@/lib/analytics';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Car,
  Plane,
  Users,
  HeartPulse,
  Briefcase,
  Gem,
  Key,
};

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
  const paramCategory = searchParams.get('category') as ChecklistCategory | null;

  // Selected Categories
  const [selectedCategories, setSelectedCategories] = useState<ChecklistCategory[]>(() => {
    if (paramCategory && CHECKLIST_CATEGORIES.some((c) => c.id === paramCategory)) {
      return [paramCategory];
    }
    return ['locuinta', 'auto', 'calatorii'];
  });

  // Selected Contexts
  const [selectedContexts, setSelectedContexts] = useState<ChecklistContext[]>([]);

  // Checked state for progress tracking (safely persisted in localStorage)
  const [checkedClauseIds, setCheckedClauseIds] = useState<Record<string, boolean>>({});
  const [isConfiguring, setIsConfiguring] = useState(false);

  // Restore checked items from localStorage on mount & track checklist_open
  useEffect(() => {
    try {
      const saved = localStorage.getItem('whatif_checklist_checked');
      if (saved) {
        setCheckedClauseIds(JSON.parse(saved));
      }
    } catch {
      // Ignore localStorage errors
    }

    trackEvent('checklist_open', {
      category: paramCategory || 'general',
      source_page: '/verificare-polita',
    });
  }, [paramCategory]);

  // Sync checked items to localStorage
  const handleToggleCheck = (clauseId: string) => {
    setCheckedClauseIds((prev) => {
      const next = { ...prev, [clauseId]: !prev[clauseId] };
      try {
        localStorage.setItem('whatif_checklist_checked', JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  const handleToggleCategory = (cat: ChecklistCategory) => {
    setSelectedCategories((prev) => {
      if (prev.includes(cat)) {
        if (prev.length === 1) return prev; // Keep at least one
        return prev.filter((c) => c !== cat);
      }
      return [...prev, cat];
    });
  };

  const handleToggleContext = (ctx: ChecklistContext) => {
    setSelectedContexts((prev) =>
      prev.includes(ctx) ? prev.filter((c) => c !== ctx) : [...prev, ctx]
    );
  };

  // Generate personalized 5–8 clauses
  const activeClauses = useMemo(() => {
    return getPersonalizedChecklist(selectedCategories, selectedContexts);
  }, [selectedCategories, selectedContexts]);

  const verifiedCount = activeClauses.filter((c) => checkedClauseIds[c.id]).length;
  const progressPercent = activeClauses.length > 0 ? Math.round((verifiedCount / activeClauses.length) * 100) : 0;

  const handleResetChecklist = () => {
    setCheckedClauseIds({});
    try {
      localStorage.removeItem('whatif_checklist_checked');
    } catch {
      // Ignore
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#06141B] pb-24">
      {/* Header */}
      <div className="border-b border-slate-200 bg-slate-50/70 py-12 px-4 sm:px-6 lg:px-8">
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
            <span>Instrument Personalizat de Audit · 5–8 Clauze Relevante</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#06141B] tracking-tight">
            Ce verifici concret în polița ta înainte de o daună?
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Selectează ce te interesează și situația ta de viață. Sistemul selectează cele mai importante 5–8 clauze din contractele din România, îți arată unde se găsesc și ce întrebare să adresezi consultantului tău.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Personalization Setup Panel */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Pasul 1</span>
              <h2 className="text-lg sm:text-xl font-bold text-[#06141B]">
                Alege categoriile de interes pentru tine
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500 font-bold bg-slate-100 px-3 py-1 rounded-full w-fit">
              {selectedCategories.length} selectate
            </span>
          </div>

          {/* Category Chips Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {CHECKLIST_CATEGORIES.map((cat) => {
              const isSelected = selectedCategories.includes(cat.id);
              const IconComp = ICON_MAP[cat.iconName] || Home;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleToggleCategory(cat.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between min-h-[78px] active:scale-95 ${
                    isSelected
                      ? 'bg-[#06141B] text-white border-[#06141B] shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <IconComp className={`w-4 h-4 ${isSelected ? 'text-[#E10600]' : 'text-slate-500'}`} />
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>
                  <span className="text-xs font-bold leading-tight">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Contextual Toggles */}
          <div className="pt-2 border-t border-slate-100 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Pasul 2</span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs font-semibold text-slate-700">Situații contextuale relevante (opțional)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CHECKLIST_CONTEXTS.map((ctx) => {
                const isSelected = selectedContexts.includes(ctx.id);
                return (
                  <button
                    key={ctx.id}
                    type="button"
                    onClick={() => handleToggleContext(ctx.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 active:scale-98 ${
                      isSelected
                        ? 'bg-red-50/70 border-red-300 text-slate-900'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      readOnly
                      className="mt-0.5 rounded border-slate-300 text-[#06141B] pointer-events-none"
                    />
                    <div>
                      <div className="text-xs font-bold leading-snug">{ctx.label}</div>
                      <div className="text-[11px] text-slate-500 leading-tight mt-0.5">{ctx.hint}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Generated Checklist Status & Progress */}
        <section className="space-y-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
                <span>Progres Audit Personal: {verifiedCount} din {activeClauses.length} clauze verificate</span>
              </div>
              <div className="w-full sm:w-64 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700 mt-2">
                <div
                  className="h-full bg-emerald-400 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              {verifiedCount > 0 && (
                <button
                  type="button"
                  onClick={handleResetChecklist}
                  className="py-1.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Resetează bifările</span>
                </button>
              )}
              <Link
                href={`/contact?formType=audit_clauza&topic=review-polita&reason=${encodeURIComponent(
                  `Doresc asistență pentru cele ${activeClauses.length} clauze generate în checklist-ul meu personal.`
                )}`}
                className="py-2 px-4 rounded-xl bg-white text-[#06141B] hover:bg-slate-100 text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Solicită audit complet</span>
              </Link>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-800 font-semibold">Notă de certitudine:</strong> Bifarea unei opțiuni nu înseamnă că ești automat acoperit. Checklist-ul îți oferă ghidul exact de întrebări pentru a verifica clauzele din contractul tău înainte de o daună.
            </p>
          </div>
        </section>

        {/* 5 to 8 Tailored Clause Cards */}
        <section className="space-y-4">
          {activeClauses.map((clause, index) => {
            const isChecked = Boolean(checkedClauseIds[clause.id]);

            const auditClauseHref = `/contact?formType=audit_clauza&category=${encodeURIComponent(
              clause.scenarioCategory || 'casa'
            )}&scenario=${encodeURIComponent(clause.scenarioSlug || '')}&title=${encodeURIComponent(
              clause.clauseName
            )}&reason=${encodeURIComponent(
              `Doresc să verific în contractul meu clauza: «${clause.clauseName}». Întrebare cheie: «${clause.advisorQuestion}»`
            )}`;

            return (
              <div
                key={clause.id}
                className={`p-5 sm:p-7 rounded-3xl border transition-all space-y-4 ${
                  isChecked
                    ? 'bg-slate-50/60 border-emerald-200'
                    : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <button
                      type="button"
                      onClick={() => handleToggleCheck(clause.id)}
                      className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'bg-white border-slate-300 hover:border-slate-500 text-transparent'
                      }`}
                      aria-label={`Bifează clauza ${clause.clauseName}`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {clause.categoryLabel || clause.category.toUpperCase()}
                        </span>
                        <span className="text-[11px] font-mono font-bold text-slate-400">
                          #{index + 1}
                        </span>
                      </div>
                      <h3
                        className={`text-base sm:text-lg font-black text-[#06141B] leading-snug cursor-pointer ${
                          isChecked ? 'line-through text-slate-400' : ''
                        }`}
                        onClick={() => handleToggleCheck(clause.id)}
                      >
                        {clause.clauseName}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* 4 Pillars of Information per clause */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
                  {/* De ce este important */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="font-mono font-bold uppercase tracking-wider text-slate-500 text-[10px] block">
                      De ce este critic:
                    </span>
                    <p className="text-slate-700 leading-relaxed font-normal">
                      {clause.whyItMatters}
                    </p>
                  </div>

                  {/* Unde se găsește în document */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="font-mono font-bold uppercase tracking-wider text-slate-500 text-[10px] block">
                      Unde cauți în contract:
                    </span>
                    <p className="text-slate-700 leading-relaxed font-medium">
                      {clause.whereToFind}
                    </p>
                  </div>
                </div>

                {/* Întrebarea concretă pentru consultant */}
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/70 space-y-1 text-xs">
                  <span className="font-mono font-bold uppercase tracking-wider text-amber-900 text-[10px] flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
                    Ce întrebi concret consultantul:
                  </span>
                  <p className="text-slate-900 font-semibold italic leading-relaxed">
                    „{clause.advisorQuestion}”
                  </p>
                </div>

                {/* Actions per clause */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-slate-100">
                  {clause.scenarioSlug ? (
                    <Link
                      href={`/scenarii/${clause.scenarioCategory || 'casa'}/${clause.scenarioSlug}`}
                      className="text-xs font-bold text-slate-600 hover:text-[#06141B] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Vezi scenariul complet asociat</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  ) : <span />}

                  <Link
                    href={auditClauseHref}
                    className="py-2 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs inline-flex items-center gap-1.5 transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-700" />
                    <span>Solicită audit pentru această clauză</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        {/* Bottom Educational Conversion Block */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-5">
          <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mx-auto text-[#06141B] shadow-2xs">
            <ShieldCheck className="w-6 h-6 text-[#E10600]" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h3 className="text-2xl font-black text-[#06141B]">
              Vrei o privire profesionistă asupra contractului tău?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dacă nu ai timpul necesar să citești 40 de pagini de condiții generale și franșize, trimite-ne o solicitare de audit de clauză. Analizăm textul exact și îți spunem unde te situezi.
            </p>
          </div>

          <Link
            href="/contact?formType=audit_clauza&topic=review-polita"
            className="py-3.5 px-7 rounded-full bg-[#06141B] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm transition-all"
          >
            <span>Solicită audit de clauză</span>
            <ArrowRight className="w-4 h-4 text-slate-300" />
          </Link>
        </section>

      </div>
    </div>
  );
}
