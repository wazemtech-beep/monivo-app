import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import FeaturesHero from "@/components/sections/FeaturesHero";
import FeatureProcess from "@/components/sections/FeatureProcess";
import FeatureAutomation from "@/components/sections/FeatureAutomation";
import FeatureDetails from "@/components/sections/FeatureDetails";
import AISupport from "@/components/sections/AISupport";
import Testimonials from "@/components/sections/Testimonials";
export const metadata: Metadata = siteConfig.metadata["/features"];
export default function FeaturesPage() {
  return (
    <div className="main">
      <div className="rt-section-background rt-position-relative">
        <FeaturesHero />
        <FeatureProcess />
        <div className="rt-section-background-overlay"></div>
      </div>
      <div className="rt-section-background-v5">
        <FeatureAutomation />
        <FeatureDetails />
      </div>
      <AISupport />
      <Testimonials />
    </div>
  );
}
