"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "aivault_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage disabled: don't show banner
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ consent: "accepted", ts: Date.now() }));
    } catch {}
    setVisible(false);
    // Signal Google's consent framework, if present
    if (typeof window !== "undefined") {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
    }
  };

  const reject = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ consent: "rejected", ts: Date.now() }));
    } catch {}
    setVisible(false);
    if (typeof window !== "undefined") {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: "1rem",
        left: "1rem",
        right: "1rem",
        maxWidth: "720px",
        margin: "0 auto",
        background: "#12121a",
        border: "1px solid #2a2a3d",
        borderRadius: "12px",
        padding: "1rem 1.25rem",
        boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
        zIndex: 9999,
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <p style={{ color: "#cbd5e1", fontSize: "0.85rem", lineHeight: 1.55, margin: 0, flex: "1 1 320px" }}>
        We use cookies for analytics and to display personalised ads. Read our{" "}
        <Link href="/privacy" style={{ color: "#a855f7" }}>
          Privacy Policy
        </Link>{" "}
        for details.
      </p>
      <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
        <button
          onClick={reject}
          style={{
            background: "transparent",
            color: "#94a3b8",
            border: "1px solid #2a2a3d",
            borderRadius: "8px",
            padding: "0.5rem 1rem",
            fontSize: "0.85rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Reject
        </button>
        <button
          onClick={accept}
          style={{
            background: "linear-gradient(135deg, #a855f7, #22d3ee)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.5rem 1rem",
            fontSize: "0.85rem",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
