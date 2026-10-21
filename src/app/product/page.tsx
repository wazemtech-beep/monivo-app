import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import ProductHero from "@/components/sections/ProductHero";
import ProductAutomation from "@/components/sections/ProductAutomation";
import Results from "@/components/sections/Results";
import Services from "@/components/sections/Services";
import ProductProcess from "@/components/sections/ProductProcess";
import ProductBenefits from "@/components/sections/ProductBenefits";
import Testimonials from "@/components/sections/Testimonials";
export const metadata: Metadata = siteConfig.metadata["/product"];
export default function ProductPage() {
  return (
    <div className="main">
      <div className="rt-section-background rt-position-relative">
        <ProductHero />
        <ProductAutomation />
        <div className="rt-section-background-overlay rt-dark"></div>
      </div>
      <div className="rt-service-section-gredient-v1">
        <Results />
        <Services />
        <div className="rt-service-section-background-v2">
          <ProductProcess />
          <ProductBenefits />
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
