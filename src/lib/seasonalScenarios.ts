import { Scenario } from '@/types/scenario';
import { SCENARIOS } from '@/data/scenarios';

export type SeasonKey = 'iarna' | 'primavara' | 'vara' | 'toamna';

export interface DailyScenarioResult {
  scenario: Scenario;
  dateFormatted: string;
  dayOfYear: number;
  seasonalRelevance: string;
  isOverride: boolean;
}

export interface WeeklyScenarioResult {
  scenario: Scenario;
  seasonKey: SeasonKey;
  seasonName: string;
  weeklyThemeTitle: string;
  weeklyExplanation: string;
  weekNumber: number;
  isOverride: boolean;
}

// Backward compatibility interface
export type SeasonalScenarioResult = WeeklyScenarioResult & {
  seasonalTagline: string;
};

/**
 * Editorial manual overrides.
 * Set to a scenario slug when an urgent editorial or breaking news campaign is active.
 * Set to null for automatic deterministic rotation.
 */
export const DAILY_OVERRIDE_SLUG: string | null = null;
export const WEEKLY_OVERRIDE_SLUG: string | null = null;
export const MANUAL_OVERRIDE_SLUG: string | null = null; // Legacy alias

/**
 * Editorial seasonal pools mapped by slug.
 * Each pool contains authentic scenarios relevant to typical seasonal risks in Romania.
 */
const SEASONAL_SLUG_POOLS: Record<SeasonKey, string[]> = {
  iarna: [
    'teava-inghetata-iarna',
    'imobil-vacant-spargere-inghet',
    'cedare-centrala-termica-iarna-apartament-inchiriat',
    'oaspete-aluneca-trepte-inghetate',
    'rasturnare-sant-zapada',
    'repatriere-medicala-accident-schi',
    'teava-sparta',
    'daune-gard-proprietate-terti'
  ],
  primavara: [
    'panouri-fotovoltaice-grindina',
    'grindina-plafon-capota',
    'inundatie-apa-motor-hidroizolare',
    'furtuna-acoperis',
    'daune-vecini',
    'trotineta-electrica-pieton-accidentat',
    'lucrari-neautorizate-chirias-demolare-pereti'
  ],
  vara: [
    'bagaj-pierdut-intarziat-destinatie',
    'zbor-anulat-conexiune-pierduta',
    'urgenta-medicala-spitalizare-strainatate',
    'pasaport-documente-furate-roma',
    'masina-inchiriata-avarie-vacanta',
    'ceas-scump-furat-calatorie-hotel',
    'coliziune-trotineta-electrica-biciclist',
    'avarie-accidentala-hotel-mobilier'
  ],
  toamna: [
    'copac-curte-distruge-foisor-gard-furtuna',
    'creanga-cazuta-peste-masina-furtuna',
    'teava-inghetata-iarna',
    'imobil-vacant-spargere-inghet',
    'furtuna-acoperis',
    'parbriz-crapat-autostrada',
    'panouri-solare-gradina-deteriorate-furtuna'
  ]
};

const MONTH_NAMES_RO = [
  'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie',
  'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'
];

export function getCurrentSeasonKey(date: Date = new Date()): SeasonKey {
  const month = date.getMonth(); // 0 = Jan, 11 = Dec
  if (month === 11 || month === 0 || month === 1) return 'iarna';
  if (month >= 2 && month <= 4) return 'primavara';
  if (month >= 5 && month <= 7) return 'vara';
  return 'toamna'; // 8, 9, 10 (Sep, Oct, Nov)
}

export function getIsoWeekMonday(date: Date): Date {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7; // 1 = Monday, 7 = Sunday
  d.setUTCDate(d.getUTCDate() - day + 1);
  return d;
}

export function getIsoWeekDetails(date: Date): {
  isoYear: number;
  isoWeek: number;
  isoWeekKey: string;
  mondayDateString: string;
  monotonicWeekIndex: number;
} {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const isoYear = d.getUTCFullYear();
  const yearStart = new Date(Date.UTC(isoYear, 0, 1));
  const isoWeek = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);

  const monday = getIsoWeekMonday(date);
  const mondayDateString = `${monday.getUTCFullYear()}-${String(monday.getUTCMonth() + 1).padStart(2, '0')}-${String(monday.getUTCDate()).padStart(2, '0')}`;
  const isoWeekKey = `${isoYear}-W${String(isoWeek).padStart(2, '0')}`;
  const monotonicWeekIndex = Math.floor((monday.getTime() - 345600000) / (7 * 86400000));

  return {
    isoYear,
    isoWeek,
    isoWeekKey,
    mondayDateString,
    monotonicWeekIndex
  };
}

