import React from 'react';
import { CheckCircle, Sprout, Trash2, Truck, ShovelIcon, Droplet } from 'lucide-react';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  return (
    <>
      <SEO
        title="Sod Installation Services - Jax Sod Jacksonville"
        description="Expert sod installation services in Jacksonville and St. Augustine. We offer professional removal of old grass, precise installation of St. Augustine Floratam, Zoysia, and Bermuda sod options, and specialized care instructions."
        canonicalUrl="/services"
      />
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1599594004359-2a54ad96ead3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Professional sod installation in Jacksonville"
          />
          <div className="absolute inset-0 bg-green-900 opacity-75"></div>
        </div>
        <div className="relative">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Sod Installation Services</h1>
            <p className="text-xl text-white mb-8">
              At Jax Sod, we bring 37 years of experience to every lawn we transform in Jacksonville and St. Augustine. Our professional sod installation services are designed to give you a lush, beautiful lawn with minimal disruption and maximum care.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h2 className="text-3xl font-semibold text-green-800 mb-6">Our Sod Installation Process</h2>
              <p className="text-green-800 mb-6">
                Our specialized sod installation process ensures a flawless lawn that will be the envy of your Jacksonville neighborhood. Here's what sets our service apart:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Sprout className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-green-700">Precision Removal</h3>
                    <p className="text-green-800">We use a sod cutter to carefully remove old grass and weeds, minimizing soil disruption and preventing uneven surfaces.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Trash2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-green-700">Complete Cleanup</h3>
                    <p className="text-green-800">All old grass and weeds are removed and hauled away, leaving your Jacksonville property clean and ready for new sod.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-green-700">Weed Control</h3>
                    <p className="text-green-800">We spray and kill specific weeds like dollar weed, nutsedge, crabgrass, and Bermuda if necessary, ensuring a clean slate for your new lawn.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Truck className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-green-700">Quality Sod Installation</h3>
                    <p className="text-green-800">We install new, top-quality sod with meticulous care, ensuring a perfect match with any existing grass for a flawless and level look.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShovelIcon className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-green-700">Soil Preparation</h3>
                    <p className="text-green-800">When required, we add soil or yellow sand to achieve ideal conditions for your new lawn, promoting healthy growth from day one.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Droplet className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-green-700">Post-Installation Care</h3>
                    <p className="text-green-800">We provide detailed care instructions to ensure your new sod establishes quickly and stays healthy in Jacksonville's climate.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-green-800 mb-6">Residential Sod Installation</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p>Transform your home's landscape with lush, green sod</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p>Customized solutions for different yard sizes and shapes</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p>Expert advice on sod types best suited for your property</p>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-green-800 mb-6">Commercial Sod Installation</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p>Large-scale sod installation for businesses and organizations</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p>Efficient installation process to minimize business disruption</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p>Ongoing maintenance plans available for commercial properties</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-green-800 mb-6">Why Choose Jax Sod for Your Installation?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-green-700">37 Years of Installation Experience</h3>
                    <p className="text-green-800">Our extensive knowledge ensures your lawn receives the best care possible, tailored to Jacksonville's unique climate.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-green-700">Local Jacksonville Expertise</h3>
                    <p className="text-green-800">We understand Jacksonville's unique climate and soil conditions, ensuring optimal sod selection and installation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-green-700">Installation Quality Guarantee</h3>
                    <p className="text-green-800">We stand behind our installation work with a satisfaction guarantee, ensuring your new lawn thrives.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-green-700">Personalized Installation Service</h3>
                    <p className="text-green-800">We tailor our installation approach to meet your specific lawn needs and preferences.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-3xl font-semibold text-white mb-6">Ready to Transform Your Jacksonville Lawn?</h2>
              <p className="text-xl text-white mb-8">Contact us today for a free sod installation estimate and experience the Jax Sod difference!</p>
              <a href="/contact" className="bg-white text-green-700 font-semibold py-3 px-6 rounded-lg hover:bg-green-100 transition duration-300">
                Get a Free Installation Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;