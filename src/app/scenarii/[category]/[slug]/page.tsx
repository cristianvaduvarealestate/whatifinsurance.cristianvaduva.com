import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Scenario } from '@/types/scenario';
import { SCENARIOS, getScenarioBySlug, getRelatedScenarios } from '@/data/scenarios';
import { ComparisonViewer } from '@/components/scenario/ComparisonViewer';
import { ScenarioCard } from '@/components/scenario/ScenarioCard';
import { ScenarioDetailClient } from './ScenarioDetailClient';
import { ScenarioThreeQuestionAnalysis } from '@/components/scenario/ScenarioThreeQuestionAnalysis';
import {
  Shield,
  ArrowLeft,
  Calendar,
  HelpCircle,
  ArrowRight,
  BookOpen,
  Clock,
  Info,
  CheckCircle2,
  FileCheck2,
  Coins,
  Wrench,
  ExternalLink,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { calculateReadingTime } from '@/lib/readingTime';

interface ScenarioPageProps {
  params: {
    category: string;
    slug: string;
  };
}

// Generate static params for all known scenarios
export function generateStaticParams() {
  return SCENARIOS.map((scenario) => ({
    category: scenario.categoryId,
    slug: scenario.slug,
  }));
}

// Generate rich dynamic SEO metadata per scenario
export async function generateMetadata({
  params,
}: ScenarioPageProps): Promise<Metadata> {
  const scenario = getScenarioBySlug(params.slug);
  if (!scenario) {
    return {
      title: 'Scenariu negăsit — WHAT IF INSURANCE',
    };
  }

  const pageUrl = `https://whatifinsurance.cristianvaduva.com/scenarii/${scenario.categoryId}/${scenario.slug}`;
  const seoTitle = `${scenario.mainQuestion} | ${scenario.title} — WHATIF Insurance`;
  const seoDescription = `${scenario.shortDescription} Analiză detaliată a riscurilor, clauzelor aplicabile și măsurilor de prevenție concrete, chiar și fără asigurare.`;
  const ogImageUrl = scenario.heroImage.startsWith('http')
    ? scenario.heroImage
    : `https://whatifinsurance.cristianvaduva.com${scenario.heroImage}`;

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${scenario.title} — Ce se întâmplă dacă?`,
      description: seoDescription,
      url: pageUrl,
      siteName: 'WHATIF INSURANCE',
      locale: 'ro_RO',
      type: 'article',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: scenario.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${scenario.title} — Ce se întâmplă dacă?`,
      description: seoDescription,
      images: [ogImageUrl],
    },
  };
}

// Helper for category-aware qualitative financial evaluation
function getQualitativeHeader(scenario: Scenario): string {
  if (scenario.slug === 'animal-companie-inghite-corp-strain-operatie') {
    return 'Costuri determinate de investigațiile clinice, manopera chirurgicală și spitalizarea veterinară';
  }
  if (scenario.slug === 'teapa-cumparaturi-online-magazin-fantom') {
    return 'Expunere financiară determinată de valoarea tranzacției și posibilitatea contestării plății';
  }
  if (scenario.slug === 'evacuare-urgenta-destinatie-izolata') {
    return 'Cost determinat de distanță, mijlocul de transport și logistica medicală de urgență';
  }
  if (scenario.slug === 'teava-inghetata-iarna') {
    return 'Impact financiar determinat de gravitatea avariei, instalațiile afectate și daunele cauzate de apă';
  }
  switch (scenario.categoryId) {
    case 'auto':
      return 'Impact financiar determinat de devizul de reparații, piesele de schimb și manopera de service';
    case 'viata-sanatate':
      return 'Impact financiar determinat de costurile tratamentelor medicale, spitalizării și recuperării';
    case 'digital-tech':
      return 'Expunere financiară determinată de valoarea tranzacției, refuzul la plată sau costul echipamentelor IT';
    case 'calatorii':
      return 'Cost determinat de asistența medicală de urgență, transportul specializat sau stornarea călătoriei';
    case 'raspundere-civila':
      return 'Expunere patrimonială determinată de prejudiciul cauzat terților și costurile apărării';
    case 'business':
      return 'Impact financiar determinat de întreruperea activității, pierderile operaționale sau răspunderea legală';
    case 'familie-lifestyle':
      return 'Impact financiar determinat de cheltuielile medicale neprevăzute sau înlocuirea bunurilor familiei';
    case 'luxury-bunuri':
      return 'Impact financiar determinat de evaluarea de specialitate și costul restaurării sau înlocuirii';
    case 'casa':
    case 'proprietari-chiriasi':
      return 'Impact financiar determinat de amploarea avariilor la imobil, instalații și bunurile afectate';
    default:
      return 'Impact financiar determinat de circumstanțele concrete ale evenimentului';
  }
}

