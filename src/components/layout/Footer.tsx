import React from 'react';
import Link from 'next/link';
import { Shield, Sparkles, AlertCircle, Phone, Mail, Send, HelpCircle, CheckSquare, ExternalLink, ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200/80 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand & Founder Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#06141B] flex items-center justify-center text-white shadow-sm">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-lg font-black text-[#06141B] tracking-tight block">
                  WHAT IF INSURANCE
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                  Real-Life Scenario Intelligence
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Platformă editorială de inteligență a riscurilor. Înțelege diferența critică dintre ce presupui că acoperă o poliță și ce se întâmplă la deschiderea dosarului de daună. 121 de cazuri documentate pe contracte reale.
            </p>

            {/* Founder details */}
            <div className="pt-3 border-t border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Fondator &amp; Inițiator
                </span>
                <span className="text-sm font-bold text-[#06141B]">
                  Cristian Văduva
                </span>
              </div>
              
              <div className="flex flex-col space-y-1.5 text-xs text-slate-600 pt-1">
                <a
                  href="tel:0767110439"
                  className="flex items-center gap-2 hover:text-[#06141B] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>0767110439</span>
                </a>
                <a
                  href="https://wa.me/436509536345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#06141B] transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-slate-400" />
                  <span>WhatsApp: +43 650 953 6345</span>
                </a>
                <a
                  href="mailto:cristianvaduva@duck.com"
                  className="flex items-center gap-2 hover:text-[#06141B] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>cristianvaduva@duck.com</span>
                </a>
                <a
                  href="https://insurance.cristianvaduva.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-[#06141B] font-semibold hover:underline pt-1"
                >
                  <span>insurance.cristianvaduva.com</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Categorii de Riscuri (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block">
              Bibliotecă de Scenarii (121)
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/scenarii?categorie=${cat.id}`}
                    className="text-slate-600 hover:text-[#06141B] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#E10600] transition-colors" />
                    <span className="truncate">{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Instrumente & Ecosistem (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block">
              Instrumente
            </span>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link
                  href="/quiz"
                  className="flex items-center gap-1.5 hover:text-[#06141B] transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                  <span>Quiz intuiție</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/verificare-polita"
                  className="flex items-center gap-1.5 hover:text-[#06141B] transition-colors"
                >
                  <CheckSquare className="w-3.5 h-3.5 text-slate-400" />
                  <span>Checklist clauze</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/studio"
                  className="flex items-center gap-1.5 text-[#E10600] font-semibold hover:text-[#06141B] transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Studio de share</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/ghid-generali"
                  className="flex items-center gap-1.5 hover:text-[#06141B] transition-colors font-medium text-slate-800"
                >
                  <Shield className="w-3.5 h-3.5 text-[#E10600]" />
                  <span>Ghid Generali România</span>
                </Link>
              </li>
              <li>
                <Link href="/scenarii" className="hover:text-[#06141B] transition-colors">
                  Toate cele 121 scenarii
                </Link>
              </li>
              <li>
                <Link href="/despre" className="hover:text-[#06141B] transition-colors">
                  Despre proiect
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#06141B] transition-colors">
                  Audit poliță &amp; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Transparență (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block">
              Legal &amp; Transparență
            </span>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link
                  href="/declinare-responsabilitate"
                  className="hover:text-[#06141B] transition-colors font-medium text-slate-800"
                >
                  Declinare Responsabilitate
                </Link>
              </li>
              <li>
                <Link href="/confidentialitate" className="hover:text-[#06141B] transition-colors">
                  Confidențialitate (GDPR)
                </Link>
              </li>
              <li>
                <Link href="/termeni" className="hover:text-[#06141B] transition-colors">
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-[#06141B] transition-colors">
                  Setări Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Educational Disclaimer Banner */}
        <div className="pt-8 space-y-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 text-xs text-slate-600">
            <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-slate-900">Cadru metodologic și educativ:</strong> WHAT IF INSURANCE este o platformă independentă de conștientizare a riscurilor. Niciun conținut sau chestionar nu constituie o garanție fermă de plată din partea unui asigurător. Fiecare dosar de daună depinde de termenii contractuali, franșizele și excluderile poliței dumneavoastră.{' '}
              <Link href="/declinare-responsabilitate" className="text-[#06141B] font-semibold underline hover:text-[#E10600]">
                Citiți declarația completă de responsabilitate.
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-2 font-mono">
            <div>
              © 2026 WHAT IF INSURANCE · Cristian Văduva. Toate drepturile rezervate.
            </div>
            <div className="flex items-center gap-4">
              <Link href="/confidentialitate" className="hover:text-slate-900">Confidențialitate</Link>
              <span>·</span>
              <Link href="/termeni" className="hover:text-slate-900">Termeni</Link>
              <span>·</span>
              <Link href="/cookies" className="hover:text-slate-900">Cookies</Link>
              <span>·</span>
              <Link href="/declinare-responsabilitate" className="hover:text-slate-900">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
