import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

import "@/styles/index.css";
import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  icons: { icon: "https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581976/wazemtech/monivo/monivo-mark-7a5bb759e477.png", apple: "https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581976/wazemtech/monivo/monivo-mark-7a5bb759e477.png" },
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>
          <div className="avelety-site">
            <Navbar />
            {children}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
