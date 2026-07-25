import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteChrome } from "@/components/SiteChrome";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.workunit.sk"),
  title: {
    default: "WorkUnit s.r.o. | Pracovné tímy a subdodávateľské služby",
    template: "%s | WorkUnit s.r.o.",
  },
  description:
    "Pracovné tímy pre stavebníctvo, logistiku, výrobu a montážne projekty na Slovensku a v rámci EÚ.",
  openGraph: {
    title: "WorkUnit s.r.o. | Pracovné tímy a subdodávateľské služby",
    description:
      "Pracovné tímy pre projekty na Slovensku, v Česku, Nemecku, Rakúsku a Holandsku.",
    type: "website",
    locale: "sk_SK",
  },
};

export default function SlovakRootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="sk">
      <body>
        <SiteChrome locale="sk">{children}</SiteChrome>
      </body>
    </html>
  );
}
