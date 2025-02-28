import { RelatedLink } from '../components/RelatedContent';

/**
 * Related Content Map
 * 
 * This file defines relationships between different pages/content types
 * to enable intelligent cross-linking for SEO purposes.
 * 
 * Structure:
 * - Keys are page paths or content types
 * - Values are arrays of related links
 */

interface RelatedContentMap {
  [key: string]: RelatedLink[];
}

// Service page related content
const servicePageRelated: RelatedLink[] = [
  {
    title: "Sod Types We Offer",
    url: "/sod-types",
    excerpt: "Learn about our premium sod varieties including St. Augustine, Zoysia, Bermuda, and Bahia grass.",
    category: "Sod Selection"
  },
  {
    title: "Lawn Size Calculator",
    url: "/lawn-calculators",
    excerpt: "Estimate how much sod you'll need for your project with our easy-to-use calculator.",
    category: "Planning Tools"
  },
  {
    title: "Sod Installation Process",
    url: "/blog/professional-sod-installation-process",
    excerpt: "Learn about our step-by-step installation process for a perfect lawn.",
    category: "Installation Guide"
  },
  {
    title: "Sod Installation in St. Augustine",
    url: "/sod-installation-st-augustine",
    excerpt: "Specialized sod installation services for St. Augustine and surrounding areas.",
    category: "Service Areas"
  },
  {
    title: "Sod Services in Orange Park",
    url: "/sod-services-orange-park",
    excerpt: "Premium sod installation and lawn care services for Orange Park residents.",
    category: "Service Areas"
  }
];

// Sod types page related content
const sodTypesPageRelated: RelatedLink[] = [
  {
    title: "Our Sod Installation Services",
    url: "/services",
    excerpt: "Professional sod installation with soil preparation, grading, and installation.",
    category: "Services"
  },
  {
    title: "Best Time to Install Sod in Jacksonville",
    url: "/blog/best-time-install-sod-jacksonville-seasonal-guide",
    excerpt: "Learn the optimal seasons for sod installation in Northeast Florida.",
    category: "Installation Guides"
  },
  {
    title: "St. Augustine Grass Maintenance Tips",
    url: "/blog/st-augustine-grass-maintenance-guide",
    excerpt: "Complete care guide for maintaining your St. Augustine lawn in Florida.",
    category: "Maintenance Guides"
  },
  {
    title: "Zoysia vs St. Augustine: Which is Better?",
    url: "/blog/zoysia-vs-st-augustine-comparison",
    excerpt: "Compare the pros and cons of these popular Florida grass varieties.",
    category: "Grass Comparisons"
  }
];

// Home page related content 
const homePageRelated: RelatedLink[] = [
  {
    title: "Our Installation Services",
    url: "/services",
    excerpt: "Professional sod installation services for residential and commercial properties.",
    category: "Services"
  },
  {
    title: "Sod Types for Florida Lawns",
    url: "/sod-types",
    excerpt: "Find the perfect grass variety for your Jacksonville area lawn.",
    category: "Products"
  },
  {
    title: "Request a Free Estimate",
    url: "/contact",
    excerpt: "Contact our team for a free consultation and estimate for your project.",
    category: "Get Started"
  }
];

// Blog post related content (specific to lawn care)
const lawnCareRelated: RelatedLink[] = [
  {
    title: "Seasonal Lawn Care Guide for Florida",
    url: "/blog/florida-seasonal-lawn-care-guide",
    excerpt: "Month-by-month maintenance schedule for Northeast Florida lawns.",
    category: "Maintenance Guides"
  },
  {
    title: "How to Control Weeds in St. Augustine Grass",
    url: "/blog/weed-control-st-augustine-grass",
    excerpt: "Effective strategies for preventing and treating common lawn weeds.",
    category: "Weed Control"
  },
  {
    title: "Lawn Watering Tips for Jacksonville",
    url: "/blog/lawn-watering-tips-jacksonville",
    excerpt: "Proper watering techniques for healthy lawns in Florida's climate.",
    category: "Watering Guides"
  },
  {
    title: "Common Lawn Pests in Florida",
    url: "/blog/common-lawn-pests-florida",
    excerpt: "Identifying and treating insects that damage Florida lawns.",
    category: "Pest Control"
  }
];

