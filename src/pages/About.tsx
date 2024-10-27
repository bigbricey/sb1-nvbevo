import React from 'react';
import { User, Calendar, MapPin, Wrench, ThumbsUp, Award, Sprout } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Jax Sod - Expert Sod Installation in Jacksonville Since 2001"
        description="Learn about Jax Sod's 37 years of experience in sod installation. Founded by Brice Wilkinson, we provide top-quality St. Augustine Floratam sod installation and personalized service in Jacksonville and St. Augustine."
        canonicalUrl="/about"
      />
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Lush green lawn with trees in Jacksonville"
          />
          <div className="absolute inset-0 bg-green-900 opacity-50"></div>
        </div>
        <div className="relative bg-opacity-75 bg-green-50">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">About Jax Sod: Jacksonville's Sod Installation Experts</h1>
            <div className="grid md:grid-cols-2 gap-12">
              <article className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Our History</h2>
                  <p className="text-lg mb-6">
                    Jax Sod was founded by Brice Wilkinson, a seasoned expert with 37 years of hands-on experience in landscaping and sod installation. Brice's journey in the green industry began at the young age of 13 in Naples, FL, laying the foundation for his expertise in creating beautiful, lush lawns through expert sod installation.
                  </p>
                  <p className="text-lg mb-6">
                    In 2001, Brice moved to Jacksonville and focused his skills on sod installation, perfecting his craft and establishing Jax Sod as a leader in the industry. Over the years, the company has evolved through different business names, but its commitment to excellence in sod installation has remained constant.
                  </p>
                  <p className="text-lg mb-6">
                    Today, Jax Sod is an incorporated company that stands out in the Jacksonville and St. Augustine areas for its unparalleled quality in sod installation and personalized service. What truly sets Jax Sod apart is Brice's hands-on approach to every installation project.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
                  // Content
                </section>
              </article>
              <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-green-700 mb-6">The Jax Sod Installation Difference</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <User className="text-green-500 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold">Personal Touch in Installation</h3>
                      <p>Brice personally oversees every sod installation project, ensuring top-quality results that meet his high standards.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="text-green-500 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold">37 Years of Installation Experience</h3>
                      <p>Decades of expertise in landscaping and sod installation, starting from age 13.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="text-green-500 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold">Local Jacksonville Expertise</h3>
                      <p>Specialized knowledge of Jacksonville and St. Augustine soil and climate conditions for optimal sod installation since 2001.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="text-green-500 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold">Precision Sod Installation</h3>
                      <p>Expert installation of St. Augustine Floratam and other sod varieties, perfected over years of dedicated service in Jacksonville.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ThumbsUp className="text-green-500 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold">Customer Satisfaction in Every Installation</h3>
                      <p>Known for outstanding communication, attention to detail, and perfect execution on every sod installation job.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-green-500 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold">Installation Quality Guarantee</h3>
                      <p>Committed to delivering the best sod installation in Jacksonville, with results guaranteed to exceed expectations.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center">
              <h2 className="text-3xl font-semibold text-white mb-6">Ready for Professional Sod Installation?</h2>
              <p className="text-xl text-white mb-8">Experience the Jax Sod difference in your Jacksonville lawn.</p>
              <a href="/contact" className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
                Get a Free Installation Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;