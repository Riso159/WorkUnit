import type { Metadata } from "next";
import { CalendarDays, Clock3, ShieldCheck, UsersRound } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CoverageSection } from "@/components/CoverageSection";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroImagePlaceholder } from "@/components/HeroImagePlaceholder";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import {
  businessBenefits,
  collaborationSteps,
  serviceSummary,
  targetCustomers,
  trustStats,
} from "@/lib/content";
import { workunitImages } from "@/lib/images";

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

const heroTrustIcons = [CalendarDays, Clock3, UsersRound, ShieldCheck];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <HeroImagePlaceholder
          image={workunitImages.homepageHero}
          priority
          objectPosition="center 45%"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,18,.94)_0%,rgba(7,17,31,.82)_36%,rgba(7,17,31,.42)_66%,rgba(7,17,31,.22)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,18,.04)_0%,rgba(3,8,18,.12)_52%,rgba(3,8,18,.86)_100%)]" />
        <Container className="relative flex min-h-[780px] flex-col justify-end pb-8 pt-24 sm:pb-10 sm:pt-32 lg:min-h-[calc(100vh-76px)] lg:pt-36">
          <div className="max-w-4xl pb-8 lg:pb-12">
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
          <div className="hero-enter hero-delay-3 grid gap-3 border border-white/15 bg-slate-950/35 p-2 shadow-[0_24px_90px_rgba(0,0,0,.28)] backdrop-blur-md sm:grid-cols-2 xl:grid-cols-4">
            {trustStats.map((stat, index) => {
              const Icon = heroTrustIcons[index] ?? ShieldCheck;

              return (
                <article
                  key={stat.label}
                  className="group flex min-h-24 items-center gap-4 border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:bg-white/[0.075]"
                >
                  <span className="grid size-12 shrink-0 place-items-center border border-white/15 bg-slate-950/30 text-cyan transition group-hover:border-cyan/70 group-hover:bg-cyan group-hover:text-white">
                    <Icon aria-hidden="true" size={24} strokeWidth={2.1} />
                  </span>
                  <span>
                    <span className="block text-base font-black leading-6 tracking-[-0.02em] text-white">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-6 text-slate-300">
                      {stat.label}
                    </span>
                  </span>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="pb-20 pt-20 sm:pb-28 sm:pt-28">
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
