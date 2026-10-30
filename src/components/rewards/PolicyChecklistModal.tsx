'use client';

import React, { useState } from 'react';
import {
  X,
  FileCheck2,
  Printer,
  ShieldAlert,
  AlertTriangle,
  HelpCircle,
  Clock,
  Coins,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { REWARDS_CONFIG } from '@/lib/rewardsConfig';

interface PolicyChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChecklistSection {
  id: string;
  title: string;
  badge: string;
  description: string;
  checks: {
    item: string;
    details: string;
    criticality: 'Critic' | 'Important' | 'Recomandat';
  }[];
}

const CHECKLIST_SECTIONS: ChecklistSection[] = [
  {
    id: 'risks',
    title: '1. Riscuri Acoperite vs. Riscuri Presupuse',
    badge: 'Acoperiri',
    description: 'Polițele facultative pot fi de tip „riscuri numite” (acoperă doar ce este scris expres) sau „toate riscurile / all-risks” (acoperă tot ce nu este exclus expres).',
    checks: [
      {
        item: 'Tipul de acoperire al contractului',
        details: 'Verifică dacă polița ta este cu riscuri numite (standard) sau All-Risks (completă).',
        criticality: 'Critic',
      },
      {
        item: 'Avarii la conductele interioare de apă',
        details: 'Verifică dacă spargerea accidentală a țevilor din pereți și căutarea avariei sunt acoperite.',
        criticality: 'Critic',
      },
      {
        item: 'Fenomene meteo și fenomene electrice',
        details: 'Verifică dacă supratensiunea provocată de trăsnet la electrocasnice sau centrale este inclusă.',
        criticality: 'Important',
      },
    ],
  },
  {
    id: 'exclusions',
    title: '2. Excluderi Contractuale Specifice',
    badge: 'Excluderi',
    description: 'Capitolul de excluderi este cel mai important din orice contract. Aici sunt enumerate situațiile în care asigurătorul este exonerat legal de plată.',
    checks: [
      {
        item: 'Clauza de neglijență gravă sau forțare a apei',
        details: 'La auto CASCO, traversarea bălților adânci (hidrolock) este frecvent exclusă.',
        criticality: 'Critic',
      },
      {
        item: 'Nelocuirea prelungită (Măsuri de prevenție & Absență)',
        details: 'Condițiile contractuale impun măsuri preventive (oprirea apei, golirea instalațiilor sau încălzire pe timp de ger) și pot condiționa acoperirea dacă imobilul este neocupat pe perioade îndelungate.',
        criticality: 'Critic',
      },
      {
        item: 'Uzură, coroziune sau vicii ascunse',
        details: 'Degradarea în timp și defecțiunile mecanice preexistente nu constituie daune asigurate.',
        criticality: 'Important',
      },
    ],
  },
  {
    id: 'deductibles',
    title: '3. Franșize și Contribuția Ta la Daună',
    badge: 'Franșize',
    description: 'Franșiza este suma suportată direct de tine din orice despăgubire aprobată.',
    checks: [
      {
        item: 'Tipul franșizei: fixă sau procentuală',
        details: 'Exemplu: 100 EUR per eveniment vs. 10% din valoarea daunei aprobate.',
        criticality: 'Critic',
      },
      {
        item: 'Franșize diferențiate pe riscuri',
        details: 'Verifică dacă la furt, cutremur sau avarii în parcare cu autor necunoscut se aplică o franșiză mai mare.',
        criticality: 'Important',
      },
    ],
  },
  {
    id: 'limits',
    title: '4. Limite Maxime de Despăgubire & Sub-limite',
    badge: 'Plafoane',
    description: 'Suma asigurată totală nu înseamnă că orice bun din locuință este acoperit la valoarea sa reală.',
    checks: [
      {
        item: 'Sub-limita pentru bunuri de valoare / electronice',
        details: 'Adesea electronicele, bijuteriile sau tablourile au un plafon maxim separat (ex. 10%-20% din suma totală).',
        criticality: 'Critic',
      },
      {
        item: 'Limita de răspundere civilă față de terți',
        details: 'Verifică suma asigurată pentru daune produse vecinilor (inundații de conductă, incendiu).',
        criticality: 'Critic',
      },
    ],
  },
  {
    id: 'deadlines',
    title: '5. Termenul de Avizare a Daunei (Termene Contractuale)',
    badge: 'Termene',
    description: 'Întârzierea notificării oficiale poate îngreuna constatarea cauzei și validarea dosarului.',
    checks: [
      {
        item: 'Termenul specific de avizare',
        details: 'Fiecare produs are un termen specific (ex. maxim 3 zile lucrătoare la Eurocasa, prompt la CASCO sau imediat la asistență medicală în străinătate).',
        criticality: 'Critic',
      },
      {
        item: 'Canalele oficiale de înregistrare a daunei',
        details: 'Call-center autorizat, aplicație sau portal online cu număr de înregistrare alocat.',
        criticality: 'Important',
      },
    ],
  },
  {
    id: 'documents',
    title: '6. Documente și Condiții Obligatorii',
    badge: 'Acte',
    description: 'Păstrează dovezile și nu modifica starea bunurilor avariate înainte de constatare.',
    checks: [
      {
        item: 'Raportul autorităților competente',
        details: 'Poliție (furt/vandalism/accident), ISU/Pompieri (incendiu/trăsnet), Asociație de proprietari (inundație bloc).',
        criticality: 'Critic',
      },
      {
        item: 'Fotografii detaliate ale stării inițiale',
        details: 'Fotografiază ansamblul și detaliile din mai multe unghiuri înainte de orice curățare sau intervenție de urgență.',
        criticality: 'Important',
      },
    ],
  },
  {
    id: 'maintenance',
    title: '7. Condiții de Mentenanță & Securitate',
    badge: 'Prevenție',
    description: 'Asiguratul are obligația legală de a preveni agravarea riscului și de a respecta normele tehnice.',
    checks: [
      {
        item: 'Revizii tehnice obligatorii (gaz, coșuri de fum, instalații)',
        details: 'Lipsa reviziei obligatorii de gaz (la 2 ani) poate atrage refuzul de plată în caz de explozie.',
        criticality: 'Critic',
      },
      {
        item: 'Sisteme de închidere omologate la uși și ferestre',
        details: 'La furt prin efracție, trebuie să existe urme clare de forțare a încuietorilor.',
        criticality: 'Important',
      },
    ],
  },
  {
    id: 'questions',
    title: '8. Întrebări Esențiale pentru Broker sau Asigurător',
    badge: 'Dialog',
    description: 'Pune aceste 3 întrebări înainte de emitere pentru a elimina orice surpriză neplăcută.',
    checks: [
      {
        item: '„Ce se întâmplă dacă apa a provenit de la coloana comună a blocului?”',
        details: 'Cine deschide dosarul de daună și cum se recuperează banii de la asociația de proprietari.',
        criticality: 'Critic',
      },
      {
        item: '„Reparația CASCO este permisă în reprezentanța oficială sau doar în service-uri partenere?”',
        details: 'Alegerea liberă a unității reparatoare evită disputele legate de decontarea manoperei.',
        criticality: 'Important',
      },
      {
        item: '„Există franșiză la primul eveniment dacă nu am avut daune în anii precedenți?”',
        details: 'Verifică dacă beneficiezi de clauză de fidelitate fără franșiză la prima daună.',
        criticality: 'Recomandat',
      },
    ],
  },
];

export const PolicyChecklistModal: React.FC<PolicyChecklistModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('risks');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-5 sm:p-8 my-auto overflow-hidden text-[#06141B] max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#06141B] text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <FileCheck2 className="w-3.5 h-3.5 text-[#E10600]" />
              Resursă Educațională Gratuită
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#06141B] tracking-tight">
              8 clauze pe care merită să le găsești în contract înainte de daună
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Diferența dintre ce presupui că acoperă o poliță și ce se întâmplă la dosarul de daună stă în aceste 8 detalii contractuale.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Tipărește sau salvează ca PDF"
              className="p-2 rounded-xl text-slate-500 hover:text-[#06141B] hover:bg-slate-100 transition-colors inline-flex items-center gap-1.5 text-xs font-semibold"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Tipărește</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-[#06141B] hover:bg-slate-100 transition-colors"
              aria-label="Închide ghidul"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Checklist Content */}
        <div className="overflow-y-auto py-5 space-y-3.5 pr-1 flex-1">
          {CHECKLIST_SECTIONS.map((sec) => {
            const isExpanded = expandedSection === sec.id;

            return (
              <div
                key={sec.id}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleSection(sec.id)}
                  className="w-full p-4 sm:p-4.5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {sec.badge}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#06141B]">
                      {sec.title}
                    </h3>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 space-y-3 border-t border-slate-100 bg-slate-50/50">
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      {sec.description}
                    </p>

                    <div className="space-y-2 pt-1">
                      {sec.checks.map((chk, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-white border border-slate-200 space-y-1"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-xs font-bold text-[#06141B]">
                              {chk.item}
                            </span>
                            <span
                              className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                                chk.criticality === 'Critic'
                                  ? 'bg-red-50 text-red-700 border border-red-200'
                                  : chk.criticality === 'Important'
                                  ? 'bg-amber-50 text-amber-800 border border-amber-200'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {chk.criticality}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {chk.details}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Educational Disclaimer */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5 mt-4">
            <div className="flex items-center gap-2 font-bold text-slate-800 font-mono text-[11px] uppercase">
              <ShieldAlert className="w-4 h-4 text-slate-600" />
              Notă Importantă de Declinare Educațională
            </div>
            <p className="leading-relaxed">
              Acest checklist are un caracter strict informativ și de conștientizare generală. Nu constituie consultanță juridică, audit contractual individual sau ofertă fermă de despăgubire. Drepturile și obligațiile tale sunt determinate exclusiv de condițiile generale și particulare ale contractului de asigurare semnat cu asigurătorul autorizat.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-[11px] font-mono text-slate-500">
            whatifinsurance.cristianvaduva.com · Ghid Gratuit
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            Am înțeles, închide
          </button>
        </div>
      </div>
    </div>
  );
};
