/**
 * Favicon Generator Script
 * 
 * This script generates basic favicon files for the website.
 * It creates a simple green square with "JS" text as a placeholder.
 * 
 * Prerequisites:
 * npm install canvas
 * 
 * Usage: node scripts/generate-favicons.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from 'canvas';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sizes for different favicon files
const SIZES = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 }
];

// Colors
const BACKGROUND_COLOR = '#1a5d1a'; // Green
const TEXT_COLOR = '#ffffff'; // White

// Generate favicon for each size
function generateFavicons() {
  SIZES.forEach(({ name, size }) => {
    // Create canvas with the specified size
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Draw background
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, size, size);
    
    // Draw text (JS for Jax Sod)
    ctx.fillStyle = TEXT_COLOR;
    ctx.font = `bold ${size * 0.5}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('JS', size / 2, size / 2);
    
    // Save the image
    const buffer = canvas.toBuffer('image/png');
    const outputPath = path.join(__dirname, '../public', name);
    fs.writeFileSync(outputPath, buffer);
    console.log(`Generated ${name}`);
  });
  
  // Generate SVG favicon
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="4" fill="${BACKGROUND_COLOR}"/>
  <text x="16" y="22" font-family="Arial" font-size="18" font-weight="bold" fill="${TEXT_COLOR}" text-anchor="middle">JS</text>
</svg>`;
  
  const svgPath = path.join(__dirname, '../public/favicon.svg');
  fs.writeFileSync(svgPath, svgContent);
  console.log('Generated favicon.svg');
}

// Main function
function main() {
  try {
    // Create public directory if it doesn't exist
    const publicDir = path.join(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }
    
    // Generate favicons
    generateFavicons();
    console.log('Favicon generation completed successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

// Run the script
main();
