import React from 'react';
import Link from 'next/link';
import { ShieldCheck, AlertTriangle, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Politica de Confidențialitate | WHAT IF INSURANCE',
  description: 'Informații privind prelucrarea datelor cu caracter personal, drepturile utilizatorilor conform GDPR și protecția confidențialității.',
};

export default function ConfidentialitatePage() {
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
            Politica de Confidențialitate (GDPR)
          </h1>
          <p className="text-xs sm:text-sm font-mono text-brand-silver">
            Ultima actualizare: Octombrie 2026 · Versiunea 2.0
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8 text-xs sm:text-sm leading-relaxed text-brand-light/90">
        {/* Review Flag Notice */}
        <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border/60 space-y-2">
          <div className="flex items-center gap-2 text-brand-silver font-bold font-mono text-xs uppercase">
            <AlertTriangle className="w-4 h-4 text-brand-red" />
            <span>Notă de Transparență &amp; Placeholder Legal</span>
          </div>
          <p className="text-brand-muted">
            Acest document reflectă arhitectura locală actuală a platformei. Elementele corporative formale
            (Operatorul de date juridic înregistrat, CUI, sediul social) sunt marcate ca placeholders deschise
            pentru revizuire profesională înainte de operarea la scară comercială.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-light font-mono uppercase tracking-wider">
            1. Cine este responsabil de prelucrarea datelor (Operatorul)
          </h2>
          <p>
            Platforma online <strong>WHAT IF INSURANCE</strong> este administrată și inițiată de către{' '}
            <strong>Cristian Văduva</strong> [Date juridice operator: Persoană Fizică Autorizată / Entitate Juridică în curs de desemnare contractuală].
          </p>
          <p>
            Pentru orice întrebări sau exercitarea drepturilor privind datele dumneavoastră personale, ne puteți contacta direct la:{' '}
            <a href="mailto:cristianvaduva@duck.com" className="text-brand-silver underline">
              cristianvaduva@duck.com
            </a>{' '}
            sau la numărul de telefon: 0767110439.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-light font-mono uppercase tracking-wider">
            2. Ce date colectăm și în ce scop
          </h2>
          <p>
            Platforma WHAT IF INSURANCE este concepută după principiul <em>Privacy by Design</em> (Confidențialitate implicită).
            Navigarea în scenarii, utilizarea quiz-ului și generarea checklist-ului de verificare se realizează exclusiv în browserul
            dumneavoastră (client-side), fără a necesita crearea unui cont și fără a transmite date personale către server.
          </p>
          <p>Colectăm date exclusiv atunci când alegeți voluntar să completați formularul de contact:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-brand-muted">
            <li>
              <strong>Date de identificare:</strong> Nume, prenume.
            </li>
            <li>
              <strong>Date de contact:</strong> Adresă de e-mail, număr de telefon (opțional).
            </li>
            <li>
              <strong>Date legate de solicitare:</strong> Categoria de asigurare vizată, scenariul selectat, mesajul transmis.
            </li>
          </ul>
          <p>
            <strong>Temeiul legal:</strong> Prelucrarea se bazează pe consimțământul dumneavoastră explicit (Art. 6 alin. 1 lit. a din GDPR)
            și pe demersurile necesare la cererea dumneavoastră înainte de încheierea unui potențial contract (Art. 6 alin. 1 lit. b).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-light font-mono uppercase tracking-wider">
            3. Date pe care NU le colectăm niciodată
          </h2>
          <p>
            Nu solicităm și nu stocăm prin formularele noastre: coduri numerice personale (CNP), date de card bancar, parole, date despre
            starea de sănătate în detaliu sau copii ale actelor de identitate. Vă rugăm să nu includeți astfel de informații sensibile în câmpul
            de text al mesajelor.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-light font-mono uppercase tracking-wider">
            4. Destinatarii datelor și stocarea locală
          </h2>
          <p>
            În stadiul curent de dezvoltare locală, solicitările transmise prin formular sunt procesate local pe serverul aplicației
            și salvate într-un fișier securizat de evidență internă (<code>data/leads.json</code>). Datele nu sunt vândute, închiriate
            sau transmise către terți în scopuri de marketing.
          </p>
          <p>
            Perioada de retenție a datelor din solicitări este de <strong>maximum 12 luni</strong> de la data transmiterii, după care
            datele sunt șterse definitiv dacă nu a intervenit o relație contractuală formală.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-light font-mono uppercase tracking-wider">
            5. Drepturile dumneavoastră conform Regulamentului GDPR
          </h2>
          <p>În calitate de persoană vizată, beneficiați de următoarele drepturi garantate de lege:</p>
          <ul className="list-disc pl-5 space-y-1 text-brand-muted">
            <li>Dreptul de acces la datele prelucrate;</li>
            <li>Dreptul la rectificarea datelor inexacte sau incomplete;</li>
            <li>Dreptul la ștergerea datelor („dreptul de a fi uitat”);</li>
            <li>Dreptul la restricționarea prelucrării;</li>
            <li>Dreptul la portabilitatea datelor;</li>
            <li>Dreptul de a vă retrage consimțământul în orice moment;</li>
            <li>
              Dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP - www.dataprotection.ro).
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
