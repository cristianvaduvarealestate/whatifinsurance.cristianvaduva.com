import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { CATEGORIES } from '@/data/categories';
import { SCENARIOS } from '@/data/scenarios';
import { ScenarioCard } from '@/components/scenario/ScenarioCard';
import { ArrowLeft, Compass, ShieldAlert, Sparkles } from 'lucide-react';

const ALIAS_MAP: Record<string, string> = {
  raspundere: 'raspundere-civila',
  viata: 'viata-sanatate',
  digital: 'digital-tech',
  luxury: 'luxury-bunuri',
  proprietari: 'proprietari-chiriasi',
  familie: 'familie-lifestyle',
};

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const params: { category: string }[] = [];
  CATEGORIES.forEach((c) => {
    params.push({ category: c.id });
  });
  Object.keys(ALIAS_MAP).forEach((alias) => {
    params.push({ category: alias });
  });
  return params;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolved = await params;
  const canonicalId = ALIAS_MAP[resolved.category] || resolved.category;
  const category = CATEGORIES.find((c) => c.id === canonicalId);

  if (!category) {
    return {
      title: 'Categorie Negăsită — WHAT IF INSURANCE',
    };
  }

  const title = `${category.name} — Dosare de Risc și Clauze de Asigurare | WHAT IF INSURANCE`;
  const description = `${category.shortDescription} Descoperă dosare reale de daună și analize comparative de clauze pentru ${category.name.toLowerCase()}.`;
  const canonicalUrl = `https://whatifinsurance.cristianvaduva.com/scenarii/${canonicalId}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'WHAT IF INSURANCE',
      locale: 'ro_RO',
      type: 'website',
      images: [
        {
          url: 'https://whatifinsurance.cristianvaduva.com/images/og-share.png',
          width: 1200,
          height: 630,
          alt: `${category.name} — WHAT IF INSURANCE`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://whatifinsurance.cristianvaduva.com/images/og-share.png'],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolved = await params;
  const rawId = resolved.category;

  // Handle aliases with permanent canonical redirect
  if (ALIAS_MAP[rawId]) {
    redirect(`/scenarii/${ALIAS_MAP[rawId]}`);
  }

  const category = CATEGORIES.find((c) => c.id === rawId);
  if (!category) {
    notFound();
  }

  const scenarios = SCENARIOS.filter((s) => s.categoryId === category.id);

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Acasă',
        item: 'https://whatifinsurance.cristianvaduva.com',
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
        name: category.name,
        item: `https://whatifinsurance.cristianvaduva.com/scenarii/${category.id}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-[#06141B] pt-10 pb-24 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <Link href="/" className="hover:text-[#06141B] transition-colors">
            Acasă
          </Link>
          <span>/</span>
          <Link href="/scenarii" className="hover:text-[#06141B] transition-colors">
            Scenarii
          </Link>
          <span>/</span>
          <span className="text-[#06141B] font-bold">{category.name}</span>
        </div>

        {/* Category Hero Banner */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#E10600]" />
            Dosare Reale de Risc · {scenarios.length} {scenarios.length === 1 ? 'caz' : 'cazuri documentate'}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#06141B]">
            {category.name}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
            {category.shortDescription}
          </p>

          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mt-2 font-mono">
            {category.tagline}
          </p>
        </div>

        {/* Other Categories Quick Pills */}
        <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <Link
            href="/scenarii"
            className="py-1.5 px-3 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 whitespace-nowrap transition-colors"
          >
            Toate (121)
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              href={`/scenarii/${c.id}`}
              className={`py-1.5 px-3 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                c.id === category.id
                  ? 'bg-[#06141B] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>

        {/* Scenarios Grid */}
        {scenarios.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {scenarios.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
            <ShieldAlert className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">
              Nu există cazuri documentate în această categorie momentan.
            </p>
          </div>
        )}

        {/* Bottom CTA to verify policy */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block">
              Consultanță &amp; Audit de Clauze
            </span>
            <h2 className="text-xl font-bold text-[#06141B]">
              Ai o poliță pentru {category.name.toLowerCase()} și vrei să-i verifici excluderile?
            </h2>
            <p className="text-xs text-slate-600 max-w-xl">
              Transmite detaliile poliței pentru o analiză obiectivă a limitelor de despăgubire și a cerințelor de notificare.
            </p>
          </div>

          <Link
            href={`/contact?topic=review-polita&cat=${category.id}`}
            className="py-3 px-6 rounded-full bg-[#06141B] hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm shrink-0 whitespace-nowrap"
          >
            Solicită verificare gratuită
          </Link>
        </div>
      </div>
    </div>
  );
}
