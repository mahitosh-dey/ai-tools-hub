import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/posts";
import BlogIndex from "@/components/BlogIndex";

const baseUrl = "https://www.aivaultblog.com";

// The canonical no longer varies by ?page=. A statically exported /blog is one
// document, and the sitemap only ever listed the bare /blog URL, so nothing
// that was submitted to Google changes. Paginated views are a reader
// convenience now, not separate indexable pages.
export const metadata: Metadata = {
  title: "All Posts",
  description:
    "Browse all AI tool reviews, tutorials, and comparisons on AI Vault. Honest picks for ChatGPT, Midjourney, Grammarly, and more, updated weekly.",
  alternates: { canonical: `${baseUrl}/blog` },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Vault",
    url: `${baseUrl}/blog`,
    title: "All Posts | AI Vault",
    description:
      "Browse all AI tool reviews, tutorials, and comparisons on AI Vault. Honest picks for ChatGPT, Midjourney, Grammarly, and more, updated weekly.",
  },
};

export default function BlogPage() {
  return <BlogIndex posts={getAllPosts()} categories={getAllCategories()} />;
}
