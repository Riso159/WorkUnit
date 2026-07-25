import { chromeCopy, type Locale } from "@/lib/i18n";

export function SkipLink({ locale }: { locale: Locale }) {
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
