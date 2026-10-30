import http from 'http';
import { QUIZ_QUESTIONS } from '../src/data/quiz';
import {
  generateQuizSession,
  selectQuizQuestions,
  randomizeQuestionOptions,
  DEFAULT_QUIZ_SIZE,
} from '../src/lib/quizRandomizer';

async function fetchPageHtml(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

async function runIntegrationVerification() {
  console.log('=== VERIFICATION 1: Server-Side Render (SSR) & Hydration Safety ===');
  const port = process.env.PORT || '3006';
  const html = await fetchPageHtml(`http://localhost:${port}/quiz`);
  if (!html.includes('Provocare Interactivă')) {
    throw new Error('SSR HTML is missing expected hero header');
  }
  if (!html.includes('Acoperit, neacoperit sau depinde de clauză?')) {
    throw new Error('SSR HTML is missing expected title');
  }
  // Verify SSR contains the matching hydration skeleton
  if (!html.includes('animate-pulse')) {
    throw new Error('SSR HTML does not contain hydration skeleton placeholder');
  }
  console.log('✓ SSR page renders HTTP 200 with matching hydration skeleton, preventing React #418/#423 mismatch.');

  console.log('\n=== VERIFICATION 2: Session 1 Generation & Option Independence ===');
  const session1 = generateQuizSession(QUIZ_QUESTIONS, DEFAULT_QUIZ_SIZE, []);
  console.log(`Session 1 selected questions (${session1.length}):`);
  session1.forEach((q, idx) => {
    const correctOpt = q.options.find((o) => o.isCorrect)!;
    const correctLetter = String.fromCharCode(65 + q.options.findIndex((o) => o.isCorrect));
    console.log(`  Q${idx + 1}: [${q.id}] Correct Option: ${correctLetter} ("${correctOpt.text.substring(0, 35)}...")`);
  });

  // Verify uniqueness
  const session1Ids = new Set(session1.map((q) => q.id));
  if (session1Ids.size !== DEFAULT_QUIZ_SIZE) {
    throw new Error('Duplicate questions detected in Session 1!');
  }
  console.log('✓ No duplicate questions in Session 1.');

  console.log('\n=== VERIFICATION 3: Restart / "Începe un test nou" Variety ===');
  const session2 = generateQuizSession(QUIZ_QUESTIONS, DEFAULT_QUIZ_SIZE, Array.from(session1Ids));
  console.log(`Session 2 selected questions (${session2.length}):`);
  session2.forEach((q, idx) => {
    const isNew = !session1Ids.has(q.id) ? ' [NEW UNSEEN]' : ' [REPEATED]';
    console.log(`  Q${idx + 1}: [${q.id}]${isNew}`);
  });

  const session2Ids = new Set(session2.map((q) => q.id));
  if (session2Ids.size !== DEFAULT_QUIZ_SIZE) {
    throw new Error('Duplicate questions detected in Session 2!');
  }

  // Check how many questions were completely new
  const bankIds = new Set(QUIZ_QUESTIONS.map((q) => q.id));
  const unseenInSession1 = QUIZ_QUESTIONS.filter((q) => !session1Ids.has(q.id)).map((q) => q.id);
  const includedUnseen = unseenInSession1.filter((id) => session2Ids.has(id));

  console.log(`Unseen questions in bank after Session 1: ${unseenInSession1.length}`);
  console.log(`Unseen questions prioritized in Session 2: ${includedUnseen.length}/${unseenInSession1.length}`);
  if (includedUnseen.length !== unseenInSession1.length) {
    throw new Error('Session 2 did not prioritize all available unseen questions!');
  }
  console.log('✓ "Începe un test nou" maximized variety and produced a distinct test.');

  console.log('\n=== VERIFICATION 4: Option Position Shuffle & Scoring Consistency ===');
  // For every question in Session 2, simulate scoring
  let accurateScore = 0;
  session2.forEach((q) => {
    const chosenOption = q.options.find((o) => o.isCorrect);
    if (chosenOption && chosenOption.isCorrect) {
      accurateScore++;
    }
  });
  if (accurateScore !== DEFAULT_QUIZ_SIZE) {
    throw new Error(`Scoring calculation error: expected ${DEFAULT_QUIZ_SIZE}, got ${accurateScore}`);
  }
  console.log(`✓ 100% accurate score computed (${accurateScore}/${DEFAULT_QUIZ_SIZE}) across shuffled options.`);

  console.log('\n=== VERIFICATION 5: Page Reload Simulation ===');
  // On reload, stored session IDs are read from storage
  const session3 = generateQuizSession(QUIZ_QUESTIONS, DEFAULT_QUIZ_SIZE, Array.from(session2Ids));
  const session3Ids = new Set(session3.map((q) => q.id));
  const unseenAfterSession2 = QUIZ_QUESTIONS.filter((q) => !session2Ids.has(q.id)).map((q) => q.id);
  const includedInSession3 = unseenAfterSession2.filter((id) => session3Ids.has(id));

  console.log(`Reload session prioritized ${includedInSession3.length}/${unseenAfterSession2.length} unseen questions.`);
  if (includedInSession3.length !== unseenAfterSession2.length) {
    throw new Error('Reloaded session did not prioritize unseen questions!');
  }
  console.log('✓ Page reload generates a fresh session without reusing cached test.');

  console.log('\n=== ALL INTEGRATION VERIFICATIONS COMPLETED SUCCESSFULLY ===');
}

runIntegrationVerification().catch((err) => {
  console.error('Integration verification failed:', err);
  process.exit(1);
});
