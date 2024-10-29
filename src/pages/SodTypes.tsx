import React from 'react';
import { Sun, Cloud, Droplet, Shield, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function SodTypes() {
  return (
    <>
      <SEO
        title="Sod Varieties Jacksonville FL | St Augustine, Zoysia, Bermuda Sod"
        description="Expert guide to sod varieties for Jacksonville lawns. St Augustine, Zoysia, and Bermuda sod installation. Find the perfect grass for your Florida yard."
      />

      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">
            Premium Sod Varieties for Jacksonville Lawns
          </h1>

          {/* St. Augustine Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-6">St. Augustine Sod</h2>
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
                    <span>Partial to Full Sun</span>
                  </div>
                  <div className="flex items-center">
                    <Droplet className="text-blue-500 mr-1" size={20} />
                    <span>Moderate Water</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Perfect for Florida Homes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Excellent shade tolerance</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Thrives in Jacksonville's climate</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Salt tolerant - great for coastal areas</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Dense, carpet-like appearance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Zoysia Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Zoysia Sod</h2>
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
                    <span>Full Sun to Light Shade</span>
                  </div>
                  <div className="flex items-center">
                    <Droplet className="text-blue-500 mr-1" size={20} />
                    <span>Drought Resistant</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Premium Quality Grass</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Excellent drought tolerance</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Fine texture and soft feel</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Good wear resistance</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Low maintenance requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bermuda Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Bermuda Sod</h2>
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
                    <span>Full Sun</span>
                  </div>
                  <div className="flex items-center">
                    <Cloud className="text-gray-500 mr-1" size={20} />
                    <span>High Traffic Tolerant</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Athletic Turf Quality</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Excellent heat tolerance</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Fast recovery from wear</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Perfect for sunny areas</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Ideal for high-traffic areas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-green-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-xl mb-6">
              Our experts will help you select the perfect sod variety for your property
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