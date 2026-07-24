import { notFound } from "next/navigation";
import { SitePage } from "@/components/SitePage";
import {
  getStaticLocalizedParams,
  resolveLocalizedPage,
} from "@/lib/i18n";
import { getPageMetadata } from "@/lib/site-content";

type LocalizedPageProps = {
  params: Promise<{ locale: string; slug?: string[] }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticLocalizedParams();
}

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { locale, slug } = await params;
  const resolved = resolveLocalizedPage(locale, slug);

  if (!resolved) {
    return {};
  }

  return getPageMetadata(resolved.locale, resolved.pageId);
}

export default async function LocalizedPage({ params }: LocalizedPageProps) {
  const { locale, slug } = await params;
  const resolved = resolveLocalizedPage(locale, slug);

  if (!resolved) {
    notFound();
  }

  return <SitePage locale={resolved.locale} pageId={resolved.pageId} />;
}
