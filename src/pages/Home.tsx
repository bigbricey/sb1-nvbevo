import React from 'react';
import { ArrowRight, Phone, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Jacksonville's Premier Sod Installation Company | Jax Sod"
        description="Professional sod installation in Jacksonville & St. Augustine. Expert team serving residential & commercial properties. Free estimates for premium Grade-A sod installation."
      />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Jacksonville's Trusted Sod Installation Company
          </h1>
          <p className="text-xl text-green-700 mb-8">
            Northeast Florida's leading professional sod installation team, serving Jacksonville, St. Augustine, and surrounding areas with premium Grade-A sod solutions for residential and commercial properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg flex items-center justify-center hover:bg-green-700 transition">
              Get Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:904-901-1457" className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg flex items-center justify-center hover:bg-green-50 transition">
              <Phone className="mr-2 h-5 w-5" /> Call (904) 901-1457
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
            <p>Expert team trained in proper sod installation techniques for optimal growth and longevity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Premium Sod Varieties</h3>
            <p>Top-quality St. Augustine, Zoysia, and Bermuda sod varieties perfect for Florida's climate.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Comprehensive Service</h3>
            <p>From soil preparation to installation and aftercare guidance - we handle everything.</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-green-50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex text-yellow-400 mb-2">
                <Star className="fill-current" />
                <Star className="fill-current" />
                <Star className="fill-current" />
                <Star className="fill-current" />
                <Star className="fill-current" />
              </div>
              <p className="mb-4">"Jax Sod transformed our property completely. Their team was professional, efficient, and the results exceeded our expectations."</p>
              <p className="font-bold">- Michael R., Jacksonville</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex text-yellow-400 mb-2">
                <Star className="fill-current" />
                <Star className="fill-current" />
                <Star className="fill-current" />
                <Star className="fill-current" />
                <Star className="fill-current" />
              </div>
              <p className="mb-4">"Best investment we've made in our home. The sod quality is excellent and their installation team was outstanding."</p>
              <p className="font-bold">- Sarah T., St. Augustine</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-green-800 text-white p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Lawn?</h2>
          <p className="mb-6">Contact us today for a free estimate and consultation</p>
          <Link to="/contact" className="bg-white text-green-800 px-8 py-3 rounded-lg inline-flex items-center hover:bg-green-100 transition">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </main>
    </>
  );
}