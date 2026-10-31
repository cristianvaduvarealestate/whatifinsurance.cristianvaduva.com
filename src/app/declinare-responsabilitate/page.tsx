import React from 'react';
import Link from 'next/link';
import { AlertTriangle, ShieldCheck, Scale, FileText, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Declinare a Responsabilității și Caracter Educațional | WHAT IF INSURANCE',
  description: 'Informații detaliate privind caracterul strict educativ și exploratoriu al platformei WHAT IF INSURANCE. Distincția între scenarii ipotetice și acoperirea contractuală efectivă.',
};

export default function DeclinareResponsabilitatePage() {
  return (
    <div className="min-h-screen bg-white text-[#06141B] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-[#06141B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Înapoi la Pagina Principală</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#E10600] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            Notă Legală &amp; Cadru Metodologic
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#06141B] mb-4">
            Declinare a Responsabilității &amp; Caracter Educațional
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Platforma WHAT IF INSURANCE este un instrument educațional de conștientizare a riscurilor cotidiene și explorare didactică a noțiunilor din domeniul asigurărilor, dezvoltat în calitate de partener Generali de către Cristian Văduva. Această pagină explică clar limitele informațiilor prezentate.
          </p>
          <div className="mt-4 text-xs font-mono text-slate-400">
            Ultima actualizare și revizuire metodologică: 28 Octombrie 2026
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
          
          {/* Card 1: Caracterul strict educațional */}
          <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#06141B] shrink-0 mt-1 shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#06141B] mb-3">1. Scopul exclusiv educativ și de simulare</h2>
                <p className="text-slate-600 mb-4">
                  Toate scenariile, analizele de caz, comparațiile de tip „Cu Asigurare vs. Fără Asigurare”, chestionarele interactive și listele de verificare publicate pe platforma WHAT IF INSURANCE sunt concepute exclusiv în scop informativ, didactic și orientativ.
                </p>
                <p className="text-slate-600">
                  Niciun material de pe această platformă nu constituie consultanță de asigurare personalizată, intermediere de produse financiare, recomandare fermă de subscriere, consultanță juridică sau aviz tehnic de specialitate.
                </p>
              </div>
            </div>
          </section>

          {/* Card 2: Nicio garanție privind despăgubirea */}
          <section className="bg-red-50/50 border border-red-200 rounded-3xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#E10600] shrink-0 mt-1 border border-red-200 shadow-sm">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#06141B] mb-3">2. Nicio promisiune sau garanție de despăgubire</h2>
                <p className="text-slate-800 mb-4 font-medium">
                  WHAT IF INSURANCE nu garantează și nu poate promite că o daună similară cu un scenariu descris va fi acceptată sau achitată de un asigurător.
                </p>
                <p className="text-slate-600 mb-4">
                  Decizia finală de acordare a unei indemnizații sau de acoperire a unui dosar de daună depinde strict și exclusiv de:
                </p>
                <ul className="space-y-2 text-slate-700 pl-2 border-l-2 border-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E10600] font-bold">•</span>
                    <span><strong>Condițiile generale și speciale</strong> stipulate în contractul dumneavoastră individual de asigurare;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E10600] font-bold">•</span>
                    <span><strong>Excluderile specifice</strong> din poliță (neglijență gravă, uzură cronică, infiltrații repetate nesemnalate, încălcări legislative etc.);</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E10600] font-bold">•</span>
                    <span><strong>Franșizele contractuale</strong> (sumele reținute din plata daunei) și sub-limitele aplicabile fiecărei clauze;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E10600] font-bold">•</span>
                    <span><strong>Raportul de expertiză tehnică și ancheta oficială</strong> a circumstanțelor exacte în care s-a produs evenimentul asigurat.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Card 3: Estimările financiare */}
          <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#06141B] shrink-0 mt-1 shadow-sm">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#06141B] mb-3">3. Cadrul de estimare a costurilor ilustrative</h2>
                <p className="text-slate-600 mb-4">
                  Sumele financiare menționate în dreptul rubricilor „Cost potențial estimat” reprezintă valori medii de piață, derivate din costuri standard de reparație, manoperă, materiale de construcții, piese auto sau servicii medicale private documentate în practica generală.
                </p>
                <p className="text-slate-600">
                  Aceste sume au rol pur orientativ pentru a ajuta utilizatorul să evalueze ordinul de mărime al unui risc. Costurile reale într-un caz concret pot fi semnificativ mai mari sau mai mici în funcție de complexitate, furnizor, inflație, localizare geografică și intervenții de urgență.
                </p>
              </div>
            </div>
          </section>

          {/* Card 4: Recomandarea fermă pentru audit individual */}
          <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#06141B] shrink-0 mt-1 shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#06141B] mb-3">4. Recomandarea fermă pentru audit individual</h2>
                <p className="text-slate-600 mb-4">
                  Înainte de a lua orice decizie financiară, de a anula o poliță existentă sau de a presupune că sunteți complet acoperit împotriva unui anumit risc, este recomandat să:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-[#06141B] font-bold mb-1 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#E10600]" /> Citiți Contractul
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Verificați anexele cu excluderi, limite maxime de răspundere și condiții de despăgubire din propriul dosar de asigurare.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-[#06141B] font-bold mb-1 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#E10600]" /> Consultați un Specialist
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Discutați cu un consultant sau intermediar autorizat pentru o analiză personalizată a nevoilor specifice ale familiei sau afacerii dvs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Card 5: Identitate autor și contact */}
          <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">5. Întrebări metodologice sau solicitare de audit</h2>
            <p className="text-slate-300 mb-6 text-sm sm:text-base leading-relaxed">
              Proiectul WHAT IF INSURANCE este inițiat și dezvoltat de <strong>Cristian Văduva</strong> pentru a crește gradul de educație financiară și conștientizare a riscurilor. Dacă doriți să verificați concret ce acoperă polița dumneavoastră actuală, echipa noastră vă poate asista cu un audit detaliat al clauzelor.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#06141B] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-sm"
              >
                <span>Solicită un Audit de Poliță</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/verificare-polita"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors"
              >
                <span>Generează Checklist Personal</span>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
