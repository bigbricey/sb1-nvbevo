import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Calendar, ArrowRight, FileText, Home, Users, Briefcase, Leaf } from 'lucide-react';
import { blogPosts } from '../data/blog-posts';
import { BlogPost } from '../types';
import SEO from '../components/SEO';

// Define a type for search results that can be from any page
interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  type: 'blog' | 'page';
  url: string;
  date?: string;
  author?: string;
}

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);

  // Create a dataset of all searchable content on the site
  const getAllContent = (): SearchResult[] => {
    // Add blog posts
    const blogResults: SearchResult[] = blogPosts.map(post => ({
      id: `blog-${post.id}`,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      type: 'blog',
      url: `/blog/${post.slug}`,
      date: post.date,
      author: post.author
    }));

    // Add pages
    const pageResults: SearchResult[] = [
      {
        id: 'page-home',
        title: 'Home',
        excerpt: 'Jacksonville\'s Premier Sod Installation Services',
        content: 'Jax Sod is your trusted partner for professional sod installation in Jacksonville, FL. We specialize in premium Grade-A sod varieties, ensuring a lush, green lawn that enhances your property\'s curb appeal. Looking for sod installation near you? Contact us today!',
        type: 'page',
        url: '/'
      },
      {
        id: 'page-services',
        title: 'Sod Installation Services',
        excerpt: 'Professional sod installation services in Jacksonville, FL',
        content: 'Transform your lawn with our comprehensive sod services. From soil preparation to aftercare, we ensure a lush, healthy lawn that enhances your property\'s curb appeal. Our services include soil preparation, premium sod varieties, professional installation, and aftercare support.',
        type: 'page',
        url: '/services'
      },
      {
        id: 'page-sod-types',
        title: 'Sod Types',
        excerpt: 'Explore different sod varieties for your Jacksonville lawn',
        content: 'Choose from a wide selection of top-quality sod varieties that thrive in Florida\'s climate including St. Augustine, Zoysia, Bermuda, and more.',
        type: 'page',
        url: '/sod-types'
      },
      {
        id: 'page-about',
        title: 'About Us',
        excerpt: 'Learn about Jax Sod and our commitment to quality',
        content: 'Jax Sod is a leading provider of sod installation services in Jacksonville, FL. With over 37 years of experience, we are committed to providing top-quality sod and exceptional service to our customers.',
        type: 'page',
        url: '/about'
      },
      {
        id: 'page-contact',
        title: 'Contact Us',
        excerpt: 'Get in touch with Jax Sod for a free estimate',
        content: 'Contact Jax Sod today for a free estimate on your sod installation project. Call us at (904) 901-1457 or fill out our contact form.',
        type: 'page',
        url: '/contact'
      }
    ];

    return [...blogResults, ...pageResults];
  };

  useEffect(() => {
    if (query) {
      const allContent = getAllContent();
      const searchResults = allContent.filter(item => {
        const searchableContent = `${item.title} ${item.excerpt} ${item.content}`.toLowerCase();
        return searchableContent.includes(query.toLowerCase());
      });
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <>
      <SEO
        title={`Search Results for "${query}" | Jax Sod`}
        description={`Search results for "${query}" on Jax Sod's blog about lawn care and sod installation in Jacksonville, FL.`}
      />

      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Search Results
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {results.length} {results.length === 1 ? 'result' : 'results'} for "{query}"
          </p>

          {results.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((result) => (
                <article key={result.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    {result.type === 'blog' ? (
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-4">{result.date}</span>
                        <span>By {result.author}</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        {result.url === '/' && <Home className="h-4 w-4 mr-1" />}
                        {result.url === '/services' && <Briefcase className="h-4 w-4 mr-1" />}
                        {result.url === '/sod-types' && <Leaf className="h-4 w-4 mr-1" />}
                        {result.url === '/about' && <Users className="h-4 w-4 mr-1" />}
                        {result.url === '/contact' && <FileText className="h-4 w-4 mr-1" />}
                        <span>Page</span>
                      </div>
                    )}
                    <h2 className="text-xl font-semibold text-green-800 mb-2">
                      {result.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {result.excerpt}
                    </p>
                    <Link 
                      to={result.url}
                      className="inline-flex items-center text-green-600 hover:text-green-700"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                No results found
              </h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any content matching your search term. Try using different keywords or browse our site.
              </p>
              <Link
                to="/"
                className="bg-green-600 text-white px-6 py-2 rounded-lg inline-flex items-center justify-center hover:bg-green-700 transition"
              >
                Return to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
