import React from 'react';
import {
  ArrowRight,
  Phone,
  CheckCircle,
  Star,
  Users,
  Sun,
  Shield,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SodCalculator from '../components/SodCalculator';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import Breadcrumbs from '../components/Breadcrumbs';
import ReviewSchema from '../components/ReviewSchema';

export default function Home() {
  return (
    <>
      {/* SEO component */}
      <SEO
        title="Sod Installation Jacksonville, FL | Jax Sod"
        description="Top-rated sod installation services in Jacksonville, FL. Jax Sod offers premium sod varieties and expert installation. Call (904) 901-1457 for a free estimate."
        canonicalUrl="/"
      />
      
      {/* LocalBusiness Schema */}
      <LocalBusinessSchema
        type="LandscapeService"
        name="Jax Sod"
        telephone="904-901-1457"
        description="Professional sod installation services in Jacksonville, FL. Expert team offering premium Grade-A sod, soil preparation, and lawn care services."
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
          type: "GeoCircle",
          geoMidpoint: {
            latitude: 30.3322,
            longitude: -81.6557
          },
          geoRadius: "50000"
        }}
        services={[
          {
            name: "Professional Sod Installation",
            description: "Complete sod installation services including soil preparation and aftercare guidance"
          },
          {
            name: "Soil Preparation Services",
            description: "Professional soil preparation and grading for optimal sod growth"
          }
        ]}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 150
        }}
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center max-w-5xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-green-800 mb-8">
            Jacksonville's Premier Sod Installation Services
          </h1>
          <p className="text-xl text-gray-700 mb-10">
            Jax Sod is your trusted partner for professional sod installation in Jacksonville, FL. We specialize in premium Grade-A sod varieties, ensuring a lush, green lawn that enhances your property's curb appeal.
          </p>
          <p className="text-xl text-gray-700 mb-10">
            Looking for sod installation near you? Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-green-600 text-white px-10 py-4 rounded-lg flex items-center justify-center hover:bg-green-700 transition"
            >
              <ArrowRight className="mr-2 h-5 w-5" aria-hidden="true" />
              Get a Free Estimate
            </Link>
            <a
              href="tel:9049011457"
              className="bg-white text-green-600 border-2 border-green-600 px-10 py-4 rounded-lg flex items-center justify-center hover:bg-green-50 transition"
            >
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              Call (904) 901-1457
            </a>
          </div>
        </section>

        {/* Sod Calculator Section */}
        <section className="mb-20">
          <SodCalculator />
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-12">
            Why Choose Jax Sod?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Experienced Professionals */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Users
                className="h-16 w-16 text-green-600 mx-auto mb-6"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Experienced Professionals
              </h3>
              <p className="text-gray-700">
                Over 37 years of experience in providing top-quality sod installation services.
              </p>
            </div>
            {/* Premium Sod Varieties */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Sun
                className="h-16 w-16 text-green-600 mx-auto mb-6"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Premium Sod Varieties
              </h3>
              <p className="text-gray-700">
                Offering a range of Grade-A sod types like St. Augustine, Zoysia, and Bermuda.
              </p>
            </div>
            {/* Quality Guarantee */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Shield
                className="h-16 w-16 text-green-600 mx-auto mb-6"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Quality Guarantee
              </h3>
              <p className="text-gray-700">
                We stand by our work with a satisfaction guarantee on all installations.
              </p>
            </div>
            {/* Customer Satisfaction */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Star
                className="h-16 w-16 text-green-600 mx-auto mb-6"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                1000+ Happy Customers
              </h3>
              <p className="text-gray-700">
                Trusted by homeowners and businesses across Northeast Florida.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Sod Installation */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold text-green-800 mb-6">
                Professional Sod Installation
              </h3>
              <p className="text-gray-700 mb-4">
                Our expert team ensures your new lawn is installed correctly for optimal growth and longevity.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-600 mr-3 mt-1"
                    size={24}
                    aria-hidden="true"
                  />
                  Proper soil preparation and grading
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-600 mr-3 mt-1"
                    size={24}
                    aria-hidden="true"
                  />
                  Precise sod placement and fitting
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-600 mr-3 mt-1"
                    size={24}
                    aria-hidden="true"
                  />
                  Post-installation care guidance
                </li>
              </ul>
            </div>
            {/* Soil Preparation */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold text-green-800 mb-6">
                Comprehensive Soil Preparation
              </h3>
              <p className="text-gray-700 mb-4">
                We prepare your soil to create the ideal environment for your new sod to thrive.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-600 mr-3 mt-1"
                    size={24}
                    aria-hidden="true"
                  />
                  Removal of old grass and weeds
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-600 mr-3 mt-1"
                    size={24}
                    aria-hidden="true"
                  />
                  Adding nutrient-rich topsoil when necessary
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-green-600 text-white px-10 py-4 rounded-lg inline-flex items-center hover:bg-green-700 transition"
            >
              Learn More About Our Services
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-green-50 py-16 mb-20">
          <ReviewSchema
            itemReviewed={{
              name: "Jax Sod Installation Services",
              image: "https://www.jaxsod.com/images/sod-installation.jpg",
              description: "Professional sod installation services in Jacksonville, FL"
            }}
            reviews={[
              {
                author: "John D.",
                datePublished: "2024-01-15",
                reviewRating: 5,
                reviewBody: "Jax Sod transformed our property completely. The team was professional, efficient, and the results exceeded our expectations. Our lawn looks amazing!"
              },
              {
                author: "Sarah M.",
                datePublished: "2024-02-20",
                reviewRating: 5,
                reviewBody: "We couldn't be happier with our new lawn. The quality of the sod and the installation was top-notch. The Jax Sod team was knowledgeable and helped us choose the perfect grass for our yard."
              }
            ]}
            aggregateRating={{
              ratingValue: 4.9,
              reviewCount: 150
            }}
          >
            <h2 className="text-4xl font-bold text-green-700 text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Testimonial 1 */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="fill-current h-6 w-6"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">
                    "Jax Sod transformed our property completely. The team was professional, efficient, and the results exceeded our expectations. Our lawn looks amazing!"
                  </p>
                  <div className="flex items-center">
                    <div className="font-semibold text-green-800">John D.</div>
                    <div className="text-gray-500 ml-2">Jacksonville, FL</div>
                  </div>
                </div>
                
                {/* Testimonial 2 */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="fill-current h-6 w-6"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">
                    "We couldn't be happier with our new lawn. The quality of the sod and the installation was top-notch. The Jax Sod team was knowledgeable and helped us choose the perfect grass for our yard."
                  </p>
                  <div className="flex items-center">
                    <div className="font-semibold text-green-800">Sarah M.</div>
                    <div className="text-gray-500 ml-2">St. Augustine, FL</div>
                  </div>
                </div>
              </div>
            </div>
          </ReviewSchema>
        </section>
      </main>
    </>
  );
}
