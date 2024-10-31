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

export default function Home() {
  return (
    <>
      <SEO
        title="Sod Installation Jacksonville, FL | Jax Sod"
        description="Top-rated sod installation services in Jacksonville, FL. Jax Sod offers premium sod varieties and expert installation. Call (904) 901-1457 for a free estimate."
      />

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
              <ArrowRight className="mr-2 h-5 w-5" />
              Get a Free Estimate
            </Link>
            <a
              href="tel:9049011457"
              className="bg-white text-green-600 border-2 border-green-600 px-10 py-4 rounded-lg flex items-center justify-center hover:bg-green-50 transition"
            >
              <Phone className="mr-2 h-5 w-5" />
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
              <Users className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Experienced Professionals
              </h3>
              <p className="text-gray-700">
                Over 37 years of experience in providing top-quality sod installation services.
              </p>
            </div>
            {/* Premium Sod Varieties */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Sun className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Premium Sod Varieties
              </h3>
              <p className="text-gray-700">
                Offering a range of Grade-A sod types like St. Augustine, Zoysia, and Bermuda.
              </p>
            </div>
            {/* Quality Guarantee */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Quality Guarantee
              </h3>
              <p className="text-gray-700">
                We stand by our work with a satisfaction guarantee on all installations.
              </p>
            </div>
            {/* Customer Satisfaction */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Star className="h-16 w-16 text-green-600 mx-auto mb-6" />
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
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={24} />
                  Proper soil preparation and grading
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={24} />
                  Precise sod placement and fitting
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={24} />
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
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={24} />
                  Removal of old grass and weeds
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={24} />
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
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-green-50 py-16 mb-20">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-current h-6 w-6" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">
                  "Jax Sod transformed our property completely. Their team was professional, efficient, and the results exceeded our expectations."
                </p>
                <p className="text-gray-700 font-semibold">- Michael R., Jacksonville, FL</p>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-current h-6 w-6" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">
                  "Best investment we've made in our home. The sod quality is excellent and their installation team was outstanding."
                </p>
                <p className="text-gray-700 font-semibold">- Sarah T., St. Augustine, FL</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-800 text-white py-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Lawn?</h2>
          <p className="text-xl mb-10">
            Contact us today for a free estimate and let us bring your dream lawn to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:9049011457"
              className="bg-white text-green-800 px-10 py-4 rounded-lg font-semibold hover:bg-green-100 transition"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us at (904) 901-1457
            </a>
            <Link
              to="/contact"
              className="bg-white text-green-800 px-10 py-4 rounded-lg font-semibold hover:bg-green-100 transition flex items-center justify-center"
            >
              Get a Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-12">
            Our Service Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Jax Sod Service Areas"
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.google.com/maps/d/embed?mid=1A1aBcDEFGHIJKL"
              ></iframe>
            </div>
            {/* Service Area Details */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-semibold text-green-800 mb-6">
                Proudly Serving Northeast Florida
              </h3>
              <p className="text-gray-700 mb-4">
                We offer our professional sod installation services in the following areas:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Jacksonville</li>
                <li>St. Augustine</li>
                <li>Orange Park</li>
                <li>Ponte Vedra</li>
                <li>And surrounding communities</li>
              </ul>
              <p className="text-gray-700 mt-6">
                Don't see your area listed? Give us a call to see if we can serve your location.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
