import { SitePage } from "@/components/SitePage";
import { getPageMetadata } from "@/lib/site-content";

export const metadata = getPageMetadata("sk", "services");

export default function ServicesPage() {
  return <SitePage locale="sk" pageId="services" />;
}