function getQualitativeSubtitle(scenario: Scenario): string {
  if (scenario.slug === 'animal-companie-inghite-corp-strain-operatie' || scenario.categoryId === 'viata-sanatate') {
    return 'Fără tarife inventate sau estimări medicale neconfirmate';
  }
  if (scenario.slug === 'teapa-cumparaturi-online-magazin-fantom' || scenario.categoryId === 'digital-tech') {
    return 'Fără cifre inventate sau promisiuni neconfirmate';
  }
  if (scenario.slug === 'evacuare-urgenta-destinatie-izolata' || scenario.categoryId === 'calatorii') {
    return 'Fără tarife inventate sau estimări neconfirmate';
  }
  if (scenario.categoryId === 'auto' || scenario.categoryId === 'casa' || scenario.categoryId === 'proprietari-chiriasi') {
    return 'Fără cifre inventate sau devize neconfirmate';
  }
  return 'Fără cifre inventate sau valori neconfirmate prin documente';
}

function getQualitativeAssessmentText(scenario: Scenario): string {
  if (scenario.financialEstimate?.qualitativeAssessment) {
    return scenario.financialEstimate.qualitativeAssessment;
  }
  if (scenario.slug === 'animal-companie-inghite-corp-strain-operatie') {
    return 'Expunerea financiară include consultația veterinară de urgență, investigațiile imagistice (ecografie, radiografie), chirurgia pentru extragerea corpului străin, anestezia inhalatorie și terapia intensivă. Despăgubirea depinde de polița de sănătate pentru animale, termenii contractuali agreați, eventuala franșiză sau coplată și documentele clinice eliberate de clinica veterinară.';
  }
  if (scenario.slug === 'teapa-cumparaturi-online-magazin-fantom') {
    return 'Expunerea financiară depinde de suma plătită, autorizarea tranzacției și posibilitatea contestării plății la bancă. Orice recuperare depinde de verificarea bunei-credințe și de termenii aplicabili.';
  }
  if (scenario.slug === 'evacuare-urgenta-destinatie-izolata') {
    return 'Costul evacuării depinde de distanță, accesibilitate geografică, mijlocul de transport și echipajul medical necesar. Acoperirea depinde de aprobarea dispeceratului și de limitele poliței.';
  }
  if (scenario.slug === 'teava-inghetata-iarna') {
    return 'Costurile remedierii depind de gravitatea avariei, volumul de apă la dezgheț și instalațiile sau finisajele afectate. Acoperirea depinde de clauza facultativă de îngheț și respectarea obligațiilor preventive.';
  }
  if (scenario.slug === 'terasa-infiltratie-hidroizolatie') {
    return 'Costurile reparațiilor pot varia semnificativ în funcție de natura și amploarea avariei, materialele necesare, complexitatea intervenției și tarifele practicate de prestatorii autorizați. Valoarea despăgubirii sau a reparației se stabilește în funcție de evaluarea concretă a daunelor și de devizele aferente.';
  }
  return 'Impactul financiar concret depinde de circumstanțele specifice ale evenimentului, natura prejudiciului și documentele justificative emise de entitățile competente. Evaluarea calitativă detaliată a acestui risc este în curs de documentare pe baza surselor primare.';
}

