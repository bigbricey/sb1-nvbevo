import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

// Import the performance optimizer utility
import initializePerformanceOptimizations from './utils/performanceOptimizer';

// Import above-the-fold pages normally for faster initial load
import Home from './pages/Home';

// Lazy load below-the-fold pages to improve initial page load time
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const SearchResults = lazy(() => import('./pages/SearchResults'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Location = lazy(() => import('./pages/Location'));
const LawnCalculators = lazy(() => import('./pages/LawnCalculators'));
const SodTypes = lazy(() => import('./pages/SodTypes'));

// Always import these critical components
import AnalyticsWrapper from './components/AnalyticsWrapper';
import ScrollToTop from './components/ScrollToTop';
import RedirectHandler from './components/RedirectHandler';

// Create a simple loading fallback component
const PageLoadingFallback = () => (
  <div className="flex justify-center items-center h-screen bg-green-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-green-800 text-lg">Loading...</p>
    </div>
  </div>
);

function App() {
  // Initialize performance optimizations on mount
  useEffect(() => {
    // Initialize performance optimizations
    initializePerformanceOptimizations();
    
    // Preload critical paths after initial render
    const preloadPaths = ['About', 'Services', 'Contact'];
    setTimeout(() => {
      preloadPaths.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = `/${path.toLowerCase()}`;
        document.head.appendChild(link);
      });
    }, 3000);
    
    // Add online status indicator to the DOM
    const onlineStatus = document.createElement('div');
    onlineStatus.id = 'online-status';
    onlineStatus.style.position = 'fixed';
    onlineStatus.style.bottom = '10px';
    onlineStatus.style.left = '10px';
    onlineStatus.style.padding = '8px 12px';
    onlineStatus.style.borderRadius = '4px';
    onlineStatus.style.zIndex = '9999';
    onlineStatus.style.display = 'none';
    onlineStatus.className = 'text-sm font-medium';
    document.body.appendChild(onlineStatus);
    
    return () => {
      // Clean up
      if (onlineStatus.parentNode === document.body) {
        document.body.removeChild(onlineStatus);
      }
    };
  }, []);
  
  return (
    <Router>
      <AnalyticsWrapper>
        <RedirectHandler />
        <Navigation />
        <ScrollToTop />
        
        {/* Use Suspense for lazy-loaded routes */}
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            {/* Home page is loaded eagerly for best user experience */}
            <Route path="/" element={<Home />} />
            
            {/* All other pages are lazy-loaded with SEO-friendly URLs */}
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/lawn-care-blog" element={<Blog />} />
            <Route path="/lawn-care-blog/:category/:slug" element={<BlogPost />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/frequently-asked-questions" element={<FAQ />} />
            <Route path="/service-locations/:location?" element={<Location />} />
            <Route path="/lawn-care-calculators" element={<LawnCalculators />} />
            <Route path="/sod-types-and-varieties" element={<SodTypes />} />
          </Routes>
        </Suspense>
      </AnalyticsWrapper>
    </Router>
  );
}

export default App;
