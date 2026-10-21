import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import Pricing from "@/components/sections/Pricing";
import PricingComparison from "@/components/sections/PricingComparison";
export const metadata: Metadata = siteConfig.metadata["/pricing-one"];
export default function PricingOnePage() {
  return (
    <div className="main">
      <Pricing />
      <PricingComparison />
    </div>
  );
}
