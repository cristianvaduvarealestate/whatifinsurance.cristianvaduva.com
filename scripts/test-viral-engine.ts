/**
 * Automated Verification Suite for WHAT IF INSURANCE — Viral Content Engine 2.0
 * Tests structured content, sources, rendering logic, format configurations, referral attribution, and zero PII.
 */

import {
  EDITORIAL_CARDS,
  EDITORIAL_CONCEPTS,
  EditorialConceptId,
  getRecommendedEditorialCardForQuiz,
} from '../src/data/editorialCards';
import { FORMAT_CONFIGS, StoryFormat, renderEditorialCardToCanvas } from '../src/lib/canvasStoryGenerator';
import { getShareableReferralLink } from '../src/lib/referralManager';
import { REWARDS_CONFIG } from '../src/lib/rewardsConfig';

let failures = 0;
function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    failures++;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

console.log('====================================================');
console.log('🧪 VIRAL CONTENT ENGINE 2.0 — VERIFICATION TEST');
console.log('====================================================\n');

// 1. Structure & Editorial Integrity Test
console.log('--- 1. Testing Editorial Cards & Factual Sources ---');
const expectedConcepts: EditorialConceptId[] = [
  'hidden_detail',
  'myth_vs_fact',
  'what_would_you_do',
  'fine_print',
  'two_policies',
  'did_you_know',
  'check_policy',
  'challenge_friend',
];

assert(EDITORIAL_CARDS.length === 8, `Expected exactly 8 editorial cards, found ${EDITORIAL_CARDS.length}`);

