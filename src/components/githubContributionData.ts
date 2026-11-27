import type { Activity } from "react-activity-calendar";

export function getContributionDays(payload: unknown, year: number): Activity[] {
  if (!payload || typeof payload !== "object" || !("contributions" in payload) ||
      !Array.isArray(payload.contributions)) return [];

  const days = new Map<string, Activity>();
  for (const entry of payload.contributions as unknown[]) {
    if (!entry || typeof entry !== "object" ||
        !("date" in entry) || !("count" in entry) || !("level" in entry)) continue;

    const { date, count, level } = entry;
    if (typeof date !== "string" || !date.startsWith(`${year}-`) || !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
        typeof count !== "number" || !Number.isSafeInteger(count) || count < 0 ||
        typeof level !== "number" || !Number.isInteger(level) || level < 0 || level > 4) continue;

    const parsed = new Date(date);
    if (!Number.isFinite(parsed.valueOf()) || parsed.toISOString().slice(0, 10) !== date) continue;
    days.set(date, { date, count, level });
  }

  return [...days.values()].sort((first, second) => first.date.localeCompare(second.date));
}
