import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  seoTitle?: string;
  date: string;
  updatedAt?: string;
  excerpt: string;
  // Optional short description for search engines only. Google truncates the
  // meta description around 160 characters, but `excerpt` also renders under
  // each post on the blog index, where a fuller sentence reads better. When
  // set, this overrides `excerpt` in the page head only: the meta description,
  // og:description and twitter:description. The blog card and the JSON-LD
  // still use `excerpt`, because neither is truncated at 160 and the JSON-LD
  // description is not shown as a search snippet. Same relationship
  // `seoTitle` has to `title`.
  metaDescription?: string;
  category: string;
  tags: string[];
  coverImage: string;
  readTime: string;
  author: string;
  affiliate?: boolean;
  // Paid placement. `sponsored: true` switches on the disclosure block, the
  // listing badge, and rel="sponsored" on outbound links. `sponsoredBy` names
  // the advertiser so the disclosure can say who paid, which is the part the
  // FTC actually cares about. Never set one without the other.
  sponsored?: boolean;
  sponsoredBy?: string;
  rating?: number;
  featured?: boolean;
  faqs?: Array<{ q: string; a: string }>;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const todayStr = new Date().toISOString().split("T")[0];

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.(mdx|md)$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title ?? "",
      seoTitle: data.seoTitle ?? undefined,
      date: data.date ?? todayStr,
      excerpt: data.excerpt ?? "",
      metaDescription: data.metaDescription ?? undefined,
      category: data.category ?? "General",
      tags: data.tags ?? [],
      coverImage: data.coverImage ?? "/images/default-cover.webp",
      readTime: data.readTime ?? "5 min read",
      author: data.author ?? "Mahitosh Dey",
      affiliate: data.affiliate ?? false,
      sponsored: data.sponsored ?? false,
      sponsoredBy: data.sponsoredBy ?? undefined,
      rating: data.rating ?? undefined,
      updatedAt: data.updatedAt ?? undefined,
      featured: data.featured ?? false,
      faqs: data.faqs ?? undefined,
    } as PostMeta;
  });

  return posts
    .filter((p) => p.date)
    .sort((a, b) => {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      return a.slug.localeCompare(b.slug);
    });
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
    const mdPath = path.join(postsDirectory, `${slug}.md`);
    const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const todayStr = new Date().toISOString().split("T")[0];
    return {
      slug,
      title: data.title ?? "",
      seoTitle: data.seoTitle ?? undefined,
      date: data.date ?? todayStr,
      excerpt: data.excerpt ?? "",
      metaDescription: data.metaDescription ?? undefined,
      category: data.category ?? "General",
      tags: data.tags ?? [],
      coverImage: data.coverImage ?? "/images/default-cover.webp",
      readTime: data.readTime ?? "5 min read",
      author: data.author ?? "Mahitosh Dey",
      affiliate: data.affiliate ?? false,
      sponsored: data.sponsored ?? false,
      sponsoredBy: data.sponsoredBy ?? undefined,
      rating: data.rating ?? undefined,
      updatedAt: data.updatedAt ?? undefined,
      faqs: data.faqs ?? undefined,
      content,
    };
  } catch {
    return null;
  }
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const cats = posts.map((p) => p.category);
  return [...new Set(cats)];
}

export function getFeaturedPosts(count = 3): PostMeta[] {
  return getAllPosts().slice(0, count);
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((p) =>
    p.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getCategoryCount(category: string): number {
  return getAllPosts().filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  ).length;
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = posts.flatMap((p) => p.tags);
  return [...new Set(tags)].sort();
}
