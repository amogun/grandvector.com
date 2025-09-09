import React from 'react';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';

interface BlogPostProps {
  postSlug: string;
  onBack: () => void;
}

const BlogPost = ({ postSlug, onBack }: BlogPostProps) => {
  // Mock blog post data - in a real app, this would come from an API or CMS
  const blogPosts: Record<string, any> = {
    'the-complete-guide-to-ai-automation-for-small-businesses': {
      title: 'The Complete Guide to AI Automation for Small Businesses',
      author: 'Sarah Chen',
      date: 'January 20, 2025',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      category: 'Strategy',
      content: `
        <p>In today's competitive landscape, small businesses need every advantage they can get. AI automation has emerged as a game-changing technology that levels the playing field, allowing small companies to compete with enterprise-level organizations while reducing costs and improving efficiency.</p>
        
        <h2>Why AI Automation Matters for Small Businesses</h2>
        <p>Small businesses often struggle with limited resources, tight budgets, and the need to wear multiple hats. AI automation addresses these challenges by:</p>
        <ul>
          <li>Reducing operational costs by up to 60%</li>
          <li>Eliminating repetitive tasks that consume valuable time</li>
          <li>Providing 24/7 customer service capabilities</li>
          <li>Scaling operations without proportional increases in staff</li>
        </ul>
        
        <h2>Key Areas for AI Implementation</h2>
        <p>The most impactful areas for small businesses to implement AI automation include:</p>
        
        <h3>Customer Service</h3>
        <p>AI-powered chatbots and voice assistants can handle routine customer inquiries, freeing up your team to focus on complex issues that require human touch.</p>
        
        <h3>Lead Generation</h3>
        <p>Automated email marketing systems can identify, engage, and nurture prospects at scale, generating a consistent pipeline of qualified leads.</p>
        
        <h3>Appointment Scheduling</h3>
        <p>AI scheduling assistants can manage calendars, book appointments, and send reminders, reducing no-shows and improving customer experience.</p>
        
        <h2>Getting Started: A Step-by-Step Approach</h2>
        <p>Implementing AI automation doesn't have to be overwhelming. Here's a practical roadmap:</p>
        <ol>
          <li><strong>Audit Your Processes:</strong> Identify repetitive tasks that consume significant time</li>
          <li><strong>Start Small:</strong> Choose one area for initial automation</li>
          <li><strong>Measure Results:</strong> Track time saved, costs reduced, and efficiency gains</li>
          <li><strong>Scale Gradually:</strong> Expand automation to other areas based on success</li>
        </ol>
        
        <h2>Real-World Success Stories</h2>
        <p>Consider the case of TechFlow Solutions, a small software company that implemented AI automation across their customer service and lead generation processes. Within six months, they:</p>
        <ul>
          <li>Reduced customer response time from 4 hours to 2 minutes</li>
          <li>Increased lead generation by 300%</li>
          <li>Cut operational costs by 45%</li>
          <li>Improved customer satisfaction scores by 60%</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>AI automation isn't just for large corporations anymore. Small businesses that embrace these technologies today will have a significant competitive advantage tomorrow. The key is to start with clear objectives, choose the right tools, and implement gradually while measuring results.</p>
        
        <p>Ready to transform your business with AI automation? The future of small business success lies in intelligent automation that works around the clock to grow your company.</p>
      `
    },
    'how-ai-voice-callers-are-revolutionizing-customer-service': {
      title: 'How AI Voice Callers Are Revolutionizing Customer Service',
      author: 'Marcus Rodriguez',
      date: 'January 18, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      category: 'Technology',
      content: `
        <p>The landscape of customer service is undergoing a dramatic transformation. AI voice callers are no longer science fiction—they're here, they're sophisticated, and they're revolutionizing how businesses interact with their customers.</p>
        
        <h2>The Evolution of AI Voice Technology</h2>
        <p>Modern AI voice systems have evolved far beyond the robotic, scripted responses of early automated systems. Today's AI voice callers feature:</p>
        <ul>
          <li>Natural language processing that understands context and intent</li>
          <li>Human-like speech patterns and emotional intelligence</li>
          <li>Real-time learning and adaptation capabilities</li>
          <li>Seamless integration with existing business systems</li>
        </ul>
        
        <h2>Key Benefits for Businesses</h2>
        <p>Companies implementing AI voice callers are seeing remarkable improvements across multiple metrics:</p>
        
        <h3>24/7 Availability</h3>
        <p>Unlike human agents, AI voice callers never need breaks, vacations, or sleep. They provide consistent, high-quality service around the clock.</p>
        
        <h3>Cost Efficiency</h3>
        <p>A single AI voice caller can handle the workload of multiple human agents at a fraction of the cost, with no training requirements or employee turnover.</p>
        
        <h3>Scalability</h3>
        <p>During peak periods or unexpected surges in call volume, AI systems can instantly scale to handle thousands of simultaneous conversations.</p>
        
        <h2>Real-World Applications</h2>
        <p>AI voice callers are being successfully deployed across various industries:</p>
        
        <h3>Healthcare</h3>
        <p>Appointment scheduling, prescription refill reminders, and basic health inquiries are handled efficiently by AI systems.</p>
        
        <h3>E-commerce</h3>
        <p>Order status updates, return processing, and product recommendations are delivered through natural voice interactions.</p>
        
        <h3>Financial Services</h3>
        <p>Account balance inquiries, transaction history, and fraud alerts are managed securely through voice AI.</p>
        
        <h2>The Human Touch Factor</h2>
        <p>One common concern is whether AI voice callers can provide the empathy and understanding that human agents offer. The latest AI systems are addressing this through:</p>
        <ul>
          <li>Emotional intelligence algorithms that detect customer sentiment</li>
          <li>Personalized responses based on customer history and preferences</li>
          <li>Seamless handoff to human agents when complex issues arise</li>
        </ul>
        
        <h2>Implementation Best Practices</h2>
        <p>To maximize the success of AI voice caller implementation:</p>
        <ol>
          <li><strong>Start with Simple Use Cases:</strong> Begin with routine inquiries and gradually expand</li>
          <li><strong>Train Your AI:</strong> Provide comprehensive data about your business and customers</li>
          <li><strong>Monitor and Optimize:</strong> Continuously analyze performance and refine responses</li>
          <li><strong>Maintain Human Backup:</strong> Ensure smooth escalation paths for complex issues</li>
        </ol>
        
        <h2>Looking Ahead</h2>
        <p>The future of AI voice callers is incredibly promising. Emerging developments include:</p>
        <ul>
          <li>Multi-language support with real-time translation</li>
          <li>Advanced emotional intelligence and empathy simulation</li>
          <li>Integration with video calling for enhanced customer experience</li>
          <li>Predictive capabilities that anticipate customer needs</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>AI voice callers represent a fundamental shift in customer service delivery. They offer unprecedented efficiency, availability, and scalability while maintaining increasingly human-like interactions. Businesses that adopt this technology now will gain a significant competitive advantage in customer satisfaction and operational efficiency.</p>
        
        <p>The revolution is here—and it's speaking your customers' language.</p>
      `
    }
  };

  const post = blogPosts[postSlug];

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
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
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <img
              src={post.image}
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