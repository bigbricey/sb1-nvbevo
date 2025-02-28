# SEO Implementation Guide

This guide provides step-by-step instructions for implementing the highest priority SEO tasks from the checklist.

## 1. Google Search Console Setup

### Verify Website Ownership

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (use URL prefix: `https://www.jaxsod.com/`)
3. Choose one of these verification methods:
   
   **HTML Tag Method:**
   - Copy the meta tag provided by Google
   - Add it to the `<head>` section of your `index.html` file:
   
   ```html
   <!-- Add this tag before the closing </head> tag -->
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
   
   **File Upload Method:**
   - Download the HTML file from Google Search Console
   - Upload it to your website's root directory (public folder)

### Submit Sitemap

1. In Google Search Console, select your property
2. From the left menu, click "Sitemaps"
3. Enter `sitemap.xml` in the "Add a new sitemap" field and click "Submit"

## 2. Analytics Implementation Check

1. Check that the Google Analytics code is properly implemented
2. Verify it's sending data by:
   - Opening your website in a browser
   - Opening Google Analytics in another tab
   - Looking at real-time reports to confirm data is flowing

If you need to update the analytics code:

```jsx
// In your AnalyticsWrapper.tsx file, verify this implementation:
useEffect(() => {
  // GA4 pageview tracking
  if (window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: location.pathname + location.search
    });
  }
}, [location]);
```

## 3. Critical SEO Component Check

Ensure SEO component is properly used on all pages:

```jsx
// Check that every page component includes the SEO component at the top:
import SEO from '../components/SEO';

function YourPage() {
  return (
    <>
      <SEO
        title="Page Title | Jax Sod"
        description="Unique, compelling page description (150-160 characters)"
        canonicalUrl="/page-url"
      />
      {/* Page content */}
    </>
  );
}
```

## 4. Image Optimization Guide

1. Update the `OptimizedImage` component usage throughout your site
2. Use descriptive file names for all images (e.g., `st-augustine-sod-installation.jpg`)
3. Always include meaningful alt text:

```jsx
// Example of proper image implementation:
<OptimizedImage
  src="/images/st-augustine-sod-installation.jpg"
  alt="Professional St. Augustine sod installation in Jacksonville backyard"
  width={800}
  height={600}
  loading="lazy"
/>

// For above-the-fold important images:
<OptimizedImage
  src="/images/hero-image.jpg"
  alt="Jax Sod installation team at work in St. Augustine"
  loading="eager"
  fetchPriority="high"
/>
```

## 5. Content Enhancement Formula

For each service page:

1. **Introduction** (150-200 words)
   - Define the service
   - Explain why it's important in Jacksonville/St. Augustine specifically
   - Include primary keyword naturally

2. **Benefits Section** (300+ words)
   - List and explain 3-5 major benefits
   - Use subheadings (H2) for each benefit
   - Include location-specific benefits when possible

3. **Process Section** (300+ words)
   - Explain your unique process/approach
   - Use step-by-step format with H3 subheadings
   - Include images of your team in action

4. **FAQs Section** (200+ words)
   - Add 3-5 relevant FAQs with complete answers
   - Use the FAQ component to get schema benefits
   - Include location-specific questions

5. **Call to Action**
   - Clear next step for the customer
   - Phone number and contact form

## 6. Local SEO Implementation

### Google Business Profile Setup

1. Go to [Google Business](https://business.google.com/)
2. Claim your business if not already done
3. Complete all sections:
   - Business name exactly as it appears on your website
   - Correct business category (Landscaping Service)
   - Complete address information
   - Service area (Jacksonville, St. Augustine, etc.)
   - Regular and holiday hours
   - Upload 10+ high-quality images
   - Add services with descriptions

### Schema Markup Check

Verify your LocalBusiness schema implementation has:

```jsx
// Ensure this component is included on your home page:
<LocalBusinessSchema
  type="LandscapeService"
  name="Jax Sod"
  telephone="904-901-1457"
  description="Professional sod installation services in Jacksonville, FL."
  address={{
    streetAddress: "YOUR_STREET_ADDRESS",
    addressLocality: "Green Cove Springs",
    addressRegion: "FL",
    postalCode: "32043",
    addressCountry: "US"
  }}
  geo={{
    latitude: 29.9919,
    longitude: -81.6784
  }}
  areaServed={[
    "Jacksonville",
    "St. Augustine",
    "Orange Park"
  ]}
/>
```

## 7. Performance Optimization

Run tests and address issues:

1. Go to [PageSpeed Insights](https://pagespeed.web.dev/)
2. Test your homepage and key service pages
3. Address common issues:

**Image Optimization:**
- Compress all images with [TinyPNG](https://tinypng.com/)
- Use modern formats (WebP)

**Code Optimization:**
- Add lazy loading to below-the-fold images
- Defer non-critical JavaScript
- Minify CSS and JavaScript files

**Core Web Vitals:**
- Fix Cumulative Layout Shift by setting image dimensions
- Improve Largest Contentful Paint by optimizing hero images
- Enhance First Input Delay by minimizing JavaScript execution time 