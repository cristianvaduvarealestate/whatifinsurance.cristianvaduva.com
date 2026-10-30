import { QuizQuestion } from '@/types/scenario';

export const DEFAULT_QUIZ_SIZE = 5;
const STORAGE_KEY = 'whatif_quiz_previous_ids';

/**
 * Pure, unbiased Fisher-Yates (Knuth) shuffle algorithm.
 * Guarantees uniform distribution O(n) without mutating the input array.
 */
export function shuffleArray<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  return result;
}

/**
 * Selects a randomized subset of questions for a new session.
 * - Guarantees NO duplicate questions within the same test.
 * - Prioritizes questions that were NOT seen in the previous session to maximize variety.
 * - If bank size allows (bank >= 2 * count), guarantees zero repeated questions between consecutive sessions.
 * - When bank size is smaller, repeats the minimum possible number of questions.
 */
export function selectQuizQuestions(
  allQuestions: readonly QuizQuestion[],
  count: number = DEFAULT_QUIZ_SIZE,
  previousQuestionIds: readonly string[] = []
): QuizQuestion[] {
  if (!allQuestions || allQuestions.length === 0) return [];

  const targetCount = Math.min(Math.max(1, count), allQuestions.length);
  const prevSet = new Set(previousQuestionIds);

  const unseen = allQuestions.filter((q) => !prevSet.has(q.id));
  const seen = allQuestions.filter((q) => prevSet.has(q.id));

  const shuffledUnseen = shuffleArray(unseen);
  const shuffledSeen = shuffleArray(seen);

  let selected: QuizQuestion[] = [];

  if (shuffledUnseen.length >= targetCount) {
    selected = shuffledUnseen.slice(0, targetCount);
  } else {
    const neededFromSeen = targetCount - shuffledUnseen.length;
    selected = [...shuffledUnseen, ...shuffledSeen.slice(0, neededFromSeen)];
  }

  // Shuffle final list so previously unseen questions are not clustered at the start
  return shuffleArray(selected);
}

/**
 * Independently randomizes the order of answer options for a question using Fisher-Yates.
 * Preserves option IDs, texts, isCorrect boolean, and verdict labels intact.
 */
export function randomizeQuestionOptions(question: QuizQuestion): QuizQuestion {
  return {
    ...question,
    options: shuffleArray(question.options),
  };
}

/**
 * Generates a full randomized quiz session:
 * 1. Selects questions minimizing repetition from previous session.
 * 2. Randomizes answer options independently for each question.
 */
export function generateQuizSession(
  allQuestions: readonly QuizQuestion[],
  count: number = DEFAULT_QUIZ_SIZE,
  previousQuestionIds: readonly string[] = []
): QuizQuestion[] {
  const selected = selectQuizQuestions(allQuestions, count, previousQuestionIds);
  return selected.map((q) => randomizeQuestionOptions(q));
}

/**
 * Reads previous session question IDs from browser sessionStorage.
 * Safe for SSR and environments where storage is blocked.
 */
export function getPreviousQuizIds(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

/**
 * Stores current session question IDs into browser sessionStorage.
 */
export function saveCurrentQuizIds(ids: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // Graceful fallback if storage quota exceeded or disabled
  }
}
