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
  Calendar,
  Star,
} from 'lucide-react';
import SEO from '../components/SEO';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import Breadcrumbs from '../components/Breadcrumbs';
import OptimizedImage from '../components/OptimizedImage';
import ReviewSchema from '../components/ReviewSchema';

export default function About() {
  return (
    <>
      <SEO
        title="About Jax Sod | 37+ Years of Expert Lawn Installation in Jacksonville"
        description="Jacksonville's trusted sod experts since 1987. Serving Northeast Florida with premium grass varieties, expert installation, and exceptional customer service."
        canonicalUrl="/about"
      />
      
      {/* LocalBusiness Schema */}
      <LocalBusinessSchema
        type="LandscapeService"
        name="Jax Sod"
        telephone="904-901-1457"
        description="Jacksonville's premier sod installation company with over 37 years of experience serving Northeast Florida. We specialize in premium sod varieties, professional installation, and exceptional customer service."
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
          },
          {
            name: "Sod Delivery",
            description: "Delivery of premium sod varieties to your location"
          }
        ]}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 150
        }}
      />
      
      {/* Reviews Schema for Testimonials */}
      <ReviewSchema
        itemReviewed={{
          name: "Jax Sod - Jacksonville Sod Installation Services",
          description: "Professional sod installation services in Jacksonville, FL. Expert team offering premium Grade-A sod, soil preparation, and lawn care services.",
          image: "https://www.jaxsod.com/images/jax-sod-logo.jpg"
        }}
        reviews={[
          {
            author: "Sarah W.",
            datePublished: "2024-01-15",
            reviewRating: 5,
            reviewBody: "Jax Sod transformed our front yard into a beautiful green space. Their team was professional, efficient, and exceeded our expectations."
          },
          {
            author: "David L.",
            datePublished: "2024-02-20",
            reviewRating: 5,
            reviewBody: "We couldn't be happier with the quality of work provided by Jax Sod. They truly care about their customers and the results show it."
          }
        ]}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 150
        }}
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs />

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

            {/* Company History */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-16">
              <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
                Our History
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="md:w-1/3">
                  <div className="bg-green-100 p-4 rounded-lg">
                    <Calendar className="text-green-600 mx-auto mb-4" size={48} />
                    <h3 className="text-2xl font-semibold text-green-800 text-center mb-2">
                      Est. 1987
                    </h3>
                    <p className="text-gray-700 text-center">
                      Serving Northeast Florida for over 37 years
                    </p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Jax Sod was founded in 1987 by John Thompson, a Jacksonville native with a passion for landscaping and lawn care. What began as a small family business has grown into one of Northeast Florida's most trusted sod installation companies.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Over the decades, we've expanded our service area to include Jacksonville, St. Augustine, Orange Park, and surrounding communities. Throughout our growth, we've maintained our commitment to quality, reliability, and exceptional customer service.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold text-green-800 mb-2">1987-1995</h4>
                  <p className="text-gray-700">Founded as a small family business serving the Jacksonville area</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold text-green-800 mb-2">1996-2010</h4>
                  <p className="text-gray-700">Expanded services to include St. Augustine and surrounding areas</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold text-green-800 mb-2">2011-Present</h4>
                  <p className="text-gray-700">Became Northeast Florida's premier sod installation company</p>
                </div>
              </div>
            </section>
            
            {/* Our Team */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-700 mb-8 text-center">
                Our experienced team of sod installation professionals is dedicated to providing exceptional service and results.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Users className="text-green-600 mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-semibold text-green-800 mb-2">
                    Installation Experts
                  </h3>
                  <p className="text-gray-700">
                    Our installation team has decades of combined experience in sod installation, ensuring your lawn is installed correctly and efficiently.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Leaf className="text-green-600 mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-semibold text-green-800 mb-2">
                    Lawn Care Specialists
                  </h3>
                  <p className="text-gray-700">
                    Our specialists provide expert advice on sod selection, installation, and maintenance to ensure your lawn thrives in Florida's climate.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Phone className="text-green-600 mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-semibold text-green-800 mb-2">
                    Customer Service
                  </h3>
                  <p className="text-gray-700">
                    Our friendly customer service team is always ready to answer your questions and provide support throughout your sod installation journey.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Service Areas */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-16">
              <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
                Areas We Serve
              </h2>
              <p className="text-xl text-gray-700 mb-8 text-center">
                Jax Sod proudly serves the following areas in Northeast Florida:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <MapPin className="text-green-600 mx-auto mb-2" size={24} />
                  <p className="text-gray-700 font-semibold">Jacksonville</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <MapPin className="text-green-600 mx-auto mb-2" size={24} />
                  <p className="text-gray-700 font-semibold">St. Augustine</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <MapPin className="text-green-600 mx-auto mb-2" size={24} />
                  <p className="text-gray-700 font-semibold">Orange Park</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <MapPin className="text-green-600 mx-auto mb-2" size={24} />
                  <p className="text-gray-700 font-semibold">Ponte Vedra</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <MapPin className="text-green-600 mx-auto mb-2" size={24} />
                  <p className="text-gray-700 font-semibold">Fleming Island</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <MapPin className="text-green-600 mx-auto mb-2" size={24} />
                  <p className="text-gray-700 font-semibold">Middleburg</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <MapPin className="text-green-600 mx-auto mb-2" size={24} />
                  <p className="text-gray-700 font-semibold">Green Cove Springs</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <MapPin className="text-green-600 mx-auto mb-2" size={24} />
                  <p className="text-gray-700 font-semibold">Surrounding Areas</p>
                </div>
              </div>
            </section>

            {/* Customer Testimonials */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
                What Our Customers Say
              </h2>
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-amber-500 mr-2 text-xl font-bold">4.9</span>
                  <div className="flex items-center">
                    <Star className="text-amber-500 fill-amber-500 h-6 w-6" />
                    <Star className="text-amber-500 fill-amber-500 h-6 w-6" />
                    <Star className="text-amber-500 fill-amber-500 h-6 w-6" />
                    <Star className="text-amber-500 fill-amber-500 h-6 w-6" />
                    <Star className="text-amber-500 fill-amber-500 h-6 w-6 opacity-90" />
                  </div>
                </div>
                <p className="text-gray-700">Based on 150+ customer reviews</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="flex text-amber-500">
                      <Star className="h-5 w-5 fill-amber-500" />
                      <Star className="h-5 w-5 fill-amber-500" />
                      <Star className="h-5 w-5 fill-amber-500" />
                      <Star className="h-5 w-5 fill-amber-500" />
                      <Star className="h-5 w-5 fill-amber-500" />
                    </div>
                    <span className="ml-2 text-sm text-gray-500">January 2024</span>
                  </div>
                  <p className="text-gray-700 italic">
                    "Jax Sod transformed our front yard into a beautiful green space. Their team was professional, efficient, and exceeded our expectations."
                  </p>
                  <p className="text-gray-700 mt-4 font-semibold">
                    - Sarah W., Jacksonville, FL
                  </p>
                </div>
                {/* Testimonial 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="flex text-amber-500">
                      <Star className="h-5 w-5 fill-amber-500" />
                      <Star className="h-5 w-5 fill-amber-500" />
                      <Star className="h-5 w-5 fill-amber-500" />
                      <Star className="h-5 w-5 fill-amber-500" />
                      <Star className="h-5 w-5 fill-amber-500" />
                    </div>
                    <span className="ml-2 text-sm text-gray-500">February 2024</span>
                  </div>
                  <p className="text-gray-700 italic">
                    "We couldn't be happier with the quality of work provided by Jax Sod. They truly care about their customers and the results show it."
                  </p>
                  <p className="text-gray-700 mt-4 font-semibold">
                    - David L., St. Augustine, FL
                  </p>
                </div>
              </div>
              <div className="text-center mt-8">
                <a href="/reviews" className="text-green-600 hover:underline font-medium">
                  Read more customer reviews →
                </a>
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
