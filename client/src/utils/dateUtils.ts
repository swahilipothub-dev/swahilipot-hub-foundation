/**
 * Parses common human-readable date strings (e.g., "20th November 2025", "September 17, 2025")
 * into a Date object. Returns null when parsing fails.
 */
const parseHumanDate = (value?: string) => {
  if (!value) return null;

  // Remove ordinal suffixes and commas to help Date.parse
  const cleaned = value
    .replace(/(\d+)(st|nd|rd|th)/gi, "$1")
    .replace(/,/g, "");

  const parsed = new Date(cleaned);
  if (!Number.isNaN(parsed.getTime())) return parsed;

  const fallback = new Date(value);
  return Number.isNaN(fallback.getTime()) ? null : fallback;
};

/**
 * Returns true when the provided date string is today or in the future.
 * Fails open (returns true) when the date cannot be parsed so content still renders.
 */
export const isDateCurrentOrFuture = (value?: string) => {
  const parsed = parseHumanDate(value);
  if (!parsed) return true;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const normalized = new Date(parsed);
  normalized.setHours(0, 0, 0, 0);

  return normalized >= today;
};
