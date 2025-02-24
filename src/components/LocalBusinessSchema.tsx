import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

interface PostalAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface OpeningHoursSpecification {
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

interface Service {
  name: string;
  description: string;
}

interface LocalBusinessSchemaProps {
  type?: 'LocalBusiness' | 'LandscapeService' | 'HomeAndConstructionBusiness' | 'ProfessionalService';
  name: string;
  image?: string;
  telephone: string;
  priceRange?: string;
  description: string;
  url?: string;
  sameAs?: string[];
  address: PostalAddress;
  geo: GeoCoordinates;
  areaServed?: {
    type?: 'GeoCircle' | 'GeoShape';
    geoMidpoint?: GeoCoordinates;
    geoRadius?: string;
    // For GeoShape
    polygon?: string;
  };
  openingHours?: OpeningHoursSpecification[];
  services?: Service[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  children?: React.ReactNode;
}

/**
 * LocalBusinessSchema Component
 * 
 * Adds schema.org LocalBusiness structured data to a page.
 * This helps search engines understand business information and can enable rich results.
 * 
 * @param type - The type of business (defaults to LocalBusiness)
 * @param name - Business name
 * @param image - URL to business image
 * @param telephone - Business phone number
 * @param priceRange - Price range (e.g., "$", "$$", "$$$")
 * @param description - Business description
 * @param url - Business website URL
 * @param sameAs - Array of related social media URLs
 * @param address - Postal address information
 * @param geo - Geographic coordinates
 * @param areaServed - Service area information
 * @param openingHours - Business hours
 * @param services - Services offered
 * @param aggregateRating - Business rating information
 * @param children - Optional child elements to render alongside the schema
 */
const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  type = 'LocalBusiness',
  name,
  image,
  telephone,
  priceRange = '$$',
  description,
  url = 'https://www.jaxsod.com',
  sameAs = [],
  address,
  geo,
  areaServed,
  openingHours = [],
  services = [],
  aggregateRating,
  children
}) => {
  // Generate schema.org LocalBusiness structured data
  const generateLocalBusinessSchema = () => {
    // Create the base schema
    const schema: any = {
      '@context': 'https://schema.org',
      '@type': type,
      'name': name,
      'telephone': telephone,
      'priceRange': priceRange,
      'description': description,
      'url': url,
      'address': {
        '@type': 'PostalAddress',
        ...address
      },
      'geo': {
        '@type': 'GeoCoordinates',
        ...geo
      }
    };

    // Add optional properties if provided
    if (image) {
      schema.image = image;
    }

    if (sameAs && sameAs.length > 0) {
      schema.sameAs = sameAs;
    }

    // Add area served if provided
    if (areaServed) {
      schema.areaServed = {
        '@type': areaServed.type || 'GeoCircle'
      };

      if (areaServed.type === 'GeoCircle' && areaServed.geoMidpoint) {
        schema.areaServed.geoMidpoint = {
          '@type': 'GeoCoordinates',
          ...areaServed.geoMidpoint
        };

        if (areaServed.geoRadius) {
          schema.areaServed.geoRadius = areaServed.geoRadius;
        }
      } else if (areaServed.type === 'GeoShape' && areaServed.polygon) {
        schema.areaServed.polygon = areaServed.polygon;
      }
    }

    // Add opening hours if provided
    if (openingHours && openingHours.length > 0) {
      schema.openingHoursSpecification = openingHours.map(hours => ({
        '@type': 'OpeningHoursSpecification',
        ...hours
      }));
    }

    // Add services if provided
    if (services && services.length > 0) {
      schema.hasOfferCatalog = {
        '@type': 'OfferCatalog',
        'name': 'Services',
        'itemListElement': services.map((service, index) => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            ...service
          }
        }))
      };
    }

    // Add aggregate rating if provided
    if (aggregateRating) {
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        ...aggregateRating
      };
    }

    return schema;
  };

  return (
    <>
      {/* Structured data for local business */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateLocalBusinessSchema())}
        </script>
      </Helmet>
      
      {/* Render children if provided */}
      {children}
    </>
  );
};

export default LocalBusinessSchema;
