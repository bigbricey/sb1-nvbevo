import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  item: string;
  image?: string;
  description?: string;
}

interface BreadcrumbListSchemaProps {
  items: BreadcrumbItem[];
  children?: React.ReactNode;
}

/**
 * BreadcrumbListSchema Component
 * 
 * Adds schema.org BreadcrumbList structured data to a page.
 * This helps search engines understand the navigation hierarchy and can enable breadcrumb rich results.
 * 
 * Schema Documentation: https://schema.org/BreadcrumbList
 * Google Documentation: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 * 
 * @param items - Array of breadcrumb items, each with:
 *   - name: The human-readable name of the breadcrumb (required)
 *   - item: The full URL of the breadcrumb page (required)
 *   - image: Optional URL to an image representing the breadcrumb
 *   - description: Optional description of the breadcrumb page
 * @param children - Optional child elements to render alongside the schema
 * 
 * @example
 * // Basic usage
 * <BreadcrumbListSchema
 *   items={[
 *     { name: 'Home', item: 'https://example.com/' },
 *     { name: 'Services', item: 'https://example.com/services' },
 *     { name: 'Lawn Care', item: 'https://example.com/services/lawn-care' }
 *   ]}
 * />
 */
const BreadcrumbListSchema: React.FC<BreadcrumbListSchemaProps> = ({
  items,
  children
}) => {
  // Generate schema.org BreadcrumbList structured data
  const generateBreadcrumbListSchema = () => {
    // Create the schema
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items.map((item, index) => {
        const listItem: any = {
          '@type': 'ListItem',
          'position': index + 1,
          'name': item.name,
          'item': {
            '@type': 'WebPage',
            '@id': item.item,
            'url': item.item,
            'name': item.name
          }
        };
        
        // Add optional properties if provided
        if (item.image) {
          listItem.item.image = item.image;
        }
        
        if (item.description) {
          listItem.item.description = item.description;
        }
        
        return listItem;
      })
    };

    return schema;
  };

  return (
    <>
      {/* Structured data for breadcrumbs */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbListSchema())}
        </script>
      </Helmet>
      
      {/* Render children if provided */}
      {children}
    </>
  );
};

export default BreadcrumbListSchema; 