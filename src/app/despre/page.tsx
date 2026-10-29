import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Building2,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  MessageSquare,
  Globe,
  Share2,
  HelpCircle,
  Award,
} from 'lucide-react';

export const metadata = {
  title: 'Despre Proiect & Fondator Cristian Văduva | WHAT IF INSURANCE',
  description:
    'Viziunea din spatele WHAT IF INSURANCE: inteligență aplicată în riscuri reale, educație independentă și transparență contractuală. Inițiat de Cristian Văduva.',
};

export default function DesprePage() {
  const ecosystemLinks = [
    {
      name: 'Insurance',
      url: 'https://insurance.cristianvaduva.com',
      description: 'Platforma dedicată serviciilor de brokeraj și consultanță în asigurări.',
    },
    {
      name: 'HomeFind',
      url: 'https://homefind.cristianvaduva.com',
      description: 'Inteligență imobiliară și căutare asistată de proprietăți rezidențiale.',
    },
    {
      name: 'CV Finance',
      url: 'https://credite.cristianvaduva.com',
      description: 'Soluții de creditare ipotecară, refinanțare și optimizare financiară.',
    },
    {
      name: 'Dubai Investments',
      url: 'https://dubai.cristianvaduva.com',
      description: 'Oportunități de investiții imobiliare internaționale în Dubai și EAU.',
    },
    {
      name: 'Executive',
      url: 'https://executive.cristianvaduva.com',
      description: 'Consultanță strategică și management de proiecte executive.',
    },
    {
      name: 'AIR / FLY',
      url: 'https://fly.cristianvaduva.com',
      description: 'Soluții de mobilitate aeriană și servicii de aviație privată.',
    },
    {
      name: 'CONSTRUCTIONS',
      url: 'https://constructions.cristianvaduva.com',
      description: 'Management de dezvoltare imobiliară și construcții civile.',
    },
    {
      name: 'AiXLuxury',
      url: 'https://aixluxury.com',
      description: 'Active de mare valoare, consultanță în lifestyle și bunuri de colecție.',
    },
    {
      name: 'AiX Health',
      url: 'https://health.cristianvaduva.com',
      description: 'Tehnologii de sănătate și longevitate.',
    },
    {
      name: 'Subvenții',
      url: 'https://subventii.cristianvaduva.com',
      description: 'Ghidaj pentru accesarea fondurilor nerambursabile și subvențiilor.',
    },
    {
      name: 'AETHER',
      url: 'https://aether.cristianvaduva.com',
      description: 'Platformă de inteligență și tehnologie avansată în ecosistemul Cristian Văduva.',
    },
    {
      name: 'AiX OS',
      url: 'https://os.cristianvaduva.com',
      description: 'Sistem integrat de operare și management digital pentru portofoliul de servicii.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#06141B] pb-24">
      {/* Hero Header */}
      <div className="border-b border-slate-200 bg-slate-50/70 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
            <span>Misiune &amp; Viziune</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#06141B] tracking-tight leading-tight">
            WHAT IF INSURANCE: De la riscuri abstracte la inteligență clară
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Asigurările sunt adesea vândute prin teamă sau prin contracte greu accesibile pe care puțini le parcurg în detaliu.
            WHAT IF INSURANCE a fost creat pentru a schimba această paradigmă prin scenarii vizuale reale,
            transparență argumentată și instrumente de decizie informată.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Story Section */}
        <section className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block">
            DE CE EXISTĂ ACEST PROIECT
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-[#06141B]">
            „Ce se întâmplă dacă mi se întâmplă mie?”
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <p>
              În fiecare zi, zeci de mii de oameni se confruntă cu evenimente neprevăzute: o țeavă spartă în perete
              cât ești la birou, un copac căzut pe mașină în timpul unei furtuni sau o urgență medicală într-o vacanță
              în afara Europei.
            </p>
            <p>
              În România, majoritatea celor care dețin o poliță află ce acoperă (sau mai ales ce nu acoperă) contractul
              lor abia în momentul în care inspectorul de daune comunică un refuz de plată bazat pe o clauză omisă.
            </p>
            <p className="p-5 rounded-2xl bg-slate-50 border-l-4 border-[#E10600] text-[#06141B] font-medium">
              WHAT IF INSURANCE nu vinde iluzii de acoperire universală. Platforma este construită pentru a evidenția
              diferența crucială dintre ce presupui că acoperă o asigurare și ce prevede clauza exactă din contract.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#06141B] text-white flex items-center justify-center font-mono font-bold text-lg">
              CV
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-slate-500 font-bold block">
                FONDATOR &amp; INIȚIATOR
              </span>
              <h3 className="text-2xl font-bold text-[#06141B]">Cristian Văduva</h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Antreprenor și dezvoltator de ecosisteme digitale în servicii financiare, creditare, real-estate și asigurări.
            Obiectivul acestui proiect este democratizarea cunoștințelor despre riscuri prin design premium,
            fotografie autentică și logică de decizie impecabilă.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <a
              href="tel:0767110439"
              className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 text-xs text-slate-800 transition-colors flex items-center gap-2.5 shadow-sm"
            >
              <Phone className="w-4 h-4 text-slate-500" />
              <div>
                <span className="text-[10px] text-slate-400 block font-mono">TELEFON</span>
                <span className="font-bold text-[#06141B]">0767110439</span>
              </div>
            </a>

            <a
              href="https://wa.me/436509536345"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 text-xs text-slate-800 transition-colors flex items-center gap-2.5 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <div>
                <span className="text-[10px] text-slate-400 block font-mono">WHATSAPP</span>
                <span className="font-bold text-[#06141B]">+43 650 953 6345</span>
              </div>
            </a>

            <a
              href="mailto:cristianvaduva@duck.com"
              className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 text-xs text-slate-800 transition-colors flex items-center gap-2.5 shadow-sm overflow-hidden"
            >
              <Mail className="w-4 h-4 text-slate-500" />
              <div className="overflow-hidden">
                <span className="text-[10px] text-slate-400 block font-mono">E-MAIL</span>
                <span className="font-bold text-[#06141B] truncate block">cristianvaduva@duck.com</span>
              </div>
            </a>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
              ECOSISTEM DE BUSINESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06141B]">
              Inițiative și platforme conexe
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Platforme dezvoltate sub aceeași viziune de transparență, consultanță și tehnologie aplicată.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ecosystemLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-white transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-[#06141B] group-hover:text-[#E10600] transition-colors">
                      {item.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#06141B]" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                <span className="text-[11px] font-mono text-slate-400 mt-3 pt-2 border-t border-slate-200/80 block">
                  {item.url.replace('https://', '')}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA to Action */}
        <section className="p-8 sm:p-10 rounded-3xl bg-[#06141B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              Ești pregătit să afli ce acoperă polița ta?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Testează-ți cunoștințele prin quiz sau solicită un audit independent al contractelor tale.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/quiz"
              className="py-3 px-5 rounded-full bg-[#E10600] hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md"
            >
              Începe Quiz-ul
            </Link>
            <Link
              href="/contact?topic=review-polita"
              className="py-3 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
            >
              Solicită Audit
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
