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
    ];
  },
};

export default nextConfig;
