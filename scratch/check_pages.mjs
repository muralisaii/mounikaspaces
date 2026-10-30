import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { pathToFileURL } from 'url';

const tempDir = process.env.TEMP || process.env.TMP;
const canvasFile = join(tempDir, 'pdftools', 'node_modules', '@napi-rs/canvas', 'index.js');
const { createCanvas, loadImage } = await import(pathToFileURL(canvasFile).href);

async function analyzeLayout(pageNum) {
  const num = pageNum < 10 ? '0' + pageNum : pageNum;
  const file = join('public', 'images', 'pdf-pages', 'page_' + num + '.jpg');
  const img = await loadImage(file);
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, img.width, img.height).data;
  
  function getRGB(x, y) {
    const i = (y * img.width + x) * 4;
    return [data[i], data[i+1], data[i+2]];
  }

  // Check background
  const bg = getRGB(50, 50);
  console.log(`\n=== PAGE ${pageNum} (${img.width}x${img.height}) BG: rgb(${bg.join(',')}) ===`);

  // Scan for distinct bounding boxes where pixels differ significantly from background
  // Let's sample horizontal scanlines at y = 400, 700, 1000, 1300
  for (const y of [400, 700, 1000, 1300]) {
    let segments = [];
    let inSeg = false;
    let startX = 0;
    for (let x = 0; x < img.width; x += 10) {
      const [r, g, b] = getRGB(x, y);
      const isDiff = Math.abs(r - bg[0]) > 25 || Math.abs(g - bg[1]) > 25 || Math.abs(b - bg[2]) > 25;
      if (isDiff && !inSeg) {
        inSeg = true;
        startX = x;
      } else if (!isDiff && inSeg) {
        inSeg = false;
        if (x - startX > 50) segments.push(`${startX}-${x}`);
      }
    }
    if (inSeg && img.width - startX > 50) segments.push(`${startX}-${img.width}`);
    console.log(`  y=${y}: segments: ${segments.join(', ')}`);
  }
}

for (const p of [6, 7, 8, 9, 10, 11, 12, 13]) {
  await analyzeLayout(p);
}
