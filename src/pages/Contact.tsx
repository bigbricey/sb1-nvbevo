import React from 'react';
import { Phone, Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function Contact() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jax Sod',
    url: 'https://www.jaxsod.com',
    logo: 'https://www.jaxsod.com/logo.jpg',
    email: 'brice@jaxsod.com',
    sameAs: [
      'https://www.facebook.com/jaxsod',
      'https://www.instagram.com/jaxsod',
      'https://twitter.com/jaxsod',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-904-901-1457',
      email: 'brice@jaxsod.com',
      contactType: 'Customer Service',
    }
  };

  return (
    <>
      <SEO
        title="Contact Jax Sod | Get Your Free Sod Installation Estimate"
        description="Contact Jax Sod for professional sod installation services in Jacksonville and St. Augustine. Get your free estimate today!"
        schema={contactSchema}
      />

      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Page Header */}
            <h1 className="text-5xl font-bold text-green-800 mb-10 text-center">
              Contact Us
            </h1>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-3xl font-semibold text-green-700 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-gray-700 mb-8">
                    Ready to transform your lawn? Contact us today for a free consultation and estimate. Our team is here to help you achieve the perfect lawn.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Phone className="text-green-600 mr-4" size={24} />
                      <div>
                        <p className="font-semibold text-gray-800">Phone</p>
                        <a href="tel:9049011457" className="text-green-600 hover:text-green-700">
                          (904) 901-1457
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Mail className="text-green-600 mr-4" size={24} />
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <a href="mailto:brice@jaxsod.com" className="text-green-600 hover:text-green-700">
                          brice@jaxsod.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-green-700 mb-4">
                      Service Areas
                    </h3>
                    <p className="text-gray-700">
                      We proudly serve Jacksonville, St. Augustine, Orange Park, Ponte Vedra, and surrounding areas in Northeast Florida.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