function renderQualitativeCards(scenario: Scenario): React.ReactNode {
  if (scenario.slug === 'animal-companie-inghite-corp-strain-operatie') {
    return (
      <>
        <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
          <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
            Ce determină costurile medicale veterinare:
          </span>
          <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
            <li>Consultația de urgență și investigațiile imagistice (ecografie / radiografie)</li>
            <li>Dificultatea intervenției chirurgicale și durata anesteziei inhalatorii</li>
            <li>Numărul de zile de spitalizare la terapie intensivă veterinară (ATI)</li>
          </ul>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
          <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
            Ce depinde de polița pentru animale (Pet Insurance):
          </span>
          <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
            <li>Includerea expresă a intervențiilor chirurgicale de urgență și spitalizării ATI</li>
            <li>Nivelul franșizei sau coplății prevăzute în condițiile contractuale individuale</li>
            <li>Perioada de așteptare de la emitere și excluderile stipulate în poliță</li>
          </ul>
        </div>
      </>
    );
  }

  if (scenario.slug === 'teapa-cumparaturi-online-magazin-fantom') {
    return (
      <>
        <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
          <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
            Ce determină expunerea financiară:
          </span>
          <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
            <li>Suma plătită și pierderea financiară potențială</li>
            <li>Modalitatea de plată și autorizarea tranzacției</li>
            <li>Neprimirea produsului și imposibilitatea contactării comerciantului</li>
          </ul>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
          <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
            Ce influențează recuperarea:
          </span>
          <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
            <li>Rapiditatea contestării plății la banca emitentă a cardului (chargeback)</li>
            <li>Verificarea bunei-credințe și a măsurilor de securitate luate de utilizator</li>
            <li>Termenii contractuali ai serviciului de plată sau ai asigurării atașate cardului</li>
          </ul>
        </div>
      </>
    );
  }

  if (scenario.slug === 'evacuare-urgenta-destinatie-izolata') {
    return (
      <>
        <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
          <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
            Ce determină costul operațiunii:
          </span>
          <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
            <li>Distanța și accesibilitatea geografică a destinației</li>
            <li>Mijlocul de transport utilizat: elicopter, hidroavion, ambulanță aeriană sau maritim</li>
            <li>Necesitatea personalului medical și a echipamentelor de transport</li>
          </ul>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
          <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
            Ce influențează organizarea transferului:
          </span>
          <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
            <li>Urgența și complexitatea transferului</li>
            <li>Organizarea și autorizarea evacuării prin dispeceratul de asistență</li>
            <li>Limitele, aprobările și condițiile contractuale ale asigurării de călătorie</li>
          </ul>
        </div>
      </>
    );
  }

  if (scenario.slug === 'teava-inghetata-iarna') {
    return (
      <>
        <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
          <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
            Ce determină costul remedierii:
          </span>
          <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
            <li>Înghețarea și fisurarea conductei și scurgerea apei la dezgheț</li>
            <li>Afectarea instalațiilor sanitare, termice și a bunurilor prin apă</li>
            <li>Eventualele daune produse vecinilor sau terților</li>
          </ul>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
          <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
            Ce depinde de contractul de asigurare:
          </span>
          <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
            <li>Includerea expresă a clauzei de îngheț / apă de conductă în anexa poliței</li>
            <li>Condițiile de prevenție, notificare și acoperire confirmate în documentație</li>
            <li>Franșiza contractuală și sublimitele stabilite în polița de locuință</li>
          </ul>
        </div>
      </>
    );
  }

  switch (scenario.categoryId) {
    case 'auto':
      return (
        <>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce determină costul real:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Amploarea și profunzimea avariilor constatate la fața locului</li>
              <li>Prețul pieselor de schimb originale vs. compatibile omologate</li>
              <li>Tariful orar al manoperei din atelierele sau service-urile autorizate</li>
            </ul>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Elemente care rămân în sarcina asiguratului:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Franșiza contractuală prevăzută expres în poliță (dacă există)</li>
              <li>Avariile sau degradările preexistente producerii evenimentului</li>
              <li>Îmbunătățirile sau modernizările peste starea anterioară</li>
            </ul>
          </div>
        </>
      );

    case 'viata-sanatate':
      return (
        <>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce determină expunerea financiară:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Complexitatea diagnosticului, investigațiilor clinice și intervențiilor medicale</li>
              <li>Tarifele unității medicale și durata spitalizării sau recuperării</li>
              <li>Pierderea temporară sau permanentă a capacității de muncă și a veniturilor</li>
            </ul>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce depinde de polița de viață / sănătate:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Perioada de așteptare contractuală (carantină) de la semnarea poliței</li>
              <li>Excluderile pentru afecțiuni preexistente sau nedeclarate la subscriere</li>
              <li>Plafonul maxim anual de decontare sau indemnizația forfetară stabilită</li>
            </ul>
          </div>
        </>
      );

    case 'calatorii':
      return (
        <>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce determină expunerea financiară:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Costul serviciilor medicale de urgență în țara de destinație</li>
              <li>Necesitatea transportului sanitar specializat sau a repatrierii medicale</li>
              <li>Cheltuielile generate de întreruperea sau reprogramarea călătoriei</li>
            </ul>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce depinde de polița de călătorie:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Notificarea și autorizarea prealabilă prin dispeceratul de asistență 24/7</li>
              <li>Plafonul maxim de acoperire pentru asistență medicală și transport</li>
              <li>Excluderile pentru activități sportive de agrement fără clauză dedicată</li>
            </ul>
          </div>
        </>
      );

    case 'digital-tech':
      return (
        <>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce determină expunerea financiară:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Valoarea fondurilor transferate fraudulos sau a tranzacțiilor neautorizate</li>
              <li>Costurile de refacere, curățare și securizare a sistemelor informatice</li>
              <li>Valoarea echipamentelor deteriorate sau costul recuperării datelor</li>
            </ul>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce depinde de protecția contractuală:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Termenul limită de notificare a incidentului către bancă sau asigurător</li>
              <li>Gradul de diligență al utilizatorului în protejarea credențialelor de acces</li>
              <li>Limita maximă per tranzacție și plafoanele stabilite în contract</li>
            </ul>
          </div>
        </>
      );

    case 'raspundere-civila':
      return (
        <>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce determină expunerea financiară:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Întinderea prejudiciului material cauzat terților sau bunurilor acestora</li>
              <li>Eventualele costuri medicale sau de refacere solicitate de partea prejudiciată</li>
              <li>Cheltuielile de asistență juridică și apărare în caz de litigiu</li>
            </ul>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce depinde de polița de răspundere civilă:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Limita maximă a răspunderii asigurătorului per eveniment și per an</li>
              <li>Lipsa intenției sau a culpei grave în producerea prejudiciului</li>
              <li>Interdicția de a recunoaște răspunderea fără acordul asigurătorului</li>
            </ul>
          </div>
        </>
      );

    case 'business':
      return (
        <>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce determină impactul financiar:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Pierderile financiare operaționale și întreruperea fluxului de activitate</li>
              <li>Costurile de remediere a incidentului și restabilire a proceselor curente</li>
              <li>Pretențiile patrimoniale formulate de clienți, parteneri sau autorități</li>
            </ul>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce depinde de polițele comerciale:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Clauzele specifice de pierderi din exploatare sau răspundere managerială (D&O)</li>
              <li>Franșiza financiară sau temporală prevăzută în condițiile contractuale</li>
              <li>Respectarea măsurilor legale de conformitate și notificare a incidentului</li>
            </ul>
          </div>
        </>
      );

    case 'familie-lifestyle':
      return (
        <>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce determină expunerea financiară:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Costul remedierii sau înlocuirii bunurilor familiei afectate</li>
              <li>Cheltuielile medicale sau de asistență neprevăzute apărute în familie</li>
              <li>Eventualele prejudicii produse involuntar terților de către membrii familiei</li>
            </ul>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce depinde de contractul de asigurare:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Includerea clauzelor dedicate stilului de viață, animalelor sau bunurilor mobile</li>
              <li>Franșiza contractuală și sublimitele stabilite per eveniment</li>
              <li>Măsurile preventive rezonabile și notificarea la termen a incidentului</li>
            </ul>
          </div>
        </>
      );

    case 'luxury-bunuri':
      return (
        <>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce determină expunerea financiară:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Valoarea atestată prin expertiză sau catalog de evaluare a bunului de lux</li>
              <li>Costurile restaurării de specialitate, pieselor rare sau transportului securizat</li>
              <li>Deprecierea valorii de piață a bunului în urma intervenției</li>
            </ul>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce depinde de asigurarea bunurilor de valoare:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Existența unui certificat de autenticitate și a unei evaluări valabile</li>
              <li>Clauzele all-risks și respectarea măsurilor de securitate cerute (seif, monitorizare)</li>
              <li>Sublimitele de răspundere și franșizele contractuale aplicabile</li>
            </ul>
          </div>
        </>
      );

    case 'casa':
    case 'proprietari-chiriasi':
      return (
        <>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce determină costul remedierii:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Amploarea și profunzimea avariilor la structură, instalații și finisaje</li>
              <li>Costul materialelor necesare refacerii conform stării inițiale</li>
              <li>Tariful manoperei practicate de echipele sau prestatorii autorizați</li>
            </ul>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Elemente care rămân în sarcina asiguratului:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Franșiza contractuală prevăzută expres în poliță (dacă există)</li>
              <li>Avariile sau degradările preexistente producerii evenimentului</li>
              <li>Îmbunătățirile sau modernizările peste starea anterioară</li>
            </ul>
          </div>
        </>
      );

    default:
      return (
        <>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce determină expunerea financiară:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Gravitatea și consecințele directe ale evenimentului produs</li>
              <li>Documentele justificative eliberate de entitățile abilitate</li>
              <li>Cheltuielile necesare remedierii și limitării prejudiciului</li>
            </ul>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
              Ce depinde de contractul de asigurare:
            </span>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li>Includerea expresă a riscului în condițiile poliței încheiate</li>
              <li>Franșiza contractuală și sublimitele stabilite pe contract</li>
              <li>Respectarea măsurilor preventive și a termenelor de notificare</li>
            </ul>
          </div>
        </>
      );
  }
}

