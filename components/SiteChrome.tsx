import type { ReactNode } from "react";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import type { Locale } from "@/lib/i18n";

export function SiteChrome({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <>
      <SkipLink locale={locale} />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <CookieConsentBanner />
    </>
  );
}