// Installation-related blog post links
const installationRelated: RelatedLink[] = [
  {
    title: "Our Sod Installation Services",
    url: "/services",
    excerpt: "Professional sod installation with soil preparation and grading.",
    category: "Services"
  },
  {
    title: "Preparing Your Yard for New Sod",
    url: "/blog/preparing-yard-new-sod",
    excerpt: "Step-by-step guide to prepare your property for sod installation.",
    category: "DIY Guides"
  },
  {
    title: "Post-Installation Sod Care",
    url: "/blog/new-sod-care-guide",
    excerpt: "Essential care tips for the first 30 days after sod installation.",
    category: "Aftercare"
  },
  {
    title: "Sod vs Seed: Which is Better?",
    url: "/blog/sod-vs-seed-comparison",
    excerpt: "Compare the pros and cons of sod installation versus grass seeding.",
    category: "Comparisons"
  }
];

// Grass types blog post related content
const grassTypesRelated: RelatedLink[] = [
  {
    title: "Sod Types We Offer",
    url: "/sod-types",
    excerpt: "Browse our selection of premium Florida sod varieties.",
    category: "Products"
  },
  {
    title: "Best Grass for Shady Yards in Florida",
    url: "/blog/best-grass-shady-yards-florida",
    excerpt: "Discover which grass varieties thrive in low-light conditions.",
    category: "Grass Selection Guides"
  },
  {
    title: "Drought-Tolerant Grasses for Florida",
    url: "/blog/drought-tolerant-grasses-florida",
    excerpt: "Low-water options for environmentally friendly lawns.",
    category: "Grass Selection Guides"
  }
];

// Location pages related content
const locationPagesRelated: RelatedLink[] = [
  {
    title: "Our Sod Installation Services",
    url: "/services",
    excerpt: "Professional sod installation services for your property.",
    category: "Services"
  },
  {
    title: "Sod Types for Florida Lawns",
    url: "/sod-types",
    excerpt: "Choose the perfect grass variety for your local climate.",
    category: "Products"
  },
  {
    title: "Request a Free Estimate",
    url: "/contact",
    excerpt: "Contact our team for a free consultation.",
    category: "Get Started"
  },
  {
    title: "Customer Testimonials",
    url: "/about#testimonials",
    excerpt: "See what our customers are saying about our services.",
    category: "Customer Stories"
  }
];

// Contact page related content
const contactPageRelated: RelatedLink[] = [
  {
    title: "Our Sod Installation Process",
    url: "/services#installation-process",
    excerpt: "Learn about our professional installation methodology.",
    category: "Services"
  },
  {
    title: "Sod Pricing Information",
    url: "/services#pricing",
    excerpt: "View our competitive pricing for sod installation services.",
    category: "Pricing"
  },
  {
    title: "Sod Types We Offer",
    url: "/sod-types",
    excerpt: "Explore our selection of premium grass varieties.",
    category: "Products"
  }
];

// FAQ page related content
const faqPageRelated: RelatedLink[] = [
  {
    title: "Sod Installation Services",
    url: "/services",
    excerpt: "Learn about our professional sod installation process.",
    category: "Services"
  },
  {
    title: "New Sod Care Guide",
    url: "/blog/new-sod-care-guide",
    excerpt: "Essential tips for caring for your new sod installation.",
    category: "Maintenance Guides"
  },
  {
    title: "Request a Free Estimate",
    url: "/contact",
    excerpt: "Contact our team for a free consultation and quote.",
    category: "Get Started"
  }
];

// The complete map of related content
const relatedContentMap: RelatedContentMap = {
  // Main pages
  "/": homePageRelated,
  "/services": servicePageRelated,
  "/sod-types": sodTypesPageRelated,
  "/contact": contactPageRelated,
  "/faq": faqPageRelated,
  "/lawn-calculators": [...servicePageRelated, ...sodTypesPageRelated].slice(0, 4),
  
  // Location pages
  "/sod-installation-st-augustine": locationPagesRelated,
  "/sod-services-orange-park": locationPagesRelated,
  "/location": locationPagesRelated,
  
  // Content categories for blog posts
  "lawn-care": lawnCareRelated,
  "installation": installationRelated,
  "grass-types": grassTypesRelated
};

export default relatedContentMap; 