import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/lib/content";
import { workunitImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Odpovede na časté otázky o pracovníkoch, tímoch, krajinách, cene, ubytovaní a procese spolupráce.",
  openGraph: {
    title: "FAQ | WorkUnit s.r.o.",
    description: "Časté otázky o pracovných tímoch a spolupráci s WorkUnit.",
  },
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Časté otázky"
        title="Odpovede na otázky pred prvým dopytom"
        description="Konkrétne podmienky vždy závisia od projektu, krajiny, profesie a trvania spolupráce. Tu sú vecné odpovede podľa klientského dotazníka."
        code="WU / FAQ"
        image={workunitImages.faqHero}
        imageLabel="FAQ"
        imageCaption="Ilustračný vizuál ku koordinácii a otázkam pred štartom projektu."
        imagePosition="center 45%"
      >
        <Button href="/kontakt">Mám ďalšiu otázku</Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="max-w-5xl">
          <Reveal>
            <FAQAccordion items={faqs} />
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Nenašli ste odpoveď?"
        description="Napíšte nám základné parametre projektu alebo otázku. V ďalšej fáze webu bude formulár napojený na priame odosielanie."
        buttonLabel="Kontaktovať WorkUnit"
      />
    </>
  );
}
