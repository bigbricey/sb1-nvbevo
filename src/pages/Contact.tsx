import React from 'react';
import { Phone, Mail, MessageSquare, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Jax Sod - Get a Free Quote for Sod Installation in Jacksonville"
        description="Contact Jax Sod for expert sod installation services in Jacksonville and St. Augustine. Get a free quote and transform your lawn with our professional installation of high-quality sod options."
        canonicalUrl="/contact"
      />
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1621244335281-d3d3b6a0d6f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Beautiful landscaped yard in Jacksonville"
          />
          <div className="absolute inset-0 bg-green-900 opacity-50"></div>
        </div>
        <div className="relative bg-opacity-75 bg-green-50">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Contact Us for Sod Installation</h1>
            <p className="text-xl text-green-100 mb-8">
              Ready to transform your Jacksonville lawn? We'd love to hear from you! Whether you need a free sod installation estimate or have questions about our services, we're here to help.
            </p>

            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md mb-12">
              <h2 className="text-2xl font-semibold text-green-700 mb-6">Get a Free Sod Installation Estimate</h2>
              <div className="flex items-start mb-6">
                <MessageSquare className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Text Us for Quick Service</h3>
                  <p className="mb-2">For the fastest response, please text us with your name, address, and sod installation needs.</p>
                  <p className="font-semibold text-lg mb-2">Text to: 904-901-1457</p>
                  <p>We'll get back to you within 1-2 days to schedule your sod installation estimate. Estimates are typically done on weekends, but we may be able to accommodate earlier times depending on our work schedule.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-green-700 mb-6">Contact Information</h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Phone className="text-green-500 mr-4" size={24} />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:904-901-1457" className="text-green-600 hover:text-green-700">904-901-1457</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Mail className="text-green-500 mr-4" size={24} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@jaxsod.com" className="text-green-600 hover:text-green-700">info@jaxsod.com</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="text-green-500 mr-4 mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p>Jacksonville, St. Augustine, and surrounding areas in Northeast Florida</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-green-700 mb-6">Business Hours</h2>
                <ul className="space-y-2">
                  <li><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 5:00 PM</li>
                  <li><span className="font-semibold">Saturday:</span> 9:00 AM - 3:00 PM</li>
                  <li><span className="font-semibold">Sunday:</span> Closed</li>
                </ul>
                <p className="mt-4 text-green-700">
                  Sod installation services are available by appointment, including some weekends and evenings to accommodate your schedule.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-3xl font-semibold text-white mb-6">Ready to Transform Your Lawn?</h2>
              <p className="text-xl text-white mb-8">Contact us today to schedule your free sod installation estimate and take the first step towards a beautiful, lush lawn.</p>
              <a href="tel:904-901-1457" className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 inline-flex items-center">
                <Phone className="mr-2" size={20} />
                Call Now: 904-901-1457
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;