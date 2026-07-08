export const locales = ["en", "am", "om"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// We always prefix locale (e.g. `/en/...`, `/am/...`, `/om/...`).
export const routing = {
  locales,
  defaultLocale,
  localePrefix: "always" as const,
};

