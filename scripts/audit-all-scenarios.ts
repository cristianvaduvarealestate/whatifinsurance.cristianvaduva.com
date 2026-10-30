import fs from 'fs';
import path from 'path';
import { SCENARIOS } from '../src/data/scenarios';
import { CATEGORIES } from '../src/data/categories';

console.log(`=== AUDIT SCENARII WHAT IF INSURANCE ===`);
console.log(`Total scenarii în bancă: ${SCENARIOS.length}`);

const categoryIds = new Set(CATEGORIES.map((c) => c.id));
let errorsFound = 0;
let warningsFound = 0;

SCENARIOS.forEach((scenario, index) => {
  const prefix = `[#${index + 1} | ${scenario.id}]`;

  // 1. Category validation
  if (!categoryIds.has(scenario.categoryId)) {
    console.error(`${prefix} Categorie necunoscută: ${scenario.categoryId}`);
    errorsFound++;
  }

  // 2. Required fields validation
  const required = [
    'id',
    'slug',
    'categoryId',
    'categoryName',
    'title',
    'mainQuestion',
    'shortDescription',
    'situation',
    'heroImage',
    'imageCaption',
    'withoutInsurance',
    'withInsurance',
    'whatToCheck',
  ] as const;

  for (const field of required) {
    if (!scenario[field]) {
      console.error(`${prefix} Câmp lipsă sau gol: ${field}`);
      errorsFound++;
    }
  }

  // 3. Image validation
  if (scenario.heroImage) {
    const cleanImgPath = scenario.heroImage.split('?')[0];
    const fullImgPath = path.join(process.cwd(), 'public', cleanImgPath);
    if (!fs.existsSync(fullImgPath)) {
      // Check if it's an external URL (e.g. unsplash)
      if (!scenario.heroImage.startsWith('http://') && !scenario.heroImage.startsWith('https://')) {
        console.warn(`${prefix} Fișier imagine negăsit local pe disc: ${scenario.heroImage}`);
        warningsFound++;
      }
    }
  }

  // 4. Content mismatch inspection
  const titleLower = scenario.title.toLowerCase();
  const situationLower = scenario.situation.toLowerCase();
  const descLower = scenario.shortDescription.toLowerCase();

  // Check for the OLED / Washing machine mismatch specifically
  if (
    (titleLower.includes('mașină de spălat') || titleLower.includes('spalat') || titleLower.includes('rufe')) &&
    (situationLower.includes('oled') || situationLower.includes('televizor') || descLower.includes('oled'))
  ) {
    console.error(`${prefix} DISCREPANȚĂ DETECTATĂ: Titlul conține 'spălat', dar textul vorbește despre OLED/televizor!`);
    console.log(`   Titlu: ${scenario.title}`);
    console.log(`   Situație: ${scenario.situation.substring(0, 100)}...`);
    errorsFound++;
  }

  // Check if title mentions car/auto but category is casa, or vice-versa
  if (scenario.categoryId === 'auto' && (titleLower.includes('apartament') || titleLower.includes('acoperiș casă'))) {
    console.warn(`${prefix} Atenție: Categorie auto dar titlul menționează apartament/acoperiș: "${scenario.title}"`);
    warningsFound++;
  }

  // Check points length
  if (!scenario.withoutInsurance?.points || scenario.withoutInsurance.points.length === 0) {
    console.error(`${prefix} withoutInsurance.points este gol`);
    errorsFound++;
  }
  if (!scenario.withInsurance?.points || scenario.withInsurance.points.length === 0) {
    console.error(`${prefix} withInsurance.points este gol`);
    errorsFound++;
  }
});

console.log(`\nRezultate Audit:`);
console.log(`- Erori critice de conținut/date: ${errorsFound}`);
console.log(`- Avertismente (de ex. imagini fallback/externe): ${warningsFound}`);
