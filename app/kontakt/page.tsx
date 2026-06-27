import type { Metadata } from "next";
import { Mail, Phone, UserRound } from "lucide-react";
import { Button } from "@/components/Button";
import { ContactFormPlaceholder } from "@/components/ContactFormPlaceholder";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { company, contacts } from "@/lib/content";
import { workunitImages } from "@/lib/images";

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

const contactCards = [contacts.general, contacts.sales, contacts.hr] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Pošlite dopyt alebo napíšte priamo WorkUnit"
        description="Vyberte si kontakt podľa typu dopytu alebo vyplňte formulár. Správu následne nasmerujeme osobe, ktorá ju vie najrýchlejšie riešiť."
        code="WU / CONTACT"
        image={workunitImages.contactHero}
        imagePosition="center 45%"
      >
        <Button href={`mailto:${contacts.general.email}`}>Poslať e-mail</Button>
        <Button href={contacts.general.phones[0].href} variant="secondary">
          Zavolať WorkUnit
        </Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-sky-700">
                Kontakty podľa dopytu
              </p>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-navy sm:text-4xl">
                Kontaktujte správnu osobu
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Vyberte si kontakt podľa typu dopytu. Ak si nie ste istí, komu sa
                ozvať, napíšte nám cez formulár a správu nasmerujeme správnej osobe.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {contactCards.map((contact, index) => (
              <Reveal key={contact.role} delay={index * 90}>
                <ContactCard contact={contact} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-16">
          <Reveal>
            <aside>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-700">
                Firemné údaje
              </p>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-navy">
                {company.name}
              </h2>
              <address className="mt-8 space-y-5 not-italic">
                <ContactLine label="Adresa" value={company.address} />
                <ContactLine label="IČO" value={company.ico} />
                <ContactLine label="DIČ" value={company.dic} />
                <ContactLine label="IČ DPH" value={company.icDph} />
                <ContactLine
                  label="Hlavný e-mail"
                  value={contacts.footer.emails[0].display}
                  href={contacts.footer.emails[0].href}
                />
                <ContactLine
                  label="Obchodný e-mail"
                  value={contacts.footer.emails[1].display}
                  href={contacts.footer.emails[1].href}
                />
                <ContactLine
                  label="Hlavný telefón"
                  value={contacts.footer.phone.display}
                  href={contacts.footer.phone.href}
                />
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

    </>
  );
}

function ContactCard({ contact }: { contact: (typeof contactCards)[number] }) {
  return (
    <article className="group flex h-full flex-col border border-slate-200 bg-white p-7 shadow-lift transition duration-300 hover:-translate-y-1 hover:border-cyan/70">
      <div className="mb-7 flex items-center gap-4">
        <span className="grid size-12 place-items-center bg-mist text-sky-700 transition group-hover:bg-cyan group-hover:text-white">
          <UserRound aria-hidden="true" size={22} />
        </span>
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Kontakt
          </p>
          <h3 className="mt-1 text-xl font-black tracking-[-0.03em] text-navy">
            {contact.role}
          </h3>
        </div>
      </div>

      <p className="text-sm leading-7 text-slate-600">{contact.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {contact.uses.map((use) => (
          <span
            key={use}
            className="border border-slate-200 bg-mist px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600"
          >
            {use}
          </span>
        ))}
      </div>

      <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">
        {contact.email ? (
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 text-sm font-semibold text-navy transition hover:text-sky-700"
          >
            <Mail aria-hidden="true" size={17} className="text-sky-700" />
            {contact.email}
          </a>
        ) : null}

        {contact.phones.map((phone) => (
          <a
            key={phone.href}
            href={phone.href}
            className="flex items-center gap-3 text-sm font-semibold text-navy transition hover:text-sky-700"
          >
            <Phone aria-hidden="true" size={17} className="text-sky-700" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              {phone.label}
            </span>
            {phone.display}
          </a>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-7">
        {contact.email ? (
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex min-h-10 items-center justify-center bg-navy px-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
          >
            Poslať e-mail
          </a>
        ) : null}
        {contact.phones.map((phone) => (
          <a
            key={`${phone.href}-cta`}
            href={phone.href}
            className="inline-flex min-h-10 items-center justify-center border border-slate-300 px-4 text-[10px] font-bold uppercase tracking-[0.14em] text-navy transition hover:border-cyan hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
          >
            {contact.role === "General Manager"
              ? `Zavolať ${phone.label}`
              : "Zavolať"}
          </a>
        ))}
      </div>
    </article>
  );
}

function ContactLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="border-b border-slate-200 pb-5">
      <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </span>
      <span className="mt-2 block text-sm font-semibold text-navy">
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
