import React from 'react';
import { Award, ThumbsUp, Truck, Users, Shield, Leaf } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="About Jax Sod | Jacksonville's Professional Sod Installation Company"
        description="Jacksonville's trusted sod installation company. Professional team serving Northeast Florida with premium sod varieties and expert installation services."
      />

      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">
              Jacksonville's Professional Sod Installation Company
            </h1>

            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <div className="prose max-w-none">
                <p className="text-xl text-green-700 mb-6">
                  Jax Sod is Northeast Florida's premier sod installation company, serving Jacksonville, 
                  St. Augustine, and surrounding areas with professional sod solutions for both residential 
                  and commercial properties.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Mission</h2>
                    <p>
                      To provide Jacksonville property owners with the highest quality sod installation 
                      services, delivering beautiful, lasting results through professional expertise and 
                      premium materials.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Values</h2>
                    <ul className="space-y-2">
                      <li>✓ Professional Excellence</li>
                      <li>✓ Quality Materials</li>
                      <li>✓ Customer Satisfaction</li>
                      <li>✓ Reliable Service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Users className="mx-auto text-green-600 mb-4" size={40} />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Professional Team</h3>
                <p>Expert installation crews with extensive training and experience</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Truck className="mx-auto text-green-600 mb-4" size={40} />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Premium Equipment</h3>
                <p>Modern equipment and tools for precise installation</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Shield className="mx-auto text-green-600 mb-4" size={40} />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Quality Guarantee</h3>
                <p>Satisfaction guaranteed on all installations</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-semibold text-green-800 mb-6">Why Choose Jax Sod?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <Award className="text-green-600 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Professional Expertise</h3>
                    <p>Specialized in Florida sod varieties and installation techniques</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ThumbsUp className="text-green-600 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Customer Focus</h3>
                    <p>Dedicated to exceeding customer expectations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Leaf className="text-green-600 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Quality Materials</h3>
                    <p>Premium grade sod from trusted Florida growers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="text-green-600 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Installation Guarantee</h3>
                    <p>Backed by our professional installation warranty</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-800 text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready for Professional Sod Installation?</h2>
              <p className="text-xl mb-6">Experience the Jax Sod difference in your Jacksonville lawn.</p>
              <a
                href="/contact"
                className="bg-white text-green-800 px-8 py-3 rounded-lg inline-block hover:bg-green-100 transition"
              >
                Get a Free Installation Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}