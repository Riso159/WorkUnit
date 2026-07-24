import type { SiteLocaleContent } from "@/lib/locales/types";

export const csContent: SiteLocaleContent = {
  metadata: {
    home: {
      title: "WorkUnit s.r.o. | Pracovní týmy a subdodavatelské služby",
      description:
        "WorkUnit s.r.o. zajišťuje pracovní týmy a subdodavatelské služby pro stavební, logistické a výrobní projekty v Česku, na Slovensku a v EU.",
      openGraphDescription:
        "Stabilní spolupracovníci a pracovní týmy pro projekty v Česku, na Slovensku, v Německu, Rakousku a Nizozemsku.",
    },
    services: {
      title: "Služby | WorkUnit s.r.o.",
      description:
        "Přehled služeb WorkUnit: stavebnictví, skladová logistika a výroba na jednom místě.",
      openGraphDescription:
        "Pracovní týmy a subdodavatelské služby pro stavební, logistické a výrobní projekty.",
    },
    projects: {
      title: "Projekty a reference | WorkUnit s.r.o.",
      description:
        "Anonymizované typy projektů a připravená struktura pro budoucí reference WorkUnit.",
      openGraphDescription:
        "Případové studie a reference budou doplněny po schválení klientem.",
    },
    about: {
      title: "O nás | WorkUnit s.r.o.",
      description: "Příběh společnosti WorkUnit, její zázemí, hodnoty a země působnosti.",
      openGraphDescription:
        "WorkUnit vyrostl z praktických zkušeností ve stavebnictví a z reálných projektů.",
    },
    faq: {
      title: "FAQ | WorkUnit s.r.o.",
      description:
        "Odpovědi na časté otázky o pracovnících, týmech, zemích, cenách, ubytování a průběhu spolupráce.",
      openGraphDescription: "Časté otázky o pracovních týmech a spolupráci s WorkUnit.",
    },
    contact: {
      title: "Kontakt | WorkUnit s.r.o.",
      description:
        "Kontaktujte WorkUnit telefonicky, e-mailem nebo prostřednictvím poptávkového formuláře.",
      openGraphDescription:
        "Poptávka pracovního týmu nebo subdodavatelské spolupráce pro B2B projekty.",
    },
    recruitment: {
      title: "Hledám zakázku | WorkUnit s.r.o.",
      description:
        "Hledáte zakázku ve stavebnictví, logistice nebo výrobě? Pošlete své údaje společnosti WorkUnit a ozveme se při vhodné příležitosti.",
    },
    cookies: {
      title: "Zásady používání cookies | WorkUnit s.r.o.",
      description: "Informace o používání cookies na webu www.workunit.sk.",
    },
    privacy: {
      title: "Ochrana osobních údajů | WorkUnit s.r.o.",
      description:
        "Zásady zpracování osobních údajů společnosti WorkUnit a informace ke kontaktním formulářům.",
    },
    thankYou: {
      title: "Děkujeme | WorkUnit s.r.o.",
      description: "Potvrzení odeslání poptávky společnosti WorkUnit.",
      openGraphDescription: "Tým WorkUnit vás bude co nejdříve kontaktovat.",
    },
    workerThankYou: {
      title: "Děkujeme | WorkUnit s.r.o.",
      description: "Potvrzení odeslání údajů HR týmu WorkUnit.",
      openGraphDescription:
        "Vaše údaje jsme přijali a ozveme se, pokud se objeví vhodná zakázka nebo pracovní příležitost.",
    },
  },
  media: {
    homepageHero: "Pracovní tým při příchodu na stavební projekt s dodávkou v pozadí",
    servicesHero: "Pracovní tým v průmyslovém prostředí připravený na projekt",
    construction: "Stavební pracovníci při práci na moderním objektu",
    projectsHero: "Koordinace pracovního týmu na stavebním a průmyslovém projektu",
    projectConstructionGermany: "Pracovníci při koordinaci na větší stavbě",
    projectRoofing: "Izolatéři při práci na ploché střeše",
    projectLogistics: "Skladová logistika s VZV, manipulací a nakládkou zboží",
    projectManufacturing: "Montážní práce ve výrobní hale",
    aboutHero: "Pracovní tým a koordinátor u stavebního zázemí",
    aboutFacilities: "Dvě pracovní dodávky, nářadí a technické zázemí pro projekty",
    projectProof: "Koordinace pracovníků a kontrola podkladů na stavbě",
    contactHero: "Pracovník u dodávky na stavebním projektu",
    faqHero: "Koordinace pracovního týmu při projednávání požadavků projektu",
  },
  common: {
    coverage: {
      eyebrow: "Kde působíme",
      title: "Pracovní týmy pro Česko, Slovensko a vybrané země EU",
      description:
        "WorkUnit uvádí konkrétní země působnosti. Praktické zkušenosti má především z Německa a Česka.",
    },
    countries: [
      { code: "SK", name: "Slovensko", note: "sídlo společnosti a domácí trh" },
      { code: "CZ", name: "Česko", note: "praktické zkušenosti" },
      { code: "DE", name: "Německo", note: "klíčový trh a praktické zkušenosti" },
      { code: "AT", name: "Rakousko", note: "obchodně významná země" },
      { code: "NL", name: "Nizozemsko", note: "obchodně významná země" },
    ],
    cta: {
      eyebrow: "Pojďme se domluvit",
      title: "Potřebujete spolehlivý tým pro svůj projekt?",
      description:
        "Pošlete nám typ práce, zemi, termín a požadovaný počet pracovníků. Prověříme dostupnost a navrhneme další postup.",
      buttonLabel: "Kontaktovat WorkUnit",
    },
  },
  home: {
    hero: {
      eyebrow: "Stavebnictví · Logistika · Výroba",
      title: "Pracovní týmy pro stavební, logistické a výrobní projekty",
      description:
        "WorkUnit s.r.o. zajišťuje subdodavatelské služby a stabilní spolupracovníky pro firmy na Slovensku, v Česku, Německu, Rakousku, Nizozemsku a dalších zemích EU.",
      primaryCta: "Kontaktovat WorkUnit",
      secondaryCta: "Prohlédnout služby",
    },
    trustStats: [
      { value: "Založeno", label: "v roce 2022" },
      { value: "Možné nasazení", label: "běžně do 5–7 dnů" },
      { value: "Menší i větší", label: "pracovní týmy" },
      { value: "Zkušenosti s projekty", label: "v Německu a Česku" },
    ],
    audiences: {
      eyebrow: "Pro koho pracujeme",
      title: "Pro firmy, které potřebují kapacity bez zbytečných komplikací",
      description:
        "Typickým partnerem je stavbyvedoucí nebo člověk s rozhodovací pravomocí, který řeší sezonní výkyvy, nový projekt nebo naléhavý termín.",
      items: [
        "stavební firmy",
        "velcí generální dodavatelé",
        "logistické společnosti",
        "výrobní a montážní provozy",
        "místní firmy pro menší subdodávky",
        "zahraniční firmy prověřující dodavatele",
      ],
    },
    servicesSection: {
      eyebrow: "Služby v kostce",
      title: "Nejsilnější oblastí je stavebnictví",
      description:
        "Všechny hlavní služby jsou přehledně soustředěny na jedné stránce.",
      actionLabel: "Zobrazit sekci",
    },
    processSection: {
      eyebrow: "Průběh spolupráce",
      title: "Od prvního kontaktu po potvrzené pracovní výkazy",
      description:
        "Proces je nastaven tak, aby klient věděl, jaké informace připravit a jak bude probíhat komunikace během projektu.",
    },
    collaborationSteps: [
      { title: "Kontaktujete nás", description: "Nejrychleji telefonicky nebo e-mailem." },
      {
        title: "Projdeme zadání",
        description: "Typ práce, zemi, místo projektu, termín, počet pracovníků a očekávání.",
      },
      {
        title: "Ověříme dostupnost",
        description: "Prověříme kapacity a sestavíme vhodný tým podle profese a země.",
      },
      {
        title: "Dohodneme podmínky",
        description: "Obchodní a administrativní podmínky řešíme podle konkrétního projektu.",
      },
      {
        title: "Připravíme nasazení",
        description: "Pracovníci mají OOPP, školení nebo oprávnění požadovaná projektem.",
      },
      {
        title: "Komunikujeme během projektu",
        description: "Podle potřeby přes pracovníky, vedoucího týmu nebo WorkUnit.",
      },
      {
        title: "Potvrzujeme výkazy",
        description: "Docházka a odpracované hodiny se potvrzují v pracovních výkazech.",
      },
    ],
    benefitsSection: {
      eyebrow: "Praktické výhody",
      title: "Praktické zázemí a stabilní model spolupráce",
      description:
        "Uvádíme pouze potvrzené informace: 2 pracovní dodávky Renault Master, základní akumulátorové nářadí, obvyklý rozsah 1–10 pracovníků a zkušenosti zejména z Německa a Česka.",
      items: [
        {
          title: "Nasazení běžně do 5–7 dnů",
          description:
            "U běžných zakázek dokážeme reagovat rychle; větší nebo specifické poptávky posuzujeme individuálně.",
        },
        {
          title: "Menší i větší týmy",
          description:
            "Obvykle zajišťujeme 1–10 pracovníků, od dvojic po větší skupiny podle projektu.",
        },
        {
          title: "Stabilní spolupracovníci",
          description:
            "WorkUnit kombinuje vlastní personál, stabilní spolupracovníky a subdodavatele.",
        },
        {
          title: "Vozidla a nářadí",
          description:
            "K dispozici jsou 2 pracovní dodávky Renault Master a základní akumulátorové nářadí.",
        },
      ],
    },
  },
  services: {
    hero: {
      eyebrow: "Služby",
      title: "Pracovní týmy podle projektu, profese a země",
      description:
        "WorkUnit dodává především pracovníky a pracovní týmy. Po dohodě může v některých případech převzít i vymezenou část realizace projektu, nikoli však roli generálního dodavatele.",
      cta: "Potřebuji pracovní tým",
    },
    overview: {
      eyebrow: "Přehled služeb",
      title: "Jedna stránka pro všechny hlavní oblasti",
      description:
        "Hlavní služby jsou přehledně uvedeny na jednom místě. Obchodně nejdůležitější oblastí je stavebnictví.",
    },
    items: [
      {
        id: "stavebnictvo",
        number: "01",
        title: "Stavebnictví",
        eyebrow: "Hlavní oblast",
        description:
          "Pracovní týmy pro stavební projekty se zaměřením na střechy, řemeslné práce, montáže a dokončovací činnosti podle požadavků projektu.",
        items: [
          "izolatéři plochých střech",
          "izolatéři šikmých střech",
          "klempíři",
          "malíři",
          "zedníci",
          "betonáři",
          "montážníci oken",
          "jeřábníci",
          "strojníci rypadel",
          "pomocní pracovníci",
          "montážní práce",
          "dokončovací práce",
          "fasády",
          "sádrokarton",
          "elektro podle dostupnosti",
          "svařování podle dostupnosti",
          "armování",
        ],
        note: "Konkrétní profese a počet pracovníků potvrzujeme podle zadání a dostupných kapacit.",
      },
      {
        id: "skladova-logistika",
        number: "02",
        title: "Skladová logistika",
        eyebrow: "Provozní kapacity",
        description:
          "Týmy pro skladové a logistické provozy, kde je důležitá spolehlivost, tempo a schopnost přizpůsobit se potřebám provozu.",
        items: [
          "obsluha VZV",
          "manipulace se zbožím",
          "nakládka",
          "vykládka",
          "pomocné skladové práce",
          "logistické procesy podle potřeb provozu",
        ],
      },
      {
        id: "vyroba",
        number: "03",
        title: "Výroba",
        eyebrow: "Průmysl a montáž",
        description:
          "Pracovníci pro výrobní a montážní prostředí, zejména pro jednodušší výrobní a montážní činnosti podle dohody.",
        items: [
          "montáž",
          "pracovníci do výrobních provozů",
          "průmyslové projekty",
          "jednoduché výrobní a montážní činnosti podle dohody",
        ],
      },
    ],
    process: {
      eyebrow: "Jak probíhá spolupráce",
      title: "Jasný postup před nasazením týmu",
      description:
        "Stačí připravit typ práce, místo projektu, termín, počet pracovníků, požadované profese, očekávanou délku spolupráce a administrativní požadavky.",
    },
    provide: {
      title: "Co dokážeme zajistit",
      description:
        "Pracovníky, pracovní týmy, stabilní spolupracovníky, dopravu podle možností týmu nebo pracovní dodávky a základní akumulátorové nářadí. Každá skupina má odpovědnou osobu, která pomáhá s organizací.",
    },
    clientNeeds: {
      title: "Co potřebujeme od klienta",
      description:
        "Smlouvu nebo objednávku, zadání projektu, zemi a místo výkonu, termín, počet pracovníků, profese a administrativní požadavky pro konkrétní zemi.",
    },
    ctaTitle: "Potřebujete tým pro dlouhodobý projekt?",
  },
  projects: {
    hero: {
      eyebrow: "Projekty a zkušenosti",
      title: "Reference bez vymyšlených klientů",
      description:
        "Konkrétní názvy klientů, loga, fotografie a výsledky zatím nejsou zveřejněny. Proto používáme anonymizované typy projektů a jasně uvádíme, které informace budou doplněny.",
      cta: "Poptat podobný projekt",
    },
    notice:
      "Tato verze záměrně neuvádí jména klientů, loga ani konkrétní čísla. Po schválení referencí budou doplněny skutečné případové studie, fotografie a výsledky projektů.",
    items: [
      {
        title: "Stavební projekt v Německu",
        description:
          "Ukázkový typ zakázky – konkrétní údaje budou doplněny po schválení klientem.",
        code: "DE / BUILD",
        type: "Anonymizovaný projekt",
        image: "projectConstructionGermany",
      },
      {
        title: "Střešní a izolatérské práce",
        description:
          "Ukázkový typ zakázky – konkrétní údaje budou doplněny po schválení klientem.",
        code: "ROOF / CASE",
        type: "Případová studie – údaje budou doplněny",
        image: "projectRoofing",
      },
      {
        title: "Logistický provoz",
        description:
          "Ukázkový typ zakázky – konkrétní údaje budou doplněny po schválení klientem.",
        code: "LOG / EU",
        type: "Fotografie a údaje budou doplněny",
        image: "projectLogistics",
      },
      {
        title: "Montážní práce ve výrobě",
        description:
          "Ukázkový typ zakázky – konkrétní údaje budou doplněny po schválení klientem.",
        code: "PROD / MNT",
        type: "Anonymizovaný projekt",
        image: "projectManufacturing",
      },
    ],
    cardNote:
      "Konkrétní údaje, názvy klientů a výsledky budou doplněny po schválení klientem.",
    future: {
      eyebrow: "Budoucí reference",
      title: "Prostor pro loga klientů",
      description:
        "Reference, projekty, loga a fotografie existují, ale zatím nebyly dodány nebo schváleny ke zveřejnění.",
    },
    clientLogo: "Logo klienta",
    cta: {
      title: "Máte projekt, který potřebuje pracovní tým?",
      description:
        "Pošlete typ práce, zemi, počet pracovníků a očekávaný termín. WorkUnit prověří dostupnost a možnosti týmu.",
    },
  },
  about: {
    hero: {
      eyebrow: "O společnosti",
      title: "Firma, která vyrostla z praxe ve stavebnictví",
      description:
        "WorkUnit stojí na praktických zkušenostech z projektů, kde rozhoduje kvalita práce, spolehlivost a schopnost dodat pracovníky ve správný čas.",
      cta: "Kontaktovat WorkUnit",
    },
    identity: {
      eyebrow: "Kdo je WorkUnit",
      title: "Stabilní spolupracovníci a subdodavatelé podle zakázky",
      description:
        "Firma kombinuje vlastní personál, stabilní spolupracovníky a subdodavatele podle typu projektu.",
      paragraphs: [
        "Jednatel Michael Krennert pracoval před založením firmy jako izolatér plochých střech. Stavebnictví, zejména izolace plochých a šikmých střech, proto vytvořilo přirozený základ společnosti.",
        "Firma se postupně rozvíjela, získávala zakázky a rozšiřovala spolupráci. Komunikuje věcně a bez přehnaných slibů; důležitá je kvalita práce, férové podmínky a dlouhodobá stabilita.",
      ],
    },
    values: {
      eyebrow: "Hodnoty",
      title: "Kvalita, spolehlivost a férové podmínky",
      description: "Hodnoty vycházejí z praktických zkušeností a způsobu práce společnosti.",
      items: [
        {
          title: "Kvalita práce",
          description: "Týmy vybíráme podle zkušeností, komunikace a doložené předchozí práce.",
        },
        {
          title: "Spolehlivost",
          description:
            "Dlouhodobá spolupráce stojí na férových dohodách, docházce a odpracovaných hodinách.",
        },
        {
          title: "Férovost",
          description:
            "Cenu a podmínky řešíme individuálně tak, aby spolupráce dávala smysl oběma stranám.",
        },
        {
          title: "Rychlost",
          description: "U běžné zakázky je nasazení pracovníků možné zpravidla do 5–7 dnů.",
        },
        {
          title: "Stabilita",
          description:
            "WorkUnit se zaměřuje především na dlouhodobé projekty a stabilní spolupracovníky.",
        },
      ],
    },
    facilities: {
      eyebrow: "Zázemí",
      title: "Praktické vybavení pro projekty",
      description:
        "Uvádíme pouze potvrzené informace: 2 pracovní dodávky Renault Master, základní akumulátorové nářadí, stabilní spolupracovníci a týmy s vedoucím skupiny.",
      items: [
        "2 pracovní dodávky Renault Master",
        "základní akumulátorové nářadí",
        "pracovníci s vlastními OOPP",
        "odpovědná osoba v každé skupině",
      ],
    },
    timelineSection: {
      eyebrow: "Časová osa",
      title: "Od stavební praxe k projektům v zahraničí",
    },
    timeline: [
      {
        year: "před rokem 2022",
        title: "Zkušenosti ze stavební praxe",
        description:
          "Jednatel Michael Krennert pracoval jako izolatér plochých střech, což vytvořilo přirozený základ firmy.",
      },
      {
        year: "2022",
        title: "Založení WorkUnit s.r.o.",
        description:
          "Společnost vznikla z praxe ve stavebnictví a ze skutečných projektů, kde rozhoduje kvalita a spolehlivost.",
      },
      {
        year: "2023",
        title: "Registrace k DPH",
        description: "WorkUnit dále profesionalizoval své zázemí pro obchodní spolupráci.",
      },
      {
        year: "dnes",
        title: "Projekty na Slovensku i v zahraničí",
        description:
          "Firma se zaměřuje především na dlouhodobé projekty a pracovní týmy v rámci EU.",
      },
    ],
  },
  faq: {
    hero: {
      eyebrow: "Časté otázky",
      title: "Odpovědi před první poptávkou",
      description:
        "Konkrétní podmínky vždy závisí na projektu, zemi, profesi a délce spolupráce. Zde najdete stručné a věcné odpovědi.",
      cta: "Mám další otázku",
    },
    items: [
      {
        question: "Jak rychle dokážete zajistit pracovníky?",
        answer:
          "U běžné zakázky je možné pracovníky nasadit zpravidla do 5–7 dnů. U větších nebo specifických poptávek stanovujeme termín individuálně.",
      },
      {
        question: "Jaké týmy dokážete zajistit?",
        answer:
          "Zajišťujeme jednotlivce i pracovní týmy. Obvykle jde o 1–10 pracovníků podle projektu; u větších poptávek prověřujeme kapacity individuálně.",
      },
      {
        question: "Ve kterých zemích působíte?",
        answer:
          "Zaměřujeme se především na Slovensko, Česko, Německo, Rakousko a Nizozemsko. Nejvíce zkušeností máme z Německa a Česka.",
      },
      {
        question: "Zajišťujete ubytování?",
        answer:
          "Můžeme pomoci vyhledat vhodné ubytování co nejblíže projektu. Náklady na ubytování si pracovníci hradí sami.",
      },
      {
        question: "Máte vlastní vozidla a nářadí?",
        answer:
          "Ano. K dispozici jsou pracovní dodávky Renault Master a základní akumulátorové nářadí.",
      },
      {
        question: "Jak se stanovuje cena?",
        answer:
          "Cenu určujeme individuálně podle typu projektu, země, profese, rozsahu práce a délky spolupráce.",
      },
      {
        question: "Jaké podklady potřebujete od klienta?",
        answer:
          "Typ práce, místo projektu, termín zahájení, počet pracovníků, požadované profese, očekávanou délku spolupráce a administrativní požadavky.",
      },
      {
        question: "Je možná práce o víkendech nebo na turnusy?",
        answer: "Ano, po dohodě jsou možné turnusy i víkendová práce.",
      },
      {
        question: "Má každý tým koordinátora?",
        answer:
          "V každé skupině je odpovědná osoba, která pomáhá s organizací týmu a komunikací.",
      },
      {
        question: "Koho kontaktovat s urgentní poptávkou?",
        answer:
          "Nejrychlejší je zavolat nebo poslat e-mail. Jednatel vyřizuje poptávky v pracovních dnech přibližně od 7:00 do 16:00.",
      },
      {
        question: "Zajišťujete i práce mimo stavebnictví, logistiku a výrobu?",
        answer:
          "Některé typy prací mimo tyto oblasti neposkytujeme. Rádi však prověříme, zda můžeme pomoci s vaší konkrétní poptávkou.",
      },
    ],
    cta: {
      title: "Nenašli jste odpověď?",
      description:
        "Pošlete nám základní parametry projektu nebo svůj dotaz prostřednictvím kontaktního formuláře. Zprávu předáme správné osobě.",
      buttonLabel: "Kontaktovat WorkUnit",
    },
  },
  contact: {
    hero: {
      eyebrow: "Kontakt",
      title: "Pošlete poptávku nebo se obraťte přímo na WorkUnit",
      description:
        "Vyberte kontakt podle typu poptávky nebo vyplňte formulář. Zprávu předáme osobě, která ji dokáže nejrychleji vyřídit.",
      emailCta: "Poslat e-mail",
      phoneCta: "Zavolat WorkUnit",
    },
    intro: {
      eyebrow: "Kontakty podle poptávky",
      title: "Obraťte se na správnou osobu",
      description:
        "Vyberte kontakt podle typu poptávky. Pokud si nejste jistí, vyplňte formulář a zprávu předáme správné osobě.",
    },
    cards: {
      general: {
        role: "General Manager",
        description: "Pro obecné dotazy, spolupráci a naléhavé záležitosti.",
        uses: ["obecné dotazy", "spolupráce", "naléhavé záležitosti", "hlavní kontakt"],
      },
      sales: {
        role: "Sales Manager",
        description: "Pro obchodní poptávky, cenové nabídky a nové zakázky.",
        uses: ["obchodní poptávky", "cenové nabídky", "nové zakázky", "B2B spolupráce"],
      },
      hr: {
        role: "HR Manager",
        description: "Pro pracovníky, živnostníky a zájemce o spolupráci.",
        uses: ["pracovníci", "živnostníci", "pracovní příležitosti", "pracovní týmy"],
      },
    },
    cardEyebrow: "Kontakt",
    sendEmail: "Poslat e-mail",
    call: "Zavolat",
    companyEyebrow: "Firemní údaje",
    companyLabels: {
      address: "Adresa",
      registrationNumber: "IČO",
      taxNumber: "DIČ",
      vatNumber: "IČ DPH",
      primaryEmail: "Hlavní e-mail",
      salesEmail: "Obchodní e-mail",
      primaryPhone: "Hlavní telefon",
    },
    socialTitle: "Sociální sítě",
    socialDescription: "Sledujte WorkUnit také na sociálních sítích.",
    inquiryHelpTitle: "Co uvést v poptávce",
    inquiryHelpText:
      "Typ práce, místo projektu, termín zahájení, počet pracovníků, požadované profese, očekávanou délku spolupráce a administrativní požadavky.",
  },
  recruitment: {
    hero: {
      eyebrow: "Pro pracovníky a pracovní skupiny",
      title: "Hledáte zakázku v Česku nebo v zahraničí?",
      description:
        "WorkUnit spolupracuje s jednotlivci i pracovními skupinami na stavebních, montážních, logistických a výrobních projektech. Vyplňte krátký formulář a ozveme se při vhodné příležitosti.",
      formCta: "Vyplnit formulář",
      hrCta: "Kontaktovat HR",
    },
    audiences: {
      eyebrow: "Pro koho je stránka určena",
      title: "Pro pracovníky a týmy, které chtějí vědět o nových zakázkách",
      description:
        "Odeslání údajů neznamená automatické přijetí. Umožní nám kontaktovat vás, když se objeví vhodná zakázka podle profese, země a dostupnosti.",
      items: [
        {
          title: "Jednotlivci",
          description:
            "Máte zkušenosti ve stavebnictví, logistice nebo výrobě a hledáte novou zakázku? Pošlete nám své údaje.",
        },
        {
          title: "Pracovní skupiny",
          description:
            "Pokud pracujete jako sehraná skupina, pošlete nám informace o týmu, profesích a dostupnosti.",
        },
        {
          title: "Živnostníci",
          description:
            "Spolupracujeme také se živnostníky podle aktuálních projektů a požadavků zakázek.",
        },
        {
          title: "Práce v zahraničí",
          description:
            "Zakázky mohou být na Slovensku, v Česku, Německu, Rakousku, Nizozemsku a dalších zemích podle aktuálních možností.",
        },
      ],
    },
    professions: {
      eyebrow: "Jaké profese hledáme",
      title: "Nejčastěji řešíme stavební, montážní, logistické a výrobní profese",
      description:
        "Pokud vaše profese není v seznamu, můžete formulář přesto odeslat. Ozveme se, pokud se objeví vhodná příležitost.",
      items: [
        "izolatéři plochých a šikmých střech",
        "klempíři",
        "zedníci",
        "malíři",
        "betonáři",
        "montážníci",
        "pomocní pracovníci",
        "skladníci",
        "řidiči VZV",
        "pracovníci ve výrobě",
        "další profese podle aktuálních zakázek",
      ],
    },
    process: {
      eyebrow: "Jak to funguje",
      title: "Jednoduchý postup bez nereálných slibů",
      description:
        "Zařazení do kontaktní databáze znamená, že vás můžeme oslovit při vhodné příležitosti podle aktuálních projektů a požadavků zakázky.",
      items: [
        {
          title: "Vyplníte formulář",
          description:
            "Pošlete základní údaje, profesi, dostupnost, preferované země a zkušenosti.",
        },
        {
          title: "Posoudíme vaše zkušenosti",
          description:
            "Údaje vyhodnotíme podle aktuálních projektů, požadavků zakázky a dostupnosti týmů.",
        },
        {
          title: "Ozveme se při vhodné zakázce",
          description:
            "Pokud se objeví odpovídající příležitost, kontaktujeme vás a projdeme další podrobnosti.",
        },
        {
          title: "Dohodneme další postup",
          description:
            "Společně potvrdíme podmínky, zemi, termín, administrativu a organizaci práce.",
        },
      ],
    },
    formSection: {
      eyebrow: "Kontaktní formulář pro pracovníky",
      title: "Pošlete nám údaje o sobě nebo o své pracovní skupině",
      description:
        "Formulář je určen pracovníkům, živnostníkům a pracovním týmům. Zpráva bude odeslána HR kontaktu WorkUnit.",
      managerRole: "HR Manager",
    },
  },
  thankYou: {
    eyebrow: "Poptávka odeslána",
    title: "Děkujeme za vaši poptávku.",
    description: "Tým WorkUnit vás bude co nejdříve kontaktovat.",
    homeCta: "Zpět na úvod",
    servicesCta: "Prohlédnout služby",
  },
  workerThankYou: {
    eyebrow: "Údaje přijaty",
    title: "Děkujeme, vaše údaje jsme přijali.",
    description:
      "Ozveme se vám, pokud se objeví vhodná zakázka nebo pracovní příležitost.",
    homeCta: "Zpět na úvod",
    servicesCta: "Prohlédnout služby",
  },
  legal: {
    eyebrow: "Právní informace",
    cookies: {
      title: "Zásady používání cookies",
      description: "Informace o používání cookies na webových stránkách WorkUnit s.r.o.",
    },
    privacy: {
      title: "Zásady zpracování osobních údajů",
      description:
        "Tyto informace vysvětlují, jak společnost WorkUnit s.r.o. zpracovává osobní údaje.",
    },
  },
};
