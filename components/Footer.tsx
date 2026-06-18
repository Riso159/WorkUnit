import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { footerServices, navItems } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container>
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.9fr_1fr] lg:py-20">
          <div>
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              WorkUnit s.r.o. poskytuje personálne a subdodávateľské riešenia
              pre firmy v stavebníctve, logistike a výrobe na Slovensku a v EÚ.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="size-2 bg-cyan" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Trenčín · Slovensko
              </span>
            </div>
          </div>

          <FooterColumn title="Navigácia" links={navItems.slice(0, 6)} />
          <FooterColumn title="Služby" links={footerServices} />

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">
              Kontakt
            </h2>
            <address className="mt-6 space-y-3 text-sm not-italic leading-6 text-slate-400">
              <p>WorkUnit s.r.o.</p>
              <p>Pod Juhom 7666/1</p>
              <p>911 01 Trenčín</p>
              <p>IČO: 54883288</p>
              <p className="text-slate-500">Telefón: doplniť</p>
              <p className="text-slate-500">E-mail: doplniť</p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} WorkUnit s.r.o. Všetky práva vyhradené.</p>
          <div className="flex gap-5">
            <span title="Právna stránka bude doplnená">Ochrana osobných údajov</span>
            <span title="Právna stránka bude doplnená">Cookies</span>
            <Link href="/faq" className="transition hover:text-cyan">
              FAQ
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">
        {title}
      </h2>
      <ul className="mt-6 space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
