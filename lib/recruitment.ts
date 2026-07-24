export const recruitmentEmailFlow = {
  recipient: "recruitment@workunit.sk",
  mailto: "mailto:recruitment@workunit.sk",
  subject: "Nový dopyt od pracovníka – WorkUnit",
  subjectWithName: "Nový dopyt od pracovníka: {meno}",
  successRedirect: "/dakujeme-pracovnik",
  autoReplyTodo:
    "Ďakujeme za vyplnenie formulára. Vaše údaje sme prijali a ozveme sa vám v prípade vhodnej zákazky alebo pracovnej príležitosti.",
  resendTodo: [
    "Vytvoriť server action alebo API route pre recruitment formulár.",
    "Doplniť Resend API key do ENV a odosielať správu na recruitment@workunit.sk.",
    "Do e-mailu vložiť všetky vyplnené polia vrátane checkboxov.",
    "Pridať server-side validáciu povinných polí, honeypot kontrolu a prípadný rate limit.",
    "Voliteľne doplniť automatickú odpoveď odosielateľovi.",
  ],
} as const;

export const applicantTypes = [
  "Jednotlivec",
  "Živnostník",
  "Pracovná partia",
  "Firma / subdodávateľský tím",
] as const;

export const mainProfessions = [
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
] as const;

export const teamSizeOptions = ["1", "2", "3–5", "6–10", "10+"] as const;

export const preferredCountries = [
  "Slovensko",
  "Česko",
  "Nemecko",
  "Rakúsko",
  "Holandsko",
  "Iné",
] as const;

export const tradeLicenseOptions = ["Áno", "Nie", "V riešení"] as const;

export const a1Options = ["Áno", "Nie", "V riešení", "Neviem"] as const;

export const yesNoOptions = ["Áno", "Nie"] as const;

export const toolOptions = ["Áno", "Nie", "Čiastočne"] as const;

export const languageOptions = [
  "Slovenčina",
  "Čeština",
  "Nemčina",
  "Angličtina",
  "Poľština",
  "Iné",
] as const;

export const preferredWorkTypes = [
  "Stavebníctvo",
  "Strechy / izolácie",
  "Montáže",
  "Skladová logistika",
  "Výroba",
  "Pomocné práce",
  "Iné",
] as const;
