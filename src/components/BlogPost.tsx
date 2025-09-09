import React from 'react';
import { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { supabase, type BlogPost } from '../lib/supabase';

interface BlogPostProps {
  postSlug: string;
  onBack: () => void;
}

const BlogPost = ({ postSlug, onBack }: BlogPostProps) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogPost();
  }, [postSlug]);

  const fetchBlogPost = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', postSlug)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch blog post');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-black text-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-red-400">Post Not Found</h1>
          <p className="text-gray-400 mb-8">{error || "The blog post you're looking for doesn't exist."}</p>
          <button
            onClick={onBack}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </button>

          {/* Category Badge */}
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
                <span>{formatDate(post.published_at)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
                <span>{post.read_time}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <img
                src={post.image_url}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: '#e5e7eb',
              lineHeight: '1.75'
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6">
              Discover how AI automation can revolutionize your operations and drive unprecedented growth.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .prose h2 {
          color: #ffffff;
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose h3 {
          color: #60a5fa;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose p {
          margin-bottom: 1.5rem;
        }
        .prose ul, .prose ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose strong {
          color: #ffffff;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;