import React from 'react';
import { MapPin, Sun, Cloud, Thermometer, Droplet } from 'lucide-react';
import SEO from '../components/SEO';

const Location: React.FC = () => {
  return (
    <>
      <SEO
        title="Jax Sod Service Area - Jacksonville and St. Augustine Sod Installation"
        description="Jax Sod provides expert sod installation services throughout Jacksonville, St. Augustine, and surrounding areas in Northeast Florida. Learn about our service area and local climate considerations for sod installation."
        canonicalUrl="/location"
      />
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 flex items-center">
            <MapPin className="mr-4" size={36} />
            Our Service Area
          </h1>
          <p className="text-xl text-green-700 mb-8">
            Jax Sod proudly serves Jacksonville, St. Augustine, and the surrounding areas in Northeast Florida with expert sod installation services.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Primary Service Areas</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Jacksonville
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  St. Augustine
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Ponte Vedra Beach
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Orange Park
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Fleming Island
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Extended Service Areas</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Fernandina Beach
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Yulee
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Green Cove Springs
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Middleburg
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Palm Coast
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Local Climate Considerations for Sod Installation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-700 mb-2 flex items-center">
                  <Sun className="mr-2" size={20} />
                  Sunlight
                </h3>
                <p>Jacksonville's abundant sunshine is ideal for most sod varieties, especially St. Augustine grass. We consider sun exposure when recommending the best sod type for your property.</p>
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-2 flex items-center">
                  <Thermometer className="mr-2" size={20} />
                  Temperature
                </h3>
                <p>Our warm climate allows for year-round sod installation. We adjust our installation techniques and care instructions based on seasonal temperature variations.</p>
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-2 flex items-center">
                  <Droplet className="mr-2" size={20} />
                  Rainfall
                </h3>
                <p>While Jacksonville receives ample rainfall, proper irrigation is crucial for new sod establishment. We provide detailed watering guidelines tailored to local weather patterns.</p>
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-2 flex items-center">
                  <Cloud className="mr-2" size={20} />
                  Humidity
                </h3>
                <p>High humidity can affect sod health. Our installation process and maintenance recommendations account for Jacksonville's humid conditions to prevent fungal issues.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Why Choose Jax Sod for Your Area</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold">Local Expertise</h3>
                  <p>Our team has extensive knowledge of Northeast Florida's unique soil conditions and climate, ensuring optimal sod installation and growth.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Sun className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold">Climate-Adapted Solutions</h3>
                  <p>We recommend and install sod varieties that thrive in Jacksonville's specific climate, considering factors like sun exposure, rainfall, and temperature fluctuations.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Droplet className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold">Custom Care Instructions</h3>
                  <p>Each sod installation comes with tailored care guidelines that account for your property's unique characteristics and local weather patterns.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-semibold text-green-800 mb-6">Ready to Transform Your Northeast Florida Lawn?</h2>
            <p className="text-xl text-green-700 mb-8">Contact Jax Sod today for expert sod installation services tailored to your local area.</p>
            <a href="/contact" className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
              Get a Free Estimate
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;

const locationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jax Sod",
  "image": "https://www.jaxsod.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jacksonville",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.3322",
    "longitude": "-81.6557"
  },
  "url": "https://www.jaxsod.com",
  "telephone": "+1-xxx-xxx-xxxx"
};
