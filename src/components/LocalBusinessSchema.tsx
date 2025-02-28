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
  price?: string;
  priceCurrency?: string;
}

interface Review {
  author: string;
  datePublished?: string;
  reviewRating: {
    ratingValue: number;
    bestRating?: number;
    worstRating?: number;
  };
  reviewBody?: string;
}

interface LocalBusinessSchemaProps {
  type?: 'LocalBusiness' | 'LandscapeService' | 'HomeAndConstructionBusiness' | 'ProfessionalService' | 'GardenStore';
  name: string;
  image?: string | string[];
  telephone: string;
  email?: string;
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
    addressRegion?: string[];
    addressLocality?: string[];
  };
  openingHours?: OpeningHoursSpecification[];
  services?: Service[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
  reviews?: Review[];
  paymentAccepted?: string[];
  currenciesAccepted?: string;
  foundingDate?: string;
  logo?: string;
  slogan?: string;
  awards?: string[];
  keywords?: string;
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
 * @param image - URL to business image(s) - can be a single URL or array of URLs
 * @param telephone - Business phone number
 * @param email - Business email address
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
 * @param reviews - Individual customer reviews
 * @param paymentAccepted - Payment methods accepted
 * @param currenciesAccepted - Currencies accepted
 * @param foundingDate - Date business was founded
 * @param logo - URL to business logo
 * @param slogan - Business slogan or tagline
 * @param awards - Business awards or recognitions
 * @param keywords - Business keywords for search engines
 * @param children - Optional child elements to render alongside the schema
 */
const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  type = 'LocalBusiness',
  name,
  image,
  telephone,
  email,
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
  reviews = [],
  paymentAccepted,
  currenciesAccepted,
  foundingDate,
  logo,
  slogan,
  awards,
  keywords,
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

    if (email) {
      schema.email = email;
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
      
      // Add service areas by region/locality if provided
      if (areaServed.addressRegion && areaServed.addressRegion.length > 0) {
        schema.areaServed.addressRegion = areaServed.addressRegion;
      }
      
      if (areaServed.addressLocality && areaServed.addressLocality.length > 0) {
        schema.areaServed.addressLocality = areaServed.addressLocality;
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
        'itemListElement': services.map((service, index) => {
          const offer: any = {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': service.name,
              'description': service.description
            }
          };
          
          // Add price information if available
          if (service.price) {
            offer.price = service.price;
            offer.priceCurrency = service.priceCurrency || 'USD';
          }
          
          return offer;
        })
      };
    }

    // Add aggregate rating if provided
    if (aggregateRating) {
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        'ratingValue': aggregateRating.ratingValue,
        'reviewCount': aggregateRating.reviewCount
      };
      
      if (aggregateRating.bestRating) {
        schema.aggregateRating.bestRating = aggregateRating.bestRating;
      }
      
      if (aggregateRating.worstRating) {
        schema.aggregateRating.worstRating = aggregateRating.worstRating;
      }
    }
    
    // Add individual reviews if provided
    if (reviews && reviews.length > 0) {
      schema.review = reviews.map(review => ({
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': review.author
        },
        'reviewRating': {
          '@type': 'Rating',
          ...review.reviewRating
        },
        ...(review.datePublished ? { 'datePublished': review.datePublished } : {}),
        ...(review.reviewBody ? { 'reviewBody': review.reviewBody } : {})
      }));
    }
    
    // Add payment methods if provided
    if (paymentAccepted && paymentAccepted.length > 0) {
      schema.paymentAccepted = paymentAccepted.join(', ');
    }
    
    // Add currencies accepted if provided
    if (currenciesAccepted) {
      schema.currenciesAccepted = currenciesAccepted;
    }
    
    // Add founding date if provided
    if (foundingDate) {
      schema.foundingDate = foundingDate;
    }
    
    // Add logo if provided
    if (logo) {
      schema.logo = logo;
    }
    
    // Add slogan if provided
    if (slogan) {
      schema.slogan = slogan;
    }
    
    // Add awards if provided
    if (awards && awards.length > 0) {
      schema.award = awards;
    }
    
    // Add keywords if provided
    if (keywords) {
      schema.keywords = keywords;
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
