import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can AI automation be implemented?',
      answer: 'Most AI solutions can be deployed within 2-4 weeks. Simple voice callers and chatbots can be live in days, while complex multi-channel automations may take 4-6 weeks for full implementation.',
      category: 'IMPLEMENTATION'
    },
    {
      question: 'What if AI automation doesn\'t fit my business?',
      answer: 'We guarantee results or your money back. Before starting, we conduct a free business analysis to ensure AI automation will benefit your specific situation. If automation isn\'t a match for certain processes, we\'ll recommend alternatives or hybrid solutions that deliver measurable improvements.',
      category: 'INTEGRATION'
    },
    {
      question: 'What makes your lead generation "infinite"?',
      answer: 'AI continuously scans, filters, and qualifies new opportunities using real-time data. Unlike manual outreach, AI scales effortlessly — processing thousands of leads, personalizing engagement, and running campaigns around the clock without human limitations.',
      category: 'LEAD GENERATION'
    },
    {
      question: 'Can you integrate with our existing CRM and tools?',
      answer: 'Yes, we integrate with virtually any platform through APIs, webhooks, or custom connections. Our team has experience with 500+ different tools and platforms.',
      category: 'INTEGRATION'
    },
    {
      question: 'What kind of businesses benefit most from AI automation?',
      answer: 'Any business that handles repetitive tasks, customer engagement, or lead generation can benefit. This includes e-commerce, real estate, healthcare, financial services, SaaS, and professional services. If your business relies on consistent communication and data-driven decisions, AI can amplify results.',
      category: 'BUSINESS'
    },
    {
      question: 'How do you ensure AI responses sound natural?',
      answer: 'We customize AI models with your brand\'s tone, vocabulary, and industry terminology. This ensures conversations feel authentic and aligned with your business identity while still leveraging the power of advanced language models.',
      category: 'AI TECHNOLOGY'
    },
    {
      question: 'How much does AI automation cost compared to hiring staff?',
      answer: 'AI automation is significantly more cost-effective than expanding headcount. A single AI system can handle the workload of multiple employees without training, turnover, or downtime. For most businesses, this translates into thousands of dollars saved monthly — while improving consistency and availability.',
      category: 'COST SAVINGS'
    }
  ];

  const categoryColors = {
    'IMPLEMENTATION': 'from-blue-500 to-cyan-500',
    'LEAD GENERATION': 'from-green-500 to-emerald-500',
    'INTEGRATION': 'from-purple-500 to-pink-500',
    'BUSINESS': 'from-orange-500 to-red-500',
    'AI TECHNOLOGY': 'from-indigo-500 to-purple-500',
    'COST SAVINGS': 'from-teal-500 to-blue-500'
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">FAQ</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Your Questions,
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Answered
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about transforming your business with AI automation
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-gray-600 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 backdrop-blur-sm"
            >
              {/* Question Header */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-start hover:bg-gray-800/30 transition-all duration-300 group"
              >
                <div className="flex-1 pr-4">
                  {/* Category Badge */}
                  <div className="inline-block mb-3">
                    <span className={`inline-flex items-center gap-1 bg-gradient-to-r ${categoryColors[faq.category as keyof typeof categoryColors]} bg-clip-text text-transparent text-xs font-bold uppercase tracking-wider`}>
                      <Sparkles className="w-3 h-3" />
                      {faq.category}
                    </span>
                  </div>
                  
                  {/* Question */}
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {faq.question}
                  </h3>
                </div>
                
                {/* Chevron */}
                <div className="flex-shrink-0 ml-4">
                  <div className="bg-gray-800 group-hover:bg-blue-500/20 p-2 rounded-lg transition-all duration-300">
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-all duration-500 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
              </button>
              
              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8">
                  <div className="border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-6 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-r-xl py-4">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;