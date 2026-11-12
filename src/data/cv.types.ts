import type { Locale } from "@/i18n/config";

/**
 * Types for the CV data in cv.ts. One data set feeds both CV versions
 * (see docs/design/cv-variants.md). Order in the data arrays = order on the page.
 */
export const AUDIENCES = ["engineer", "research"] as const;
export type Audience = (typeof AUDIENCES)[number];

/** Text in every supported language. */
export type Localized = Record<Locale, string>;

/** Year and month, "YYYY-MM". */
export type YearMonth = `${number}-${number}`;

export interface Period {
  start: YearMonth;
  /** Omit for ongoing positions. */
  end?: YearMonth;
}

export interface ExperienceEntry extends Period {
  id: string;
  title: Localized;
  org: string;
  url?: string;
  /** Bullets per CV version. An entry appears in a version only if it has bullets for it. */
  bullets: Partial<Record<Audience, readonly Localized[]>>;
}

export interface EducationEntry {
  id: string;
  degree: Localized;
  institution: string;
  /** Graduation date. */
  date: YearMonth;
  note?: Localized;
  audiences: readonly Audience[];
}

export interface SkillGroup {
  id: string;
  label: Localized;
  items: readonly string[];
  audiences: readonly Audience[];
}

export interface LanguageSkill {
  name: Localized;
  /** CEFR level, e.g. "C1". */
  level: string;
}

export interface ActivityLink {
  label: Localized;
  url: string;
}

export interface ActivityEntry extends Period {
  id: string;
  role: Localized;
  name: Localized;
  url?: string;
  description?: Localized;
  links?: readonly ActivityLink[];
  audiences: readonly Audience[];
}

export interface CvData {
  /** Short profile at the top, per version. */
  summary: Partial<Record<Audience, Localized>>;
  experience: readonly ExperienceEntry[];
  education: readonly EducationEntry[];
  skills: readonly SkillGroup[];
  languages: readonly LanguageSkill[];
  activities: readonly ActivityEntry[];
}
