import { workunitImages } from "@/lib/images";

export const company = {
  name: "WorkUnit s.r.o.",
  ico: "54883288",
  dic: "2121824540",
  icDph: "SK2121824540",
  address: "Pod Juhom 7666/1, 911 01 Trenčín",
  domain: "www.workunit.sk",
  emailPrimary: "info@workunit.sk",
  emailSales: "sales@workunit.sk",
  phone: "+421 907 231 829",
  founder: "Michael Krennert",
  founded: "2022",
};

export const contacts = {
  general: {
    role: "General Manager",
    description: "Pre všeobecné dopyty, spoluprácu a urgentné otázky.",
    email: "info@workunit.sk",
    phones: [
      {
        label: "SK",
        display: "+421 907 231 829",
        href: "tel:+421907231829",
      },
      {
        label: "DE",
        display: "+49 172 8186047",
        href: "tel:+491728186047",
      },
    ],
    uses: ["všeobecné dopyty", "spolupráca", "urgentné otázky", "hlavný kontakt"],
  },
  sales: {
    role: "Sales Manager",
    description: "Pre obchodné dopyty, cenové ponuky a nové zákazky.",
    email: "sales@workunit.sk",
    phones: [
      {
        label: "Sales",
        display: "+421 914 641 041",
        href: "tel:+421914641041",
      },
    ],
    uses: ["obchodné dopyty", "cenové ponuky", "nové zákazky", "B2B spolupráca"],
  },
  hr: {
    role: "HR Manager",
    description: "Pre pracovníkov, živnostníkov a záujemcov o spoluprácu.",
    email: "recruitment@workunit.sk",
    phones: [
      {
        label: "HR",
        display: "+421 948 515 708",
        href: "tel:+421948515708",
      },
    ],
    uses: ["pracovníci", "živnostníci", "pracovné príležitosti", "pracovné tímy"],
  },
  footer: {
    emails: [
      {
        display: "info@workunit.sk",
        href: "mailto:info@workunit.sk",
      },
      {
        display: "sales@workunit.sk",
        href: "mailto:sales@workunit.sk",
      },
    ],
    phone: {
      display: "+421 907 231 829",
      href: "tel:+421907231829",
    },
  },
} as const;

export type ServiceSection = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  items: string[];
  note?: string;
};

export const services: ServiceSection[] = [
  {
    id: "stavebnictvo",
    number: "01",
    title: "Stavebníctvo",
    eyebrow: "Hlavná oblasť",
    description:
      "Pracovné tímy pre stavebné projekty so zameraním na strechy, remeselné práce, montáže a dokončovacie činnosti podľa požiadaviek projektu.",
    items: [
      "izolatéri plochých striech",
      "izolatéri šikmých striech",
      "klampiari",
      "maliari",
      "murári",
      "betonári",
      "okenári",
      "žeriavnici",
      "bagristi",
      "pomocníci",
      "montážne práce",
      "dokončovacie práce",
      "fasády",
      "sadrokartón",
      "elektro podľa dostupnosti",
      "zváranie podľa dostupnosti",
      "armovanie",
    ],
    note: "Konkrétne profesie a počet pracovníkov sa potvrdzujú podľa dostupnosti a zadania.",
  },
  {
    id: "skladova-logistika",
    number: "02",
    title: "Skladová logistika",
    eyebrow: "Prevádzkové kapacity",
    description:
      "Tímy pre skladové a logistické prevádzky, kde rozhoduje spoľahlivosť, tempo a schopnosť prispôsobiť sa potrebám prevádzky.",
    items: [
      "VZV",
      "manipulácia s tovarom",
      "nakládka",
      "vykládka",
      "pomocné skladové práce",
      "logistické procesy podľa potrieb prevádzky",
    ],
  },
  {
    id: "vyroba",
    number: "03",
    title: "Výroba",
    eyebrow: "Priemysel a montáž",
    description:
      "Pracovníci pre výrobné a montážne prostredie, najmä pri jednoduchých výrobných a montážnych činnostiach podľa dohody.",
    items: [
      "montáž",
      "pracovníci pre výrobné prevádzky",
      "priemyselné projekty",
      "jednoduché výrobné a montážne činnosti podľa dohody",
    ],
  },
];

export const serviceSummary = services.map((service) => ({
  number: service.number,
  title: service.title,
  description: service.description,
  href: `/sluzby#${service.id}`,
  tag: service.eyebrow,
}));

