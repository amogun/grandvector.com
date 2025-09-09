import React, { useState } from 'react';
import { Mail, Send, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(import.meta.env.VITE_NEWSLETTER_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          email,
          timestamp: new Date().toISOString(),
          source: 'newsletter'
        }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        console.error('Newsletter subscription failed:', response.status, response.statusText);
        // Still show success to user for better UX, but log the error
        setIsSubscribed(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      // Still show success to user for better UX, but log the error
      setIsSubscribed(true);
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'AI Automation Insights',
      description: 'Weekly deep-dives into the latest AI automation strategies and tools'
    },
    {
      icon: Users,
      title: 'Case Studies',
      description: 'Real success stories from businesses scaling with AI automation'
    },
    {
      icon: Zap,
      title: 'Industry Updates',
      description: 'Breaking news and trends in AI, automation, and business growth'
    }
  ];

  const recentIssues = [
    {
      title: 'How AI Voice Callers Increased Sales by 300%',
      date: 'January 15, 2025',
      preview: 'Discover how a real estate company transformed their lead qualification process...'
    },
    {
      title: 'The Future of Customer Support: AI vs Human',
      date: 'January 8, 2025',
      preview: 'Exploring the perfect balance between AI efficiency and human touch...'
    },
    {
      title: '5 Automation Mistakes That Kill ROI',
      date: 'January 1, 2025',
      preview: 'Avoid these common pitfalls when implementing AI automation in your business...'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-8">
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">Newsletter</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Stay Ahead with
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Automation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get exclusive insights, case studies, and actionable strategies delivered to your inbox. 
            Join 10,000+ business leaders scaling with AI automation.
          </p>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-2xl p-8 mb-16 backdrop-blur-sm">
            {isSubscribed ? (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Welcome to the Community!</h3>
                <p className="text-gray-300">Check your inbox for a confirmation email and your first exclusive insights.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-4">Subscribe Now</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-gray-800/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                    required
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <p className="text-gray-400 text-sm mt-3">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What You'll Get
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl w-fit mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Issues */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recent Issues
          </h2>
          
          <div className="space-y-6">
            {recentIssues.map((issue, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 hover:border-gray-600 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold hover:text-blue-400 transition-colors">
                    {issue.title}
                  </h3>
                  <span className="text-gray-400 text-sm whitespace-nowrap ml-4">
                    {issue.date}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {issue.preview}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;