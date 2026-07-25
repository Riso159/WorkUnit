import { SitePage } from "@/components/SitePage";
import { getPageMetadata } from "@/lib/site-content";

export const metadata = getPageMetadata("sk", "contact");

export default function ContactPage() {
  return <SitePage locale="sk" pageId="contact" />;
}
