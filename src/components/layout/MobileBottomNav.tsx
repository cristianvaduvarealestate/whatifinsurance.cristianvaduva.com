'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SCENARIOS } from '@/data/scenarios';
import { Shuffle, Layers, HelpCircle, FileCheck2 } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleSurpriseMe = () => {
    if (SCENARIOS.length === 0) return;
    const randomIndex = Math.floor(Math.random() * SCENARIOS.length);
    const target = SCENARIOS[randomIndex];
    router.push(`/scenarii/${target.categoryId}/${target.slug}`);
  };

  return (
    <nav
      aria-label="Navigație mobilă"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] print:hidden"
    >
      <div className="max-w-md mx-auto px-3 pt-1.5 pb-[calc(0.4rem+env(safe-area-inset-bottom,0px))] grid grid-cols-4 gap-1">
        {/* 1. Surprinde-mă */}
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="relative flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 active:scale-95 min-h-[48px] text-slate-500 hover:text-slate-900"
        >
          <Shuffle className="w-5 h-5 text-[#E10600] stroke-[2.2]" />
          <span className="text-[10px] tracking-tight mt-1 font-semibold text-slate-700">
            Surprinde-mă
          </span>
        </button>

        {/* 2. Scenarii */}
        <Link
          href="/scenarii"
          aria-current={pathname.startsWith('/scenarii') ? 'page' : undefined}
          className={`relative flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 active:scale-95 min-h-[48px] ${
            pathname.startsWith('/scenarii') ? 'text-[#06141B]' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <div className="relative">
            <Layers
              className={`w-5 h-5 transition-transform duration-200 ${
                pathname.startsWith('/scenarii') ? 'text-[#E10600] scale-105 stroke-[2.4]' : 'text-slate-400 stroke-[1.8]'
              }`}
            />
            {pathname.startsWith('/scenarii') && (
              <span
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E10600]"
                aria-hidden="true"
              />
            )}
          </div>
          <span
            className={`text-[10px] tracking-tight mt-1 ${
              pathname.startsWith('/scenarii') ? 'font-black text-[#06141B]' : 'font-medium text-slate-500'
            }`}
          >
            Scenarii
          </span>
        </Link>

        {/* 3. Quiz */}
        <Link
          href="/quiz"
          aria-current={pathname.startsWith('/quiz') ? 'page' : undefined}
          className={`relative flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 active:scale-95 min-h-[48px] ${
            pathname.startsWith('/quiz') ? 'text-[#06141B]' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <div className="relative">
            <HelpCircle
              className={`w-5 h-5 transition-transform duration-200 ${
                pathname.startsWith('/quiz') ? 'text-[#E10600] scale-105 stroke-[2.4]' : 'text-slate-400 stroke-[1.8]'
              }`}
            />
            {pathname.startsWith('/quiz') && (
              <span
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E10600]"
                aria-hidden="true"
              />
            )}
          </div>
          <span
            className={`text-[10px] tracking-tight mt-1 ${
              pathname.startsWith('/quiz') ? 'font-black text-[#06141B]' : 'font-medium text-slate-500'
            }`}
          >
            Quiz
          </span>
        </Link>

        {/* 4. Audit */}
        <Link
          href="/verificare-polita"
          aria-current={pathname.startsWith('/verificare-polita') ? 'page' : undefined}
          className={`relative flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 active:scale-95 min-h-[48px] ${
            pathname.startsWith('/verificare-polita') ? 'text-[#06141B]' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <div className="relative">
            <FileCheck2
              className={`w-5 h-5 transition-transform duration-200 ${
                pathname.startsWith('/verificare-polita') ? 'text-[#E10600] scale-105 stroke-[2.4]' : 'text-slate-400 stroke-[1.8]'
              }`}
            />
            {pathname.startsWith('/verificare-polita') && (
              <span
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E10600]"
                aria-hidden="true"
              />
            )}
          </div>
          <span
            className={`text-[10px] tracking-tight mt-1 ${
              pathname.startsWith('/verificare-polita') ? 'font-black text-[#06141B]' : 'font-medium text-slate-500'
            }`}
          >
            Audit
          </span>
        </Link>
      </div>
    </nav>
  );
};
