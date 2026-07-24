export const locales = ["sk", "cs", "en", "de"] as const;

export type Locale = (typeof locales)[number];

export const pageIds = [
  "home",
  "services",
  "projects",
  "about",
  "faq",
  "contact",
  "recruitment",
  "cookies",
  "privacy",
  "thankYou",
  "workerThankYou",
] as const;

export type PageId = (typeof pageIds)[number];

export const localizedRoutes: Record<PageId, Record<Locale, string>> = {
  home: { sk: "/", cs: "/cs", en: "/en", de: "/de" },
  services: {
    sk: "/sluzby",
    cs: "/cs/sluzby",
    en: "/en/services",
    de: "/de/dienstleistungen",
  },
  projects: {
    sk: "/projekty",
    cs: "/cs/projekty",
    en: "/en/projects",
    de: "/de/projekte",
  },
  about: {
    sk: "/o-nas",
    cs: "/cs/o-nas",
    en: "/en/about",
    de: "/de/ueber-uns",
  },
  faq: { sk: "/faq", cs: "/cs/faq", en: "/en/faq", de: "/de/faq" },
  contact: {
    sk: "/kontakt",
    cs: "/cs/kontakt",
    en: "/en/contact",
    de: "/de/kontakt",
  },
  recruitment: {
    sk: "/hladam-zakazku",
    cs: "/cs/hledam-zakazku",
    en: "/en/looking-for-work",
    de: "/de/auftraege-suchen",
  },
  cookies: {
    sk: "/cookies",
    cs: "/cs/cookies",
    en: "/en/cookies",
    de: "/de/cookies",
  },
  privacy: {
    sk: "/ochrana-osobnych-udajov",
    cs: "/cs/ochrana-osobnich-udaju",
    en: "/en/privacy-policy",
    de: "/de/datenschutz",
  },
  thankYou: {
    sk: "/dakujeme",
    cs: "/cs/dekujeme",
    en: "/en/thank-you",
    de: "/de/danke",
  },
  workerThankYou: {
    sk: "/dakujeme-pracovnik",
    cs: "/cs/dekujeme-pracovnik",
    en: "/en/worker-thank-you",
    de: "/de/bewerber-danke",
  },
};

export const navPageIds = [
  "home",
  "services",
  "projects",
  "recruitment",
  "about",
  "faq",
  "contact",
] as const satisfies readonly PageId[];

const localePrefixes: Record<Exclude<Locale, "sk">, string> = {
  cs: "/cs",
  en: "/en",
  de: "/de",
};

