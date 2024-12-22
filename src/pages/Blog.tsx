import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [posts, setPosts] = useState(blogPosts);

  useEffect(() => {
    try {
      console.log("Loading blog posts:", blogPosts);
      if (!blogPosts || blogPosts.length === 0) {
        setError("No blog posts found");
      }
      setPosts(blogPosts);
    } catch (err) {
      console.error("Error loading blog posts:", err);
      setError("Error loading blog posts");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center">
        <div className="text-green-800">Loading blog posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Lawn Care & Sod Installation Blog | Jacksonville FL | Jax Sod"
        description="Expert tips and guides about sod installation, lawn care, and maintenance in Jacksonville, FL. Learn from Northeast Florida's leading sod professionals."
      />

      <div className="bg-green-50 py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">
            Lawn Care & Sod Installation Blog
          </h1>

          {posts.length === 0 ? (
            <p className="text-center text-gray-600">No blog posts found.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-green-800 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

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
                to="/contact"
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