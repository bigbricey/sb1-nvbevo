import React from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Jax Sod | Free Sod Installation Estimates Jacksonville FL"
        description="Get a free sod installation estimate in Jacksonville. Professional sod installation for homes and businesses. Call (904) 901-1457 or request a quote online."
      />

      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">
              Get Your Free Estimate
            </h1>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-green-800 mb-4">Quick Contact</h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Phone className="text-green-600 mr-3" size={24} />
                    <div>
                      <p className="font-semibold">Call or Text</p>
                      <a href="tel:904-901-1457" className="text-green-600 hover:text-green-700">
                        (904) 901-1457
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Mail className="text-green-600 mr-3" size={24} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@jaxsod.com" className="text-green-600 hover:text-green-700">
                        info@jaxsod.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Clock className="text-green-600 mr-3" size={24} />
                    <div>
                      <p className="font-semibold">Hours</p>
                      <p>Monday - Saturday: 7am - 7pm</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="text-green-600 mr-3" size={24} />
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p>Jacksonville & Surrounding Areas</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-green-800 mb-4">What to Expect</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Quick response within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Free, no-obligation estimates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Professional consultation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Detailed written quote</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Flexible scheduling options</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-green-800 mb-6">Request an Estimate</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}