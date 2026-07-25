import { SitePage } from "@/components/SitePage";
import { getPageMetadata } from "@/lib/site-content";

export const metadata = getPageMetadata("sk", "home");

export default function HomePage() {
  return <SitePage locale="sk" pageId="home" />;
}