export type ServiceSummary = (typeof serviceSummary)[number];

export const companyValues = [
  {
    title: "Kvalita práce",
    description:
      "Tímy sa vyberajú podľa skúseností, komunikácie a dôkazov predchádzajúcej práce.",
  },
  {
    title: "Spoľahlivosť",
    description:
      "Dlhodobá spolupráca stojí na férových dohodách, dochádzke a odpracovaných hodinách.",
  },
  {
    title: "Férovosť",
    description:
      "Cenu a podmienky riešime individuálne tak, aby spolupráca dávala zmysel obom stranám.",
  },
  {
    title: "Rýchlosť",
    description:
      "Pri bežnej zákazke vieme pracovníkov nasadiť už do 5–7 dní.",
  },
  {
    title: "Stabilita",
    description:
      "WorkUnit sa zameriava najmä na dlhodobé projekty a stabilných spolupracovníkov.",
  },
];

export const collaborationSteps = [
  {
    title: "Kontaktujete nás",
    description: "Najrýchlejšie telefonicky alebo e-mailom.",
  },
  {
    title: "Prejdeme zadanie",
    description:
      "Typ práce, krajinu, miesto projektu, termín, počet pracovníkov a očakávania.",
  },
  {
    title: "Overíme dostupnosť",
    description:
      "Preveríme kapacity a zostavíme vhodný tím podľa profesie a krajiny.",
  },
  {
    title: "Dohodneme podmienky",
    description:
      "Obchodné a administratívne podmienky riešime podľa konkrétneho projektu.",
  },
  {
    title: "Pripravíme nasadenie",
    description:
      "Pracovníci majú potrebné OOPP, školenia alebo oprávnenia podľa projektu.",
  },
  {
    title: "Komunikujeme počas projektu",
    description:
      "Cez pracovníkov, vedúceho tímu alebo WorkUnit podľa potreby zákazky.",
  },
  {
    title: "Potvrdzujeme výkazy",
    description:
      "Dochádzka a odpracované hodiny sa potvrdzujú cez šichtovky.",
  },
];

export const businessBenefits = [
  {
    title: "Nasadenie už do 5–7 dní",
    description:
      "Pri bežnej zákazke vieme reagovať rýchlo; väčšie alebo špecifické dopyty posudzujeme individuálne.",
  },
  {
    title: "Malé aj väčšie tímy",
    description:
      "Typicky zabezpečujeme 1–10 pracovníkov, od dvojíc až po väčšie partie podľa projektu.",
  },
  {
    title: "Stabilní spolupracovníci",
    description:
      "WorkUnit funguje kombinovaným modelom vlastného personálu, stabilných spolupracovníkov a subdodávateľov.",
  },
  {
    title: "Vozidlá a náradie",
    description:
      "K dispozícii sú 2 pracovné dodávky Renault Master a základné AKU náradie.",
  },
];

export const trustStats = [
  { value: "Založené", label: "v roku 2022" },
  { value: "Nasadenie už", label: "do 5 – 7 dní" },
  { value: "Malé aj väčšie", label: "pracovné tímy" },
  { value: "Skúsenosti s projektmi", label: "v Nemecku a Česku" },
];

export const targetCustomers = [
  "stavebné firmy",
  "veľkí generálni dodávatelia",
  "logistické firmy",
  "výrobné a montážne prevádzky",
  "lokálne firmy pri menších subdodávkach",
  "zahraničné firmy overujúce dodávateľa",
];

export const countries = [
  {
    code: "SK",
    name: "Slovensko",
    note: "sídlo a domáci trh",
  },
  {
    code: "CZ",
    name: "Česko",
    note: "reálne skúsenosti",
  },
  {
    code: "DE",
    name: "Nemecko",
    note: "kľúčový trh a reálne skúsenosti",
  },
  {
    code: "AT",
    name: "Rakúsko",
    note: "obchodne dôležitá krajina",
  },
  {
    code: "NL",
    name: "Holandsko",
    note: "obchodne dôležitá krajina",
  },
];

