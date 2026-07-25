import {
  businessBenefits,
  collaborationSteps,
  companyValues,
  contacts,
  countries,
  faqs,
  services,
  targetCustomers,
  timeline,
  trustStats,
} from "@/lib/content";
import { workunitImages } from "@/lib/images";
import type { SiteLocaleContent } from "@/lib/locales/types";

export const skContent: SiteLocaleContent = {
  metadata: {
    home: {
      title: "WorkUnit s.r.o. | Pracovné tímy a subdodávateľské služby",
      description:
        "WorkUnit s.r.o. zabezpečuje pracovné tímy a subdodávateľské služby pre stavebné, logistické a výrobné projekty na Slovensku a v EÚ.",
      openGraphDescription:
        "Stabilní spolupracovníci a pracovné tímy pre projekty v SK, CZ, AT, DE a NL.",
    },
    services: {
      title: "Služby | WorkUnit s.r.o.",
      description:
        "Prehľad služieb WorkUnit: stavebníctvo, skladová logistika a výroba na jednej stránke.",
      openGraphDescription:
        "Pracovné tímy a subdodávateľské služby pre stavebné, logistické a výrobné projekty.",
    },
    projects: {
      title: "Projekty a referencie | WorkUnit s.r.o.",
      description:
        "Anonymizované projektové karty a pripravená štruktúra pre budúce referencie WorkUnit.",
      openGraphDescription:
        "Prípadové štúdie a referencie budú doplnené po schválení klientom.",
    },
    about: {
      title: "O nás | WorkUnit s.r.o.",
      description: "Príbeh WorkUnit s.r.o., zázemie firmy, hodnoty a krajiny pôsobenia.",
      openGraphDescription:
        "WorkUnit vyrástol z praxe v stavebníctve a z reálnych projektov.",
    },
    faq: {
      title: "FAQ | WorkUnit s.r.o.",
      description:
        "Odpovede na časté otázky o pracovníkoch, tímoch, krajinách, cene, ubytovaní a procese spolupráce.",
      openGraphDescription: "Časté otázky o pracovných tímoch a spolupráci s WorkUnit.",
    },
    contact: {
      title: "Kontakt | WorkUnit s.r.o.",
      description:
        "Kontaktujte WorkUnit s.r.o. telefonicky, e-mailom alebo cez dopytový formulár.",
      openGraphDescription:
        "Dopyt na pracovný tím alebo subdodávateľskú spoluprácu pre B2B projekty.",
    },
    recruitment: {
      title: "Hľadám zákazku | WorkUnit s.r.o.",
      description:
        "Hľadáte zákazku v stavebníctve, logistike alebo výrobe? Pošlite svoje údaje WorkUnit s.r.o. a ozveme sa vám pri vhodnej príležitosti.",
    },
    cookies: {
      title: "Cookies politika | WorkUnit s.r.o.",
      description: "Cookies politika webovej stránky www.workunit.sk.",
      openGraphDescription:
        "Informácie o používaní cookies na webovej stránke WorkUnit s.r.o.",
    },
    privacy: {
      title: "Ochrana osobných údajov | WorkUnit s.r.o.",
      description:
        "Zásady spracúvania osobných údajov spoločnosti WorkUnit s.r.o. a informácia o spracúvaní údajov pri kontaktnom formulári.",
    },
    thankYou: {
      title: "Ďakujeme | WorkUnit s.r.o.",
      description: "Ďakovná stránka po odoslaní dopytu WorkUnit.",
      openGraphDescription: "Tím WorkUnit vás bude kontaktovať čo najskôr.",
    },
    workerThankYou: {
      title: "Ďakujeme | WorkUnit s.r.o.",
      description: "Ďakovná stránka po odoslaní údajov pre HR tím WorkUnit.",
      openGraphDescription:
        "Údaje sme prijali a ozveme sa v prípade vhodnej zákazky alebo pracovnej príležitosti.",
    },
  },
  media: {
    homepageHero: workunitImages.homepageHero.alt,
    servicesHero: workunitImages.servicesHero.alt,
    construction: workunitImages.construction.alt,
    projectsHero: workunitImages.projectsHero.alt,
    projectConstructionGermany: workunitImages.projectConstructionGermany.alt,
    projectRoofing: workunitImages.projectRoofing.alt,
    projectLogistics: workunitImages.projectLogistics.alt,
    projectManufacturing: workunitImages.projectManufacturing.alt,
    aboutHero: workunitImages.aboutHero.alt,
    aboutFacilities: workunitImages.aboutFacilities.alt,
    projectProof: workunitImages.projectProof.alt,
    contactHero: workunitImages.contactHero.alt,
    faqHero: workunitImages.faqHero.alt,
  },
  heroCodes: {
    services: "WU / SLUŽBY",
    projects: "WU / PROJEKTY",
    about: "WU / O NÁS",
    faq: "WU / FAQ",
    contact: "WU / KONTAKT",
    recruitment: "WU / HR",
  },
  common: {
    coverage: {
      eyebrow: "Mapa pôsobenia",
      title: "Pracovné tímy pre Slovensko a vybrané krajiny EÚ",
      description:
        "WorkUnit komunikuje konkrétne krajiny pôsobenia. Reálne skúsenosti vie doložiť najmä v Nemecku a Česku.",
    },
    countries,
    cta: {
      eyebrow: "Začnime rozhovor",
      title: "Potrebujete spoľahlivý tím pre svoj projekt?",
      description:
        "Pošlite nám typ práce, krajinu, termín a požadovaný počet pracovníkov. Preveríme dostupnosť a navrhneme ďalší postup.",
      buttonLabel: "Kontaktovať WorkUnit",
    },
  },
  home: {
    hero: {
      eyebrow: "Stavebníctvo · Logistika · Výroba",
      title: "Pracovné tímy pre stavebné, logistické a výrobné projekty",
      description:
        "WorkUnit s.r.o. zabezpečuje subdodávateľské služby a stabilných spolupracovníkov pre firmy na Slovensku, v Nemecku, Česku, Rakúsku, Holandsku a ďalších krajinách EÚ.",
      primaryCta: "Kontaktovať WorkUnit",
      secondaryCta: "Pozrieť služby",
    },
    trustStats,
    audiences: {
      eyebrow: "Pre koho pracujeme",
      title: "Pre firmy, ktoré potrebujú kapacity bez chaosu",
      description:
        "Typickým kontaktom je stavbyvedúci alebo rozhodovateľ, ktorý rieši sezónne výkyvy, nový projekt alebo urgentný termín.",
      items: targetCustomers,
    },
    servicesSection: {
      eyebrow: "Služby v skratke",
      title: "Najsilnejšia oblasť je stavebníctvo",
      description:
        "Služby sú sústredené na jednej prehľadnej stránke bez samostatných detailných podstránok.",
      actionLabel: "Pozrieť sekciu",
    },
    processSection: {
      eyebrow: "Proces spolupráce",
      title: "Od prvého kontaktu po potvrdené šichtovky",
      description:
        "Proces je nastavený tak, aby zákazník vedel, aké informácie pripraviť a ako bude prebiehať komunikácia počas projektu.",
    },
    collaborationSteps,
    benefitsSection: {
      eyebrow: "Dôveryhodnostné prvky",
      title: "Praktické zázemie a stabilný model spolupráce",
      description:
        "Komunikujeme iba potvrdené fakty: 2 pracovné dodávky Renault Master, základné AKU náradie, typický rozsah 1–10 pracovníkov a skúsenosti najmä s Nemeckom a Českom.",
      items: businessBenefits,
    },
  },
  services: {
    hero: {
      eyebrow: "Služby",
      title: "Pracovné tímy podľa projektu, profesie a krajiny",
      description:
        "WorkUnit dodáva najmä ľudí a pracovné tímy. V niektorých prípadoch môže ísť aj o prevzatie časti realizácie projektu podľa dohody, nie však o generálne dodávateľstvo.",
      cta: "Potrebujem pracovný tím",
    },
    overview: {
      eyebrow: "Prehľad služieb",
      title: "Jedna stránka pre všetky hlavné oblasti",
      description:
        "Služby sú prehľadne na jednej stránke. Stavebníctvo je obchodne najdôležitejšia oblasť.",
    },
    items: services,
    process: {
      eyebrow: "Ako prebieha spolupráca",
      title: "Jasný postup pred nasadením tímu",
      description:
        "Klientovi stačí pripraviť typ práce, miesto projektu, termín, počet pracovníkov, požadované profesie, očakávanú dĺžku spolupráce a administratívne požiadavky.",
    },
    provide: {
      title: "Čo vieme zabezpečiť",
      description:
        "Pracovníkov, pracovné tímy, stabilných spolupracovníkov, dopravu podľa možností tímu alebo pracovné dodávky a základné AKU náradie. Každá partia má zodpovednú osobu, ktorá pomáha s organizáciou.",
    },
    clientNeeds: {
      title: "Čo potrebujeme od klienta",
      description:
        "Zmluvu alebo objednávku, projektové zadanie, krajinu a miesto výkonu, termín, počet pracovníkov, profesie a administratívne požiadavky podľa konkrétnej krajiny.",
    },
    ctaTitle: "Potrebujete tím pre dlhodobý projekt?",
  },
  projects: {
    hero: {
      eyebrow: "Projekty a skúsenosti",
      title: "Referencie pripravené bez vymýšľania klientov",
      description:
        "Konkrétne názvy klientov, logá, fotografie a výsledky zatiaľ nie sú zverejnené. Stránka preto používa anonymizované karty a jasne uvádza, ktoré údaje budú doplnené.",
      cta: "Dopyt na podobný projekt",
    },
    notice:
      "Táto verzia zámerne nepoužíva mená klientov, logá ani konkrétne čísla. Po schválení referencií sa doplnia reálne prípadové štúdie, fotografie a výsledky projektov.",
    items: [
      {
        title: "Stavebný projekt v Nemecku",
        description:
          "Ukážkový typ zákazky – konkrétne údaje budú doplnené po schválení klientom.",
        code: "DE / BUILD",
        type: "Anonymizovaný projekt",
        image: "projectConstructionGermany",
      },
      {
        title: "Strešné a izolatérske práce",
        description:
          "Ukážkový typ zákazky – konkrétne údaje budú doplnené po schválení klientom.",
        code: "ROOF / CASE",
        type: "Prípadová štúdia – doplniť údaje",
        image: "projectRoofing",
      },
      {
        title: "Logistická prevádzka",
        description:
          "Ukážkový typ zákazky – konkrétne údaje budú doplnené po schválení klientom.",
        code: "LOG / EU",
        type: "Fotografie a čísla budú doplnené",
        image: "projectLogistics",
      },
      {
        title: "Montážne práce vo výrobe",
        description:
          "Ukážkový typ zákazky – konkrétne údaje budú doplnené po schválení klientom.",
        code: "PROD / MNT",
        type: "Anonymizovaný projekt",
        image: "projectManufacturing",
      },
    ],
    cardNote:
      "Konkrétne údaje, názvy klientov a výsledky budú doplnené po schválení klientom.",
    future: {
      eyebrow: "Budúce dôkazy",
      title: "Miesto pre logá klientov",
      description:
        "Referencie, projekty, logá a fotografie existujú, no na zverejnenie zatiaľ neboli dodané alebo schválené.",
    },
    clientLogo: "Logo klienta",
    cta: {
      title: "Máte projekt, ktorý potrebuje pracovný tím?",
      description:
        "Pošlite typ práce, krajinu, počet pracovníkov a očakávaný termín. WorkUnit preverí dostupnosť a možnosti tímu.",
    },
  },
  about: {
    hero: {
      eyebrow: "O spoločnosti",
      title: "Firma, ktorá vyrástla z praxe v stavebníctve",
      description:
        "WorkUnit nevznikol bez skúseností. Vyrástol z reálnych projektov, kde rozhoduje kvalita práce, spoľahlivosť a schopnosť dodať ľudí v správnom čase.",
      cta: "Kontaktovať WorkUnit",
    },
    identity: {
      eyebrow: "Kto je WorkUnit",
      title: "Stabilní spolupracovníci a subdodávatelia podľa zákazky",
      description:
        "Firma funguje kombinovaným modelom vlastného personálu, stabilných spolupracovníkov a subdodávateľov podľa typu projektu.",
      paragraphs: [
        "Konateľ Michael Krennert mal pred založením firmy skúsenosti ako izolatér plochých striech. Práve stavebníctvo, najmä izolácie plochých a šikmých striech, tvorilo prirodzený základ firmy.",
        "Firma sa postupne rozvíjala, získavala zákazky a rozširovala spolupráce. Komunikácia je vecná, bez prehnaných sľubov: dôležitá je kvalita práce, férovosť a dlhodobá stabilita.",
      ],
    },
    values: {
      eyebrow: "Hodnoty",
      title: "Kvalita, spoľahlivosť a férové nastavenie",
      description: "Hodnoty vychádzajú z praktických skúseností a spôsobu práce firmy.",
      items: companyValues,
    },
    facilities: {
      eyebrow: "Zázemie",
      title: "Praktické vybavenie pre projekty",
      description:
        "WorkUnit komunikuje iba potvrdené fakty: 2 pracovné dodávky Renault Master, základné AKU náradie, stabilní spolupracovníci a tímy s vedúcim partie.",
      items: [
        "2 pracovné dodávky Renault Master",
        "základné AKU náradie",
        "pracovníci s vlastnými OOPP",
        "v každej partii zodpovedná osoba",
      ],
    },
    timelineSection: {
      eyebrow: "Časová os",
      title: "Od stavebnej praxe po projekty v zahraničí",
    },
    timeline,
  },
  faq: {
    hero: {
      eyebrow: "Časté otázky",
      title: "Odpovede na otázky pred prvým dopytom",
      description:
        "Konkrétne podmienky vždy závisia od projektu, krajiny, profesie a trvania spolupráce. Tu sú stručné a vecné odpovede.",
      cta: "Mám ďalšiu otázku",
    },
    items: faqs,
    cta: {
      title: "Nenašli ste odpoveď?",
      description:
        "Napíšte nám základné parametre projektu alebo otázku cez kontaktný formulár. Správu následne nasmerujeme správnej osobe.",
      buttonLabel: "Kontaktovať WorkUnit",
    },
  },
  contact: {
    hero: {
      eyebrow: "Kontakt",
      title: "Pošlite dopyt alebo napíšte priamo WorkUnit",
      description:
        "Vyberte si kontakt podľa typu dopytu alebo vyplňte formulár. Správu následne nasmerujeme osobe, ktorá ju vie najrýchlejšie riešiť.",
      emailCta: "Poslať e-mail",
      phoneCta: "Zavolať WorkUnit",
    },
    intro: {
      eyebrow: "Kontakty podľa dopytu",
      title: "Kontaktujte správnu osobu",
      description:
        "Vyberte si kontakt podľa typu dopytu. Ak si nie ste istí, komu sa ozvať, napíšte nám cez formulár a správu nasmerujeme správnej osobe.",
    },
    cards: {
      general: {
        role: contacts.general.role,
        description: contacts.general.description,
        uses: contacts.general.uses,
      },
      sales: {
        role: contacts.sales.role,
        description: contacts.sales.description,
        uses: contacts.sales.uses,
      },
      hr: {
        role: contacts.hr.role,
        description: contacts.hr.description,
        uses: contacts.hr.uses,
      },
    },
    cardEyebrow: "Kontakt",
    sendEmail: "Poslať e-mail",
    call: "Zavolať",
    companyEyebrow: "Firemné údaje",
    companyLabels: {
      address: "Adresa",
      registrationNumber: "IČO",
      taxNumber: "DIČ",
      vatNumber: "IČ DPH",
      primaryEmail: "Hlavný e-mail",
      salesEmail: "Obchodný e-mail",
      primaryPhone: "Hlavný telefón",
    },
    socialTitle: "Sociálne siete",
    socialDescription: "Sledujte WorkUnit aj na sociálnych sieťach.",
    inquiryHelpTitle: "Čo uviesť v dopyte",
    inquiryHelpText:
      "Typ práce, miesto projektu, termín začiatku, počet pracovníkov, požadované profesie, očakávanú dĺžku spolupráce a administratívne požiadavky.",
  },
  recruitment: {
    hero: {
      eyebrow: "Pre pracovníkov a partie",
      title: "Hľadáte zákazku na Slovensku alebo v zahraničí?",
      description:
        "WorkUnit spolupracuje s jednotlivcami aj pracovnými partiami pri stavebných, montážnych, logistických a výrobných projektoch. Vyplňte krátky formulár a ozveme sa vám pri vhodnej príležitosti.",
      formCta: "Vyplniť formulár",
      hrCta: "Kontaktovať HR",
    },
    audiences: {
      eyebrow: "Pre koho je stránka určená",
      title: "Pre ľudí a tímy, ktoré chcú byť v kontakte pri nových zákazkách",
      description:
        "Nejde o automatické prijatie. Vaše údaje nám pomôžu ozvať sa vtedy, keď budeme mať vhodnú zákazku podľa profesie, krajiny a dostupnosti.",
      items: [
        {
          title: "Jednotlivci",
          description:
            "Máte skúsenosti v stavebníctve, logistike alebo výrobe a hľadáte novú zákazku? Pošlite nám svoje údaje.",
        },
        {
          title: "Pracovné partie",
          description:
            "Ak pracujete ako zohratá partia, môžete nám poslať informácie o tíme, profesiách a dostupnosti.",
        },
        {
          title: "Živnostníci",
          description:
            "Spolupracujeme aj so živnostníkmi podľa aktuálnych projektov a požiadaviek zákaziek.",
        },
        {
          title: "Práca v zahraničí",
          description:
            "Zákazky sa môžu týkať Slovenska, Česka, Nemecka, Rakúska, Holandska a ďalších krajín podľa aktuálnych možností.",
        },
      ],
    },
    professions: {
      eyebrow: "Aké profesie hľadáme",
      title: "Najčastejšie riešime stavebné, montážne, logistické a výrobné profesie",
      description:
        "Ak vaša profesia nie je v zozname, môžete nám aj tak poslať formulár. Ozveme sa vám, ak budeme mať vhodnú príležitosť.",
      items: [
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
      ],
    },
    process: {
      eyebrow: "Ako to funguje",
      title: "Jednoduchý postup bez nereálnych sľubov",
      description:
        "Zaradenie do kontaktnej databázy znamená, že vás vieme osloviť pri vhodnej príležitosti podľa aktuálnych projektov a požiadaviek zákaziek.",
      items: [
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
      ],
    },
    formSection: {
      eyebrow: "Kontaktný formulár pre pracovníkov",
      title: "Pošlite nám údaje o sebe alebo o pracovnej partii",
      description:
        "Formulár je určený pre pracovníkov, živnostníkov a pracovné tímy. Správa bude smerovaná na HR kontakt WorkUnit.",
      managerRole: "HR Manager",
    },
  },
  thankYou: {
    eyebrow: "Dopyt odoslaný",
    title: "Ďakujeme za váš dopyt.",
    description: "Tím WorkUnit vás bude kontaktovať čo najskôr.",
    homeCta: "Späť na úvod",
    servicesCta: "Pozrieť služby",
  },
  workerThankYou: {
    eyebrow: "Údaje prijaté",
    title: "Ďakujeme, údaje sme prijali.",
    description:
      "Ozveme sa vám v prípade vhodnej zákazky alebo pracovnej príležitosti.",
    homeCta: "Späť na úvod",
    servicesCta: "Pozrieť služby",
  },
  legal: {
    eyebrow: "Právne informácie",
    cookies: {
      title: "Cookies politika",
      description:
        "Informácie o používaní súborov cookies na webovej stránke WorkUnit s.r.o.",
    },
    privacy: {
      title: "Zásady spracúvania osobných údajov",
      description:
        "Tieto informácie vysvetľujú, ako WorkUnit s.r.o. spracúva osobné údaje.",
    },
  },
};
