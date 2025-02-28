import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import relatedContentMap from '../data/relatedContentMap';
import { RelatedLink } from '../components/RelatedContent';

/**
 * Custom hook that provides related content links based on:
 * 1. Current route path
 * 2. Content type/category (for blog posts)
 * 3. Optional tags for more specific matching
 * 
 * @param contentType - Optional content type/category (e.g., "lawn-care", "installation")
 * @param tags - Optional array of tags for more specific content matching
 * @param limit - Maximum number of related links to return (default: 5)
 * @returns Array of related content links
 */
const useRelatedContent = (
  contentType?: string,
  tags?: string[],
  limit: number = 5
): RelatedLink[] => {
  const location = useLocation();
  
  return useMemo(() => {
    // First try to match by path
    const path = location.pathname;
    let relatedLinks: RelatedLink[] = [];
    
    // Check for exact path match first
    if (relatedContentMap[path]) {
      relatedLinks = [...relatedContentMap[path]];
    } 
    // Check for content type match
    else if (contentType && relatedContentMap[contentType]) {
      relatedLinks = [...relatedContentMap[contentType]];
    }
    // If no matches by path or content type, use home page related links as fallback
    else {
      relatedLinks = [...relatedContentMap['/']];
    }
    
    // Avoid showing links to the current page
    relatedLinks = relatedLinks.filter(link => link.url !== path);
    
    // If tags are provided, prioritize related content that matches tags
    if (tags && tags.length > 0) {
      // Simple tag matching heuristic - could be enhanced with more sophisticated logic
      const taggedContent = relatedLinks.filter(link => {
        const titleWords = link.title.toLowerCase().split(/\s+/);
        const excerptWords = link.excerpt?.toLowerCase().split(/\s+/) || [];
        const allWords = [...titleWords, ...excerptWords];
        
        return tags.some(tag => 
          allWords.includes(tag.toLowerCase()) || 
          allWords.some(word => word.includes(tag.toLowerCase()))
        );
      });
      
      // If we found tag matches, prioritize them but keep other related content
      if (taggedContent.length > 0) {
        // Add tagged content first, then other content, and deduplicate
        const otherContent = relatedLinks.filter(link => 
          !taggedContent.some(tc => tc.url === link.url)
        );
        
        relatedLinks = [...taggedContent, ...otherContent];
      }
    }
    
    // Limit the number of related links
    return relatedLinks.slice(0, limit);
  }, [location.pathname, contentType, tags, limit]);
};

export default useRelatedContent; 