export function getIsoWeekNumber(date: Date): number {
  return getIsoWeekDetails(date).isoWeek;
}

/**
 * 32-bit integer string hash (FNV-1a) for deterministic, stable daily indexing.
 */
function hashString(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/**
 * Returns deterministic formatted date string in Romanian: "7 Noiembrie 2026"
 */
function formatDateRo(date: Date): string {
  return `${date.getDate()} ${MONTH_NAMES_RO[date.getMonth()]} ${date.getFullYear()}`;
}

/**
 * SCENARIUL ZILEI (A)
 * - Se schimbă automat în fiecare zi la miezul nopții.
 * - Determinist: același utilizator vede același scenariu pe durata întregii zile.
 * - Evită repetarea scenariilor recente folosind o permutare cu pas coprim peste catalogul de 121 scenarii.
 * - Permite override editorial manual prioritar.
 */
export function getScenarioOfTheDay(referenceDate: Date = new Date()): DailyScenarioResult {
  const dateStr = `${referenceDate.getFullYear()}-${String(referenceDate.getMonth() + 1).padStart(2, '0')}-${String(referenceDate.getDate()).padStart(2, '0')}`;
  const dateFormatted = formatDateRo(referenceDate);

  // 1. Editorial override check
  const activeOverride = DAILY_OVERRIDE_SLUG || MANUAL_OVERRIDE_SLUG;
  if (activeOverride) {
    const overrideScenario = SCENARIOS.find((s) => s.slug === activeOverride);
    if (overrideScenario) {
      return {
        scenario: overrideScenario,
        dateFormatted,
        dayOfYear: getDayOfYear(referenceDate),
        seasonalRelevance: 'Selecție editorială specială',
        isOverride: true
      };
    }
  }

  // 2. Deterministic day calculation
  // Total scenarios in catalog (121). Use a coprime step (37) to permute without adjacent repetitions.
  const total = SCENARIOS.length;
  const daysSinceEpoch = Math.floor(referenceDate.getTime() / 86400000);
  const hash = hashString(`whatif-day-${dateStr}`);
  const permutedIndex = (daysSinceEpoch * 37 + (hash % 17)) % total;
  let scenario = SCENARIOS[permutedIndex] || SCENARIOS[0];

  // Guarantee distinctness from this week's scenario if they happen to coincide
  const weeklyResult = getScenarioOfTheWeek(referenceDate);
  if (scenario.id === weeklyResult.scenario.id && total > 1) {
    scenario = SCENARIOS[(permutedIndex + 1) % total];
  }

  const seasonKey = getCurrentSeasonKey(referenceDate);
  const seasonalRelevance = seasonKey === 'toamna' || seasonKey === 'iarna'
    ? 'Recomandat pentru contextul actual de sezon rece'
    : 'Simulare educativă din catalogul complet WHATIF';

  return {
    scenario,
    dateFormatted,
    dayOfYear: getDayOfYear(referenceDate),
    seasonalRelevance,
    isOverride: false
  };
}

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / 86400000);
}

/**
 * SCENARIUL SĂPTĂMÂNII (B)
 * - Selecție editorială distinctă, valabilă pe întreaga săptămână (stabilă luni-duminică).
 * - Temă și explicație scurtă relevante pentru perioada anului:
 *   - Noiembrie: îngheț, locuințe nelocuite, avarii la instalații, furtuni.
 *   - Iarna: ger, polei, drumuri blocate, conducte sparte.
 *   - Primăvara: inundații, furtuni, grindină, lucrări și renovări.
 *   - Vara: călătorii, accidente, fenomene meteo, locuințe lăsate nesupravegheate.
 *   - Toamna: ploi, infiltrații, copaci, acoperișuri și riscuri sezoniere.
 * - Nu se confundă cu Scenariul Zilei.
 */
