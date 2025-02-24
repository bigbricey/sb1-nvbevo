import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';

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
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customCrumbs }) => {
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
        name: routeNames[segment] || segment.replace(/-/g, ' '),
        path: currentPath
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs();
  
  // Generate schema.org BreadcrumbList structured data
  const generateBreadcrumbSchema = () => {
    const itemListElement = breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': `https://www.jaxsod.com${crumb.path}`
    }));
    
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': itemListElement
    };
  };
  
  return (
    <>
      {/* Structured data for breadcrumbs */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema())}
        </script>
      </Helmet>
      
      {/* Visual breadcrumbs component */}
      <nav className="flex py-3 px-5 text-gray-700 bg-gray-50 rounded-lg my-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="inline-flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
              )}
              
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-500 font-medium" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link 
                  to={crumb.path}
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
