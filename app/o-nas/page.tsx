import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CoverageSection } from "@/components/CoverageSection";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";
import { companyValues, timeline } from "@/lib/content";
import { workunitImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Príbeh WorkUnit s.r.o., zázemie firmy, hodnoty a krajiny pôsobenia.",
  openGraph: {
    title: "O nás | WorkUnit s.r.o.",
    description:
      "WorkUnit vyrástol z praxe v stavebníctve a z reálnych projektov.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O spoločnosti"
        title="Firma, ktorá vyrástla z praxe v stavebníctve"
        description="WorkUnit nevznikol bez skúseností. Vyrástol z reálnych projektov, kde rozhoduje kvalita práce, spoľahlivosť a schopnosť dodať ľudí v správnom čase."
        code="WU / ABOUT"
      >
        <Button href="/kontakt">Kontaktovať WorkUnit</Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <ResponsiveImage
              image={workunitImages.aboutHero}
              label="Ilustračný vizuál"
              caption="Pracovný tím a koordinácia pri stavebnom zázemí."
              sizes="(min-width: 1024px) 50vw, 100vw"
              objectPosition="center 42%"
              overlay
              className="min-h-[480px]"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeader
              eyebrow="Kto je WorkUnit"
              title="Stabilní spolupracovníci a subdodávatelia podľa zákazky"
              description="Firma funguje kombinovaným modelom vlastného personálu, stabilných spolupracovníkov a subdodávateľov podľa typu projektu."
            />
            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                Konateľ Michael Krennert mal pred založením firmy skúsenosti ako
                izolatér plochých striech. Práve stavebníctvo, najmä izolácie
                plochých a šikmých striech, tvorilo prirodzený základ firmy.
              </p>
              <p>
                Firma sa postupne rozvíjala, získavala zákazky a rozširovala
                spolupráce. Komunikácia je vecná, bez prehnaných sľubov: dôležitá
                je kvalita práce, férovosť a dlhodobá stabilita.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Hodnoty"
              title="Kvalita, spoľahlivosť a férové nastavenie"
              description="Hodnoty vychádzajú priamo z vyplneného dotazníka klienta."
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
              eyebrow="Zázemie"
              title="Praktické vybavenie pre projekty"
              description="WorkUnit komunikuje iba potvrdené fakty: 2 pracovné dodávky Renault Master, základné AKU náradie, stabilní spolupracovníci a tímy s vedúcim partie."
            />
          </Reveal>
          <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[.95fr_1.05fr]">
            <Reveal>
              <ResponsiveImage
                image={workunitImages.aboutFacilities}
                label="Technické zázemie"
                caption="Ilustračný vizuál pracovného vybavenia pre stavebné a montážne zákazky."
                sizes="(min-width: 1024px) 45vw, 100vw"
                objectPosition="center 48%"
                overlay
                className="h-full min-h-[430px]"
              />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                "2 pracovné dodávky Renault Master",
                "základné AKU náradie",
                "pracovníci s vlastnými OOPP",
                "v každej partii zodpovedná osoba",
              ].map((item, index) => (
                <Reveal key={item} delay={index * 80}>
                  <article className="min-h-40 border border-slate-200 bg-white p-6 shadow-lift">
                    <span className="font-mono text-xs font-bold text-sky-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-6 text-lg font-black tracking-[-0.03em] text-navy">
                      {item}
                    </h2>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Časová os"
              title="Od stavebnej praxe po projekty v zahraničí"
            />
            <Timeline items={timeline} />
          </Reveal>
        </Container>
      </section>

      <CoverageSection />
      <CTASection />
    </>
  );
}
