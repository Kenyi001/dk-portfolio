import sharp from 'sharp';
import fs from 'fs';

// DK monogram — Bold clásico
// Proporciones derivadas del preview 64x64, escaladas al tamaño de cada render
const svg = (size) => {
  const s = size;
  const rx = Math.round(s * 0.125); // border radius ~4px en 32px

  // D geometry (left ~60% of canvas)
  const dX1 = s * 0.078;   // left edge of stem
  const dY1 = s * 0.109;   // top
  const dY2 = s * 0.891;   // bottom
  const dMidX = s * 0.328; // right bulge of D
  const dMid  = s * 0.5;   // vertical midpoint
  const dHoleX1 = s * 0.203; // hole left
  const dHoleX2 = s * 0.438; // hole right bulge
  const dHoleY1 = s * 0.234; // hole top
  const dHoleY2 = s * 0.766; // hole bottom

  // K geometry (right ~40% of canvas)
  const kX = s * 0.641;    // stem left
  const kW = s * 0.109;    // stem width
  const kTipX = s * 0.938; // arm tip right
  const kMidY = s * 0.5;   // center join

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s}" width="${s}" height="${s}">
  <rect width="${s}" height="${s}" rx="${rx}" fill="#1A1D24"/>
  <!-- D outer -->
  <path d="M${dX1} ${dY1} L${dX1} ${dY2} L${dMidX} ${dY2} Q${s*0.594} ${dY2} ${s*0.594} ${dMid} Q${s*0.594} ${dY1} ${dMidX} ${dY1} Z" fill="#E8E0D4"/>
  <!-- D inner cutout -->
  <path d="M${dHoleX1} ${dHoleY1} L${dMidX} ${dHoleY1} Q${dHoleX2} ${dHoleY1} ${dHoleX2} ${dMid} Q${dHoleX2} ${dHoleY2} ${dMidX} ${dHoleY2} L${dHoleX1} ${dHoleY2} Z" fill="#1A1D24"/>
  <!-- K stem -->
  <rect x="${kX}" y="${dY1}" width="${kW}" height="${dY2 - dY1}" fill="#D4513A"/>
  <!-- K upper arm -->
  <polygon points="${kX+kW},${dY1} ${kTipX},${dY1} ${kX+kW},${kMidY}" fill="#D4513A"/>
  <!-- K lower arm -->
  <polygon points="${kX+kW},${kMidY} ${kTipX},${dY2} ${kX+kW},${dY2}" fill="#D4513A"/>
</svg>`;
};

const sizes = [16, 32, 48, 180];
const pngBuffers = {};

for (const size of sizes) {
  pngBuffers[size] = await sharp(Buffer.from(svg(size)))
    .resize(size, size)
    .png({ quality: 100 })
    .toBuffer();
  console.log(`✅ ${size}x${size} PNG: ${pngBuffers[size].length} bytes`);
}

fs.writeFileSync('public/favicon-32.png', pngBuffers[32]);
fs.writeFileSync('public/favicon-16.png', pngBuffers[16]);
fs.writeFileSync('public/apple-touch-icon.png', pngBuffers[180]);

// ICO multi-size (16 + 32 + 48)
const icoImages = [16, 32, 48].map(s => pngBuffers[s]);
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(icoImages.length, 4);

let offset = 6 + 16 * icoImages.length;
const dirs = icoImages.map((img, i) => {
  const s = [16, 32, 48][i];
  const d = Buffer.alloc(16);
  d.writeUInt8(s === 256 ? 0 : s, 0);
  d.writeUInt8(s === 256 ? 0 : s, 1);
  d.writeUInt8(0, 2); d.writeUInt8(0, 3);
  d.writeUInt16LE(1, 4); d.writeUInt16LE(32, 6);
  d.writeUInt32LE(img.length, 8);
  d.writeUInt32LE(offset, 12);
  offset += img.length;
  return d;
});

const ico = Buffer.concat([header, ...dirs, ...icoImages]);
fs.writeFileSync('public/favicon.ico', ico);
console.log(`✅ favicon.ico: ${ico.length} bytes (16+32+48px)`);
console.log(`✅ apple-touch-icon.png: ${pngBuffers[180].length} bytes`);
