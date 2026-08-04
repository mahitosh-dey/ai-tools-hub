import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const IMAGES_DIR = "public/images";
const MAX_WIDTH = 1600;
const QUALITY = 78;
// Target size for a cover. An existing .webp is only re-encoded when it is
// over this, so repeat runs leave correctly-sized covers untouched.
const TARGET_BYTES = 120 * 1024;
// Quality ladder, tried in order until the output lands under TARGET_BYTES.
// Without this a dense image could settle just above the threshold and get
// re-encoded on every run, losing a little quality each time.
const QUALITY_LADDER = [QUALITY, 70, 64, 58];

async function optimize(file) {
  const full = join(IMAGES_DIR, file);
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) return null;

  const before = (await stat(full)).size;
  const stem = basename(file, ext);
  const outWebp = join(IMAGES_DIR, `${stem}.webp`);
  const isWebp = ext === ".webp";

  // Already-small webp files are left exactly as they are.
  if (isWebp && before <= TARGET_BYTES) return null;

  const tmp = outWebp + ".tmp";

  try {
    let candidate = null;
    let usedQuality = null;

    for (const quality of QUALITY_LADDER) {
      await sharp(full)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality, effort: 6 })
        .toFile(tmp);

      candidate = (await stat(tmp)).size;
      usedQuality = quality;
      if (candidate <= TARGET_BYTES) break;
    }

    // Re-encoding a webp is only worth it if it actually got smaller.
    // Converting from png/jpg always wins, since the source is discarded.
    if (isWebp && candidate >= before) {
      await unlink(tmp);
      return null;
    }

    // Replace atomically
    const { rename } = await import("node:fs/promises");
    await rename(tmp, outWebp);

    const after = (await stat(outWebp)).size;

    // If we made a .webp from a non-webp source, remove the original
    if (!isWebp) {
      await unlink(full);
    }

    return { file, before, after, out: `${stem}.webp`, quality: usedQuality };
  } catch (e) {
    console.error(`Failed on ${file}:`, e.message);
    return null;
  }
}

const files = (await readdir(IMAGES_DIR)).filter((f) =>
  /\.(png|jpg|jpeg|webp)$/i.test(f)
);

console.log(`Scanning ${files.length} images...`);

let totalBefore = 0;
let totalAfter = 0;
let changed = 0;

for (const f of files) {
  const r = await optimize(f);
  if (r) {
    changed++;
    totalBefore += r.before;
    totalAfter += r.after;
    const savingsPct = ((1 - r.after / r.before) * 100).toFixed(0);
    const overTarget = r.after > TARGET_BYTES ? " OVER TARGET, needs a look" : "";
    console.log(
      `${r.file} → ${r.out}: ${(r.before / 1024).toFixed(0)}KB → ${(r.after / 1024).toFixed(0)}KB (${savingsPct}% smaller, q${r.quality})${overTarget}`
    );
  }
}

if (changed === 0) {
  console.log(
    `\nNothing to do. Every image is already webp and under ${(TARGET_BYTES / 1024).toFixed(0)}KB.`
  );
} else {
  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB (${((1 - totalAfter / totalBefore) * 100).toFixed(0)}% saved) across ${changed} file(s)`
  );
}
