import { QUIZ_QUESTIONS } from '../src/data/quiz';
import {
  shuffleArray,
  selectQuizQuestions,
  randomizeQuestionOptions,
  generateQuizSession,
  DEFAULT_QUIZ_SIZE,
} from '../src/lib/quizRandomizer';

console.log('--- TEST 1: Question Bank Integrity ---');
console.log(`Total questions in bank: ${QUIZ_QUESTIONS.length}`);
if (QUIZ_QUESTIONS.length !== 8) {
  throw new Error(`Expected 8 questions in bank, got ${QUIZ_QUESTIONS.length}`);
}

QUIZ_QUESTIONS.forEach((q, idx) => {
  const correctOptions = q.options.filter((o) => o.isCorrect);
  if (correctOptions.length !== 1) {
    throw new Error(`Question ${q.id} has ${correctOptions.length} correct options (expected exactly 1)`);
  }
  const optionIds = new Set(q.options.map((o) => o.id));
  if (optionIds.size !== q.options.length) {
    throw new Error(`Question ${q.id} has duplicate option IDs`);
  }
});
console.log('✓ All questions have exactly 1 correct option and unique option IDs.');

console.log('\n--- TEST 2: No Duplicate Questions in Generated Test ---');
for (let i = 0; i < 50; i++) {
  const session = generateQuizSession(QUIZ_QUESTIONS, DEFAULT_QUIZ_SIZE);
  if (session.length !== DEFAULT_QUIZ_SIZE) {
    throw new Error(`Session length ${session.length} != ${DEFAULT_QUIZ_SIZE}`);
  }
  const uniqueIds = new Set(session.map((q) => q.id));
  if (uniqueIds.size !== session.length) {
    throw new Error(`Found duplicate questions in session: ${session.map((q) => q.id).join(', ')}`);
  }
}
console.log('✓ 50 random sessions generated with 0 duplicate questions.');

console.log('\n--- TEST 3: Consecutive Sessions Variety & Previous Session Avoidance ---');
let identicalConsecutive = 0;
let previousIds: string[] = [];

for (let s = 0; s < 20; s++) {
  const session = generateQuizSession(QUIZ_QUESTIONS, DEFAULT_QUIZ_SIZE, previousIds);
  const currentIds = session.map((q) => q.id);

  if (previousIds.length > 0) {
    // Check if exact test repeated
    const sameOrder = currentIds.every((id, idx) => id === previousIds[idx]);
    if (sameOrder) identicalConsecutive++;

    // In an 8-question bank with 5 selected:
    // Unseen questions: 8 - 5 = 3.
    // So current session MUST include all 3 unseen questions!
    const prevSet = new Set(previousIds);
    const unseenFromBank = QUIZ_QUESTIONS.filter((q) => !prevSet.has(q.id)).map((q) => q.id);
    const includedUnseen = unseenFromBank.filter((id) => currentIds.includes(id));

    if (includedUnseen.length !== unseenFromBank.length) {
      throw new Error(
        `Session did not maximize new questions! Included ${includedUnseen.length}/${unseenFromBank.length} unseen.`
      );
    }
  }

  previousIds = currentIds;
}
console.log(`✓ 20 consecutive sessions tested. Exact test repetition: ${identicalConsecutive} (expected 0)`);
console.log('✓ 100% of available unseen questions were prioritized in every consecutive session.');

console.log('\n--- TEST 4: Option Shuffling & Correct Answer Invariance ---');
// Pick first question, shuffle options 100 times, check position distribution
const testQ = QUIZ_QUESTIONS[0];
const positionsCount = [0, 0, 0];

for (let i = 0; i < 300; i++) {
  const randomized = randomizeQuestionOptions(testQ);
  const correctIdx = randomized.options.findIndex((o) => o.isCorrect);
  if (correctIdx === -1) {
    throw new Error('Correct answer disappeared after shuffling!');
  }
  positionsCount[correctIdx]++;

  // Verify option properties preserved
  const originalCorrect = testQ.options.find((o) => o.isCorrect)!;
  const randomizedCorrect = randomized.options[correctIdx];
  if (randomizedCorrect.id !== originalCorrect.id || randomizedCorrect.text !== originalCorrect.text) {
    throw new Error('Option content corrupted during shuffle!');
  }
}

console.log(`Correct answer position distribution over 300 shuffles:`, {
  'Position 0 (A)': positionsCount[0],
  'Position 1 (B)': positionsCount[1],
  'Position 2 (C)': positionsCount[2],
});
// Each position should be ~100 with small variance
if (positionsCount[0] < 50 || positionsCount[1] < 50 || positionsCount[2] < 50) {
  throw new Error(`Unfair distribution in Fisher-Yates shuffle: ${JSON.stringify(positionsCount)}`);
}
console.log('✓ Option shuffling is uniformly distributed and never leaves correct answer in fixed slot.');

console.log('\n--- TEST 5: Scoring Logic Integrity Simulation ---');
for (let sim = 0; sim < 10; sim++) {
  const session = generateQuizSession(QUIZ_QUESTIONS, DEFAULT_QUIZ_SIZE);
  let simulatedScore = 0;

  session.forEach((q) => {
    // Find correct option in shuffled options
    const correctOpt = q.options.find((o) => o.isCorrect)!;
    // Simulate answering correctly
    const chosen = q.options.find((o) => o.id === correctOpt.id);
    if (chosen?.isCorrect) {
      simulatedScore++;
    }
  });

  if (simulatedScore !== DEFAULT_QUIZ_SIZE) {
    throw new Error(`Scoring mismatch: expected ${DEFAULT_QUIZ_SIZE}, got ${simulatedScore}`);
  }
}
console.log('✓ Simulated full-correct quiz always scores 100% regardless of shuffled order.');

console.log('\n--- ALL UNIT TESTS PASSED SUCCESSFULLY ---');
