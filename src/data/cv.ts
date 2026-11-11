import type { Locale } from "@/i18n/config";

/**
 * CV data model. One source of truth for both CV versions (see docs/design/cv-variants.md).
 * Entries are filled in during the content phase.
 */
export const AUDIENCES = ["engineer", "research"] as const;
export type Audience = (typeof AUDIENCES)[number];

export type Localized = Record<Locale, string>;

export interface CvEntry {
  id: string;
  title: Localized;
  org: string;
  location?: Localized;
  /** ISO year-month, e.g. "2025-01". */
  start: string;
  /** ISO year-month; omit for current positions. */
  end?: string;
  /** CV versions this entry appears in. */
  audiences: readonly Audience[];
  /** Bullets per CV version; each version may stress different things. */
  bullets: Partial<Record<Audience, readonly Localized[]>>;
  tags?: readonly string[];
}

export const EXPERIENCE: readonly CvEntry[] = [];

/** Entries for one CV version, newest first. */
export function entriesFor(
  audience: Audience,
  entries: readonly CvEntry[] = EXPERIENCE,
): CvEntry[] {
  return entries
    .filter((entry) => entry.audiences.includes(audience))
    .toSorted(
      (a, b) => (b.end ?? "9999").localeCompare(a.end ?? "9999") || b.start.localeCompare(a.start),
    );
}
