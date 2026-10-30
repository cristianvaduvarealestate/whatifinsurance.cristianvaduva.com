/**
 * Rich Share Story Builder
 * WHAT IF INSURANCE — Studio 3.0 Rich Share Architecture
 * 
 * Implements the deliberate two-layer sharing experience:
 * Layer 1 (Visual Image): Strong relevant photograph, memorable headline, concise central insight.
 * Layer 2 (Accompanying Share Text): Comprehensive self-contained mini-story with situation,
 * contractual distinction, practical checklist, verified source, and natural discussion prompt.
 */

import { CuratedGalleryScenario } from '@/data/curatedGallery';
import { ScenarioPreset, AssetTypeOption } from '@/data/scenarioBuilder';
import { EditorialCard, EDITORIAL_CONCEPTS } from '@/data/editorialCards';

export interface RichShareStory {
  headline: string;
  situation: string;
  insuranceDistinction: string;
  practicalTakeaway: string;
  sourceQualification: string;
  sharingPrompt: string;
  formattedShareText: string;
}

/**
 * Builds a rich share story for Builder Presets
 */
export function buildBuilderShareStory(
  preset: ScenarioPreset,
  asset: AssetTypeOption,
  customHeadline: string,
  shareUrl: string
): RichShareStory {
  const headline = customHeadline || preset.headlineOptions[0] || preset.title;
  const situation = `În cazul unui ${asset.name.toLowerCase()}: ${preset.detailedContext || preset.imageCaption || preset.name}`;
  const insuranceDistinction = preset.takeaway;
  const practicalTakeaway = `Verifică din timp clauzele din anexa poliței tale (franșize pe eveniment, decontare directă pe RCA și condițiile procedurale de constatare).`;
  const sourceQualification = preset.sourceReference || 'Condiții Cadru RCA & CASCO (ASF / UNSAR)';
  const sharingPrompt = `Tu ai verificat dacă polița ta acoperă această situație sau ai fi nevoit să plătești reparația din buzunar?`;

  const formattedShareText = [
    `„${headline}”`,
    ``,
    `📍 Situația: ${situation}`,
    `⚖️ Diferența contractuală: ${insuranceDistinction}`,
    `🔍 Ce ai de verificat: ${practicalTakeaway}`,
    `📜 Sursă documentară: ${sourceQualification}`,
    ``,
    `💬 ${sharingPrompt}`,
    ``,
    `Descoperă simularea completă și verifică-ți polița: ${shareUrl}`,
  ].join('\n');

  return {
    headline,
    situation,
    insuranceDistinction,
    practicalTakeaway,
    sourceQualification,
    sharingPrompt,
    formattedShareText,
  };
}

/**
 * Builds a rich share story for Curated Gallery Scenarios
 */
export function buildCuratedGalleryShareStory(
  scenario: CuratedGalleryScenario,
  shareUrl: string
): RichShareStory {
  const headline = scenario.headline;
  const situation = scenario.shortDescription;
  const insuranceDistinction = scenario.contractTakeaway || scenario.contractualTakeaway;
  const practicalTakeaway = `Consultă secțiunea de excluderi specifice și franșize contractuale din polița ta de ${scenario.policyType || 'asigurare'} înainte de producerea unui incident.`;
  const sourceQualification = scenario.sourceReference || scenario.sourceNote || 'Condiții Cadru Piața din România (ASF)';
  const sharingPrompt = `Cineva apropiat crede că e acoperit automat în această situație? Trimite-i dilema să verifice!`;

  const formattedShareText = [
    `„${headline}”`,
    ``,
    `📍 Situația: ${situation}`,
    `⚖️ Ce spune contractul: ${insuranceDistinction}`,
    `🔍 Ce verifici azi: ${practicalTakeaway}`,
    `📜 Cadru de reglementare: ${sourceQualification}`,
    ``,
    `💬 ${sharingPrompt}`,
    ``,
    `Află cum funcționează dosarul de daună pe: ${shareUrl}`,
  ].join('\n');

  return {
    headline,
    situation,
    insuranceDistinction,
    practicalTakeaway,
    sourceQualification,
    sharingPrompt,
    formattedShareText,
  };
}

/**
 * Builds a rich share story for Editorial Concepts
 */
