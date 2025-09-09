import React from 'react';
import { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Users, Zap } from 'lucide-react';
import { supabase, type BlogPost } from '../lib/supabase';

interface BlogProps {
  onPostClick: (postSlug: string) => void;
  onNewsletterClick: () => void;
}

const Blog = ({ onPostClick, onNewsletterClick }: BlogProps) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) throw error;

      if (data && data.length > 0) {
        setFeaturedPost(data[0]); // First post as featured
        setBlogPosts(data.slice(1)); // Rest as regular posts
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch blog posts');
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

  const categories = [
    { name: 'All', icon: BookOpen, count: 25 },
    { name: 'Strategy', icon: TrendingUp, count: 8 },
    { name: 'Technology', icon: Zap, count: 7 },
    { name: 'Case Study', icon: Users, count: 6 },
    { name: 'Integration', icon: ArrowRight, count: 4 }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-red-400">Error</h1>
          <p className="text-gray-400 mb-8">{error}</p>
          <button
            onClick={fetchBlogPosts}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Blog</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                AI Automation
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Insights & Strategies
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert insights, case studies, and actionable strategies to help you scale your business with AI automation
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'border border-gray-600 text-gray-400 hover:border-blue-500 hover:text-blue-400'
                }`}
              >
                <category.icon className="w-3 h-3 md:w-4 md:h-4" />
                {category.name}
                <span className="bg-gray-700 text-xs px-1 md:px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
          
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-3xl overflow-hidden hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-[1.02] cursor-pointer">
              <button onClick={() => onPostClick(featuredPost.slug)} className="block w-full text-left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                    src={featuredPost.image_url}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
        <section className="h-screen bg-gradient-to-b from-gray-900 to-black flex items-center">
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 hover:text-blue-400 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span>{featuredPost.author}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.published_at)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                      {featuredPost.read_time}
                  </div>
                </div>
                
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            </button>
          </div>
        </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-gray-900/80 border border-gray-800 hover:border-gray-600 rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer group"
              >
                <button onClick={() => onPostClick(post.slug)} className="block w-full text-left">
                <div className="relative h-48">
                  <img
                      src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.author}</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                          {formatDate(post.published_at)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                          {post.read_time}
                      </div>
                    </div>
                  </div>
                </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Never Miss an Update
            </h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest AI automation insights delivered to your inbox
            </p>
            <button 
              onClick={onNewsletterClick}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;