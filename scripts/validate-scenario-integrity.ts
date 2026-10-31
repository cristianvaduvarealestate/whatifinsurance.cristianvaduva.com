import fs from 'fs';
import path from 'path';
import { SCENARIOS, getScenarioOfTheWeek } from '../src/data/scenarios';
import { CATEGORIES } from '../src/data/categories';

const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

let errorCount = 0;
let warnCount = 0;

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`  ❌ [FAIL] ${message}`);
    errorCount++;
  }
}

function warn(condition: boolean, message: string) {
  if (!condition) {
    console.warn(`  ⚠️ [WARN] ${message}`);
    warnCount++;
  }
}

console.log('====================================================');
console.log('🔍 WHAT IF INSURANCE — SCENARIO INTEGRITY & QUALITY AUDIT');
console.log('====================================================\n');

// 1. Total Scenarios Count
console.log(`1. Verifying total scenarios count...`);
assert(SCENARIOS.length >= 121, `Expected at least 121 scenarios, found ${SCENARIOS.length}`);
console.log(`  ✅ Loaded ${SCENARIOS.length} scenarios successfully.\n`);

// 2. Validate Each Scenario Fields and Image Existence
console.log(`2. Validating scenario fields & physical assets on disk...`);
const slugSet = new Set<string>();
const idSet = new Set<string>();

SCENARIOS.forEach((scenario, index) => {
  const prefix = `Scenario [${index + 1}/${SCENARIOS.length}] (${scenario.slug})`;

  // Unique IDs and slugs
  assert(!slugSet.has(scenario.slug), `${prefix}: Duplicate slug "${scenario.slug}"`);
  slugSet.add(scenario.slug);

  assert(!idSet.has(scenario.id), `${prefix}: Duplicate id "${scenario.id}"`);
  idSet.add(scenario.id);

  // Required text fields
  assert(Boolean(scenario.title && scenario.title.trim().length > 5), `${prefix}: Missing or short title`);
  assert(Boolean(scenario.mainQuestion && scenario.mainQuestion.trim().length > 5), `${prefix}: Missing or short mainQuestion`);
  assert(Boolean(scenario.situation && scenario.situation.trim().length > 20), `${prefix}: Missing or short situation narrative`);
  assert(Boolean(scenario.categoryId), `${prefix}: Missing categoryId`);

  // Category matching
  const matchingCategory = CATEGORIES.find(c => c.id === scenario.categoryId);
  assert(Boolean(matchingCategory), `${prefix}: Unknown categoryId "${scenario.categoryId}"`);

  // Hero image physical file existence
  if (scenario.heroImage) {
    if (scenario.heroImage.startsWith('/')) {
      const physicalImagePath = path.join(publicDir, scenario.heroImage);
      assert(fs.existsSync(physicalImagePath), `${prefix}: Hero image not found at ${physicalImagePath}`);
    } else {
      assert(scenario.heroImage.startsWith('http'), `${prefix}: Hero image must be absolute or web URL: ${scenario.heroImage}`);
    }
  } else {
    assert(false, `${prefix}: Missing heroImage property`);
  }

  // Without insurance structure
  assert(Boolean(scenario.withoutInsurance?.statusLabel), `${prefix}: withoutInsurance.statusLabel is required`);
  assert(Boolean(scenario.withoutInsurance?.title), `${prefix}: withoutInsurance.title is required`);
  assert(Boolean(scenario.withoutInsurance?.financialImpact), `${prefix}: withoutInsurance.financialImpact is required`);
  assert(Boolean(scenario.withoutInsurance?.points?.length > 0), `${prefix}: withoutInsurance.points must be non-empty`);
  assert(Boolean(scenario.withoutInsurance?.summary), `${prefix}: withoutInsurance.summary is required`);

  // With insurance structure
  assert(Boolean(scenario.withInsurance?.statusLabel), `${prefix}: withInsurance.statusLabel is required`);
  assert(Boolean(scenario.withInsurance?.title), `${prefix}: withInsurance.title is required`);
  assert(Boolean(scenario.withInsurance?.financialImpact), `${prefix}: withInsurance.financialImpact is required`);
  assert(Boolean(scenario.withInsurance?.points?.length > 0), `${prefix}: withInsurance.points must be non-empty`);
  assert(Boolean(scenario.withInsurance?.summary), `${prefix}: withInsurance.summary is required`);

  // What to check
  assert(Boolean(scenario.whatToCheck?.items?.length > 0), `${prefix}: whatToCheck.items must be non-empty`);
});

