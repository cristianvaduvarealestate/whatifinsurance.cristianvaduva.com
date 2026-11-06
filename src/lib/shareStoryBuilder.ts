/**
 * Rich Share Story Builder
 * WHAT IF INSURANCE — Studio 3.0 Rich Share Architecture
 * 
 * Formats natural, clean, authentic shareable messages for WhatsApp,
 * Instagram, Facebook, Telegram and native sharing sheets, completely free of
 * internal debugging jargon, duplicate prefixes, or artificial labels.
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
 * Builds a natural, clean share message for Builder Presets
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
    situation,
    ``,
    `⚖️ ${insuranceDistinction}`,
    practicalTakeaway ? `🔍 ${practicalTakeaway}` : '',
    ``,
    sharingPrompt,
    ``,
    `Descoperă simularea completă și verifică-ți polița: ${shareUrl}`,
  ]
    .filter(Boolean)
    .join('\n');

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
 * Builds a natural, clean share message for Curated Gallery Scenarios
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
    situation,
    ``,
    `⚖️ ${insuranceDistinction}`,
    practicalTakeaway ? `🔍 ${practicalTakeaway}` : '',
    ``,
    sharingPrompt,
    ``,
    `Află cum funcționează dosarul de daună pe: ${shareUrl}`,
  ]
    .filter(Boolean)
    .join('\n');

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
 * Builds a natural, clean share message for Editorial Concepts
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
    situation = card.summary;
    insuranceDistinction = card.realConsequence;
    practicalTakeaway = card.takeaway;
    sharingPrompt = `Ai verificat dacă locuința ta respectă această condiție de siguranță?`;
  } else if (card.conceptId === 'myth_vs_fact') {
    situation = card.summary;
    insuranceDistinction = `${card.factText} ${card.contractualReality}`;
    practicalTakeaway = card.takeaway;
    sharingPrompt = `Tu credeai că ești acoperit în acest caz?`;
  } else if (card.conceptId === 'what_would_you_do') {
    situation = card.scenarioDilemma;
    insuranceDistinction = card.verdictLaw || card.takeaway;
    practicalTakeaway = card.takeaway;
    sharingPrompt = card.id === 'ww-showroom-ecran'
      ? `Tu ai verificat dacă asigurarea ta de locuință acoperă astfel de incidente produse de cei mici?`
      : `Tu ce ai alege pe loc: Amiabilă sau Poliție?`;
  } else if (card.conceptId === 'fine_print') {
    situation = card.summary;
    insuranceDistinction = card.clauseExplanation;
    practicalTakeaway = card.takeaway;
    sharingPrompt = `Ai verificat dacă obiectele tale de valoare au nevoie de declarare nominală sau seif?`;
  } else if (card.conceptId === 'two_policies') {
    situation = card.summary;
    insuranceDistinction = card.keyDifferenceReason;
    practicalTakeaway = card.takeaway;
    sharingPrompt = `Tu ce tip de poliță ai semnat: standard sau extinsă cu căutare de avarie?`;
  } else if (card.conceptId === 'did_you_know') {
    situation = card.summary;
    insuranceDistinction = `${card.contextExplanation} ${card.practicalInsight}`;
    practicalTakeaway = card.takeaway;
    sharingPrompt = `Știai această regulă strictă înainte de următorul zbor de vacanță?`;
  } else if (card.conceptId === 'check_policy') {
    situation = card.summary;
    insuranceDistinction = card.questionsToCheck.map((q) => q.question).join(' · ');
    practicalTakeaway = card.takeaway;
    sharingPrompt = `Când ai citit ultima oară clauzele din anexa poliței tale CASCO?`;
  } else if (card.conceptId === 'challenge_friend') {
    situation = card.provocation;
    insuranceDistinction = card.realAnswer;
    practicalTakeaway = card.takeaway;
    sharingPrompt = `Surprinde-ți prietenii: Trimite-le această provocare și vezi dacă știu răspunsul contractual corect!`;
  }

  const sourceQualification = card.sourceNote || card.factualProvenance.documentTitle;

  const formattedShareText = [
    `„${headline}”`,
    ``,
    situation,
    ``,
    `⚖️ ${insuranceDistinction}`,
    practicalTakeaway ? `🔍 ${practicalTakeaway}` : '',
    ``,
    sharingPrompt,
    ``,
    `Vezi analiza completă pe: ${shareUrl}`,
  ]
    .filter(Boolean)
    .join('\n');

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
