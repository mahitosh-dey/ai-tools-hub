import Link from "next/link";

interface Props {
  currentPage: number;
  totalPages: number;
  basePath: string;
  query?: string;
}

function buildHref(basePath: string, page: number, query?: string) {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `${basePath}?${qs}` : basePath;
}

export default function Pagination({ currentPage, totalPages, basePath, query }: Props) {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }

  const btnBase: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "2.2rem",
    height: "2.2rem",
    padding: "0 0.6rem",
    borderRadius: "8px",
    fontSize: "0.875rem",
    fontWeight: 500,
    textDecoration: "none",
    border: "1px solid #2a2a3d",
    transition: "all 0.15s",
  };

  return (
    <nav
      aria-label="Pagination"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.4rem",
        marginTop: "3rem",
        flexWrap: "wrap",
      }}
    >
      {/* Prev */}
      {currentPage > 1 ? (
        <Link
          href={buildHref(basePath, currentPage - 1, query)}
          style={{ ...btnBase, background: "#12121a", color: "#94a3b8" }}
        >
          ← Prev
        </Link>
      ) : (
        <span style={{ ...btnBase, background: "#0d0d14", color: "#2a2a3d", cursor: "not-allowed" }}>
          ← Prev
        </span>
      )}

      {/* Page numbers */}
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} style={{ color: "#475569", padding: "0 0.2rem" }}>
            …
          </span>
        ) : (
          <Link
            key={p}
            href={buildHref(basePath, p as number, query)}
            style={{
              ...btnBase,
              background: p === currentPage ? "rgba(168,85,247,0.15)" : "#12121a",
              color: p === currentPage ? "#c084fc" : "#94a3b8",
              borderColor: p === currentPage ? "rgba(168,85,247,0.4)" : "#2a2a3d",
              fontWeight: p === currentPage ? 700 : 500,
            }}
          >
            {p}
          </Link>
        )
      )}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={buildHref(basePath, currentPage + 1, query)}
          style={{ ...btnBase, background: "#12121a", color: "#94a3b8" }}
        >
          Next →
        </Link>
      ) : (
        <span style={{ ...btnBase, background: "#0d0d14", color: "#2a2a3d", cursor: "not-allowed" }}>
          Next →
        </span>
      )}
    </nav>
  );
}
