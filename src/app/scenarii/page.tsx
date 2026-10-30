'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CATEGORIES } from '@/data/categories';
import { SCENARIOS } from '@/data/scenarios';
import { ScenarioCard } from '@/components/scenario/ScenarioCard';
import { CategoryId } from '@/types/scenario';
import { Search, Filter, Shield, Compass, ArrowLeft, X } from 'lucide-react';

export default function ScenariiExplorerPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ScenariiContent />
    </Suspense>
  );
}

function ScenariiContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('categorie') as CategoryId | null;

  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>(
    initialCategory || 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');

  const filteredScenarios = useMemo(() => {
    return SCENARIOS.filter((scenario) => {
      const matchesCategory =
        selectedCategory === 'all' || scenario.categoryId === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        scenario.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scenario.mainQuestion.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scenario.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (scenario.tags &&
          scenario.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white text-[#06141B] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation back */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-[#06141B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Înapoi la Pagina Principală</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#E10600]" />
            Dosare Reale de Risc · 121 de Cazuri Documentate
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#06141B]">
            Casa ta arată perfect. Riscul nu se vede în poze.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
            121 de situații din viața reală documentate pe contracte reale. Vezi clauzele pe care le semnezi fără să le citești, înainte să devină costisitoare.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="space-y-6 mb-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Caută: țeavă, grindină, vecin, baterie, laptop, avion..."
                className="w-full py-2.5 pl-10 pr-4 rounded-xl bg-slate-50 border border-slate-200 text-[#06141B] text-sm focus:border-[#06141B] focus:bg-white focus:outline-none placeholder:text-slate-400 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Șterge căutarea"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="text-xs font-mono text-slate-500 font-semibold self-center sm:self-auto">
              Afișate: <strong className="text-[#06141B]">{filteredScenarios.length}</strong> din {SCENARIOS.length} scenarii
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`py-2 px-4 rounded-full text-xs font-bold shrink-0 transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#06141B] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              Toate Categoriile ({SCENARIOS.length})
            </button>

            {CATEGORIES.map((cat) => {
              const count = SCENARIOS.filter((s) => s.categoryId === cat.id).length;
              if (count === 0) return null;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`py-2 px-4 rounded-full text-xs font-bold shrink-0 transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#06141B] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Grid */}
        {filteredScenarios.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScenarios.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-2xl bg-slate-50 border border-slate-200 max-w-lg mx-auto">
            <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#06141B]">Niciun scenariu găsit</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Nu am găsit niciun scenariu care să corespundă căutării „{searchQuery}”.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-5 py-2 px-5 rounded-full bg-[#06141B] text-white text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              Resetează căutarea
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
