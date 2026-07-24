export const workunitImages = {
  homepageHero: {
    src: "/images/workunit/homepage-hero-workunit.png",
    alt: "Pracovný tím pri nástupe na stavebný projekt s dodávkou v pozadí",
  },
  servicesHero: {
    src: "/images/workunit/sluzby-hero-pracovne-timy.png",
    alt: "Pracovný tím v industriálnom prostredí pripravený na projekt",
  },
  construction: {
    src: "/images/workunit/sluzby-stavebnictvo.png",
    alt: "Stavební pracovníci pri prácach na modernom objekte",
  },
  projectsHero: {
    src: "/images/workunit/projekty-hero.png",
    alt: "Koordinácia pracovného tímu pri stavebnom a industriálnom projekte",
  },
  projectConstructionGermany: {
    src: "/images/workunit/projekt-stavba-nemecko.png",
    alt: "Pracovníci pri koordinácii na väčšej stavbe",
  },
  projectRoofing: {
    src: "/images/workunit/projekt-stresne-izolaterske-prace.png",
    alt: "Izolatéri pri práci na plochej streche",
  },
  projectLogistics: {
    src: "/images/workunit/projekt-logistika.png",
    alt: "Skladová logistika s VZV, manipuláciou a nakládkou tovaru",
  },
  projectManufacturing: {
    src: "/images/workunit/projekt-vyroba-montaz.png",
    alt: "Montážne práce vo výrobnej hale",
  },
  aboutHero: {
    src: "/images/workunit/o-nas-hero-tim.png",
    alt: "Pracovný tím a koordinátor pri stavebnom zázemí",
  },
  aboutFacilities: {
    src: "/images/workunit/o-nas-zazemie-dodavky-naradie.png",
    alt: "Dve pracovné dodávky, náradie a technické zázemie pre projekty",
  },
  projectProof: {
    src: "/images/workunit/projekty-dokazy-koordinacia.png",
    alt: "Koordinácia pracovníkov a kontrola podkladov na stavbe",
  },
  contactHero: {
    src: "/images/workunit/kontakt-hero.png",
    alt: "Kontaktný vizuál pracovníka pri dodávke na stavebnom projekte",
  },
  faqHero: {
    src: "/images/workunit/faq-hero.png",
    alt: "Koordinácia pracovného tímu pri otázkach k projektu",
  },
} as const;

export type WorkunitImage = (typeof workunitImages)[keyof typeof workunitImages];
