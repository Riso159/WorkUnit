import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function CTASection({
  title = "Potrebujete spoľahlivý tím pre svoj projekt?",
  description = "Pošlite nám základné informácie. Prejdeme rozsah, termín a možnosti zostavenia tímu podľa aktuálnej kapacity.",
  buttonLabel = "Požiadať o tím",
  buttonHref = "/kontakt",
}: CTASectionProps) {
  return (
    <section className="bg-mist py-6 sm:py-8">
      <Container>
        <Reveal>
          <div className="blueprint relative overflow-hidden bg-navy px-6 py-12 text-white shadow-lift sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-14">
            <div className="absolute inset-0 bg-hero-radial opacity-70" />
            <div className="relative max-w-2xl">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
                Začnime rozhovor
              </p>
              <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                {description}
              </p>
            </div>
            <div className="relative mt-8 shrink-0 lg:ml-10 lg:mt-0">
              <Button href={buttonHref}>{buttonLabel}</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
