import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionHeader } from "@/components/SectionHeader";
import { collaborationSteps, services } from "@/lib/content";
import { workunitImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Služby",
  description:
    "Prehľad služieb WorkUnit: stavebníctvo, skladová logistika a výroba na jednej stránke.",
  openGraph: {
    title: "Služby | WorkUnit s.r.o.",
    description:
      "Pracovné tímy a subdodávateľské služby pre stavebné, logistické a výrobné projekty.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Služby"
        title="Pracovné tímy podľa projektu, profesie a krajiny"
        description="WorkUnit dodáva najmä ľudí a pracovné tímy. V niektorých prípadoch môže ísť aj o prevzatie časti realizácie projektu podľa dohody, nie však o generálne dodávateľstvo."
        code="WU / SERVICES"
        image={workunitImages.servicesHero}
        imagePosition="center 45%"
      >
        <Button href="/kontakt">Potrebujem pracovný tím</Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Prehľad služieb"
              title="Jedna stránka pre všetky hlavné oblasti"
              description="Klient v dotazníku potvrdil, že služby majú byť prehľadne na jednej stránke. Stavebníctvo je obchodne najdôležitejšia služba."
            />
          </Reveal>

          <div className="mt-12 space-y-10">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 80}>
                <section
                  id={service.id}
                  className={`scroll-mt-28 overflow-hidden border border-slate-200 bg-white shadow-lift ${
                    service.id === "stavebnictvo" ? "lg:grid lg:grid-cols-[.9fr_1.1fr]" : ""
                  }`}
                >
                  {service.id === "stavebnictvo" ? (
                    <ResponsiveImage
                      image={workunitImages.construction}
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      objectPosition="center 45%"
                      overlay
                      className="min-h-[420px] border-0 shadow-none"
                    />
                  ) : null}
                  <div className="p-7 sm:p-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
                        {service.number}
                      </span>
                      <span className="border border-slate-200 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                        {service.eyebrow}
                      </span>
                    </div>
                    <h2 className="mt-7 text-3xl font-black tracking-[-0.05em] text-navy sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                      {service.description}
                    </p>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex min-h-14 items-center gap-3 border border-slate-200 bg-mist/50 px-4 py-3 text-sm font-semibold text-navy"
                        >
                          <span className="size-1.5 shrink-0 bg-cyan" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {service.note ? (
                      <p className="mt-6 border-l-2 border-cyan bg-mist px-4 py-3 text-sm leading-7 text-slate-700">
                        {service.note}
                      </p>
                    ) : null}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="proces" className="scroll-mt-24 bg-mist py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Ako prebieha spolupráca"
              title="Jasný postup pred nasadením tímu"
              description="Klientovi stačí pripraviť typ práce, miesto projektu, termín, počet pracovníkov, požadované profesie, očakávanú dĺžku spolupráce a administratívne požiadavky."
              align="center"
            />
          </Reveal>
          <Reveal delay={100}>
            <ProcessSteps steps={collaborationSteps} />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="border border-slate-200 bg-white p-8 shadow-lift">
              <h2 className="text-2xl font-black tracking-[-0.04em] text-navy">
                Čo vieme zabezpečiť
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Pracovníkov, pracovné tímy, stabilných spolupracovníkov,
                dopravu podľa možností tímu alebo pracovné dodávky a základné AKU
                náradie. Každá partia má zodpovednú osobu, ktorá pomáha s organizáciou.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="border border-slate-200 bg-white p-8 shadow-lift">
              <h2 className="text-2xl font-black tracking-[-0.04em] text-navy">
                Čo potrebujeme od klienta
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Zmluvu alebo objednávku, projektové zadanie, krajinu a miesto
                výkonu, termín, počet pracovníkov, profesie a administratívne
                požiadavky podľa konkrétnej krajiny.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection title="Potrebujete tím pre dlhodobý projekt?" />
    </>
  );
}
