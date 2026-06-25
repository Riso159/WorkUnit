"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { navItems } from "@/lib/routes";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <Container className="flex h-[76px] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Hlavná navigácia" className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-sm px-3 py-3 text-[13px] font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan ${
                isActive(item.href)
                  ? "text-navy after:absolute after:inset-x-3 after:-bottom-[17px] after:h-0.5 after:bg-cyan"
                  : "text-slate-500 hover:text-navy"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <LanguageSwitcher />
          <Link
            href="/kontakt"
            className="inline-flex min-h-11 items-center bg-navy px-5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
          >
            Kontaktovať
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center border border-slate-200 text-navy transition hover:border-cyan xl:hidden"
          aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[77px] h-[calc(100vh-77px)] bg-ink transition duration-300 xl:hidden ${
          open ? "visible translate-x-0 opacity-100" : "invisible translate-x-full opacity-0"
        }`}
      >
        <Container className="flex h-full flex-col py-8">
          <nav aria-label="Mobilná navigácia" className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between border-b border-white/10 py-4 text-xl font-bold transition hover:text-cyan ${
                  isActive(item.href) ? "text-cyan" : "text-white"
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <LanguageSwitcher compact />
          </div>
          <div className="mt-auto border-t border-white/10 pt-6">
            <p className="text-sm leading-6 text-slate-400">
              Pracovné tímy a subdodávateľské služby pre Slovensko, Česko,
              Nemecko, Rakúsko a Holandsko.
            </p>
          </div>
        </Container>
      </div>
    </header>
  );
}
