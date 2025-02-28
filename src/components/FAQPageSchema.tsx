import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    name: string;
    type?: string;
    url?: string;
  };
  image?: string;
}

interface FAQPageSchemaProps {
  faqs: FAQItem[];
  mainEntity?: {
    name?: string;
    description?: string;
    url?: string;
    logo?: string;
    image?: string;
    sameAs?: string[];
  };
  pageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
  children?: React.ReactNode;
}

/**
 * FAQPageSchema Component
 * 
 * Adds schema.org FAQPage structured data for an FAQ page.
 * This helps search engines understand FAQ content and can enable rich results in search,
 * including featured snippets, knowledge panels, and other enhanced SERP features.
 * 
 * @param faqs - Array of FAQ items, each with a question and answer
 * @param mainEntity - Optional information about the main entity being described
 * @param pageUrl - URL of the FAQ page 
 * @param datePublished - When the FAQ page was first published
 * @param dateModified - When the FAQ page was last modified
 * @param keywords - Keywords relevant to the FAQ content
 * @param children - Optional child elements to render alongside the schema
 */
const FAQPageSchema: React.FC<FAQPageSchemaProps> = ({
  faqs,
  mainEntity,
  pageUrl,
  datePublished,
  dateModified,
  keywords,
  children
}) => {
  // Generate schema.org FAQPage structured data
  const generateFAQPageSchema = () => {
    // Create the base schema
    const schema: any = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => {
        const questionObject: any = {
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        };

        // Add optional properties to the Question object if provided
        if (faq.datePublished) {
          questionObject.datePublished = faq.datePublished;
        }

        if (faq.dateModified) {
          questionObject.dateModified = faq.dateModified;
        }

        if (faq.author) {
          questionObject.author = {
            '@type': faq.author.type || 'Person',
            'name': faq.author.name
          };

          if (faq.author.url) {
            questionObject.author.url = faq.author.url;
          }
        }

        if (faq.image) {
          questionObject.image = faq.image;
        }

        return questionObject;
      })
    };

    // Add page metadata if provided
    if (pageUrl) {
      schema.url = pageUrl;
    }

    if (datePublished) {
      schema.datePublished = datePublished;
    }

    if (dateModified) {
      schema.dateModified = dateModified;
    }

    if (keywords && keywords.length > 0) {
      schema.keywords = keywords.join(', ');
    }

    return schema;
  };

  // Generate additional SchemaOrg data for the main entity if provided
  const generateMainEntitySchema = () => {
    if (!mainEntity) return null;

    const schema: any = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': mainEntity.name
    };

    if (mainEntity.description) {
      schema.description = mainEntity.description;
    }

    if (mainEntity.url) {
      schema.url = mainEntity.url;
    }

    if (mainEntity.logo) {
      schema.logo = mainEntity.logo;
    }

    if (mainEntity.image) {
      schema.image = mainEntity.image;
    }

    if (mainEntity.sameAs && mainEntity.sameAs.length > 0) {
      schema.sameAs = mainEntity.sameAs;
    }

    return schema;
  };

  return (
    <>
      {/* Structured data for FAQ page */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateFAQPageSchema())}
        </script>
        {mainEntity && (
          <script type="application/ld+json">
            {JSON.stringify(generateMainEntitySchema())}
          </script>
        )}
      </Helmet>
      
      {/* Render children if provided */}
      {children}
    </>
  );
};

export default FAQPageSchema; 