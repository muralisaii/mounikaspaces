import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { pathToFileURL } from 'url';

const tempDir = process.env.TEMP || process.env.TMP;
const canvasFile = join(tempDir, 'pdftools', 'node_modules', '@napi-rs/canvas', 'index.js');
const { createCanvas, loadImage } = await import(pathToFileURL(canvasFile).href);

const dir2d = join('public', 'images', 'drawings-2d');
const dir3d = join('public', 'images', 'renders-3d');

if (!existsSync(dir2d)) mkdirSync(dir2d, { recursive: true });
if (!existsSync(dir3d)) mkdirSync(dir3d, { recursive: true });

// Helper to crop and save
async function cropImage(srcPath, { x, y, width, height, scale = 1.0 }, destPath) {
  const img = await loadImage(srcPath);
  const targetW = Math.round(width * scale);
  const targetH = Math.round(height * scale);
  const canvas = createCanvas(targetW, targetH);
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, x, y, width, height, 0, 0, targetW, targetH);
  const buf = canvas.toBuffer('image/jpeg', 95);
  writeFileSync(destPath, buf);
  console.log(`Saved clean crop: ${destPath} (${targetW}x${targetH}px)`);
}

// Helper to optimize / scale raw images
async function optimizeImage(srcPath, scale, destPath) {
  const img = await loadImage(srcPath);
  const targetW = Math.round(img.width * scale);
  const targetH = Math.round(img.height * scale);
  const canvas = createCanvas(targetW, targetH);
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, targetW, targetH);
  const buf = canvas.toBuffer('image/jpeg', 95);
  writeFileSync(destPath, buf);
  console.log(`Saved clean render: ${destPath} (${targetW}x${targetH}px)`);
}

