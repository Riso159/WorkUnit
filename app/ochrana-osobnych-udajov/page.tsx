import type { Metadata } from "next";
import { LegalTextPage } from "@/components/LegalContent";
import { privacySections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  description:
    "Zásady spracúvania osobných údajov spoločnosti WorkUnit s.r.o. a informácia o spracúvaní údajov pri kontaktnom formulári.",
  openGraph: {
    title: "Ochrana osobných údajov | WorkUnit s.r.o.",
    description:
      "Zásady spracúvania osobných údajov spoločnosti WorkUnit s.r.o.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalTextPage
      eyebrow="Právne informácie"
      title="Zásady spracúvania osobných údajov"
      description="Text právnych informácií je zapracovaný podľa podkladov dodaných klientom."
      sections={privacySections}
    />
  );
}
