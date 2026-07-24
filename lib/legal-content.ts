import type { LegalSection } from "@/components/LegalContent";
import { cookieSections, privacySections } from "@/lib/legal";
import { csCookieSections, csPrivacySections } from "@/lib/locales/legal-cs";
import { deCookieSections, dePrivacySections } from "@/lib/locales/legal-de";
import { enCookieSections, enPrivacySections } from "@/lib/locales/legal-en";
import type { Locale } from "@/lib/i18n";

export const legalContent: Record<
  Locale,
  { privacy: LegalSection[]; cookies: LegalSection[] }
> = {
  sk: { privacy: privacySections, cookies: cookieSections },
  cs: { privacy: csPrivacySections, cookies: csCookieSections },
  en: { privacy: enPrivacySections, cookies: enCookieSections },
  de: { privacy: dePrivacySections, cookies: deCookieSections },
};
