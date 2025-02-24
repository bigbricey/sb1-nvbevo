/**
 * Structured Data Validation Script
 * 
 * This script extracts structured data from HTML files and validates it.
 * It helps ensure that schema.org markup is correctly implemented.
 * 
 * Usage: node scripts/validate-structured-data.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files to check for structured data
const FILES_TO_CHECK = [
  '../index.html',
  '../src/components/SEO.tsx',
  '../src/pages/Home.tsx',
  '../src/pages/About.tsx',
  '../src/pages/Services.tsx'
];

// Extract JSON-LD structured data from file content
function extractStructuredData(content) {
  const results = [];
  
  // Match JSON-LD script tags
  const jsonLdRegex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/g;
  let match;
  
  while ((match = jsonLdRegex.exec(content)) !== null) {
    try {
      const jsonData = JSON.parse(match[1].trim());
      results.push(jsonData);
    } catch (error) {
      console.error('Error parsing JSON-LD:', error);
      results.push({ error: 'Invalid JSON', content: match[1].trim() });
    }
  }
  
  // For React components, also look for schema objects
  const schemaRegex = /const\s+(\w+Schema|schema)\s*=\s*({[\s\S]*?});/g;
  while ((match = schemaRegex.exec(content)) !== null) {
    try {
      // This is a simplistic approach - in a real scenario you'd need a JS parser
      // Convert the object literal to valid JSON by replacing single quotes, etc.
      let jsonStr = match[2]
        .replace(/'/g, '"')
        .replace(/(\w+):/g, '"$1":')
        .replace(/,\s*}/g, '}');
      
      // Try to parse it
      const jsonData = JSON.parse(jsonStr);
      results.push(jsonData);
    } catch (error) {
      console.log('Found schema object but could not parse:', match[1]);
      results.push({ error: 'Could not parse schema object', name: match[1] });
    }
  }
  
  return results;
}

// Basic validation of structured data
function validateStructuredData(data) {
  const issues = [];
  
  // Check for required properties based on @type
  if (data['@type']) {
    if (data['@type'] === 'LocalBusiness' || data['@type'] === 'LandscapeService') {
      if (!data.name) issues.push('Missing name property');
      if (!data.address) issues.push('Missing address property');
      if (!data.telephone) issues.push('Missing telephone property');
      if (!data.url) issues.push('Missing url property');
    }
    
    if (data['@type'] === 'BreadcrumbList') {
      if (!data.itemListElement || !Array.isArray(data.itemListElement)) {
        issues.push('BreadcrumbList missing itemListElement array');
      }
    }
  } else {
    issues.push('Missing @type property');
  }
  
  // Check for @context
  if (!data['@context']) {
    issues.push('Missing @context property');
  }
  
  return issues;
}

// Main function
async function main() {
  console.log('Validating structured data in files...\n');
  
  for (const file of FILES_TO_CHECK) {
    const filePath = path.join(__dirname, file);
    
    try {
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const structuredData = extractStructuredData(content);
        
        console.log(`\n=== ${file} ===`);
        
        if (structuredData.length === 0) {
          console.log('No structured data found');
        } else {
          console.log(`Found ${structuredData.length} structured data items`);
          
          structuredData.forEach((data, index) => {
            console.log(`\nItem #${index + 1}:`);
            
            if (data.error) {
              console.log(`Error: ${data.error}`);
              return; // Changed from continue to return
            }
            
            console.log(`Type: ${data['@type'] || 'Unknown'}`);
            
            const issues = validateStructuredData(data);
            if (issues.length > 0) {
              console.log('Issues:');
              issues.forEach(issue => console.log(`- ${issue}`));
            } else {
              console.log('No issues found');
            }
          });
        }
      } else {
        console.log(`\n=== ${file} ===`);
        console.log('File not found');
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
  
  console.log('\nStructured data validation complete');
}

// Run the script
main().catch(console.error);