for (const conceptId of expectedConcepts) {
  const conceptMeta = EDITORIAL_CONCEPTS[conceptId];
  assert(!!conceptMeta, `Concept metadata exists for ${conceptId}`);
  assert(conceptMeta.roBadge.length > 0, `Romanian badge defined for ${conceptId}: ${conceptMeta?.roBadge}`);
  assert(conceptMeta.tagline.length > 0, `Tagline defined for ${conceptId}: ${conceptMeta?.tagline}`);

  const card = EDITORIAL_CARDS.find((c) => c.conceptId === conceptId);
  assert(!!card, `Card exists for concept: ${conceptId}`);

  if (card) {
    assert(card.headline.length > 10, `Card ${card.id} has specific headline (${card.headline.length} chars)`);
    assert(card.summary.length > 20, `Card ${card.id} has concrete summary`);
    assert(card.takeaway.length > 15, `Card ${card.id} has actionable takeaway`);
    assert(card.sourceNote.length > 10, `Card ${card.id} has factual contractual source: ${card.sourceNote}`);
    assert(card.ctaText.length > 3, `Card ${card.id} has natural CTA: ${card.ctaText}`);

    // Factual Provenance & Publication Gate
    assert(!!card.factualProvenance, `Card ${card.id} has structured factualProvenance`);
    if (card.factualProvenance) {
      assert(
        card.factualProvenance.documentTitle.length > 10,
        `Card ${card.id} has identifiable document title: ${card.factualProvenance.documentTitle}`
      );
      assert(
        card.factualProvenance.exactClauseOrArticle.length > 5,
        `Card ${card.id} has exact clause or article: ${card.factualProvenance.exactClauseOrArticle}`
      );
      assert(
        card.factualProvenance.editorialStatus === 'APROBAT_EDITORIAL',
        `Card ${card.id} is approved for publication: status=${card.factualProvenance.editorialStatus}`
      );
      assert(
        card.factualProvenance.verdictRationale.length > 20,
        `Card ${card.id} has comprehensive verdict rationale`
      );
    }

    // Zero PII check
    const piiRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|07\d{8}|\+40\d{9}/i;
    assert(!piiRegex.test(card.headline), `No PII in headline of ${card.id}`);
    assert(!piiRegex.test(card.summary), `No PII in summary of ${card.id}`);
    assert(!piiRegex.test(card.takeaway), `No PII in takeaway of ${card.id}`);

    // Anti-Hype: Verify absence of fake universal guarantees or unverified survey percentages
    assert(!card.summary.includes('Peste 60% dintre'), `Card ${card.id} does not use unverified survey statistics`);

    // Concept specific properties check
    switch (card.conceptId) {
      case 'hidden_detail':
        assert(!!card.clauseQuote && card.clauseQuote.length > 10, `${card.id} has clauseQuote`);
        assert(!!card.realConsequence && card.realConsequence.length > 10, `${card.id} has realConsequence`);
        assert(!!card.whereToFind && card.whereToFind.length > 5, `${card.id} has whereToFind`);
        break;
      case 'myth_vs_fact':
        assert(!!card.mythText && card.mythText.length > 10, `${card.id} has mythText`);
        assert(!!card.factText && card.factText.length > 10, `${card.id} has factText`);
        assert(!!card.contractualReality && card.contractualReality.length > 10, `${card.id} has contractualReality`);
        break;
      case 'what_would_you_do':
        assert(!!card.scenarioDilemma && card.scenarioDilemma.length > 10, `${card.id} has scenarioDilemma`);
        assert(!!card.optionA && card.optionA.label.length > 2, `${card.id} has optionA label`);
        assert(!!card.optionB && card.optionB.label.length > 2, `${card.id} has optionB label`);
        assert(!!card.verdictLaw && card.verdictLaw.length > 10, `${card.id} has verdictLaw`);
        break;
      case 'fine_print':
        assert(!!card.totalInsuredAmount, `${card.id} has totalInsuredAmount`);
        assert(!!card.sublimitAmount, `${card.id} has sublimitAmount`);
        assert(!!card.outOfPocketCost, `${card.id} has outOfPocketCost`);
        assert(!!card.clauseExplanation, `${card.id} has clauseExplanation`);
        break;
      case 'two_policies':
        assert(!!card.declaredAssumptions && card.declaredAssumptions.length > 10, `${card.id} has declaredAssumptions`);
        assert(!!card.policyA && card.policyA.name.length > 2, `${card.id} has policyA`);
        assert(!!card.policyB && card.policyB.name.length > 2, `${card.id} has policyB`);
        assert(!!card.policyA.userOutPocket, `${card.id} has financialImpactA`);
        assert(!!card.policyB.userOutPocket, `${card.id} has financialImpactB`);
        assert(!!card.keyDifferenceReason && card.keyDifferenceReason.length > 10, `${card.id} has keyDifferenceReason`);
        break;
      case 'did_you_know':
        assert(!!card.statHighlight && card.statHighlight.length > 2, `${card.id} has statHighlight`);
        assert(!!card.contextExplanation && card.contextExplanation.length > 10, `${card.id} has contextExplanation`);
        assert(!!card.practicalInsight && card.practicalInsight.length > 10, `${card.id} has practicalInsight`);
        break;
      case 'check_policy':
        assert(!!card.whereToLookInContract && card.whereToLookInContract.length > 5, `${card.id} has whereToLookInContract`);
        assert(Array.isArray(card.questionsToCheck) && card.questionsToCheck.length >= 3, `${card.id} has at least 3 questionsToCheck`);
        break;
      case 'challenge_friend':
        assert(!!card.provocation && card.provocation.length > 10, `${card.id} has provocation`);
        assert(!!card.trapAssumption && card.trapAssumption.length > 10, `${card.id} has trapAssumption`);
        assert(!!card.realAnswer && card.realAnswer.length > 10, `${card.id} has realAnswer`);
        break;
    }
  }
}

// 2. Quiz Recommendation Personalization
console.log('\n--- 2. Testing Post-Quiz Personalization ---');
const qHome = getRecommendedEditorialCardForQuiz(['q-home-pipes-1', 'q-home-theft-1'], 1);
assert(qHome.id === 'hd-locuinta-vacanta', `Home question recommendation mapped properly (${qHome.id})`);

const qCar = getRecommendedEditorialCardForQuiz(['q-car-puddle-1'], 0);
assert(qCar.id === 'cf-pasaj-inundat', `Car question recommendation mapped properly (${qCar.id})`);

const qEmpty = getRecommendedEditorialCardForQuiz([], 5);
assert(!!qEmpty && !!qEmpty.id, `Empty question set safely returns a default card (${qEmpty.id})`);

// 3. Simulated Canvas Rendering for all 8 concepts × 3 formats (24 combinations)
console.log('\n--- 3. Testing Canvas Rendering across all 8 Concepts × 3 Formats (24 combinations) ---');
const formats: StoryFormat[] = ['story', 'feed', 'square'];