export function buildEditorialShareStory(
  card: EditorialCard,
  shareUrl: string
): RichShareStory {
  const concept = EDITORIAL_CONCEPTS[card.conceptId];
  const headline = card.headline;
  let situation = card.summary;
  let insuranceDistinction = card.takeaway;
  let practicalTakeaway = 'Verifică termenii particulari din anexa contractului tău activ.';
  let sharingPrompt = `Tu știai de această diferență contractuală sau ai fi aflat doar la refuzul dosarului de daună?`;

  if (card.conceptId === 'hidden_detail') {
    situation = `Clauză identificată: ${card.clauseName}. ${card.summary}`;
    insuranceDistinction = card.realConsequence;
    practicalTakeaway = `Unde cauți în contract: ${card.whereToFind}`;
    sharingPrompt = `Ai verificat dacă locuința ta respectă această condiție de siguranță?`;
  } else if (card.conceptId === 'myth_vs_fact') {
    situation = `${card.mythText} — ${card.mythReason}`;
    insuranceDistinction = `${card.factText} ${card.contractualReality}`;
    practicalTakeaway = card.takeaway;
    sharingPrompt = `Tu credeai că ești acoperit în acest caz?`;
  } else if (card.conceptId === 'what_would_you_do') {
    situation = card.scenarioDilemma;
    insuranceDistinction = `Opțiunea A: ${card.optionA.label} (${card.optionA.explanation}) vs Opțiunea B: ${card.optionB.label} (${card.optionB.explanation}).`;
    practicalTakeaway = `Verdict legal: ${card.verdictLaw}`;
    sharingPrompt = `Tu ce ai alege pe loc: Amiabilă sau Poliție?`;
  } else if (card.conceptId === 'fine_print') {
    situation = `Suma asigurată declarată pe clădire: ${card.totalInsuredAmount}, dar sublimita pe obiect individual este de doar ${card.sublimitAmount}.`;
    insuranceDistinction = `Cost suportat din buzunar: ${card.outOfPocketCost}. ${card.clauseExplanation}`;
    practicalTakeaway = card.takeaway;
    sharingPrompt = `Ai verificat dacă obiectele tale de valoare au nevoie de declarare nominală sau seif?`;
  } else if (card.conceptId === 'two_policies') {
    situation = card.declaredAssumptions;
    insuranceDistinction = `Polița A (${card.policyA.name}): ${card.policyA.coverage} (Buzunar: ${card.policyA.userOutPocket}) vs Polița B (${card.policyB.name}): ${card.policyB.coverage} (Buzunar: ${card.policyB.userOutPocket}).`;
    practicalTakeaway = `Diferența de fond: ${card.keyDifferenceReason}`;
    sharingPrompt = `Tu ce tip de poliță ai semnat: standard sau extinsă cu căutare de avarie?`;
  } else if (card.conceptId === 'did_you_know') {
    situation = card.statHighlight;
    insuranceDistinction = card.contextExplanation;
    practicalTakeaway = card.practicalInsight;
    sharingPrompt = `Știai această regulă strictă înainte de următorul zbor de vacanță?`;
  } else if (card.conceptId === 'check_policy') {
    situation = `Audit rapid: ${card.questionsToCheck.map((q) => q.question).join(' · ')}`;
    insuranceDistinction = card.questionsToCheck.map((q) => `${q.question}: ${q.reason}`).join(' ');
    practicalTakeaway = `Unde găsești în contract: ${card.whereToLookInContract}`;
    sharingPrompt = `Când ai citit ultima oară clauzele din anexa poliței tale CASCO?`;
  } else if (card.conceptId === 'challenge_friend') {
    situation = card.provocation;
    insuranceDistinction = `Capcana comună: ${card.trapAssumption} | Răspuns contractual real: ${card.realAnswer}`;
    practicalTakeaway = card.takeaway;
    sharingPrompt = `Surprinde-ți prietenii: Trimite-le provocarea și vezi cine ar ști răspunsul contractual corect!`;
  }

  const sourceQualification = card.sourceNote || card.factualProvenance.documentTitle;

  const formattedShareText = [
    `[${concept.romanianBadge.toUpperCase()}] „${headline}”`,
    ``,
    `📍 Situația: ${situation}`,
    `⚖️ Diferența contractuală: ${insuranceDistinction}`,
    `🔍 Ce ai de verificat: ${practicalTakeaway}`,
    `📜 Sursă verificată: ${sourceQualification}`,
    ``,
    `💬 ${sharingPrompt}`,
    ``,
    `Vezi explicația completă și sursele pe: ${shareUrl}`,
  ].join('\n');

  return {
    headline,
    situation,
    insuranceDistinction,
    practicalTakeaway,
    sourceQualification,
    sharingPrompt,
    formattedShareText,
  };
}
