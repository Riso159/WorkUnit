import { SitePage } from "@/components/SitePage";
import { getPageMetadata } from "@/lib/site-content";

export const metadata = getPageMetadata("sk", "workerThankYou");

export default function WorkerThankYouPage() {
  return <SitePage locale="sk" pageId="workerThankYou" />;
}
