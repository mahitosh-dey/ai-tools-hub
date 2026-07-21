import { MetadataRoute } from "next";
import { getAllPosts, getAllCategories, getAllTags, getPostsByTag, getPostsByCategory } from "@/lib/posts";

const baseUrl = "https://www.aivaultblog.com";

// Minimum posts required for a tag or category page to be worth indexing.
// Fewer than this = thin content, hurts overall site quality signal.
const MIN_POSTS_FOR_TAXONOMY = 3;

export const revalidate = 3600;

function mostRecentPostDate(posts: { updatedAt?: string; date: string }[]): Date {
  const timestamps = posts.map((p) => new Date(p.updatedAt ?? p.date).getTime());
  return new Date(Math.max(...timestamps));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories
    .map((cat) => {
      const catPosts = getPostsByCategory(cat.toLowerCase());
      if (catPosts.length < MIN_POSTS_FOR_TAXONOMY) return null;
      return {
        url: `${baseUrl}/category/${cat.toLowerCase()}`,
        lastModified: mostRecentPostDate(catPosts),
        changeFrequency: "weekly" as const,
        priority: 0.6,
      };
    })
    .filter((e): e is NonNullable<typeof e> => e !== null);

  const tagEntries: MetadataRoute.Sitemap = tags
    .map((tag) => {
      const tagPosts = getPostsByTag(tag);
      if (tagPosts.length < MIN_POSTS_FOR_TAXONOMY) return null;
      return {
        url: `${baseUrl}/tag/${tag}`,
        lastModified: mostRecentPostDate(tagPosts),
        changeFrequency: "weekly" as const,
        priority: 0.4,
      };
    })
    .filter((e): e is NonNullable<typeof e> => e !== null);

  const latestPostDate = posts.length > 0 ? mostRecentPostDate(posts) : new Date();

  return [
    { url: `${baseUrl}/`, lastModified: latestPostDate, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/blog`, lastModified: latestPostDate, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date("2026-07-21"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/newsletter`, lastModified: new Date("2026-07-21"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date("2026-07-21"), changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: new Date("2026-07-21"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date("2026-07-21"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/disclosure`, lastModified: new Date("2026-07-21"), changeFrequency: "yearly", priority: 0.3 },
    ...categoryEntries,
    ...tagEntries,
    ...postEntries,
  ];
}
