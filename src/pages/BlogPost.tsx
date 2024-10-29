import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <SEO
        title={`${post.title} | Jax Sod Blog`}
        description={post.seoDescription}
      />

      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </Link>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center text-gray-600 mb-8">
                <Calendar className="mr-2" size={20} />
                {post.date}
              </div>

              <div className="prose max-w-none" 
                dangerouslySetInnerHTML={{ __html: post.content }} 
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