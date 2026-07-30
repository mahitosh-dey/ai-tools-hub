import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old slug indexed by Google — redirect to current canonical URL
      {
        source: "/blog/chatgpt-review-2025",
        destination: "/blog/chatgpt-plus-review",
        permanent: true,
      },
      // Duplicate Midjourney beginner guide, consolidated 2026-07-27 into the
      // older/stronger post to stop the two cannibalising the same query.
      {
        source: "/blog/midjourney-complete-beginners-guide",
        destination: "/blog/how-to-use-midjourney-beginners",
        permanent: true,
      },
      // Tag taxonomy consolidated 2026-07-30 (157 tags -> 27). These 7 tag
      // slugs were indexed by Google before the merge, so they redirect to the
      // tag that absorbed them. The other 16 indexed tag slugs were preserved
      // deliberately and need no redirect.
      { source: "/tag/ai-art", destination: "/tag/ai-image", permanent: true },
      { source: "/tag/ai-tools-2026", destination: "/tag/ai-tools", permanent: true },
      { source: "/tag/anthropic", destination: "/tag/claude", permanent: true },
      { source: "/tag/automation", destination: "/tag/ai-agents", permanent: true },
      { source: "/tag/openai", destination: "/tag/chatgpt", permanent: true },
      { source: "/tag/side-income", destination: "/tag/make-money", permanent: true },
      { source: "/tag/tutorial", destination: "/tag/beginners", permanent: true },
    ];
  },
};

export default nextConfig;
