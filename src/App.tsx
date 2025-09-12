import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Home page component
const HomePage = ({ onNewsletterClick }: { onNewsletterClick: () => void }) => {
  // Handle anchor navigation on page load
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  // Handle hash changes while on the page
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <LeadGeneration />
      <Development />
      <Portfolio />
      <FAQ />
      <Contact onContactClick={onContactClick} />
    </>
  );
};

// Blog page wrapper
const BlogPage = ({ onNewsletterClick }: { onNewsletterClick: () => void }) => {
  const navigate = useNavigate();
  
  const handlePostClick = (postSlug: string) => {
    navigate(`/blog/${postSlug}`);
  };
  
  return <Blog onPostClick={handlePostClick} onNewsletterClick={onNewsletterClick} />;
};

// Blog post page wrapper
const BlogPostPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const postSlug = location.pathname.split('/blog/')[1];
  
  const handleBack = () => {
    navigate('/blog');
  };
  
  return <BlogPost postSlug={postSlug} onBack={handleBack} />;
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = React.useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const handlePageChange = (page: string) => {
    navigate(`/${page === 'home' ? '' : page}`);
    // Scroll to top when changing pages
    window.scrollTo(0, 0);
  };

  const handleNewsletterModalOpen = () => {
    setIsNewsletterModalOpen(true);
  };

  const handleContactModalOpen = () => {
    setIsContactModalOpen(true);
  };

  // Determine current page from location
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/blog/')) return 'blog';
    return path.substring(1) || 'home';
  };

  const isOnBlogPost = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation 
        currentPage={getCurrentPage()} 
        onPageChange={handlePageChange}
        onContactClick={handleContactModalOpen}
        showBackButton={isOnBlogPost}
        onBack={() => navigate('/blog')}
      />
      
      <Routes>
        <Route 
          path="/" 
          element={<HomePage onNewsletterClick={handleNewsletterModalOpen} />} 
        />
        <Route 
          path="/newsletter" 
          element={<Newsletter />} 
        />
        <Route 
          path="/blog" 
          element={<BlogPage onNewsletterClick={handleNewsletterModalOpen} />} 
        />
        <Route 
          path="/blog/:slug" 
          element={<BlogPostPage />} 
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