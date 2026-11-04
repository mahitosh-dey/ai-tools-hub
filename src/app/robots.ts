import { MetadataRoute } from "next";
// `output: "export"` requires metadata routes to declare themselves static.
// This file reads MDX off disk at build time and nothing else, so it is.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/calendar/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: "https://www.aivaultblog.com/sitemap.xml",
  };
}