async function run() {
  console.log('=== CROPPING INDIVIDUAL PHOTOS & DRAWINGS WITH ZERO SLIDE TEXT ===\n');

  // -------------------------------------------------------------
  // PAGE 13 PHOTOS (CROP EACH PHOTO INDIVIDUALLY - ZERO SLIDE TEXT)
  // -------------------------------------------------------------
  // Photo 1: Material Swatches Flatlay on Wood Desk
  await cropImage(
    join('public', 'images', 'pdf-pages', 'page_13.jpg'),
    { x: 161, y: 535, width: 1238, height: 648, scale: 1.5 },
    join(dir3d, 'materials-palette-swatches.jpg')
  );

  // Photo 2: Contemporary Living Room Sofa with Gold Screen & Calligraphy
  await cropImage(
    join('public', 'images', 'pdf-pages', 'page_13.jpg'),
    { x: 1475, y: 535, width: 1242, height: 648, scale: 1.5 },
    join(dir3d, 'contemporary-sofa-gold-screen.jpg')
  );

  // -------------------------------------------------------------
  // PAGE 6 DRAWINGS (CROP EACH DRAWING SEPARATELY - NO SLIDE TEXT)
  // -------------------------------------------------------------
  // Drawing 1: 2D Space Planning CAD Floor Plan
  await cropImage(
    join('public', 'images', 'pdf-pages', 'page_06.jpg'),
    { x: 1095, y: 300, width: 770, height: 1060, scale: 1.5 },
    join(dir2d, 'floor-plan-zoning-cad.jpg')
  );

  // Drawing 2: 2D Spatial Zoning Detail View
  await cropImage(
    join('public', 'images', 'pdf-pages', 'page_06.jpg'),
    { x: 1950, y: 580, width: 765, height: 810, scale: 1.5 },
    join(dir2d, 'floor-plan-detail-view.jpg')
  );

  // -------------------------------------------------------------
  // PAGE 7 DRAWING (PURE 2D INTERIOR ELEVATION - NO SLIDE TEXT)
  // -------------------------------------------------------------
  await cropImage(
    join('public', 'images', 'pdf-pages', 'page_07.jpg'),
    { x: 1400, y: 220, width: 1310, height: 1110, scale: 1.4 },
    join(dir2d, 'interior-elevation-drafting.jpg')
  );

  // -------------------------------------------------------------
  // PAGE 8 DRAWING (MASTER ARCHITECTURAL BLUEPRINTS)
  // -------------------------------------------------------------
  await cropImage(
    join('public', 'images', 'pdf-pages', 'page_08.jpg'),
    { x: 40, y: 40, width: 2800, height: 1540, scale: 1.0 },
    join(dir2d, 'architectural-blueprints-master.jpg')
  );

  // -------------------------------------------------------------
  // PAGE 9 DRAWING (MODULAR KITCHEN & STORAGE ELEVATIONS - NO SLIDE TEXT)
  // -------------------------------------------------------------
  await cropImage(
    join('public', 'images', 'pdf-pages', 'page_09.jpg'),
    { x: 1520, y: 880, width: 1320, height: 650, scale: 1.5 },
    join(dir2d, 'modular-kitchen-cad-elevations.jpg')
  );

  // Additional 2D Technical CAD sheets from PDF raster stream
  await optimizeImage(
    join('public', 'images', 'projects', 'image_06.jpg'),
    1.5,
    join(dir2d, 'space-layout-2d-plan.jpg')
  );
  await optimizeImage(
    join('public', 'images', 'projects', 'image_08.jpg'),
    1.5,
    join(dir2d, 'cabinet-elevation-sectional.jpg')
  );

  // -------------------------------------------------------------
  // PURE 3D PHOTOREALISTIC RENDERS (RAW HIGH-RES STREAMS - NO TEXT)
  // -------------------------------------------------------------
  // Master Living Room Lounge (6719x4479 ultra-res)
  await optimizeImage(
    join('public', 'images', 'projects', 'image_19.jpg'),
    0.6, // 4031x2687 px ultra crisp
    join(dir3d, 'contemporary-living-room-hero.jpg')
  );

  // Master Bedroom Suite & Tinted Glass Wardrobe (1920x2880)
  await optimizeImage(
    join('public', 'images', 'projects', 'image_16.jpg'),
    1.0,
    join(dir3d, 'master-bedroom-wardrobe-suite.jpg')
  );

  // Living Room Lounge Cove Lighting (1770x2655)
  await optimizeImage(
    join('public', 'images', 'projects', 'image_10.jpg'),
    1.0,
    join(dir3d, 'living-lounge-cove-lighting.jpg')
  );

  // Dining Room Slatted Room Partition (1664x2496)
  await optimizeImage(
    join('public', 'images', 'projects', 'image_07.jpg'),
    1.0,
    join(dir3d, 'dining-room-slatted-partition.jpg')
  );

  // Living Room Perspective Views (1800x1200)
  await optimizeImage(
    join('public', 'images', 'projects', 'image_11.jpg'),
    1.2,
    join(dir3d, 'living-room-media-wall-3d.jpg')
  );
  await optimizeImage(
    join('public', 'images', 'projects', 'image_14.jpg'),
    1.2,
    join(dir3d, 'living-dining-panoramic-render.jpg')
  );

  // Modular Kitchen Visualizations (1178x1767 & 1200x1600)
  await optimizeImage(
    join('public', 'images', 'projects', 'image_03.jpg'),
    1.2,
    join(dir3d, 'modular-kitchen-quartz-render.jpg')
  );
  await optimizeImage(
    join('public', 'images', 'projects', 'image_05.jpg'),
    1.2,
    join(dir3d, 'kitchen-tall-unit-appliances.jpg')
  );

  // Bedroom Vanity & Channel-Tufted Headboard (2016x1344 & 1728x1152)
  await optimizeImage(
    join('public', 'images', 'projects', 'image_04.jpg'),
    1.2,
    join(dir3d, 'bedroom-vanity-backlit-mirror.jpg')
  );
  await optimizeImage(
    join('public', 'images', 'projects', 'image_17.jpg'),
    1.2,
    join(dir3d, 'bedroom-channel-tufted-headboard.jpg')
  );

  console.log('\n--- ALL PHOTOS AND DRAWINGS INDIVIDUALLY EXTRACTED AND OPTIMIZED! ---');
}

run().catch(console.error);
