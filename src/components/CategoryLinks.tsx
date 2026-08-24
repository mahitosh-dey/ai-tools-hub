"use client";

import Link from "next/link";

const CATEGORIES = [
  { name: "Reviews", slug: "reviews", icon: "⭐", accent: "#a855f7", bg: "rgba(168,85,247,0.08)", border: "rgba(168,85,247,0.2)" },
  { name: "Tutorials", slug: "tutorials", icon: "📖", accent: "#38bdf8", bg: "rgba(56,189,248,0.08)", border: "rgba(56,189,248,0.2)" },
  { name: "Comparisons", slug: "comparisons", icon: "⚖️", accent: "#4ade80", bg: "rgba(74,222,128,0.08)", border: "rgba(74,222,128,0.2)" },
  { name: "Tools", slug: "tools", icon: "🛠️", accent: "#f97316", bg: "rgba(249,115,22,0.08)", border: "rgba(249,115,22,0.2)" },
  { name: "Guides", slug: "guides", icon: "🧭", accent: "#22d3ee", bg: "rgba(34,211,238,0.08)", border: "rgba(34,211,238,0.2)" },
];

export default function CategoryLinks({ counts = {} }: { counts?: Record<string, number> }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "0.85rem",
      }}
    >
      {CATEGORIES.map((cat) => {
        const count = counts[cat.slug] ?? 0;
        return (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "#13131e",
                border: "1px solid #252538",
                borderRadius: "12px",
                padding: "1.1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.85rem",
                transition: "border-color 0.15s, background 0.15s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = cat.border;
                el.style.background = cat.bg;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#252538";
                el.style.background = "#13131e";
              }}
            >
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{cat.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.9rem" }}>{cat.name}</div>
                <div style={{ color: "#475569", fontSize: "0.75rem", marginTop: "0.1rem" }}>
                  {count} {count === 1 ? "post" : "posts"}
                </div>
              </div>
              <span style={{ color: cat.accent, fontSize: "0.85rem", fontWeight: 600 }}>→</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
