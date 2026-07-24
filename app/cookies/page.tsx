import { SitePage } from "@/components/SitePage";
import { getPageMetadata } from "@/lib/site-content";

export const metadata = getPageMetadata("sk", "cookies");

export default function CookiesPage() {
  return <SitePage locale="sk" pageId="cookies" />;
}
