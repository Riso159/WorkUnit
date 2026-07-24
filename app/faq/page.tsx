import { SitePage } from "@/components/SitePage";
import { getPageMetadata } from "@/lib/site-content";

export const metadata = getPageMetadata("sk", "faq");

export default function FaqPage() {
  return <SitePage locale="sk" pageId="faq" />;
}
