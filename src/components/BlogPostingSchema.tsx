import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BlogPostingSchemaProps {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  publisherName?: string;
  publisherLogo?: string;
  url?: string;
  keywords?: string[];
  articleBody?: string;
  wordCount?: number;
  articleSection?: string;
  children?: React.ReactNode;
}

/**
 * BlogPostingSchema Component
 * 
 * Adds schema.org BlogPosting structured data to a blog post page.
 * This helps search engines understand blog content and can enable rich results.
 * 
 * @param headline - The title of the blog post
 * @param description - A short description or excerpt of the blog post
 * @param image - URL to the featured image of the blog post
 * @param datePublished - Date when the blog post was published (ISO format)
 * @param dateModified - Date when the blog post was last modified (ISO format)
 * @param authorName - Name of the author
 * @param publisherName - Name of the publishing organization (defaults to Jax Sod)
 * @param publisherLogo - URL to the logo of the publishing organization
 * @param url - Full URL to the blog post
 * @param keywords - Keywords/tags related to the blog post
 * @param articleBody - Full content of the blog post
 * @param wordCount - Number of words in the blog post
 * @param articleSection - Category of the blog post
 * @param children - Optional child elements to render alongside the schema
 */
const BlogPostingSchema: React.FC<BlogPostingSchemaProps> = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  publisherName = 'Jax Sod',
  publisherLogo = 'https://www.jaxsod.com/logo.png', // Replace with actual logo URL
  url,
  keywords,
  articleBody,
  wordCount,
  articleSection,
  children
}) => {
  // Generate schema.org BlogPosting structured data
  const generateBlogPostingSchema = () => {
    // Create the base schema
    const schema: any = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': headline,
      'description': description,
      'datePublished': datePublished,
      'author': {
        '@type': 'Person',
        'name': authorName
      },
      'publisher': {
        '@type': 'Organization',
        'name': publisherName,
        'logo': {
          '@type': 'ImageObject',
          'url': publisherLogo
        }
      }
    };

    // Add optional properties if provided
    if (image) {
      schema.image = image;
    }

    if (dateModified) {
      schema.dateModified = dateModified;
    }

    if (url) {
      schema.url = url;
      schema.mainEntityOfPage = {
        '@type': 'WebPage',
        '@id': url
      };
    }

    if (keywords && keywords.length > 0) {
      schema.keywords = keywords.join(', ');
    }

    if (articleBody) {
      schema.articleBody = articleBody;
    }

    if (wordCount) {
      schema.wordCount = wordCount;
    }

    if (articleSection) {
      schema.articleSection = articleSection;
    }

    return schema;
  };

  return (
    <>
      {/* Structured data for blog posting */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateBlogPostingSchema())}
        </script>
      </Helmet>
      
      {/* Render children if provided */}
      {children}
    </>
  );
};

export default BlogPostingSchema; 