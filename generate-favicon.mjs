import sharp from 'sharp';
import fs from 'fs';

// DK monogram — Bold clásico con K de brazos anchos y muesca visible
const svg = (size) => {
  const s = size;
  const rx = Math.round(s * 0.125);

  // D geometry
  const dX  = s * 0.078;   // stem left
  const dY1 = s * 0.109;   // top
  const dY2 = s * 0.891;   // bottom
  const dBowlX = s * 0.594; // bowl right apex
  const dMid   = s * 0.5;
  const dHoleX1 = s * 0.203;
  const dHoleX2 = s * 0.438;
  const dHoleY1 = s * 0.234;
  const dHoleY2 = s * 0.766;

  // K geometry
  const kX    = s * 0.641;  // stem left
  const kW    = s * 0.109;  // stem width
  const kTipX = s * 0.938;  // arm tip X (right edge)
  // Arms: upper ends at 39% height, lower starts at 61% height → clear notch
  const kArmUpperEnd  = s * 0.391;  // upper arm bottom Y
  const kArmLowerStart = s * 0.609; // lower arm top Y

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s}" width="${s}" height="${s}">
  <rect width="${s}" height="${s}" rx="${rx}" fill="#1A1D24"/>
  <!-- D outer -->
  <path d="M${dX} ${dY1} L${dX} ${dY2} L${s*0.328} ${dY2} Q${dBowlX} ${dY2} ${dBowlX} ${dMid} Q${dBowlX} ${dY1} ${s*0.328} ${dY1} Z" fill="#E8E0D4"/>
  <!-- D inner cutout -->
  <path d="M${dHoleX1} ${dHoleY1} L${s*0.313} ${dHoleY1} Q${dHoleX2} ${dHoleY1} ${dHoleX2} ${dMid} Q${dHoleX2} ${dHoleY2} ${s*0.313} ${dHoleY2} L${dHoleX1} ${dHoleY2} Z" fill="#1A1D24"/>
  <!-- K stem -->
  <rect x="${kX}" y="${dY1}" width="${kW}" height="${dY2 - dY1}" fill="#D4513A"/>
  <!-- K upper arm: gordo, llega hasta kArmUpperEnd en el tallo (no hasta el centro) -->
  <polygon points="${kX+kW},${dY1} ${kTipX},${dY1} ${kX+kW},${kArmUpperEnd}" fill="#D4513A"/>
  <!-- K lower arm: gordo, empieza en kArmLowerStart (deja muesca visible) -->
  <polygon points="${kX+kW},${kArmLowerStart} ${kTipX},${dY2} ${kX+kW},${dY2}" fill="#D4513A"/>
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
