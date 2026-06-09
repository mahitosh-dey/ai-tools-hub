import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Calendar",
  description: "30-post content plan for AI Vault Blog",
};

const weeks = [
  {
    week: 1,
    theme: "Foundation",
    goal: "Get indexed fast — target beginners",
    posts: [
      { day: "Mon", title: "What Is ChatGPT? A Beginner's Complete Guide (2025)", category: "Tutorials", difficulty: "Low", keyword: "what is chatgpt" },
      { day: "Wed", title: "10 Best Free AI Tools You Can Use Right Now", category: "Tools", difficulty: "Medium", keyword: "free AI tools" },
      { day: "Fri", title: "How to Write a Blog Post 10x Faster Using AI", category: "Tutorials", difficulty: "Low", keyword: "write blog post with AI" },
    ],
  },
  {
    week: 2,
    theme: "First Reviews",
    goal: "Build review content for future affiliate income",
    posts: [
      { day: "Mon", title: "ChatGPT Plus Review 2025: Is It Worth $20/Month?", category: "Reviews", difficulty: "Medium", keyword: "chatgpt plus review" },
      { day: "Wed", title: "Claude AI vs ChatGPT: Which is Better in 2025?", category: "Comparisons", difficulty: "Medium", keyword: "claude vs chatgpt" },
      { day: "Fri", title: "Best AI Tools for Students in 2025 (Free & Paid)", category: "Tools", difficulty: "Low", keyword: "AI tools for students" },
    ],
  },
  {
    week: 3,
    theme: "Tutorials",
    goal: "Long-tail keywords rank faster",
    posts: [
      { day: "Mon", title: "How to Use ChatGPT to Make Money Online (7 Methods)", category: "Tutorials", difficulty: "Low", keyword: "make money with chatgpt" },
      { day: "Wed", title: "Midjourney for Beginners: Stunning AI Art in 10 Minutes", category: "Tutorials", difficulty: "Low", keyword: "midjourney for beginners" },
      { day: "Fri", title: "How to Build a Faceless YouTube Channel with AI", category: "Tutorials", difficulty: "Low", keyword: "faceless youtube channel AI" },
    ],
  },
  {
    week: 4,
    theme: "Image AI",
    goal: "Image tools have high affiliate value",
    posts: [
      { day: "Mon", title: "Midjourney vs DALL-E 3: Which Wins in 2025?", category: "Comparisons", difficulty: "Medium", keyword: "midjourney vs dalle" },
      { day: "Wed", title: "Midjourney Review 2025: Pricing, Features & Worth It?", category: "Reviews", difficulty: "Medium", keyword: "midjourney review" },
      { day: "Fri", title: "Best AI Image Generators in 2025 (Ranked & Reviewed)", category: "Tools", difficulty: "High", keyword: "best AI image generator" },
    ],
  },
  {
    week: 5,
    theme: "Writing Tools",
    goal: "Writing tools = highest affiliate commissions",
    posts: [
      { day: "Mon", title: "Jasper AI Review 2025: Is It the Best AI Writing Tool?", category: "Reviews", difficulty: "Medium", keyword: "jasper ai review" },
      { day: "Wed", title: "Jasper AI vs ChatGPT: Which Should Writers Use?", category: "Comparisons", difficulty: "Low", keyword: "jasper vs chatgpt" },
      { day: "Fri", title: "Best AI Writing Tools in 2025 (Bloggers & Marketers)", category: "Tools", difficulty: "High", keyword: "best AI writing tools" },
    ],
  },
  {
    week: 6,
    theme: "Voice & Video AI",
    goal: "Creator tools — underserved niche",
    posts: [
      { day: "Mon", title: "ElevenLabs Review 2025: Best AI Voice Generator?", category: "Reviews", difficulty: "Low", keyword: "elevenlabs review" },
      { day: "Wed", title: "How to Create AI Voiceovers for YouTube (Free & Paid)", category: "Tutorials", difficulty: "Low", keyword: "AI voiceover for youtube" },
      { day: "Fri", title: "Best AI Video Tools in 2025 (No Camera Needed)", category: "Tools", difficulty: "Low", keyword: "AI video tools" },
    ],
  },
  {
    week: 7,
    theme: "Productivity & Business",
    goal: "Business audience = highest AdSense CPM",
    posts: [
      { day: "Mon", title: "Best AI Tools for Freelancers in 2025 (Save 10hrs/Week)", category: "Tools", difficulty: "Low", keyword: "AI tools for freelancers" },
      { day: "Wed", title: "Notion AI Review 2025: Is It Worth Upgrading?", category: "Reviews", difficulty: "Medium", keyword: "notion ai review" },
      { day: "Fri", title: "How to Use AI to Write Emails That Get Replies", category: "Tutorials", difficulty: "Low", keyword: "AI email writing" },
    ],
  },
  {
    week: 8,
    theme: "SEO & Marketing AI",
    goal: "Marketing readers have highest purchase intent",
    posts: [
      { day: "Mon", title: "Best AI SEO Tools in 2025 (That Actually Work)", category: "Tools", difficulty: "Medium", keyword: "AI SEO tools" },
      { day: "Wed", title: "Surfer SEO vs Semrush: Which AI SEO Tool Wins?", category: "Comparisons", difficulty: "Low", keyword: "surfer seo vs semrush" },
      { day: "Fri", title: "How to Use AI for Social Media Marketing (Full Guide)", category: "Tutorials", difficulty: "Low", keyword: "AI social media marketing" },
    ],
  },
  {
    week: 9,
    theme: "Comparison Deep-Dives",
    goal: "Comparison posts convert best for affiliate",
    posts: [
      { day: "Mon", title: "Grammarly vs QuillBot: Which is Better in 2025?", category: "Comparisons", difficulty: "Medium", keyword: "grammarly vs quillbot" },
      { day: "Wed", title: "ChatGPT vs Google Gemini: Which AI is Smarter?", category: "Comparisons", difficulty: "High", keyword: "chatgpt vs gemini" },
      { day: "Fri", title: "Canva AI vs Adobe Firefly: Best AI Design Tool?", category: "Comparisons", difficulty: "Low", keyword: "canva ai vs adobe firefly" },
    ],
  },
  {
    week: 10,
    theme: "Pillar Posts",
    goal: "Backbone of your site — rank slowly, pay forever",
    posts: [
      { day: "Mon", title: "50 Best AI Tools in 2025 (Every Category Covered)", category: "Tools", difficulty: "Very High", keyword: "best AI tools 2025" },
      { day: "Wed", title: "How to Start Using AI Tools: The Complete Beginner Guide", category: "Tutorials", difficulty: "Medium", keyword: "how to use AI tools" },
      { day: "Fri", title: "How to Make Money with AI Tools in 2025 (7 Proven Ways)", category: "Tutorials", difficulty: "Medium", keyword: "make money with AI tools" },
    ],
  },
];

