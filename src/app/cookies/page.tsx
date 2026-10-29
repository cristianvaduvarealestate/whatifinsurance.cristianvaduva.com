'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Cookie, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CookiesPage() {
  const [preferences, setPreferences] = useState({
    essential: true, // always required
    analytics: false,
    marketing: false,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('whatif_cookie_preferences');
      if (stored) {
        setPreferences(JSON.parse(stored));
      }
    } catch (e) {
      // localStorage unavailable or blocked
    }
  }, []);

  const handleSave = () => {
    try {
      localStorage.setItem('whatif_cookie_preferences', JSON.stringify(preferences));
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-brand-darkest text-brand-light pb-24">
      <div className="border-b border-brand-border/40 bg-gradient-to-b from-brand-dark to-brand-darkest py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-brand-silver hover:text-brand-light transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Înapoi la platformă</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-light">
            Politica privind Modulele Cookie &amp; Preferințe
          </h1>
          <p className="text-xs sm:text-sm font-mono text-brand-silver">
            Ultima actualizare: Octombrie 2026 · Versiunea 2.0
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10 text-xs sm:text-sm leading-relaxed text-brand-light/90">
        {/* Declaration */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-light font-mono uppercase tracking-wider">
            1. Transparență privind utilizarea tehnologiilor de stocare
          </h2>
          <p>
            Platforma <strong>WHAT IF INSURANCE</strong> prioritizează confidențialitatea. Nu încărcăm scripturi invazive de urmărire
            comportamentală sau pixeli publicitari înainte de acordul dumneavoastră expres.
          </p>
          <p>
            În prezent, aplicația folosește exclusiv mecanisme tehnice strict necesare (cum ar fi stocarea locală <code>localStorage</code>{' '}
            pentru memorarea preferințelor dumneavoastră de navigare și filtrele de căutare în scenarii).
          </p>
        </section>

        {/* Interactive Preference Center */}
        <section className="p-6 sm:p-8 rounded-3xl bg-brand-dark border border-brand-border/50 space-y-6">
          <div className="flex items-center gap-3">
            <Cookie className="w-6 h-6 text-brand-silver" />
            <div>
              <h3 className="text-lg font-bold text-brand-light">Centru de Control al Preferințelor Cookie</h3>
              <p className="text-xs text-brand-muted">
                Puteți alege oricând ce categorii de module cookie sau date locale doriți să permiteți.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-2 border-t border-brand-border/30">
            {/* Essential */}
            <div className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border/40 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="font-bold text-brand-light text-xs sm:text-sm block">
                  Cookie-uri și date tehnice strict necesare (Întotdeauna active)
                </span>
                <p className="text-xs text-brand-muted">
                  Esențiale pentru funcționarea platformei, navigarea sigură, memorarea limbii și a filtrelor de scenarii.
                  Nu pot fi dezactivate.
                </p>
              </div>
              <span className="text-[11px] font-mono font-bold text-brand-silver uppercase px-2.5 py-1 rounded bg-brand-darkest shrink-0">
                Obligatoriu
              </span>
            </div>

            {/* Analytics */}
            <div className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border/40 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="font-bold text-brand-light text-xs sm:text-sm block">
                  Măsurare și statistici de performanță (Anonime)
                </span>
                <p className="text-xs text-brand-muted">
                  Ne ajută să înțelegem ce categorii de scenarii sunt cele mai citite, fără a colecta date personale sau identificatori unici.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences((p) => ({ ...p, analytics: e.target.checked }))}
                className="mt-1 w-5 h-5 rounded border-brand-border bg-brand-darkest text-brand-red focus:ring-0 cursor-pointer"
              />
            </div>

            {/* Marketing */}
            <div className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border/40 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="font-bold text-brand-light text-xs sm:text-sm block">
                  Marketing și personalizare publicitară
                </span>
                <p className="text-xs text-brand-muted">
                  Permite afișarea de recomandări contextuale de asigurare pe alte platforme (inactive în prezent pe site).
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => setPreferences((p) => ({ ...p, marketing: e.target.checked }))}
                className="mt-1 w-5 h-5 rounded border-brand-border bg-brand-darkest text-brand-red focus:ring-0 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-xl bg-brand-red hover:bg-brand-red/90 text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Salvează preferințele mele</span>
            </button>

            {saved && (
              <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" />
                Preferințe salvate local!
              </span>
            )}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-light font-mono uppercase tracking-wider">
            2. Cum puteți șterge cookie-urile din browser
          </h2>
          <p>
            Puteți șterge sau bloca oricând stocarea modulelor cookie direct din setările browserului dumneavoastră (Chrome, Safari, Firefox, Edge).
            Blocarea cookie-urilor strict necesare poate afecta afișarea corectă a filtrelor sau a Share Studio.
          </p>
        </section>
      </div>
    </div>
  );
}
