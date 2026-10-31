'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Shield, Sparkles, Shuffle, ArrowRight, Phone, Mail } from 'lucide-react';
import { PolicyCheckModal } from '@/components/lead/PolicyCheckModal';
import { SCENARIOS } from '@/data/scenarios';
import { useSmartScroll } from '@/hooks/useSmartScroll';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollPosRef = useRef(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const isHeaderVisible = useSmartScroll({
    threshold: 8,
    topOffset: 50,
    disableWhen: mobileMenuOpen || isPolicyModalOpen || hasFocus,
  });

  // Automatically close mobile menu on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock background scroll when mobile menu is open (handles iOS Safari cleanly)
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      scrollPosRef.current = scrollY;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = scrollPosRef.current;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, scrollY);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Escape key closes mobile menu & restores focus to menu button
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleRandomScenario = () => {
    if (SCENARIOS && SCENARIOS.length > 0) {
      const randomIndex = Math.floor(Math.random() * SCENARIOS.length);
      const chosen = SCENARIOS[randomIndex];
      router.push(`/scenarii/${chosen.categoryId}/${chosen.slug}`);
    }
  };

  return (
    <>
      <header
        onFocusCapture={() => setHasFocus(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setHasFocus(false);
          }
        }}
        className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transform transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* ========================================================
            UPPER LEVEL — DESKTOP BRAND & PARTNERSHIP (lg+ only)
           ======================================================== */}
        <div className="hidden lg:block border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3">
            {/* Left: Platform Identity */}
            <div className="flex items-center gap-3 min-w-0">
              <Link href="/" className="flex items-center gap-2.5 group shrink-0" aria-label="Acasă — WHAT IF INSURANCE">
                <div className="w-8 h-8 rounded-lg bg-[#06141B] text-white flex items-center justify-center font-black text-xs tracking-wider shadow-xs group-hover:bg-[#E10600] transition-colors duration-200 shrink-0">
                  <Shield className="w-4 h-4 text-white" />
                </div>
              </Link>
              <div className="flex flex-col justify-center min-w-0">
                <Link href="/" className="flex items-baseline gap-1.5 leading-none group" aria-label="Acasă — WHAT IF INSURANCE">
                  <span className="text-lg font-black tracking-tight text-[#06141B] group-hover:text-[#E10600] transition-colors">
                    WHAT IF
                  </span>
                  <span className="text-lg font-light tracking-wide text-slate-700">
                    INSURANCE
                  </span>
                </Link>

                <div className="flex items-center gap-x-1.5 mt-1 leading-tight">
                  <span className="text-[10px] font-mono font-bold tracking-[0.14em] uppercase text-slate-400 shrink-0">
                    RISK INTELLIGENCE PLATFORM
                  </span>
                  <span className="text-slate-300 text-[10px]">·</span>
                  <span className="text-[11.5px] font-medium text-slate-500 truncate">
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
            </div>

            {/* Right: Generali Partner Badge */}
            <div className="flex items-center gap-3.5 pl-5 border-l border-slate-200 shrink-0">
              <div className="text-right flex flex-col justify-center">
                <div className="flex items-center justify-end gap-1.5">
                  <span className="text-[11px] font-mono font-bold tracking-[0.16em] uppercase text-slate-500">
                    PARTENER
                  </span>
                  <span className="text-[12px] font-black tracking-wider uppercase text-[#C21B17]">
                    GENERALI
                  </span>
                </div>
                <span className="text-[10px] font-medium text-slate-400 tracking-normal">
                  Condiții &amp; Clauze Contractuale
                </span>
              </div>

              <div className="p-1.5 rounded-lg bg-slate-50/80 border border-slate-200/60 flex items-center justify-center shrink-0">
                <Image
                  src="/images/generali-logo.svg"
                  alt="Generali România — Partener"
                  className="h-8 w-auto object-contain"
                  width={40}
                  height={32}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            MAIN ROW — UNIFIED MOBILE & DESKTOP NAVIGATION
           ======================================================== */}
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-14 sm:h-14 flex items-center justify-between">
          
          {/* Mobile-Only Wordmark (< lg) */}
          <div className="flex lg:hidden items-center gap-2 min-w-0">
            <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="Acasă — WHAT IF INSURANCE">
              <div className="w-7 h-7 rounded-lg bg-[#06141B] text-white flex items-center justify-center font-black text-xs shadow-xs group-hover:bg-[#E10600] transition-colors shrink-0">
                <Shield className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-black tracking-tight text-[#06141B]">
                  WHAT IF
                </span>
                <span className="text-sm font-light tracking-wide text-slate-700">
                  INSURANCE
                </span>
              </div>
            </Link>

            <span className="hidden xs:inline-flex items-center px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-red-50 text-[#C21B17] border border-red-200/60 shrink-0">
              Partener Generali
            </span>
          </div>

          {/* Desktop Navigation Links (>= lg) */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-slate-600">
            <Link
              href="/#exploreaza"
              className={`hover:text-[#06141B] transition-colors py-1 ${
                pathname === '/scenarii' ? 'text-[#06141B] font-bold' : ''
              }`}
            >
              Scenarii
            </Link>
            <Link
              href="/quiz"
              className={`hover:text-[#06141B] transition-colors py-1 ${
                pathname === '/quiz' ? 'text-[#06141B] font-bold' : ''
              }`}
            >
              Quiz intuiție
            </Link>
            <Link
              href="/verificare-polita"
              className={`hover:text-[#06141B] transition-colors py-1 ${
                pathname === '/verificare-polita' ? 'text-[#06141B] font-bold' : ''
              }`}
            >
              Checklist clauze
            </Link>
            <Link
              href="/studio"
              className={`flex items-center gap-1.5 hover:text-[#06141B] transition-colors py-1 ${
                pathname === '/studio' ? 'text-[#06141B] font-bold' : ''
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
              <span>Studio share</span>
            </Link>
            <Link
              href="/ghid-generali"
              className={`hover:text-[#06141B] transition-colors py-1 ${
                pathname === '/ghid-generali' ? 'text-[#06141B] font-bold' : ''
              }`}
            >
              Ghid Generali
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

          {/* Desktop Action CTAs (>= lg only — Single instance) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Signature "Surprinde-mă" Button with Explanatory Tooltip */}
            <div className="relative group">
              <button
                type="button"
                onClick={handleRandomScenario}
                aria-label="Surprinde-mă — Descoperă un scenariu real de risc și află ce ar acoperi polița ta"
                title="Un scenariu real ales la întâmplare. Vezi ce plătește asigurătorul și ce plătești tu."
                className="py-2 px-3.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-300 hover:border-[#06141B] text-[#06141B] text-xs font-bold flex items-center gap-2 transition-all shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] group-hover:scale-125 transition-transform" />
                <Shuffle className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#06141B] group-hover:rotate-45 transition-all" />
                <span>Surprinde-mă</span>
              </button>

              <div className="absolute right-0 top-full mt-2 hidden group-hover:block w-64 p-2.5 rounded-xl bg-[#06141B] text-white text-[11px] leading-relaxed shadow-xl pointer-events-none z-50 animate-fadeIn">
                <span className="font-bold text-red-400 block mb-0.5">Scenariu Aleatoriu:</span>
                Un caz real ales la întâmplare. Vezi diferența dintre ce crezi și ce spune contractul.
              </div>
            </div>

            {/* Desktop "Audit poliță" CTA */}
            <button
              type="button"
              onClick={() => setIsPolicyModalOpen(true)}
              className="py-2 px-4 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
            >
              <span>Audit poliță</span>
              <ArrowRight className="w-3 h-3 text-slate-300" />
            </button>
          </div>

          {/* Mobile Action Controls (< lg only — Single instance) */}
          <div className="flex lg:hidden items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={() => setIsPolicyModalOpen(true)}
              className="py-1.5 px-3 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-[11px] font-bold transition-all shadow-xs flex items-center gap-1 min-h-[38px] active:scale-95"
              aria-label="Solicită un audit gratuit al poliței"
            >
              <span>Audit poliță</span>
              <ArrowRight className="w-3 h-3 text-slate-300" />
            </button>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#06141B] hover:bg-slate-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center border border-slate-200/80 active:scale-95"
              aria-label={mobileMenuOpen ? 'Închide meniul principal' : 'Deschide meniul principal'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#E10600]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ========================================================
            ACCESSIBLE MOBILE NAVIGATION DRAWER (< lg)
           ======================================================== */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Meniu principal de navigație"
            className="lg:hidden px-4 pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] bg-white border-b border-slate-200 space-y-1 animate-fadeIn overflow-y-auto max-h-[calc(100dvh-3.5rem)] overscroll-contain shadow-2xl"
          >
            {/* Quick Status / Partner Notice */}
            <div className="px-2.5 py-2 mb-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E10600]" />
                <span className="font-bold text-[#06141B]">Partener Generali România</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">CristianVaduva.com</span>
            </div>

            {/* Navigation links with comfortable 44px touch targets */}
            <Link
              href="/#exploreaza"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#06141B] transition-colors"
            >
              Scenarii de risc (121 cazuri)
            </Link>
            <Link
              href="/quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#06141B] transition-colors"
            >
              Quiz intuiție (8 întrebări)
            </Link>
            <Link
              href="/verificare-polita"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#06141B] transition-colors"
            >
              Checklist clauze contractuale
            </Link>
            <Link
              href="/studio"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 min-h-[44px] px-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#06141B] transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#E10600]" />
              <span>Studio de share</span>
            </Link>
            <Link
              href="/ghid-generali"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#06141B] transition-colors"
            >
              Ghid Generali România &amp; Daune
            </Link>
            <Link
              href="/despre"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#06141B] transition-colors"
            >
              Despre proiect &amp; Cristian Văduva
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#06141B] transition-colors"
            >
              Contact direct &amp; Solicitare audit
            </Link>

            {/* Quick Action Buttons */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleRandomScenario();
                }}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-[#06141B] text-xs font-bold flex flex-col items-center justify-center gap-0.5 text-center transition-colors min-h-[44px]"
              >
                <div className="flex items-center gap-1.5 font-bold">
                  <Shuffle className="w-3.5 h-3.5 text-[#E10600]" />
                  <span>Surprinde-mă (Scenariu aleatoriu)</span>
                </div>
                <span className="text-[10px] text-slate-500 font-normal">
                  Descoperă un caz real și vezi ce spune contractul.
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsPolicyModalOpen(true);
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold text-center block transition-colors min-h-[44px] shadow-sm"
              >
                Verifică o Poliță
              </button>
            </div>

            {/* Contact direct bar */}
            <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
              <a
                href="tel:+40767110439"
                className="flex-1 py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-[#E10600]" />
                <span>+40 767 110 439</span>
              </a>

              <a
                href="mailto:cristianvaduva@duck.com"
                className="flex-1 py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200"
              >
                <Mail className="w-3.5 h-3.5 text-slate-600" />
                <span>cristianvaduva@duck.com</span>
              </a>
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
