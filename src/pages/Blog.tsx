import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  return (
    <>
      <SEO
        title="Jax Sod Blog - Lawn Care Tips and Sod Installation Advice"
        description="Read the latest lawn care tips, sod installation advice, and maintenance guides from Jax Sod. Learn how to keep your Jacksonville or St. Augustine lawn lush and healthy."
        canonicalUrl="/blog"
      />
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">Jax Sod Blog</h1>
          <p className="text-xl text-green-700 mb-12">
            Stay informed with the latest lawn care tips, sod installation advice, and maintenance guides from Jacksonville's sod experts.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-green-800 mb-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-green-600">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | By {post.author}
                  </p>
                  <p className="text-green-700 mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="text-green-600 font-semibold hover:text-green-700">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;