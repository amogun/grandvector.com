import React, { useState } from 'react';
import { Search, Filter, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const IntegrationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const integrations = [
    // CRM
    { name: 'Salesforce', category: 'CRM', description: 'Complete CRM integration with lead sync and automation', popular: true },
    { name: 'HubSpot', category: 'CRM', description: 'Marketing and sales automation with HubSpot CRM', popular: true },
    { name: 'Pipedrive', category: 'CRM', description: 'Sales pipeline management and deal tracking' },
    { name: 'Zoho CRM', category: 'CRM', description: 'Customer relationship management and sales automation' },
    
    // Communication
    { name: 'Slack', category: 'Communication', description: 'Team notifications and workflow automation', popular: true },
    { name: 'Discord', category: 'Communication', description: 'Community management and automated responses' },
    { name: 'Microsoft Teams', category: 'Communication', description: 'Enterprise communication and collaboration' },
    { name: 'WhatsApp Business', category: 'Communication', description: 'Customer messaging and support automation' },
    { name: 'Telegram', category: 'Communication', description: 'Bot integration and automated messaging' },
    
    // Marketing
    { name: 'Mailchimp', category: 'Marketing', description: 'Email marketing automation and list management', popular: true },
    { name: 'Klaviyo', category: 'Marketing', description: 'E-commerce email and SMS marketing' },
    { name: 'ConvertKit', category: 'Marketing', description: 'Creator-focused email marketing automation' },
    { name: 'ActiveCampaign', category: 'Marketing', description: 'Advanced marketing automation and CRM' },
    
    // E-commerce
    { name: 'Shopify', category: 'E-commerce', description: 'E-commerce automation and customer management', popular: true },
    { name: 'WooCommerce', category: 'E-commerce', description: 'WordPress e-commerce integration' },
    { name: 'BigCommerce', category: 'E-commerce', description: 'Enterprise e-commerce platform integration' },
    { name: 'Magento', category: 'E-commerce', description: 'Flexible e-commerce platform automation' },
    
    // Payments
    { name: 'Stripe', category: 'Payments', description: 'Payment processing and subscription management', popular: true },
    { name: 'PayPal', category: 'Payments', description: 'Payment gateway and transaction automation' },
    { name: 'Square', category: 'Payments', description: 'Point of sale and payment processing' },
    
    // Project Management
    { name: 'Monday.com', category: 'Project Management', description: 'Work management and team collaboration' },
    { name: 'Asana', category: 'Project Management', description: 'Task management and project tracking' },
    { name: 'Trello', category: 'Project Management', description: 'Kanban-style project management' },
    { name: 'Notion', category: 'Project Management', description: 'All-in-one workspace and documentation' },
    
    // Video & Meetings
    { name: 'Zoom', category: 'Video', description: 'Video conferencing and webinar automation', popular: true },
    { name: 'Google Meet', category: 'Video', description: 'Google Workspace meeting integration' },
    { name: 'Calendly', category: 'Video', description: 'Appointment scheduling and calendar management' },
    
    // Social Media
    { name: 'Facebook', category: 'Social Media', description: 'Social media management and advertising' },
    { name: 'Instagram', category: 'Social Media', description: 'Content automation and engagement' },
    { name: 'LinkedIn', category: 'Social Media', description: 'Professional networking and lead generation' },
    { name: 'Twitter', category: 'Social Media', description: 'Social media monitoring and automation' },
    
    // Analytics
    { name: 'Google Analytics', category: 'Analytics', description: 'Web analytics and conversion tracking' },
    { name: 'Mixpanel', category: 'Analytics', description: 'Product analytics and user behavior tracking' },
    { name: 'Hotjar', category: 'Analytics', description: 'User experience and heatmap analytics' },
    
    // Automation
    { name: 'Zapier', category: 'Automation', description: 'Workflow automation between apps', popular: true },
    { name: 'Make (Integromat)', category: 'Automation', description: 'Advanced automation and data processing' },
    { name: 'IFTTT', category: 'Automation', description: 'Simple automation triggers and actions' }
  ];

  const categories = ['All', 'CRM', 'Communication', 'Marketing', 'E-commerce', 'Payments', 'Project Management', 'Video', 'Social Media', 'Analytics', 'Automation'];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularIntegrations = integrations.filter(integration => integration.popular);

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Platform
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Integrations
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Connect your existing tools and platforms with our AI automation systems. 
            We support 500+ integrations to ensure seamless workflow continuity.
          </p>

          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-blue-400 font-semibold mb-2">Don't see your platform?</p>
            <p className="text-gray-300">We can build custom integrations for any API or system. Just ask!</p>
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Most Popular <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Integrations</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularIntegrations.map((integration, index) => (
              <div
                key={index}
                className="group bg-gray-900/80 border border-gray-800 hover:border-blue-500/50 rounded-xl p-4 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
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
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'border border-gray-600 text-gray-400 hover:border-blue-500 hover:text-blue-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gray-900/80 border border-gray-800 hover:border-gray-600 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">
                      {integration.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold">{integration.name}</h3>
                      {integration.popular && (
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-xs px-2 py-1 rounded-full font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-blue-400 font-semibold">
                      {integration.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {integration.description}
                </p>
                
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Ready to integrate</span>
                </div>
              </div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg mb-4">No integrations found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Custom Integration CTA */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl w-fit mx-auto mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            Need a Custom Integration?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We can connect any system with an API. Our team builds custom integrations 
            that fit your exact workflow requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Request Custom Integration
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => window.location.href = '/solutions'}
              className="border border-gray-600 hover:border-blue-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-500/10"
            >
              View All Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationsPage;