import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ContactFormPlaceholder } from "@/components/ContactFormPlaceholder";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte WorkUnit s.r.o. telefonicky, e-mailom alebo cez dopytový formulár.",
  openGraph: {
    title: "Kontakt | WorkUnit s.r.o.",
    description:
      "Dopyt na pracovný tím alebo subdodávateľskú spoluprácu pre B2B projekty.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Pošlite dopyt alebo napíšte priamo WorkUnit"
        description="Najrýchlejší prvý krok je telefonát alebo e-mail. Telefón zatiaľ nie je dodaný, preto je pripravený placeholder a reálne e-mailové adresy z dotazníka."
        code="WU / CONTACT"
      >
        <Button href={`mailto:${company.emailPrimary}`}>Poslať e-mail</Button>
        <Button href="#" variant="secondary">
          Telefón doplniť
        </Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-16">
          <Reveal>
            <aside>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-700">
                Kontaktné údaje
              </p>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-navy">
                {company.name}
              </h2>
              <address className="mt-8 space-y-5 not-italic">
                <ContactLine label="Adresa" value={company.address} />
                <ContactLine label="IČO" value={company.ico} />
                <ContactLine label="DIČ" value={company.dic} />
                <ContactLine label="IČ DPH" value={company.icDph} />
                <ContactLine label="E-mail" value={company.emailPrimary} href={`mailto:${company.emailPrimary}`} />
                <ContactLine label="Obchodný e-mail" value={company.emailSales} href={`mailto:${company.emailSales}`} />
                <ContactLine label="Telefón" value="Placeholder – doplniť pred spustením" placeholder />
              </address>
              <div className="mt-10 border border-slate-200 bg-mist p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy">
                  Čo uviesť v dopyte
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Typ práce, miesto projektu, termín začiatku, počet pracovníkov,
                  požadované profesie, očakávanú dĺžku spolupráce a administratívne
                  požiadavky.
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
            aria-label="Geografický placeholder namiesto mapy"
          >
            <div className="absolute inset-0 bg-hero-radial" />
            <div className="relative">
              <span className="mx-auto grid size-14 place-items-center border border-cyan text-2xl text-cyan">
                +
              </span>
              <h2 className="mt-5 text-xl font-black">Mapový podklad nie je prioritou tejto verzie</h2>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Kontaktný formulár · E-mail · Telefón placeholder
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
  href,
  placeholder = false,
}: {
  label: string;
  value: string;
  href?: string;
  placeholder?: boolean;
}) {
  return (
    <div className="border-b border-slate-200 pb-5">
      <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </span>
      <span className={`mt-2 block text-sm font-semibold ${placeholder ? "text-amber-700" : "text-navy"}`}>
        {href ? (
          <a href={href} className="transition hover:text-sky-700">
            {value}
          </a>
        ) : (
          value
        )}
      </span>
    </div>
  );
}
