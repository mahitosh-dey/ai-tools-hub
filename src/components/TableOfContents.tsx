"use client";

import { useState, useEffect } from "react";
import type { TocItem } from "@/lib/toc";

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -60% 0px" }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  return (
    <nav
      style={{
        background: "#12121a",
        border: "1px solid #252538",
        borderRadius: "12px",
        padding: "1.25rem 1.5rem",
        marginBottom: "2.5rem",
      }}
    >
      {/* Header — clickable on mobile */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <span
          style={{
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "#64748b",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Contents
        </span>
        <span
          className="toc-toggle"
          style={{ color: "#475569", fontSize: "0.85rem" }}
        >
          {open ? "▲" : "▼"}
        </span>
      </button>

      {/* Items — always visible on desktop, toggleable on mobile */}
      <ol
        className={`toc-list ${open ? "toc-open" : ""}`}
        style={{ listStyle: "none", margin: "1rem 0 0", padding: 0 }}
      >
        {items.map((item, i) => (
          <li
            key={item.id}
            style={{
              paddingLeft: item.level === 3 ? "1rem" : "0",
              marginBottom: "0.4rem",
            }}
          >
            <a
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "0.6rem",
                textDecoration: "none",
                fontSize: item.level === 3 ? "0.82rem" : "0.88rem",
                color: activeId === item.id ? "#a855f7" : "#64748b",
                fontWeight: activeId === item.id ? 600 : 400,
                transition: "color 0.15s",
                lineHeight: 1.5,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  activeId === item.id ? "#a855f7" : "#64748b")
              }
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  color: activeId === item.id ? "#a855f7" : "#334155",
                  flexShrink: 0,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.text}
            </a>
          </li>
        ))}
      </ol>

      <style>{`
        @media (max-width: 760px) {
          .toc-list { display: none; }
          .toc-list.toc-open { display: block; }
        }
        @media (min-width: 761px) {
          .toc-list { display: block !important; }
          .toc-toggle { display: none; }
        }
      `}</style>
    </nav>
  );
}
