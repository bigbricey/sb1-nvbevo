import React from 'react';
import { Helmet } from 'react-helmet-async';

interface CalculatorApplicationSchemaProps {
  name: string;
  description: string;
  url?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
  screenshot?: string;
  creator?: {
    name: string;
    url?: string;
  };
  softwareVersion?: string;
  datePublished?: string;
  dateModified?: string;
  children?: React.ReactNode;
}

/**
 * CalculatorApplicationSchema Component
 * 
 * Adds schema.org SoftwareApplication structured data for calculator tools.
 * This helps search engines understand the calculator functionality on the page.
 * 
 * @param name - Name of the calculator/application
 * @param description - Description of what the calculator does
 * @param url - URL of the calculator page
 * @param applicationCategory - Category of application (e.g., "UtilityApplication", "CalculatorApplication")
 * @param operatingSystem - OS the application runs on (e.g., "Web browser")
 * @param offers - Information about pricing, if applicable
 * @param screenshot - URL to an image of the calculator
 * @param creator - Organization or person who created the calculator
 * @param softwareVersion - Version number of the calculator
 * @param datePublished - Date when the calculator was first published
 * @param dateModified - Date when the calculator was last updated
 * @param children - Optional child elements to render alongside the schema
 */
const CalculatorApplicationSchema: React.FC<CalculatorApplicationSchemaProps> = ({
  name,
  description,
  url,
  applicationCategory = 'CalculatorApplication',
  operatingSystem = 'Web browser',
  offers,
  screenshot,
  creator,
  softwareVersion,
  datePublished,
  dateModified,
  children
}) => {
  // Generate schema.org SoftwareApplication structured data
  const generateCalculatorSchema = () => {
    // Create the base schema
    const schema: any = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': name,
      'description': description,
      'applicationCategory': applicationCategory,
      'operatingSystem': operatingSystem
    };

    // Add optional properties if provided
    if (url) {
      schema.url = url;
    }

    if (offers) {
      schema.offers = {
        '@type': 'Offer',
        'price': offers.price || '0',
        'priceCurrency': offers.priceCurrency || 'USD',
        'availability': offers.availability || 'https://schema.org/OnlineOnly'
      };
    }

    if (screenshot) {
      schema.screenshot = screenshot;
    }

    if (creator) {
      schema.creator = {
        '@type': 'Organization',
        'name': creator.name
      };

      if (creator.url) {
        schema.creator.url = creator.url;
      }
    }

    if (softwareVersion) {
      schema.softwareVersion = softwareVersion;
    }

    if (datePublished) {
      schema.datePublished = datePublished;
    }

    if (dateModified) {
      schema.dateModified = dateModified;
    }

    return schema;
  };

  return (
    <>
      {/* Structured data for calculator application */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateCalculatorSchema())}
        </script>
      </Helmet>
      
      {/* Render children if provided */}
      {children}
    </>
  );
};

export default CalculatorApplicationSchema; 