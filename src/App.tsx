import React from 'react';
import { useState } from 'react';
import Navigation from './components/Navigation';
import NewsletterModal from './components/NewsletterModal';
import ContactModal from './components/ContactModal';
import Newsletter from './components/Newsletter';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import Services from './components/Services';
import LeadGeneration from './components/LeadGeneration';
import Development from './components/Development';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentBlogPost, setCurrentBlogPost] = useState<string | null>(null);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handlePageChange = (page: string) => {
    console.log('Navigating to page:', page); // Debug log
    setCurrentPage(page);
    setCurrentBlogPost(null); // Clear blog post when navigating to other pages
  };

  const handleBackFromBlogPost = () => {
    setCurrentBlogPost(null);
    setCurrentPage('blog'); // Return to blog page
  };

  const handleNewsletterModalOpen = () => {
    setIsNewsletterModalOpen(true);
  };

  const handleContactModalOpen = () => {
    setIsContactModalOpen(true);
  };

  const renderPage = () => {
    if (currentBlogPost) {
      return <BlogPost postSlug={currentBlogPost} onBack={handleBackFromBlogPost} />;
    }
    
    switch (currentPage) {
      case 'newsletter':
        return <Newsletter />;
      case 'blog':
        return <Blog onPostClick={setCurrentBlogPost} onNewsletterClick={handleNewsletterModalOpen} />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <TrustedBy />
            <About />
            <Services />
            <LeadGeneration />
            <Development />
            <Testimonials />
            <Portfolio />
            <FAQ />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation 
        currentPage={currentPage} 
        onPageChange={handlePageChange}
        onContactClick={handleContactModalOpen}
        showBackButton={!!currentBlogPost}
        onBack={handleBackFromBlogPost}
      />
      {renderPage()}
      <Footer />
      
      {/* Modals */}
      <NewsletterModal 
        isOpen={isNewsletterModalOpen} 
        onClose={() => setIsNewsletterModalOpen(false)} 
      />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}

export default App;