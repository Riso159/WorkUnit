import { SitePage } from "@/components/SitePage";
import { getPageMetadata } from "@/lib/site-content";

export const metadata = getPageMetadata("sk", "projects");

export default function ProjectsPage() {
  return <SitePage locale="sk" pageId="projects" />;
}
