import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import NewsletterModal from './components/NewsletterModal';
import ContactModal from './components/ContactModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import IntegrationsPage from './pages/IntegrationsPage';
import Newsletter from './components/Newsletter';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

function App() {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = React.useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const handleNewsletterModalOpen = () => {
    setIsNewsletterModalOpen(true);
  };

  const handleContactModalOpen = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation 
        onContactClick={handleContactModalOpen}
      />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route 
          path="/blog" 
          element={
            <Blog 
              onPostClick={(slug) => window.location.href = `/blog/${slug}`}
              onNewsletterClick={handleNewsletterModalOpen} 
            />
          } 
        />
        <Route 
          path="/blog/:slug" 
          element={<BlogPost />} 
        />
      </Routes>
      
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