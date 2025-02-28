import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';
import { blogPosts } from '../data/blogPosts';

interface BlogPostSuggestionsProps {
  currentPostId: number;
  category?: string;
  tags?: string[];
  maxSuggestions?: number;
  title?: string;
  className?: string;
}

/**
 * BlogPostSuggestions component
 * 
 * Displays suggested blog posts based on category, tags, or both.
 * Excludes the current post from suggestions.
 * Used to enhance internal linking between blog posts.
 */
const BlogPostSuggestions: React.FC<BlogPostSuggestionsProps> = ({
  currentPostId,
  category,
  tags,
  maxSuggestions = 3,
  title = 'You May Also Like',
  className = ''
}) => {
  // Filter out the current post
  const otherPosts = blogPosts.filter(post => post.id !== currentPostId);
  
  // Filtering logic to find related posts
  const suggestedPosts = React.useMemo(() => {
    // First, try to get posts with the same category
    let suggestions: BlogPost[] = [];
    
    if (category) {
      suggestions = otherPosts.filter(post => post.category === category);
    }
    
    // If we have tags, add posts that share tags (but avoid duplicates)
    if (tags && tags.length > 0) {
      const taggedPosts = otherPosts.filter(post => 
        post.tags?.some(tag => tags.includes(tag)) && 
        !suggestions.some(s => s.id === post.id)
      );
      
      suggestions = [...suggestions, ...taggedPosts];
    }
    
    // If we still don't have enough suggestions, add recent posts
    if (suggestions.length < maxSuggestions) {
      const recentPosts = otherPosts
        .filter(post => !suggestions.some(s => s.id === post.id))
        .slice(0, maxSuggestions - suggestions.length);
      
      suggestions = [...suggestions, ...recentPosts];
    }
    
    // Return only the requested number of suggestions
    return suggestions.slice(0, maxSuggestions);
  }, [currentPostId, category, tags, maxSuggestions, otherPosts]);
  
  if (suggestedPosts.length === 0) {
    return null;
  }
  
  return (
    <div className={`mt-10 ${className}`}>
      <h3 className="text-xl font-semibold text-green-800 mb-6">{title}</h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {suggestedPosts.map(post => (
          <div key={post.id} className="bg-green-50 rounded-lg p-5 shadow-sm">
            <h4 className="font-medium text-green-700 mb-2">
              <Link 
                to={`/blog/${post.slug}`}
                className="hover:underline"
              >
                {post.title}
              </Link>
            </h4>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">
              {post.excerpt}
            </p>
            <Link 
              to={`/blog/${post.slug}`}
              className="inline-flex items-center text-green-600 text-sm hover:text-green-700"
            >
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostSuggestions; 