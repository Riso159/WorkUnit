import type { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Výroba",
  description:
    "Pracovníci pre výrobné prevádzky, montáž, priemyselné projekty a pomocné práce.",
  openGraph: {
    title: "Výroba | WorkUnit s.r.o.",
    description: "Pracovné tímy pre výrobu, montáž a priemyselné projekty.",
  },
};

export default function ProductionPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Služby / Výroba"
      title="Pracovníci pre výrobné a montážne projekty"
      description="Tímy pre výrobné prevádzky, montáž, priemyselné projekty a súvisiace pomocné činnosti."
      intro="Riešenie nastavujeme podľa pracovného režimu, požadovaných činností, lokality a dĺžky projektu."
      items={[
        "Výrobné prevádzky",
        "Montáž",
        "Priemyselné projekty",
        "Pomocné výrobné práce",
      ]}
      cooperation="Možná je krátkodobá aj dlhodobejšia spolupráca. Pred zostavením tímu si prejdeme pracovné podmienky, potrebné skúsenosti, režim zmien a organizačné zabezpečenie."
      code="WU / PROD"
    />
  );
}
