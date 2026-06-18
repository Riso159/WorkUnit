import type { ReactNode } from "react";
import { Container } from "@/components/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  code?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  code = "WU / 2022",
}: PageHeroProps) {
  return (
    <section className="blueprint relative overflow-hidden bg-ink py-20 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute -right-20 top-0 hidden h-full w-[42%] skew-x-[-10deg] border-l border-white/10 bg-white/[0.02] lg:block" />
      <Container className="relative grid items-end gap-12 lg:grid-cols-[1fr_300px]">
        <div className="max-w-4xl">
          <div className="hero-enter mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-cyan">
            <span className="h-px w-9 bg-cyan" />
            {eyebrow}
          </div>
          <h1 className="hero-enter hero-delay-1 text-balance text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="hero-enter hero-delay-2 mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {description}
          </p>
          {children ? (
            <div className="hero-enter hero-delay-3 mt-9 flex flex-wrap gap-3">
              {children}
            </div>
          ) : null}
        </div>
        <div className="hidden justify-self-end lg:block">
          <div className="relative size-56 border border-white/15">
            <div className="absolute -left-4 -top-4 size-10 border-l border-t border-cyan" />
            <div className="absolute -bottom-4 -right-4 size-10 border-b border-r border-cyan" />
            <div className="grid h-full place-items-center">
              <div className="text-center">
                <span className="block text-6xl font-black tracking-[-0.07em] text-white/10">
                  WU
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
                  {code}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
