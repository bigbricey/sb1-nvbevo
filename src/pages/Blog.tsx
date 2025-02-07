import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import { useMemo } from 'react';

const sortedBlogPosts = useMemo(() => {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}, [blogPosts]);

export default function Blog() {
  return (
    <>
      <SEO
        title="Lawn Care & Sod Installation Blog | Jacksonville FL | Jax Sod"
        description="Expert tips and guides about sod installation, lawn care, and maintenance in Jacksonville, FL. Learn from Northeast Florida's leading sod professionals."
      />

      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">
            Lawn Care & Sod Installation Blog
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-green-800 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.seoDescription}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
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