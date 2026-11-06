/**
 * Calculates estimated reading time in minutes based on Romanian text word count.
 * Standard average reading speed: ~180-200 words per minute.
 */
export function calculateReadingTime(text: string): number {
  if (!text || typeof text !== 'string') return 1;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(wordCount / 180);
  return Math.max(1, Math.min(minutes, 8));
}
