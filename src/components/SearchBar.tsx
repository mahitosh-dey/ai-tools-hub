"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function SearchBar({ initialQuery = "" }: { initialQuery?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(initialQuery);
  const isUserInput = useRef(false);

  useEffect(() => {
    if (!isUserInput.current) return;
    const timer = setTimeout(() => {
      const params = new URLSearchParams();
      if (value.trim()) params.set("q", value.trim());
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname);
      isUserInput.current = false;
    }, 300);
    return () => clearTimeout(timer);
  }, [value, pathname, router]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    isUserInput.current = true;
    setValue(e.target.value);
  }

  function handleClear() {
    isUserInput.current = true;
    setValue("");
  }

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "480px" }}>
      <svg
        style={{
          position: "absolute",
          left: "0.9rem",
          top: "50%",
          transform: "translateY(-50%)",
          width: "1rem",
          height: "1rem",
          color: "#475569",
          pointerEvents: "none",
        }}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="text"
        placeholder="Search posts..."
        value={value}
        onChange={handleChange}
        style={{
          width: "100%",
          background: "#12121a",
          border: "1px solid #2a2a3d",
          borderRadius: "10px",
          padding: "0.6rem 0.9rem 0.6rem 2.5rem",
          color: "#e2e8f0",
          fontSize: "0.9rem",
          outline: "none",
          boxSizing: "border-box",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#a855f7")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a3d")}
      />
      {value && (
        <button
          onClick={handleClear}
          style={{
            position: "absolute",
            right: "0.7rem",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            color: "#475569",
            cursor: "pointer",
            fontSize: "1rem",
            lineHeight: 1,
            padding: "0.2rem",
          }}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}
