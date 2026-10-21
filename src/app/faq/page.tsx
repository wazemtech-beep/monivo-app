import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import FAQ from "@/components/sections/FAQ";
export const metadata: Metadata = siteConfig.metadata["/faq"];
export default function FaqPage() {
  return (
    <div className="main">
      <FAQ />
    </div>
  );
}
