import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import {
  businessBenefits,
  collaborationSteps,
  services,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Pre firmy",
  description:
    "Rýchle doplnenie kapacít, tímy podľa projektu a subdodávateľská spolupráca pre firmy.",
  openGraph: {
    title: "Pre firmy | WorkUnit s.r.o.",
    description:
      "Pracovné tímy pre firmy, ktoré potrebujú pružne doplniť projektové kapacity.",
  },
};

export default function ForCompaniesPage() {
  return (
    <>
      <PageHero
        eyebrow="Riešenia pre firmy"
        title="Keď projekt potrebuje ľudí, nie ďalšie komplikácie"
        description="Pomáhame firmám doplniť pracovné kapacity pre konkrétnu zákazku, sezónnu špičku alebo dlhodobejšiu spoluprácu."
        code="WU / B2B"
      >
        <Button href="/kontakt">Požiadať o tím</Button>
        <Button href="/sluzby" variant="secondary">
          Pozrieť služby
        </Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Kedy nás osloviť"
              title="Pri nedostatku kapacity aj pri novom projekte"
              description="WorkUnit môže byť vhodným partnerom vtedy, keď potrebujete zostaviť pracovný tím bez zbytočného odkladu, ale zároveň s jasne dohodnutými podmienkami."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Začínate novú zákazku",
                "Riešite sezónny nárast práce",
                "Potrebujete doplniť existujúci tím",
                "Hľadáte subdodávateľskú partiu",
                "Projekt je mimo vášho regiónu",
                "Potrebujete flexibilnú dĺžku spolupráce",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex min-h-24 items-start gap-4 border border-slate-200 bg-white p-5"
                >
                  <span className="font-mono text-xs font-bold text-sky-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-bold leading-6 text-navy">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Výhody"
              title="Riešenie prispôsobené prevádzkovej realite"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {businessBenefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 80}>
                <FeatureCard {...benefit} index={index} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="blueprint bg-ink py-20 text-white sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Čo vieme zabezpečiť"
              title="Tímy pre kľúčové prevádzkové oblasti"
              light
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-ink p-7 transition hover:bg-steel">
                <span className="font-mono text-xs text-cyan">{service.number}</span>
                <h3 className="mt-7 text-xl font-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Proces"
              title="Päť krokov k spusteniu spolupráce"
              align="center"
            />
            <ProcessSteps steps={collaborationSteps} />
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
