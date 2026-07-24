import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";

type ServiceDetailLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  items: string[];
  cooperation: string;
  code: string;
};

export function ServiceDetailLayout({
  eyebrow,
  title,
  description,
  intro,
  items,
  cooperation,
  code,
}: ServiceDetailLayoutProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} code={code}>
        <Button href="/kontakt">Prebrať váš projekt</Button>
        <Button href="/sluzby" variant="secondary">
          Všetky služby
        </Button>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Rozsah služby"
              title="Tím nastavený podľa reálnej potreby projektu"
              description={intro}
            />
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex min-h-16 items-center gap-4 border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-navy"
                >
                  <span className="grid size-7 shrink-0 place-items-center bg-mist text-sky-700">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <VisualPlaceholder
              label={`Budúca fotografia – ${title.toLowerCase()}`}
              code={code}
              className="min-h-[440px] shadow-lift"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-20">
        <Container className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-700">
              Model spolupráce
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-navy sm:text-4xl">
              Krátkodobé aj dlhodobé riešenia
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              {cooperation}
            </p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
