import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

export interface RelatedLink {
  title: string;
  url: string;
  excerpt?: string;
  isExternal?: boolean;
  category?: string;
}

interface RelatedContentProps {
  title?: string;
  links: RelatedLink[];
  className?: string;
  compact?: boolean;
  showCategories?: boolean;
}

/**
 * RelatedContent component
 * 
 * Displays a list of related content links to improve internal linking for SEO
 * Can be used in blog posts, service pages, and other content pages
 * 
 * @param title - Optional custom title for the section (defaults to "Related Content")
 * @param links - Array of related links to display
 * @param className - Optional additional CSS classes
 * @param compact - Whether to show a compact version (title and links only, no excerpts)
 * @param showCategories - Whether to group links by category
 */
const RelatedContent: React.FC<RelatedContentProps> = ({
  title = "Related Content",
  links,
  className = "",
  compact = false,
  showCategories = false
}) => {
  // If no links provided, don't render anything
  if (!links || links.length === 0) {
    return null;
  }

  // Group links by category if showCategories is true
  const groupedLinks = showCategories 
    ? links.reduce((groups, link) => {
        const category = link.category || 'Other Resources';
        if (!groups[category]) {
          groups[category] = [];
        }
        groups[category].push(link);
        return groups;
      }, {} as Record<string, RelatedLink[]>)
    : { 'Related Content': links };
  
  return (
    <div className={`bg-green-50 rounded-lg p-6 my-8 shadow-sm ${className}`}>
      <h3 className="text-xl font-semibold text-green-800 mb-4">{title}</h3>
      
      {showCategories ? (
        // Render links grouped by category
        Object.entries(groupedLinks).map(([category, categoryLinks]) => (
          <div key={category} className="mb-4">
            <h4 className="text-lg font-medium text-green-700 mb-2">{category}</h4>
            <ul className="space-y-3">
              {categoryLinks.map((link, index) => (
                <li key={index}>
                  {link.isExternal ? (
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-start text-green-600 hover:text-green-800 hover:underline"
                    >
                      <span>{link.title}</span>
                      <ExternalLink className="ml-1 h-4 w-4 mt-1 opacity-70 group-hover:opacity-100" />
                    </a>
                  ) : (
                    <Link 
                      to={link.url}
                      className="group inline-flex items-start text-green-600 hover:text-green-800 hover:underline"
                    >
                      <span>{link.title}</span>
                      <ArrowRight className="ml-1 h-4 w-4 mt-1 opacity-70 group-hover:opacity-100" />
                    </Link>
                  )}
                  
                  {!compact && link.excerpt && (
                    <p className="text-sm text-gray-600 mt-1">{link.excerpt}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        // Render plain list without categories
        <ul className="space-y-3">
          {links.map((link, index) => (
            <li key={index}>
              {link.isExternal ? (
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-start text-green-600 hover:text-green-800 hover:underline"
                >
                  <span>{link.title}</span>
                  <ExternalLink className="ml-1 h-4 w-4 mt-1 opacity-70 group-hover:opacity-100" />
                </a>
              ) : (
                <Link 
                  to={link.url}
                  className="group inline-flex items-start text-green-600 hover:text-green-800 hover:underline"
                >
                  <span>{link.title}</span>
                  <ArrowRight className="ml-1 h-4 w-4 mt-1 opacity-70 group-hover:opacity-100" />
                </Link>
              )}
              
              {!compact && link.excerpt && (
                <p className="text-sm text-gray-600 mt-1">{link.excerpt}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RelatedContent; 