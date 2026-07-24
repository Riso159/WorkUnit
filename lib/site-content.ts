import type { Metadata } from "next";
import { deContent } from "@/lib/locales/de";
import { enContent } from "@/lib/locales/en";
import { csContent } from "@/lib/locales/cs";
import { skContent } from "@/lib/locales/sk";
import type { SiteLocaleContent } from "@/lib/locales/types";
import {
  localizedRoutes,
  locales,
  type Locale,
  type PageId,
} from "@/lib/i18n";

export const siteContent: Record<Locale, SiteLocaleContent> = {
  sk: skContent,
  cs: csContent,
  en: enContent,
  de: deContent,
};

const openGraphLocales: Record<Locale, string> = {
  sk: "sk_SK",
  cs: "cs_CZ",
  en: "en_GB",
  de: "de_DE",
};

const hrefLangKeys: Record<Locale, string> = {
  sk: "sk-SK",
  cs: "cs-CZ",
  en: "en",
  de: "de-DE",
};

export function getPageMetadata(locale: Locale, pageId: PageId): Metadata {
  const copy = siteContent[locale].metadata[pageId];
  const canonical = localizedRoutes[pageId][locale];
  const languages = Object.fromEntries(
    locales.map((language) => [hrefLangKeys[language], localizedRoutes[pageId][language]]),
  );

  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": localizedRoutes[pageId].sk,
      },
    },
    openGraph: {
      title: copy.openGraphTitle ?? copy.title,
      description: copy.openGraphDescription ?? copy.description,
      type: "website",
      url: canonical,
      locale: openGraphLocales[locale],
      alternateLocale: locales
        .filter((language) => language !== locale)
        .map((language) => openGraphLocales[language]),
    },
  };
}