export function getScenarioOfTheWeek(referenceDate: Date = new Date()): WeeklyScenarioResult {
  const isoDetails = getIsoWeekDetails(referenceDate);
  const monday = getIsoWeekMonday(referenceDate);
  const seasonKey = getCurrentSeasonKey(monday);
  const month = monday.getUTCMonth(); // 10 = Nov
  const weekNumber = isoDetails.isoWeek;

  // 1. Editorial override check
  if (WEEKLY_OVERRIDE_SLUG) {
    const overrideScenario = SCENARIOS.find((s) => s.slug === WEEKLY_OVERRIDE_SLUG);
    if (overrideScenario) {
      return {
        scenario: overrideScenario,
        seasonKey,
        seasonName: getSeasonName(seasonKey),
        weeklyThemeTitle: 'Ediție Editorială Specială',
        weeklyExplanation: 'Scenariu selectat cu prioritate de echipa editorială pentru această săptămână.',
        weekNumber,
        isOverride: true
      };
    }
  }

  // 2. Determine thematic title and explanation
  let weeklyThemeTitle = 'Tema Săptămânii';
  let weeklyExplanation = 'Riscuri contractuale analizate în detaliu pentru această perioadă.';

  if (month === 10) {
    // Noiembrie
    weeklyThemeTitle = 'Focalizare Noiembrie: Îngheț, Imobile Nelocuite & Furtuni';
    weeklyExplanation = 'Pregătirea locuinței și a mașinii pentru primul îngheț. Clauze de neocupare și prevenție obligatorie a avariilor.';
  } else if (seasonKey === 'iarna') {
    weeklyThemeTitle = 'Iarnă & Sezonul Rece: Avarii de Apă, Polei & Îngheț';
    weeklyExplanation = 'Protecția conductelor, riscul de coliziune pe carosabil înghețat și responsabilitatea proprietarilor de imobile.';
  } else if (seasonKey === 'primavara') {
    weeklyThemeTitle = 'Primăvară & Dezgheț: Inundații, Grindină & Șantiere de Renovare';
    weeklyExplanation = 'Ploi abundente, căderi de grindină pe panouri fotovoltaice și riscuri de execuție la renovări neautorizate.';
  } else if (seasonKey === 'vara') {
    weeklyThemeTitle = 'Sezonul Estival: Călătorii, Bagaje & Locuințe Nesupravegheate';
    weeklyExplanation = 'Plafoane de urgență medicală în străinătate, întârzierea zborurilor și siguranța bunurilor lăsate acasă.';
  } else {
    // Toamna
    weeklyThemeTitle = 'Toamnă & Furtuni: Precipitații, Copaci Căzuți & Infiltrații';
    weeklyExplanation = 'Vânt puternic, daune aduse acoperișurilor și gardurilor, pregătirea instalațiilor interioare înainte de ger.';
  }

  // 3. Select scenario from the curated seasonal pool
  const poolSlugs = SEASONAL_SLUG_POOLS[seasonKey] || SEASONAL_SLUG_POOLS.toamna;
  const seasonalPool: Scenario[] = poolSlugs
    .map((slug) => SCENARIOS.find((s) => s.slug === slug))
    .filter(Boolean) as Scenario[];

  const fallbackPool = seasonalPool.length > 0
    ? seasonalPool
    : SCENARIOS.filter((s) => s.featured);

  // Weekly deterministic index using collision-free monotonic week index
  const selectedIndex = Math.abs(isoDetails.monotonicWeekIndex) % fallbackPool.length;
  const selectedScenario = fallbackPool[selectedIndex] || SCENARIOS[0];

  return {
    scenario: selectedScenario,
    seasonKey,
    seasonName: getSeasonName(seasonKey),
    weeklyThemeTitle,
    weeklyExplanation,
    weekNumber,
    isOverride: false
  };
}

function getSeasonName(season: SeasonKey): string {
  switch (season) {
    case 'iarna': return 'Iarnă';
    case 'primavara': return 'Primăvară';
    case 'vara': return 'Vară';
    case 'toamna': return 'Toamnă';
  }
}

/**
 * Backward compatibility alias for existing components.
 */
export function getSeasonalScenarioOfTheWeek(referenceDate: Date = new Date()): SeasonalScenarioResult {
  const res = getScenarioOfTheWeek(referenceDate);
  return {
    ...res,
    seasonalTagline: `${res.weeklyThemeTitle} — ${res.weeklyExplanation}`
  };
}
