/**
 * Broken Links Checker Script
 * 
 * This script scans the website for broken links by:
 * 1. Crawling the site starting from the homepage
 * 2. Checking all internal and external links
 * 3. Reporting any broken links found
 * 
 * Prerequisites:
 * npm install node-fetch cheerio
 * 
 * Usage: node scripts/check-broken-links.js
 */

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { URL } from 'url';

// Configuration
const config = {
  startUrl: 'http://localhost:3000', // Change to your local development server
  maxPages: 100, // Maximum number of pages to check
  includeExternal: true, // Whether to check external links
  excludePatterns: [
    /mailto:/,
    /tel:/,
    /#.*/,
    /linkedin.com/,
    /facebook.com/,
    /twitter.com/,
    /instagram.com/
  ]
};

// Track visited URLs and broken links
const visited = new Set();
const toVisit = [config.startUrl];
const brokenLinks = [];
const externalLinks = new Set();

// Check if a URL should be excluded
function shouldExclude(url) {
  return config.excludePatterns.some(pattern => pattern.test(url));
}

// Normalize URL to prevent duplicates
function normalizeUrl(url, base) {
  try {
    const parsedUrl = new URL(url, base);
    return parsedUrl.href;
  } catch (error) {
    console.error(`Error parsing URL: ${url}`, error);
    return null;
  }
}

// Check if a URL is internal
function isInternalUrl(url) {
  try {
    const startUrlObj = new URL(config.startUrl);
    const urlObj = new URL(url);
    return urlObj.hostname === startUrlObj.hostname;
  } catch (error) {
    return false;
  }
}

// Fetch a URL and check its status
async function checkUrl(url, referrer) {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 Link Checker'
      },
      redirect: 'follow',
      timeout: 10000
    });
    
    if (!response.ok) {
      brokenLinks.push({
        url,
        status: response.status,
        referrer
      });
      console.log(`Broken link: ${url} (${response.status}) - Found on: ${referrer}`);
    }
    
    return response.ok;
  } catch (error) {
    brokenLinks.push({
      url,
      error: error.message,
      referrer
    });
    console.log(`Error checking: ${url} - ${error.message} - Found on: ${referrer}`);
    return false;
  }
}

// Extract links from HTML content
function extractLinks($, baseUrl) {
  const links = [];
  
  $('a[href]').each((_, element) => {
    const href = $(element).attr('href');
    if (!href) return;
    
    const normalizedUrl = normalizeUrl(href, baseUrl);
    if (!normalizedUrl || shouldExclude(normalizedUrl)) return;
    
    links.push(normalizedUrl);
  });
  
  return links;
}

// Crawl a page and extract links
async function crawlPage(url) {
  console.log(`Crawling: ${url}`);
  visited.add(url);
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`Failed to fetch ${url}: ${response.status}`);
      return;
    }
    
    const html = await response.text();
    const $ = cheerio.load(html);
    const links = extractLinks($, url);
    
    for (const link of links) {
      if (isInternalUrl(link)) {
        if (!visited.has(link) && !toVisit.includes(link)) {
          toVisit.push(link);
        }
      } else if (config.includeExternal && !externalLinks.has(link)) {
        externalLinks.add(link);
        await checkUrl(link, url);
      }
    }
  } catch (error) {
    console.error(`Error crawling ${url}:`, error);
  }
}

// Main function
async function main() {
  console.log('Starting link checker...');
  console.log(`Starting URL: ${config.startUrl}`);
  
  let pageCount = 0;
  
  while (toVisit.length > 0 && pageCount < config.maxPages) {
    const url = toVisit.shift();
    await crawlPage(url);
    pageCount++;
  }
  
  console.log('\nLink checking completed!');
  console.log(`Checked ${pageCount} pages and ${externalLinks.size} external links`);
  
  if (brokenLinks.length > 0) {
    console.log('\nBroken links found:');
    brokenLinks.forEach((link, index) => {
      console.log(`${index + 1}. ${link.url}`);
      console.log(`   Status: ${link.status || link.error}`);
      console.log(`   Found on: ${link.referrer}`);
    });
  } else {
    console.log('\nNo broken links found!');
  }
}

// Run the script
main().catch(console.error);
