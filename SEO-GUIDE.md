# SEO Guide for Jax Sod Website

This guide provides instructions for maintaining and improving the SEO of the Jax Sod website.

## Table of Contents

1. [SEO Improvements Made](#seo-improvements-made)
2. [Maintaining Good SEO](#maintaining-good-seo)
3. [Useful Scripts](#useful-scripts)
4. [Next Steps](#next-steps)

## SEO Improvements Made

The following improvements have been made to enhance the website's SEO:

### Analytics Implementation
- Updated from Universal Analytics to Google Analytics 4 (GA4)
- Implemented proper page view tracking for single-page applications
- Added route change tracking for accurate analytics

### Metadata and SEO Tags
- Removed duplicate SEO component in App.tsx to prevent conflicts
- Added comprehensive meta tags to index.html including:
  - Open Graph tags for better social media sharing
  - Twitter card support
  - Geo location tags for local SEO
  - Proper canonical URL

### Search Engine Crawling
- Updated sitemap.xml to include all pages with correct dates
- Created an automated sitemap generator script
- Enhanced robots.txt with specific crawler instructions

### Technical SEO Elements
- Created site.webmanifest file for PWA support
- Added favicon placeholder references
- Added structured data validation script

## Maintaining Good SEO

### When Adding New Pages

1. **Update Routes**: Add the new route in `src/App.tsx`
2. **Create SEO Component**: Include the SEO component at the top of your new page:
   ```jsx
   <SEO
     title="Page Title | Jax Sod"
     description="Concise, compelling description of the page (150-160 characters)"
     canonicalUrl="/your-page-url"
   />
   ```
3. **Generate Sitemap**: Run `npm run generate-sitemap` to update the sitemap with your new page
4. **Add Structured Data**: Include relevant schema.org markup for the page content

### When Adding New Blog Posts

1. **Add to blogPosts.ts**: Add your new blog post to the `src/data/blogPosts.ts` file
2. **Use SEO-Friendly Slugs**: Create descriptive, keyword-rich slugs for blog posts
3. **Generate Sitemap**: Run `npm run generate-sitemap` to include the new blog post in the sitemap

### Content Best Practices

1. **Keyword Research**: Identify target keywords for each page before creating content
2. **Title Tags**: Keep titles under 60 characters and include primary keywords
3. **Meta Descriptions**: Write compelling descriptions between 150-160 characters
4. **Heading Structure**: Use proper H1, H2, H3 hierarchy with keywords
5. **Image Optimization**:
   - Add descriptive filenames (e.g., `st-augustine-sod-installation.jpg`)
   - Include alt text for all images
   - Compress images for faster loading

### Local SEO Tips

1. **Consistent NAP**: Maintain consistent Name, Address, Phone across all pages
2. **Local Keywords**: Include location-specific keywords (Jacksonville, St. Augustine, etc.)
3. **Google Business Profile**: Keep your Google Business Profile updated
4. **Local Backlinks**: Seek links from local business directories and partners

## Useful Scripts

The following scripts have been added to help maintain good SEO:

### Sitemap Generator

Automatically generates a sitemap.xml file based on your routes and blog posts:

```bash
npm run generate-sitemap
```

This script runs automatically before each build.

### Image Sitemap Generator

Creates a separate sitemap specifically for images to help search engines discover and index your images:

```bash
npm run generate-image-sitemap
```

### Favicon Generator

Generates basic favicon files for the website:

```bash
npm run generate-favicons
```

Note: You'll need to install the canvas package first: `npm install canvas`

### Structured Data Validator

Validates the structured data (schema.org) implementation across key pages:

```bash
npm run validate-schema
```

### Broken Link Checker

Scans your website for broken internal and external links:

```bash
npm run check-links
```

### Content SEO Analyzer

Analyzes your content for SEO optimization, including keyword density, readability, and heading structure:

```bash
# Analyze all content
npm run analyze-seo

# Analyze specific directory with a target keyword
npm run analyze-seo -- src/pages "sod installation"
```

This tool provides detailed reports on:
- Content length and quality
- Keyword density and placement
- Readability scores
- Heading structure
- Meta tag optimization
- Overall SEO score with recommendations

## SEO Components

The following components have been added to enhance SEO:

### Breadcrumbs Component

Adds breadcrumb navigation with proper schema.org markup:

```jsx
import Breadcrumbs from '../components/Breadcrumbs';

// In your page component:
<Breadcrumbs />

// With custom breadcrumbs:
<Breadcrumbs 
  customCrumbs={[
    { name: 'Services', path: '/services' },
    { name: 'Sod Installation', path: '/services/sod-installation' }
  ]} 
/>
```

### FAQ Component

Creates FAQ sections with proper schema.org markup:

```jsx
import FAQ from '../components/FAQ';

// In your page component:
<FAQ 
  items={[
    {
      question: "How much does sod installation cost?",
      answer: "Sod installation typically costs between $1-3 per square foot depending on the type of grass and preparation needed."
    },
    {
      question: "What is the best time to install sod in Jacksonville?",
      answer: "Spring and fall are ideal times for sod installation in Jacksonville, but our climate allows for year-round installation with proper care."
    }
  ]}
/>
```

### OptimizedImage Component

Implements responsive images with lazy loading for better performance:

```jsx
import OptimizedImage from '../components/OptimizedImage';

// In your page component:
<OptimizedImage 
  src="/images/st-augustine-sod.jpg"
  alt="St. Augustine sod installation in Jacksonville"
  width={800}
  height={600}
  loading="lazy"
/>

// For high-priority above-the-fold images:
<OptimizedImage 
  src="/images/hero-image.jpg"
  alt="Professional sod installation services"
  loading="eager"
  fetchPriority="high"
/>
```

### ReviewSchema Component

Adds schema.org Review and AggregateRating structured data to a page:

```jsx
import ReviewSchema from '../components/ReviewSchema';

// In your page component:
<ReviewSchema
  itemReviewed={{
    name: "Jax Sod Installation Services",
    image: "https://www.jaxsod.com/images/sod-installation.jpg",
    description: "Professional sod installation services in Jacksonville, FL"
  }}
  reviews={[
    {
      author: "John Smith",
      datePublished: "2024-01-15",
      reviewRating: 5,
      reviewBody: "Excellent service! The team was professional and the sod looks amazing."
    },
    {
      author: "Jane Doe",
      datePublished: "2024-02-20",
      reviewRating: 4,
      reviewBody: "Great job on our lawn. Would recommend to anyone looking for quality sod installation."
    }
  ]}
  aggregateRating={{
    ratingValue: 4.8,
    reviewCount: 150
  }}
/>
```

### LocalBusinessSchema Component

Adds schema.org LocalBusiness structured data to improve local SEO:

```jsx
import LocalBusinessSchema from '../components/LocalBusinessSchema';

// In your page component:
<LocalBusinessSchema
  type="LandscapeService"
  name="Jax Sod"
  telephone="904-901-1457"
  description="Professional sod installation services in Jacksonville, FL"
  address={{
    streetAddress: "PO Box 3",
    addressLocality: "Green Cove Springs",
    addressRegion: "FL",
    postalCode: "32043",
    addressCountry: "US"
  }}
  geo={{
    latitude: 29.9919,
    longitude: -81.6784
  }}
  areaServed={{
    type: "GeoCircle",
    geoMidpoint: {
      latitude: 30.3322,
      longitude: -81.6557
    },
    geoRadius: "50000"
  }}
  services={[
    {
      name: "Professional Sod Installation",
      description: "Complete sod installation services including soil preparation and aftercare guidance"
    },
    {
      name: "Soil Preparation Services",
      description: "Professional soil preparation and grading for optimal sod growth"
    }
  ]}
  aggregateRating={{
    ratingValue: 4.9,
    reviewCount: 150
  }}
/>
```

## Next Steps

To further improve SEO, consider these additional steps:

1. **Replace GA4 Placeholder**: Update the GA4 measurement ID in `src/components/AnalyticsWrapper.tsx` with your actual ID
2. **Create Custom Favicons**: Replace the generated favicons with professionally designed ones
3. **Implement Image Optimization**: Add responsive images and WebP format support
4. **Add More Location Pages**: Create dedicated pages for each service area
5. **Build Backlinks**: Develop a strategy to acquire quality backlinks
6. **Monitor Performance**: Regularly check Google Search Console and Analytics
7. **Page Speed Optimization**: Improve loading times by optimizing assets

## Resources

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com/)
- [Schema.org](https://schema.org/)
- [Google's SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
