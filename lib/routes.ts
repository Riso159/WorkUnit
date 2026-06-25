export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Domov", href: "/" },
  { label: "Služby", href: "/sluzby" },
  { label: "Projekty", href: "/projekty" },
  { label: "O nás", href: "/o-nas" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerServices: NavItem[] = [
  { label: "Stavebníctvo", href: "/sluzby#stavebnictvo" },
  { label: "Skladová logistika", href: "/sluzby#skladova-logistika" },
  { label: "Výroba", href: "/sluzby#vyroba" },
  { label: "Ako prebieha spolupráca", href: "/sluzby#proces" },
];

export const languageItems = [
  { label: "SK", href: "/", active: true },
  { label: "CZ", href: "/cs", active: false },
  { label: "EN", href: "/en", active: false },
  { label: "DE", href: "/de", active: false },
];
