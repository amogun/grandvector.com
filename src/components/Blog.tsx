import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Users, Zap } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: 'The Complete Guide to AI Automation for Small Businesses',
    excerpt: 'Discover how small businesses are leveraging AI automation to compete with enterprise companies, reduce costs by 60%, and scale operations without hiring additional staff.',
    author: 'Sarah Chen',
    date: 'January 20, 2025',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    category: 'Strategy'
  };

  const blogPosts = [
    {
      title: 'How AI Voice Callers Are Revolutionizing Customer Service',
      excerpt: 'Learn how businesses are using AI voice technology to handle customer inquiries 24/7 with human-like conversations.',
      author: 'Marcus Rodriguez',
      date: 'January 18, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Technology'
    },
    {
      title: '5 Signs Your Business Needs AI Automation Now',
      excerpt: 'Identify the key indicators that show your business is ready to implement AI automation for maximum impact.',
      author: 'Emily Watson',
      date: 'January 15, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Business'
    },
    {
      title: 'ROI Calculator: Measuring AI Automation Success',
      excerpt: 'A comprehensive guide to calculating and tracking the return on investment for your AI automation initiatives.',
      author: 'David Kim',
      date: 'January 12, 2025',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Analytics'
    },
    {
      title: 'Integration Masterclass: Connecting AI with Your CRM',
      excerpt: 'Step-by-step guide to seamlessly integrate AI automation tools with popular CRM platforms like Salesforce and HubSpot.',
      author: 'Lisa Park',
      date: 'January 10, 2025',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Integration'
    },
    {
      title: 'Case Study: 500% Lead Generation Increase with AI',
      excerpt: 'How a B2B software company used AI-powered email marketing to generate 500% more qualified leads in just 3 months.',
      author: 'Michael Chen',
      date: 'January 8, 2025',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Case Study'
    },
    {
      title: 'The Future of Work: Humans + AI Collaboration',
      excerpt: 'Exploring how AI automation enhances human capabilities rather than replacing them, creating more fulfilling work experiences.',
      author: 'Jennifer Liu',
      date: 'January 5, 2025',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Future'
    }
  ];

  const categories = [
    { name: 'All', icon: BookOpen, count: 25 },
    { name: 'Strategy', icon: TrendingUp, count: 8 },
    { name: 'Technology', icon: Zap, count: 7 },
    { name: 'Case Study', icon: Users, count: 6 },
    { name: 'Integration', icon: ArrowRight, count: 4 }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
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
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'border border-gray-600 text-gray-400 hover:border-blue-500 hover:text-blue-400'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
          
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-3xl overflow-hidden hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-[1.02] cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
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
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <div className="relative h-48">
                  <img
                    src={post.image}
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
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
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
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;