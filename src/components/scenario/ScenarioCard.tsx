'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Scenario } from '@/types/scenario';
import { ArrowUpRight, Share2, ShieldAlert } from 'lucide-react';
import { ShareStudioModal } from '@/components/share/ShareStudioModal';

interface ScenarioCardProps {
  scenario: Scenario;
  priority?: boolean;
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, priority = false }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <>
      <div className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200 hover:border-slate-300 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 overflow-hidden">
        {/* Visual Header / Real Photographic Image */}
        <div>
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-100">
            <Image
              src={scenario.heroImage}
              alt={`Ilustrare scenariu: ${scenario.title} — Categoria ${scenario.categoryName}`}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Top Badges overlay */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
              <span className="py-1 px-2.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 text-slate-800 shadow-sm backdrop-blur-sm">
                {scenario.categoryName}
              </span>

              <span className="py-1 px-2 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#E10600] border border-red-200 shadow-sm flex items-center gap-1 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                {scenario.severityLabel || 'Risc Financiar'}
              </span>
            </div>
          </div>

          {/* Scenario Headline */}
          <Link
            href={`/scenarii/${scenario.categoryId}/${scenario.slug}`}
            className="block group-hover:text-[#E10600] transition-colors"
          >
            <h3 className="text-base sm:text-lg font-bold text-[#06141B] leading-snug">
              {scenario.title}
            </h3>
          </Link>

          {/* Main Question Hook */}
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal line-clamp-2 leading-relaxed">
            „{scenario.mainQuestion}”
          </p>

          {/* Financial Impact Comparison snippet */}
          <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5 text-[#E10600]">
              <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
              <span className="font-semibold truncate max-w-[150px]">
                {scenario.withoutInsurance.financialImpact}
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider shrink-0">
              fără acoperire
            </span>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="flex items-center justify-between gap-2 pt-4 mt-4 border-t border-slate-100">
          <Link
            href={`/scenarii/${scenario.categoryId}/${scenario.slug}`}
            className="flex-1 py-2 px-3 rounded-lg bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <span>Analizează</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
          </Link>

          <button
            type="button"
            onClick={() => setIsShareOpen(true)}
            aria-label={`Distribuie ${scenario.title}`}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-[#06141B] transition-colors"
            title="Surprinde-ți prietenii cu acest scenariu"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Share Studio Modal Instance */}
      <ShareStudioModal
        scenario={scenario}
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </>
  );
};
