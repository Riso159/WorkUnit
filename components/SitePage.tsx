import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Globe2,
  Mail,
  Phone,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { CoverageSection } from "@/components/CoverageSection";
import { CookiePreferences } from "@/components/CookiePreferences";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroImage } from "@/components/HeroImage";
import { LegalTextPage } from "@/components/LegalContent";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProjectCard } from "@/components/ProjectCard";
import { RecruitmentForm } from "@/components/RecruitmentForm";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Timeline } from "@/components/Timeline";
import { company, contacts } from "@/lib/content";
import { imageWithAlt } from "@/lib/images";
import { legalContent } from "@/lib/legal-content";
import { routeFor, type Locale, type PageId } from "@/lib/i18n";
import { siteContent } from "@/lib/site-content";

const heroTrustIcons = [CalendarDays, Clock3, UsersRound, ShieldCheck];
const audienceIcons = [UserRound, UsersRound, CheckCircle2, Globe2];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/_workunit_/" },
  { label: "Facebook", href: "https://www.facebook.com/WorkUnitsro" },
] as const;

export function SitePage({ locale, pageId }: { locale: Locale; pageId: PageId }) {
  return <div lang={locale}>{renderSitePage(locale, pageId)}</div>;
}

function renderSitePage(locale: Locale, pageId: PageId) {
  switch (pageId) {
    case "home":
      return <HomePage locale={locale} />;
    case "services":
      return <ServicesPage locale={locale} />;
    case "projects":
      return <ProjectsPage locale={locale} />;
    case "about":
      return <AboutPage locale={locale} />;
    case "faq":
      return <FaqPage locale={locale} />;
    case "contact":
      return <ContactPage locale={locale} />;
    case "recruitment":
      return <RecruitmentPage locale={locale} />;
    case "cookies":
      return <CookiesPage locale={locale} />;
    case "privacy":
      return <PrivacyPage locale={locale} />;
    case "thankYou":
      return <ThankYouPage locale={locale} worker={false} />;
    case "workerThankYou":
      return <ThankYouPage locale={locale} worker />;
  }
}

