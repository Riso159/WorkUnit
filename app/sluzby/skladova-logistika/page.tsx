import type { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Skladová logistika",
  description:
    "Personálne zabezpečenie skladových prevádzok a logistických procesov.",
  openGraph: {
    title: "Skladová logistika | WorkUnit s.r.o.",
    description: "Flexibilné tímy pre skladové a logistické prevádzky.",
  },
};

export default function LogisticsPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Služby / Skladová logistika"
      title="Flexibilné tímy pre skladové prevádzky"
      description="Personálne zabezpečenie skladov, manipulácie s tovarom a pomocných logistických činností podľa objemu práce."
      intro="Kapacitu tímu vieme prispôsobiť charakteru prevádzky, sezónnosti, zmenovému režimu a predpokladanému trvaniu spolupráce."
      items={[
        "Manipulácia s tovarom",
        "Logistické procesy",
        "Pomocné skladové práce",
        "Tímy podľa objemu práce",
      ]}
      cooperation="Spolupráca môže reagovať na krátkodobú špičku aj stabilnejšiu prevádzkovú potrebu. Počet pracovníkov a organizáciu nástupu vždy potvrdíme podľa aktuálnej kapacity."
      code="WU / LOG"
    />
  );
}
