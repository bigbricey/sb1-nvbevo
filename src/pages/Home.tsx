import React from 'react';
import { ArrowRight, Phone, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jax Sod",
    "image": "https://www.jaxsod.com/logo.jpg",
    "@id": "https://www.jaxsod.com",
    "url": "https://www.jaxsod.com",
    "telephone": "904-901-1457",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Jacksonville",
      "addressRegion": "FL",
      "postalCode": "32099",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.3322,
      "longitude": -81.6557
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/jaxsod",
      "https://www.instagram.com/jaxsod"
    ] 
  };

  return (
    <>
      <SEO
        title="Jax Sod - Expert Sod Installation in Jacksonville, FL"
        description="Transform your outdoor space with Jax Sod's professional sod installation services in Jacksonville. With over 37 years of experience, we deliver top-quality results across Northeast Florida."
        canonicalUrl="/"
        schema={schema}
      />
      <div className="bg-green-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Jacksonville's Premier Sod Installation Experts</h1>
          <p className="text-xl text-green-700 mb-8">Transform your outdoor space with expert sod installation by Jacksonville's most experienced professionals. With over 37 years in the industry, Jax Sod delivers top-quality results for homeowners and businesses across Northeast Florida.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Why Choose Jax Sod for Installation?</h2>
              <ul className="space-y-3">
                {[
                  "Expert installation of premium Grade A sod",
                  "Specialized in St. Augustine Floratam and other varieties",
                  "37+ years of sod installation experience",
                  "Serving all of Jacksonville and surrounding areas",
                  "100% satisfaction guarantee on installations"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-600 p-6 rounded-lg shadow-md text-white">
              <h2 className="text-2xl font-semibold mb-4">Ready for professional sod installation?</h2>
              <p className="mb-4">Contact us today for a free installation estimate!</p>
              <a href="tel:904-901-1457" className="inline-flex items-center bg-white text-green-700 font-semibold py-2 px-4 rounded-lg hover:bg-green-100 transition duration-300">
                <Phone className="mr-2" size={20} />
                Call: 904-901-1457
              </a>
            </div>
          </div>
          <div className="text-center mb-12">
            <Link to="/services" className="inline-flex items-center bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
              Explore Our Sod Installation Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
          
          {/* Customer Testimonials */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">What Our Customers Say About Our Sod Installation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="italic mb-2">"Jax Sod transformed our patchy lawn into a lush, green oasis. Their installation was quick, professional, and the results are amazing!"</p>
                <p className="font-semibold">- Sarah T., Jacksonville</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="italic mb-2">"As a property manager, I've worked with many sod installers, but Jax Sod is by far the best. Their attention to detail and quality of work is unmatched."</p>
                <p className="font-semibold">- Mike R., St. Augustine</p>
              </div>
            </div>
          </div>

          {/* Updated Review Section */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Love Our Sod Installation? Leave a Review!</h2>
            <p className="text-lg text-green-600 mb-4">Your feedback helps us grow and serve our Jacksonville community better.</p>
            <a 
              href="https://g.page/r/CaKAgHUYLqD8EAE/review" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
              <Star className="mr-2" size={20} />
              Leave a Google Review
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;