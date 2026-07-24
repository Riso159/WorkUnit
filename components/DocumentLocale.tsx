"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { chromeCopy, getLocaleFromPathname } from "@/lib/i18n";

export function DocumentLocale() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <a
      lang={locale}
      href="#main-content"
      className="fixed left-3 top-3 z-[100] -translate-y-24 bg-cyan px-4 py-3 text-sm font-bold text-white transition focus:translate-y-0"
    >
      {chromeCopy[locale].skipLink}
    </a>
  );
}
