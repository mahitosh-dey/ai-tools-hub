import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/calendar/",
      },
    ],
    sitemap: "https://www.aivaultblog.com/sitemap.xml",
    host: "https://www.aivaultblog.com",
  };
}
