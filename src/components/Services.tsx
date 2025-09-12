import React from 'react';
import { Phone, Calendar, MessageCircle, Users, Mail, Code, Puzzle, Mic, ArrowRight, Monitor } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: 'Voice Callers',
      description: 'Handle customer calls with human-like conversation',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      title: 'Appointment Setters',
      description: 'Scheduling that converts prospects into meetings',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: 'Customer Service',
      description: '24/7 AI support that resolves issues faster than humans.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Lead Qualification',
      description: 'Systems that capture only qualified leads automatically.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Mail,
      title: 'Lead Generation',
      description: 'Email marketing & DMs that generate unlimited prospects',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Websites, apps, and dashboards tailored to your needs',
      gradient: 'from-teal-500 to-blue-500'
    },
    {
      icon: Puzzle,
      title: 'Platform Integrations',
      description: 'Seamless connections with any CRM, tool, or multimedia channel',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Puzzle,
      title: 'Proccess automation',
      description: 'Never repeat boring tasks that drain your growth.',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
            <Monitor className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">AI Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Automate routine tasks or enhance your team’s productivity
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900/80 border border-gray-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className={`bg-gradient-to-r ${service.gradient} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-blue-400 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;