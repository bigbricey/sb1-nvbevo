import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import SearchResults from './pages/SearchResults';
import FAQ from './pages/FAQ';
import Location from './pages/Location';
import LawnCalculators from './pages/LawnCalculators';
import SodTypes from './pages/SodTypes';
import AnalyticsWrapper from './components/AnalyticsWrapper';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <AnalyticsWrapper>
        <Navigation />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/location" element={<Location />} />
          <Route path="/calculators" element={<LawnCalculators />} />
          <Route path="/sod-types" element={<SodTypes />} />
        </Routes>
      </AnalyticsWrapper>
    </Router>
  );
}

export default App;
