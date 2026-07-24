"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  chromeCopy,
  equivalentRoute,
  getLocaleFromPathname,
  localeLabels,
  locales,
} from "@/lib/i18n";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const activeLocale = getLocaleFromPathname(pathname);
  const copy = chromeCopy[activeLocale];

  return (
    <nav
      aria-label={copy.languageSwitcherAria}
      className={`flex items-center ${compact ? "gap-2" : "gap-1"}`}
    >
      {locales.map((locale) => {
        const active = locale === activeLocale;

        return (
          <Link
            key={locale}
            href={equivalentRoute(pathname, locale)}
            hrefLang={locale}
            lang={locale}
            aria-current={active ? "page" : undefined}
            className={`grid min-h-9 min-w-9 place-items-center border px-2 text-[11px] font-black uppercase tracking-[0.12em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan ${
              active
                ? "border-cyan bg-cyan text-white"
                : "border-slate-200 text-slate-500 hover:border-cyan hover:text-navy"
            }`}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </nav>
  );
}