function createMockCanvas(width: number, height: number) {
  let nanDetected = false;
  const checkValues = (...args: any[]) => {
    for (const a of args) {
      if (typeof a === 'number' && isNaN(a)) {
        nanDetected = true;
      }
    }
  };

  const mockCtx = {
    canvas: { width, height },
    fillStyle: '#000000',
    strokeStyle: '#000000',
    lineWidth: 1,
    font: '10px sans-serif',
    textAlign: 'left',
    textBaseline: 'top',
    shadowColor: 'transparent',
    shadowBlur: 0,
    shadowOffsetY: 0,
    fillRect: (...args: any[]) => checkValues(...args),
    strokeRect: (...args: any[]) => checkValues(...args),
    fillText: (text: string, x: number, y: number, maxWidth?: number) => {
      checkValues(x, y, maxWidth);
      if (text === undefined || text === null || text.includes('undefined') || text.includes('NaN')) {
        console.error(`Rendered undefined/NaN text string: "${text}" at (${x}, ${y})`);
        nanDetected = true;
      }
    },
    measureText: (text: string) => ({ width: (text || '').length * 10 }),
    beginPath: () => {},
    closePath: () => {},
    moveTo: (...args: any[]) => checkValues(...args),
    lineTo: (...args: any[]) => checkValues(...args),
    arc: (...args: any[]) => checkValues(...args),
    arcTo: (...args: any[]) => checkValues(...args),
    quadraticCurveTo: (...args: any[]) => checkValues(...args),
    bezierCurveTo: (...args: any[]) => checkValues(...args),
    fill: () => {},
    stroke: () => {},
    save: () => {},
    restore: () => {},
    clip: () => {},
    roundRect: (...args: any[]) => checkValues(...args),
  };

  const mockCanvas = {
    width,
    height,
    getContext: (type: string) => (type === '2d' ? (mockCtx as any) : null),
    toDataURL: () => 'data:image/png;base64,mock',
  };

  return { mockCanvas, hasNaN: () => nanDetected };
}

for (const card of EDITORIAL_CARDS) {
  for (const fmt of formats) {
    const config = FORMAT_CONFIGS[fmt];
    const { mockCanvas, hasNaN } = createMockCanvas(config.width, config.height);

    try {
      renderEditorialCardToCanvas(mockCanvas as any, card, fmt);
      assert(!hasNaN(), `Rendered ${card.id} [${fmt} ${config.width}x${config.height}] with clean coordinates`);
    } catch (err: any) {
      assert(false, `Render failed for ${card.id} in format ${fmt}: ${err.message}`);
    }
  }
}

// 4. Referral & Security Invariants
console.log('\n--- 4. Testing Referral Link Generation & Zero PII ---');
const sampleRefLink = getShareableReferralLink('/quiz');
assert(sampleRefLink.includes('/quiz'), `Referral link points to /quiz: ${sampleRefLink}`);
assert(!sampleRefLink.includes('token=null'), `Referral link has clean params`);
assert(!/[0-9]{13}|[a-zA-Z0-9._%+-]+@/.test(sampleRefLink), `Referral link does not leak PII: ${sampleRefLink}`);
assert(REWARDS_CONFIG.insuranceDiscountEnabled === false, `Discount feature flag remains strictly FALSE`);

// 5. Scenario Builder 3.0 Verification
console.log('\n--- 5. Testing Scenario Builder 3.0 & Custom Canvas Rendering ---');
import {
  BUILDER_SCENARIOS,
  ASSET_TYPES,
  VISUAL_STYLES,
  SCENE_SETTINGS,
} from '../src/data/scenarioBuilder';
import {
  renderCustomScenarioToCanvas,
  CustomScenarioExportConfig,
} from '../src/lib/canvasStoryGenerator';

assert(BUILDER_SCENARIOS.length >= 18, `Expected at least 18 builder scenarios, found ${BUILDER_SCENARIOS.length}`);
assert(ASSET_TYPES.length >= 8, `Expected at least 8 asset types, found ${ASSET_TYPES.length}`);
assert(VISUAL_STYLES.length >= 3, `Expected at least 3 visual styles, found ${VISUAL_STYLES.length}`);
assert(SCENE_SETTINGS.length >= 3, `Expected at least 3 scene settings, found ${SCENE_SETTINGS.length}`);

