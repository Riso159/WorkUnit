export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Domov", href: "/" },
  { label: "O nás", href: "/o-nas" },
  { label: "Služby", href: "/sluzby" },
  { label: "Projekty", href: "/projekty" },
  { label: "Pre firmy", href: "/pre-firmy" },
  { label: "Pre pracovníkov", href: "/pre-pracovnikov" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerServices: NavItem[] = [
  { label: "Stavebníctvo", href: "/sluzby/stavebnictvo" },
  { label: "Skladová logistika", href: "/sluzby/skladova-logistika" },
  { label: "Výroba", href: "/sluzby/vyroba" },
  { label: "Subdodávateľské tímy", href: "/pre-firmy" },
];
