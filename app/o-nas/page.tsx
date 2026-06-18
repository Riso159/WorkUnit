import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { companyValues } from "@/lib/content";

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Spoznajte WorkUnit s.r.o., slovenskú firmu pre personálne a subdodávateľské riešenia na Slovensku a v EÚ.",
  openGraph: {
    title: "O nás | WorkUnit s.r.o.",
    description:
      "Praktické personálne a subdodávateľské riešenia od slovenskej spoločnosti založenej v roku 2022.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O spoločnosti"
        title="Pracovné tímy postavené na praktickom prístupe"
        description="WorkUnit s.r.o. je slovenská spoločnosť založená v roku 2022. Firmám pomáha doplniť kapacity pre projekty doma aj v rámci EÚ."
        code="WU / ABOUT"
      >
        <Button href="/kontakt">Kontaktovať nás</Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <VisualPlaceholder
              label="Budúca fotografia tímu alebo kancelárie"
              code="WU / TEAM"
              className="min-h-[480px] shadow-lift"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeader
              eyebrow="Kto sme"
              title="Partner pre firmy, ktoré potrebujú pružne reagovať"
              description="Zabezpečujeme pracovné tímy pre stavebníctvo, skladovú logistiku, výrobu, montážne a pomocné práce. Disponujeme vlastným personálom, vozidlami a základným ručným náradím."
            />
            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                Pomáhame firmám pri krátkodobom nedostatku kapacity aj pri
                dlhodobejších projektoch. Rozsah spolupráce vždy nastavujeme podľa
                konkrétnej zákazky a aktuálnych možností.
              </p>
              <p>
                Ubytovanie, dopravu a technické podmienky riešime individuálne podľa
                projektu a dohody so zákazníkom.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Naše hodnoty"
              title="Jednoducho, otvorene a realizovateľne"
              description="Našou ambíciou je dobre pochopiť zadanie a nastaviť spoluprácu, ktorá funguje aj v každodennej prevádzke."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {companyValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 70}>
                <FeatureCard {...value} index={index} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Časová os"
              title="Od založenia k cezhraničným možnostiam"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="border-l-4 border-cyan bg-navy p-8 text-white">
                <span className="font-mono text-sm text-cyan">2022</span>
                <h3 className="mt-5 text-2xl font-black tracking-[-0.04em]">
                  Založenie WorkUnit s.r.o.
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Začiatok budovania personálnych a subdodávateľských služieb.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="border-l-4 border-sky-700 bg-mist p-8">
                <span className="font-mono text-sm text-sky-700">DNES</span>
                <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-navy">
                  Riešenia pre Slovensko a EÚ
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Tímy pre stavebníctvo, logistiku, výrobu, montáž a pomocné práce.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
