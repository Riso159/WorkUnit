import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="WorkUnit – domov"
      className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
    >
      <span
        className={`grid size-10 place-items-center border text-[11px] font-black tracking-[0.12em] transition group-hover:bg-cyan group-hover:text-ink ${
          light
            ? "border-white/25 bg-white/5 text-cyan"
            : "border-navy/20 bg-navy text-cyan"
        }`}
      >
        WU
      </span>
      <span
        className={`text-xl font-black tracking-[-0.04em] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        Work<span className="text-cyan">Unit</span>
      </span>
    </Link>
  );
}
