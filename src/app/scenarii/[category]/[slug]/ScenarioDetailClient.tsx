'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Scenario } from '@/types/scenario';
import { Sparkles, Check, Copy, ShieldCheck, Shuffle, Send, ArrowRight } from 'lucide-react';
import { ShareStudioModal } from '@/components/share/ShareStudioModal';
import { PolicyCheckModal } from '@/components/lead/PolicyCheckModal';
import { getRandomScenario } from '@/data/scenarios';

interface ScenarioDetailClientProps {
  scenario: Scenario;
}

export const ScenarioDetailClient: React.FC<ScenarioDetailClientProps> = ({ scenario }) => {
  const router = useRouter();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isPolicyCheckOpen, setIsPolicyCheckOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleNextRandom = () => {
    const nextScenario = getRandomScenario(scenario.slug);
    router.push(`/scenarii/${nextScenario.categoryId}/${nextScenario.slug}`);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
    }
  };

  return (
    <>
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-md">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10600] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Trimite dilema mai departe
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-[#06141B]">
            Cineva apropiat crede că e acoperit în situația asta?
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Exportă o imagine vizuală HD sau trimite linkul direct pe WhatsApp / Story. Vezi dacă ar ști ce răspunde contractul înainte de daună.
          </p>
        </div>

        {/* Buttons & Viral Actions */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          {/* 1. Surprinde-ți prietenii */}
          <button
            type="button"
            onClick={() => setIsShareOpen(true)}
            className="py-3 px-4 rounded-full bg-[#06141B] hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <Send className="w-3.5 h-3.5 text-slate-300" />
            <span>Surprinde-ți prietenii</span>
          </button>

          {/* 2. Încă unul (Next random scenario) */}
          <button
            type="button"
            onClick={handleNextRandom}
            className="py-3 px-4 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-[#06141B] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
            title="Deschide alt caz documentat la întâmplare"
          >
            <Shuffle className="w-3.5 h-3.5 text-[#E10600]" />
            <span>Alt caz real</span>
          </button>

          {/* 3. Află ce ai de verificat / Audit poliță */}
          <Link
            href={`/contact?topic=review-polita&scenario=${scenario.slug}`}
            className="py-3 px-4 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-slate-700" />
            <span>Audit clauză</span>
          </Link>

          {/* Copy Link */}
          <button
            type="button"
            onClick={handleCopy}
            className="p-3 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 hover:text-[#06141B] transition-colors flex items-center justify-center shadow-sm"
            aria-label="Copiază linkul scenariului"
            title="Copiază linkul"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </section>

      {/* Share Studio Modal */}
      <ShareStudioModal
        scenario={scenario}
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />

      {/* Policy Check Modal */}
      <PolicyCheckModal
        isOpen={isPolicyCheckOpen}
        onClose={() => setIsPolicyCheckOpen(false)}
        scenarioTitle={scenario.title}
      />
    </>
  );
};
