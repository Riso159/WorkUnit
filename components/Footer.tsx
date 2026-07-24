import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { contacts } from "@/lib/content";
import { footerServices, navItems } from "@/lib/routes";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/_workunit_/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/WorkUnitsro",
  },
] as const;

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
          </div>

          <FooterColumn title="Navigácia" links={navItems} />
          <FooterColumn title="Služby" links={footerServices} />

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">
              Kontakt
            </h2>
            <address className="mt-6 space-y-3 text-sm not-italic leading-6 text-slate-400">
              {contacts.footer.emails.map((email) => (
                <p key={email.href}>
                  <a className="transition hover:text-cyan" href={email.href}>
                    {email.display}
                  </a>
                </p>
              ))}
              <p>
                <a className="transition hover:text-cyan" href={contacts.footer.phone.href}>
                  {contacts.footer.phone.display}
                </a>
              </p>
            </address>
            <div className="mt-8">
  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">
    Sociálne siete
  </h3>
  <div className="mt-4 flex flex-wrap gap-3">
    {socialLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Otvoriť ${link.label} WorkUnit v novom okne`}
        className="border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400 transition hover:border-cyan hover:text-cyan"
      >
        {link.label}
      </a>
    ))}
  </div>
</div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} WorkUnit s.r.o. Všetky práva vyhradené.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/ochrana-osobnych-udajov" className="transition hover:text-cyan">
              Ochrana osobných údajov
            </Link>
            <Link href="/cookies" className="transition hover:text-cyan">
              Cookies
            </Link>
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
