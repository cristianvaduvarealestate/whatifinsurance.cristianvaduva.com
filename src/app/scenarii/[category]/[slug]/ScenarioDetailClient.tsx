'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Scenario } from '@/types/scenario';
import {
  Sparkles,
  Check,
  Copy,
  ShieldCheck,
  Shuffle,
  Send,
  ArrowRight,
  FileCheck2,
  Share2,
} from 'lucide-react';
import { ShareStudioModal } from '@/components/share/ShareStudioModal';
import { getRandomScenario } from '@/data/scenarios';
import { trackEvent } from '@/lib/analytics';

interface ScenarioDetailClientProps {
  scenario: Scenario;
}

export const ScenarioDetailClient: React.FC<ScenarioDetailClientProps> = ({ scenario }) => {
  const router = useRouter();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    trackEvent('scenario_open', {
      scenario_id: scenario.id,
      category: scenario.categoryId,
      source_page: typeof window !== 'undefined' ? window.location.pathname : undefined,
    });
  }, [scenario.id, scenario.categoryId]);

  const handleNextRandom = () => {
    const nextScenario = getRandomScenario(scenario.slug);
    router.push(`/scenarii/${nextScenario.categoryId}/${nextScenario.slug}`);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
      trackEvent('invite_link_copied', { context: 'scenario_card' });
    } catch {
      setCopied(true);
    }
  };

  const auditHref = `/contact?formType=audit_clauza&category=${encodeURIComponent(
    scenario.categoryId
  )}&scenario=${encodeURIComponent(scenario.slug)}&title=${encodeURIComponent(
    scenario.title
  )}&reason=${encodeURIComponent(
    `Doresc verificarea acoperirii și a franșizelor pentru situația descrisă în scenariul: „${scenario.title}”.`
  )}`;

  const checklistHref = `/verificare-polita?category=${encodeURIComponent(
    scenario.categoryId
  )}&scenario=${encodeURIComponent(scenario.slug)}`;

  return (
    <div className="w-full space-y-6">
      {/* ========================================================
          SINGLE DOMINANT PRIMARY NEXT STEP
          ======================================================== */}
      <section className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-6">
        <div className="space-y-2.5 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse" />
            <span>Pasul Următor Recomandat</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            Nu aștepta producerea daunei pentru a citi contractul.
          </h3>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Verifică dacă polița ta actuală include clauzele relevante pentru acest eveniment sau solicită un audit independent al contractului înainte de semnare.
          </p>
        </div>

        {/* Action Pair: 1 Dominant Primary CTA + 1 Targeted Audit CTA */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
          {/* PRIMARY DOMINANT CTA */}
          <Link
            href={checklistHref}
            onClick={() => {
              trackEvent('reward_resource_opened', {
                resourceType: 'policy_checklist',
                sourceLocation: 'scenario',
                category: scenario.categoryId,
              });
            }}
            className="py-4 px-7 rounded-2xl bg-white hover:bg-slate-100 text-[#06141B] font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] text-center"
          >
            <FileCheck2 className="w-5 h-5 text-[#E10600] shrink-0" />
            <span>Verifică dacă polița ta acoperă această situație</span>
            <ArrowRight className="w-4 h-4 text-slate-700 shrink-0" />
          </Link>

          {/* TARGETED AUDIT CTA */}
          <Link
            href={auditHref}
            onClick={() => {
              trackEvent('quote_cta_clicked', {
                sourceLocation: 'scenario_footer',
                preselectedCategory: scenario.categoryId,
              });
            }}
            className="py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] text-center"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Solicită un audit al acestei clauze</span>
          </Link>
        </div>

        <p className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
          <span>●</span>
          <span>Formularul se deschide precompletat cu datele scenariului, dar poți modifica sau adăuga oricând detalii. Nicio solicitare nu se trimite automat.</span>
        </p>
      </section>

      {/* ========================================================
          DISCRETE SECONDARY ACTIONS STRIP (Viral & Discovery)
          ======================================================== */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-wrap items-center justify-between gap-3 text-xs">
        <span className="text-slate-600 font-medium">
          Dilema merită discutată?
        </span>

        <div className="flex flex-wrap items-center gap-2">
          {/* Share Dilemma Button */}
          <button
            type="button"
            onClick={() => {
              setIsShareOpen(true);
              trackEvent('share_initiated', {
                shareType: 'native_sheet',
                context: 'scenario',
                category: scenario.categoryId,
              });
            }}
            className="py-2 px-3.5 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold transition-all flex items-center gap-1.5 shadow-2xs active:scale-95"
          >
            <Send className="w-3.5 h-3.5 text-[#E10600]" />
            <span>Surprinde un prieten</span>
          </button>

          {/* Random Next Scenario */}
          <button
            type="button"
            onClick={handleNextRandom}
            className="py-2 px-3.5 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-semibold transition-all flex items-center gap-1.5 shadow-2xs active:scale-95"
            title="Deschide alt scenariu ilustrativ la întâmplare"
          >
            <Shuffle className="w-3.5 h-3.5 text-slate-500" />
            <span>Alt scenariu</span>
          </button>

          {/* Copy Direct Link */}
          <button
            type="button"
            onClick={handleCopy}
            className="p-2 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center shadow-2xs active:scale-95"
            aria-label="Copiază linkul scenariului"
            title="Copiază linkul"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Share Studio Modal */}
      <ShareStudioModal
        scenario={scenario}
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </div>
  );
};
