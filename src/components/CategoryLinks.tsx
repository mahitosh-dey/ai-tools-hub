"use client";

import Link from "next/link";

export default function CategoryLinks({ categories }: { categories: string[] }) {
  return (
    <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
      {categories.map((cat) => (
        <Link
          key={cat}
          href={`/category/${cat.toLowerCase()}`}
          style={{
            background: "#13131e",
            border: "1px solid #252538",
            borderRadius: "8px",
            padding: "0.45rem 1rem",
            color: "#64748b",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 500,
            transition: "border-color 0.15s, color 0.15s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "#a855f7";
            el.style.color = "#c084fc";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "#252538";
            el.style.color = "#64748b";
          }}
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}
