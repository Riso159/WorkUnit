# WorkUnit web prototyp

Aktualizovaný viacstránkový web pre WorkUnit s.r.o. podľa vyplneného klientského dotazníka. Dotazník je braný ako hlavný zdroj pravdy.

## Spustenie

Požiadavka: Node.js 20.9 alebo novší.

```bash
npm install
npm run dev
```

Web bude dostupný na `http://localhost:3000`.

## Kontrola projektu

```bash
npm run typecheck
npm run build
```

## Implementované stránky

- `/`
- `/sluzby`
- `/projekty`
- `/o-nas`
- `/faq`
- `/kontakt`
- `/dakujeme`
- `/cs`, `/en`, `/de` ako placeholdery pre budúce jazykové verzie

## Hlavné úpravy podľa dotazníka

- služby sú na jednej stránke, nie ako samostatné detailné podstránky,
- stavebníctvo je hlavná dominantná služba,
- komunikácia používa formálne vykanie a B2B tón,
- claimy a čísla sú obmedzené na fakty z dotazníka,
- krajiny pôsobenia sú konkrétne: SK, CZ, AT, DE, NL,
- reálne skúsenosti sú komunikované najmä s Nemeckom a Českom,
- ubytovanie je formulované presne: WorkUnit pomáha s vyhľadaním, pracovníci si ho hradia sami,
- formulár je pripravený na Resend, spam ochranu a analytickú konverziu, ale zatiaľ dáta neodosiela.

## Aktuálne placeholdery

- finálne logo súbor,
- reálne fotografie,
- telefón,
- referencie, logá klientov, prípadové štúdie a čísla projektov,
- právne texty GDPR a cookies,
- preklady CZ / EN / DE,
- Resend API, doménová verifikácia a produkčné ENV premenné,
- Google Analytics a Search Console.

## Pred ostrým spustením

1. Doplniť logo a vizuálne podklady.
2. Doplniť telefón a potvrdiť e-mailové adresy.
3. Doplniť právne texty GDPR/cookies.
4. Napojiť formulár na Resend, spam ochranu a konverzné meranie.
5. Doplniť alebo schváliť preklady CZ / EN / DE.
6. Doplniť reálne referencie, fotky a čísla, ktoré klient povolí zverejniť.
7. Nastaviť produkčný deployment, DNS, analytiku a Search Console.
