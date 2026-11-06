'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { CATEGORIES } from '@/data/categories';
import { SCENARIOS } from '@/data/scenarios';
import { ScenarioCard } from '@/components/scenario/ScenarioCard';
import { CategoryId, UserProfileId } from '@/types/scenario';
import { Search, Filter, Shield, Compass, ArrowLeft, X, RotateCcw, UserCheck, Sparkles } from 'lucide-react';

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

// Contextual situation matching logic
const matchesContextSituation = (scenario: typeof SCENARIOS[0], contextKey: string): boolean => {
  if (contextKey === 'all') return true;
  const textCorpus = `${scenario.title} ${scenario.shortDescription} ${scenario.situation} ${scenario.tags?.join(' ') || ''}`.toLowerCase();

  switch (contextKey) {
    case 'am_copii':
      return (
        scenario.categoryId === 'familie-lifestyle' ||
        textCorpus.includes('copil') ||
        textCorpus.includes('copii') ||
        textCorpus.includes('minor') ||
        textCorpus.includes('școal') ||
        textCorpus.includes('trotinet')
      );
    case 'ev':
      return (
        scenario.categoryId === 'auto' &&
        (textCorpus.includes('electric') ||
          textCorpus.includes('baterie') ||
          textCorpus.includes('stație') ||
          textCorpus.includes('încărcare') ||
          textCorpus.includes('autonomie') ||
          textCorpus.includes('hibrid'))
      );
    case 'calatoresc':
      return (
        scenario.categoryId === 'calatorii' ||
        textCorpus.includes('zbor') ||
        textCorpus.includes('avion') ||
        textCorpus.includes('bagaj') ||
        textCorpus.includes('aeroport') ||
        textCorpus.includes('străinătate') ||
        textCorpus.includes('vacanț')
      );
    case 'locuinta':
      return (
        scenario.categoryId === 'casa' ||
        textCorpus.includes('apartament') ||
        textCorpus.includes('casă') ||
        textCorpus.includes('țeavă') ||
        textCorpus.includes('acoperiș') ||
        textCorpus.includes('inundați')
      );
    case 'chirias':
      return (
        scenario.categoryId === 'proprietari-chiriasi' ||
        textCorpus.includes('chiriaș') ||
        textCorpus.includes('proprietar') ||
        textCorpus.includes('garanți') ||
        textCorpus.includes('închiri')
      );
    case 'firma':
      return (
        scenario.categoryId === 'business' ||
        scenario.categoryId === 'digital-tech' ||
        textCorpus.includes('firm') ||
        textCorpus.includes('angajat') ||
        textCorpus.includes('sediu') ||
        textCorpus.includes('client')
      );
    default:
      return true;
  }
};

// Severity / Risk level classification logic (Internal Editorial Methodology)
const matchesRiskLevel = (scenario: typeof SCENARIOS[0], riskLevel: string): boolean => {
  if (riskLevel === 'all') return true;
  const severity = (scenario.severityLabel || '').toLowerCase();

  if (riskLevel === 'critic') {
    return (
      severity.includes('critic') ||
      severity.includes('vital') ||
      severity.includes('extrem') ||
      severity.includes('catastrof') ||
      severity.includes('masiv') ||
      severity.includes('executare')
    );
  }
  if (riskLevel === 'major') {
    return (
      severity.includes('major') ||
      severity.includes('ridicat') ||
      severity.includes('grav') ||
      severity.includes('costisitor') ||
      severity.includes('penal') ||
      severity.includes('juridic')
    );
  }
  if (riskLevel === 'moderat') {
    return (
      !matchesRiskLevel(scenario, 'critic') &&
      !matchesRiskLevel(scenario, 'major')
    );
  }
  return true;
};



const PROFILES_CONFIG: { id: UserProfileId; label: string; description: string }[] = [
  { id: 'proprietar', label: 'Sunt proprietar', description: 'apă, incendiu, furt, fenomene naturale, răspundere față de vecini' },
  { id: 'chirias', label: 'Sunt chiriaș', description: 'bunuri personale, avarii, răspundere civilă, daune locuinței' },
  { id: 'sofer', label: 'Sunt șofer', description: 'CASCO, RCA, parcare, vandalism, fenomene naturale' },
  { id: 'parinte', label: 'Sunt părinte', description: 'răspundere civilă, accidente, bunuri, situații legate de copii' },
  { id: 'antreprenor', label: 'Sunt antreprenor', description: 'bunuri comerciale, răspundere profesională, cyber, întreruperea activității' },
  { id: 'calator', label: 'Călătoresc frecvent', description: 'bagaje, anulări, asistență medicală, întârzieri' },
];

