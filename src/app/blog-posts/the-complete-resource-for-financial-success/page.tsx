import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import Article from "@/components/sections/Article";
export const metadata: Metadata =
  siteConfig.metadata[
    "/blog-posts/the-complete-resource-for-financial-success"
  ];
export default function BlogPostsTheCompleteResourceForFinancialSuccessPage() {
  return (
    <div className="main">
      <Article />
    </div>
  );
}
