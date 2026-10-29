import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SCENARIOS, getScenarioBySlug, getScenariosByCategory } from '@/data/scenarios';
import { ComparisonViewer } from '@/components/scenario/ComparisonViewer';
import { ScenarioCard } from '@/components/scenario/ScenarioCard';
import { ScenarioDetailClient } from './ScenarioDetailClient';
import {
  Shield,
  ArrowLeft,
  Calendar,
  HelpCircle,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

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

  const pageUrl = `https://insurance.cristianvaduva.com/scenarii/${scenario.categoryId}/${scenario.slug}`;

  return {
    title: `WHAT IF: ${scenario.title} — Ce se întâmplă dacă?`,
    description: scenario.socialDescription || scenario.shortDescription,
    openGraph: {
      title: `WHAT IF: ${scenario.mainQuestion}`,
      description: scenario.socialHook,
      url: pageUrl,
      siteName: 'WHAT IF INSURANCE',
      locale: 'ro_RO',
      type: 'article',
      images: [
        {
          url: scenario.heroImage,
          width: 1200,
          height: 800,
          alt: scenario.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `WHAT IF: ${scenario.mainQuestion}`,
      description: scenario.socialHook,
      images: [scenario.heroImage],
    },
  };
}

export default function ScenarioDetailPage({ params }: ScenarioPageProps) {
  const scenario = getScenarioBySlug(params.slug);

  if (!scenario) {
    notFound();
  }

  // Related scenarios in the same category (excluding current)
  const relatedScenarios = getScenariosByCategory(scenario.categoryId)
    .filter((s) => s.slug !== scenario.slug)
    .slice(0, 3);

  return (
    <div className="w-full bg-white text-[#06141B] min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Navigation Bar */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/scenarii"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-[#06141B] transition-colors py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Înapoi la toate scenariile</span>
          </Link>

          <span className="text-xs font-mono text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 font-bold uppercase">
            {scenario.categoryName}
          </span>
        </div>

        {/* Scenario Header & Hero Card */}
        <section className="relative rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="py-1 px-3 rounded-full text-xs font-mono font-bold uppercase bg-slate-100 text-slate-800 border border-slate-200">
                {scenario.categoryName}
              </span>

              <span className="py-1 px-3 rounded-full text-xs font-bold uppercase bg-red-50 text-[#E10600] border border-red-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                {scenario.severityLabel || 'Risc Critic'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#06141B] tracking-tight leading-tight">
              {scenario.title}
            </h1>

            <p className="text-lg sm:text-2xl text-slate-800 font-medium italic border-l-4 border-[#06141B] pl-4 py-1 leading-snug">
              „{scenario.mainQuestion}”
            </p>

            {/* Visual Hero Photographic Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 my-6 shadow-md">
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
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                Descrierea Situației Reale
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {scenario.situation}
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Comparison Section */}
        <section>
          <ComparisonViewer scenario={scenario} />
        </section>

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
                Întrebări de pus asigurătorului tău
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

        {/* Client Interactive Actions Bar (Viral mechanics: Surprinde-ti prietenii, Inca unul, Check) */}
        <ScenarioDetailClient scenario={scenario} />

        {/* Documentary Sources & Editorial Verification */}
        <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-600">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-mono uppercase tracking-wider text-[#06141B] font-bold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              Surse documentare verificate
            </span>
            <span className="font-mono text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Ultima revizuire: {scenario.lastEditorialDate || scenario.lastReviewed || 'Octombrie 2026'}
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

          {scenario.disclaimer && (
            <p className="pt-2 text-[11px] text-slate-500 italic border-t border-slate-200">
              * {scenario.disclaimer}
            </p>
          )}
        </section>

        {/* Related Scenarios in Category */}
        {relatedScenarios.length > 0 && (
          <section className="pt-8 border-t border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-slate-500 font-bold">
                  Din aceeași categorie
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#06141B] mt-0.5">
                  Alte scenarii din {scenario.categoryName}
                </h3>
              </div>
              <Link
                href={`/scenarii?categorie=${scenario.categoryId}`}
                className="text-xs font-bold text-[#06141B] hover:text-[#E10600] flex items-center gap-1 transition-colors"
              >
                <span>Vezi toate</span>
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
