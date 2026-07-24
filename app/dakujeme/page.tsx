import { SitePage } from "@/components/SitePage";
import { getPageMetadata } from "@/lib/site-content";

export const metadata = getPageMetadata("sk", "thankYou");

export default function ThankYouPage() {
  return <SitePage locale="sk" pageId="thankYou" />;
}
