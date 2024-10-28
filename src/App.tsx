import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
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
        title="Jax Sod | Professional Sod Installation in Northeast Florida"
        description="Expert sod installation services in Jacksonville and Green Cove Springs. With over 37 years of experience, Jax Sod delivers premium quality sod and installation for homes and businesses."
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
        <Route path="/lawn-calculators" element={<LawnCalculators />} />
        <Route path="/sod-types" element={<SodTypes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;