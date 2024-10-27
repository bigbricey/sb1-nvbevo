import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <SEO
        title={`${post.title} - Jax Sod Blog`}
        description={post.excerpt}
        canonicalUrl={`/blog/${post.slug}`}
      />
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="text-green-600 hover:text-green-700 mb-8 inline-block">
            ← Back to Blog
          </Link>
          <article className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold text-green-800 mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-8">
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | By {post.author}
            </p>
            <div className="prose prose-green max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogPost;