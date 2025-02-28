import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: {
    name: string;
    url?: string;
    logo?: string;
    telephone?: string;
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    }
  };
  serviceType: string;
  areaServed?: string | string[];
  offers?: {
    price?: number | string;
    priceCurrency?: string;
    availability?: string;
    validFrom?: string;
    validThrough?: string;
    priceValidUntil?: string;
  };
  image?: string;
  url?: string;
  termsOfService?: string;
  serviceOutput?: string;
  estimatedDuration?: string;
  children?: React.ReactNode;
}

/**
 * ServiceSchema Component
 * 
 * Adds schema.org Service structured data to service pages.
 * This helps search engines understand services offered and can enable rich results.
 * 
 * @param name - Service name
 * @param description - Detailed description of the service
 * @param provider - Information about the service provider
 * @param serviceType - Type of service being offered
 * @param areaServed - Geographic area where the service is available
 * @param offers - Pricing and availability information
 * @param image - URL to an image representing the service
 * @param url - URL to the service page
 * @param termsOfService - Terms of service URL or description
 * @param serviceOutput - Description of the results/deliverables of the service
 * @param estimatedDuration - Estimated duration for service delivery (e.g. "P2D" for 2 days)
 * @param children - Optional child elements to render alongside the schema
 */
const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  provider,
  serviceType,
  areaServed,
  offers,
  image,
  url,
  termsOfService,
  serviceOutput,
  estimatedDuration,
  children
}) => {
  // Generate schema.org Service structured data
  const generateServiceSchema = () => {
    // Create the base schema
    const schema: any = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': name,
      'description': description,
      'provider': {
        '@type': 'Organization',
        'name': provider.name
      },
      'serviceType': serviceType
    };

    // Add provider details if available
    if (provider.url) {
      schema.provider.url = provider.url;
    }

    if (provider.logo) {
      schema.provider.logo = provider.logo;
    }

    if (provider.telephone) {
      schema.provider.telephone = provider.telephone;
    }

    if (provider.address) {
      schema.provider.address = {
        '@type': 'PostalAddress',
        ...provider.address
      };
    }

    // Add optional properties if provided
    if (areaServed) {
      schema.areaServed = areaServed;
    }

    if (offers) {
      schema.offers = {
        '@type': 'Offer',
        ...offers
      };
    }

    if (image) {
      schema.image = image;
    }

    if (url) {
      schema.url = url;
    }

    if (termsOfService) {
      schema.termsOfService = termsOfService;
    }

    if (serviceOutput) {
      schema.serviceOutput = serviceOutput;
    }

    if (estimatedDuration) {
      schema.estimatedDuration = estimatedDuration;
    }

    return schema;
  };

  return (
    <>
      {/* Structured data for service */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateServiceSchema())}
        </script>
      </Helmet>
      
      {/* Render children if provided */}
      {children}
    </>
  );
};

export default ServiceSchema; 