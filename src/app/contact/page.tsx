import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import Contact from "@/components/sections/Contact";
import ContactFAQ from "@/components/sections/ContactFAQ";
export const metadata: Metadata = siteConfig.metadata["/contact"];
export default function ContactPage() {
  return (
    <div className="main">
      <Contact />
      <ContactFAQ />
    </div>
  );
}
