import type { Metadata } from "next";
import { CheckCircle2, Globe2, UserRound, UsersRound } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { RecruitmentForm } from "@/components/RecruitmentForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { contacts } from "@/lib/content";
import { workunitImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Hľadám zákazku",
  description:
    "Hľadáte zákazku v stavebníctve, logistike alebo výrobe? Pošlite svoje údaje WorkUnit s.r.o. a ozveme sa vám pri vhodnej príležitosti.",
  openGraph: {
    title: "Hľadám zákazku | WorkUnit s.r.o.",
    description:
      "Hľadáte zákazku v stavebníctve, logistike alebo výrobe? Pošlite svoje údaje WorkUnit s.r.o. a ozveme sa vám pri vhodnej príležitosti.",
  },
};

const audienceCards = [
  {
    title: "Jednotlivci",
    description:
      "Máte skúsenosti v stavebníctve, logistike alebo výrobe a hľadáte novú zákazku? Pošlite nám svoje údaje.",
    icon: UserRound,
  },
  {
    title: "Pracovné partie",
    description:
      "Ak pracujete ako zohratá partia, môžete nám poslať informácie o tíme, profesiách a dostupnosti.",
    icon: UsersRound,
  },
  {
    title: "Živnostníci",
    description:
      "Spolupracujeme aj so živnostníkmi podľa aktuálnych projektov a požiadaviek zákaziek.",
    icon: CheckCircle2,
  },
  {
    title: "Práca v zahraničí",
    description:
      "Zákazky sa môžu týkať Slovenska, Česka, Nemecka, Rakúska, Holandska a ďalších krajín podľa aktuálnych možností.",
    icon: Globe2,
  },
] as const;

const professions = [
  "izolatéri plochých a šikmých striech",
  "klampiari",
  "murári",
  "maliari",
  "betonári",
  "montážnici",
  "pomocní pracovníci",
  "skladníci",
  "VZV pracovníci",
  "pracovníci do výroby",
  "iné profesie podľa aktuálnych zákaziek",
] as const;

const workerSteps = [
  {
    title: "Vyplníte formulár",
    description:
      "Pošlete nám základné údaje, profesiu, dostupnosť, preferované krajiny a skúsenosti.",
  },
  {
    title: "Pozrieme si vaše skúsenosti",
    description:
      "Údaje posúdime podľa aktuálnych projektov, požiadaviek zákazky a dostupnosti tímov.",
  },
  {
    title: "Kontaktujeme vás pri vhodnej zákazke",
    description:
      "Ak sa objaví vhodná príležitosť, ozveme sa vám a prejdeme ďalšie detaily.",
  },
  {
    title: "Dohodneme ďalší postup",
    description:
      "Spoločne si potvrdíme podmienky, krajinu, termín, administratívu a organizáciu práce.",
  },
] as const;

export default function FindContractPage() {
  return (
    <>
      <PageHero
        eyebrow="Pre pracovníkov a partie"
        title="Hľadáte zákazku na Slovensku alebo v zahraničí?"
        description="WorkUnit spolupracuje s jednotlivcami aj pracovnými partiami pri stavebných, montážnych, logistických a výrobných projektoch. Vyplňte krátky formulár a ozveme sa vám pri vhodnej príležitosti."
        code="WU / HR"
        image={workunitImages.servicesHero}
        imagePosition="center 45%"
      >
        <Button href="#formular">Vyplniť formulár</Button>
        <Button href={`mailto:${contacts.hr.email}`} variant="secondary">
          Kontaktovať HR
        </Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Pre koho je stránka určená"
              title="Pre ľudí a tímy, ktoré chcú byť v kontakte pri nových zákazkách"
              description="Nejde o automatické prijatie. Vaše údaje nám pomôžu ozvať sa vtedy, keď budeme mať vhodnú zákazku podľa profesie, krajiny a dostupnosti."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audienceCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <Reveal key={card.title} delay={index * 80}>
                  <article className="group h-full border border-slate-200 bg-white p-7 shadow-lift transition duration-300 hover:-translate-y-1 hover:border-cyan/70">
                    <span className="grid size-12 place-items-center bg-mist text-sky-700 transition group-hover:bg-cyan group-hover:text-white">
                      <Icon aria-hidden="true" size={22} />
                    </span>
                    <h2 className="mt-7 text-xl font-black tracking-[-0.03em] text-navy">
                      {card.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {card.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Aké profesie hľadáme"
              title="Najčastejšie riešime stavebné, montážne, logistické a výrobné profesie"
              description="Ak vaša profesia nie je v zozname, môžete nám aj tak poslať formulár. Ozveme sa vám, ak budeme mať vhodnú príležitosť."
            />
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {professions.map((profession) => (
                <li
                  key={profession}
                  className="flex min-h-14 items-center gap-3 border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-navy shadow-sm"
                >
                  <span className="size-1.5 shrink-0 bg-cyan" aria-hidden="true" />
                  {profession}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Ako to funguje"
              title="Jednoduchý postup bez nereálnych sľubov"
              description="Zaradenie do kontaktnej databázy znamená, že vás vieme osloviť pri vhodnej príležitosti podľa aktuálnych projektov a požiadaviek zákaziek."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workerSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <article className="relative h-full border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan/70 hover:shadow-lift">
                  <span className="grid size-11 place-items-center bg-mist font-mono text-xs font-bold text-sky-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-7 text-xl font-black tracking-[-0.03em] text-navy">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="formular" className="scroll-mt-24 bg-mist py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <Reveal>
            <aside className="lg:sticky lg:top-28">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-sky-700">
                Kontaktný formulár pre pracovníkov
              </p>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-navy sm:text-4xl">
                Pošlite nám údaje o sebe alebo o pracovnej partii
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Formulár je určený pre pracovníkov, živnostníkov a pracovné tímy.
                Správa bude smerovaná na HR kontakt WorkUnit.
              </p>
              <div className="mt-8 space-y-3 border border-slate-200 bg-white p-6 shadow-lift">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy">
                  HR Manager
                </p>
                <a
                  href={`mailto:${contacts.hr.email}`}
                  className="block text-sm font-semibold text-sky-700 transition hover:text-navy"
                >
                  {contacts.hr.email}
                </a>
                <a
                  href={contacts.hr.phones[0].href}
                  className="block text-sm font-semibold text-sky-700 transition hover:text-navy"
                >
                  {contacts.hr.phones[0].display}
                </a>
              </div>
            </aside>
          </Reveal>
          <Reveal delay={100}>
            <RecruitmentForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
