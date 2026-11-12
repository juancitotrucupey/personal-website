import type { Locale } from "@/i18n/config";
import type { YearMonth } from "@/data/cv.types";

/** "2025-08" -> "Aug 2025" (en) / "ago 2025" (es). */
export function formatYearMonth(value: YearMonth, locale: Locale): string {
  const [year, month] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year ?? 1970, (month ?? 1) - 1, 1));
  return date
    .toLocaleDateString(locale, { month: "short", year: "numeric", timeZone: "UTC" })
    .replace(".", "");
}

/** "Aug 2025 – Apr 2026", or "May 2026 – Present" when there is no end. */
export function formatPeriod(
  start: YearMonth,
  end: YearMonth | undefined,
  locale: Locale,
  presentLabel: string,
): string {
  return `${formatYearMonth(start, locale)} – ${end ? formatYearMonth(end, locale) : presentLabel}`;
}
