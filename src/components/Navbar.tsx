"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/category/reviews" },
  { label: "Tutorials", href: "/category/tutorials" },
  { label: "Comparisons", href: "/category/comparisons" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    router.push(`/blog?q=${encodeURIComponent(q)}`);
    setSearchOpen(false);
    setSearchQuery("");
  }

  function closeSearch() {
    setSearchOpen(false);
    setSearchQuery("");
  }

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(13,13,20,0.92)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid #252538",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              padding: "0.3rem 0.6rem",
              borderRadius: "10px",
              background: "rgba(108,99,255,0.06)",
              border: "1px solid rgba(108,99,255,0.15)",
              display: "flex",
              alignItems: "center",
              transition: "background 0.2s, border-color 0.2s",
              boxShadow: "0 0 20px rgba(108,99,255,0.08)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "rgba(108,99,255,0.12)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(108,99,255,0.28)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "rgba(108,99,255,0.06)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(108,99,255,0.15)";
            }}
          >
            <Image
              src="/logo.png"
              alt="AI Vault"
              width={44}
              height={44}
              style={{ display: "block", borderRadius: "6px" }}
              priority
            />
          </div>
        </Link>

        {/* Desktop right side */}
        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
        >
          {/* Nav links — hidden when search is open */}
          {!searchOpen && navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.4rem 0.75rem",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  fontWeight: active ? 600 : 400,
                  color: active ? "#e2e8f0" : "#64748b",
                  textDecoration: "none",
                  background: active ? "#1c1c2e" : "transparent",
                  transition: "color 0.15s, background 0.15s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#e2e8f0";
                    (e.currentTarget as HTMLAnchorElement).style.background = "#13131e";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {!searchOpen && (
            <div style={{ width: "1px", height: "20px", background: "#252538", margin: "0 0.25rem" }} />
          )}

          {/* Search — icon or expanded input */}
          {searchOpen ? (
            <form
              onSubmit={handleSearch}
              style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
            >
              <div style={{ position: "relative" }}>
                <svg
                  style={{
                    position: "absolute", left: "0.75rem", top: "50%",
                    transform: "translateY(-50%)", width: "0.9rem", height: "0.9rem",
                    color: "#475569", pointerEvents: "none",
                  }}
                  fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Escape" && closeSearch()}
                  placeholder="Search posts…"
                  style={{
                    width: "260px",
                    background: "#12121a",
                    border: "1px solid #a855f7",
                    borderRadius: "8px",
                    padding: "0.45rem 0.75rem 0.45rem 2.2rem",
                    color: "#e2e8f0",
                    fontSize: "0.875rem",
                    outline: "none",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  background: "rgba(168,85,247,0.15)",
                  border: "1px solid rgba(168,85,247,0.35)",
                  color: "#c084fc",
                  borderRadius: "7px",
                  padding: "0.42rem 0.75rem",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Go
              </button>
              <button
                type="button"
                onClick={closeSearch}
                style={{
                  background: "none",
                  border: "none",
                  color: "#475569",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "0.25rem",
                  lineHeight: 1,
                }}
                aria-label="Close search"
              >
                ✕
              </button>
            </form>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              style={{
                background: "none",
                border: "1px solid #2a2a3d",
                borderRadius: "7px",
                color: "#64748b",
                cursor: "pointer",
                padding: "0.4rem 0.55rem",
                display: "flex",
                alignItems: "center",
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#e2e8f0";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#475569";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#64748b";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#2a2a3d";
              }}
            >
              <svg
                width="15" height="15" fill="none" stroke="currentColor"
                strokeWidth={2} viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          )}

          {!searchOpen && (
            <>
              <div style={{ width: "1px", height: "20px", background: "#252538", margin: "0 0.25rem" }} />
              <Link
                href="/newsletter"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #22d3ee)",
                  color: "#fff",
                  padding: "0.4rem 1rem",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                Newsletter
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#94a3b8",
            fontSize: "1.35rem",
            cursor: "pointer",
            padding: "0.25rem",
            lineHeight: 1,
          }}
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid #252538",
            background: "#0d0d14",
            padding: "1rem 1.5rem 1.25rem",
          }}
        >
          {/* Mobile search */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const q = searchQuery.trim();
              if (!q) return;
              router.push(`/blog?q=${encodeURIComponent(q)}`);
              setMenuOpen(false);
              setSearchQuery("");
            }}
            style={{
              display: "flex",
              gap: "0.5rem",
              marginBottom: "0.75rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid #1c1c2e",
            }}
          >
            <div style={{ position: "relative", flex: 1 }}>
              <svg
                style={{
                  position: "absolute", left: "0.75rem", top: "50%",
                  transform: "translateY(-50%)", width: "0.85rem", height: "0.85rem",
                  color: "#475569", pointerEvents: "none",
                }}
                fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts…"
                style={{
                  width: "100%",
                  background: "#12121a",
                  border: "1px solid #2a2a3d",
                  borderRadius: "8px",
                  padding: "0.5rem 0.75rem 0.5rem 2.2rem",
                  color: "#e2e8f0",
                  fontSize: "0.875rem",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                background: "rgba(168,85,247,0.15)",
                border: "1px solid rgba(168,85,247,0.35)",
                color: "#c084fc",
                borderRadius: "7px",
                padding: "0.5rem 0.75rem",
                fontSize: "0.8rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Go
            </button>
          </form>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.6rem 0",
                color: pathname === link.href ? "#e2e8f0" : "#94a3b8",
                textDecoration: "none",
                fontSize: "0.95rem",
                borderBottom: "1px solid #1c1c2e",
                fontWeight: pathname === link.href ? 600 : 400,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/newsletter"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-block",
              marginTop: "0.75rem",
              background: "linear-gradient(135deg, #a855f7, #22d3ee)",
              color: "#fff",
              padding: "0.5rem 1.25rem",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Newsletter →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 760px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
