/**
 * Content SEO Analysis Script
 * 
 * This script analyzes content files for SEO optimization, including:
 * - Keyword density
 * - Readability
 * - Heading structure
 * - Meta tag optimization
 * - Content length
 * 
 * Usage: node scripts/analyze-content-seo.js [path] [keyword]
 * Example: node scripts/analyze-content-seo.js src/pages/Home.tsx "sod installation"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  // Default path to analyze if not specified
  defaultPath: path.join(__dirname, '../src'),
  // File extensions to analyze
  fileExtensions: ['tsx', 'jsx', 'ts', 'js', 'html', 'md'],
  // Minimum content length for a good SEO score (in words)
  minContentLength: 300,
  // Ideal keyword density range (percentage)
  keywordDensityRange: {
    min: 0.5,
    max: 2.5
  },
  // Readability targets (Flesch-Kincaid)
  readabilityTarget: {
    min: 60, // Fairly easy to read
    max: 80  // Easy to read
  }
};

// Parse command line arguments
const args = process.argv.slice(2);
const targetPath = args[0] ? path.resolve(args[0]) : config.defaultPath;
const targetKeyword = args[1] ? args[1].toLowerCase() : null;

// Regular expressions for content extraction
const contentRegexes = {
  // Extract text content from JSX/TSX
  jsxContent: /<[^>]*>([^<]*)<\/[^>]*>|{['"]([^'"]*)['"]}|['"]([^'"]*)['"]/g,
  // Extract meta tags
  metaTags: /<meta[^>]*name=["']([^"']*)["'][^>]*content=["']([^"']*)["'][^>]*>/g,
  // Extract title tags
  titleTag: /<title[^>]*>(.*?)<\/title>/g,
  // Extract headings
  headings: /<h([1-6])[^>]*>(.*?)<\/h\1>|<Heading[^>]*>(.*?)<\/Heading>/g,
  // Extract alt text
  altText: /alt=["']([^"']*)["']/g
};

// Function to extract text content from a file
function extractContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileExt = path.extname(filePath).toLowerCase();
    
    // Different extraction methods based on file type
    if (['.tsx', '.jsx', '.js', '.ts'].includes(fileExt)) {
      return extractJsxContent(content);
    } else if (fileExt === '.html') {
      return extractHtmlContent(content);
    } else if (fileExt === '.md') {
      return content; // Raw markdown content
    }
    
    return '';
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return '';
  }
}

// Extract content from JSX/TSX files
function extractJsxContent(content) {
  // Remove comments
  content = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
  
  // Extract text from JSX tags, string literals, etc.
  let textContent = '';
  let match;
  
  while ((match = contentRegexes.jsxContent.exec(content)) !== null) {
    const extractedText = match[1] || match[2] || match[3];
    if (extractedText && extractedText.trim()) {
      textContent += ' ' + extractedText.trim();
    }
  }
  
  return textContent;
}

// Extract content from HTML files
function extractHtmlContent(content) {
  // Remove HTML tags
  return content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

// Calculate keyword density
function calculateKeywordDensity(content, keyword) {
  if (!keyword || !content) return 0;
  
  const words = content.toLowerCase().split(/\s+/);
  const totalWords = words.length;
  
  if (totalWords === 0) return 0;
  
  // Count keyword occurrences (including multi-word keywords)
  const keywordWords = keyword.toLowerCase().split(/\s+/);
  let keywordCount = 0;
  
  if (keywordWords.length === 1) {
    // Single word keyword
    keywordCount = words.filter(word => word === keyword).length;
  } else {
    // Multi-word keyword
    for (let i = 0; i <= words.length - keywordWords.length; i++) {
      const phrase = words.slice(i, i + keywordWords.length).join(' ');
      if (phrase === keyword) {
        keywordCount++;
      }
    }
  }
  
  return (keywordCount / totalWords) * 100;
}

// Calculate readability score (Flesch-Kincaid)
function calculateReadability(content) {
  if (!content) return 0;
  
  // Split into sentences and words
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = content.split(/\s+/).filter(w => w.match(/[a-z0-9]/i));
  
  if (sentences.length === 0 || words.length === 0) return 0;
  
  // Count syllables (simplified approach)
  const syllableCount = words.reduce((count, word) => {
    return count + countSyllables(word);
  }, 0);
  
  // Calculate Flesch-Kincaid Reading Ease
  const asl = words.length / sentences.length;
  const asw = syllableCount / words.length;
  
  return 206.835 - (1.015 * asl) - (84.6 * asw);
}

// Count syllables in a word (simplified)
function countSyllables(word) {
  word = word.toLowerCase();
  if (word.length <= 3) return 1;
  
  // Remove trailing e
  word = word.replace(/e$/, '');
  
  // Count vowel groups
  const vowelGroups = word.match(/[aeiouy]+/g);
  return vowelGroups ? vowelGroups.length : 1;
}

// Analyze heading structure
function analyzeHeadings(content) {
  const headings = [];
  let match;
  
  while ((match = contentRegexes.headings.exec(content)) !== null) {
    const level = match[1] ? parseInt(match[1]) : 1;
    const text = match[1] ? match[2] : match[3];
    
    if (text && text.trim()) {
      headings.push({
        level,
        text: text.trim()
      });
    }
  }
  
  // Check if there's an H1
  const hasH1 = headings.some(h => h.level === 1);
  
  // Check if headings are in order
  let isSequential = true;
  let prevLevel = 0;
  
  for (const heading of headings) {
    if (heading.level > prevLevel + 1) {
      isSequential = false;
      break;
    }
    prevLevel = heading.level;
  }
  
  return {
    count: headings.length,
    hasH1,
    isSequential,
    headings
  };
}

// Extract and analyze meta tags
function analyzeMeta(content) {
  const meta = {
    title: '',
    description: '',
    keywords: ''
  };
  
  // Extract title
  let match;
  while ((match = contentRegexes.titleTag.exec(content)) !== null) {
    meta.title = match[1].trim();
  }
  
  // Extract meta tags
  while ((match = contentRegexes.metaTags.exec(content)) !== null) {
    const name = match[1].toLowerCase();
    const content = match[2];
    
    if (name === 'description') {
      meta.description = content;
    } else if (name === 'keywords') {
      meta.keywords = content;
    }
  }
  
  return {
    ...meta,
    titleLength: meta.title.length,
    descriptionLength: meta.description.length,
    hasTitleOptimalLength: meta.title.length >= 30 && meta.title.length <= 60,
    hasDescriptionOptimalLength: meta.description.length >= 120 && meta.description.length <= 160
  };
}

// Check for keyword in important elements
function checkKeywordPresence(content, keyword) {
  if (!keyword) return { score: 0, details: {} };
  
  const lowerContent = content.toLowerCase();
  const lowerKeyword = keyword.toLowerCase();
  
  const results = {
    inTitle: false,
    inDescription: false,
    inHeadings: false,
    inFirstParagraph: false,
    inLastParagraph: false,
    inAltText: false
  };
  
  // Check title
  const titleMatch = contentRegexes.titleTag.exec(content);
  if (titleMatch && titleMatch[1].toLowerCase().includes(lowerKeyword)) {
    results.inTitle = true;
  }
  
  // Check meta description
  const metaMatches = [...content.matchAll(contentRegexes.metaTags)];
  for (const match of metaMatches) {
    if (match[1].toLowerCase() === 'description' && match[2].toLowerCase().includes(lowerKeyword)) {
      results.inDescription = true;
      break;
    }
  }
  
  // Check headings
  const headingMatches = [...content.matchAll(contentRegexes.headings)];
  for (const match of headingMatches) {
    const headingText = (match[2] || match[3] || '').toLowerCase();
    if (headingText.includes(lowerKeyword)) {
      results.inHeadings = true;
      break;
    }
  }
  
  // Check alt text
  const altMatches = [...content.matchAll(contentRegexes.altText)];
  for (const match of altMatches) {
    if (match[1].toLowerCase().includes(lowerKeyword)) {
      results.inAltText = true;
      break;
    }
  }
  
  // Calculate score (1 point for each place the keyword appears)
  const score = Object.values(results).filter(Boolean).length;
  
  return {
    score,
    details: results
  };
}

// Analyze a single file
async function analyzeFile(filePath, keyword) {
  const content = extractContent(filePath);
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  
  // Skip files with minimal content
  if (wordCount < 50) {
    return null;
  }
  
  const keywordDensity = calculateKeywordDensity(content, keyword);
  const readabilityScore = calculateReadability(content);
  const headingAnalysis = analyzeHeadings(content);
  const metaAnalysis = analyzeMeta(content);
  const keywordPresence = checkKeywordPresence(content, keyword);
  
  // Calculate overall score (0-100)
  let score = 0;
  
  // Content length (0-20 points)
  score += Math.min(wordCount / config.minContentLength * 20, 20);
  
  // Keyword density (0-15 points)
  if (keyword) {
    if (keywordDensity >= config.keywordDensityRange.min && keywordDensity <= config.keywordDensityRange.max) {
      score += 15;
    } else if (keywordDensity > 0) {
      score += 5;
    }
  } else {
    score += 15; // No keyword specified, so full points
  }
  
  // Readability (0-15 points)
  if (readabilityScore >= config.readabilityTarget.min && readabilityScore <= config.readabilityTarget.max) {
    score += 15;
  } else if (readabilityScore > 0) {
    score += 5;
  }
  
  // Headings (0-15 points)
  if (headingAnalysis.count > 0) {
    score += 5;
    if (headingAnalysis.hasH1) score += 5;
    if (headingAnalysis.isSequential) score += 5;
  }
  
  // Meta tags (0-15 points)
  if (metaAnalysis.title) score += 5;
  if (metaAnalysis.hasTitleOptimalLength) score += 5;
  if (metaAnalysis.hasDescriptionOptimalLength) score += 5;
  
  // Keyword presence (0-20 points)
  if (keyword) {
    score += keywordPresence.score * 4; // 4 points for each place the keyword appears (max 20)
  } else {
    score += 20; // No keyword specified, so full points
  }
  
  return {
    file: path.relative(process.cwd(), filePath),
    wordCount,
    keywordDensity: keyword ? keywordDensity.toFixed(2) + '%' : 'N/A',
    readabilityScore: readabilityScore.toFixed(1),
    headings: headingAnalysis,
    meta: metaAnalysis,
    keywordPresence: keyword ? keywordPresence.details : 'N/A',
    score: Math.round(score),
    grade: getGrade(Math.round(score))
  };
}

// Get letter grade based on score
function getGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

// Main function
async function main() {
  console.log('Content SEO Analysis');
  console.log('====================');
  console.log(`Target path: ${targetPath}`);
  console.log(`Target keyword: ${targetKeyword || 'None specified'}`);
  console.log('');
  
  // Find files to analyze
  const pattern = `**/*.{${config.fileExtensions.join(',')}}`;
  const files = await glob(pattern, {
    cwd: targetPath,
    absolute: true,
    ignore: ['**/node_modules/**', '**/dist/**', '**/build/**']
  });
  
  console.log(`Found ${files.length} files to analyze`);
  
  // Analyze each file
  const results = [];
  
  for (const file of files) {
    const result = await analyzeFile(file, targetKeyword);
    if (result) {
      results.push(result);
    }
  }
  
  // Sort results by score (descending)
  results.sort((a, b) => b.score - a.score);
  
  // Display results
  console.log('\nResults:');
  console.log('========');
  
  for (const result of results) {
    console.log(`\nFile: ${result.file}`);
    console.log(`Score: ${result.score}/100 (Grade: ${result.grade})`);
    console.log(`Word Count: ${result.wordCount}`);
    console.log(`Keyword Density: ${result.keywordDensity}`);
    console.log(`Readability: ${result.readabilityScore}`);
    
    console.log('Headings:');
    console.log(`  Count: ${result.headings.count}`);
    console.log(`  Has H1: ${result.headings.hasH1}`);
    console.log(`  Sequential: ${result.headings.isSequential}`);
    
    console.log('Meta Tags:');
    console.log(`  Title: ${result.meta.title.substring(0, 50)}${result.meta.title.length > 50 ? '...' : ''}`);
    console.log(`  Title Length: ${result.meta.titleLength} chars (Optimal: ${result.meta.hasTitleOptimalLength})`);
    console.log(`  Description Length: ${result.meta.descriptionLength} chars (Optimal: ${result.meta.hasDescriptionOptimalLength})`);
    
    if (targetKeyword) {
      console.log('Keyword Presence:');
      console.log(`  In Title: ${result.keywordPresence.inTitle}`);
      console.log(`  In Description: ${result.keywordPresence.inDescription}`);
      console.log(`  In Headings: ${result.keywordPresence.inHeadings}`);
      console.log(`  In Alt Text: ${result.keywordPresence.inAltText}`);
    }
  }
  
  // Summary
  const averageScore = results.reduce((sum, result) => sum + result.score, 0) / results.length;
  
  console.log('\nSummary:');
  console.log('========');
  console.log(`Analyzed ${results.length} files`);
  console.log(`Average Score: ${averageScore.toFixed(1)}/100`);
  
  // Recommendations
  console.log('\nRecommendations:');
  console.log('===============');
  
  if (results.some(r => r.score < 70)) {
    console.log('- Improve content length on low-scoring pages (aim for 300+ words)');
  }
  
  if (targetKeyword && results.some(r => parseFloat(r.keywordDensity) < config.keywordDensityRange.min)) {
    console.log(`- Increase keyword density for "${targetKeyword}" (aim for ${config.keywordDensityRange.min}-${config.keywordDensityRange.max}%)`);
  }
  
  if (results.some(r => !r.headings.hasH1)) {
    console.log('- Add H1 headings to pages missing them');
  }
  
  if (results.some(r => !r.meta.hasTitleOptimalLength)) {
    console.log('- Optimize title lengths (aim for 30-60 characters)');
  }
  
  if (results.some(r => !r.meta.hasDescriptionOptimalLength)) {
    console.log('- Optimize meta descriptions (aim for 120-160 characters)');
  }
}

// Run the script
main().catch(console.error);
