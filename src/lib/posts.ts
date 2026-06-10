import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  updatedAt?: string;
  excerpt: string;
  category: string;
  tags: string[];
  coverImage: string;
  readTime: string;
  author: string;
  affiliate?: boolean;
  rating?: number;
  featured?: boolean;
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
      date: data.date ?? todayStr,
      excerpt: data.excerpt ?? "",
      category: data.category ?? "General",
      tags: data.tags ?? [],
      coverImage: data.coverImage ?? "/images/default-cover.jpg",
      readTime: data.readTime ?? "5 min read",
      author: data.author ?? "Mahtosh Dey",
      affiliate: data.affiliate ?? false,
      rating: data.rating ?? undefined,
      updatedAt: data.updatedAt ?? undefined,
      featured: data.featured ?? false,
    } as PostMeta;
  });

  return posts
    .filter((p) => p.date)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
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
      date: data.date ?? todayStr,
      excerpt: data.excerpt ?? "",
      category: data.category ?? "General",
      tags: data.tags ?? [],
      coverImage: data.coverImage ?? "/images/default-cover.jpg",
      readTime: data.readTime ?? "5 min read",
      author: data.author ?? "Mahtosh Dey",
      affiliate: data.affiliate ?? false,
      rating: data.rating ?? undefined,
      updatedAt: data.updatedAt ?? undefined,
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
