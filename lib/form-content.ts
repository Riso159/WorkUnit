import type { Locale } from "@/lib/i18n";

type FieldCopy = {
  label: string;
  placeholder: string;
};

type FormContent = {
  contact: {
    aria: string;
    intro: string;
    name: FieldCopy;
    company: FieldCopy;
    email: FieldCopy;
    phone: FieldCopy;
    inquiryType: string;
    inquiryPlaceholder: string;
    inquiryOptions: readonly string[];
    projectLocation: FieldCopy;
    teamSize: FieldCopy;
    startDate: FieldCopy;
    message: FieldCopy;
    gdprPrefix: string;
    privacyLink: string;
    gdprSuffix: string;
    submit: string;
    submitting: string;
    error: string;
    helperPrefix: string;
    helperLink: string;
    helperSuffix: string;
  };
  recruitment: {
    aria: string;
    intro: string;
    fullName: FieldCopy;
    email: FieldCopy;
    phone: FieldCopy;
    applicantType: FieldCopy;
    applicantOptions: readonly string[];
    mainProfession: FieldCopy;
    professionOptions: readonly string[];
    teamSize: FieldCopy;
    teamSizeOptions: readonly string[];
    countriesLegend: string;
    countryOptions: readonly string[];
    availableFrom: FieldCopy;
    tradeLicense: FieldCopy;
    tradeLicenseOptions: readonly string[];
    a1: FieldCopy;
    a1Options: readonly string[];
    ownCar: FieldCopy;
    yesNoOptions: readonly string[];
    ownTools: FieldCopy;
    toolOptions: readonly string[];
    languagesLegend: string;
    languageOptions: readonly string[];
    workTypesLegend: string;
    workTypeOptions: readonly string[];
    experience: FieldCopy;
    gdprPrefix: string;
    privacyLink: string;
    gdprSuffix: string;
    submit: string;
    submitting: string;
    error: string;
    selectAtLeastOne: string;
    helperBeforeEmail: string;
    helperAfterEmail: string;
    helperPrivacyPrefix: string;
    helperPrivacyLink: string;
    helperPrivacySuffix: string;
  };
};

