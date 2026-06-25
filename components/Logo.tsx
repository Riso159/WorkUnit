import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="WorkUnit – domov"
      className="group inline-flex items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
    >
      <span className="sr-only">WorkUnit</span>
      <span
        className={`relative block size-14 overflow-hidden rounded-sm border transition duration-300 group-hover:-translate-y-0.5 sm:size-16 ${
          light
            ? "border-white/15 shadow-[0_18px_50px_rgba(0,0,0,.24)]"
            : "border-slate-200 shadow-[0_12px_30px_rgba(5,18,32,.12)]"
        }`}
        aria-hidden="true"
      >
        <Image
          src="/images/workunit/workunit-logo.png"
          alt=""
          fill
          sizes="64px"
          className="object-cover"
        />
      </span>
    </Link>
  );
}
