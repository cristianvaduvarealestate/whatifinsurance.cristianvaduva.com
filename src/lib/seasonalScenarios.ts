import { Scenario } from '@/types/scenario';
import { SCENARIOS } from '@/data/scenarios';

export type SeasonKey = 'iarna' | 'primavara' | 'vara' | 'toamna';

export interface SeasonalScenarioResult {
  scenario: Scenario;
  seasonKey: SeasonKey;
  seasonName: string;
  seasonalTagline: string;
  isOverride: boolean;
}

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
    'teava-sparta'
  ],
  primavara: [
    'panouri-fotovoltaice-grindina',
    'grindina-plafon-capota',
    'inundatie-apa-motor-hidroizolare',
    'furtuna-acoperis',
    'daune-vecini',
    'trotineta-electrica-pieton-accidentat'
  ],
  vara: [
    'bagaj-pierdut-intarziat-destinatie',
    'zbor-anulat-conexiune-pierduta',
    'urgenta-medicala-spitalizare-strainatate',
    'pasaport-documente-furate-roma',
    'masina-inchiriata-avarie-vacanta',
    'ceas-scump-furat-calatorie-hotel',
    'coliziune-trotineta-electrica-biciclist'
  ],
  toamna: [
    'creanga-cazuta-peste-masina-furtuna',
    'copac-curte-distruge-foisor-gard-furtuna',
    'teava-inghetata-iarna',
    'imobil-vacant-spargere-inghet',
    'furtuna-acoperis',
    'parbriz-crapat-autostrada'
  ]
};

const SEASON_METADATA: Record<SeasonKey, { name: string; tagline: string }> = {
  iarna: {
    name: 'Iarnă',
    tagline: 'Scenariul săptămânii — Riscuri frecvente în sezonul rece & ger'
  },
  primavara: {
    name: 'Primăvară',
    tagline: 'Scenariul săptămânii — Fenomene meteo de primăvară, grindină & ploi abundente'
  },
  vara: {
    name: 'Vară',
    tagline: 'Scenariul săptămânii — Concedii, călătorii, bagaje & mobilitate urbană'
  },
  toamna: {
    name: 'Toamnă',
    tagline: 'Scenariul săptămânii — Furtuni de toamnă & pregătirea pentru sezonul rece'
  }
};

/**
 * Editorial manual override hook.
 * Set to a scenario slug when an urgent or specific editorial campaign is active.
 * Set to null for automatic seasonal rotation.
 */
export const MANUAL_OVERRIDE_SLUG: string | null = null;

export function getCurrentSeasonKey(date: Date = new Date()): SeasonKey {
  const month = date.getMonth(); // 0 = Jan, 11 = Dec
  if (month === 11 || month === 0 || month === 1) return 'iarna';
  if (month >= 2 && month <= 4) return 'primavara';
  if (month >= 5 && month <= 7) return 'vara';
  return 'toamna'; // 8, 9, 10 (Sep, Oct, Nov)
}

function getIsoWeekNumber(date: Date): number {
  const d = new Date(date);
  const target = new Date(d.valueOf());
  const dayNr = (d.getUTCDay() + 6) % 7;
  target.setUTCDate(target.getUTCDate() - dayNr + 3);
  const firstThursday = target.valueOf();
  target.setUTCMonth(0, 1);
  if (target.getUTCDay() !== 4) {
    target.setUTCMonth(0, 1 + ((4 - target.getUTCDay() + 7) % 7));
  }
  return 1 + Math.ceil((firstThursday - target.valueOf()) / 604800000);
}

/**
 * Selects the Scenario of the Week deterministically based on season,
 * calendar week, and editorial curation.
 */
export function getSeasonalScenarioOfTheWeek(referenceDate: Date = new Date()): SeasonalScenarioResult {
  const seasonKey = getCurrentSeasonKey(referenceDate);
  const meta = SEASON_METADATA[seasonKey];

  // 1. Check manual override
  if (MANUAL_OVERRIDE_SLUG) {
    const overrideScenario = SCENARIOS.find((s) => s.slug === MANUAL_OVERRIDE_SLUG);
    if (overrideScenario) {
      return {
        scenario: overrideScenario,
        seasonKey,
        seasonName: meta.name,
        seasonalTagline: meta.tagline,
        isOverride: true
      };
    }
  }

  // 2. Select from seasonal pool
  const poolSlugs = SEASONAL_SLUG_POOLS[seasonKey] || [];
  const seasonalPool: Scenario[] = poolSlugs
    .map((slug) => SCENARIOS.find((s) => s.slug === slug))
    .filter(Boolean) as Scenario[];

  const fallbackPool = seasonalPool.length > 0
    ? seasonalPool
    : SCENARIOS.filter((s) => s.featured).length > 0
    ? SCENARIOS.filter((s) => s.featured)
    : SCENARIOS;

  const weekNumber = getIsoWeekNumber(referenceDate);
  const year = referenceDate.getFullYear();
  const seed = year * 52 + weekNumber;
  const selectedIndex = Math.abs(seed) % fallbackPool.length;
  const selectedScenario = fallbackPool[selectedIndex] || SCENARIOS[0];

  return {
    scenario: selectedScenario,
    seasonKey,
    seasonName: meta.name,
    seasonalTagline: meta.tagline,
    isOverride: false
  };
}
