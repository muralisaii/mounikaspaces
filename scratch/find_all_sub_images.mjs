import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { pathToFileURL } from 'url';

const tempDir = process.env.TEMP || process.env.TMP;
const canvasFile = join(tempDir, 'pdftools', 'node_modules', '@napi-rs/canvas', 'index.js');
const { createCanvas, loadImage } = await import(pathToFileURL(canvasFile).href);

async function findBoxesOnPage(pageNum) {
  const num = pageNum < 10 ? '0' + pageNum : pageNum;
  const file = join('public', 'images', 'pdf-pages', `page_${num}.jpg`);
  const img = await loadImage(file);
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, img.width, img.height).data;

  function getRGB(x, y) {
    const i = (y * img.width + x) * 4;
    return [data[i], data[i+1], data[i+2]];
  }

  const [bgR, bgG, bgB] = getRGB(30, 30);

  function isBg(x, y) {
    const [r, g, b] = getRGB(x, y);
    return Math.abs(r - bgR) <= 12 && Math.abs(g - bgG) <= 12 && Math.abs(b - bgB) <= 12;
  }

  // Scan vertical columns from left to right to see which columns have content
  const colHasContent = new Array(img.width).fill(false);
  for (let x = 0; x < img.width; x += 5) {
    for (let y = 150; y < img.height - 100; y += 10) {
      if (!isBg(x, y)) {
        colHasContent[x] = true;
        break;
      }
    }
  }

  // Group continuous columns
  let spans = [];
  let inSpan = false;
  let start = 0;
  for (let x = 0; x < img.width; x += 5) {
    if (colHasContent[x] && !inSpan) {
      inSpan = true;
      start = x;
    } else if (!colHasContent[x] && inSpan) {
      inSpan = false;
      if (x - start > 100) spans.push([start, x]);
    }
  }
  if (inSpan && img.width - start > 100) spans.push([start, img.width]);

  console.log(`Page ${pageNum} horizontal spans:`, spans);
  return spans;
}

for (const p of [6, 7, 8, 9, 10, 11, 12, 13]) {
  await findBoxesOnPage(p);
}
