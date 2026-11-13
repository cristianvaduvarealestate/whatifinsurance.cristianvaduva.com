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


function getConsecintaPatrimoniala(scenario: Scenario): string {
  if (scenario.slug === "animal-companie-inghite-corp-strain-operatie") {
    return "Cheltuieli medical-veterinare de urgență pentru investigații clinice (ecografie/radiografie), intervenție chirurgicală de extragere a corpului străin, anestezie inhalatorie și terapie intensivă (ATI).";
  }
  if (scenario.slug === "teapa-cumparaturi-online-magazin-fantom") {
    return "Suma plătită și pierderea financiară potențială prin debitarea contului, neprimirea produselor și blocarea fondurilor transferate.";
  }
  if (scenario.slug === "evacuare-urgenta-destinatie-izolata") {
    return "Expunere financiară masivă pentru logistica de transport medical specializat (aerian, maritim sau terestru), echipaj medical de urgență și spitalizare critică.";
  }
  if (scenario.slug === "teava-inghetata-iarna") {
    return "Prejudiciul poate include înlocuirea conductei sparte, afectarea instalațiilor sanitare/termice și a bunurilor prin apă, precum și eventuale daune provocate proprietăților învecinate.";
  }
  switch (scenario.categoryId) {
    case "auto":
      return "Costul reparațiilor în unități autorizate, piese de schimb originale sau omologate, manoperă, tractare și eventuale daune produse altor vehicule prin RCA.";
    case "viata-sanatate":
      return "Cheltuieli medicale pentru investigații clinice, tratamente, intervenții chirurgicale, spitalizare și pierderea veniturilor din incapacitate temporară de muncă.";
    case "digital-tech":
      return "Pierderea directă a fondurilor transferate, costul refacerii sau înlocuirii echipamentelor IT și riscurile legate de compromiterea datelor confidențiale.";
    case "calatorii":
      return "Expunere financiară pentru asistență medicală de urgență în străinătate, transport sanitar specializat, cazare suplimentară sau stornarea călătoriei.";
    case "raspundere-civila":
      return "Pretenții patrimoniale de despăgubire formulate de terții prejudiciați și cheltuieli asociate apărării juridice.";
    case "business":
      return "Pierderi financiare din întreruperea operațiunilor comerciale, cheltuieli de remediere și eventuale despăgubiri contractuale către clienți sau parteneri.";
    case "familie-lifestyle":
      return "Cheltuieli neprevăzute pentru sănătatea membrilor familiei sau a animalelor de companie, precum și înlocuirea bunurilor personale deteriorate.";
    case "luxury-bunuri":
      return "Pierdere patrimonială majoră raportată la valoarea de piață a bunului de lux, costuri de restaurare de specialitate sau salvare tehnică.";
    case "casa":
    case "proprietari-chiriasi":
    default:
      return "Prejudiciul poate include avarii directe la construcție și instalații, degradarea finisajelor și a bunurilor din interior, precum și eventuale daune produse vecinilor.";
  }
}

