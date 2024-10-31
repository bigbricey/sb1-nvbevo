import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  schema?: Record<string, unknown>;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl, ogImage, schema }) => {
  const siteUrl = 'https://www.jaxsod.com';
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const imageUrl = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/og-image.jpg`;

  const localBusinessSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LandscapeService",
    "name": "Jax Sod - Jacksonville Sod Installation Experts",
    "image": `${siteUrl}/logo.jpg`,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "904-901-1457",
    "priceRange": "$$",
    "description": "Professional sod installation services in Jacksonville, FL. Expert team offering premium Grade-A sod, soil preparation, and lawn care services.",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 30.3322,
        "longitude": -81.6557
      },
      "geoRadius": "50000"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "PO Box 3",
      "addressLocality": "Green Cove Springs",
      "addressRegion": "FL",
      "postalCode": "32043",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.9919,
      "longitude": -81.6784
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/jaxsod",
      "https://www.instagram.com/jaxsod"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Sod Installation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Sod Installation",
            "description": "Complete sod installation services including soil preparation and aftercare guidance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Soil Preparation Services",
            "description": "Professional soil preparation and grading for optimal sod growth"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="sod installation Jacksonville FL, Jacksonville sod company, sod services Jacksonville, lawn installation Jacksonville, grass installation Jacksonville FL, St Augustine sod Jacksonville" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Jax Sod" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Jacksonville" />
      <meta name="geo.position" content="30.3322;-81.6557" />
      <meta name="ICBM" content="30.3322, -81.6557" />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
