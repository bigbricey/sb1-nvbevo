import React from 'react';
import { MapPin, Sun, Cloud, Thermometer, Droplet } from 'lucide-react';
import SEO from '../components/SEO';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Location() {
  return (
    <>
      <SEO
        title="Sod Installation Service Areas | Jacksonville, St. Augustine & Orange Park"
        description="Local sod experts serving all of Northeast Florida: Jacksonville, St. Augustine, Ponte Vedra, Orange Park, Middleburg & Fleming Island. Call for service in your area."
        canonicalUrl="/location"
      />
      
      {/* LocalBusiness Schema with detailed service areas */}
      <LocalBusinessSchema
        type="LandscapeService"
        name="Jax Sod - Service Areas"
        telephone="904-901-1457"
        description="Professional sod installation serving Jacksonville, St. Augustine, Ponte Vedra Beach, Orange Park and surrounding Northeast Florida areas. Local experts in Florida sod installation with complete service coverage."
        address={{
          streetAddress: "PO Box 3",
          addressLocality: "Green Cove Springs",
          addressRegion: "FL",
          postalCode: "32043",
          addressCountry: "US"
        }}
        geo={{
          latitude: 29.9919,
          longitude: -81.6784
        }}
        areaServed={{
          type: "GeoShape",
          polygon: "30.332,-81.656 30.186,-81.436 30.098,-81.312 29.884,-81.309 29.798,-81.625 30.031,-81.763 30.332,-81.656"
        }}
        services={[
          {
            name: "Jacksonville Sod Installation",
            description: "Complete sod installation services throughout Jacksonville and surrounding neighborhoods."
          },
          {
            name: "St. Augustine Sod Services",
            description: "Premium sod installation services in St. Augustine and St. Augustine Beach areas."
          },
          {
            name: "Ponte Vedra Beach Sod Installation",
            description: "High-end sod installation for residential and commercial properties in Ponte Vedra Beach."
          },
          {
            name: "Orange Park Sod Services",
            description: "Professional sod installation and lawn renovation services in Orange Park."
          }
        ]}
      />
      
      {/* Breadcrumbs for better navigation and SEO */}
      <Breadcrumbs 
        customCrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/location' }
        ]}
      />

      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">
            Service Areas
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Primary Service Areas</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Jacksonville - Full Service Coverage
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  St. Augustine - Complete Installation
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Ponte Vedra Beach - Premium Services
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Orange Park - Residential & Commercial
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Fleming Island - Full Coverage
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Extended Service Areas</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Mandarin - By Appointment
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Jacksonville Beach - Select Services
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Neptune Beach - Available
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  Atlantic Beach - Select Services
                </li>
                <li className="flex items-center">
                  <MapPin className="text-green-600 mr-2" size={20} />
                  World Golf Village - By Request
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Why Choose Local Installation?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Sun className="text-yellow-500 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Local Climate Expertise</h3>
                  <p>We understand Northeast Florida's unique climate challenges and soil conditions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Cloud className="text-blue-500 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Weather-Smart Planning</h3>
                  <p>Installation scheduled around optimal weather conditions for best results.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Thermometer className="text-red-500 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Seasonal Timing</h3>
                  <p>Strategic installation timing based on local growing seasons.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Droplet className="text-blue-500 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Local Water Requirements</h3>
                  <p>Expert knowledge of regional irrigation needs and regulations.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-green-800 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6">Contact us to schedule your free estimate</p>
            <a href="tel:904-901-1457" className="bg-white text-green-800 px-8 py-3 rounded-lg inline-block hover:bg-green-100 transition">
              Call (904) 901-1457
            </a>
          </div>
        </div>
      </div>
    </>
  );
}