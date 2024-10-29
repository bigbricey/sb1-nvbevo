import React from 'react';
import { Truck, Shovel, Droplet, CheckCircle, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Services() {
  return (
    <>
      <SEO 
        title="Professional Sod Installation Services Jacksonville FL | Jax Sod"
        description="Complete sod installation services including soil preparation, weed control, and premium sod varieties. Serving Jacksonville and St. Augustine with expert installation."
      />
      
      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">
            Professional Sod Installation Services
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Shovel className="text-green-600 h-12 w-12 mb-4" />
              <h2 className="text-2xl font-bold text-green-700 mb-4">Soil Preparation</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Professional soil testing and pH balancing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Addition of quality topsoil when needed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Proper grading for optimal drainage</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Premium Sod Varieties</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>St. Augustine - Perfect for Florida shade</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Zoysia - Drought-resistant beauty</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Bermuda - ideal for sunny areas</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Truck className="text-green-600 h-12 w-12 mb-4" />
              <h2 className="text-2xl font-bold text-green-700 mb-4">Professional Installation</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Expert installation team</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Precise cutting and fitting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Seamless integration with existing lawn</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Droplet className="text-green-600 h-12 w-12 mb-4" />
              <h2 className="text-2xl font-bold text-green-700 mb-4">Aftercare Support</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Detailed care instructions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Watering schedules provided</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Follow-up support available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Ready for a Beautiful New Lawn?</h2>
            <p className="text-xl text-green-700 mb-6">Get a free estimate for your sod installation project</p>
            <Link 
              to="/contact" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg inline-flex items-center hover:bg-green-700 transition"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
