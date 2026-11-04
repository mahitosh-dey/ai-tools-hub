import { getAllCategories } from "@/lib/posts";

// Next.js does not inherit opengraph-image into child route segments, so each
// one that has no image of its own re-exports the site-wide default. A dynamic
// segment also needs its own params, or the route is not prerendered.
export { default, size, contentType, alt } from "../../opengraph-image";
// `output: "export"` refuses to prerender a metadata image route unless the
// route says outright that it is static. Nothing here varies per request,
// so this is a declaration, not a behaviour change.
export const dynamic = "force-static";

export async function generateStaticParams() {
  return getAllCategories().map((c) => ({ category: c.toLowerCase() }));
}
