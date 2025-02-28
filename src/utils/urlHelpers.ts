/**
 * URL Helper Functions for SEO-Friendly URLs
 * 
 * A collection of utility functions for creating, parsing, and managing
 * SEO-friendly URLs throughout the application.
 */

/**
 * Generates a URL-friendly slug from a string
 * @param text The text to convert to a slug
 * @returns A URL-friendly slug
 */
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')    // Replace spaces with hyphens
    .replace(/-+/g, '-')     // Remove consecutive hyphens
    .trim();                 // Trim whitespace
};

/**
 * Gets the appropriate category based on post data
 * @param category Explicit category if available
 * @param tags Tags array to determine category
 * @returns The appropriate category string for URLs
 */
export const getUrlCategory = (category?: string, tags?: string[]): string => {
  if (category) return category;
  
  if (tags) {
    if (tags.includes('maintenance') || tags.includes('lawn care')) return 'maintenance';
    if (tags.includes('installation')) return 'installation';
    if (tags.includes('grass types') || tags.includes('sod types')) return 'grass-types';
    if (tags.includes('seasonal') || tags.includes('summer') || 
        tags.includes('winter') || tags.includes('spring') || tags.includes('fall')) {
      return 'seasonal';
    }
  }
  
  return 'general';
};

/**
 * Builds a blog post URL with the appropriate structure
 * @param slug The post slug
 * @param category The post category
 * @param tags Optional tags array if category is not provided
 * @returns The complete URL path
 */
export const getBlogPostUrl = (slug: string, category?: string, tags?: string[]): string => {
  const urlCategory = getUrlCategory(category, tags);
  return `/lawn-care-blog/${urlCategory}/${slug}`;
};

/**
 * Formats a category for display (capitalizes and replaces hyphens with spaces)
 * @param category The category slug
 * @returns A formatted category name for display
 */
export const formatCategoryName = (category: string): string => {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Maps old URLs to new SEO-friendly URLs
 * Used for redirects from legacy URL structure
 */
export const URL_REDIRECTS: Record<string, string> = {
  '/about': '/about-us',
  '/contact': '/contact-us',
  '/blog': '/lawn-care-blog',
  '/faq': '/frequently-asked-questions',
  '/location': '/service-locations',
  '/calculators': '/lawn-care-calculators',
  '/sod-types': '/sod-types-and-varieties'
};

/**
 * Checks if a URL needs to be redirected and returns the new URL
 * @param path The current URL path
 * @returns The new URL path or null if no redirect is needed
 */
export const getRedirectUrl = (path: string): string | null => {
  // Check for exact matches
  if (Object.prototype.hasOwnProperty.call(URL_REDIRECTS, path)) {
    return URL_REDIRECTS[path];
  }
  
  // Check for blog post URLs with the old format: /blog/[slug]
  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    return `/lawn-care-blog/general/${slug}`;
  }
  
  return null;
}; 