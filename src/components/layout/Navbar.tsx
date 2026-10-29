'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Shield, Sparkles, Shuffle, ArrowRight, HelpCircle } from 'lucide-react';
import { PolicyCheckModal } from '@/components/lead/PolicyCheckModal';
import { SCENARIOS } from '@/data/scenarios';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleRandomScenario = () => {
    if (SCENARIOS && SCENARIOS.length > 0) {
      const randomIndex = Math.floor(Math.random() * SCENARIOS.length);
      const chosen = SCENARIOS[randomIndex];
      router.push(`/scenarii/${chosen.categoryId}/${chosen.slug}`);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 transition-all shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        
        {/* ========================================================
            UPPER LEVEL — BRAND IDENTITY & GENERALI PARTNERSHIP
           ======================================================== */}
        <div className="border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between gap-3">
            
            {/* Left Visual Group: Platform Identity (Moderate, Compact, Premium) */}
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#06141B] text-white flex items-center justify-center font-black text-xs tracking-wider shadow-xs group-hover:bg-[#E10600] transition-colors duration-200 shrink-0">
                  <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  {/* Primary Wordmark: Moderate Size */}
                  <div className="flex items-baseline gap-1 sm:gap-1.5 leading-none">
                    <span className="text-base sm:text-lg font-black tracking-tight text-[#06141B] group-hover:text-[#E10600] transition-colors">
                      WHAT IF
                    </span>
                    <span className="text-base sm:text-lg font-light tracking-wide text-slate-700">
                      INSURANCE
                    </span>
                  </div>

                  {/* Harmonious Subtitle Line: Discreet & Highly Legible */}
                  <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 mt-0.5 sm:mt-1 leading-tight">
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.14em] uppercase text-slate-400 shrink-0">
                      RISK INTELLIGENCE PLATFORM
                    </span>
                    <span className="text-slate-300 hidden sm:inline text-[10px]">·</span>
                    <span className="text-[10.5px] sm:text-[11.5px] font-medium text-slate-500 truncate">
                      Powered by{' '}
                      <a
                        href="https://cristianvaduva.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 font-semibold hover:text-[#E10600] transition-colors underline decoration-slate-200 hover:decoration-[#E10600] underline-offset-2"
                      >
                        CristianVaduva.com
                      </a>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Visual Group: Official Generali Partner Badge (Compact & Proportional) */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 pl-3.5 sm:pl-5 border-l border-slate-200 shrink-0">
              <div className="text-right flex flex-col justify-center">
                <div className="flex items-center justify-end gap-1.5">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.16em] uppercase text-slate-500">
                    PARTENER
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-black tracking-wider uppercase text-[#C21B17]">
                    GENERALI
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-medium text-slate-400 tracking-normal hidden md:block">
                  Intermediar Oficial Asigurări
                </span>
              </div>

              <div className="p-1 sm:p-1.5 rounded-lg bg-slate-50/80 border border-slate-200/60 flex items-center justify-center shrink-0">
                <img
                  src="/images/generali-logo.svg"
                  alt="Logo Oficial Generali"
                  className="h-7 sm:h-8 w-auto object-contain"
                  width={40}
                  height={32}
                />
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            LOWER LEVEL — NAVIGATION & ACTIONS
           ======================================================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-slate-600">
            <Link
              href="/#exploreaza"
              className={`hover:text-[#06141B] transition-colors py-1 ${
                pathname === '/scenarii' ? 'text-[#06141B] font-bold' : ''
              }`}
            >
              Explorează
            </Link>
            <Link
              href="/quiz"
              className={`hover:text-[#06141B] transition-colors py-1 ${
                pathname === '/quiz' ? 'text-[#06141B] font-bold' : ''
              }`}
            >
              Testează-ți intuiția
            </Link>
            <Link
              href="/verificare-polita"
              className={`hover:text-[#06141B] transition-colors py-1 ${
                pathname === '/verificare-polita' ? 'text-[#06141B] font-bold' : ''
              }`}
            >
              Checklist poliță
            </Link>
            <Link
              href="/studio"
              className={`flex items-center gap-1.5 hover:text-[#06141B] transition-colors py-1 ${
                pathname === '/studio' ? 'text-[#06141B] font-bold' : ''
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
              <span>Surprinde-ți prietenii</span>
            </Link>
            <Link
              href="/despre"
              className={`hover:text-[#06141B] transition-colors py-1 ${
                pathname === '/despre' ? 'text-[#06141B] font-bold' : ''
              }`}
            >
              Despre
            </Link>
            <Link
              href="/contact"
              className={`hover:text-[#06141B] transition-colors py-1 ${
                pathname === '/contact' ? 'text-[#06141B] font-bold' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs (Surprinde-mă & Verifică polița) */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Signature "Surprinde-mă" Button with Explanatory Tooltip */}
            <div className="relative group">
              <button
                type="button"
                onClick={handleRandomScenario}
                aria-label="Surprinde-mă — Descoperă scenarii neașteptate și află ce ai putea să nu știi despre asigurări"
                title="Descoperă scenarii neașteptate și află ce ai putea să nu știi despre asigurări."
                className="py-2 px-3.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-300 hover:border-[#06141B] text-[#06141B] text-xs font-bold flex items-center gap-2 transition-all shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] group-hover:scale-125 transition-transform" />
                <Shuffle className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#06141B] group-hover:rotate-45 transition-all" />
                <span>Surprinde-mă</span>
              </button>

              {/* Accessible Hover Tooltip explaining the button */}
              <div className="absolute right-0 top-full mt-2 hidden group-hover:block w-64 p-2.5 rounded-xl bg-[#06141B] text-white text-[11px] leading-relaxed shadow-xl pointer-events-none z-50 animate-fadeIn">
                <span className="font-bold text-red-400 block mb-0.5">Scenariu Aleatoriu:</span>
                Descoperă situații neașteptate și află ce ai putea să nu știi despre asigurări.
              </div>
            </div>

            {/* Prominent "Verifică polița" CTA */}
            <button
              type="button"
              onClick={() => setIsPolicyModalOpen(true)}
              className="py-2 px-4 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
            >
              <span>Verifică polița</span>
              <ArrowRight className="w-3 h-3 text-slate-300" />
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#06141B] hover:bg-slate-100 transition-colors ml-auto sm:ml-0"
            aria-label="Deschide meniul principal"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 bg-white border-b border-slate-200 space-y-3 animate-fadeIn">
            <Link
              href="/#exploreaza"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#06141B]"
            >
              Explorează Scenariile
            </Link>
            <Link
              href="/quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#06141B]"
            >
              Testează-ți intuiția (Quiz)
            </Link>
            <Link
              href="/verificare-polita"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#06141B]"
            >
              Checklist Personal de Poliță
            </Link>
            <Link
              href="/studio"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 text-sm font-semibold text-slate-800 hover:text-[#06141B]"
            >
              <Sparkles className="w-4 h-4 text-[#E10600]" />
              <span>Surprinde-ți prietenii</span>
            </Link>
            <Link
              href="/despre"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-600 hover:text-[#06141B]"
            >
              Despre proiect &amp; Cristian Văduva
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-600 hover:text-[#06141B]"
            >
              Contact Direct &amp; Solicitare Audit
            </Link>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleRandomScenario();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 border border-slate-200 text-[#06141B] text-xs font-bold flex flex-col items-center justify-center gap-0.5 text-center"
              >
                <div className="flex items-center gap-1.5 font-bold">
                  <Shuffle className="w-3.5 h-3.5 text-[#E10600]" />
                  <span>Surprinde-mă (Scenariu Aleatoriu)</span>
                </div>
                <span className="text-[10px] text-slate-500 font-normal">
                  Descoperă scenarii neașteptate și află ce ai putea să nu știi despre asigurări.
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsPolicyModalOpen(true);
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#06141B] text-white text-xs font-bold text-center block"
              >
                Verifică o Poliță
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Policy Check Modal Instance */}
      <PolicyCheckModal
        isOpen={isPolicyModalOpen}
        onClose={() => setIsPolicyModalOpen(false)}
      />
    </>
  );
};
