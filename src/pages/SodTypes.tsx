import React from 'react';
import { Sun, Cloud, Droplet, Shield, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function SodTypes() {
  return (
    <>
      <SEO
        title="Jacksonville FL Sod Types | St Augustine, Bahia, Zoysia, Bermuda Grass"
        description="Expert guide to Florida sod varieties: St Augustine (Floratam, Palmetto, Bitter Blue), Bahia, Zoysia, and Bermuda grass. Find the perfect sod for your Jacksonville lawn."
      />

      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">
            Complete Guide to Sod Varieties in Jacksonville
          </h1>

          {/* St. Augustine Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-6">St. Augustine Grass Varieties</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/images/st-augustine-sod.jpg" 
                  alt="St Augustine Grass" 
                  className="rounded-lg w-full h-64 object-cover mb-4"
                />
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Sun className="text-yellow-500 mr-1" size={20} />
                    <span>Sun Requirements Vary by Type</span>
                  </div>
                  <div className="flex items-center">
                    <Droplet className="text-blue-500 mr-1" size={20} />
                    <span>Moderate Water Needs</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Popular St. Augustine Varieties</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <div>
                      <span className="font-semibold">Floratam:</span> Standard variety, best for full sun areas, excellent heat tolerance, not shade tolerant
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <div>
                      <span className="font-semibold">Palmetto:</span> Superior shade tolerance, good disease resistance, maintains color in cooler temperatures
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <div>
                      <span className="font-semibold">Bitter Blue:</span> Excellent shade tolerance, deep blue-green color, good for partially shaded areas
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <div>
                      <span className="font-semibold">Seville:</span> Fine-textured, good shade tolerance, ideal for residential landscapes
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bahia Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Bahia Grass</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/images/bahia-sod.jpg" 
                  alt="Bahia Grass" 
                  className="rounded-lg w-full h-64 object-cover mb-4"
                />
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Sun className="text-yellow-500 mr-1" size={20} />
                    <span>Full Sun Required</span>
                  </div>
                  <div className="flex items-center">
                    <Droplet className="text-blue-500 mr-1" size={20} />
                    <span>Drought Resistant</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Argentine Bahia Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Exceptional drought tolerance and low maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Thrives in sandy soils common to Florida</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Excellent for large areas and low-traffic zones</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Deep root system for superior erosion control</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Zoysia Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Zoysia Grass</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/images/zoysia-sod.jpg" 
                  alt="Zoysia Grass" 
                  className="rounded-lg w-full h-64 object-cover mb-4"
                />
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Sun className="text-yellow-500 mr-1" size={20} />
                    <span>Full Sun to Partial Shade</span>
                  </div>
                  <div className="flex items-center">
                    <Cloud className="text-gray-500 mr-1" size={20} />
                    <span>Traffic Tolerant</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Premium Zoysia Characteristics</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Dense, carpet-like texture perfect for residential lawns</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Good drought tolerance once established</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Excellent wear resistance for active families</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Slower growth rate means less mowing required</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bermuda Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Bermuda Grass</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/images/bermuda-sod.jpg" 
                  alt="Bermuda Grass" 
                  className="rounded-lg w-full h-64 object-cover mb-4"
                />
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Sun className="text-yellow-500 mr-1" size={20} />
                    <span>Full Sun Only</span>
                  </div>
                  <div className="flex items-center">
                    <Cloud className="text-gray-500 mr-1" size={20} />
                    <span>High Traffic Tolerance</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Ideal for Active Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Superior wear tolerance - perfect for sports fields</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Excellent heat and drought resistance</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Quick recovery from damage and wear</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Requires full sun - no shade tolerance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-green-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Sod?</h2>
            <p className="text-xl mb-6">
              Our experts will help you select the perfect grass variety for your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:904-901-1457"
                className="bg-white text-green-800 px-8 py-3 rounded-lg inline-flex items-center justify-center hover:bg-green-100 transition"
              >
                Call (904) 901-1457
              </a>
              <a
                href="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg inline-flex items-center justify-center hover:bg-green-700 transition"
              >
                Get Free Consultation <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
