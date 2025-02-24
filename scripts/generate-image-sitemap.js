/**
 * Image Sitemap Generator Script
 * 
 * This script generates an image sitemap to help search engines discover and index
 * images on your website. It scans your project for image references and creates
 * a sitemap specifically for images.
 * 
 * Usage: node scripts/generate-image-sitemap.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  baseUrl: 'https://www.jaxsod.com',
  outputPath: path.join(__dirname, '../public/image-sitemap.xml'),
  srcDir: path.join(__dirname, '../src'),
  publicDir: path.join(__dirname, '../public'),
  imageExtensions: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'],
  excludePatterns: ['node_modules', 'dist', '.git']
};

// Find all image references in code files
async function findImageReferencesInCode() {
  const imageReferences = new Map();
  
  // Find all code files
  const codeFiles = await glob('**/*.{tsx,jsx,ts,js,html}', {
    cwd: config.srcDir,
    ignore: config.excludePatterns
  });
  
  // Regular expressions to find image references
  const patterns = [
    // src="..." or src='...'
    /src=["']([^"']+\.(jpg|jpeg|png|gif|webp|svg))["']/g,
    // import ... from "..."
    /from\s+["']([^"']+\.(jpg|jpeg|png|gif|webp|svg))["']/g,
    // require("...")
    /require\(["']([^"']+\.(jpg|jpeg|png|gif|webp|svg))["']\)/g,
    // url("...")
    /url\(["']?([^"')]+\.(jpg|jpeg|png|gif|webp|svg))["']?\)/g
  ];
  
  for (const file of codeFiles) {
    const filePath = path.join(config.srcDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const pageUrl = filePathToUrl(file);
    
    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const imagePath = match[1];
        
        // Skip external URLs and data URIs
        if (imagePath.startsWith('http') || imagePath.startsWith('data:')) {
          continue;
        }
        
        // Normalize path
        const normalizedPath = normalizePath(imagePath);
        
        // Add to map with the page URL as the location
        if (!imageReferences.has(normalizedPath)) {
          imageReferences.set(normalizedPath, {
            path: normalizedPath,
            locations: new Set([pageUrl])
          });
        } else {
          imageReferences.get(normalizedPath).locations.add(pageUrl);
        }
      }
    }
  }
  
  return Array.from(imageReferences.values());
}

// Find all image files in the public directory
async function findImageFilesInPublic() {
  const imageFiles = [];
  
  // Create pattern for image extensions
  const pattern = `**/*.{${config.imageExtensions.join(',')}}`;
  
  // Find all image files
  const files = await glob(pattern, {
    cwd: config.publicDir,
    ignore: config.excludePatterns
  });
  
  for (const file of files) {
    const imagePath = '/' + file.replace(/\\/g, '/');
    
    // Add to array
    imageFiles.push({
      path: imagePath,
      locations: new Set(['/']) // Default to homepage
    });
  }
  
  return imageFiles;
}

// Convert file path to URL
function filePathToUrl(filePath) {
  // Extract the base name without extension
  const baseName = path.basename(filePath, path.extname(filePath));
  
  // Handle index files
  if (baseName === 'index') {
    return '/';
  }
  
  // Handle special cases
  if (baseName === 'App' || baseName === 'main') {
    return '/';
  }
  
  // Convert PascalCase to kebab-case
  const kebabCase = baseName
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
  
  return '/' + kebabCase;
}

// Normalize image path
function normalizePath(imagePath) {
  // Remove query parameters and hash
  let normalized = imagePath.split('?')[0].split('#')[0];
  
  // Ensure path starts with /
  if (!normalized.startsWith('/')) {
    normalized = '/' + normalized;
  }
  
  return normalized;
}

// Generate the image sitemap XML
function generateImageSitemapXml(images) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  
  // Group images by page URL
  const pageMap = new Map();
  
  for (const image of images) {
    for (const location of image.locations) {
      if (!pageMap.has(location)) {
        pageMap.set(location, []);
      }
      pageMap.get(location).push(image.path);
    }
  }
  
  // Generate entries for each page
  for (const [pageUrl, imagePaths] of pageMap.entries()) {
    xml += '  <url>\n';
    xml += `    <loc>${config.baseUrl}${pageUrl}</loc>\n`;
    
    // Add each image
    for (const imagePath of imagePaths) {
      xml += '    <image:image>\n';
      xml += `      <image:loc>${config.baseUrl}${imagePath}</image:loc>\n`;
      xml += '    </image:image>\n';
    }
    
    xml += '  </url>\n';
  }
  
  xml += '</urlset>';
  
  return xml;
}

// Main function
async function main() {
  console.log('Generating image sitemap...');
  
  // Find images
  const codeImages = await findImageReferencesInCode();
  const publicImages = await findImageFilesInPublic();
  
  // Combine and deduplicate
  const allImages = [...codeImages, ...publicImages];
  const uniqueImages = new Map();
  
  for (const image of allImages) {
    const key = image.path;
    
    if (!uniqueImages.has(key)) {
      uniqueImages.set(key, image);
    } else {
      // Merge locations
      for (const location of image.locations) {
        uniqueImages.get(key).locations.add(location);
      }
    }
  }
  
  const images = Array.from(uniqueImages.values());
  
  // Generate sitemap
  const xml = generateImageSitemapXml(images);
  
  // Write to file
  fs.writeFileSync(config.outputPath, xml);
  
  console.log(`Image sitemap generated with ${images.length} images`);
  console.log(`Saved to: ${config.outputPath}`);
}

// Run the script
main().catch(console.error);
