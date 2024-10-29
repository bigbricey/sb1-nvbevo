import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import Location from './pages/Location';
import LawnCalculators from './pages/LawnCalculators';
import SodTypes from './pages/SodTypes';
import SEO from './components/SEO';

function App() {
  return (
    <Router>
      <SEO 
        title="Jax Sod | Professional Sod Installation Jacksonville FL | Grade-A Sod Services"
        description="Jacksonville's #1 sod installation experts. Licensed, insured, Grade-A sod varieties for Florida lawns. Free estimates, serving Jacksonville & St. Augustine. Call (904) 901-1457"
      />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/location" element={<Location />} />
        <Route path="/calculators" element={<LawnCalculators />} />
        <Route path="/sod-types" element={<SodTypes />} />
      </Routes>
    </Router>
  );
}

export default App;
