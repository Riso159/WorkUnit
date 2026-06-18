import type { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Stavebníctvo",
  description:
    "Pracovné tímy pre stavebné, montážne, dokončovacie a pomocné práce.",
  openGraph: {
    title: "Stavebníctvo | WorkUnit s.r.o.",
    description: "Tímy pre krátkodobé aj dlhodobé stavebné projekty.",
  },
};

export default function ConstructionPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Služby / Stavebníctvo"
      title="Pracovné tímy pre stavebné projekty"
      description="Zabezpečenie pracovníkov pre stavebné, montážne, dokončovacie a pomocné činnosti podľa potrieb zákazky."
      intro="Tím pripravujeme podľa druhu prác, požadovaného počtu pracovníkov, miesta realizácie a termínu nástupu."
      items={[
        "Pomocné stavebné práce",
        "Montážne práce",
        "Dokončovacie práce",
        "Práce podľa dohody",
      ]}
      cooperation="Tímy vieme riešiť pre časovo ohraničené zákazky aj dlhšie projekty. Konkrétne profesie, vybavenie, dopravu a ubytovanie nastavíme pri úvodnom prechode zadania."
      code="WU / BUILD"
    />
  );
}
