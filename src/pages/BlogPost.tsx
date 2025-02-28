import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import BlogPostingSchema from '../components/BlogPostingSchema';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import BreadcrumbListSchema from '../components/BreadcrumbListSchema';
import RelatedContent from '../components/RelatedContent';
import useRelatedContent from '../hooks/useRelatedContent';
import BlogPostSuggestions from '../components/BlogPostSuggestions';

export default function BlogPost() {
  const { slug, category } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  // Get post category either from URL parameter or from post data
  const postCategory = category || post.category || 
    (post.tags?.includes('lawn care') || post.tags?.includes('maintenance') ? 'lawn-care' : 
    post.tags?.includes('installation') ? 'installation' : 
    post.tags?.includes('grass types') || post.tags?.includes('sod types') ? 'grass-types' : 'general');

  // Update URL construction to include category
  const postUrl = `https://www.jaxsod.com/lawn-care-blog/${postCategory}/${slug}`;
  
  // Calculate word count (rough estimate)
  const wordCount = post.content ? Math.round(post.content.split(/\s+/).length) : 0;

  // Get related content based on post category and tags
  const relatedLinks = useRelatedContent(postCategory, post.tags);

  return (
    <>
      <SEO
        title={`${post.title} | Jacksonville Lawn Care Guide | Jax Sod`}
        description={post.excerpt}
        canonicalUrl={`/lawn-care-blog/${postCategory}/${slug}`}
      />
      
      {/* Blog Post Schema */}
      <BlogPostingSchema
        headline={post.title}
        description={post.excerpt}
        image={post.image || 'https://www.jaxsod.com/images/blog-default.jpg'} 
        datePublished={post.date}
        dateModified={post.lastModified || post.date}
        authorName={post.author}
        url={postUrl}
        keywords={post.tags || []}
        wordCount={wordCount}
        articleSection="Lawn Care & Sod Installation"
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
      />
      
      {/* BreadcrumbList Schema */}
      <BreadcrumbListSchema
        items={[
          { name: 'Home', item: 'https://www.jaxsod.com/' },
          { name: 'Blog', item: 'https://www.jaxsod.com/lawn-care-blog' },
          { name: postCategory.charAt(0).toUpperCase() + postCategory.slice(1).replace(/-/g, ' '), 
            item: `https://www.jaxsod.com/lawn-care-blog/${postCategory}` },
          { name: post.title, item: postUrl }
        ]}
      />

      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/lawn-care-blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </Link>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center text-gray-600 mb-8">
                <Calendar className="mr-2" size={20} />
                <span className="mr-4">{post.date}</span>
                <span>By {post.author}</span>
              </div>

              <div className="prose max-w-none" 
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
              
              {/* Display related content */}
              {relatedLinks.length > 0 && (
                <RelatedContent 
                  title="Related Articles & Resources" 
                  links={relatedLinks}
                  showCategories={true}
                />
              )}
              
              {/* Display related blog posts */}
              <BlogPostSuggestions
                currentPostId={post.id}
                category={post.category}
                tags={post.tags}
                title="More Articles You Might Like"
              />
            </article>

            <div className="mt-12 bg-green-800 text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Lawn?</h2>
              <p className="mb-6">Get a free estimate for professional sod installation</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:904-901-1457"
                  className="bg-white text-green-800 px-8 py-3 rounded-lg inline-flex items-center justify-center hover:bg-green-100 transition"
                >
                  Call (904) 901-1457
                </a>
                <Link
                  to="/contact"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg inline-flex items-center justify-center hover:bg-green-700 transition"
                >
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
