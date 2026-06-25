import Link from "next/link";
import { languageItems } from "@/lib/routes";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  return (
    <nav
      aria-label="Prepínač jazykov"
      className={`flex items-center ${compact ? "gap-2" : "gap-1"}`}
    >
      {languageItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`grid min-h-9 min-w-9 place-items-center border px-2 text-[11px] font-black uppercase tracking-[0.12em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan ${
            item.active
              ? "border-cyan bg-cyan text-white"
              : "border-slate-200 text-slate-500 hover:border-cyan hover:text-navy"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
