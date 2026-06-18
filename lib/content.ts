export type Service = {
  number: string;
  title: string;
  description: string;
  href: string;
  tag: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Stavebníctvo",
    description:
      "Pracovné tímy pre stavebné, montážne, dokončovacie a pomocné práce podľa potrieb projektu.",
    href: "/sluzby/stavebnictvo",
    tag: "Stavby",
  },
  {
    number: "02",
    title: "Skladová logistika",
    description:
      "Flexibilné personálne zabezpečenie skladových prevádzok, manipulácie s tovarom a logistických procesov.",
    href: "/sluzby/skladova-logistika",
    tag: "Logistika",
  },
  {
    number: "03",
    title: "Výroba",
    description:
      "Pracovníci pre výrobné prevádzky, montáž, priemyselné projekty a pomocné výrobné práce.",
    href: "/sluzby/vyroba",
    tag: "Priemysel",
  },
  {
    number: "04",
    title: "Montážne a pomocné práce",
    description:
      "Tímy pripravené doplniť kapacity pri montážach a praktických pomocných činnostiach.",
    href: "/kontakt",
    tag: "Montáže",
  },
  {
    number: "05",
    title: "Subdodávateľské tímy",
    description:
      "Ucelené partie zostavené podľa rozsahu, časového rámca a miesta realizácie zákazky.",
    href: "/pre-firmy",
    tag: "Subdodávka",
  },
];

export const companyValues = [
  {
    title: "Spoľahlivosť",
    description: "Dohodnuté kroky, otvorená komunikácia a praktický prístup.",
  },
  {
    title: "Flexibilita",
    description: "Riešenie prispôsobujeme typu projektu, kapacite a lokalite.",
  },
  {
    title: "Rýchla reakcia",
    description: "Na dopyt nadväzujeme konkrétnymi otázkami a návrhom ďalšieho postupu.",
  },
  {
    title: "Praktické riešenia",
    description: "Sústredíme sa na reálne prevádzkové potreby a vykonateľné nastavenie.",
  },
  {
    title: "Individuálny prístup",
    description: "Každú zákazku posudzujeme samostatne podľa jej rozsahu a podmienok.",
  },
];

export const collaborationSteps = [
  {
    title: "Pošlete dopyt",
    description: "Stručne nám opíšete typ práce, lokalitu a požadovaný termín.",
  },
  {
    title: "Prejdeme rozsah",
    description: "Spoločne si spresníme kapacitu, trvanie a podmienky projektu.",
  },
  {
    title: "Navrhneme riešenie",
    description: "Pripravíme realistický model spolupráce podľa dostupnej kapacity.",
  },
  {
    title: "Pripravíme tím",
    description: "Zostavíme vhodnú partiu a dohodneme organizačné zabezpečenie.",
  },
  {
    title: "Spustíme spoluprácu",
    description: "Po odsúhlasení podmienok tím nastúpi na dohodnutý projekt.",
  },
];

export const businessBenefits = [
  {
    title: "Rýchle doplnenie kapacít",
    description:
      "Podľa dostupnosti a rozsahu projektu vieme tím pripraviť približne v horizonte 1–2 týždňov.",
  },
  {
    title: "Tímy podľa projektu",
    description:
      "Počet pracovníkov aj ich zameranie nastavujeme podľa konkrétnej prevádzkovej potreby.",
  },
  {
    title: "Logistická flexibilita",
    description:
      "Pôsobenie na Slovensku aj v rámci EÚ riešime individuálne podľa podmienok zákazky.",
  },
  {
    title: "Vlastné vozidlá a náradie",
    description:
      "Disponujeme vozidlami a základným ručným náradím; ďalšie vybavenie sa dohodne podľa projektu.",
  },
];

export const projectTypes = [
  {
    title: "Stavebné tímy pre projekty v EÚ",
    description:
      "Ukážka typu zákazky pre stavebné, dokončovacie alebo pomocné práce mimo Slovenska.",
    code: "EU / BUILD",
  },
  {
    title: "Skladové tímy pre logistické prevádzky",
    description:
      "Ukážka personálneho doplnenia skladovej prevádzky podľa aktuálneho objemu práce.",
    code: "SK / LOG",
  },
  {
    title: "Výrobné a montážne tímy",
    description:
      "Ukážka nasadenia pracovníkov vo výrobe, pri montáži alebo na priemyselnom projekte.",
    code: "EU / PROD",
  },
  {
    title: "Subdodávateľské partie podľa zákazky",
    description:
      "Ukážka uceleného tímu zostaveného podľa rozsahu a harmonogramu konkrétneho projektu.",
    code: "B2B / TEAM",
  },
];

export const faqs = [
  {
    question: "Ako rýchlo viete zabezpečiť personál?",
    answer:
      "Štandardne pracujeme s orientačným horizontom približne 1–2 týždňov. Presný termín závisí od počtu pracovníkov, profesií, lokality a aktuálnej kapacity.",
  },
  {
    question: "Máte vlastné vybavenie?",
    answer:
      "Disponujeme vlastnými vozidlami a základným ručným náradím. Špecifické pracovné vybavenie a ochranné pomôcky sa nastavujú podľa podmienok konkrétneho projektu.",
  },
  {
    question: "Zabezpečujete ubytovanie?",
    answer:
      "Ubytovanie pracovníkov riešime podľa projektu a dohody so zákazníkom. Spôsob zabezpečenia je súčasťou úvodného nastavenia spolupráce.",
  },
  {
    question: "V akých krajinách pôsobíte?",
    answer:
      "Zameriavame sa na projekty na Slovensku a v rámci Európskej únie. Konkrétnu lokalitu a podmienky posúdime pri dopyte.",
  },
  {
    question: "Viete zabezpečiť celé pracovné tímy?",
    answer:
      "Áno, jadrom našej ponuky sú pracovné a subdodávateľské tímy zostavené podľa požiadaviek projektu a dostupnej kapacity.",
  },
  {
    question: "Je možná krátkodobá aj dlhodobá spolupráca?",
    answer:
      "Áno. Možnosti spolupráce nastavujeme individuálne podľa dĺžky projektu, rozsahu prác a organizačných podmienok.",
  },
  {
    question: "Ako prebieha prvý kontakt?",
    answer:
      "Po prijatí dopytu sa ozveme, doplníme si základné informácie a navrhneme ďalší postup. Formulár na tomto prototype zatiaľ údaje neodosiela.",
  },
  {
    question: "Aké informácie potrebujete k návrhu riešenia?",
    answer:
      "Pomôže nám typ prác, počet pracovníkov, miesto realizácie, predpokladaný termín nástupu, trvanie projektu a informácie o ubytovaní či potrebnom vybavení.",
  },
];

export const workerAreas = [
  "Stavebné práce",
  "Montáže",
  "Skladové práce",
  "Výroba",
  "Pomocné práce",
];
