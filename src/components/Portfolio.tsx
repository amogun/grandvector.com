import React from 'react';

const Portfolio = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('contact');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const successMetrics = [
    { metric: '500%', label: 'Average ROI Increase', icon: '📈' },
    { metric: '80%', label: 'Tasks Automated', icon: '⚡' },
    { metric: '24/7', label: 'AI Availability', icon: '🤖' },
    { metric: '95%', label: 'Client Satisfaction', icon: '⭐' }
  ];

  const integrations = [
    { name: 'Salesforce', category: 'CRM' },
    { name: 'HubSpot', category: 'Marketing' },
    { name: 'Slack', category: 'Communication' },
    { name: 'Discord', category: 'Community' },
    { name: 'WhatsApp', category: 'Messaging' },
    { name: 'Zoom', category: 'Video' },
    { name: 'Stripe', category: 'Payments' },
    { name: 'Shopify', category: 'E-commerce' },
    { name: 'WordPress', category: 'CMS' },
    { name: 'Zapier', category: 'Automation' },
    { name: 'Monday.com', category: 'Project Management' },
    { name: 'Mailchimp', category: 'Email Marketing' }
  ];

  const categories = ['All', 'CRM', 'Marketing', 'Communication', 'E-commerce'];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Platform <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Integrations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We make your tools work together so you don’t have to jump between apps. 
            We’ll connect all the dots so it works as one.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'border border-gray-600 text-gray-400 hover:border-blue-500 hover:text-blue-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 rounded-xl p-4 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                <span className="text-white font-bold text-sm">
                  {integration.name.charAt(0)}
                </span>
              </div>
              <div className="text-sm font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                {integration.name}
              </div>
              <div className="text-xs text-gray-500">
                {integration.category}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              Ready to See These Results in Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of businesses already scaling with AI automation. Book your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToDemo}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Free Consultation
              </button>
              <button className="border border-gray-600 hover:border-blue-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-500/10">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;