export const formContent: Record<Locale, FormContent> = {
  sk: {
    contact: {
      aria: "Kontaktný formulár WorkUnit",
      intro:
        "Nie ste si istí, koho kontaktovať? Vyplňte formulár a vašu správu nasmerujeme správnej osobe.",
      name: { label: "Meno a priezvisko", placeholder: "Vaše meno" },
      company: { label: "Firma", placeholder: "Názov firmy" },
      email: { label: "E-mail", placeholder: "vas@email.sk" },
      phone: { label: "Telefón", placeholder: "+421 ..." },
      inquiryType: "Typ dopytu",
      inquiryPlaceholder: "Vyberte typ dopytu",
      inquiryOptions: [
        "Všeobecný dopyt",
        "Obchodná spolupráca / cenová ponuka",
        "Pracovníci / HR",
        "Iné",
      ],
      projectLocation: {
        label: "Miesto projektu",
        placeholder: "Krajina, mesto alebo región",
      },
      teamSize: {
        label: "Počet pracovníkov / veľkosť tímu",
        placeholder: "Napr. 2, 6+, 1–10",
      },
      startDate: {
        label: "Termín začiatku",
        placeholder: "Napr. čo najskôr / dátum",
      },
      message: {
        label: "Správa",
        placeholder:
          "Napíšte typ práce, miesto projektu, termín, počet pracovníkov a administratívne požiadavky.",
      },
      gdprPrefix:
        "Odoslaním formulára beriem na vedomie spracúvanie osobných údajov podľa",
      privacyLink: "Zásad ochrany osobných údajov",
      gdprSuffix: ".",
      submit: "Odoslať dopyt",
      submitting: "Odosielam...",
      error: "Formulár sa nepodarilo odoslať. Skúste to prosím znova.",
      helperPrefix:
        "Informácia o spracúvaní osobných údajov pri kontaktnom formulári je uvedená na stránke",
      helperLink: "Ochrana osobných údajov",
      helperSuffix:
        ". Údaje z formulára sú odosielané cez zabezpečený serverový endpoint.",
    },
    recruitment: {
      aria: "Formulár pre pracovníkov a partie",
      intro:
        "Vyplňte údaje o sebe alebo o pracovnej partii. HR tím WorkUnit ich vyhodnotí podľa aktuálnych projektov, krajiny, skúseností a dostupnosti.",
      fullName: { label: "Meno a priezvisko", placeholder: "Vaše meno" },
      email: { label: "E-mail", placeholder: "vas@email.sk" },
      phone: { label: "Telefón", placeholder: "+421 ..." },
      applicantType: { label: "Som", placeholder: "Vyberte možnosť" },
      applicantOptions: [
        "Jednotlivec",
        "Živnostník",
        "Pracovná partia",
        "Firma / subdodávateľský tím",
      ],
      mainProfession: { label: "Hlavná profesia", placeholder: "Vyberte profesiu" },
      professionOptions: [
        "Izolatér plochých striech",
        "Izolatér šikmých striech",
        "Klampiar",
        "Murár",
        "Maliar",
        "Betonár",
        "Montážnik",
        "Pomocný pracovník",
        "Skladník",
        "VZV pracovník",
        "Výroba",
        "Iné",
      ],
      teamSize: { label: "Počet ľudí", placeholder: "Vyberte veľkosť" },
      teamSizeOptions: ["1", "2", "3–5", "6–10", "10+"],
      countriesLegend: "Krajiny, kde chcete pracovať",
      countryOptions: ["Slovensko", "Česko", "Nemecko", "Rakúsko", "Holandsko", "Iné"],
      availableFrom: {
        label: "Kedy môžete nastúpiť",
        placeholder: "Napr. od augusta / podľa dohody",
      },
      tradeLicense: { label: "Máte živnosť?", placeholder: "Vyberte možnosť" },
      tradeLicenseOptions: ["Áno", "Nie", "V riešení"],
      a1: { label: "Máte A1?", placeholder: "Vyberte možnosť" },
      a1Options: ["Áno", "Nie", "V riešení", "Neviem"],
      ownCar: { label: "Máte vlastné auto?", placeholder: "Vyberte možnosť" },
      yesNoOptions: ["Áno", "Nie"],
      ownTools: { label: "Máte vlastné náradie?", placeholder: "Vyberte možnosť" },
      toolOptions: ["Áno", "Nie", "Čiastočne"],
      languagesLegend: "Jazyky",
      languageOptions: ["Slovenčina", "Čeština", "Nemčina", "Angličtina", "Poľština", "Iné"],
      workTypesLegend: "Preferovaný typ práce",
      workTypeOptions: [
        "Stavebníctvo",
        "Strechy / izolácie",
        "Montáže",
        "Skladová logistika",
        "Výroba",
        "Pomocné práce",
        "Iné",
      ],
      experience: {
        label: "Správa / skúsenosti",
        placeholder:
          "Napíšte stručne, aké máte skúsenosti, v akej profesii pracujete, či máte vlastné náradie, auto, živnosť alebo skúsenosti zo zahraničia.",
      },
      gdprPrefix:
        "Odoslaním formulára beriem na vedomie spracúvanie osobných údajov podľa",
      privacyLink: "Zásad ochrany osobných údajov",
      gdprSuffix: ".",
      submit: "Odoslať údaje",
      submitting: "Odosielam...",
      error: "Formulár sa nepodarilo odoslať. Skúste to prosím znova.",
      selectAtLeastOne: "Vyberte aspoň jednu možnosť.",
      helperBeforeEmail: "Údaje z formulára budú odoslané tímu WorkUnit na adresu",
      helperAfterEmail: ".",
      helperPrivacyPrefix: "Informácia o spracúvaní osobných údajov je uvedená na stránke",
      helperPrivacyLink: "Ochrana osobných údajov",
      helperPrivacySuffix: ".",
    },
  },
  cs: {
    contact: {
      aria: "Kontaktní formulář WorkUnit",
      intro:
        "Nejste si jistí, koho kontaktovat? Vyplňte formulář a vaši zprávu předáme správné osobě.",
      name: { label: "Jméno a příjmení", placeholder: "Vaše jméno" },
      company: { label: "Firma", placeholder: "Název firmy" },
      email: { label: "E-mail", placeholder: "vas@email.cz" },
      phone: { label: "Telefon", placeholder: "+420 ..." },
      inquiryType: "Typ poptávky",
      inquiryPlaceholder: "Vyberte typ poptávky",
      inquiryOptions: [
        "Obecný dotaz",
        "Obchodní spolupráce / cenová nabídka",
        "Pracovníci / HR",
        "Jiné",
      ],
      projectLocation: {
        label: "Místo projektu",
        placeholder: "Země, město nebo region",
      },
      teamSize: {
        label: "Počet pracovníků / velikost týmu",
        placeholder: "Např. 2, 6+, 1–10",
      },
      startDate: {
        label: "Termín zahájení",
        placeholder: "Např. co nejdříve / datum",
      },
      message: {
        label: "Zpráva",
        placeholder:
          "Uveďte typ práce, místo projektu, termín, počet pracovníků a administrativní požadavky.",
      },
      gdprPrefix:
        "Odesláním formuláře beru na vědomí zpracování osobních údajů podle",
      privacyLink: "Zásad ochrany osobních údajů",
      gdprSuffix: ".",
      submit: "Odeslat poptávku",
      submitting: "Odesílám...",
      error: "Formulář se nepodařilo odeslat. Zkuste to prosím znovu.",
      helperPrefix:
        "Informace o zpracování osobních údajů v kontaktním formuláři najdete na stránce",
      helperLink: "Ochrana osobních údajů",
      helperSuffix:
        ". Údaje z formuláře jsou odesílány prostřednictvím zabezpečeného serverového rozhraní.",
    },
    recruitment: {
      aria: "Formulář pro pracovníky a pracovní týmy",
      intro:
        "Vyplňte údaje o sobě nebo o svém pracovním týmu. HR tým WorkUnit je posoudí podle aktuálních projektů, země, zkušeností a dostupnosti.",
      fullName: { label: "Jméno a příjmení", placeholder: "Vaše jméno" },
      email: { label: "E-mail", placeholder: "vas@email.cz" },
      phone: { label: "Telefon", placeholder: "+420 ..." },
      applicantType: { label: "Jsem", placeholder: "Vyberte možnost" },
      applicantOptions: [
        "Jednotlivec",
        "Živnostník",
        "Pracovní tým",
        "Firma / subdodavatelský tým",
      ],
      mainProfession: { label: "Hlavní profese", placeholder: "Vyberte profesi" },
      professionOptions: [
        "Izolatér plochých střech",
        "Izolatér šikmých střech",
        "Klempíř",
        "Zedník",
        "Malíř",
        "Betonář",
        "Montážník",
        "Pomocný pracovník",
        "Skladník",
        "Řidič VZV",
        "Výroba",
        "Jiné",
      ],
      teamSize: { label: "Počet osob", placeholder: "Vyberte velikost" },
      teamSizeOptions: ["1", "2", "3–5", "6–10", "10+"],
      countriesLegend: "Země, ve kterých chcete pracovat",
      countryOptions: ["Slovensko", "Česko", "Německo", "Rakousko", "Nizozemsko", "Jiné"],
      availableFrom: {
        label: "Kdy můžete nastoupit",
        placeholder: "Např. od srpna / dle dohody",
      },
      tradeLicense: { label: "Máte živnost?", placeholder: "Vyberte možnost" },
      tradeLicenseOptions: ["Ano", "Ne", "Vyřizuje se"],
      a1: { label: "Máte formulář A1?", placeholder: "Vyberte možnost" },
      a1Options: ["Ano", "Ne", "Vyřizuje se", "Nevím"],
      ownCar: { label: "Máte vlastní auto?", placeholder: "Vyberte možnost" },
      yesNoOptions: ["Ano", "Ne"],
      ownTools: { label: "Máte vlastní nářadí?", placeholder: "Vyberte možnost" },
      toolOptions: ["Ano", "Ne", "Částečně"],
      languagesLegend: "Jazyky",
      languageOptions: ["Slovenština", "Čeština", "Němčina", "Angličtina", "Polština", "Jiné"],
      workTypesLegend: "Preferovaný typ práce",
      workTypeOptions: [
        "Stavebnictví",
        "Střechy / izolace",
        "Montáže",
        "Skladová logistika",
        "Výroba",
        "Pomocné práce",
        "Jiné",
      ],
      experience: {
        label: "Zpráva / zkušenosti",
        placeholder:
          "Stručně popište své zkušenosti, profesi a zda máte vlastní nářadí, auto, živnost nebo zkušenosti ze zahraničí.",
      },
      gdprPrefix:
        "Odesláním formuláře beru na vědomí zpracování osobních údajů podle",
      privacyLink: "Zásad ochrany osobních údajů",
      gdprSuffix: ".",
      submit: "Odeslat údaje",
      submitting: "Odesílám...",
      error: "Formulář se nepodařilo odeslat. Zkuste to prosím znovu.",
      selectAtLeastOne: "Vyberte alespoň jednu možnost.",
      helperBeforeEmail: "Údaje z formuláře budou odeslány týmu WorkUnit na adresu",
      helperAfterEmail: ".",
      helperPrivacyPrefix: "Informace o zpracování osobních údajů najdete na stránce",
      helperPrivacyLink: "Ochrana osobních údajů",
      helperPrivacySuffix: ".",
    },
  },
  en: {
    contact: {
      aria: "WorkUnit contact form",
      intro:
        "Not sure whom to contact? Complete the form and we will direct your message to the right person.",
      name: { label: "Full name", placeholder: "Your name" },
      company: { label: "Company", placeholder: "Company name" },
      email: { label: "Email", placeholder: "you@company.com" },
      phone: { label: "Phone", placeholder: "+44 ..." },
      inquiryType: "Type of enquiry",
      inquiryPlaceholder: "Select an enquiry type",
      inquiryOptions: [
        "General enquiry",
        "Business cooperation / quotation",
        "Workers / HR",
        "Other",
      ],
      projectLocation: {
        label: "Project location",
        placeholder: "Country, city or region",
      },
      teamSize: {
        label: "Number of workers / team size",
        placeholder: "For example 2, 6+, 1–10",
      },
      startDate: {
        label: "Expected start date",
        placeholder: "For example as soon as possible / date",
      },
      message: {
        label: "Message",
        placeholder:
          "Tell us the type of work, project location, expected start date, number of workers and administrative requirements.",
      },
      gdprPrefix:
        "By submitting this form, I acknowledge the processing of my personal data as described in the",
      privacyLink: "Privacy Policy",
      gdprSuffix: ".",
      submit: "Send enquiry",
      submitting: "Sending...",
      error: "The form could not be sent. Please try again.",
      helperPrefix:
        "Information about personal data processing in connection with this form is available in our",
      helperLink: "Privacy Policy",
      helperSuffix: ". Form data is submitted through a secure server endpoint.",
    },
    recruitment: {
      aria: "Form for workers and work teams",
      intro:
        "Tell us about yourself or your work team. WorkUnit's HR team will assess the details against current projects, location, experience and availability.",
      fullName: { label: "Full name", placeholder: "Your name" },
      email: { label: "Email", placeholder: "you@email.com" },
      phone: { label: "Phone", placeholder: "+44 ..." },
      applicantType: { label: "I am", placeholder: "Select an option" },
      applicantOptions: [
        "Individual worker",
        "Self-employed contractor",
        "Work team",
        "Company / subcontractor team",
      ],
      mainProfession: { label: "Main trade", placeholder: "Select a trade" },
      professionOptions: [
        "Flat-roof installer",
        "Pitched-roof installer",
        "Sheet-metal worker",
        "Bricklayer",
        "Painter",
        "Concrete worker",
        "Fitter / installer",
        "General labourer",
        "Warehouse worker",
        "Forklift operator",
        "Manufacturing worker",
        "Other",
      ],
      teamSize: { label: "Number of people", placeholder: "Select team size" },
      teamSizeOptions: ["1", "2", "3–5", "6–10", "10+"],
      countriesLegend: "Countries where you would like to work",
      countryOptions: ["Slovakia", "Czechia", "Germany", "Austria", "Netherlands", "Other"],
      availableFrom: {
        label: "When are you available?",
        placeholder: "For example from August / by agreement",
      },
      tradeLicense: {
        label: "Are you self-employed?",
        placeholder: "Select an option",
      },
      tradeLicenseOptions: ["Yes", "No", "In progress"],
      a1: { label: "Do you have an A1 certificate?", placeholder: "Select an option" },
      a1Options: ["Yes", "No", "In progress", "Not sure"],
      ownCar: { label: "Do you have your own car?", placeholder: "Select an option" },
      yesNoOptions: ["Yes", "No"],
      ownTools: { label: "Do you have your own tools?", placeholder: "Select an option" },
      toolOptions: ["Yes", "No", "Some tools"],
      languagesLegend: "Languages",
      languageOptions: ["Slovak", "Czech", "German", "English", "Polish", "Other"],
      workTypesLegend: "Preferred type of work",
      workTypeOptions: [
        "Construction",
        "Roofing / insulation",
        "Installation work",
        "Warehouse logistics",
        "Manufacturing",
        "General labour",
        "Other",
      ],
      experience: {
        label: "Message / experience",
        placeholder:
          "Briefly describe your experience and trade, and whether you have your own tools, a car, self-employed status or experience working abroad.",
      },
      gdprPrefix:
        "By submitting this form, I acknowledge the processing of my personal data as described in the",
      privacyLink: "Privacy Policy",
      gdprSuffix: ".",
      submit: "Submit details",
      submitting: "Sending...",
      error: "The form could not be sent. Please try again.",
      selectAtLeastOne: "Select at least one option.",
      helperBeforeEmail: "The details in this form will be sent to the WorkUnit team at",
      helperAfterEmail: ".",
      helperPrivacyPrefix: "Information about personal data processing is available in our",
      helperPrivacyLink: "Privacy Policy",
      helperPrivacySuffix: ".",
    },
  },
  de: {
    contact: {
      aria: "Kontaktformular von WorkUnit",
      intro:
        "Sie sind nicht sicher, an wen Sie sich wenden sollen? Füllen Sie das Formular aus; wir leiten Ihre Nachricht an die richtige Ansprechperson weiter.",
      name: { label: "Vor- und Nachname", placeholder: "Ihr Name" },
      company: { label: "Unternehmen", placeholder: "Unternehmensname" },
      email: { label: "E-Mail", placeholder: "sie@unternehmen.de" },
      phone: { label: "Telefon", placeholder: "+49 ..." },
      inquiryType: "Art der Anfrage",
      inquiryPlaceholder: "Art der Anfrage auswählen",
      inquiryOptions: [
        "Allgemeine Anfrage",
        "Geschäftliche Zusammenarbeit / Angebot",
        "Arbeitskräfte / Personal",
        "Sonstiges",
      ],
      projectLocation: {
        label: "Projektstandort",
        placeholder: "Land, Stadt oder Region",
      },
      teamSize: {
        label: "Anzahl der Arbeitskräfte / Teamgröße",
        placeholder: "Zum Beispiel 2, 6+, 1–10",
      },
      startDate: {
        label: "Geplanter Beginn",
        placeholder: "Zum Beispiel schnellstmöglich / Datum",
      },
      message: {
        label: "Nachricht",
        placeholder:
          "Beschreiben Sie bitte die Tätigkeit, den Projektstandort, den Termin, die Anzahl der Arbeitskräfte und die administrativen Anforderungen.",
      },
      gdprPrefix:
        "Mit dem Absenden des Formulars nehme ich die Verarbeitung meiner personenbezogenen Daten gemäß der",
      privacyLink: "Datenschutzerklärung",
      gdprSuffix: " zur Kenntnis.",
      submit: "Anfrage senden",
      submitting: "Wird gesendet...",
      error: "Das Formular konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      helperPrefix:
        "Informationen zur Verarbeitung personenbezogener Daten im Zusammenhang mit diesem Formular finden Sie in unserer",
      helperLink: "Datenschutzerklärung",
      helperSuffix: ". Die Formulardaten werden über einen gesicherten Server-Endpunkt übermittelt.",
    },
    recruitment: {
      aria: "Formular für Arbeitskräfte und Arbeitsteams",
      intro:
        "Machen Sie Angaben zu Ihrer Person oder Ihrem Arbeitsteam. Das HR-Team von WorkUnit prüft diese anhand aktueller Projekte, des Einsatzlandes, Ihrer Erfahrung und Verfügbarkeit.",
      fullName: { label: "Vor- und Nachname", placeholder: "Ihr Name" },
      email: { label: "E-Mail", placeholder: "sie@email.de" },
      phone: { label: "Telefon", placeholder: "+49 ..." },
      applicantType: { label: "Ich bin", placeholder: "Option auswählen" },
      applicantOptions: [
        "Einzelperson",
        "Selbstständig tätig",
        "Arbeitsteam",
        "Unternehmen / Nachunternehmerteam",
      ],
      mainProfession: { label: "Haupttätigkeit", placeholder: "Tätigkeit auswählen" },
      professionOptions: [
        "Flachdachabdichter",
        "Steildachabdichter",
        "Spengler",
        "Maurer",
        "Maler",
        "Betonbauer",
        "Monteur",
        "Hilfsarbeiter",
        "Lagermitarbeiter",
        "Gabelstaplerfahrer",
        "Produktionsmitarbeiter",
        "Sonstiges",
      ],
      teamSize: { label: "Anzahl der Personen", placeholder: "Teamgröße auswählen" },
      teamSizeOptions: ["1", "2", "3–5", "6–10", "10+"],
      countriesLegend: "Länder, in denen Sie arbeiten möchten",
      countryOptions: ["Slowakei", "Tschechien", "Deutschland", "Österreich", "Niederlande", "Sonstiges"],
      availableFrom: {
        label: "Ab wann sind Sie verfügbar?",
        placeholder: "Zum Beispiel ab August / nach Vereinbarung",
      },
      tradeLicense: {
        label: "Sind Sie selbstständig?",
        placeholder: "Option auswählen",
      },
      tradeLicenseOptions: ["Ja", "Nein", "In Bearbeitung"],
      a1: { label: "Haben Sie eine A1-Bescheinigung?", placeholder: "Option auswählen" },
      a1Options: ["Ja", "Nein", "In Bearbeitung", "Nicht sicher"],
      ownCar: { label: "Haben Sie ein eigenes Fahrzeug?", placeholder: "Option auswählen" },
      yesNoOptions: ["Ja", "Nein"],
      ownTools: { label: "Haben Sie eigenes Werkzeug?", placeholder: "Option auswählen" },
      toolOptions: ["Ja", "Nein", "Teilweise"],
      languagesLegend: "Sprachen",
      languageOptions: ["Slowakisch", "Tschechisch", "Deutsch", "Englisch", "Polnisch", "Sonstiges"],
      workTypesLegend: "Bevorzugter Tätigkeitsbereich",
      workTypeOptions: [
        "Bauwesen",
        "Dacharbeiten / Abdichtung",
        "Montagearbeiten",
        "Lagerlogistik",
        "Produktion",
        "Hilfsarbeiten",
        "Sonstiges",
      ],
      experience: {
        label: "Nachricht / Erfahrung",
        placeholder:
          "Beschreiben Sie kurz Ihre Erfahrung und Tätigkeit sowie vorhandenes Werkzeug, Fahrzeug, Ihre Selbstständigkeit und mögliche Auslandserfahrung.",
      },
      gdprPrefix:
        "Mit dem Absenden des Formulars nehme ich die Verarbeitung meiner personenbezogenen Daten gemäß der",
      privacyLink: "Datenschutzerklärung",
      gdprSuffix: " zur Kenntnis.",
      submit: "Angaben senden",
      submitting: "Wird gesendet...",
      error: "Das Formular konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      selectAtLeastOne: "Wählen Sie mindestens eine Option aus.",
      helperBeforeEmail: "Die Angaben aus dem Formular werden an das WorkUnit-Team unter",
      helperAfterEmail: " gesendet.",
      helperPrivacyPrefix: "Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer",
      helperPrivacyLink: "Datenschutzerklärung",
      helperPrivacySuffix: ".",
    },
  },
};
