import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.workunit.sk"),
  title: {
    default: "WorkUnit s.r.o. | Personálne a subdodávateľské riešenia",
    template: "%s | WorkUnit s.r.o.",
  },
  description:
    "Pracovné tímy pre stavebníctvo, logistiku, výrobu a montážne projekty na Slovensku a v rámci EÚ.",
  openGraph: {
    title: "WorkUnit s.r.o. | Personálne a subdodávateľské riešenia",
    description:
      "Spoľahlivé pracovné tímy pre projekty na Slovensku a v rámci EÚ.",
    type: "website",
    locale: "sk_SK",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="sk">
      <body>
        <a
          href="#main-content"
          className="fixed left-3 top-3 z-[100] -translate-y-24 bg-cyan px-4 py-3 text-sm font-bold text-ink transition focus:translate-y-0"
        >
          Preskočiť na obsah
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
