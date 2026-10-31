import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Eye, Keyboard, Sparkles, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Declarație de Accesibilitate Web | WHAT IF INSURANCE',
  description:
    'Angajamentul WHAT IF INSURANCE pentru accesibilitate digitală, navigare asistivă prin tastatură, contrast vizual și compatibilitate cu cititoare de ecran.',
  alternates: {
    canonical: 'https://whatifinsurance.cristianvaduva.com/accesibilitate',
  },
};

export default function AccesibilitatePage() {
  return (
    <div className="min-h-screen bg-white text-[#06141B] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Eye className="w-3.5 h-3.5 text-[#E10600]" />
            Standarde Digitale &amp; Incluziune
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#06141B]">
            Declarație de Accesibilitate
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
            WHAT IF INSURANCE își propune să asigure o experiență digitală accesibilă, clară și utilizabilă pentru toți vizitatorii, inclusiv pentru persoanele care utilizează tehnologii asistive.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm sm:text-base text-slate-700 leading-relaxed">
          {/* Section 1: Măsuri Tehnice Implementate */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#06141B] flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>1. Măsuri tehnice implementate</span>
            </h2>
            <p>
              Platforma este proiectată respectând principiile fundamentale ale Ghidului de Accesibilitate pentru Conținutul Web (WCAG 2.1), nivelul de conformitate țintit fiind AA:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <strong className="text-xs font-bold text-[#06141B] block mb-1">
                  Navigare completă din tastatură
                </strong>
                <p className="text-xs text-slate-600">
                  Toate elementele interactive (butoane, meniuri, tab-uri, link-uri și formulare) pot fi accesate secvențial prin tasta Tab și acționate prin Enter sau Spațiu. Meniurile modale se închid la apăsarea tastei Escape.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <strong className="text-xs font-bold text-[#06141B] block mb-1">
                  Indicatori vizibili de focalizare (Focus Rings)
                </strong>
                <p className="text-xs text-slate-600">
                  Stilurile <code>:focus-visible</code> aplică un contur cu contrast ridicat (2px solid #06141B cu offset de 2px), asigurând orientarea clară a utilizatorilor de tastatură.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <strong className="text-xs font-bold text-[#06141B] block mb-1">
                  Ținte tactile ergonomice pe dispozitive mobile
                </strong>
                <p className="text-xs text-slate-600">
                  Elementele de control pe ecrane tactile respectă dimensiunea minimă recomandată de 44 × 44 pixeli CSS, prevenind acționările accidentale.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <strong className="text-xs font-bold text-[#06141B] block mb-1">
                  Suport pentru mișcare redusă (Prefers-Reduced-Motion)
                </strong>
                <p className="text-xs text-slate-600">
                  Interfața detectează automat setarea de sistem pentru reducerea animațiilor și dezactivează tranzițiile extinse pentru utilizatorii cu sensibilitate vestibulară.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Conținut Semantic & Imagini */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#06141B] flex items-center gap-2.5">
              <Keyboard className="w-5 h-5 text-slate-800 shrink-0" />
              <span>2. Structură semantică și descrierea imaginilor</span>
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <strong>Ierarhie semantică HTML5:</strong> Fiecare pagină utilizează un singur titlu principal <code>&lt;h1&gt;</code> și o structură logică descrescătoare de subtitluri (h2, h3).
              </li>
              <li>
                <strong>Atribute alt descriptive:</strong> Toate fotografiile reprezentative de caz includ descrieri textuale detaliate ale incidentului descris (ex. tipul avariei, localizarea și efectele vizibile).
              </li>
              <li>
                <strong>Blocare scroll și gestionare focus în ferestre modale:</strong> Când meniul mobil sau formularele de verificare sunt deschise, derularea fundalului este blocată, iar focalizarea este menținută în interiorul panoului activ.
              </li>
            </ul>
          </section>

          {/* Section 3: Feedback și Asistență */}
          <section className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <h2 className="text-lg font-bold text-[#06141B]">
              3. Întâmpinați dificultăți sau aveți o sugestie?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dacă întâmpinați orice barieră de accesibilitate în navigarea pe WHAT IF INSURANCE, vă rugăm să ne contactați direct. Vom depune toate eforturile rezonabile pentru a remedia situația și a vă furniza informațiile în formatul dorit.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:cristianvaduva@duck.com"
                className="py-2.5 px-4 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-2 hover:border-[#06141B] transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4 text-[#E10600]" />
                <span>cristianvaduva@duck.com</span>
              </a>

              <a
                href="tel:+40767110439"
                className="py-2.5 px-4 rounded-xl bg-[#06141B] text-white text-xs font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>+40 767 110 439</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
