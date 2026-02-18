import fs from "fs";
import path from "path";

const root = process.cwd();
const outDir = path.join(root, "out");
const docsDir = path.join(root, "docs");

if (!fs.existsSync(outDir)) {
  console.error("out klasörü yok. Önce build alınmalı.");
  process.exit(1);
}

if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true, force: true });
}
fs.renameSync(outDir, docsDir);

// GitHub Pages SPA refresh için (opsiyonel ama iyi)
const notFound = path.join(docsDir, "404.html");
const index = path.join(docsDir, "index.html");
if (!fs.existsSync(notFound) && fs.existsSync(index)) {
  fs.copyFileSync(index, notFound);
}

console.log("OK: out -> docs taşındı.");
