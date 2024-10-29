import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle, Award, Shield, Star } from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import PriceEstimator from '../components/PriceEstimator';

export default function Contact() {
  const [squareFootage, setSquareFootage] = useState<number>(0);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Jax Sod",
      "description": "Jacksonville's #1 sod installation experts. Licensed, insured, Grade-A sod varieties for Florida lawns.",
      "image": "https://www.jaxsod.com/logo.jpg",
      "telephone": "(904) 901-1457",
      "email": "brice@jaxsod.com",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 30.3322,
          "longitude": -81.6557
        },
        "geoRadius": "50 mi"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 30.3322,
          "longitude": -81.6557
        },
        "geoRadius": "50 mi"
      },
      "priceRange": "$$",
      "hasMap": "https://www.google.com/maps?q=Jacksonville,FL",
      "sameAs": [
        "https://www.facebook.com/jaxsod",
        "https://www.instagram.com/jaxsod"
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Jax Sod | Professional Sod Installation Jacksonville FL | Grade-A Sod Services"
        description="Jacksonville's #1 sod installation experts. Licensed, insured, Grade-A sod varieties for Florida lawns. Free estimates, serving Jacksonville & St. Augustine. Call (904) 901-1457"
        schema={contactSchema}
      />

      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                Jacksonville's #1 Rated Sod Installation Since 1986
              </h1>
              <div className="flex flex-wrap justify-center gap-4 text-green-700 font-semibold">
                <span className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" /> Licensed & Insured
                </span>
                <span className="flex items-center">
                  <Star className="w-5 h-5 mr-2" /> 1000+ Happy Customers
                </span>
                <span className="flex items-center">
                  <Award className="w-5 h-5 mr-2" /> Grade-A Sod Guaranteed
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-green-800 mb-4">Quick Contact</h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Phone className="text-green-600 mr-3" size={24} />
                    <div>
                      <p className="font-semibold">Call or Text</p>
                      <a href="tel:904-901-1457" className="text-green-600 hover:text-green-700 text-xl font-bold">
                        (904) 901-1457
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Mail className="text-green-600 mr-3" size={24} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:brice@jaxsod.com" className="text-green-600 hover:text-green-700">
                        brice@jaxsod.com
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
                      <p>Jacksonville, St. Augustine & Surrounding Areas</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-green-800 mb-4">Why Choose Us</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                    <span>37+ Years of Professional Experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Free, Same-Day Estimates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Premium Grade-A Sod Varieties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Expert Installation Guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1" size={20} />
                    <span>Competitive Pricing & Financing Available</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    🎉 Limited Time Offer: Free Soil Test with Estimate
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-green-800 mb-6">Request Your Free Estimate</h2>
                <ContactForm />
              </div>
              
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-green-800 mb-6">Instant Price Calculator</h2>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter Your Property Size (sq ft)
                    </label>
                    <input
                      type="number"
                      min="1"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      value={squareFootage || ''}
                      onChange={(e) => setSquareFootage(Number(e.target.value))}
                    />
                  </div>
                  {squareFootage > 0 && <PriceEstimator squareFootage={squareFootage} />}
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-center space-x-4">
                    <img src="/bbb-rating.png" alt="BBB A+ Rating" className="h-16" />
                    <img src="/licensed-insured.png" alt="Licensed & Insured" className="h-16" />
                    <img src="/satisfaction-guaranteed.png" alt="100% Satisfaction Guaranteed" className="h-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