// Test builder scenario properties
for (const scen of BUILDER_SCENARIOS) {
  assert(scen.title.length > 5, `Builder scenario ${scen.id} has title`);
  assert(scen.headlineOptions.length >= 2, `Builder scenario ${scen.id} has at least 2 headline options`);
  assert(scen.takeaway.length > 15, `Builder scenario ${scen.id} has concrete takeaway`);
  assert(scen.sourceReference.length > 10, `Builder scenario ${scen.id} has sourceReference`);
  assert(scen.imagePath.startsWith('/images/scenarios/'), `Builder scenario ${scen.id} has valid imagePath: ${scen.imagePath}`);
}

// Test renderCustomScenarioToCanvas across formats
const testCustomConfig: CustomScenarioExportConfig = {
  assetCategory: 'vehicle',
  assetName: 'Autoturism',
  scenarioTitle: 'Accident în intersecție',
  headline: 'O secundă. O daună. Ce urmează?',
  takeaway: 'RCA acoperă exclusiv terțul păgubit. Avaria proprie necesită CASCO.',
  imagePath: '/images/scenarios/collision-urban.jpg',
  visualStyleTitle: 'Cinematic',
  sceneSettingTitle: 'Urban',
  sourceNote: 'Legea 132/2017 & Condiții CASCO Generali România (Mod. CSC 18)',
};

for (const fmt of formats) {
  const config = FORMAT_CONFIGS[fmt];
  const { mockCanvas, hasNaN } = createMockCanvas(config.width, config.height);
  try {
    renderCustomScenarioToCanvas(mockCanvas as any, testCustomConfig, fmt);
    assert(!hasNaN(), `Rendered CustomScenario [${fmt} ${config.width}x${config.height}] with clean coordinates`);
  } catch (err: any) {
    assert(false, `Render failed for CustomScenario in format ${fmt}: ${err.message}`);
  }
}

// 6. Curated Gallery 36 Scenarios Verification
console.log('\n--- 6. Testing Curated Scenario Gallery (36 Scenarios across 6 Categories) ---');
import {
  CURATED_GALLERY_SCENARIOS,
  GALLERY_CATEGORIES,
  filterGalleryScenarios,
} from '../src/data/curatedGallery';

assert(CURATED_GALLERY_SCENARIOS.length >= 36, `Expected at least 36 curated scenarios, found ${CURATED_GALLERY_SCENARIOS.length}`);
assert(GALLERY_CATEGORIES.length >= 6, `Expected at least 6 gallery categories, found ${GALLERY_CATEGORIES.length}`);

const uniqueIds = new Set<string>();
for (const sc of CURATED_GALLERY_SCENARIOS) {
  assert(!uniqueIds.has(sc.id), `Scenario ID is unique: ${sc.id}`);
  uniqueIds.add(sc.id);

  assert(sc.headline.length > 8, `Curated scenario ${sc.id} has editorial headline: ${sc.headline}`);
  assert(sc.shortDescription.length > 15, `Curated scenario ${sc.id} has shortDescription`);
  assert(sc.contractTakeaway.length > 15, `Curated scenario ${sc.id} has contractTakeaway`);
  assert(sc.sourceReference.length > 8, `Curated scenario ${sc.id} has sourceReference`);
  assert(sc.imagePath.startsWith('/images/scenarios/'), `Curated scenario ${sc.id} has valid imagePath: ${sc.imagePath}`);
}

// Test filterGalleryScenarios
const filteredVehicles = filterGalleryScenarios(CURATED_GALLERY_SCENARIOS, 'auto');
assert(filteredVehicles.length >= 6, `Filtered vehicles found ${filteredVehicles.length} scenarios`);

const searchResults = filterGalleryScenarios(CURATED_GALLERY_SCENARIOS, 'all', 'grindin');
assert(searchResults.length >= 1, `Search for 'grindin' found ${searchResults.length} matching scenario`);

console.log('\n====================================================');
if (failures === 0) {
  console.log('🎉 ALL VIRAL ENGINE 3.0 & SCENARIO BUILDER TESTS PASSED!');
  console.log('====================================================');
  process.exit(0);
} else {
  console.error(`💥 TEST SUITE FAILED WITH ${failures} ERRORS.`);
  console.log('====================================================');
  process.exit(1);
}
