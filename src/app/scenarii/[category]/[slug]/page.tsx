import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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

export default function ScenarioDetailPage({ params }: ScenarioPageProps) {
  const scenario = getScenarioBySlug(params.slug);

  if (!scenario) {
    notFound();
  }

  const pageUrl = `https://whatifinsurance.cristianvaduva.com/scenarii/${scenario.categoryId}/${scenario.slug}`;
  const relatedScenarios = getRelatedScenarios(scenario, 3);

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
                    Impact variabil în funcție de devizul autorizat și amploarea avariei
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1">
                  <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[11px] font-mono font-semibold bg-slate-200/80 text-slate-700 border border-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Evaluare calitativă · În curs de documentare primară
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Fără cifre inventate sau devize neconfirmate
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                <p>
                  {scenario.financialEstimate?.qualitativeAssessment ||
                    'Costurile reparațiilor pot varia semnificativ în funcție de natura și amploarea avariei, materialele necesare, complexitatea intervenției și tarifele practicate de prestatorii autorizați. Valoarea despăgubirii sau a reparației se stabilește în funcție de evaluarea concretă a daunelor și de devizele aferente.'}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                    <span className="font-semibold text-slate-900 block text-[11px] uppercase font-mono">
                      Ce determină costul real:
                    </span>
                    <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
                      <li>Amploarea și profunzimea avariilor constatate la fața locului</li>
                      {scenario.categoryId === 'auto' ? (
                        <>
                          <li>Prețul pieselor de schimb originale vs. compatibile omologate</li>
                          <li>Tariful orar al manoperei din atelierele sau service-urile autorizate</li>
                        </>
                      ) : (
                        <>
                          <li>Costul materialelor, finisajelor sau instalațiilor necesare refacerii</li>
                          <li>Tariful manoperei practicate de echipele sau prestatorii autorizați</li>
                        </>
                      )}
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
