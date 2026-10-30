import fs from "fs";
import path from "path";

export interface ImageSize {
  width: number;
  height: number;
}

// Covers are not a uniform size. Across the 52 published posts they run from
// 1376x727 to 2816x1536 in ten different shapes, so the Article schema cannot
// assert a constant. It used to claim 1200x630 for every post, which was wrong
// on all of them because no cover on the site is that size.
//
// Parsing the four header formats we actually ship is a few lines, so this
// reads the real file rather than adding a dependency for it.
function parse(buf: Buffer): ImageSize | null {
  // PNG: IHDR width and height are big-endian uint32 at offsets 16 and 20.
  if (buf.length >= 24 && buf.toString("ascii", 1, 4) === "PNG") {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  // WebP: RIFF container, and which chunk follows decides where the size sits.
  if (
    buf.length >= 30 &&
    buf.toString("ascii", 0, 4) === "RIFF" &&
    buf.toString("ascii", 8, 12) === "WEBP"
  ) {
    const chunk = buf.toString("ascii", 12, 16);
    if (chunk === "VP8X") {
      return {
        width: buf.readUIntLE(24, 3) + 1,
        height: buf.readUIntLE(27, 3) + 1,
      };
    }
    if (chunk === "VP8 ") {
      return {
        width: buf.readUInt16LE(26) & 0x3fff,
        height: buf.readUInt16LE(28) & 0x3fff,
      };
    }
    if (chunk === "VP8L") {
      const bits = buf.readUInt32LE(21);
      return {
        width: (bits & 0x3fff) + 1,
        height: ((bits >>> 14) & 0x3fff) + 1,
      };
    }
    return null;
  }

  // JPEG: walk the segments to the start-of-frame marker, which carries the size.
  if (buf.length >= 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i + 9 < buf.length) {
      if (buf[i] !== 0xff) {
        i += 1;
        continue;
      }
      const marker = buf[i + 1];
      // SOF0 through SOF15, skipping the four markers in that range that are
      // not frame headers.
      if (
        marker >= 0xc0 &&
        marker <= 0xcf &&
        marker !== 0xc4 &&
        marker !== 0xc8 &&
        marker !== 0xcc
      ) {
        return { width: buf.readUInt16BE(i + 7), height: buf.readUInt16BE(i + 5) };
      }
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }

  return null;
}

const cache = new Map<string, ImageSize | null>();

/**
 * Real pixel size of an image in `public/`, given the path as it appears in
 * frontmatter (`/images/foo.webp`). Returns null when the file is missing or
 * the format is not one we can read, so callers can omit the dimensions rather
 * than publish a guess.
 */
export function getPublicImageSize(publicPath: string): ImageSize | null {
  if (!publicPath.startsWith("/")) return null;
  if (cache.has(publicPath)) return cache.get(publicPath) ?? null;

  let size: ImageSize | null = null;
  try {
    const file = path.join(process.cwd(), "public", publicPath.replace(/^\//, ""));
    size = parse(fs.readFileSync(file));
  } catch {
    size = null;
  }

  cache.set(publicPath, size);
  return size;
}
