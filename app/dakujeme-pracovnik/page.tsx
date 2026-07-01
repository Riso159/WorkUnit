import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Ďakujeme",
  description: "Ďakovná stránka po odoslaní údajov pre HR tím WorkUnit.",
  openGraph: {
    title: "Ďakujeme | WorkUnit s.r.o.",
    description:
      "Údaje sme prijali a ozveme sa v prípade vhodnej zákazky alebo pracovnej príležitosti.",
  },
};

export default function WorkerThankYouPage() {
  return (
    <section className="blueprint grid min-h-[70vh] place-items-center bg-ink py-20 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-cyan">
            Údaje prijaté
          </p>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-[-0.05em] sm:text-6xl">
            Ďakujeme, údaje sme prijali.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300">
            Ozveme sa vám v prípade vhodnej zákazky alebo pracovnej príležitosti.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/">Späť na úvod</Button>
            <Button href="/sluzby" variant="secondary">
              Pozrieť služby
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
