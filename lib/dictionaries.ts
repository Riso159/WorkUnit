export const locales = ["sk", "cs", "en", "de"] as const;

export type Locale = (typeof locales)[number];

export const dictionaries = {
  sk: {
    status: "Primárna slovenská verzia je implementovaná.",
  },
  cs: {
    status: "Česká verzia je pripravená ako štruktúra na preklad.",
  },
  en: {
    status: "English version is prepared as a translation structure.",
  },
  de: {
    status: "Die deutsche Version ist als Übersetzungsstruktur vorbereitet.",
  },
} satisfies Record<Locale, { status: string }>;

// TODO: Po schválení slovenských textov doplniť plné preklady CZ / EN / DE.
