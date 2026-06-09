"use client";

const tools = [
  { name: "ChatGPT", desc: "AI chat & writing", icon: "💬", tag: "Popular" },
  { name: "Midjourney", desc: "AI image generation", icon: "🎨", tag: "Hot" },
  { name: "Jasper AI", desc: "Marketing copy", icon: "✍️", tag: "Affiliate" },
  { name: "Claude AI", desc: "Advanced reasoning", icon: "🧠", tag: "New" },
  { name: "Perplexity", desc: "AI-powered search", icon: "🔍", tag: "Rising" },
  { name: "ElevenLabs", desc: "AI voice synthesis", icon: "🎙️", tag: "Creator" },
];

export default function ToolGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: "1rem",
      }}
    >
      {tools.map((tool) => (
        <div
          key={tool.name}
          style={{
            background: "#12121a",
            border: "1px solid #2a2a3d",
            borderRadius: "12px",
            padding: "1.25rem",
            textAlign: "center",
            cursor: "pointer",
            transition: "border-color 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "#a855f7";
            el.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "#2a2a3d";
            el.style.transform = "translateY(0)";
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{tool.icon}</div>
          <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.9rem" }}>{tool.name}</div>
          <div style={{ color: "#64748b", fontSize: "0.75rem", marginBottom: "0.5rem" }}>{tool.desc}</div>
          <span
            style={{
              background: "rgba(168,85,247,0.15)",
              color: "#c084fc",
              padding: "0.15rem 0.5rem",
              borderRadius: "10px",
              fontSize: "0.7rem",
              fontWeight: 600,
            }}
          >
            {tool.tag}
          </span>
        </div>
      ))}
    </div>
  );
}
