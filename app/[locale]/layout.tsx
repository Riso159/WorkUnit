import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteChrome } from "@/components/SiteChrome";
import { isLocale, type Locale } from "@/lib/i18n";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.workunit.sk"),
};

type LocalizedRootLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function LocalizedRootLayout({
  children,
  params,
}: LocalizedRootLayoutProps) {
  const { locale: routeLocale } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : "sk";

  return (
    <html lang={locale}>
      <body>
        <SiteChrome locale={locale}>{children}</SiteChrome>
      </body>
    </html>
  );
}