function getLegalOnlyExplanation(scenario: Scenario): string {
  if (scenario.slug === "animal-companie-inghite-corp-strain-operatie") {
    return "Cadrul sanitar-veterinar reglementează actul medical și tarifele clinicii. Preluarea cheltuielilor depinde de contractarea unei polițe dedicate de sănătate pentru animale de companie (Pet Insurance).";
  }
  if (scenario.slug === "teapa-cumparaturi-online-magazin-fantom") {
    return "Normele aplicabile stabilesc regulile privind drepturile consumatorilor și procedurile de refuz la plată. Clauzele unei eventuale protecții private se verifică în contract.";
  }
  if (scenario.slug === "evacuare-urgenta-destinatie-izolata") {
    return "Standardele internaționale reglementează asistența medicală de urgență. Preluarea cheltuielilor depinde de limitele și aprobările poliței de călătorie.";
  }
  if (scenario.slug === "teava-inghetata-iarna") {
    return "Normele legale stabilesc răspunderea civilă. Acoperirea depinde de contractarea clauzei facultative de îngheț și respectarea obligațiilor preventive.";
  }
  switch (scenario.categoryId) {
    case "auto":
      return "Normele RCA și legislația rutieră reglementează răspunderea delictuală. Pentru daunele propriului vehicul se aplică exclusiv condițiile facultative CASCO.";
    case "viata-sanatate":
      return "Legislația sănătății stabilește pachetul de bază din sistemul public. Serviciile în clinici private sau indemnizațiile forfetare depind de contractul de asigurare privată.";
    case "digital-tech":
      return "Cadrul legal protejează consumatorii în tranzacțiile financiare electronice. Protecția împotriva fraudelor depinde de diligența utilizatorului și termenii contractuali.";
    case "calatorii":
      return "Reglementările internaționale de transport și asistență stabilesc drepturile minime. Despăgubirile extinse depind de polița de călătorie contractată.";
    case "raspundere-civila":
      return "Articolele 1357 și 1372 Cod Civil stabilesc principiul răspunderii pentru prejudiciul cauzat. Preluarea plății de către asigurător depinde de limitele poliței de răspundere.";
    case "business":
      return "Codul Civil și legislația comercială reglementează obligațiile contractuale și răspunderea administratorilor. Asigurarea comercială preia riscul în limitele agreate.";
    case "familie-lifestyle":
      return "Normele legale stabilesc răspunderea civilă a părinților și proprietarilor. Acoperirea cheltuielilor depinde de clauzele dedicate din poliță.";
    case "luxury-bunuri":
      return "Raportul de expertiză și legislația privind bunurile mobile atestă valoarea. Asigurarea de tip all-risks acoperă dauna în limitele sumei asigurate evaluate.";
    case "casa":
    case "proprietari-chiriasi":
    default:
      return "Normele legale stabilesc răspunderea civilă delictuală și raporturile de vecinătate. Acoperirea daunelor depinde de clauzele facultative contractate în poliță.";
  }
}