function HomePage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const copy = content.home;
  const serviceSummary = content.services.items.map((service) => ({
    number: service.number,
    title: service.title,
    description: service.description,
    href: routeFor(locale, "services", `#${service.id}`),
    tag: service.eyebrow,
  }));

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <HeroImage
          image={imageWithAlt("homepageHero", content.media.homepageHero)}
          priority
          objectPosition="center 45%"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,18,.94)_0%,rgba(7,17,31,.82)_36%,rgba(7,17,31,.42)_66%,rgba(7,17,31,.22)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,18,.04)_0%,rgba(3,8,18,.12)_52%,rgba(3,8,18,.86)_100%)]" />
        <Container className="relative flex min-h-[780px] flex-col justify-end pb-8 pt-24 sm:pb-10 sm:pt-32 lg:min-h-[calc(100vh-76px)] lg:pt-36">
          <div className="max-w-4xl pb-8 lg:pb-12">
            <div className="hero-enter mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-cyan">
              <span className="h-px w-9 bg-cyan" />
              {copy.hero.eyebrow}
            </div>
            <h1
              className={`hero-enter hero-delay-1 break-words text-balance font-black leading-[.98] tracking-[-0.06em] hyphens-auto ${
                locale === "de" ? "text-4xl" : "text-5xl"
              } sm:text-6xl lg:text-[74px]`}
            >
              {copy.hero.title}
            </h1>
            <p className="hero-enter hero-delay-2 mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {copy.hero.description}
            </p>
            <div className="hero-enter hero-delay-3 mt-10 flex flex-wrap gap-3">
              <Button href={routeFor(locale, "contact")}>{copy.hero.primaryCta}</Button>
              <Button href={routeFor(locale, "services")} variant="secondary">
                {copy.hero.secondaryCta}
              </Button>
            </div>
          </div>
          <div className="hero-enter hero-delay-3 grid gap-3 border border-white/15 bg-slate-950/35 p-2 shadow-[0_24px_90px_rgba(0,0,0,.28)] backdrop-blur-md sm:grid-cols-2 xl:grid-cols-4">
            {copy.trustStats.map((stat, index) => {
              const Icon = heroTrustIcons[index] ?? ShieldCheck;

              return (
                <article
                  key={`${stat.value}-${stat.label}`}
                  className="group flex min-h-24 items-center gap-4 border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:bg-white/[0.075]"
                >
                  <span className="grid size-12 shrink-0 place-items-center border border-white/15 bg-slate-950/30 text-cyan transition group-hover:border-cyan/70 group-hover:bg-cyan group-hover:text-white">
                    <Icon aria-hidden="true" size={24} strokeWidth={2.1} />
                  </span>
                  <span>
                    <span className="block text-base font-black leading-6 tracking-[-0.02em] text-white">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-6 text-slate-300">
                      {stat.label}
                    </span>
                  </span>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="pb-20 pt-20 sm:pb-28 sm:pt-28">
        <Container>
          <Reveal>
            <SectionHeader {...copy.audiences} />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.audiences.items.map((customer, index) => (
              <Reveal key={customer} delay={(index % 3) * 80}>
                <article className="flex min-h-24 items-center gap-4 border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-cyan hover:shadow-lift">
                  <span className="h-10 w-1 shrink-0 bg-cyan" aria-hidden="true" />
                  <h3 className="text-sm font-black uppercase leading-6 tracking-[0.08em] text-navy">
                    {customer}
                  </h3>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader {...copy.servicesSection} />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {serviceSummary.map((service, index) => (
              <Reveal key={service.title} delay={index * 90}>
                <ServiceCard service={service} actionLabel={copy.servicesSection.actionLabel} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader {...copy.processSection} align="center" />
          </Reveal>
          <Reveal delay={100}>
            <ProcessSteps steps={copy.collaborationSteps} />
          </Reveal>
        </Container>
      </section>

      <section className="blueprint bg-ink py-20 text-white sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader {...copy.benefitsSection} light />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.benefitsSection.items.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 80}>
                <FeatureCard {...benefit} index={index} dark />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <LocalizedCoverage locale={locale} />
      <LocalizedCta locale={locale} />
    </>
  );
}

function ServicesPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const copy = content.services;

  return (
    <>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        description={copy.hero.description ?? ""}
        code={content.heroCodes.services}
        image={imageWithAlt("servicesHero", content.media.servicesHero)}
        imagePosition="center 45%"
      >
        <Button href={routeFor(locale, "contact")}>{copy.hero.cta}</Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader {...copy.overview} />
          </Reveal>

          <div className="mt-12 space-y-10">
            {copy.items.map((service, index) => (
              <Reveal key={service.id} delay={index * 80}>
                <section
                  id={service.id}
                  className={`scroll-mt-28 overflow-hidden border border-slate-200 bg-white shadow-lift ${
                    service.id === "stavebnictvo" ? "lg:grid lg:grid-cols-[.9fr_1.1fr]" : ""
                  }`}
                >
                  {service.id === "stavebnictvo" ? (
                    <ResponsiveImage
                      image={imageWithAlt("construction", content.media.construction)}
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
            <SectionHeader {...copy.process} align="center" />
          </Reveal>
          <Reveal delay={100}>
            <ProcessSteps steps={content.home.collaborationSteps} />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-8 lg:grid-cols-2">
          {[copy.provide, copy.clientNeeds].map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="border border-slate-200 bg-white p-8 shadow-lift">
                <h2 className="text-2xl font-black tracking-[-0.04em] text-navy">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <LocalizedCta locale={locale} title={copy.ctaTitle} />
    </>
  );
}

function ProjectsPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const copy = content.projects;

  return (
    <>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        description={copy.hero.description ?? ""}
        code={content.heroCodes.projects}
        image={imageWithAlt("projectsHero", content.media.projectsHero)}
        imagePosition="center 42%"
      >
        <Button href={routeFor(locale, "contact")}>{copy.hero.cta}</Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mb-10 border-l-2 border-cyan bg-mist px-5 py-4 text-sm leading-6 text-slate-700">
            {copy.notice}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {copy.items.map((project, index) => (
              <Reveal key={project.title} delay={(index % 2) * 100}>
                <ProjectCard
                  project={{
                    ...project,
                    image: imageWithAlt(project.image, content.media[project.image]),
                  }}
                  note={copy.cardNote}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionHeader {...copy.future} />
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="grid min-h-24 place-items-center border border-slate-200 bg-white text-center font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400"
                  >
                    {copy.clientLogo}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ResponsiveImage
              image={imageWithAlt("projectProof", content.media.projectProof)}
              sizes="(min-width: 1024px) 50vw, 100vw"
              objectPosition="center 45%"
              overlay
              className="min-h-[420px]"
            />
          </Reveal>
        </Container>
      </section>

      <LocalizedCta locale={locale} title={copy.cta.title} description={copy.cta.description} />
    </>
  );
}

function AboutPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const copy = content.about;

  return (
    <>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        description={copy.hero.description ?? ""}
        code={content.heroCodes.about}
      >
        <Button href={routeFor(locale, "contact")}>{copy.hero.cta}</Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <ResponsiveImage
              image={imageWithAlt("aboutHero", content.media.aboutHero)}
              sizes="(min-width: 1024px) 50vw, 100vw"
              objectPosition="center 42%"
              overlay
              className="min-h-[480px]"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeader {...copy.identity} />
            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
              {copy.identity.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader {...copy.values} />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {copy.values.items.map((value, index) => (
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
            <SectionHeader {...copy.facilities} />
          </Reveal>
          <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[.95fr_1.05fr]">
            <Reveal>
              <ResponsiveImage
                image={imageWithAlt("aboutFacilities", content.media.aboutFacilities)}
                sizes="(min-width: 1024px) 45vw, 100vw"
                objectPosition="center 48%"
                overlay
                className="h-full min-h-[430px]"
              />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {copy.facilities.items.map((item, index) => (
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
            <SectionHeader {...copy.timelineSection} />
            <Timeline items={copy.timeline} />
          </Reveal>
        </Container>
      </section>

      <LocalizedCoverage locale={locale} />
      <LocalizedCta locale={locale} />
    </>
  );
}

function FaqPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const copy = content.faq;

  return (
    <>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        description={copy.hero.description ?? ""}
        code={content.heroCodes.faq}
        image={imageWithAlt("faqHero", content.media.faqHero)}
        imagePosition="center 45%"
      >
        <Button href={routeFor(locale, "contact")}>{copy.hero.cta}</Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="max-w-5xl">
          <Reveal>
            <FAQAccordion items={copy.items} />
          </Reveal>
        </Container>
      </section>

      <LocalizedCta
        locale={locale}
        title={copy.cta.title}
        description={copy.cta.description}
        buttonLabel={copy.cta.buttonLabel}
      />
    </>
  );
}

function ContactPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const copy = content.contact;
  const contactCards = [
    { key: "general" as const, details: contacts.general, copy: copy.cards.general },
    { key: "sales" as const, details: contacts.sales, copy: copy.cards.sales },
    { key: "hr" as const, details: contacts.hr, copy: copy.cards.hr },
  ];

  return (
    <>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        description={copy.hero.description ?? ""}
        code={content.heroCodes.contact}
        image={imageWithAlt("contactHero", content.media.contactHero)}
        imagePosition="center 45%"
      >
        <Button href={`mailto:${contacts.general.email}`}>{copy.hero.emailCta}</Button>
        <Button href={contacts.general.phones[0].href} variant="secondary">
          {copy.hero.phoneCta}
        </Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-sky-700">
                {copy.intro.eyebrow}
              </p>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-navy sm:text-4xl">
                {copy.intro.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {copy.intro.description}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {contactCards.map((contact, index) => (
              <Reveal key={contact.key} delay={index * 90}>
                <ContactCard
                  contactKey={contact.key}
                  details={contact.details}
                  contactCopy={contact.copy}
                  labels={{
                    eyebrow: copy.cardEyebrow,
                    sendEmail: copy.sendEmail,
                    call: copy.call,
                  }}
                />
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
                {copy.companyEyebrow}
              </p>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-navy">
                {company.name}
              </h2>
              <address className="mt-8 space-y-5 not-italic">
                <ContactLine label={copy.companyLabels.address} value={company.address} />
                <ContactLine label={copy.companyLabels.registrationNumber} value={company.ico} />
                <ContactLine label={copy.companyLabels.taxNumber} value={company.dic} />
                <ContactLine label={copy.companyLabels.vatNumber} value={company.icDph} />
                <ContactLine
                  label={copy.companyLabels.primaryEmail}
                  value={contacts.footer.emails[0].display}
                  href={contacts.footer.emails[0].href}
                />
                <ContactLine
                  label={copy.companyLabels.salesEmail}
                  value={contacts.footer.emails[1].display}
                  href={contacts.footer.emails[1].href}
                />
                <ContactLine
                  label={copy.companyLabels.primaryPhone}
                  value={contacts.footer.phone.display}
                  href={contacts.footer.phone.href}
                />
              </address>

              <div className="mt-10 border border-slate-200 bg-white p-5 shadow-lift">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy">
                  {copy.socialTitle}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {copy.socialDescription}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-2 border border-slate-300 px-4 text-[10px] font-bold uppercase tracking-[0.14em] text-navy transition hover:border-cyan hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
                    >
                      {link.label}
                      <ExternalLink aria-hidden="true" size={14} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-10 border border-slate-200 bg-mist p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy">
                  {copy.inquiryHelpTitle}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {copy.inquiryHelpText}
                </p>
              </div>
            </aside>
          </Reveal>
          <Reveal delay={100}>
            <ContactForm locale={locale} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function RecruitmentPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const copy = content.recruitment;

  return (
    <>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        description={copy.hero.description ?? ""}
        code={content.heroCodes.recruitment}
        image={imageWithAlt("servicesHero", content.media.servicesHero)}
        imagePosition="center 45%"
      >
        <Button href="#formular">{copy.hero.formCta}</Button>
        <Button href={`mailto:${contacts.hr.email}`} variant="secondary">
          {copy.hero.hrCta}
        </Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeader {...copy.audiences} />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.audiences.items.map((card, index) => {
              const Icon = audienceIcons[index] ?? UserRound;

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
            <SectionHeader {...copy.professions} />
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {copy.professions.items.map((profession) => (
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
            <SectionHeader {...copy.process} align="center" />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {copy.process.items.map((step, index) => (
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
                {copy.formSection.eyebrow}
              </p>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-navy sm:text-4xl">
                {copy.formSection.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {copy.formSection.description}
              </p>
              <div className="mt-8 space-y-3 border border-slate-200 bg-white p-6 shadow-lift">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy">
                  {copy.formSection.managerRole}
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
            <RecruitmentForm locale={locale} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function CookiesPage({ locale }: { locale: Locale }) {
  const copy = siteContent[locale].legal;
  return (
    <LegalTextPage
      eyebrow={copy.eyebrow}
      title={copy.cookies.title}
      description={copy.cookies.description}
      sections={legalContent[locale].cookies}
      controls={<CookiePreferences locale={locale} />}
    />
  );
}

function PrivacyPage({ locale }: { locale: Locale }) {
  const copy = siteContent[locale].legal;
  return (
    <LegalTextPage
      eyebrow={copy.eyebrow}
      title={copy.privacy.title}
      description={copy.privacy.description}
      sections={legalContent[locale].privacy}
    />
  );
}

function ThankYouPage({ locale, worker }: { locale: Locale; worker: boolean }) {
  const copy = worker ? siteContent[locale].workerThankYou : siteContent[locale].thankYou;

  return (
    <section className="blueprint grid min-h-[70vh] place-items-center bg-ink py-20 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-cyan">
            {copy.eyebrow}
          </p>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-[-0.05em] sm:text-6xl">
            {copy.title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300">
            {copy.description}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href={routeFor(locale, "home")}>{copy.homeCta}</Button>
            <Button href={routeFor(locale, "services")} variant="secondary">
              {copy.servicesCta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function LocalizedCoverage({ locale }: { locale: Locale }) {
  const copy = siteContent[locale].common;
  return (
    <CoverageSection
      eyebrow={copy.coverage.eyebrow}
      title={copy.coverage.title}
      description={copy.coverage.description ?? ""}
      countries={copy.countries}
    />
  );
}

function LocalizedCta({
  locale,
  title,
  description,
  buttonLabel,
}: {
  locale: Locale;
  title?: string;
  description?: string;
  buttonLabel?: string;
}) {
  const copy = siteContent[locale].common.cta;
  return (
    <CTASection
      eyebrow={copy.eyebrow}
      title={title ?? copy.title}
      description={description ?? copy.description}
      buttonLabel={buttonLabel ?? copy.buttonLabel}
      buttonHref={routeFor(locale, "contact")}
    />
  );
}

type ContactDetails = (typeof contacts)["general" | "sales" | "hr"];

function ContactCard({
  contactKey,
  details,
  contactCopy,
  labels,
}: {
  contactKey: "general" | "sales" | "hr";
  details: ContactDetails;
  contactCopy: { role: string; description: string; uses: readonly string[] };
  labels: { eyebrow: string; sendEmail: string; call: string };
}) {
  return (
    <article className="group flex h-full flex-col border border-slate-200 bg-white p-7 shadow-lift transition duration-300 hover:-translate-y-1 hover:border-cyan/70">
      <div className="mb-7 flex items-center gap-4">
        <span className="grid size-12 place-items-center bg-mist text-sky-700 transition group-hover:bg-cyan group-hover:text-white">
          <UserRound aria-hidden="true" size={22} />
        </span>
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            {labels.eyebrow}
          </p>
          <h3 className="mt-1 text-xl font-black tracking-[-0.03em] text-navy">
            {contactCopy.role}
          </h3>
        </div>
      </div>

      <p className="text-sm leading-7 text-slate-600">{contactCopy.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {contactCopy.uses.map((use) => (
          <span
            key={use}
            className="border border-slate-200 bg-mist px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600"
          >
            {use}
          </span>
        ))}
      </div>

      <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">
        <a
          href={`mailto:${details.email}`}
          className="flex items-center gap-3 text-sm font-semibold text-navy transition hover:text-sky-700"
        >
          <Mail aria-hidden="true" size={17} className="text-sky-700" />
          {details.email}
        </a>
        {details.phones.map((phone) => (
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
        <a
          href={`mailto:${details.email}`}
          className="inline-flex min-h-10 items-center justify-center bg-navy px-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
        >
          {labels.sendEmail}
        </a>
        {details.phones.map((phone) => (
          <a
            key={`${phone.href}-cta`}
            href={phone.href}
            className="inline-flex min-h-10 items-center justify-center border border-slate-300 px-4 text-[10px] font-bold uppercase tracking-[0.14em] text-navy transition hover:border-cyan hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
          >
            {contactKey === "general" ? `${labels.call} ${phone.label}` : labels.call}
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
