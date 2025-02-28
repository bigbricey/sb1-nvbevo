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
  imageExtensions: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'avif'],
  excludePatterns: ['node_modules', 'dist', '.git']
};

// Common image titles for automatic title generation
const commonImageNames = {
  'logo': 'Jax Sod Official Logo',
  'banner': 'Jax Sod Banner',
  'hero': 'Jax Sod Hero Image',
  'st-augustine': 'St Augustine Sod Grass',
  'bermuda': 'Bermuda Sod Grass',
  'zoysia': 'Zoysia Sod Grass',
  'bahia': 'Bahia Sod Grass',
  'centipede': 'Centipede Sod Grass',
  'before-after': 'Sod Installation Before and After',
  'installation': 'Professional Sod Installation',
  'services': 'Jax Sod Professional Services',
  'testimonial': 'Customer Testimonial',
  'team': 'Jax Sod Team',
  'location': 'Jax Sod Service Area',
  'about': 'About Jax Sod'
};

// Find all image references in code files
async function findImageReferencesInCode() {
  const imageReferences = new Map();
  
  // Find all code files
  const codeFiles = await glob('**/*.{tsx,jsx,ts,js,html}', {
    cwd: config.srcDir,
    ignore: config.excludePatterns
  });
  
  // Regular expressions to find image references with possible alt text/title
  const patterns = [
    // src="..." or src='...' with possible alt attribute
    {
      pattern: /src=["']([^"']+\.(jpg|jpeg|png|gif|webp|svg|avif))["'](?:[^>]*alt=["']([^"']*)["'])?/g,
      pathIndex: 1,
      titleIndex: 3
    },
    // import ... from "..."
    {
      pattern: /from\s+["']([^"']+\.(jpg|jpeg|png|gif|webp|svg|avif))["']/g,
      pathIndex: 1
    },
    // require("...")
    {
      pattern: /require\(["']([^"']+\.(jpg|jpeg|png|gif|webp|svg|avif))["']\)/g,
      pathIndex: 1
    },
    // url("...")
    {
      pattern: /url\(["']?([^"')]+\.(jpg|jpeg|png|gif|webp|svg|avif))["']?\)/g,
      pathIndex: 1
    },
    // Next.js Image component
    {
      pattern: /<Image[^>]*src=["']([^"']+\.(jpg|jpeg|png|gif|webp|svg|avif))["'][^>]*alt=["']([^"']*)["']/g,
      pathIndex: 1,
      titleIndex: 3
    },
    // img element with title attribute
    {
      pattern: /<img[^>]*src=["']([^"']+\.(jpg|jpeg|png|gif|webp|svg|avif))["'][^>]*title=["']([^"']*)["']/g,
      pathIndex: 1,
      titleIndex: 3
    }
  ];
  
  for (const file of codeFiles) {
    const filePath = path.join(config.srcDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const pageUrl = filePathToUrl(file);
    
    for (const { pattern, pathIndex, titleIndex } of patterns) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const imagePath = match[pathIndex];
        let imageTitle = titleIndex && match[titleIndex] ? match[titleIndex] : null;
        
        // Skip external URLs and data URIs
        if (imagePath.startsWith('http') || imagePath.startsWith('data:')) {
          continue;
        }
        
        // Normalize path
        const normalizedPath = normalizePath(imagePath);
        
        // Try to extract a meaningful title if none found
        if (!imageTitle) {
          // Extract filename without extension
          const basename = path.basename(normalizedPath, path.extname(normalizedPath));
          
          // Check if matches any common patterns
          for (const [key, title] of Object.entries(commonImageNames)) {
            if (basename.toLowerCase().includes(key.toLowerCase())) {
              imageTitle = title;
              break;
            }
          }
          
          // Default to using filename if nothing else works
          if (!imageTitle) {
            imageTitle = basename.replace(/[-_]/g, ' ')
                                 .replace(/\b\w/g, c => c.toUpperCase());
          }
        }
        
        // Add to map with the page URL as the location
        if (!imageReferences.has(normalizedPath)) {
          imageReferences.set(normalizedPath, {
            path: normalizedPath,
            title: imageTitle,
            locations: new Set([pageUrl])
          });
        } else {
          const existingRef = imageReferences.get(normalizedPath);
          existingRef.locations.add(pageUrl);
          // If we found a title and there wasn't one before, add it
          if (imageTitle && !existingRef.title) {
            existingRef.title = imageTitle;
          }
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
    const basename = path.basename(imagePath, path.extname(imagePath));
    
    // Try to generate a title from the filename
    let imageTitle = null;
    
    // Check if matches any common patterns
    for (const [key, title] of Object.entries(commonImageNames)) {
      if (basename.toLowerCase().includes(key.toLowerCase())) {
        imageTitle = title;
        break;
      }
    }
    
    // Default to using filename if nothing else works
    if (!imageTitle) {
      imageTitle = basename.replace(/[-_]/g, ' ')
                           .replace(/\b\w/g, c => c.toUpperCase());
    }
    
    // Add to array
    imageFiles.push({
      path: imagePath,
      title: imageTitle,
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
      pageMap.get(location).push({
        path: image.path,
        title: image.title
      });
    }
  }
  
  // Generate entries for each page
  for (const [pageUrl, imagesForPage] of pageMap.entries()) {
    xml += '  <url>\n';
    xml += `    <loc>${config.baseUrl}${pageUrl}</loc>\n`;
    
    // Add each image
    for (const image of imagesForPage) {
      xml += '    <image:image>\n';
      xml += `      <image:loc>${config.baseUrl}${image.path}</image:loc>\n`;
      
      // Add title if available
      if (image.title) {
        xml += `      <image:title>${image.title}</image:title>\n`;
      }
      
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
      
      // Use title if we have one
      if (image.title && !uniqueImages.get(key).title) {
        uniqueImages.get(key).title = image.title;
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
