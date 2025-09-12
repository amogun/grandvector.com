import React from 'react';
import { Brain, Rocket, Zap, Target, Users, Award, Globe, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const pillars = [
    {
      icon: Brain,
      title: 'Intelligence',
      description: 'Advanced AI agents that learn and adapt to your business needs'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'Automate repetitive tasks and focus on what matters most'
    },
    {
      icon: Rocket,
      title: 'Scalability',
      description: 'Grow infinitely without increasing operational overhead'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Data-driven decisions with pinpoint accuracy and insights'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Businesses Transformed' },
    { icon: Award, value: '95%', label: 'Client Satisfaction' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI Increase' }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & AI Strategist',
      bio: 'Former Google AI researcher with 10+ years in machine learning and business automation.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO & Lead Developer',
      bio: 'Full-stack architect specializing in scalable AI systems and enterprise integrations.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Customer Success',
      bio: 'Expert in business process optimization with a track record of 500+ successful implementations.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Grand Vector
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize AI automation, making it accessible and profitable 
            for businesses of all sizes. Our team combines cutting-edge technology with deep 
            business expertise to deliver solutions that actually work.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gray-900/80 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl w-fit mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Grand Vector</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge AI automation with custom development to create 
              limitless scalability for forward-thinking businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section id="our-mission" className="py-24 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Mission</span>
            </h2>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 md:p-12">
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed text-center mb-8">
              To help businesses scale by identifying high-impact areas where automation creates the most value. Whether with AI or simpler tools, we analyze your operations, eliminate repetitive tasks, and implement solutions that free up time, reduce costs, and fuel growth.
            </p>
            <p className="text-xl font-semibold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              We guarantee that partnering with us will never cost your business more than operating without us—our solutions always pay for themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experts in AI, automation, and business transformation working together to scale your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses already scaling with AI automation.
          </p>
          <button 
            onClick={() => window.location.href = '/#contact'}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Book Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;