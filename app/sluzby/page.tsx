import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Služby",
  description:
    "Pracovné tímy pre stavebníctvo, skladovú logistiku, výrobu, montážne a pomocné práce.",
  openGraph: {
    title: "Služby | WorkUnit s.r.o.",
    description:
      "Personálne a subdodávateľské tímy podľa potrieb vášho projektu.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Služby"
        title="Tímy pre prevádzku, stavbu aj priemyselný projekt"
        description="Rozsah a zloženie tímu nastavujeme podľa druhu práce, lokality, termínu a aktuálne dostupnej kapacity."
        code="WU / SERVICES"
      >
        <Button href="/kontakt">Potrebujem tím</Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 90}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
            <Reveal delay={180}>
              <div className="blueprint flex min-h-[320px] flex-col justify-between bg-navy p-8 text-white">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
                  Iný typ projektu?
                </span>
                <div>
                  <h2 className="text-2xl font-black tracking-[-0.04em]">
                    Prejdime vaše zadanie individuálne
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Ak váš projekt nezapadá do uvedených kategórií, pošlite nám jeho
                    základné parametre.
                  </p>
                  <div className="mt-7">
                    <Button href="/kontakt">Napísať nám</Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection title="Potrebujete pracovný tím pre projekt?" />
    </>
  );
}
