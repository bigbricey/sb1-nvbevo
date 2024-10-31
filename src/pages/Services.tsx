import React from 'react';
import {
  Truck,
  Shovel,
  Droplet,
  CheckCircle,
  Ruler,
  Sun,
  Phone,
  Star,
  Shield,
  Award,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Services() {
  return (
    <>
      <SEO
        title="Sod Installation Services in Jacksonville, FL | Jax Sod"
        description="Professional sod installation services in Jacksonville, FL. Offering soil preparation, premium sod varieties, expert installation, and aftercare support. Call (904) 901-1457 for a free estimate."
      />

      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-green-800 mb-6">
              Professional Sod Installation Services in Jacksonville, FL
            </h1>
            <p className="text-xl text-gray-700">
              Transform your lawn with our comprehensive sod services. From soil preparation to aftercare, we ensure a lush, healthy lawn that enhances your property's curb appeal.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Why Choose Jax Sod
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1" size={24} />
                <span>
                  <strong>Experienced Professionals:</strong> Over 37 years of experience in sod installation.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1" size={24} />
                <span>
                  <strong>Quality Materials:</strong> We use only premium, Grade-A sod varieties suitable for Florida's climate.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1" size={24} />
                <span>
                  <strong>Customer Satisfaction:</strong> 1000+ happy customers and counting.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1" size={24} />
                <span>
                  <strong>Licensed & Insured:</strong> Peace of mind knowing your project is in safe hands.
                </span>
              </li>
            </ul>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Soil Preparation */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Shovel className="text-green-600 h-12 w-12 mb-4" />
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Soil Preparation
              </h2>
              <p className="text-gray-700 mb-4">
                Proper soil preparation is crucial for the success of your new sod. Our team conducts thorough soil assessments to ensure optimal growing conditions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Professional soil testing and pH balancing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Removal of old grass and debris</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Grading and leveling for proper drainage</span>
                </li>
              </ul>
            </div>

            {/* Premium Sod Varieties */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Sun className="text-green-600 h-12 w-12 mb-4" />
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Premium Sod Varieties
              </h2>
              <p className="text-gray-700 mb-4">
                Choose from a wide selection of top-quality sod varieties that thrive in Florida's climate.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>
                    <strong>St. Augustine:</strong> Ideal for shaded areas with a lush appearance.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>
                    <strong>Zoysia:</strong> Drought-resistant with a fine texture and rich green color.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>
                    <strong>Bermuda:</strong> Perfect for sunny areas and high-traffic lawns.
                  </span>
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  to="/sod-types"
                  className="text-green-600 hover:underline"
                >
                  Learn more about our sod varieties &rarr;
                </Link>
              </div>
            </div>

            {/* Professional Installation */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Truck className="text-green-600 h-12 w-12 mb-4" />
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Professional Installation
              </h2>
              <p className="text-gray-700 mb-4">
                Our expert team ensures that your sod is installed correctly for long-lasting results.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Precision cutting and fitting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Seamless integration with existing landscapes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Efficient and timely project completion</span>
                </li>
              </ul>
            </div>

            {/* Aftercare Support */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Droplet className="text-green-600 h-12 w-12 mb-4" />
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Aftercare Support
              </h2>
              <p className="text-gray-700 mb-4">
                We provide comprehensive aftercare instructions to help your new lawn thrive.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Customized watering schedules</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Initial care guidelines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Ongoing customer support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Services Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Additional Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Irrigation System Installation */}
              <div>
                <h3 className="text-2xl font-semibold text-green-600 mb-2">
                  Irrigation System Installation
                </h3>
                <p className="text-gray-700">
                  Ensure your lawn receives the right amount of water with our custom irrigation solutions.
                </p>
              </div>
              {/* Free Consultation */}
              <div>
                <h3 className="text-2xl font-semibold text-green-600 mb-2">
                  Free Consultation & Estimates
                </h3>
                <p className="text-gray-700">
                  Contact us for a no-obligation consultation to discuss your lawn needs.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Ready to Transform Your Lawn?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact us today for a free estimate and let us bring your dream lawn to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:9049011457"
                className="bg-white text-green-800 border border-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
              >
                Call (904) 901-1457
              </a>
              <Link
                to="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 italic">
                  "Jax Sod did an amazing job transforming our backyard. The team was professional and the quality of work exceeded our expectations."
                </p>
                <p className="text-gray-700 mt-4 font-semibold">
                  - Jane D., Jacksonville, FL
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 italic">
                  "Highly recommend Jax Sod for their exceptional service and attention to detail. Our new lawn looks fantastic!"
                </p>
                <p className="text-gray-700 mt-4 font-semibold">
                  - Mike S., St. Augustine, FL
                </p>
              </div>
            </div>
          </div>

          {/* Certifications and Badges */}
          <div className="mt-16 flex items-center justify-center space-x-8">
            <img src="/images/bbb-rating.png" alt="BBB A+ Rating" className="h-16" />
            <img src="/images/angies-list-super-service.png" alt="Angie's List Super Service Award" className="h-16" />
            <img src="/images/houzz-badge.png" alt="Houzz Recommended" className="h-16" />
            <img src="/images/licensed-insured.png" alt="Licensed & Insured" className="h-16" />
          </div>
        </div>
      </div>
    </>
  );
}
