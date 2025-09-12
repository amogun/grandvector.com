import React from 'react';
import { Phone, Calendar, MessageCircle, Users, Mail, Code, Puzzle, Mic, ArrowRight, CheckCircle } from 'lucide-react';

const SolutionsPage = () => {
  const solutions = [
    {
      icon: Phone,
      title: 'AI Voice Callers',
      description: 'Intelligent voice agents that handle customer calls with human-like conversation',
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Natural conversation flow',
        'Multi-language support',
        'Call recording & analytics',
        'CRM integration',
        'Appointment scheduling'
      ],
      useCases: [
        'Lead qualification',
        'Customer support',
        'Appointment reminders',
        'Survey collection'
      ]
    },
    {
      icon: Calendar,
      title: 'AI Appointment Setters',
      description: 'Automated scheduling that converts prospects into booked meetings seamlessly',
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Smart calendar integration',
        'Timezone handling',
        'Automated reminders',
        'Rescheduling management',
        'No-show follow-up'
      ],
      useCases: [
        'Sales consultations',
        'Demo bookings',
        'Service appointments',
        'Follow-up meetings'
      ]
    },
    {
      icon: MessageCircle,
      title: 'AI Customer Support',
      description: '24/7 intelligent support that resolves issues faster than human agents',
      gradient: 'from-green-500 to-emerald-500',
      features: [
        '24/7 availability',
        'Instant response time',
        'Knowledge base integration',
        'Escalation to humans',
        'Multi-channel support'
      ],
      useCases: [
        'Technical support',
        'Order inquiries',
        'Account management',
        'Product information'
      ]
    },
    {
      icon: Users,
      title: 'Lead Capture & Process Automation',
      description: 'Smart systems that capture, qualify, and nurture leads automatically',
      gradient: 'from-orange-500 to-red-500',
      features: [
        'Multi-source lead capture',
        'Automated qualification',
        'Lead scoring',
        'Nurture sequences',
        'Pipeline management'
      ],
      useCases: [
        'Website visitors',
        'Social media leads',
        'Event attendees',
        'Referral tracking'
      ]
    },
    {
      icon: Mail,
      title: 'Infinite Lead Generation',
      description: 'AI-powered email marketing that generates unlimited qualified prospects',
      gradient: 'from-indigo-500 to-purple-500',
      features: [
        'Prospect identification',
        'Personalized outreach',
        'A/B testing',
        'Response tracking',
        'Follow-up automation'
      ],
      useCases: [
        'Cold outreach',
        'Warm lead nurturing',
        'Re-engagement campaigns',
        'Partnership outreach'
      ]
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke websites, apps, and dashboards tailored to your workflow',
      gradient: 'from-teal-500 to-blue-500',
      features: [
        'Custom web applications',
        'Mobile app development',
        'API integrations',
        'Database design',
        'Cloud deployment'
      ],
      useCases: [
        'Business dashboards',
        'Customer portals',
        'Internal tools',
        'E-commerce platforms'
      ]
    },
    {
      icon: Puzzle,
      title: 'Platform Integrations',
      description: 'Seamless connections with any CRM, tool, or multimedia channel',
      gradient: 'from-yellow-500 to-orange-500',
      features: [
        '500+ platform support',
        'Real-time sync',
        'Custom API development',
        'Data mapping',
        'Error handling'
      ],
      useCases: [
        'CRM synchronization',
        'Marketing automation',
        'Analytics consolidation',
        'Workflow automation'
      ]
    },
    {
      icon: Mic,
      title: 'Multimedia Channel AI',
      description: 'Voice, video, chat, and social media automation in one platform',
      gradient: 'from-pink-500 to-rose-500',
      features: [
        'Omnichannel support',
        'Unified inbox',
        'Cross-platform analytics',
        'Brand consistency',
        'Automated responses'
      ],
      useCases: [
        'Social media management',
        'Customer engagement',
        'Brand monitoring',
        'Content distribution'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive automation services that transform how you engage customers, 
            generate leads, and scale operations. Each solution is designed to deliver 
            measurable ROI from day one.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-gray-600 rounded-3xl p-8 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`bg-gradient-to-r ${solution.gradient} p-3 rounded-xl flex-shrink-0`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{solution.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-purple-400">Use Cases</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.useCases.map((useCase, useCaseIndex) => (
                      <span
                        key={useCaseIndex}
                        className="bg-gray-800/50 border border-gray-600 px-3 py-1 rounded-full text-xs text-gray-300"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button 
                  onClick={() => window.location.href = '/#contact'}
                  className="w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-500/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Get Started with {solution.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a free consultation to discover which AI solutions will deliver the biggest impact for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Free Consultation
            </button>
            <button 
              onClick={() => window.location.href = '/integrations'}
              className="border border-gray-600 hover:border-blue-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-500/10"
            >
              View Integrations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;