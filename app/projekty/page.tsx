import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projectTypes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projekty",
  description:
    "Typy stavebných, logistických, výrobných a subdodávateľských projektov, ktoré vie WorkUnit zabezpečiť.",
  openGraph: {
    title: "Projekty | WorkUnit s.r.o.",
    description:
      "Ukážkové typy zákaziek pre pracovné a subdodávateľské tímy.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Typy projektov"
        title="Kapacity pre rozdielne prostredia a zadania"
        description="Táto stránka zatiaľ neuvádza konkrétne referencie ani klientov. Zobrazuje typy projektov, ktoré vieme posúdiť a personálne zabezpečiť."
        code="WU / PROJECTS"
      >
        <Button href="/kontakt">Prebrať váš projekt</Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mb-10 border-l-2 border-amber-400 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-900">
            Všetky položky nižšie sú zámerne označené ako ukážkové. Reálne
            referencie, fotografie a mená klientov budú doplnené až po potvrdení
            súhlasu na zverejnenie.
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projectTypes.map((project, index) => (
              <Reveal key={project.title} delay={(index % 2) * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Máte podobný typ projektu?"
        description="Pošlite nám jeho základné parametre. Overíme možnosti a ozveme sa s návrhom ďalšieho postupu."
      />
    </>
  );
}