function normalizePathname(pathname: string) {
  const path = pathname.split(/[?#]/, 1)[0] || "/";
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const normalized = normalizePathname(pathname);

  for (const [locale, prefix] of Object.entries(localePrefixes) as [
    Exclude<Locale, "sk">,
    string,
  ][]) {
    if (normalized === prefix || normalized.startsWith(`${prefix}/`)) {
      return locale;
    }
  }

  return "sk";
}

export function getPageIdFromPathname(pathname: string): PageId | null {
  const normalized = normalizePathname(pathname);

  for (const pageId of pageIds) {
    for (const locale of locales) {
      if (localizedRoutes[pageId][locale] === normalized) {
        return pageId;
      }
    }
  }

  return null;
}

export function routeFor(locale: Locale, pageId: PageId, hash = "") {
  return `${localizedRoutes[pageId][locale]}${hash}`;
}

export function equivalentRoute(pathname: string, targetLocale: Locale) {
  const pageId = getPageIdFromPathname(pathname);
  return localizedRoutes[pageId ?? "home"][targetLocale];
}

export function getStaticLocalizedParams() {
  return locales
    .filter((locale): locale is Exclude<Locale, "sk"> => locale !== "sk")
    .flatMap((locale) =>
      pageIds.map((pageId) => {
        const route = localizedRoutes[pageId][locale];
        const prefix = `/${locale}`;
        const remainder = route.slice(prefix.length).replace(/^\//, "");

        return {
          locale,
          slug: remainder ? remainder.split("/") : [],
        };
      }),
    );
}

export function resolveLocalizedPage(locale: string, slug: string[] | undefined) {
  if (!isLocale(locale) || locale === "sk") {
    return null;
  }

  const pathname = `/${locale}${slug?.length ? `/${slug.join("/")}` : ""}`;
  const pageId = getPageIdFromPathname(pathname);

  if (!pageId) {
    return null;
  }

  return { locale, pageId } as const;
}

export const localeLabels: Record<Locale, string> = {
  sk: "SK",
  cs: "CZ",
  en: "EN",
  de: "DE",
};

type ChromeCopy = {
  skipLink: string;
  logoAria: string;
  navigationAria: string;
  mobileNavigationAria: string;
  languageSwitcherAria: string;
  openMenu: string;
  closeMenu: string;
  contactCta: string;
  mobileSummary: string;
  nav: Record<(typeof navPageIds)[number], string>;
  footer: {
    description: string;
    navigation: string;
    services: string;
    contact: string;
    social: string;
    socialAria: string;
    rights: string;
    privacy: string;
    serviceLinks: readonly { label: string; hash: string }[];
  };
  cookies: {
    aria: string;
    title: string;
    textBefore: string;
    linkLabel: string;
    textAfter: string;
    reject: string;
    accept: string;
  };
};

export const chromeCopy: Record<Locale, ChromeCopy> = {
  sk: {
    skipLink: "Preskočiť na obsah",
    logoAria: "WorkUnit – domov",
    navigationAria: "Hlavná navigácia",
    mobileNavigationAria: "Mobilná navigácia",
    languageSwitcherAria: "Prepínač jazykov",
    openMenu: "Otvoriť menu",
    closeMenu: "Zavrieť menu",
    contactCta: "Kontaktovať",
    mobileSummary:
      "Pracovné tímy a subdodávateľské služby pre Slovensko, Česko, Nemecko, Rakúsko a Holandsko.",
    nav: {
      home: "Domov",
      services: "Služby",
      projects: "Projekty",
      recruitment: "Hľadám zákazku",
      about: "O nás",
      faq: "FAQ",
      contact: "Kontakt",
    },
    footer: {
      description:
        "WorkUnit s.r.o. zabezpečuje pracovné tímy a subdodávateľské služby pre firmy v stavebníctve, logistike a výrobe.",
      navigation: "Navigácia",
      services: "Služby",
      contact: "Kontakt",
      social: "Sociálne siete",
      socialAria: "Otvoriť {network} WorkUnit v novom okne",
      rights: "Všetky práva vyhradené.",
      privacy: "Ochrana osobných údajov",
      serviceLinks: [
        { label: "Stavebníctvo", hash: "#stavebnictvo" },
        { label: "Skladová logistika", hash: "#skladova-logistika" },
        { label: "Výroba", hash: "#vyroba" },
        { label: "Ako prebieha spolupráca", hash: "#proces" },
      ],
    },
    cookies: {
      aria: "Nastavenie cookies",
      title: "Cookies",
      textBefore:
        "Webová stránka používa cookies na správne fungovanie stránky. Analytické alebo ďalšie cookies budú použité iba v prípade súhlasu návštevníka. Viac informácií nájdete v časti",
      linkLabel: "Cookies politika",
      textAfter: ".",
      reject: "Odmietnuť",
      accept: "Prijať cookies",
    },
  },
  cs: {
    skipLink: "Přejít na obsah",
    logoAria: "WorkUnit – domů",
    navigationAria: "Hlavní navigace",
    mobileNavigationAria: "Mobilní navigace",
    languageSwitcherAria: "Přepínač jazyků",
    openMenu: "Otevřít menu",
    closeMenu: "Zavřít menu",
    contactCta: "Kontaktovat",
    mobileSummary:
      "Pracovní týmy a subdodavatelské služby pro Slovensko, Česko, Německo, Rakousko a Nizozemsko.",
    nav: {
      home: "Domů",
      services: "Služby",
      projects: "Projekty",
      recruitment: "Hledám zakázku",
      about: "O nás",
      faq: "FAQ",
      contact: "Kontakt",
    },
    footer: {
      description:
        "WorkUnit s.r.o. zajišťuje pracovní týmy a subdodavatelské služby pro firmy ve stavebnictví, logistice a výrobě.",
      navigation: "Navigace",
      services: "Služby",
      contact: "Kontakt",
      social: "Sociální sítě",
      socialAria: "Otevřít {network} WorkUnit v novém okně",
      rights: "Všechna práva vyhrazena.",
      privacy: "Ochrana osobních údajů",
      serviceLinks: [
        { label: "Stavebnictví", hash: "#stavebnictvo" },
        { label: "Skladová logistika", hash: "#skladova-logistika" },
        { label: "Výroba", hash: "#vyroba" },
        { label: "Jak probíhá spolupráce", hash: "#proces" },
      ],
    },
    cookies: {
      aria: "Nastavení cookies",
      title: "Cookies",
      textBefore:
        "Web používá cookies nezbytné pro správné fungování. Analytické a další cookies používáme pouze s vaším souhlasem. Více informací najdete v části",
      linkLabel: "Zásady používání cookies",
      textAfter: ".",
      reject: "Odmítnout",
      accept: "Přijmout cookies",
    },
  },
  en: {
    skipLink: "Skip to content",
    logoAria: "WorkUnit – home",
    navigationAria: "Main navigation",
    mobileNavigationAria: "Mobile navigation",
    languageSwitcherAria: "Language switcher",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contactCta: "Contact us",
    mobileSummary:
      "Work teams and subcontracting services for Slovakia, Czechia, Germany, Austria and the Netherlands.",
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      recruitment: "Looking for work",
      about: "About us",
      faq: "FAQ",
      contact: "Contact",
    },
    footer: {
      description:
        "WorkUnit s.r.o. provides work teams and subcontracting services to construction, logistics and manufacturing companies.",
      navigation: "Navigation",
      services: "Services",
      contact: "Contact",
      social: "Social media",
      socialAria: "Open WorkUnit on {network} in a new window",
      rights: "All rights reserved.",
      privacy: "Privacy policy",
      serviceLinks: [
        { label: "Construction", hash: "#stavebnictvo" },
        { label: "Warehouse logistics", hash: "#skladova-logistika" },
        { label: "Manufacturing", hash: "#vyroba" },
        { label: "How cooperation works", hash: "#proces" },
      ],
    },
    cookies: {
      aria: "Cookie settings",
      title: "Cookies",
      textBefore:
        "This website uses cookies required for it to function correctly. Analytics and other optional cookies are used only with your consent. For more information, see our",
      linkLabel: "Cookie policy",
      textAfter: ".",
      reject: "Reject",
      accept: "Accept cookies",
    },
  },
  de: {
    skipLink: "Zum Inhalt springen",
    logoAria: "WorkUnit – Startseite",
    navigationAria: "Hauptnavigation",
    mobileNavigationAria: "Mobile Navigation",
    languageSwitcherAria: "Sprachauswahl",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    contactCta: "Kontakt aufnehmen",
    mobileSummary:
      "Arbeitsteams und Nachunternehmerleistungen für die Slowakei, Tschechien, Deutschland, Österreich und die Niederlande.",
    nav: {
      home: "Startseite",
      services: "Dienstleistungen",
      projects: "Projekte",
      recruitment: "Aufträge suchen",
      about: "Über uns",
      faq: "FAQ",
      contact: "Kontakt",
    },
    footer: {
      description:
        "WorkUnit s.r.o. stellt Arbeitsteams und Nachunternehmerleistungen für Unternehmen im Bauwesen, in der Logistik und in der Produktion bereit.",
      navigation: "Navigation",
      services: "Dienstleistungen",
      contact: "Kontakt",
      social: "Soziale Netzwerke",
      socialAria: "WorkUnit auf {network} in einem neuen Fenster öffnen",
      rights: "Alle Rechte vorbehalten.",
      privacy: "Datenschutz",
      serviceLinks: [
        { label: "Bauwesen", hash: "#stavebnictvo" },
        { label: "Lagerlogistik", hash: "#skladova-logistika" },
        { label: "Produktion", hash: "#vyroba" },
        { label: "Ablauf der Zusammenarbeit", hash: "#proces" },
      ],
    },
    cookies: {
      aria: "Cookie-Einstellungen",
      title: "Cookies",
      textBefore:
        "Diese Website verwendet technisch notwendige Cookies, damit sie ordnungsgemäß funktioniert. Analyse- und weitere optionale Cookies werden nur mit Ihrer Einwilligung eingesetzt. Weitere Informationen finden Sie in unserer",
      linkLabel: "Cookie-Richtlinie",
      textAfter: ".",
      reject: "Ablehnen",
      accept: "Cookies akzeptieren",
    },
  },
};
