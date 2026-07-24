import type { Metadata } from "next";
import { LegalTextPage } from "@/components/LegalContent";
import { cookieSections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Cookies politika",
  description: "Cookies politika webovej stránky www.workunit.sk.",
  openGraph: {
    title: "Cookies politika | WorkUnit s.r.o.",
    description: "Informácie o používaní cookies na webovej stránke WorkUnit s.r.o.",
  },
};

export default function CookiesPolicyPage() {
  return (
    <LegalTextPage
      eyebrow="Právne informácie"
      title="Cookies politika"
      description="Informácie o používaní súborov cookies na webovej stránke WorkUnit s.r.o."
      sections={cookieSections}
    />
  );
}
