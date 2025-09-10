import React from 'react';
import { Monitor, Smartphone, Database, Palette } from 'lucide-react';

const Development = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('book-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const capabilities = [
    {
      icon: Monitor,
      title: 'Web Applications',
      description: 'Custom websites and web apps built with modern frameworks'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications'
    },
    {
      icon: Database,
      title: 'Dashboards',
      description: 'Real-time analytics and business intelligence platforms'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love'
    }
  ];

  const technologies = [
    { name: 'Voice', category: 'Audio' },
    { name: 'Video', category: 'Visual' },
    { name: 'Chat', category: 'Messaging' },
    { name: 'Social', category: 'Media' },
    { name: 'Email', category: 'Marketing' },
    { name: 'SMS', category: 'Mobile' },
    { name: 'CRM', category: 'Sales' },
    { name: 'API', category: 'Integration' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
            <Monitor className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">Custom Development</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build Beyond <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Automation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Custom websites, apps, and dashboards that integrate seamlessly with your AI automation systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Capabilities */}
          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 bg-gray-900/30 border border-gray-800 hover:border-blue-500/50 rounded-2xl hover:bg-gray-900/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Integration Showcase */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Multimedia Integration
              </h3>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 border border-gray-600 rounded-xl p-4 text-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="font-semibold text-sm mb-1 group-hover:text-blue-400 transition-colors">{tech.name}</div>
                    <div className="text-xs text-gray-500">{tech.category}</div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button 
                  onClick={scrollToDemo}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-3xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              From AI automation to custom development, we create solutions that transform how you do business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToDemo}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Free Consultation
              </button>
              <button className="border border-gray-600 hover:border-blue-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-500/10">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;