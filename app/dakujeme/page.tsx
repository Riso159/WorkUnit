import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Ďakujeme",
  description: "Ďakovná stránka po odoslaní dopytu WorkUnit.",
  openGraph: {
    title: "Ďakujeme | WorkUnit s.r.o.",
    description: "Tím WorkUnit vás bude kontaktovať čo najskôr.",
  },
};

export default function ThankYouPage() {
  return (
    <section className="blueprint grid min-h-[70vh] place-items-center bg-ink py-20 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-cyan">
            Dopyt prijatý v prototype
          </p>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-[-0.05em] sm:text-6xl">
            Ďakujeme za váš dopyt.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300">
            Tím WorkUnit vás bude kontaktovať čo najskôr.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
            V tejto fáze formulár neodosiela dáta cez Resend; stránka slúži ako
            pripravený frontendový tok pre ďalšiu implementáciu.
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
