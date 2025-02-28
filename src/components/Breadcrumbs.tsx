import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import BreadcrumbListSchema from './BreadcrumbListSchema';

// Map of route paths to human-readable names
const routeNames: Record<string, string> = {
  '': 'Home',
  'about': 'About Us',
  'services': 'Services',
  'sod-types': 'Sod Types',
  'contact': 'Contact',
  'faq': 'FAQ',
  'blog': 'Blog',
  'lawn-calculators': 'Lawn Calculators',
  'location': 'Service Areas',
  'sod-installation-st-augustine': 'St. Augustine Sod Installation',
  'sod-services-orange-park': 'Orange Park Sod Services'
};

interface BreadcrumbsProps {
  customCrumbs?: Array<{
    name: string;
    path: string;
  }>;
  baseUrl?: string;
}

/**
 * Breadcrumbs Component
 * 
 * Displays a navigation breadcrumb trail and adds structured data for search engines.
 * 
 * @param customCrumbs - Optional array of custom breadcrumb items
 * @param baseUrl - Base URL for constructing absolute URLs (defaults to https://www.jaxsod.com)
 */
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  customCrumbs,
  baseUrl = 'https://www.jaxsod.com'
}) => {
  const location = useLocation();
  
  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    // Use custom crumbs if provided
    if (customCrumbs) {
      return [{ name: 'Home', path: '/' }, ...customCrumbs];
    }
    
    // Otherwise generate from current path
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    // Start with home
    const breadcrumbs = [{ name: 'Home', path: '/' }];
    
    // Build up the breadcrumb paths
    let currentPath = '';
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        name: routeNames[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), // Capitalize each word
        path: currentPath
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs();
  
  // Transform breadcrumbs for schema
  const schemaBreadcrumbs = breadcrumbs.map(crumb => ({
    name: crumb.name,
    item: `${baseUrl}${crumb.path}`
  }));
  
  return (
    <>
      {/* Use the dedicated Schema component */}
      <BreadcrumbListSchema items={schemaBreadcrumbs} />
      
      {/* Visual breadcrumbs component */}
      <nav className="flex py-3 px-5 text-gray-700 bg-gray-50 rounded-lg my-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3" itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbs.map((crumb, index) => (
            <li 
              key={crumb.path} 
              className="inline-flex items-center"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
              )}
              
              {index === breadcrumbs.length - 1 ? (
                <span 
                  className="text-gray-500 font-medium" 
                  aria-current="page"
                  itemProp="name"
                >
                  {crumb.name}
                </span>
              ) : (
                <Link 
                  to={crumb.path}
                  className="text-green-600 hover:text-green-800 font-medium"
                  itemProp="item"
                >
                  <span itemProp="name">{crumb.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={`${index + 1}`} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
