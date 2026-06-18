import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import {
  businessBenefits,
  collaborationSteps,
  services,
} from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute: "WorkUnit s.r.o. | Personálne a subdodávateľské riešenia",
  },
  description:
    "WorkUnit zabezpečuje pracovné tímy pre stavebníctvo, logistiku, výrobu a montáže na Slovensku aj v EÚ.",
  openGraph: {
    title: "WorkUnit s.r.o. | Personálne a subdodávateľské riešenia",
    description:
      "Spoľahlivé pracovné tímy pre vaše projekty na Slovensku aj v EÚ.",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="blueprint relative min-h-[760px] overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute right-[-8%] top-[8%] hidden h-[84%] w-[45%] border border-white/10 bg-white/[0.02] lg:block" />
        <div className="absolute right-[6%] top-[19%] hidden h-[62%] w-[32%] border border-cyan/20 lg:block" />
        <Container className="relative grid min-h-[760px] items-center gap-12 py-20 lg:grid-cols-[1.2fr_.8fr]">
          <div className="max-w-4xl">
            <div className="hero-enter mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-cyan">
              <span className="h-px w-9 bg-cyan" />
              Personál · Subdodávky · Slovensko a EÚ
            </div>
            <h1 className="hero-enter hero-delay-1 text-balance text-5xl font-black leading-[.98] tracking-[-0.06em] sm:text-6xl lg:text-[74px]">
              Spoľahlivé pracovné tímy pre vaše projekty na Slovensku aj v EÚ
            </h1>
            <p className="hero-enter hero-delay-2 mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              WorkUnit s.r.o. zabezpečuje personálne a subdodávateľské riešenia
              pre firmy v stavebníctve, logistike a výrobe.
            </p>
            <div className="hero-enter hero-delay-3 mt-10 flex flex-wrap gap-3">
              <Button href="/kontakt">Požiadať o tím</Button>
              <Button href="/o-nas" variant="secondary">
                Zistiť viac
              </Button>
            </div>
          </div>
          <div className="hero-enter hero-delay-3 relative hidden lg:block">
            <div className="ml-auto w-[92%]">
              <VisualPlaceholder
                label="Budúca fotografia pracovného tímu"
                code="WU / HERO 01"
                className="min-h-[470px] shadow-glow"
              />
            </div>
            <div className="absolute -bottom-6 left-0 bg-cyan px-6 py-5 text-ink">
              <span className="block text-3xl font-black tracking-[-0.05em]">1–2</span>
              <span className="mt-1 block max-w-28 text-[10px] font-bold uppercase leading-4 tracking-[0.12em]">
                týždne podľa kapacity
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative z-10 -mt-8 pb-20">
        <Container>
          <div className="grid border border-slate-200 bg-white shadow-lift md:grid-cols-3">
            {[
              ["2022", "Rok založenia spoločnosti"],
              ["1–2 týždne", "Orientačné dodanie podľa kapacity"],
              ["SK + EÚ", "Možnosť pôsobenia podľa projektu"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`px-7 py-7 ${
                  index < 2 ? "border-b border-slate-200 md:border-b-0 md:border-r" : ""
                }`}
              >
                <span className="text-2xl font-black tracking-[-0.04em] text-navy">
                  {value}
                </span>
                <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 pt-8 sm:pb-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Naše služby"
              title="Kapacita tam, kde ju váš projekt potrebuje"
              description="Zabezpečujeme pracovné tímy pre prevádzky a projekty s rozdielnym rozsahom, trvaním aj miestom realizácie."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <Reveal key={service.title} delay={index * 100}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/sluzby" variant="light">
              Pozrieť všetky služby
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Proces spolupráce"
              title="Od dopytu k pripravenému tímu"
              description="Jednoduchý proces, pri ktorom si najprv presne pomenujeme potrebu a až potom navrhneme realizovateľné riešenie."
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
              eyebrow="Prečo WorkUnit"
              title="Praktický partner pre meniace sa kapacitné potreby"
              description="Spoluprácu skladáme okolo projektu: jeho termínu, lokality, typu prác a reálnej dostupnosti pracovníkov."
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

      <CTASection />
    </>
  );
}
