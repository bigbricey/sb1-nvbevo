import React from 'react';
import {
  Award,
  ThumbsUp,
  Truck,
  Users,
  Shield,
  Leaf,
  Phone,
  MapPin,
} from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jax Sod',
    url: 'https://www.jaxsod.com',
    logo: 'https://www.jaxsod.com/logo.jpg',
    sameAs: [
      'https://www.facebook.com/jaxsod',
      'https://www.instagram.com/jaxsod',
      'https://twitter.com/jaxsod',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-904-901-1457',
      contactType: 'Customer Service',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1234 Jacksonville St.',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      postalCode: '32099',
      addressCountry: 'US',
    },
  };

  return (
    <>
      <SEO
        title="About Jax Sod | Jacksonville's Premier Sod Installation Company"
        description="Learn about Jax Sod, Jacksonville's trusted sod installation experts. With over 37 years of experience, we provide premium sod solutions in Northeast Florida."
        schema={aboutSchema}
      />

      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Page Header */}
            <h1 className="text-5xl font-bold text-green-800 mb-10 text-center">
              About Jax Sod
            </h1>

            {/* Company Overview */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-16">
              <p className="text-xl text-gray-700 mb-6">
                Jax Sod is Northeast Florida's premier sod installation company, serving Jacksonville, St. Augustine, and surrounding areas. With over 37 years of experience, we specialize in transforming lawns into lush, green spaces that enhance the beauty and value of your property.
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Our Mission */}
                <div>
                  <h2 className="text-3xl font-semibold text-green-700 mb-4">
                    Our Mission
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our mission is to provide Jacksonville property owners with the highest quality sod installation services. We are committed to delivering beautiful, lasting results through professional expertise and premium materials, ensuring complete customer satisfaction.
                  </p>
                </div>

                {/* Our Vision */}
                <div>
                  <h2 className="text-3xl font-semibold text-green-700 mb-4">
                    Our Vision
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We envision a community where every lawn reflects the natural beauty of Florida. By offering exceptional sod services, we aim to be the leading provider in Northeast Florida, setting the standard for quality and professionalism in the industry.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
                Why Choose Jax Sod?
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                {/* Experience and Expertise */}
                <div className="flex items-start">
                  <Award className="text-green-600 mr-4 mt-1" size={32} />
                  <div>
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">
                      Experience & Expertise
                    </h3>
                    <p className="text-gray-700">
                      With over 37 years in the business, our team has the knowledge and skills to handle any sod installation project, big or small.
                    </p>
                  </div>
                </div>

                {/* Quality Materials */}
                <div className="flex items-start">
                  <Leaf className="text-green-600 mr-4 mt-1" size={32} />
                  <div>
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">
                      Premium Quality Sod
                    </h3>
                    <p className="text-gray-700">
                      We source only the highest-grade sod varieties from trusted local growers, ensuring a healthy and vibrant lawn.
                    </p>
                  </div>
                </div>

                {/* Customer Satisfaction */}
                <div className="flex items-start">
                  <ThumbsUp className="text-green-600 mr-4 mt-1" size={32} />
                  <div>
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">
                      Customer-Centric Approach
                    </h3>
                    <p className="text-gray-700">
                      Your satisfaction is our top priority. We work closely with you to meet your specific needs and exceed your expectations.
                    </p>
                  </div>
                </div>

                {/* Licensed & Insured */}
                <div className="flex items-start">
                  <Shield className="text-green-600 mr-4 mt-1" size={32} />
                  <div>
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">
                      Licensed & Insured
                    </h3>
                    <p className="text-gray-700">
                      We are fully licensed and insured, giving you peace of mind knowing your property is in safe hands.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Customer Testimonials */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
                What Our Customers Say
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 italic">
                    "Jax Sod transformed our front yard into a beautiful green space. Their team was professional, efficient, and exceeded our expectations."
                  </p>
                  <p className="text-gray-700 mt-4 font-semibold">
                    - Sarah W., Jacksonville, FL
                  </p>
                </div>
                {/* Testimonial 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 italic">
                    "We couldn't be happier with the quality of work provided by Jax Sod. They truly care about their customers and the results show it."
                  </p>
                  <p className="text-gray-700 mt-4 font-semibold">
                    - David L., St. Augustine, FL
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-green-800 text-white p-12 rounded-lg text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Lawn?
              </h2>
              <p className="text-xl mb-8">
                Experience the Jax Sod difference. Contact us today for a free consultation and estimate.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="tel:9049011457"
                  className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
                >
                  Call Us at (904) 901-1457
                </a>
                <a
                  href="/contact"
                  className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
                >
                  Get a Free Quote
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
