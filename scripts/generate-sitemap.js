/**
 * Sitemap Generator Script
 * 
 * This script automatically generates a sitemap.xml file based on the routes in the application.
 * Run this script whenever new pages are added to keep the sitemap up-to-date.
 * 
 * Usage: node scripts/generate-sitemap.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL of the website
const BASE_URL = 'https://www.jaxsod.com';

// Main pages with their priorities and change frequencies
const MAIN_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.8', changefreq: 'monthly' },
  { path: '/sod-types', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.6', changefreq: 'weekly' },
  { path: '/lawn-calculators', priority: '0.7', changefreq: 'monthly' },
  { path: '/location', priority: '0.7', changefreq: 'monthly' },
  { path: '/sod-installation-st-augustine', priority: '0.7', changefreq: 'monthly' },
  { path: '/sod-services-orange-park', priority: '0.7', changefreq: 'monthly' },
];

// Function to get blog posts from the data file
function getBlogPosts() {
  try {
    // Import the blog posts data
    const blogPostsPath = path.join(__dirname, '../src/data/blogPosts.ts');
    const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf8');
    
    // Extract slugs using regex
    const slugRegex = /slug: "([^"]+)"/g;
    const dateRegex = /date: "([^"]+)"/g;
    
    const slugMatches = [...blogPostsContent.matchAll(slugRegex)];
    const dateMatches = [...blogPostsContent.matchAll(dateRegex)];
    
    // Create blog post entries
    return slugMatches.map((match, index) => {
      const slug = match[1];
      const date = dateMatches[index] ? dateMatches[index][1] : new Date().toISOString().split('T')[0];
      
      return {
        path: `/blog/${slug}`,
        lastmod: date,
        priority: '0.6',
        changefreq: 'monthly'
      };
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// Generate the sitemap XML content
function generateSitemapXml() {
  const blogPosts = getBlogPosts();
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  
  // Add main pages
  xml += '  <!-- Main Pages -->\n';
  MAIN_PAGES.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${page.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    
    // Add image for sod-types page
    if (page.path === '/sod-types') {
      xml += '    <image:image>\n';
      xml += '      <image:loc>https://www.jaxsod.com/images/st-augustine-sod.jpg</image:loc>\n';
      xml += '      <image:title>St Augustine Sod Installation Jacksonville</image:title>\n';
      xml += '    </image:image>\n';
    }
    
    xml += '  </url>\n';
  });
  
  // Add blog posts
  if (blogPosts.length > 0) {
    xml += '  \n  <!-- Blog Posts -->\n';
    blogPosts.forEach(post => {
      xml += '  <url>\n';
      xml += `    <loc>${BASE_URL}${post.path}</loc>\n`;
      xml += `    <lastmod>${post.lastmod}</lastmod>\n`;
      xml += `    <changefreq>${post.changefreq}</changefreq>\n`;
      xml += `    <priority>${post.priority}</priority>\n`;
      xml += '  </url>\n';
    });
  }
  
  xml += '</urlset>';
  
  return xml;
}

// Write the sitemap to the public directory
function writeSitemap() {
  const sitemapContent = generateSitemapXml();
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  
  fs.writeFileSync(sitemapPath, sitemapContent);
  console.log(`Sitemap generated at ${sitemapPath}`);
}

// Execute the script
writeSitemap();
