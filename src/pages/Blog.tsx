import React, { useState, useMemo } from 'react';
import { Calendar, Clock, ArrowRight, Tag, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import BreadcrumbListSchema from '../components/BreadcrumbListSchema';

// Define blog categories
const BLOG_CATEGORIES = [
  { id: 'all', label: 'All Posts' },
  { id: 'installation', label: 'Installation Guides' },
  { id: 'maintenance', label: 'Lawn Maintenance' },
  { id: 'grass-types', label: 'Grass Varieties' },
  { id: 'seasonal', label: 'Seasonal Care' }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Group blog posts by category
  const categorizedPosts = useMemo(() => {
    // Sort posts by date (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    // Filter posts by selected category
    if (activeCategory === 'all') {
      return sortedPosts;
    }
    
    return sortedPosts.filter(post => {
      // Match by explicit category
      if (post.category === activeCategory) {
        return true;
      }
      
      // Match by tags if category isn't available
      if (post.tags?.includes(activeCategory)) {
        return true;
      }
      
      // Special case handling for specific categories
      if (activeCategory === 'installation' && 
          (post.tags?.includes('installation') || post.tags?.includes('preparation'))) {
        return true;
      }
      
      if (activeCategory === 'maintenance' && 
          (post.tags?.includes('maintenance') || post.tags?.includes('lawn care'))) {
        return true;
      }
      
      if (activeCategory === 'grass-types' && 
          (post.tags?.includes('grass types') || post.tags?.includes('sod types'))) {
        return true;
      }
      
      if (activeCategory === 'seasonal' && 
          (post.tags?.includes('seasonal') || post.tags?.includes('summer') || 
           post.tags?.includes('winter') || post.tags?.includes('spring') || 
           post.tags?.includes('fall'))) {
        return true;
      }
      
      return false;
    });
  }, [activeCategory]);

  return (
    <>
      <SEO
        title="Lawn & Sod Tips | Jacksonville Grass Care Blog | Jax Sod"
        description="Expert lawn care advice for Florida homeowners. Tips on sod installation, watering schedules, pest control, seasonal maintenance & choosing the right grass varieties."
        canonicalUrl="/lawn-care-blog"
      />
      
      {/* LocalBusiness Schema */}
      <LocalBusinessSchema
        type="LandscapeService"
        name="Jax Sod"
        telephone="904-901-1457"
        description="Professional sod installation services in Jacksonville, FL. Expert team offering premium Grade-A sod, soil preparation, and lawn care services."
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
          geoRadius: "50000",
          addressLocality: ["Jacksonville", "St. Augustine", "Orange Park", "Middleburg", "Fleming Island"]
        }}
      />
      
      {/* BreadcrumbList Schema */}
      <BreadcrumbListSchema
        items={[
          { name: 'Home', item: 'https://www.jaxsod.com/' },
          { name: 'Blog', item: 'https://www.jaxsod.com/lawn-care-blog' }
        ]}
      />

      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">
            Lawn Care & Sod Installation Blog
          </h1>
          
          {/* Category filters */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Filter className="h-5 w-5 text-green-700" />
            <span className="text-green-800 font-medium mr-2">Filter by:</span>
            {BLOG_CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-green-700 hover:bg-green-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorizedPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <span>By {post.author}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-green-800 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  {/* Display tags if available */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Tag className="h-4 w-4 text-green-600" />
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Determine the category for the URL */}
                  {(() => {
                    // Get post category based on explicit category or tags
                    const urlCategory = post.category || 
                      (post.tags?.includes('maintenance') || post.tags?.includes('lawn care') ? 'maintenance' :
                      post.tags?.includes('installation') ? 'installation' :
                      post.tags?.includes('grass types') || post.tags?.includes('sod types') ? 'grass-types' :
                      post.tags?.includes('seasonal') || post.tags?.includes('summer') || post.tags?.includes('winter') ? 'seasonal' : 
                      'general');
                      
                    return (
                      <Link 
                        to={`/lawn-care-blog/${urlCategory}/${post.slug}`}
                        className="inline-flex items-center text-green-600 hover:text-green-700"
                      >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    );
                  })()}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Need Professional Sod Installation?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get expert installation services from Jacksonville's trusted sod professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:904-901-1457"
                className="bg-green-600 text-white px-8 py-3 rounded-lg inline-flex items-center justify-center hover:bg-green-700 transition"
              >
                Call (904) 901-1457
              </a>
              <Link
                to="/contact-us"
                className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg inline-flex items-center justify-center hover:bg-green-50 transition"
              >
                Get Free Estimate <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
