import Link from "next/link";
import type { ServiceSummary } from "@/lib/content";

export function ServiceCard({ service }: { service: ServiceSummary }) {
  return (
    <Link
      href={service.href}
      className="group relative flex min-h-[320px] flex-col overflow-hidden border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-cyan/70 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan sm:p-8"
    >
      <div className="absolute right-0 top-0 h-24 w-24 translate-x-12 -translate-y-12 rotate-45 bg-mist transition duration-500 group-hover:bg-cyan/20" />
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs font-bold tracking-[0.16em] text-sky-700">
          {service.number}
        </span>
        <span className="border border-slate-200 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
          {service.tag}
        </span>
      </div>
      <div className="mt-auto">
        <h3 className="text-2xl font-black tracking-[-0.04em] text-navy transition group-hover:text-sky-700">
          {service.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
        <span className="mt-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.13em] text-navy">
          Pozrieť sekciu
          <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
        </span>
      </div>
    </Link>
  );
}
