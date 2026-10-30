import { SCENARIOS } from '../src/data/scenarios';
import { getVerifiedScenarioImage, SCENARIO_IMAGE_REGISTRY } from '../src/data/scenarioImageRegistry';

let dedicated = 0;
let genericCategory = 0;
let mismatches = 0;
let unverified = 0;

const dedicatedList: any[] = [];
const genericCategoryList: any[] = [];
const mismatchList: any[] = [];

SCENARIOS.forEach((s) => {
  const img = getVerifiedScenarioImage(s.id, s.heroImage);
  const title = s.title.toLowerCase();

  // Check if dedicated match
  const isDedicated =
    ((img.includes('frozen-pipe') || img.includes('pipe_burst') || img.includes('vacant-frozen')) &&
      (title.includes('îngheț') || title.includes('țeavă') || title.includes('conductă') || title.includes('vacanț') || title.includes('ger') || title.includes('nelocuit'))) ||
    (img.includes('dishwasher-leak') &&
      (title.includes('vase') || title.includes('bucătărie') || title.includes('scurgere'))) ||
    (img.includes('electrical-fire') &&
      (title.includes('scurtcircuit') || title.includes('priză') || title.includes('electric'))) ||
    (img.includes('smoke-damage') &&
      (title.includes('fum') || title.includes('vecin') || title.includes('afumare'))) ||
    ((img.includes('broken-smartphone') || img.includes('broken_phone')) &&
      (title.includes('ecran') || title.includes('telefon') || title.includes('smartphone'))) ||
    (img.includes('broken-camera') &&
      (title.includes('cameră') || title.includes('foto') || title.includes('obiectiv'))) ||
    ((img.includes('phishing') || img.includes('drainer')) &&
      (title.includes('phishing') || title.includes('cont') || title.includes('link') || title.includes('fraudă'))) ||
    ((img.includes('fuel-error') || img.includes('fuel_mistake')) &&
      (title.includes('combustibil') || title.includes('alimentare') || title.includes('greșit') || title.includes('motorină'))) ||
    (img.includes('gas-explosion') &&
      (title.includes('explozie') || title.includes('gaz'))) ||
    (img.includes('earthquake') &&
      (title.includes('cutremur') || title.includes('seism'))) ||
    (img.includes('natural-flood') &&
      (title.includes('inundație') || title.includes('revărsare') || title.includes('ploaie'))) ||
    (img.includes('garage-door') &&
      (title.includes('garaj') || title.includes('poartă'))) ||
    (img.includes('windshield') &&
      (title.includes('parbriz') || title.includes('piatră')));

  if (isDedicated) {
    dedicated++;
    dedicatedList.push({ id: s.id, title: s.title, img });
  } else if (img.startsWith('/images/scenarios/') || img.startsWith('https://images.unsplash.com')) {
    genericCategory++;
    genericCategoryList.push({ id: s.id, title: s.title, img });
  } else {
    unverified++;
  }
});

console.log('AUDIT CATEGORIZATION SUMMARY:');
console.log('Total scenarios audited:', SCENARIOS.length);
console.log('1. Dedicated relevant images:', dedicated);
console.log('2. Relevant generic category illustrations:', genericCategory);
console.log('3. Mismatches / unrelated imagery:', mismatches);
console.log('4. Unverified cases:', unverified);
console.log('\nDedicated list samples:', JSON.stringify(dedicatedList.slice(0, 10), null, 2));
