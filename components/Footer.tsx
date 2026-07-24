"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { contacts } from "@/lib/content";
import {
  chromeCopy,
  getLocaleFromPathname,
  navPageIds,
  routeFor,
} from "@/lib/i18n";

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
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = chromeCopy[locale];
  const navItems = navPageIds.map((pageId) => ({
    label: copy.nav[pageId],
    href: routeFor(locale, pageId),
  }));
  const serviceLinks = copy.footer.serviceLinks.map((link) => ({
    label: link.label,
    href: routeFor(locale, "services", link.hash),
  }));

  return (
    <footer lang={locale} className="bg-ink text-white">
      <Container>
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_.9fr_1.15fr] lg:py-20">
          <div>
            <Logo
              light
              href={routeFor(locale, "home")}
              ariaLabel={copy.logoAria}
            />
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              {copy.footer.description}
            </p>
          </div>

          <FooterColumn title={copy.footer.navigation} links={navItems} />
          <FooterColumn title={copy.footer.services} links={serviceLinks} />

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">
              {copy.footer.contact}
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
                {copy.footer.social}
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={copy.footer.socialAria.replace("{network}", link.label)}
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
          <p>
            © {new Date().getFullYear()} WorkUnit s.r.o. {copy.footer.rights}
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href={routeFor(locale, "privacy")} className="transition hover:text-cyan">
              {copy.footer.privacy}
            </Link>
            <Link href={routeFor(locale, "cookies")} className="transition hover:text-cyan">
              Cookies
            </Link>
            <Link href={routeFor(locale, "faq")} className="transition hover:text-cyan">
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
  links: readonly { label: string; href: string }[];
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
