import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function LocalePlaceholder({
  locale,
  language,
}: {
  locale: string;
  language: string;
}) {
  return (
    <section className="blueprint grid min-h-[70vh] place-items-center bg-ink py-20 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-cyan">
            {locale} verzia
          </p>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-[-0.05em] sm:text-6xl">
            Jazyková verzia sa pripravuje
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300">
            Táto {language} verzia je zatiaľ pripravená ako route placeholder.
            Plné preklady CZ / EN / DE budú doplnené po schválení slovenských textov.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/">Späť na slovenskú verziu</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
