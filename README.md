# WorkUnit web prototyp

Viacstránkový prezentačný web pre WorkUnit s.r.o. postavený na Next.js App Router, TypeScripte a Tailwind CSS.

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
- `/o-nas`
- `/sluzby`
- `/sluzby/stavebnictvo`
- `/sluzby/skladova-logistika`
- `/sluzby/vyroba`
- `/projekty`
- `/pre-firmy`
- `/pre-pracovnikov`
- `/kontakt`
- `/faq`

## Aktuálne placeholdery

- textové logo a monogram WU,
- fotografie tímu, pracovísk a projektov,
- konkrétne referencie a klienti,
- telefón a e-mail,
- mapový podklad,
- právne stránky,
- reálne odosielanie kontaktného formulára.

Kontaktný formulár je zámerne iba frontendový prototyp. Po odoslaní zobrazí informačnú hlášku a neposiela ani neukladá údaje. Miesto pre budúce napojenie služby Resend je označené komentárom v `components/ContactFormPlaceholder.tsx`.

## Pred ostrým spustením

1. Doplniť finálne logo, fotografie a schválené referencie.
2. Doplniť telefón, e-mail a právne texty.
3. Potvrdiť finálne texty, rozsah služieb a krajiny pôsobenia.
4. Pripojiť formulár k backendu, validácii, antispam ochrane a Resend.
5. Nastaviť produkčnú doménu, analytiku, cookies a finálne Open Graph dáta.