console.log(`  ✅ All 121 scenarios structurally validated.\n`);

// 3. Verifying Specific Distinct Scenarios Image Separation
console.log(`3. Verifying semantic image distinction for water damage scenarios...`);
const washingMachine = SCENARIOS.find(s => s.slug === 'masina-spalat-furtun');
const boilerLeak = SCENARIOS.find(s => s.slug === 'scurgere-combustibil-centrala');
const basementFlood = SCENARIOS.find(s => s.slug === 'inundare-subsol-bloc-robinet-spalat-boxa');
const pipeBurst = SCENARIOS.find(s => s.slug === 'teava-sparta');

assert(Boolean(washingMachine), 'Scenario masina-spalat-furtun should exist');
assert(Boolean(boilerLeak), 'Scenario scurgere-combustibil-centrala should exist');
assert(Boolean(basementFlood), 'Scenario inundare-subsol-bloc-robinet-spalat-boxa should exist');
assert(Boolean(pipeBurst), 'Scenario teava-sparta should exist');

if (washingMachine && boilerLeak && basementFlood && pipeBurst) {
  assert(
    washingMachine.heroImage !== pipeBurst.heroImage,
    `Washing machine scenario must not share image with pipe burst: ${washingMachine.heroImage}`
  );
  assert(
    boilerLeak.heroImage !== pipeBurst.heroImage,
    `Boiler leak scenario must not share image with pipe burst: ${boilerLeak.heroImage}`
  );
  assert(
    basementFlood.heroImage !== pipeBurst.heroImage,
    `Basement flood scenario must not share image with pipe burst: ${basementFlood.heroImage}`
  );
  assert(
    washingMachine.heroImage === '/images/scenarios/washing-machine-hose.jpg',
    `Washing machine expected dedicated image /images/scenarios/washing-machine-hose.jpg, got ${washingMachine.heroImage}`
  );
  assert(
    boilerLeak.heroImage === '/images/scenarios/boiler-leak.jpg',
    `Boiler leak expected dedicated image /images/scenarios/boiler-leak.jpg, got ${boilerLeak.heroImage}`
  );
  assert(
    basementFlood.heroImage === '/images/scenarios/basement-storage-flood.jpg',
    `Basement flood expected dedicated image /images/scenarios/basement-storage-flood.jpg, got ${basementFlood.heroImage}`
  );
  console.log('  ✅ Semantic image separation verified for all distinct water damage scenarios.\n');
}

// 4. Verifying Homepage Hardcoded Slugs
console.log('4. Verifying Homepage Hardcoded Slugs...');
const homepageDebateSlugs = [
  'teava-inghetata-iarna',
  'baterie-vehicul-electric-avarie',
  'copil-sparge-televizor-magazin',
];

const homepageCuratedSlugs = [
  'masina-spalat-furtun',
  'baterie-vehicul-electric-avarie',
  'urgenta-medicala-spitalizare-strainatate',
  'copil-sparge-televizor-magazin',
  'atac-ransomware-blocare-servere',
  'parbriz-crapat-autostrada',
];

homepageDebateSlugs.forEach(slug => {
  const match = SCENARIOS.find(s => s.slug === slug);
  assert(Boolean(match), `Homepage debate slug "${slug}" must resolve to an authentic scenario`);
});

homepageCuratedSlugs.forEach(slug => {
  const match = SCENARIOS.find(s => s.slug === slug);
  assert(Boolean(match), `Homepage curated slug "${slug}" must resolve to an authentic scenario`);
});
console.log('  ✅ All homepage scenario references resolved with 100% precision.\n');

// 5. Verifying Deterministic Scenario of the Week
console.log('5. Verifying deterministic weekly rollover (Dosarul Săptămânii)...');
const weekly1 = getScenarioOfTheWeek();
const weekly2 = getScenarioOfTheWeek();
assert(Boolean(weekly1), 'Weekly scenario must not be undefined');
assert(weekly1.id === weekly2.id, 'Weekly scenario must be deterministic for identical execution');
console.log(`  ✅ Dosarul Săptămânii resolved deterministically: "${weekly1.title}" (${weekly1.slug})\n`);

// Summary
console.log('====================================================');
if (errorCount === 0) {
  console.log(`🎉 ALL INTEGRITY CHECKS PASSED WITH 0 ERRORS (${warnCount} warnings)`);
  process.exit(0);
} else {
  console.error(`❌ FAILED WITH ${errorCount} ERRORS (${warnCount} warnings)`);
  process.exit(1);
}
