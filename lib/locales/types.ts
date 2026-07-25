import type { PageId } from "@/lib/i18n";
import type { WorkunitImageKey } from "@/lib/images";

export type MetadataCopy = {
  title: string;
  description: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
};

export type SectionCopy = {
  eyebrow: string;
  title: string;
  description?: string;
};

export type TextCard = {
  title: string;
  description: string;
};

export type ServiceCopy = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  items: readonly string[];
  note?: string;
};

export type SiteLocaleContent = {
  metadata: Record<PageId, MetadataCopy>;
  media: Record<WorkunitImageKey, string>;
  heroCodes: Record<
    "services" | "projects" | "about" | "faq" | "contact" | "recruitment",
    string
  >;
  common: {
    coverage: SectionCopy;
    countries: readonly { code: string; name: string; note: string }[];
    cta: {
      eyebrow: string;
      title: string;
      description: string;
      buttonLabel: string;
    };
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
    };
    trustStats: readonly { value: string; label: string }[];
    audiences: SectionCopy & { items: readonly string[] };
    servicesSection: SectionCopy & { actionLabel: string };
    processSection: SectionCopy;
    collaborationSteps: readonly TextCard[];
    benefitsSection: SectionCopy & { items: readonly TextCard[] };
  };
  services: {
    hero: SectionCopy & { cta: string };
    overview: SectionCopy;
    items: readonly ServiceCopy[];
    process: SectionCopy;
    provide: TextCard;
    clientNeeds: TextCard;
    ctaTitle: string;
  };
  projects: {
    hero: SectionCopy & { cta: string };
    notice: string;
    items: readonly {
      title: string;
      description: string;
      code: string;
      type: string;
      image: WorkunitImageKey;
    }[];
    cardNote: string;
    future: SectionCopy;
    clientLogo: string;
    cta: { title: string; description: string };
  };
  about: {
    hero: SectionCopy & { cta: string };
    identity: SectionCopy & { paragraphs: readonly string[] };
    values: SectionCopy & { items: readonly TextCard[] };
    facilities: SectionCopy & { items: readonly string[] };
    timelineSection: Omit<SectionCopy, "description">;
    timeline: readonly { year: string; title: string; description: string }[];
  };
  faq: {
    hero: SectionCopy & { cta: string };
    items: readonly { question: string; answer: string }[];
    cta: { title: string; description: string; buttonLabel: string };
  };
  contact: {
    hero: SectionCopy & { emailCta: string; phoneCta: string };
    intro: SectionCopy;
    cards: Record<
      "general" | "sales" | "hr",
      { role: string; description: string; uses: readonly string[] }
    >;
    cardEyebrow: string;
    sendEmail: string;
    call: string;
    companyEyebrow: string;
    companyLabels: {
      address: string;
      registrationNumber: string;
      taxNumber: string;
      vatNumber: string;
      primaryEmail: string;
      salesEmail: string;
      primaryPhone: string;
    };
    socialTitle: string;
    socialDescription: string;
    inquiryHelpTitle: string;
    inquiryHelpText: string;
  };
  recruitment: {
    hero: SectionCopy & { formCta: string; hrCta: string };
    audiences: SectionCopy & { items: readonly TextCard[] };
    professions: SectionCopy & { items: readonly string[] };
    process: SectionCopy & { items: readonly TextCard[] };
    formSection: SectionCopy & { managerRole: string };
  };
  thankYou: {
    eyebrow: string;
    title: string;
    description: string;
    homeCta: string;
    servicesCta: string;
  };
  workerThankYou: {
    eyebrow: string;
    title: string;
    description: string;
    homeCta: string;
    servicesCta: string;
  };
  legal: {
    eyebrow: string;
    cookies: { title: string; description: string };
    privacy: { title: string; description: string };
  };
};
