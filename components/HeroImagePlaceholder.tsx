import Image from "next/image";
import type { WorkunitImage } from "@/lib/images";

type HeroImagePlaceholderProps = {
  image?: WorkunitImage;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
  className?: string;
};

const sceneLabel =
  "Hero image placeholder: pracovníci na stavebnom alebo industriálnom projekte, pracovná dodávka a zázemie projektu";

function WorkerSilhouette({
  className = "",
  accent = false,
}: {
  className?: string;
  accent?: boolean;
}) {
  return (
    <div className={`absolute bottom-0 ${className}`} aria-hidden="true">
      <div className="mx-auto h-4 w-12 rounded-t-full bg-white/55" />
      <div className="mx-auto mt-1 h-10 w-9 rounded-t-2xl bg-slate-950/75 ring-1 ring-white/15" />
      <div className="relative mx-auto h-24 w-14 rounded-t-2xl bg-slate-950/80 ring-1 ring-white/10">
        {accent ? (
          <span className="absolute left-1/2 top-7 h-2 w-12 -translate-x-1/2 bg-cyan/80 shadow-[0_0_24px_rgba(37,99,235,.65)]" />
        ) : null}
      </div>
      <div className="mx-auto flex w-14 justify-between">
        <span className="h-16 w-5 origin-top -rotate-3 bg-slate-950/80" />
        <span className="h-16 w-5 origin-top rotate-3 bg-slate-950/80" />
      </div>
    </div>
  );
}

function PlaceholderScene() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(110deg,#06111f_0%,#10243b_35%,#5a6570_62%,#c08b55_100%)]" />
      <div className="absolute inset-0 opacity-75 [background-image:radial-gradient(circle_at_30%_20%,rgba(255,255,255,.26),transparent_18%),radial-gradient(circle_at_76%_28%,rgba(37,99,235,.28),transparent_24%),linear-gradient(115deg,rgba(5,12,24,.78)_0%,rgba(5,12,24,.34)_46%,rgba(5,12,24,.08)_100%)]" />

      <div className="absolute inset-x-0 bottom-[13%] h-px bg-white/15" />
      <div className="absolute bottom-[13%] left-0 h-[22%] w-full bg-[linear-gradient(180deg,rgba(7,17,31,0),rgba(7,17,31,.56))]" />

      <div className="absolute right-[22%] top-[6%] hidden h-[58%] w-[34%] border-l border-t border-white/18 bg-white/[0.035] shadow-2xl lg:block">
        <span className="absolute left-[18%] top-0 h-full w-px bg-white/16" />
        <span className="absolute left-[42%] top-0 h-full w-px bg-white/16" />
        <span className="absolute left-[66%] top-0 h-full w-px bg-white/16" />
        <span className="absolute inset-x-0 top-[28%] h-px bg-white/16" />
        <span className="absolute inset-x-0 top-[54%] h-px bg-white/16" />
        <span className="absolute inset-x-0 top-[80%] h-px bg-white/16" />
        <span className="absolute -right-8 top-9 h-px w-[118%] rotate-[-15deg] bg-white/14" />
        <span className="absolute -right-8 top-24 h-px w-[118%] rotate-[-15deg] bg-white/14" />
      </div>

      <div className="absolute bottom-[14%] right-[3%] hidden h-48 w-[40rem] max-w-[44vw] rounded-l-[2rem] border border-white/18 bg-white/[0.16] shadow-[0_28px_90px_rgba(0,0,0,.42)] backdrop-blur-[1px] lg:block">
        <div className="absolute left-9 top-7 h-20 w-28 rounded-md border border-white/20 bg-slate-950/35" />
        <div className="absolute right-0 top-0 h-full w-[38%] rounded-l-[1.4rem] border-l border-white/18 bg-white/[0.14]" />
        <div className="absolute right-8 top-7 h-20 w-24 rounded-md border border-white/18 bg-slate-950/30" />
        <div className="absolute bottom-[-1.3rem] left-14 size-20 rounded-full border-[10px] border-slate-950/85 bg-white/20 ring-1 ring-white/25" />
        <div className="absolute bottom-[-1.3rem] right-14 size-20 rounded-full border-[10px] border-slate-950/85 bg-white/20 ring-1 ring-white/25" />
        <span className="absolute left-48 top-9 text-xs font-black uppercase tracking-[0.22em] text-white/45">
          WorkUnit
        </span>
      </div>

      <div className="absolute bottom-[13%] left-[42%] hidden h-64 w-72 lg:block">
        <WorkerSilhouette className="left-0 scale-[.78] opacity-55" />
        <WorkerSilhouette className="left-16 scale-[.9] opacity-70" accent />
        <WorkerSilhouette className="left-36 scale-110 opacity-95" />
      </div>

      <div className="absolute bottom-8 right-8 hidden max-w-xs border border-white/15 bg-slate-950/45 p-4 text-white/80 backdrop-blur-md sm:block">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan">
          Hero image placeholder
        </p>
        <p className="mt-2 text-xs leading-5">
          Pripravené pre reálnu fotku: pracovníci, stavebný alebo industriálny
          projekt, dodávka a pracovné zázemie.
        </p>
      </div>
    </>
  );
}

export function HeroImagePlaceholder({
  image,
  priority = false,
  sizes = "100vw",
  objectPosition = "center",
  className = "",
}: HeroImagePlaceholderProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden bg-ink ${className}`}
      role={image ? undefined : "img"}
      aria-label={image ? undefined : sceneLabel}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <PlaceholderScene />
      )}
    </div>
  );
}