function renderVerdictCeDepinde(scenario: Scenario): React.ReactNode {
  if (scenario.slug === "animal-companie-inghite-corp-strain-operatie") {
    return (
      <>
        <li>Limita maximă de acoperire pentru intervenții chirurgicale și spitalizare veterinară</li>
        <li>Perioada de așteptare prevăzută în contract de la intrarea în vigoare a poliței</li>
        <li>Nivelul franșizei sau coplății contractuale convenite cu asigurătorul</li>
        <li>Excluderile exprese stipulate în condițiile de asigurare pentru animale</li>
      </>
    );
  }
  if (scenario.slug === "teapa-cumparaturi-online-magazin-fantom") {
    return (
      <>
        <li>Plafonul maxim per tranzacție și limita anuală pentru protecția cumpărăturilor (dacă există)</li>
        <li>Termenul limită de notificare a băncii și deschiderea procedurii de refuz la plată</li>
        <li>Excluderea tranzacțiilor autorizate expres prin metode de autentificare strictă</li>
        <li>Condițiile de furnizare a dovezilor privind neprimirea produsului</li>
      </>
    );
  }
  if (scenario.slug === "evacuare-urgenta-destinatie-izolata") {
    return (
      <>
        <li>Limita maximă de acoperire pentru evacuare medicală și transport sanitar de urgență</li>
        <li>Obligația contactării și aprobării prealabile prin dispeceratul de asistență 24/7</li>
        <li>Excluderile geografice specifice (zone izolate, insule, safari sau expediții)</li>
        <li>Acoperirea costurilor pentru personalul medical însoțitor și echipamentele de suport</li>
      </>
    );
  }
  if (scenario.slug === "teava-inghetata-iarna") {
    return (
      <>
        <li>Includerea expresă a clauzei facultative de îngheț și apă de conductă în poliță</li>
        <li>Respectarea cerințelor de prevenție (menținerea încălzirii minime pe timp de ger)</li>
        <li>Obligația golirii instalațiilor de apă în perioadele de nelocuire a imobilului</li>
        <li>Franșiza contractuală și sublimita pentru daunele produse vecinilor sau terților</li>
      </>
    );
  }
  switch (scenario.categoryId) {
    case "auto":
      return (
        <>
          <li>Valoarea franșizei (0, sumă fixă 50–200 € sau procentuală per eveniment)</li>
          <li>Regimul de decontare (în reprezentanță vs. unități reparatoare agreate)</li>
          <li>Excluderile exprese (conducere sub influența alcoolului, ITP expirat, uzură)</li>
          <li>Clauzele suplimentare bifate (asistență rutieră extinsă, vehicul la schimb)</li>
        </>
      );
    case "viata-sanatate":
      return (
        <>
          <li>Perioada de așteptare contractuală (carantină) de la semnarea poliței</li>
          <li>Excluderile pentru afecțiuni preexistente sau nedeclarate la chestionarul medical</li>
          <li>Baremul de indemnizație procentuală sau plafoanele anuale de decontare</li>
          <li>Rețeaua medicală parteneră (decontare directă vs. rambursare ulterioară)</li>
        </>
      );
    case "calatorii":
      return (
        <>
          <li>Plafonul maxim de cheltuieli medicale de urgență (ex. 30.000–50.000 €)</li>
          <li>Obligația contactării prealabile a dispeceratului de asistență 24/7</li>
          <li>Excluderile pentru activități sportive de agrement fără clauză dedicată</li>
          <li>Acoperirea cheltuielilor de transport sanitar și repatriere medicală</li>
        </>
      );
    case "digital-tech":
      return (
        <>
          <li>Tipul de fraudă acoperit (phishing, skimming, atac cibernetic)</li>
          <li>Obligația blocării instrumentului de plată și raportării în termen util</li>
          <li>Limita maximă per incident sau per an de asigurare</li>
          <li>Excluderile pentru transmiterea benevolă a credențialelor de securitate</li>
        </>
      );
    case "raspundere-civila":
      return (
        <>
          <li>Limita maximă a sumei asigurate per eveniment și agregat anual</li>
          <li>Excluderea prejudiciilor cauzate cu intenție sau culpă gravă</li>
          <li>Acoperirea prejudiciilor materiale vs. vătămări corporale ale terților</li>
          <li>Franșiza contractuală aplicabilă fiecărui dosar de daună</li>
        </>
      );
    case "business":
      return (
        <>
          <li>Sublimitele stabilite pentru răspundere profesională, managerială (D&O) sau exploatare</li>
          <li>Perioada de întrerupere deductibilă (franșiză temporală la pierderi din exploatare)</li>
          <li>Notificarea incidentului în termenul stipulat în condițiile contractuale</li>
          <li>Excluderile pentru amenzi administrative sau încălcări intenționate ale normelor</li>
        </>
      );
    case "familie-lifestyle":
      return (
        <>
          <li>Sumele asigurate și sublimitele pentru bunurile personale și membrii familiei</li>
          <li>Includerea clauzelor dedicate pentru animale de companie sau echipamente speciale</li>
          <li>Franșiza contractuală prevăzută în contract</li>
          <li>Măsurile preventive obligatorii declarate în contract</li>
        </>
      );
    case "luxury-bunuri":
      return (
        <>
          <li>Evaluarea atestată prin raport de expertiză valabil la subscriere</li>
          <li>Clauzele all-risks și cerințele specifice de securitate (seif, monitorizare, transport)</li>
          <li>Sublimitele de despăgubire și franșiza contractuală aplicabilă</li>
          <li>Excluderile pentru depreciere naturală sau restaurări neautorizate</li>
        </>
      );
    case "casa":
    case "proprietari-chiriasi":
      return (
        <>
          <li>Valoarea franșizei (0, sumă fixă 50–200 € sau procentuală)</li>
          <li>Suma maximă asigurată a clădirii și a conținutului, corelată cu valoarea reală</li>
          <li>Excluderile exprese (uzură, viciu ascuns, nelocuire prelungită peste 30–60 zile)</li>
          <li>Includerea expresă a clauzelor de răspundere civilă față de vecini și terți</li>
        </>
      );
    default:
      return (
        <>
          <li>Valoarea franșizei contractuale aplicabile (dacă este prevăzută)</li>
          <li>Suma maximă asigurată și sublimitele prevăzute în contract</li>
          <li>Excluderile exprese menționate în condițiile generale ale poliței</li>
          <li>Măsurile preventive obligatorii stipulate în contract</li>
        </>
      );
  }
}

function renderVerdictCeTrebuieVerificat(scenario: Scenario): React.ReactNode {
  if (scenario.slug === "animal-companie-inghite-corp-strain-operatie") {
    return (
      <>
        <li>Carnetul de sănătate / pașaportul animalului, cu microcip și vaccinări la zi</li>
        <li>Foaia de observație clinică și raportul medical veterinar de urgență</li>
        <li>Factura fiscală detaliată și chitanța / bonul fiscal eliberat de clinica veterinară</li>
        <li>Respectarea perioadei de așteptare de la intrarea în vigoare a poliței</li>
      </>
    );
  }
  if (scenario.slug === "teapa-cumparaturi-online-magazin-fantom") {
    return (
      <>
        <li>Dovada comenzii, confirmarea plății și extrasul de cont bancar</li>
        <li>Formularul de refuz la plată (chargeback) transmis băncii emitente a cardului</li>
        <li>Dovada neprimirii bunurilor și a imposibilității contactării comerciantului</li>
        <li>Clauzele specifice de protecție a cumpărăturilor online din poliță sau contractul de card</li>
      </>
    );
  }
  if (scenario.slug === "evacuare-urgenta-destinatie-izolata") {
    return (
      <>
        <li>Numărul de asistență de urgență de pe cardul de asigurare de călătorie</li>
        <li>Raportul medical care atestă urgența vitală și necesitatea transportului aerian/naval</li>
        <li>Aprobarea prealabilă a transferului și a mijlocului de transport prin dispecerat</li>
        <li>Limitele, aprobările și condițiile contractuale ale poliței de călătorie</li>
      </>
    );
  }
  if (scenario.slug === "teava-inghetata-iarna") {
    return (
      <>
        <li>Polița facultativă de locuință și anexa cu clauza de fenomene de îngheț bifată</li>
        <li>Dovada respectării măsurilor de încălzire minimă sau conservare a conductelor</li>
        <li>Constatarea avariei la conductă și a consecințelor scurgerii la dezgheț</li>
        <li>Acoperirea de răspundere civilă în cazul în care apa a afectat proprietățile vecine</li>
      </>
    );
  }
  switch (scenario.categoryId) {
    case "auto":
      return (
        <>
          <li>Procesul-verbal de constatare amiabilă sau actele eliberate de poliție</li>
          <li>Fotografii detaliate ale poziției vehiculelor și ale tuturor avariilor</li>
          <li>Ghidul de decontare (în reprezentanță vs. ateliere partenere agreate)</li>
          <li>Notificarea daunei în termenul contractual de 24–72 de ore</li>
        </>
      );
    case "viata-sanatate":
      return (
        <>
          <li>Dosarul medical complet: bilete de ieșire, buletine de analize și rapoarte imagistice</li>
          <li>Facturile și chitanțele originale emise de furnizorii de servicii medicale</li>
          <li>Respectarea termenului de avizare către asigurător prevăzut în contract</li>
          <li>Chestionarul medical inițial completat cu bună-credință la subscriere</li>
        </>
      );
    case "calatorii":
      return (
        <>
          <li>Biletul de călătorie, confirmarea rezervării și dovada plății</li>
          <li>Înregistrarea dosarului la dispeceratul de asistență 24/7 înainte de efectuarea cheltuielilor</li>
          <li>Rapoartele medicale și rețetele eliberate de medicii locali</li>
          <li>Facturile și chitanțele detaliate pentru toate serviciile achitate</li>
        </>
      );
    case "digital-tech":
      return (
        <>
          <li>Confirmarea tranzacției, extrasul de cont bancar și notificările de securitate</li>
          <li>Formularul de refuz la plată (chargeback) depus la banca emitentă a cardului</li>
          <li>Plângerea înregistrată la organele abilitate sau rapoartele tehnice de incident</li>
          <li>Termenul limită contractual pentru raportarea incidentului de securitate</li>
        </>
      );
    case "raspundere-civila":
      return (
        <>
          <li>Descrierea circumstanțelor incidentului și datele de contact ale părții prejudiciate</li>
          <li>Probele materiale și evaluarea valorii reale a prejudiciului pretins</li>
          <li>Notificarea asigurătorului înainte de asumarea vreunei culpe sau înțelegeri amiabile</li>
          <li>Polița de asigurare și anexa cu clauza de răspundere civilă bifată</li>
        </>
      );
    case "business":
      return (
        <>
          <li>Documentele contabile și contractuale care atestă întinderea pierderii financiare</li>
          <li>Rapoartele interne de constatare a incidentului și măsurile de limitare luate</li>
          <li>Avizele, licențele și autorizațiile legale de funcționare aplicabile</li>
          <li>Notificarea la termen a asigurătorului conform procedurii stipulate în poliță</li>
        </>
      );
    case "familie-lifestyle":
      return (
        <>
          <li>Actele doveditoare ale incidentului și facturile de reparație sau înlocuire a bunurilor</li>
          <li>Rapoartele medicale sau veterinare în cazul afectării sănătății</li>
          <li>Polița de asigurare și anexele cu riscuri suplimentare bifate</li>
          <li>Notificarea în termenul prevăzut în contract către asigurător</li>
        </>
      );
    case "luxury-bunuri":
      return (
        <>
          <li>Certificatul de autenticitate și raportul de evaluare efectuat de un expert autorizat</li>
          <li>Facturile originale de achiziție și fotografiile detaliate ale bunului</li>
          <li>Procesul-verbal al poliției în caz de furt/tentativă sau raportul tehnic de avarie</li>
          <li>Dovada respectării condițiilor de păstrare securizată stipulate în contract</li>
        </>
      );
    case "casa":
    case "proprietari-chiriasi":
      return (
        <>
          <li>Polița facultativă de locuință și Anexa cu riscuri suplimentare bifate</li>
          <li>Existența dovezilor de notificare la termen a avariei către asigurător</li>
          <li>Devizul de reparații și evaluarea inspectorului de daună</li>
          <li>Limita de răspundere civilă față de vecini și terți</li>
        </>
      );
    default:
      return (
        <>
          <li>Polița de asigurare și anexele cu acoperirile bifate</li>
          <li>Notificarea la termen a producerii evenimentului asigurat</li>
          <li>Documentele justificative oficiale și dovezile privind întinderea prejudiciului</li>
          <li>Condițiile specifice și excluderile aplicabile contractului</li>
        </>
      );
  }
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
            <span>{getConsecintaPatrimoniala(scenario)}</span>
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
                <p className="text-xs text-slate-500 italic">{getLegalOnlyExplanation(scenario)}</p>
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
              {renderVerdictCeDepinde(scenario)}
            </ul>
          </div>

          {/* SECȚIUNEA 3: Ce trebuie verificat */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="text-xs font-mono font-bold uppercase text-sky-400 flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5" />
              Ce Trebuie Verificat
            </div>
            <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside leading-relaxed">
              {renderVerdictCeTrebuieVerificat(scenario)}
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
