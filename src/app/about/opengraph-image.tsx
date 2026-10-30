// Next.js does not inherit opengraph-image into child route segments, so each
// one that has no image of its own re-exports the site-wide default.
export { default, size, contentType, alt } from "../opengraph-image";
