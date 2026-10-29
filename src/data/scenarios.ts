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

// Complete aggregated scenario library (120+ authentic scenarios)
export const SCENARIOS: Scenario[] = [
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

export function getRelatedScenarios(scenario: Scenario, limit: number = 3): Scenario[] {
  // First prefer same category
  const sameCategory = SCENARIOS.filter(
    (s) => s.id !== scenario.id && s.categoryId === scenario.categoryId
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  // Otherwise fill with featured from other categories
  const others = SCENARIOS.filter(
    (s) => s.id !== scenario.id && s.categoryId !== scenario.categoryId
  );
  return [...sameCategory, ...others].slice(0, limit);
}
