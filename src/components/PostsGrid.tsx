"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

const PER_PAGE = 6;

interface Props {
  posts: PostMeta[];
  basePath: string;
  emptyLabel?: string;
  emptyHref?: string;
}

function Grid({ posts, basePath, emptyLabel, emptyHref }: Props) {
  const searchParams = useSearchParams();
  const currentPage = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10) || 1);
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const safePage = Math.min(currentPage, Math.max(totalPages, 1));
  const paginated = posts.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  if (paginated.length === 0) {
    return (
      <div
        style={{
          background: "#12121a",
          border: "1px dashed #2a2a3d",
          borderRadius: "12px",
          padding: "4rem",
          textAlign: "center",
          color: "#475569",
        }}
      >
        <p>{emptyLabel ?? "No posts found."}</p>
        {emptyHref && (
          <Link href={emptyHref} style={{ color: "#a855f7", textDecoration: "none" }}>
            ← Browse all posts
          </Link>
        )}
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {paginated.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <Pagination currentPage={safePage} totalPages={totalPages} basePath={basePath} />
    </>
  );
}

export default function PostsGrid(props: Props) {
  return (
    <Suspense fallback={null}>
      <Grid {...props} />
    </Suspense>
  );
}
