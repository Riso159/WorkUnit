import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ContactFormPlaceholder } from "@/components/ContactFormPlaceholder";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { workerAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pre pracovníkov",
  description:
    "Možnosti spolupráce pre pracovníkov, živnostníkov a pracovné tímy podľa aktuálnych projektov.",
  openGraph: {
    title: "Pre pracovníkov | WorkUnit s.r.o.",
    description:
      "Kontakt pre pracovníkov a živnostníkov so záujmom o aktuálne projektové možnosti.",
  },
};

export default function ForWorkersPage() {
  return (
    <>
      <PageHero
        eyebrow="Pre pracovníkov a živnostníkov"
        title="Hľadáte zákazku alebo pracovnú príležitosť?"
        description="WorkUnit spolupracuje s jednotlivcami aj pracovnými tímami podľa potrieb a podmienok aktuálnych projektov."
        code="WU / PEOPLE"
      >
        <Button href="#formular">Kontaktovať WorkUnit</Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Oblasti spolupráce"
              title="Skúsenosti, ktoré môžu nájsť uplatnenie"
              description="Aktuálne možnosti závisia od projektov, lokality, požadovaných skúseností a termínu. Konkrétnu zákazku ani nástup preto nevieme sľúbiť vopred."
            />
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {workerAreas.map((area, index) => (
                <li
                  key={area}
                  className="flex min-h-16 items-center gap-4 border border-slate-200 px-4 py-3 text-sm font-bold text-navy"
                >
                  <span className="font-mono text-xs text-sky-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <VisualPlaceholder
              label="Budúca fotografia pracovníkov"
              code="WU / CREW"
              className="min-h-[460px] shadow-lift"
            />
          </Reveal>
        </Container>
      </section>

      <section id="formular" className="scroll-mt-24 bg-mist py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-700">
                Predbežný kontakt
              </p>
              <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] text-navy sm:text-4xl">
                Dajte nám o sebe vedieť
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Napíšte nám svoje zameranie, skúsenosti, dostupnosť a preferovanú
                lokalitu. Ozveme sa v prípade vhodnej možnosti spolupráce.
              </p>
              <div className="mt-7 border-l-2 border-amber-400 bg-amber-50 px-4 py-3 text-xs leading-6 text-amber-900">
                Formulár je zatiaľ iba vizuálny prototyp a údaje neodosiela.
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ContactFormPlaceholder compact />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