export const projectTypes = [
  {
    title: "Stavebný projekt v Nemecku",
    description:
      "Ukážkový typ zákazky – konkrétne údaje budú doplnené po schválení klientom.",
    code: "DE / BUILD",
    type: "Anonymizovaný projekt",
    image: workunitImages.projectConstructionGermany,
  },
  {
    title: "Strešné a izolatérske práce",
    description:
      "Ukážkový typ zákazky – konkrétne údaje budú doplnené po schválení klientom.",
    code: "ROOF / CASE",
    type: "Prípadová štúdia – doplniť údaje",
    image: workunitImages.projectRoofing,
  },
  {
    title: "Logistická prevádzka",
    description:
      "Ukážkový typ zákazky – konkrétne údaje budú doplnené po schválení klientom.",
    code: "LOG / EU",
    type: "Fotky a čísla budú doplnené",
    image: workunitImages.projectLogistics,
  },
  {
    title: "Montážne práce vo výrobe",
    description:
      "Ukážkový typ zákazky – konkrétne údaje budú doplnené po schválení klientom.",
    code: "PROD / MNT",
    type: "Anonymizovaný projekt",
    image: workunitImages.projectManufacturing,
  },
];

export const faqs = [
  {
    question: "Ako rýchlo viete zabezpečiť pracovníkov?",
    answer:
      "Pri bežnej zákazke vieme pracovníkov nasadiť už do 5–7 dní. Pri väčších alebo špecifických dopytoch riešime termín individuálne.",
  },
  {
    question: "Aké tímy viete zabezpečiť?",
    answer:
      "Zabezpečujeme jednotlivcov aj pracovné tímy. Typicky ide o 1–10 pracovníkov podľa projektu, pričom pri väčších dopytoch preverujeme kapacity individuálne.",
  },
  {
    question: "V ktorých krajinách pôsobíte?",
    answer:
      "Zameriavame sa najmä na Slovensko, Česko, Nemecko, Rakúsko a Holandsko. Skúsenosti máme najmä s Nemeckom a Českom.",
  },
  {
    question: "Zabezpečujete ubytovanie?",
    answer:
      "S ubytovaním vieme pomôcť pri vyhľadaní vhodnej možnosti čo najbližšie k projektu. Náklady na ubytovanie si hradia pracovníci sami.",
  },
  {
    question: "Máte vlastné vozidlá a náradie?",
    answer:
      "Áno, k dispozícii sú pracovné dodávky Renault Master a základné AKU náradie.",
  },
  {
    question: "Ako sa rieši cena?",
    answer:
      "Cena sa rieši individuálne podľa typu projektu, krajiny, profesie, rozsahu práce a trvania spolupráce.",
  },
  {
    question: "Aké podklady potrebujete od klienta?",
    answer:
      "Typ práce, miesto projektu, termín začiatku, počet pracovníkov, požadované profesie, očakávanú dĺžku spolupráce a administratívne požiadavky.",
  },
  {
    question: "Viete pracovať aj cez víkendy alebo turnusy?",
    answer: "Áno, podľa dohody sú možné turnusy a víkendová práca.",
  },
  {
    question: "Má každý tím koordinátora?",
    answer:
      "V každej partii je zodpovedná osoba, ktorá pomáha s organizáciou tímu a komunikáciou.",
  },
  {
    question: "Komu sa ozvať pri urgentnom dopyte?",
    answer:
      "Najrýchlejšie je zavolať alebo poslať e-mail. Dopyty rieši konateľ v pracovných dňoch približne od 7:00 do 16:00.",
  },
  {
    question: "Zabezpečujete aj práce mimo stavebníctva, logistiky a výroby?",
    answer:
      "Niektoré typy prác mimo stavebníctva, logistiky a výroby neposkytujeme. Radi však preveríme, či vieme pomôcť s vaším konkrétnym dopytom.",
  },
];

export const timeline = [
  {
    year: "pred 2022",
    title: "Skúsenosti zo stavebnej praxe",
    description:
      "Konateľ Michael Krennert pôsobil ako izolatér plochých striech, čo vytvorilo prirodzený základ firmy.",
  },
  {
    year: "2022",
    title: "Založenie WorkUnit s.r.o.",
    description:
      "Firma vznikla z praxe v stavebníctve a z reálnych projektov, kde rozhoduje kvalita a spoľahlivosť.",
  },
  {
    year: "2023",
    title: "Registrácia IČ DPH",
    description: "WorkUnit sa ďalej profesionalizuje pre obchodné spolupráce.",
  },
  {
    year: "dnes",
    title: "Projekty na Slovensku a v zahraničí",
    description:
      "Firma sa zameriava najmä na dlhodobé projekty a pracovné tímy v rámci EÚ.",
  },
];

export const contactFormServices = [
  "Všeobecný dopyt",
  "Obchodná spolupráca / cenová ponuka",
  "Pracovníci / HR",
  "Iné",
];