export default function ScenarioDetailPage({ params }: ScenarioPageProps) {
  const scenario = getScenarioBySlug(params.slug);

  if (!scenario) {
    notFound();
  }

  const pageUrl = `https://whatifinsurance.cristianvaduva.com/scenarii/${scenario.categoryId}/${scenario.slug}`;
  const relatedScenarios = getRelatedScenarios(scenario, 3).map((rel) => ({
    ...rel,
    financialEstimate: undefined,
    contractualDocument: undefined,
    contractualProduct: undefined,
  }));

  // Structured Data: BreadcrumbList
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Acasă',
        item: 'https://whatifinsurance.cristianvaduva.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Scenarii',
        item: 'https://whatifinsurance.cristianvaduva.com/scenarii',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: scenario.categoryName,
        item: `https://whatifinsurance.cristianvaduva.com/scenarii/${scenario.categoryId}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: scenario.title,
        item: pageUrl,
      },
    ],
  };

  // Structured Data: Article
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: scenario.title,
    description: scenario.shortDescription,
    image: scenario.heroImage.startsWith('http')
      ? scenario.heroImage
      : `https://whatifinsurance.cristianvaduva.com${scenario.heroImage}`,
    datePublished: '2026-10-30T00:00:00+02:00',
    dateModified: scenario.contractualReviewDate
      ? '2026-10-30T00:00:00+02:00'
      : '2026-11-06T00:00:00+02:00',
    author: {
      '@type': 'Organization',
      name: 'WHATIF Insurance',
      url: 'https://whatifinsurance.cristianvaduva.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WHATIF Insurance',
      url: 'https://whatifinsurance.cristianvaduva.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  };

  // Structured Data: FAQPage (Valid Q&A visible to users)
  const faqQuestions = [
    {
      '@type': 'Question',
      name: scenario.mainQuestion,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${scenario.situation} ${scenario.withInsurance.summary}`,
      },
    },
    ...(scenario.whatToCheck?.items || []).slice(0, 3).map((item) => ({
      '@type': 'Question',
      name: `Ce trebuie să verifici în contract: ${item.label}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.detail,
      },
    })),
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqQuestions,
  };

  return (
    <div className="w-full bg-white text-[#06141B] min-h-screen py-10">
      {/* Structured Data Script Blocks */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation Bar */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#06141B] transition-colors">Acasă</Link>
            </li>
            <li className="text-slate-300">/</li>
            <li>
              <Link href="/scenarii" className="hover:text-[#06141B] transition-colors">Scenarii</Link>
            </li>
            <li className="text-slate-300">/</li>
            <li>
              <Link href={`/scenarii/${scenario.categoryId}`} className="hover:text-[#06141B] transition-colors">
                {scenario.categoryName}
              </Link>
            </li>
          </ol>

          <Link
            href="/scenarii"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-[#06141B] transition-colors py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Toate cele 121 de cazuri</span>
          </Link>
        </nav>

        {/* Scenario Header & Hero Card */}
        <section className="relative rounded-3xl bg-white border border-slate-200 p-5 sm:p-10 shadow-sm overflow-hidden space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="py-1 px-3 rounded-full text-xs font-mono font-bold uppercase bg-slate-900 text-white">
              EDUCAȚIONAL
            </span>

            <span className="py-1 px-3 rounded-full text-xs font-mono font-bold uppercase bg-slate-100 text-slate-800 border border-slate-200">
              {scenario.categoryName}
            </span>

            <span className="py-1 px-3 rounded-full text-xs font-bold uppercase bg-red-50 text-[#E10600] border border-red-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
              {scenario.severityLabel || 'Risc Critic'}
            </span>

            <span className="py-1 px-3 rounded-full text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{calculateReadingTime(scenario.situation + ' ' + scenario.mainQuestion + ' ' + scenario.withInsurance.points.join(' '))} min citire</span>
            </span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black text-[#06141B] tracking-tight leading-tight">
            {scenario.title}
          </h1>

          <p className="text-base sm:text-2xl text-slate-800 font-medium italic border-l-4 border-[#06141B] pl-3 sm:pl-4 py-1 leading-snug">
            „{scenario.mainQuestion}”
          </p>

          {/* Verification Status Bar */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-slate-600 shrink-0" />
                <span className="font-semibold text-slate-900">
                  Revizuire editorială:
                </span>
                {scenario.editorialStatus === 'revizuit' && scenario.editorialReviewDate ? (
                  <span className="font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold text-[11px]">
                    Verificat ({scenario.editorialReviewDate})
                  </span>
                ) : (
                  <span className="font-mono text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 font-semibold text-[11px]">
                    Revizuire editorială în curs
                  </span>
                )}
              </div>

              {scenario.contractualReviewDate && scenario.contractualProduct ? (
                <div className="flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-mono text-[11px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Condiții contractuale consultate: {scenario.contractualProduct} ({scenario.contractualReviewDate})</span>
                </div>
              ) : scenario.legalReviewDate && scenario.legalBasis ? (
                <div className="flex items-center gap-1.5 text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 font-mono text-[11px] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Cadru legal / de piață verificat ({scenario.legalReviewDate})</span>
                </div>
              ) : (
                <div className="text-slate-500 font-mono text-[11px] bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Fără consultare contractuală nominală
                </div>
              )}
            </div>
            <p className="text-[11px] text-slate-500 italic pt-1 border-t border-slate-200/60">
              {scenario.contractualProduct
                ? `Referință documentară: ${scenario.contractualDocument || scenario.contractualProduct}. Condițiile concrete diferă în funcție de franșiză, excluderi și polița emisă.`
                : scenario.legalBasis
                ? `Referință legislativă/cadru: ${scenario.legalBasis}. O normă legală sau cadru de piață nu constituie o confirmare automată a unei despăgubiri private.`
                : 'Condițiile de acoperire diferă în funcție de produs, versiunea poliței, excluderi, franșiză și circumstanțele fiecărui eveniment.'}
            </p>
          </div>

          {/* Visual Hero Photographic Image */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 my-4 sm:my-6 shadow-md">
            <Image
              src={scenario.heroImage}
              alt={`Fotografie descriptivă pentru scenariul: ${scenario.title} — ${scenario.categoryName}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {scenario.imageCaption && (
            <p className="text-xs font-mono text-slate-500 -mt-2">
              Foto: {scenario.imageCaption}
            </p>
          )}

          {/* Situation Detailed Narrative */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Descrierea Scenariului Ilustrativ
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {scenario.situation}
            </p>
          </div>

          {/* Sistem de Transparență Financiară */}
          {scenario.financialEstimate?.amount ? (
            <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-amber-200/60">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-amber-700 shrink-0" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900">
                      Transparență Financiară · Valoare Documentată
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">
                      {scenario.financialEstimate.amount}
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      {scenario.financialEstimate.currency || 'RON'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1">
                  <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[11px] font-mono font-bold uppercase bg-emerald-100 text-emerald-900 border border-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Valoare documentată orientativ
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Tip: Documentat
                  </span>
                </div>
              </div>

              {/* Ipoteze și detalii calcul */}
              <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                {scenario.financialEstimate.assumptions && (
                  <div>
                    <strong className="text-slate-900 font-semibold">Ipoteze de calcul: </strong>
                    <span>{scenario.financialEstimate.assumptions}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {scenario.financialEstimate.includedItems && scenario.financialEstimate.includedItems.length > 0 && (
                    <div className="p-3 rounded-xl bg-white/80 border border-amber-200/60 space-y-1">
                      <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
                        Ce include estimarea:
                      </span>
                      <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
                        {scenario.financialEstimate.includedItems.map((inc, i) => (
                          <li key={i}>{inc}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {scenario.financialEstimate.excludedItems && scenario.financialEstimate.excludedItems.length > 0 && (
                    <div className="p-3 rounded-xl bg-white/80 border border-amber-200/60 space-y-1">
                      <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
                        Ce NU include estimarea:
                      </span>
                      <ul className="list-disc pl-4 space-y-0.5 text-slate-600 text-[11px]">
                        {scenario.financialEstimate.excludedItems.map((exc, i) => (
                          <li key={i}>{exc}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {scenario.financialEstimate.sourceTitle && (
                  <div className="pt-2 text-[11px] text-slate-600 flex flex-wrap items-center gap-1.5 border-t border-amber-200/50">
                    <span className="font-semibold text-slate-800">Sursă documentară:</span>
                    <span>{scenario.financialEstimate.sourceTitle}</span>
                    {scenario.financialEstimate.insurer && (
                      <span className="text-slate-500">({scenario.financialEstimate.insurer})</span>
                    )}
                    {scenario.financialEstimate.sourceUrl && (
                      <a
                        href={scenario.financialEstimate.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline hover:text-blue-900 inline-flex items-center gap-0.5 ml-1 font-medium"
                      >
                        <span>Consultă sursa oficială</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Card Calitativ când suma nu are deviz verificat */
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-slate-600 shrink-0" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                      Transparență Financiară · Evaluare Calitativă a Riscului
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    {getQualitativeHeader(scenario)}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1">
                  <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[11px] font-mono font-semibold bg-slate-200/80 text-slate-700 border border-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Evaluare calitativă · În curs de documentare primară
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {getQualitativeSubtitle(scenario)}
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                <p>
                  {getQualitativeAssessmentText(scenario)}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {renderQualitativeCards(scenario)}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Cele 3 Întrebări Esențiale & Verdictul Vizual */}
        <ScenarioThreeQuestionAnalysis scenario={scenario} />

        {/* Interactive Comparison Section */}
        <section>
          <ComparisonViewer scenario={scenario} />
        </section>

        {/* Secțiunea de Prevenție — Ce poți face chiar și fără asigurare */}
        {scenario.preventionTips && scenario.preventionTips.length > 0 && (
          <section className="p-6 sm:p-8 rounded-3xl bg-emerald-50/60 border border-emerald-200/80 space-y-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5 text-emerald-700" />
                Prevenție &amp; Bune Practici
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight pt-1">
                Ce poți face chiar și fără asigurare?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Reducerea riscului începe cu măsuri simple de precauție. Chiar dacă nu deții o poliță sau evenimentul intră la excluderi, aceste recomandări practice te ajută să previi sau să limitezi pagubele:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              {scenario.preventionTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-emerald-200/70 flex items-start gap-3 shadow-2xs"
                >
                  <span className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {tip}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-500 italic pt-2 border-t border-emerald-200/50">
              * Măsurile de prevenție au caracter orientativ și nu garantează evitarea totală a daunelor provocate de cazuri fortuite sau vicii ascunse. Verifică întotdeauna instrucțiunile tehnice ale producătorilor și reglementările locale.
            </p>
          </section>
        )}

        {/* Pași Imediți & Documente Utile (dacă există) */}
        {((scenario.immediateSteps && scenario.immediateSteps.length > 0) || (scenario.usefulDocuments && scenario.usefulDocuments.length > 0)) && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scenario.immediateSteps && scenario.immediateSteps.length > 0 && (
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-sm font-bold text-[#06141B] uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E10600]"></span>
                  Pași Imediți de Urmat
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {scenario.immediateSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#06141B] font-bold shrink-0">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {scenario.usefulDocuments && scenario.usefulDocuments.length > 0 && (
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-sm font-bold text-[#06141B] uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                  Documente &amp; Probe Utile
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {scenario.usefulDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-slate-400 shrink-0">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Actionable Insights: Relevant Policies & Questions to Ask */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Box 1: Tipuri de Polițe Relevante */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-[#06141B]">
              <Shield className="w-5 h-5 text-[#E10600]" />
              <h3 className="text-base font-bold text-[#06141B] uppercase tracking-wider text-xs font-mono">
                Polițe &amp; Clauze Relevante
              </h3>
            </div>
            <p className="text-xs text-slate-600">
              Pentru a preveni sau acoperi consecințele financiare ale acestui eveniment, verifică dacă deții:
            </p>
            <ul className="space-y-2.5 pt-1">
              {(scenario.relevantInsuranceTypes && scenario.relevantInsuranceTypes.length > 0
                ? scenario.relevantInsuranceTypes
                : [scenario.withInsurance.title, 'Clauze de asistență de urgență', 'Poliță de răspundere civilă dedicată']
              ).map((type, idx) => (
                <li
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs sm:text-sm text-slate-800"
                >
                  <span className="w-5 h-5 rounded-full bg-white border border-slate-300 text-slate-800 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{type}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 2: Întrebări de Verificare pentru Tine */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-[#06141B]">
              <HelpCircle className="w-5 h-5 text-slate-700" />
              <h3 className="text-base font-bold text-[#06141B] uppercase tracking-wider text-xs font-mono">
                Ce întrebi înainte să semnezi
              </h3>
            </div>
            <p className="text-xs text-slate-600">
              Înainte de apariția unui incident, pune aceste întrebări cheie pentru a ști unde te situezi:
            </p>
            <ul className="space-y-2.5 pt-1">
              {(scenario.verificationQuestions && scenario.verificationQuestions.length > 0
                ? scenario.verificationQuestions
                : scenario.advisorQuestions && scenario.advisorQuestions.length > 0
                ? scenario.advisorQuestions
                : scenario.whatToCheck.items.map((it) => it.label + ': ' + it.detail)
              ).map((q, idx) => (
                <li
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs sm:text-sm text-slate-800"
                >
                  <span className="text-[#E10600] font-bold shrink-0 mt-0.5">?</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Client Interactive Actions Bar */}
        <ScenarioDetailClient scenario={scenario} />

        {/* Contextual Advisory CTA — Discrete & Non-Aggressive */}
        <section className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono font-bold text-slate-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Consultanță dedicată în asigurări</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-2xl">
              WHAT IF INSURANCE este o resursă educațională. Pentru analizarea situației tale concrete, audit contractual și consultanță individuală în asigurări, vizitează platforma dedicată.
            </p>
          </div>
          <a
            href="https://insurance.cristianvaduva.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-[#06141B] transition-all shadow-xs shrink-0 group"
          >
            <span>insurance.cristianvaduva.com</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#E10600] transition-colors" />
          </a>
        </section>

        {/* Documentary Sources & Editorial Verification */}
        <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-600">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-mono uppercase tracking-wider text-[#06141B] font-bold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              Surse documentare verificate
            </span>
            <span className="font-mono text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Ultima revizuire editorială: {scenario.editorialReviewDate || scenario.lastEditorialDate || '6 noiembrie 2026'}
            </span>
          </div>

          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            {(scenario.sources && scenario.sources.length > 0
              ? scenario.sources
              : [
                  'Condițiile generale de asigurare ale companiilor de asigurări autorizate ASF din România',
                  'Codul Civil român (răspundere civilă delictuală și contractuală)',
                  'Ghidurile și normele Autorității de Supraveghere Financiară (ASF)'
                ]
            ).map((source, i) => (
              <li key={i}>{source}</li>
            ))}
          </ul>

          <p className="pt-2 text-[11px] text-slate-500 italic border-t border-slate-200">
            * Notă educațională: Acest scenariu este ilustrativ și se bazează pe condiții generale uzuale de asigurare și legislația aplicabilă din România. Conținutul nu constituie consultanță juridică, confirmare prealabilă a unei despăgubiri sau angajament ferm din partea unui asigurător. Rezultatul oricărui dosar de daună depinde exclusiv de textul contractului încheiat, clauzele atașate, excluderile aplicabile și evaluarea individuală a asigurătorului.{scenario.disclaimer ? ` ${scenario.disclaimer}` : ''}
          </p>
        </section>

        {/* Semantic Related Scenarios */}
        {relatedScenarios.length > 0 && (
          <section className="pt-8 border-t border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-slate-500 font-bold">
                  Scenarii Înrudite
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#06141B] mt-0.5">
                  Situații de risc conexe
                </h2>
              </div>
              <Link
                href={`/scenarii/${scenario.categoryId}`}
                className="text-xs font-bold text-[#06141B] hover:text-[#E10600] flex items-center gap-1 transition-colors"
              >
                <span>Vezi categoria {scenario.categoryName}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedScenarios.map((rel) => (
                <ScenarioCard key={rel.id} scenario={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
