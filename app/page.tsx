import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CoverageSection } from "@/components/CoverageSection";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { StatCard } from "@/components/StatCard";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import {
  businessBenefits,
  collaborationSteps,
  serviceSummary,
  targetCustomers,
  trustStats,
} from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute: "WorkUnit s.r.o. | Pracovné tímy a subdodávateľské služby",
  },
  description:
    "WorkUnit s.r.o. zabezpečuje pracovné tímy a subdodávateľské služby pre stavebné, logistické a výrobné projekty na Slovensku a v EÚ.",
  openGraph: {
    title: "WorkUnit s.r.o. | Pracovné tímy a subdodávateľské služby",
    description:
      "Stabilní spolupracovníci a pracovné tímy pre projekty v SK, CZ, AT, DE a NL.",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="blueprint relative min-h-[760px] overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute right-[-8%] top-[8%] hidden h-[84%] w-[45%] border border-white/10 bg-white/[0.02] lg:block" />
        <Container className="relative grid min-h-[760px] items-center gap-12 py-20 lg:grid-cols-[1.2fr_.8fr]">
          <div className="max-w-4xl">
            <div className="hero-enter mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-cyan">
              <span className="h-px w-9 bg-cyan" />
              Stavebníctvo · Logistika · Výroba
            </div>
            <h1 className="hero-enter hero-delay-1 text-balance text-5xl font-black leading-[.98] tracking-[-0.06em] sm:text-6xl lg:text-[74px]">
              Pracovné tímy pre stavebné, logistické a výrobné projekty
            </h1>
            <p className="hero-enter hero-delay-2 mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              WorkUnit s.r.o. zabezpečuje subdodávateľské služby a stabilných
              spolupracovníkov pre firmy na Slovensku, v Nemecku, Česku,
              Rakúsku, Holandsku a ďalších krajinách EÚ.
            </p>
            <div className="hero-enter hero-delay-3 mt-10 flex flex-wrap gap-3">
              <Button href="/kontakt">Kontaktovať WorkUnit</Button>
              <Button href="/sluzby" variant="secondary">
                Pozrieť služby
              </Button>
            </div>
          </div>
          <div className="hero-enter hero-delay-3 relative hidden lg:block">
            <div className="ml-auto w-[92%]">
              <VisualPlaceholder
                label="Placeholder pre reálnu fotografiu tímu, vozidiel alebo projektu"
                code="WU / B2B"
                className="min-h-[470px] shadow-glow"
              />
            </div>
            <div className="absolute -bottom-6 left-0 bg-cyan px-6 py-5 text-white">
              <span className="block text-3xl font-black tracking-[-0.05em]">5–7</span>
              <span className="mt-1 block max-w-28 text-[10px] font-bold uppercase leading-4 tracking-[0.12em]">
                dní pri bežnej zákazke
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative z-10 -mt-8 pb-20">
        <Container>
          <div className="grid border border-slate-200 bg-white shadow-lift md:grid-cols-4">
            {trustStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 pt-8 sm:pb-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Pre koho pracujeme"
              title="Pre firmy, ktoré potrebujú kapacity bez chaosu"
              description="Typickým kontaktom je stavbyvedúci alebo rozhodovateľ, ktorý rieši sezónne výkyvy, nový projekt alebo urgentný termín."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {targetCustomers.map((customer, index) => (
              <Reveal key={customer} delay={(index % 3) * 80}>
                <article className="flex min-h-24 items-center gap-4 border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-cyan hover:shadow-lift">
                  <span className="font-mono text-xs font-bold text-sky-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-black uppercase leading-6 tracking-[0.08em] text-navy">
                    {customer}
                  </h3>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Služby v skratke"
              title="Najsilnejšia oblasť je stavebníctvo"
              description="Služby sú podľa dotazníka sústredené na jednu prehľadnú stránku bez samostatných detailných podstránok."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {serviceSummary.map((service, index) => (
              <Reveal key={service.title} delay={index * 90}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Proces spolupráce"
              title="Od prvého kontaktu po potvrdené šichtovky"
              description="Proces je nastavený tak, aby zákazník vedel, aké informácie pripraviť a ako bude prebiehať komunikácia počas projektu."
              align="center"
            />
          </Reveal>
          <Reveal delay={100}>
            <ProcessSteps steps={collaborationSteps} />
          </Reveal>
        </Container>
      </section>

      <section className="blueprint bg-ink py-20 text-white sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Dôveryhodnostné prvky"
              title="Praktické zázemie a stabilný model spolupráce"
              description="Komunikujeme len fakty z dotazníka: 2 pracovné dodávky Renault Master, základné AKU náradie, typický rozsah 1–10 pracovníkov a skúsenosti najmä s Nemeckom a Českom."
              light
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {businessBenefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 80}>
                <FeatureCard {...benefit} index={index} dark />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CoverageSection />
      <CTASection />
    </>
  );
}
