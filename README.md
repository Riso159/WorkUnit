# WorkUnit web

Produkčný viacstránkový web spoločnosti WorkUnit s.r.o. v slovenčine, češtine,
angličtine a nemčine. Slovenská verzia zostáva predvolená na koreňových URL;
ostatné jazyky používajú prefixy `/cs`, `/en` a `/de`.

## Spustenie

Požiadavka: Node.js 20.9 alebo novší.

```bash
npm install
npm run dev
```

Lokálny web bude dostupný na `http://localhost:3000`.

## Kontrola projektu

```bash
npm run typecheck
npm run build
```

## Lokalizácia

- `lib/i18n.ts` obsahuje mapu všetkých ekvivalentných trás a texty globálnej navigácie.
- `lib/locales/` obsahuje obsah jednotlivých jazykových verzií a právne texty.
- `lib/form-content.ts` obsahuje lokalizované formulárové polia a možnosti.
- `components/SitePage.tsx` zachováva jednotný dizajn pre všetky jazyky.

Jazykový prepínač smeruje vždy na ekvivalent aktuálnej stránky. Ak sa stránka
nedá rozpoznať, bezpečne odkáže na úvodnú stránku vybraného jazyka.

## Formuláre

Kontaktný formulár odosiela dáta na `/api/contact` a formulár pre pracovníkov na
`/api/recruitment`. Serverová integrácia Resend a jej premenné prostredia zostali
oddelené od klientského kódu. Lokálny súbor `.env.local` sa nesmie commitovať.

## Obsah a referencie

Web uvádza iba potvrdené firemné údaje. Projektové karty zostávajú anonymizované,
kým klient neschváli konkrétne názvy, fotografie, výsledky alebo referencie na
zverejnenie.
