import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import AboutHero from "@/components/sections/AboutHero";
import Productivity from "@/components/sections/Productivity";
import Workflow from "@/components/sections/Workflow";
import Teamwork from "@/components/sections/Teamwork";
import Solutions from "@/components/sections/Solutions";
import AutomationBenefits from "@/components/sections/AutomationBenefits";
import ClientStories from "@/components/sections/ClientStories";
export const metadata: Metadata = siteConfig.metadata["/about"];
export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Productivity />
      <Workflow />
      <Teamwork />
      <Solutions />
      <AutomationBenefits />
      <ClientStories />
    </main>
  );
}
