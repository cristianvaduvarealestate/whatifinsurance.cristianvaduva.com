import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Termeni și Condiții de Utilizare | WHAT IF INSURANCE',
  description: 'Condițiile generale de utilizare a platformei WHAT IF INSURANCE, limitele de răspundere și caracterul educațional al scenariilor.',
};

export default function TermeniPage() {
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
            Termeni și Condiții de Utilizare
          </h1>
          <p className="text-xs sm:text-sm font-mono text-brand-silver">
            Ultima actualizare: Octombrie 2026 · Versiunea 2.0
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8 text-xs sm:text-sm leading-relaxed text-brand-light/90">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-light font-mono uppercase tracking-wider">
            1. Caracterul educațional și informativ al platformei
          </h2>
          <p>
            Platforma <strong>WHAT IF INSURANCE</strong> este un proiect digital independent de simulare și educație în domeniul
            riscurilor cotidiene și al contractelor de asigurare.
          </p>
          <p className="p-4 rounded-xl bg-brand-surface border-l-4 border-brand-red text-brand-light">
            <strong>AVERTISMENT EXPLICIT:</strong> Scenariile, calculele financiare estimative, quiz-urile și analizele comparative
            prezentate pe acest site au un scop strict informativ și de conștientizare generală. Ele NU constituie consultanță juridică,
            nu reprezintă oferte ferme de asigurare și NU garantează că o daună similară va fi despăgubită de un anumit asigurător.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-light font-mono uppercase tracking-wider">
            2. Limite de răspundere
          </h2>
          <p>
            Despăgubirea efectivă în caz de daună reală depinde exclusiv de textul contractului de asigurare pe care îl semnați, de
            condițiile particulare, de clauzele speciale anexate, de franșizele aplicabile și de circumstanțele de fapt constatate
            de către experții constatatori ai asigurătorului.
          </p>
          <p>
            Administratorul platformei (Cristian Văduva) nu poate fi tras la răspundere pentru deciziile personale, financiare sau
            comerciale luate de vizitatori pe baza lecturii conținutului publicat pe acest site. Înainte de a lua o decizie privind un
            contract de asigurare, vă recomandăm să citiți integral Condițiile Generale de Asigurare (CGA) și Documentul de Informare
            privind Produsul de Asigurare (PID/IPID).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-light font-mono uppercase tracking-wider">
            3. Proprietate intelectuală
          </h2>
          <p>
            Textele, structura scenariilor, logica de comparație, elementele de design și imaginile generate sau licențiate
            sunt proprietatea <strong>WHAT IF INSURANCE / Cristian Văduva</strong> și sunt protejate de legislația privind drepturile
            de autor.
          </p>
          <p>
            Utilizatorii au permisiunea de a genera și partaja imagini vizuale create prin intermediul <em>Share Studio</em> pe rețelele
            sociale, cu condiția păstrării nemodificate a elementelor de atribuire și a watermark-ului original.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-light font-mono uppercase tracking-wider">
            4. Legea aplicabilă și jurisdicția
          </h2>
          <p>
            Acești termeni sunt guvernați de legislația română în vigoare. Orice litigiu decurgând din utilizarea platformei va fi
            supus spre soluționare instanțelor judecătorești competente din România.
          </p>
        </section>
      </div>
    </div>
  );
}
