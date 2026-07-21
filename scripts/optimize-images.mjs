import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const IMAGES_DIR = "public/images";
const MAX_WIDTH = 1600;
const QUALITY = 78;

async function optimize(file) {
  const full = join(IMAGES_DIR, file);
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) return null;

  const before = (await stat(full)).size;
  const stem = basename(file, ext);
  const outWebp = join(IMAGES_DIR, `${stem}.webp`);

  try {
    await sharp(full)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outWebp + ".tmp");

    // Replace atomically
    const { rename } = await import("node:fs/promises");
    await rename(outWebp + ".tmp", outWebp);

    const after = (await stat(outWebp)).size;

    // If we made a .webp from a non-webp source, remove the original
    if (ext !== ".webp") {
      await unlink(full);
    }

    return { file, before, after, out: `${stem}.webp` };
  } catch (e) {
    console.error(`Failed on ${file}:`, e.message);
    return null;
  }
}

const files = (await readdir(IMAGES_DIR)).filter(
  (f) => /\.(png|jpg|jpeg)$/i.test(f)
);

console.log(`Optimizing ${files.length} images...`);

let totalBefore = 0;
let totalAfter = 0;

for (const f of files) {
  const r = await optimize(f);
  if (r) {
    totalBefore += r.before;
    totalAfter += r.after;
    const savingsPct = ((1 - r.after / r.before) * 100).toFixed(0);
    console.log(
      `${r.file} → ${r.out}: ${(r.before / 1024).toFixed(0)}KB → ${(r.after / 1024).toFixed(0)}KB (${savingsPct}% smaller)`
    );
  }
}

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB (${((1 - totalAfter / totalBefore) * 100).toFixed(0)}% saved)`
);
