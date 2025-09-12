import React from 'react';

const LeadGeneration = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('book-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section id="lead-generation" className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-400 text-sm font-semibold">Infinite Lead Generation</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Generate <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Unlimited</span>
              <br />Qualified Leads
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you have leads or need new prospects, our AI-powered system personalizes every email and delivers qualified opportunities, keeping your sales pipeline full and ready to close.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Smart prospect identification across industries',
                'Personalized outreach at infinite scale',
                'Real-time lead scoring and qualification',
                'Automated follow-up sequences that convert'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={scrollToDemo}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              Start Generating Leads
            </button>
          </div>

          {/* Right Side - Spline Animation */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <spline-viewer url="https://prod.spline.design/p7W1gAIKcdk5sjLy/scene.splinecode"></spline-viewer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGeneration;