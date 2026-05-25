import fs from 'fs';
import path from 'path';

function walk(dir) {
  let files = [];
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat && stat.isDirectory()) {
        files = files.concat(walk(fullPath));
      } else {
        files.push(fullPath);
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dir}: ${err.message}`);
  }
  return files;
}

console.log("Scanning node_modules for I/O errors...");
const files = walk('node_modules');
console.log(`Found ${files.length} files. Checking readability...`);

let errorCount = 0;
for (const file of files) {
  try {
    fs.readFileSync(file);
  } catch (err) {
    console.error(`[ERROR] Read failed on: ${file}`);
    console.error(err);
    errorCount++;
  }
}

console.log(`Scan completed with ${errorCount} errors.`);
