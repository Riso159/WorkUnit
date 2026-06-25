import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { company } from "@/lib/content";
import { footerServices, navItems } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container>
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_.9fr_1.15fr] lg:py-20">
          <div>
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              WorkUnit s.r.o. zabezpečuje pracovné tímy a subdodávateľské služby
              pre firmy v stavebníctve, logistike a výrobe.
            </p>
            <p className="mt-5 max-w-sm text-xs leading-6 text-slate-500">
              TODO pred spustením: doplniť finálne právne texty GDPR a cookies.
            </p>
          </div>

          <FooterColumn title="Navigácia" links={navItems} />
          <FooterColumn title="Služby" links={footerServices} />

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">
              Kontakt a firemné údaje
            </h2>
            <address className="mt-6 space-y-3 text-sm not-italic leading-6 text-slate-400">
              <p>{company.name}</p>
              <p>{company.address}</p>
              <p>IČO: {company.ico}</p>
              <p>DIČ: {company.dic}</p>
              <p>IČ DPH: {company.icDph}</p>
              <p>
                <a className="transition hover:text-cyan" href={`mailto:${company.emailPrimary}`}>
                  {company.emailPrimary}
                </a>
              </p>
              <p>
                <a className="transition hover:text-cyan" href={`mailto:${company.emailSales}`}>
                  {company.emailSales}
                </a>
              </p>
              <p className="text-slate-500">Telefón: placeholder</p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} WorkUnit s.r.o. Všetky práva vyhradené.</p>
          <div className="flex flex-wrap gap-5">
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
