import { Scenario } from '@/types/scenario';

import { CASA_SCENARIOS as casaScenarios } from './scenarios/casa';
import { autoScenarios } from './scenarios/auto';
import { calatoriiScenarios } from './scenarios/calatorii';
import { raspundereScenarios } from './scenarios/raspundere';
import { viataScenarios } from './scenarios/viata';
import { businessScenarios } from './scenarios/business';
import { digitalScenarios } from './scenarios/digital';
import { luxuryScenarios } from './scenarios/luxury';
import { proprietariScenarios } from './scenarios/proprietari';
import { familieScenarios } from './scenarios/familie';

import { SCENARIO_INTELLIGENCE } from './scenarioIntelligence';

const RAW_SCENARIOS: Scenario[] = [
  ...casaScenarios,
  ...autoScenarios,
  ...calatoriiScenarios,
  ...raspundereScenarios,
  ...viataScenarios,
  ...businessScenarios,
  ...digitalScenarios,
  ...luxuryScenarios,
  ...proprietariScenarios,
  ...familieScenarios
];

// Complete aggregated scenario library (121 authentic scenarios with enriched verified intelligence)
export const SCENARIOS: Scenario[] = RAW_SCENARIOS.map((scenario) => {
  const intel = SCENARIO_INTELLIGENCE[scenario.id];
  if (!intel) return scenario;
  return {
    ...scenario,
    financialEstimate: intel.financialEstimate,
    editorialStatus: intel.editorialStatus,
    editorialReviewDate: intel.editorialReviewDate,
    contractualReviewDate: intel.contractualReviewDate,
    contractualProduct: intel.contractualProduct,
    contractualDocument: intel.contractualDocument,
    legalReviewDate: intel.legalReviewDate,
    legalBasis: intel.legalBasis,
    preventionTips: intel.preventionTips,
    userProfiles: intel.userProfiles,
    searchKeywords: intel.searchKeywords
  };
});

export function getScenarioBySlug(slug: string): Scenario | undefined {
  return SCENARIOS.find((s) => s.slug === slug);
}

export function getScenarioById(id: string): Scenario | undefined {
  return SCENARIOS.find((s) => s.id === id);
}

export function getScenariosByCategory(categoryId: string): Scenario[] {
  return SCENARIOS.filter((s) => s.categoryId === categoryId);
}

export function getFeaturedScenarios(): Scenario[] {
  return SCENARIOS.filter((s) => s.featured);
}

export function getRandomScenario(currentSlug?: string): Scenario {
  const pool = currentSlug ? SCENARIOS.filter((s) => s.slug !== currentSlug) : SCENARIOS;
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex] || SCENARIOS[0];
}

export function getScenarioOfTheDay(): Scenario {
  // Deterministic scenario based on calendar day so it stays consistent for 24h
  const now = new Date();
  const dayOfYear = Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  const featured = SCENARIOS.filter((s) => s.featured);
  const pool = featured.length > 0 ? featured : SCENARIOS;
  return pool[dayOfYear % pool.length];
}

import { getSeasonalScenarioOfTheWeek } from '@/lib/seasonalScenarios';

/**
 * Deterministic Seasonal Featured Scenario ("Scenariul Săptămânii").
 * Selects an authentic scenario specifically curated for the current season
 * (Iarnă / Primăvară / Vară / Toamnă) rotating weekly via ISO-8601 calendar weeks.
 */
export function getScenarioOfTheWeek(referenceDate: Date = new Date()): Scenario {
  return getSeasonalScenarioOfTheWeek(referenceDate).scenario;
}

export function getRelatedScenarios(scenario: Scenario, limit: number = 3): Scenario[] {
  const currentTags = new Set((scenario.tags || []).map((t) => t.toLowerCase()));
  const currentKeywords = new Set((scenario.searchKeywords || []).map((k) => k.toLowerCase()));

  // Score candidate scenarios
  const scored = SCENARIOS
    .filter((s) => s.id !== scenario.id)
    .map((candidate) => {
      let score = 0;

      // Same category base score
      if (candidate.categoryId === scenario.categoryId) score += 3;

      // Shared tags score (high relevance)
      (candidate.tags || []).forEach((tag) => {
        if (currentTags.has(tag.toLowerCase())) score += 5;
      });

      // Shared search keywords
      (candidate.searchKeywords || []).forEach((kw) => {
        if (currentKeywords.has(kw.toLowerCase())) score += 2;
      });

      // Special semantic cross-category links
      const isWater = currentTags.has('inundație') || currentTags.has('conductă') || currentTags.has('instalații');
      const isCandidateWater = (candidate.tags || []).some((t) => ['inundație', 'conductă', 'instalații', 'apă'].includes(t.toLowerCase()));
      if (isWater && isCandidateWater) score += 4;

      const isCar = currentTags.has('parcare') || currentTags.has('casco') || currentTags.has('daună');
      const isCandidateCar = (candidate.tags || []).some((t) => ['parcare', 'casco', 'vandalism', 'auto'].includes(t.toLowerCase()));
      if (isCar && isCandidateCar) score += 4;

      const isTravel = currentTags.has('bagaj') || currentTags.has('zbor') || currentTags.has('aeroport');
      const isCandidateTravel = (candidate.tags || []).some((t) => ['bagaj', 'zbor', 'aeroport', 'călătorie'].includes(t.toLowerCase()));
      if (isTravel && isCandidateTravel) score += 4;

      return { scenario: candidate, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.scenario);
}
