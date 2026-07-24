import { SitePage } from "@/components/SitePage";
import { getPageMetadata } from "@/lib/site-content";

export const metadata = getPageMetadata("sk", "privacy");

export default function PrivacyPage() {
  return <SitePage locale="sk" pageId="privacy" />;
}
