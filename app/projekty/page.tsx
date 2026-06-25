import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionHeader } from "@/components/SectionHeader";
import { projectTypes } from "@/lib/content";
import { workunitImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Projekty a referencie",
  description:
    "Anonymizované projektové karty a pripravená štruktúra pre budúce referencie WorkUnit.",
  openGraph: {
    title: "Projekty a referencie | WorkUnit s.r.o.",
    description:
      "Prípadové štúdie a referencie budú doplnené po schválení klientom.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projekty a skúsenosti"
        title="Referencie pripravené bez vymýšľania klientov"
        description="Konkrétne názvy klientov, logá, fotky a čísla zatiaľ nie sú dodané. Stránka preto používa anonymizované karty a jasné označenie, čo bude doplnené."
        code="WU / CASES"
        image={workunitImages.projectsHero}
        imageLabel="Projekty"
        imageCaption="Ilustračný vizuál koordinácie pracovného tímu na projekte."
        imagePosition="center 42%"
      >
        <Button href="/kontakt">Dopyt na podobný projekt</Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mb-10 border-l-2 border-cyan bg-mist px-5 py-4 text-sm leading-6 text-slate-700">
            Táto verzia zámerne nepoužíva mená klientov, logá ani konkrétne čísla.
            Po schválení referencií sa doplnia reálne prípadové štúdie, fotky a
            výsledky projektov.
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

      <section className="bg-mist py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionHeader
                eyebrow="Budúce dôkazy"
                title="Miesto pre logá klientov"
                description="Klient v dotazníku uviedol, že referencie, projekty, logá a fotky existujú, no v tomto zadaní ešte nie sú dodané."
              />
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="grid min-h-24 place-items-center border border-slate-200 bg-white text-center font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400"
                  >
                    Logo klienta
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ResponsiveImage
              image={workunitImages.projectProof}
              label="Koordinácia a podklady"
              caption="Ilustračný vizuál pre budúce prípadové štúdie a schválené referencie."
              sizes="(min-width: 1024px) 50vw, 100vw"
              objectPosition="center 45%"
              overlay
              className="min-h-[420px]"
            />
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Máte projekt, ktorý potrebuje pracovný tím?"
        description="Pošlite typ práce, krajinu, počet pracovníkov a očakávaný termín. WorkUnit preverí dostupnosť a možnosti tímu."
      />
    </>
  );
}
