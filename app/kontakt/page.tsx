import type { Metadata } from "next";
import { ContactFormPlaceholder } from "@/components/ContactFormPlaceholder";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte WorkUnit s.r.o. a pošlite základné informácie o požadovanom pracovnom tíme alebo subdodávke.",
  openGraph: {
    title: "Kontakt | WorkUnit s.r.o.",
    description:
      "Nezáväzný dopyt na pracovný tím alebo subdodávateľskú spoluprácu.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Povedzte nám, aký tím potrebuje váš projekt"
        description="Čím konkrétnejšie zadanie pošlete, tým presnejšie vieme posúdiť možnosti, termín a ďalší postup."
        code="WU / CONTACT"
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-16">
          <Reveal>
            <aside>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-700">
                Kontaktné údaje
              </p>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-navy">
                WorkUnit s.r.o.
              </h2>
              <address className="mt-8 space-y-5 not-italic">
                <ContactLine label="Adresa" value="Pod Juhom 7666/1, 911 01 Trenčín" />
                <ContactLine label="IČO" value="54883288" />
                <ContactLine label="Telefón" value="Doplniť pred spustením" placeholder />
                <ContactLine label="E-mail" value="Doplniť pred spustením" placeholder />
              </address>
              <div className="mt-10 border border-slate-200 bg-mist p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy">
                  Užitočné informácie k dopytu
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Typ prác, počet ľudí, miesto realizácie, termín nástupu, trvanie
                  projektu a požadované vybavenie.
                </p>
              </div>
            </aside>
          </Reveal>
          <Reveal delay={100}>
            <ContactFormPlaceholder />
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-10">
        <Container>
          <div
            className="blueprint relative grid min-h-80 place-items-center overflow-hidden bg-steel text-center text-white"
            role="img"
            aria-label="Placeholder mapy sídla WorkUnit v Trenčíne"
          >
            <div className="absolute inset-0 bg-hero-radial" />
            <div className="relative">
              <span className="mx-auto grid size-14 place-items-center border border-cyan text-2xl text-cyan">
                +
              </span>
              <h2 className="mt-5 text-xl font-black">Mapový podklad bude doplnený</h2>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Pod Juhom 7666/1 · Trenčín
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactLine({
  label,
  value,
  placeholder = false,
}: {
  label: string;
  value: string;
  placeholder?: boolean;
}) {
  return (
    <div className="border-b border-slate-200 pb-5">
      <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </dt>
      <dd className={`mt-2 text-sm font-semibold ${placeholder ? "text-amber-700" : "text-navy"}`}>
        {value}
      </dd>
    </div>
  );
}
