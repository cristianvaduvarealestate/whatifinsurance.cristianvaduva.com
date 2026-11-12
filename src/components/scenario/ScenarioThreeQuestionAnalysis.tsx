import React from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  FileText,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Info,
  Scale,
  Sparkles,
  Search
} from 'lucide-react';
import { Scenario } from '@/types/scenario';

interface ScenarioThreeQuestionAnalysisProps {
  scenario: Scenario;
}

export function ScenarioThreeQuestionAnalysis({ scenario }: ScenarioThreeQuestionAnalysisProps) {
  // Determine Generali Documentation Availability
  const hasGeneraliDocumentation = Boolean(
    scenario.contractualProduct &&
    (scenario.contractualDocument || scenario.contractualReviewDate)
  );

  const isLegalOnly = Boolean(!hasGeneraliDocumentation && scenario.legalBasis);

  // Suggested product for the Mini-Audit link
  const auditProductParam = scenario.categoryId === 'auto'
    ? 'casco'
    : scenario.categoryId === 'calatorii'
    ? 'turist_plus'
    : 'eurocasa';

  return (
    <section className="space-y-6 pt-2">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10600] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Analiză de Risc & Integrare Contractuală Generali
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#06141B] mt-0.5">
            Cele 3 Întrebări Esențiale Despre Riscul Tău
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {hasGeneraliDocumentation ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-[11px] font-bold">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              CONFIRMAT DOCUMENTAR
            </span>
          ) : isLegalOnly ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 font-mono text-[11px] font-bold">
              <Scale className="w-3 h-3 text-blue-600" />
              CADRU LEGAL ORIENTATIV
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-mono text-[11px] font-bold">
              <Info className="w-3 h-3 text-amber-600" />
              ÎN CURS DE VERIFICARE
            </span>
          )}
        </div>
      </div>

      {/* The 3 Core Questions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* ÎNTREBAREA 1: Ce se poate întâmpla? */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-slate-400 font-mono text-xs font-bold uppercase">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">1</span>
              <span>Dinamica Riscului</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#06141B] leading-snug">
              Ce se poate întâmpla?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
              {scenario.situation}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
            <span className="font-bold text-slate-900 block mb-0.5">Consecință patrimonială:</span>
            <span>
              {scenario.slug === 'teapa-cumparaturi-online-magazin-fantom'
                ? 'Suma plătită și pierderea financiară potențială prin debitarea contului, neprimirea produselor și blocarea fondurilor transferate.'
                : scenario.slug === 'evacuare-urgenta-destinatie-izolata'
                ? 'Expunere financiară masivă pentru logistica de transport medical specializat (aerian, maritim sau terestru), echipaj medical de urgență și spitalizare critică.'
                : scenario.slug === 'teava-inghetata-iarna'
                ? 'Prejudiciul poate include înlocuirea conductei sparte, afectarea instalațiilor sanitare/termice și a bunurilor prin apă, precum și eventuale daune provocate proprietăților învecinate.'
                : 'Prejudiciul poate include avarii directe, degradarea bunurilor adiacente și pretenții de despăgubire din partea terților afectați.'}
            </span>
          </div>
        </div>

        {/* ÎNTREBAREA 2: Ce condiții GENERALI contează? */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-slate-400 font-mono text-xs font-bold uppercase">
              <span className="w-5 h-5 rounded-full bg-[#E10600] text-white flex items-center justify-center text-[10px]">2</span>
              <span>Referință Contractuală</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#06141B] leading-snug">
              Ce condiții GENERALI contează?
            </h3>

            {hasGeneraliDocumentation ? (
              <div className="space-y-2 mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 font-mono text-[11px] text-emerald-950">
                  <span className="font-bold block">Document identificat:</span>
                  <span>{scenario.contractualDocument || scenario.contractualProduct}</span>
                  {scenario.contractualReviewDate && (
                    <span className="text-slate-500 block mt-0.5">Verificare: {scenario.contractualReviewDate}</span>
                  )}
                </div>
                <p className="text-xs text-slate-600">
                  Acoperirea depinde de existența clauzei facultative în anexa poliței, încadrarea cauzei în riscurile numite și respectarea măsurilor preventive impuse de asigurător.
                </p>
              </div>
            ) : isLegalOnly ? (
              <div className="space-y-2 mt-2 text-xs text-slate-600 leading-relaxed">
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 font-mono text-[11px] text-blue-950">
                  <span className="font-bold block">Cadru de referință:</span>
                  <span>{scenario.legalBasis}</span>
                </div>
                <p className="text-xs text-slate-500 italic">
                  {scenario.slug === 'teapa-cumparaturi-online-magazin-fantom'
                    ? 'Normele aplicabile stabilesc regulile privind drepturile consumatorilor și procedurile de refuz la plată. Clauzele unei eventuale protecții private se verifică în contract.'
                    : scenario.slug === 'evacuare-urgenta-destinatie-izolata'
                    ? 'Standardele internaționale reglementează asistența medicală de urgență. Preluarea cheltuielilor depinde de limitele și aprobările poliței de călătorie.'
                    : scenario.slug === 'teava-inghetata-iarna'
                    ? 'Normele legale stabilesc răspunderea civilă. Acoperirea depinde de contractarea clauzei facultative de îngheț și respectarea obligațiilor preventive.'
                    : 'Normele legale stabilesc răspunderea civilă. Clauzele specifice ale produsului comercial sunt în curs de documentare detaliată.'}
                </p>
              </div>
            ) : (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 mt-2 space-y-1">
                <span className="font-bold block">Documentație necesară pentru verificare</span>
                <p className="text-[11px] leading-relaxed">
                  Pentru acest scenariu specific, condițiile contractuale sunt în curs de revizuire individuală. Nu prezentăm afirmații presupuse.
                </p>
              </div>
            )}
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 font-mono">
            Limita interpretării: Condițiile concrete diferă în funcție de contractul individual, franșiză și excluderi.
          </div>
        </div>

        {/* ÎNTREBAREA 3: Ce trebuie să verifici în polița ta? */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-slate-400 font-mono text-xs font-bold uppercase">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">3</span>
              <span>Audit Personal</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#06141B] leading-snug">
              Ce trebuie să verifici în polița ta?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
              Ai această clauză în polița ta actuală?
            </p>

            <ul className="mt-2 space-y-1.5 text-xs text-slate-700">
              {(scenario.whatToCheck?.items || [
                { label: 'Existența clauzei', detail: 'Verifică dacă riscul figurează pe pagina principală a poliței.' },
                { label: 'Franșiza aplicabilă', detail: 'Verifică dacă există sumă deductibilă reținută pe dosar.' },
                { label: 'Clauza de neocupare', detail: 'Verifică termenul de absență permis fără suspendare.' }
              ]).slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#E10600] font-bold shrink-0">•</span>
                  <span><strong>{item.label}:</strong> {item.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={`/verificare-polita?product=${auditProductParam}`}
            className="py-2.5 px-4 rounded-xl bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold text-center flex items-center justify-center gap-2 transition-colors"
          >
            <span>Verifică în Mini-Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

      {/* VISUAL VERDICT CARD (3 SECTIONS: Ce știm | Ce depinde de contract | Ce trebuie verificat) */}
      <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-[#E10600]" />
            <h3 className="text-base sm:text-lg font-black tracking-tight">
              Verdictul Vizual al Riscului
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Sinteză metodologică pentru decizie informată
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          
          {/* SECȚIUNEA 1: Ce știm */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Ce Știm (Confirmat)
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {hasGeneraliDocumentation
                ? `Evenimentul poate fi acoperit în condițiile produsului ${scenario.contractualProduct}, cu condiția contractării clauzei specifice și respectării termenului de avizare.`
                : isLegalOnly
                ? `Răspunderea este reglementată de ${scenario.legalBasis}. O poliță de asigurare privată poate prelua prejudiciul doar dacă există o clauză contractuală validă.`
                : 'Evenimentul generează riscuri financiare reale demonstrate în practică. Despăgubirea depinde de termenii poliței încheiate.'}
            </p>
          </div>

          {/* SECȚIUNEA 2: Ce depinde de contract */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="text-xs font-mono font-bold uppercase text-amber-400 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              Ce Depinde de Contract
            </div>
            <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside leading-relaxed">
              {scenario.slug === 'teapa-cumparaturi-online-magazin-fantom' ? (
                <>
                  <li>Plafonul maxim per tranzacție și limita anuală pentru protecția cumpărăturilor (dacă există)</li>
                  <li>Termenul limită de notificare a băncii și deschiderea procedurii de refuz la plată</li>
                  <li>Excluderea tranzacțiilor autorizate expres prin metode de autentificare strictă</li>
                  <li>Condițiile de furnizare a dovezilor privind neprimirea produsului</li>
                </>
              ) : scenario.slug === 'evacuare-urgenta-destinatie-izolata' ? (
                <>
                  <li>Limita maximă de acoperire pentru evacuare medicală și transport sanitar de urgență</li>
                  <li>Obligația contactării și aprobării prealabile prin dispeceratul de asistență 24/7</li>
                  <li>Excluderile geografice specifice (zone izolate, insule, safari sau expediții)</li>
                  <li>Acoperirea costurilor pentru personalul medical însoțitor și echipamentele de suport</li>
                </>
              ) : scenario.slug === 'teava-inghetata-iarna' ? (
                <>
                  <li>Includerea expresă a clauzei facultative de îngheț și apă de conductă în poliță</li>
                  <li>Respectarea cerințelor de prevenție (menținerea încălzirii minime pe timp de ger)</li>
                  <li>Obligația golirii instalațiilor de apă în perioadele de nelocuire a imobilului</li>
                  <li>Franșiza contractuală și sublimita pentru daunele produse vecinilor sau terților</li>
                </>
              ) : (
                <>
                  <li>Valoarea franșizei (0, sumă fixă 50–200 € sau procentuală)</li>
                  <li>Suma maximă asigurată și eventualele sublimite per obiect</li>
                  <li>Excluderile exprese (uzură, viciu ascuns, nelocuire prelungită)</li>
                  <li>Măsurile preventive obligatorii declarate în contract</li>
                </>
              )}
            </ul>
          </div>

          {/* SECȚIUNEA 3: Ce trebuie verificat */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="text-xs font-mono font-bold uppercase text-sky-400 flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5" />
              Ce Trebuie Verificat
            </div>
            <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside leading-relaxed">
              {scenario.slug === 'teapa-cumparaturi-online-magazin-fantom' ? (
                <>
                  <li>Dovada comenzii, confirmarea plății și extrasul de cont bancar</li>
                  <li>Formularul de refuz la plată (chargeback) transmis băncii emitente a cardului</li>
                  <li>Dovada neprimirii bunurilor și a imposibilității contactării comerciantului</li>
                  <li>Clauzele specifice de protecție a cumpărăturilor online din poliță sau contractul de card</li>
                </>
              ) : scenario.slug === 'evacuare-urgenta-destinatie-izolata' ? (
                <>
                  <li>Numărul de asistență de urgență de pe cardul de asigurare de călătorie</li>
                  <li>Raportul medical care atestă urgența vitală și necesitatea transportului aerian/naval</li>
                  <li>Aprobarea prealabilă a transferului și a mijlocului de transport prin dispecerat</li>
                  <li>Limitele, aprobările și condițiile contractuale ale poliței de călătorie</li>
                </>
              ) : scenario.slug === 'teava-inghetata-iarna' ? (
                <>
                  <li>Polița facultativă de locuință și anexa cu clauza de fenomene de îngheț bifată</li>
                  <li>Dovada respectării măsurilor de încălzire minimă sau conservare a conductelor</li>
                  <li>Constatarea avariei la conductă și a consecințelor scurgerii la dezgheț</li>
                  <li>Acoperirea de răspundere civilă în cazul în care apa a afectat proprietățile vecine</li>
                </>
              ) : (
                <>
                  <li>Polița tipărită și Anexa cu riscuri suplimentare bifate</li>
                  <li>Existența dovezilor de notificare la termen a avariei</li>
                  {scenario.categoryId === 'auto' ? (
                    <li>Ghidul de decontare (în reprezentanță vs. ateliere partenere)</li>
                  ) : (
                    <li>Devizul de reparații și evaluarea inspectorului de daună</li>
                  )}
                  <li>Limita de răspundere civilă față de vecini și terți</li>
                </>
              )}
            </ul>
          </div>

        </div>

        <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <span>* Despăgubirile se acordă exclusiv în limita condițiilor contractuale și a sumelor asigurate aprobate pe dosar.</span>
          <Link
            href="/calculator"
            className="text-white hover:text-[#E10600] font-semibold underline underline-offset-4 flex items-center gap-1 transition-colors"
          >
            <span>Simulează pierderea proprie în Financial Calculator</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