const categoryColors: Record<string, { bg: string; color: string }> = {
  Reviews: { bg: "rgba(168,85,247,0.15)", color: "#c084fc" },
  Comparisons: { bg: "rgba(236,72,153,0.15)", color: "#f472b6" },
  Tutorials: { bg: "rgba(34,211,238,0.15)", color: "#22d3ee" },
  Tools: { bg: "rgba(250,204,21,0.15)", color: "#fbbf24" },
};

const difficultyColors: Record<string, { color: string }> = {
  Low: { color: "#34d399" },
  Medium: { color: "#fbbf24" },
  High: { color: "#f87171" },
  "Very High": { color: "#ef4444" },
};

export default function CalendarPage() {
  const total = weeks.reduce((sum, w) => sum + w.posts.length, 0);

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1.5rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#e2e8f0", marginBottom: "0.5rem" }}>
          Content Calendar
        </h1>
        <p style={{ color: "#64748b" }}>
          {total} posts · 10 weeks · 3 posts per week — ordered easiest-to-rank first
        </p>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1rem",
          marginBottom: "2.5rem",
        }}
      >
        {[
          { label: "Total Posts", value: "30", icon: "📝" },
          { label: "Weeks", value: "10", icon: "📅" },
          { label: "Posts/Week", value: "3", icon: "⚡" },
          { label: "Easy Wins", value: "18", icon: "🎯" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: "#12121a",
              border: "1px solid #2a2a3d",
              borderRadius: "10px",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "1.5rem" }}>{s.icon}</div>
            <div
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                background: "linear-gradient(135deg, #a855f7, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {s.value}
            </div>
            <div style={{ color: "#64748b", fontSize: "0.75rem" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Weeks */}
      {weeks.map((week) => (
        <div key={week.week} style={{ marginBottom: "2rem" }}>
          {/* Week header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7, #22d3ee)",
                color: "#fff",
                padding: "0.25rem 0.8rem",
                borderRadius: "20px",
                fontSize: "0.8rem",
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              Week {week.week}
            </span>
            <span style={{ color: "#e2e8f0", fontWeight: 700 }}>{week.theme}</span>
            <span style={{ color: "#475569", fontSize: "0.8rem" }}>— {week.goal}</span>
          </div>

          {/* Posts */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {week.posts.map((post, i) => {
              const catStyle = categoryColors[post.category] ?? { bg: "rgba(148,163,184,0.15)", color: "#94a3b8" };
              const diffStyle = difficultyColors[post.difficulty] ?? { color: "#94a3b8" };

              return (
                <div
                  key={i}
                  style={{
                    background: "#12121a",
                    border: "1px solid #2a2a3d",
                    borderRadius: "8px",
                    padding: "0.85rem 1.25rem",
                    display: "grid",
                    gridTemplateColumns: "40px 1fr auto",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  {/* Day */}
                  <span
                    style={{
                      color: "#a855f7",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    {post.day}
                  </span>

                  {/* Title + keyword */}
                  <div>
                    <div style={{ color: "#e2e8f0", fontSize: "0.9rem", fontWeight: 500, marginBottom: "0.2rem" }}>
                      {post.title}
                    </div>
                    <div style={{ color: "#475569", fontSize: "0.75rem" }}>
                      Keyword: <em>{post.keyword}</em>
                    </div>
                  </div>

                  {/* Badges */}
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
                    <span
                      style={{
                        background: catStyle.bg,
                        color: catStyle.color,
                        padding: "0.15rem 0.55rem",
                        borderRadius: "10px",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      style={{
                        color: diffStyle.color,
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        padding: "0.15rem 0.55rem",
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: "10px",
                      }}
                    >
                      {post.difficulty}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Tips */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(34,211,238,0.1))",
          border: "1px solid rgba(168,85,247,0.3)",
          borderRadius: "12px",
          padding: "1.5rem",
          marginTop: "2rem",
        }}
      >
        <h3 style={{ color: "#e2e8f0", fontWeight: 700, marginBottom: "1rem" }}>
          📌 SEO Tips for Every Post
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {[
            "Put keyword in title, first paragraph & one H2",
            "Add a comparison table in every review post",
            "Add a Quick Answer box at the top (gets snippets)",
            "Internally link every post to 2–3 older posts",
            "Aim for 1,500+ words minimum",
            "Add real screenshots of the tools you review",
          ].map((tip) => (
            <div
              key={tip}
              style={{
                display: "flex",
                gap: "0.5rem",
                color: "#94a3b8",
                fontSize: "0.85rem",
                alignItems: "flex-start",
              }}
            >
              <span style={{ color: "#a855f7", marginTop: "1px" }}>✓</span>
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