function normalizeRomanian(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ă/g, 'a')
    .replace(/â/g, 'a')
    .replace(/î/g, 'i')
    .replace(/ș/g, 's')
    .replace(/ş/g, 's')
    .replace(/ț/g, 't')
    .replace(/ţ/g, 't');
}

function ScenariiContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialCategory = (searchParams.get('categorie') as CategoryId | 'all') || 'all';
  const initialRisk = searchParams.get('risc') || 'all';
  const initialContext = searchParams.get('situatie') || 'all';
  const initialSort = searchParams.get('sort') || 'relevanta';
  const initialSearch = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>(initialCategory);
  const [selectedRisk, setSelectedRisk] = useState<string>(initialRisk);
  const [selectedContext, setSelectedContext] = useState<string>(initialContext);
  const [sortBy, setSortBy] = useState<string>(initialSort);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [selectedProfiles, setSelectedProfiles] = useState<UserProfileId[]>([]);

  // Load saved personalization preferences locally from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('whatif_user_profiles');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setSelectedProfiles(parsed);
        }
      }
    } catch {
      // Local storage not accessible or empty
    }
  }, []);

  // Save selected profiles locally without tracking any PII
  const toggleProfile = (profileId: UserProfileId) => {
    setSelectedProfiles((prev) => {
      const next = prev.includes(profileId)
        ? prev.filter((p) => p !== profileId)
        : [...prev, profileId];
      try {
        localStorage.setItem('whatif_user_profiles', JSON.stringify(next));
      } catch {
        // Storage fail-safe
      }
      return next;
    });
  };

  const clearProfiles = () => {
    setSelectedProfiles([]);
    try {
      localStorage.removeItem('whatif_user_profiles');
    } catch {}
  };

  // Sync state changes with URL query string cleanly
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory !== 'all') params.set('categorie', selectedCategory);
    if (selectedRisk !== 'all') params.set('risc', selectedRisk);
    if (selectedContext !== 'all') params.set('situatie', selectedContext);
    if (sortBy !== 'relevanta') params.set('sort', sortBy);
    if (searchQuery.trim() !== '') params.set('q', searchQuery.trim());

    const queryString = params.toString();
    const newUrl = queryString ? `/scenarii?${queryString}` : '/scenarii';
    window.history.replaceState(null, '', newUrl);
  }, [selectedCategory, selectedRisk, selectedContext, sortBy, searchQuery]);

  const filteredScenarios = useMemo(() => {
    const normalizedQuery = normalizeRomanian(searchQuery.trim());

    const list = SCENARIOS.filter((scenario) => {
      const matchesCategory =
        selectedCategory === 'all' || scenario.categoryId === selectedCategory;

      let matchesSearch = true;
      if (normalizedQuery !== '') {
        const titleNorm = normalizeRomanian(scenario.title);
        const questionNorm = normalizeRomanian(scenario.mainQuestion);
        const descNorm = normalizeRomanian(scenario.shortDescription);
        const sitNorm = normalizeRomanian(scenario.situation);
        const catNorm = normalizeRomanian(scenario.categoryName);
        const tagsNorm = (scenario.tags || []).map(normalizeRomanian);
        const keywordsNorm = (scenario.searchKeywords || []).map(normalizeRomanian);

        matchesSearch =
          titleNorm.includes(normalizedQuery) ||
          questionNorm.includes(normalizedQuery) ||
          descNorm.includes(normalizedQuery) ||
          sitNorm.includes(normalizedQuery) ||
          catNorm.includes(normalizedQuery) ||
          tagsNorm.some((t) => t.includes(normalizedQuery)) ||
          keywordsNorm.some((k) => k.includes(normalizedQuery));
      }

      const matchesContext = matchesContextSituation(scenario, selectedContext);
      const matchesRisk = matchesRiskLevel(scenario, selectedRisk);

      // Profile match filter (if user selected one or more profiles)
      const matchesProfile =
        selectedProfiles.length === 0 ||
        (scenario.userProfiles &&
          selectedProfiles.some((p) => scenario.userProfiles?.includes(p)));

      return matchesCategory && matchesSearch && matchesContext && matchesRisk && matchesProfile;
    });

    // Sorting
    if (sortBy === 'titlu') {
      return [...list].sort((a, b) => a.title.localeCompare(b.title, 'ro'));
    }
    if (sortBy === 'risc') {
      const getWeight = (s: typeof SCENARIOS[0]) => {
        if (matchesRiskLevel(s, 'critic')) return 3;
        if (matchesRiskLevel(s, 'major')) return 2;
        return 1;
      };
      return [...list].sort((a, b) => getWeight(b) - getWeight(a));
    }
    return list;
  }, [selectedCategory, searchQuery, selectedContext, selectedRisk, sortBy, selectedProfiles]);

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedRisk !== 'all' ||
    selectedContext !== 'all' ||
    sortBy !== 'relevanta' ||
    searchQuery.trim() !== '' ||
    selectedProfiles.length > 0;

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedRisk('all');
    setSelectedContext('all');
    setSortBy('relevanta');
    setSearchQuery('');
    clearProfiles();
  };

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
        <div className="border-b border-slate-200 pb-8 mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#E10600] text-xs font-mono font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              121 de Situații Documentate
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono font-medium">
              Orientativ · Educațional
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#06141B]">
            Catalogul Complet al Scenariilor de Risc
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
            Fiecare scenariu descrie o situație realistă și clauzele contractuale din România care decid acoperirea. Folosește filtrele de mai jos pentru a găsi riscurile relevante pentru viața sau afacerea ta.
          </p>
        </div>

        {/* Personalization Entry: Cum arată viața ta? */}
        <section className="p-6 rounded-3xl bg-slate-900 text-white space-y-4 mb-8 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#E10600] font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Personalizează Catalogul
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                Cum arată viața ta?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Selectează unul sau mai multe profiluri pentru a prioritiza riscurile care te vizează direct. Selecția este salvată local în browser, fără colectare de date personale.
              </p>
            </div>
            {selectedProfiles.length > 0 && (
              <button
                type="button"
                onClick={clearProfiles}
                className="text-xs font-semibold text-slate-400 hover:text-white underline underline-offset-4 self-start sm:self-auto shrink-0"
              >
                Resetează profilurile ({selectedProfiles.length})
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2">
            {PROFILES_CONFIG.map((profile) => {
              const isSelected = selectedProfiles.includes(profile.id);
              return (
                <button
                  key={profile.id}
                  type="button"
                  onClick={() => toggleProfile(profile.id)}
                  title={profile.description}
                  className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between gap-2 min-h-[72px] ${
                    isSelected
                      ? 'bg-white text-slate-950 border-white shadow-lg shadow-white/10 ring-2 ring-[#E10600]'
                      : 'bg-slate-800/80 text-slate-200 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-bold leading-tight">
                      {profile.label}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#E10600] shrink-0" />
                    )}
                  </div>
                  <span className={`text-[10px] line-clamp-1 ${isSelected ? 'text-slate-600' : 'text-slate-400'}`}>
                    {profile.description}
                  </span>
                </button>
              );
            })}
          </div>

          {selectedProfiles.length > 0 && (
            <div className="pt-2 flex items-center justify-between text-xs text-slate-300 border-t border-slate-800">
              <span>
                Filtrare activă după profil: <strong className="text-white">{filteredScenarios.length}</strong> din {SCENARIOS.length} scenarii relevante
              </span>
            </div>
          )}
        </section>

        {/* Filter Toolbar Box */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 mb-8">
          {/* Row 1: Search + Sort + Reset */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Caută în cele 121 de cazuri (ex: țeavă, franșiză, vecin, furtună, zbor)..."
                  className="w-full py-2.5 pl-10 pr-10 rounded-2xl bg-white border border-slate-300 text-[#06141B] text-xs sm:text-sm min-h-[44px] focus:border-[#06141B] focus:outline-none placeholder:text-slate-400 shadow-2xs"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Șterge căutarea"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Sort & Reset */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold uppercase text-slate-500 hidden sm:inline">
                  Sortare:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3.5 py-2.5 rounded-2xl bg-white border border-slate-300 text-xs font-semibold text-[#06141B] focus:outline-none min-h-[44px]"
                >
                  <option value="relevanta">Relevanță editorială</option>
                  <option value="risc">Nivel de risc (Descrescător)</option>
                  <option value="titlu">Titlu (Alfabetic A–Z)</option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-3.5 py-2.5 rounded-2xl bg-slate-200/80 hover:bg-slate-300 text-[#06141B] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 min-h-[44px]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Resetează</span>
                </button>
              )}
            </div>
          </div>

            {/* Quick search suggestions */}
            <div className="flex items-center gap-1.5 flex-wrap text-[11px] text-slate-500 pt-1">
              <span className="font-semibold text-slate-700">Sugestii rapide:</span>
              {[
                'țeavă crăpată de ger',
                'inundație de la vecin',
                'copil a spart ceva',
                'lovit mașina în parcare',
                'bagaj pierdut',
                'grindină',
                'trotinetă electrică'
              ].map((query) => (
                <button
                  key={query}
                  type="button"
                  onClick={() => setSearchQuery(query)}
                  className="px-2.5 py-1 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-800 transition-colors cursor-pointer text-[11px]"
                >
                  {query}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Situații personale relevante (Contextual life filters) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                Situație personală relevantă:
              </span>
              <span className="text-[10px] text-slate-400">Selectează pentru filtrare contextuală</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {[
                { id: 'all', label: 'Toate situațiile' },
                { id: 'am_copii', label: 'Am copii' },
                { id: 'ev', label: 'Am automobil electric / PHEV' },
                { id: 'calatoresc', label: 'Călătoresc frecvent' },
                { id: 'locuinta', label: 'Dețin o locuință' },
                { id: 'chirias', label: 'Închiriez / Sunt chiriaș' },
                { id: 'firma', label: 'Am o firmă / Activitate' },
              ].map((ctx) => {
                const isActive = selectedContext === ctx.id;
                return (
                  <button
                    key={ctx.id}
                    type="button"
                    onClick={() => setSelectedContext(ctx.id)}
                    className={`px-3.5 py-2 rounded-full text-xs font-semibold shrink-0 transition-all active:scale-95 border ${
                      isActive
                        ? 'bg-[#06141B] text-white border-[#06141B] shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    {ctx.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 3: Categorie & Nivel de Risc */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2 border-t border-slate-200/60">
            {/* Category selection */}
            <div className="md:col-span-3 space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                Categorie de asigurare:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  Toate ({SCENARIOS.length})
                </button>
                {CATEGORIES.map((cat) => {
                  const count = SCENARIOS.filter((s) => s.categoryId === cat.id).length;
                  if (count === 0) return null;
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-slate-900 text-white'
                          : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                      }`}
                    >
                      {cat.name} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Risk filter */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                Nivel de risc orientativ:
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'all', label: 'Toate nivelele' },
                  { id: 'critic', label: 'Critic' },
                  { id: 'major', label: 'Major' },
                  { id: 'moderat', label: 'Moderat' },
                ].map((r) => {
                  const isActive = selectedRisk === r.id;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setSelectedRisk(r.id)}
                      className={`py-1.5 px-2.5 rounded-lg text-xs font-semibold text-center border transition-all ${
                        isActive
                          ? 'bg-red-50 text-[#E10600] border-red-300 font-bold'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {r.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 text-xs font-mono">
          <div className="text-slate-500">
            Rezultate afișate: <strong className="text-[#06141B] font-bold">{filteredScenarios.length}</strong> din {SCENARIOS.length} scenarii
          </div>
          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="text-[#E10600] font-bold hover:underline"
            >
              Șterge toate filtrele
            </button>
          )}
        </div>

        {/* Results Grid */}
        {filteredScenarios.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScenarios.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl bg-slate-50 border border-slate-200 max-w-lg mx-auto p-8 space-y-4">
            <Filter className="w-10 h-10 text-slate-400 mx-auto" />
            <div className="space-y-1">
              <h3 className="text-lg font-black text-[#06141B]">Niciun scenariu nu corespunde selecției</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                Încearcă să relaxezi criteriile de căutare sau resetează filtrele active pentru a vedea întregul catalog de 121 de cazuri.
              </p>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-mono text-slate-500 block mb-2 font-semibold">Încearcă o căutare frecventă:</span>
              <div className="flex flex-wrap items-center justify-center gap-1.5">
                {[
                  'țeavă crăpată de ger',
                  'inundație de la vecin',
                  'copil a spart ceva',
                  'lovit mașina în parcare',
                  'bagaj pierdut',
                  'grindină'
                ].map((sug) => (
                  <button
                    key={sug}
                    type="button"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedRisk('all');
                      setSelectedContext('all');
                      setSearchQuery(sug);
                    }}
                    className="px-2.5 py-1 rounded-full bg-white border border-slate-300 text-slate-800 text-xs hover:border-slate-500 transition-colors"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleResetFilters}
              className="py-3 px-6 rounded-full bg-[#06141B] text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Resetează toate filtrele</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
