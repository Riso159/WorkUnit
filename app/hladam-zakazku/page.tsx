import { SitePage } from "@/components/SitePage";
import { getPageMetadata } from "@/lib/site-content";

export const metadata = getPageMetadata("sk", "recruitment");

export default function RecruitmentPage() {
  return <SitePage locale="sk" pageId="recruitment" />;
}
