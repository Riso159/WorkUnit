import { SitePage } from "@/components/SitePage";
import { getPageMetadata } from "@/lib/site-content";

export const metadata = getPageMetadata("sk", "about");

export default function AboutPage() {
  return <SitePage locale="sk" pageId="about" />;
}
