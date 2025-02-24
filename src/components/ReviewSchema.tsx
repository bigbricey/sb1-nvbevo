import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Review {
  author: string;
  datePublished?: string;
  reviewRating: number;
  reviewBody: string;
}

interface ReviewSchemaProps {
  itemReviewed: {
    name: string;
    image?: string;
    description?: string;
  };
  reviews: Review[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
  children?: React.ReactNode;
}

/**
 * ReviewSchema Component
 * 
 * Adds schema.org Review and AggregateRating structured data to a page.
 * This helps search engines understand review content and can enable rich results.
 * 
 * @param itemReviewed - Information about the item being reviewed
 * @param reviews - Array of review objects
 * @param aggregateRating - Optional aggregate rating information
 * @param children - Optional child elements to render alongside the schema
 */
const ReviewSchema: React.FC<ReviewSchemaProps> = ({ 
  itemReviewed, 
  reviews, 
  aggregateRating,
  children 
}) => {
  // Generate schema.org Review structured data
  const generateReviewSchema = () => {
    // Format reviews according to schema.org
    const formattedReviews = reviews.map(review => ({
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': review.author
      },
      'datePublished': review.datePublished || new Date().toISOString().split('T')[0],
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': review.reviewRating,
        'bestRating': aggregateRating?.bestRating || 5,
        'worstRating': aggregateRating?.worstRating || 1
      },
      'reviewBody': review.reviewBody
    }));

    // Create the base schema
    const schema: any = {
      '@context': 'https://schema.org',
      '@type': 'Product', // Using Product as the base type, but could be LocalBusiness, Service, etc.
      'name': itemReviewed.name,
      'review': formattedReviews
    };

    // Add optional properties if provided
    if (itemReviewed.image) {
      schema.image = itemReviewed.image;
    }

    if (itemReviewed.description) {
      schema.description = itemReviewed.description;
    }

    // Add aggregate rating if provided
    if (aggregateRating) {
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        'ratingValue': aggregateRating.ratingValue,
        'reviewCount': aggregateRating.reviewCount,
        'bestRating': aggregateRating.bestRating || 5,
        'worstRating': aggregateRating.worstRating || 1
      };
    }

    return schema;
  };

  return (
    <>
      {/* Structured data for reviews */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateReviewSchema())}
        </script>
      </Helmet>
      
      {/* Render children if provided */}
      {children}
    </>
  );
};

export default ReviewSchema;
