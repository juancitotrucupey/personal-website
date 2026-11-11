import { DEFAULT_LOCALE, LOCALES, isLocale, type Locale } from "./config";
import { UI, type UiKey } from "./ui";

/** Returns a translation function bound to one language. */
export function useTranslations(locale: Locale): (key: UiKey) => string {
  return (key) => UI[locale][key];
}

/** Reads the language from the first URL segment, falling back to the default. */
export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split("/");
  return isLocale(first) ? first : DEFAULT_LOCALE;
}

/** Builds a path inside a language, e.g. localizePath("es", "/projects/") -> "/es/projects/". */
export function localizePath(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

/** Same page in another language (used by the language switcher and hreflang links). */
export function switchLocale(url: URL, target: Locale): string {
  const segments = url.pathname.split("/");
  if (isLocale(segments[1])) {
    segments[1] = target;
    return segments.join("/");
  }
  return localizePath(target, url.pathname);
}

/** getStaticPaths helper for routes under src/pages/[lang]/. */
export function localeStaticPaths(): { params: { lang: Locale } }[] {
  return LOCALES.map((lang) => ({ params: { lang } }));
}
