// TODO: The following imports require TypeScript type declarations.
// Run: npm install --save-dev @types/react-router-dom
// If you still encounter errors with lucide-react, try updating the package:
// npm update lucide-react
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
  Info,
  MapPin,
  Calendar,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceSchema from '../components/ServiceSchema';
import BreadcrumbListSchema from '../components/BreadcrumbListSchema';
import RelatedContent from '../components/RelatedContent';
import useRelatedContent from '../hooks/useRelatedContent';

export default function Services() {
  // Get related content for the Services page
  const relatedLinks = useRelatedContent();

  return (
    <>
      <SEO
        title="Sod Installation & Lawn Services Jacksonville FL | Jax Sod"
        description="Complete sod services in Jacksonville: installation, soil prep, grading, irrigation & maintenance. Quality St. Augustine & Zoysia grass. Call (904) 901-1457."
        canonicalUrl="/services"
      />

      {/* Service Schema for main sod installation service */}
      <ServiceSchema
        name="Professional Sod Installation Services"
        description="Complete sod installation services in Jacksonville, FL. Our professional team handles everything from soil preparation to final installation and aftercare guidance."
        provider={{
          name: "Jax Sod",
          url: "https://www.jaxsod.com",
          telephone: "904-901-1457",
          address: {
            streetAddress: "PO Box 3",
            addressLocality: "Green Cove Springs",
            addressRegion: "FL",
            postalCode: "32043",
            addressCountry: "US"
          }
        }}
        serviceType="Sod Installation"
        areaServed={["Jacksonville", "St. Augustine", "Orange Park", "Middleburg", "Fleming Island"]}
        image="https://www.jaxsod.com/images/services/sod-installation.jpg"
        url="https://www.jaxsod.com/services"
        estimatedDuration="P1D"
        serviceOutput="A professionally installed, lush green lawn with premium sod varieties"
      />

      {/* LocalBusiness Schema with Service-specific details */}
      <LocalBusinessSchema
        type="LandscapeService"
        name="Jax Sod - Jacksonville Sod Installation Services"
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
          geoRadius: "50000",
          addressLocality: ["Jacksonville", "St. Augustine", "Orange Park", "Middleburg", "Fleming Island"]
        }}
        services={[
          {
            name: "Professional Sod Installation",
            description: "Complete sod installation services including soil preparation and placement"
          },
          {
            name: "Soil Preparation",
            description: "Proper grading, tilling, and soil amendments to ensure optimal sod growth"
          },
          {
            name: "Sod Removal",
            description: "Removal of existing grass or damaged sod before new installation"
          },
          {
            name: "Lawn Care Consultation",
            description: "Expert advice on maintaining your new sod lawn for optimal results"
          }
        ]}
      />
      
      {/* BreadcrumbList Schema */}
      <BreadcrumbListSchema
        items={[
          { name: 'Home', item: 'https://www.jaxsod.com/' },
          { name: 'Services', item: 'https://www.jaxsod.com/services' }
        ]}
      />
      
      {/* Breadcrumbs for navigation */}
      <Breadcrumbs />

      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-green-800 mb-6">
              Professional Sod Installation Services in Jacksonville, FL
            </h1>
            <p className="text-xl text-gray-700">
              Transform your lawn with our straightforward, no-nonsense sod services. We remove your old lawn, haul away the debris, and install beautiful new sod that enhances your property's curb appeal.
            </p>
          </div>

          {/* Introduction Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              The Jacksonville Sod Installation Experts
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Since 1987, Jax Sod has been Northeast Florida's premier sod installation company, serving Jacksonville, St. Augustine, Orange Park, and surrounding communities. Our straightforward approach to lawn transformation has helped over 1,000 homeowners and businesses achieve the perfect lawn that thrives in Florida's unique climate.
              </p>
              <p>
                Jacksonville's hot, humid summers and mild winters create specific challenges for maintaining a healthy lawn. Our deep knowledge of local conditions and climate-appropriate grass varieties ensures that your new lawn isn't just beautiful on installation day—it stays vibrant and healthy for years to come.
              </p>
              <p>
                Whether you're a homeowner looking to enhance your property's curb appeal, a new construction project requiring complete landscape development, or a commercial property manager maintaining multiple locations, our professional team delivers exceptional results tailored to your specific needs.
              </p>
            </div>
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
                  <strong>Experienced Professionals:</strong> Over 37 years of experience in sod installation throughout Northeast Florida. Our team has installed sod in every neighborhood of Jacksonville, from Mandarin to Northside, and understands the unique conditions throughout the region.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1" size={24} />
                <span>
                  <strong>Quality Materials:</strong> We use only premium, Grade-A sod varieties suitable for Florida's climate. Our sod is harvested fresh from local Florida farms and delivered directly to your property to ensure maximum viability.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1" size={24} />
                <span>
                  <strong>Customer Satisfaction:</strong> 1000+ happy customers and counting across Jacksonville, St. Augustine, and Orange Park. Our 5-star reviews reflect our commitment to exceptional service from initial consultation through final inspection.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1" size={24} />
                <span>
                  <strong>Licensed & Insured:</strong> Peace of mind knowing your project is in safe hands. We maintain full licensing and insurance coverage that exceeds industry standards and Jacksonville municipal requirements.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1" size={24} />
                <span>
                  <strong>Straightforward Process:</strong> We don't overcomplicate things. Our efficient three-step process (remove old lawn, haul away debris, install new sod) gets the job done right without unnecessary steps or expenses.
                </span>
              </li>
            </ul>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Sod Removal */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Shovel className="text-green-600 h-12 w-12 mb-4" />
              <h3 className="text-3xl font-bold text-green-700 mb-4">
                Professional Sod Removal
              </h3>
              <p className="text-gray-700 mb-4">
                The first step in transforming your lawn is properly removing the existing grass and weeds. We use professional-grade sod cutters to efficiently strip away old turf, creating a clean slate for your new lawn.
              </p>
              <p className="text-gray-700 mb-4">
                Many Jacksonville properties have old, damaged, or disease-prone lawns that need complete replacement. Our removal process addresses these issues by completely eliminating the old turf and associated problems.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Complete removal of old grass using professional sod cutters</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Thorough clearing of weeds and unwanted vegetation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Debris collection and proper disposal at local facilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Site preparation to ensure proper grading and drainage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Careful work around existing landscape features and irrigation</span>
                </li>
              </ul>
            </div>

            {/* Premium Sod Varieties */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Sun className="text-green-600 h-12 w-12 mb-4" />
              <h3 className="text-3xl font-bold text-green-700 mb-4">
                Premium Sod Varieties
              </h3>
              <p className="text-gray-700 mb-4">
                Choose from a wide selection of top-quality sod varieties that thrive in Jacksonville's unique climate. Each grass type is carefully selected based on your property's specific conditions, including sun exposure and intended lawn use.
              </p>
              <p className="text-gray-700 mb-4">
                Our sod is sourced from certified Florida growers who specialize in cultivating grass varieties that perform exceptionally well in Northeast Florida's hot, humid climate with frequent afternoon thunderstorms.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>
                    <strong>St. Augustine Floratam:</strong> Jacksonville's most popular choice, ideal for both sun and partial shade with excellent heat tolerance and a lush, carpet-like appearance.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>
                    <strong>Zoysia:</strong> Drought-resistant with a fine texture and rich green color, perfect for Jacksonville homeowners seeking a low-maintenance, water-efficient option.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>
                    <strong>Bermuda:</strong> Perfect for sunny areas and high-traffic lawns in Jacksonville's coastal communities and athletic fields.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>
                    <strong>Centipede:</strong> Low-maintenance option ideal for Jacksonville's soil conditions with excellent heat tolerance.
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
              <h3 className="text-3xl font-bold text-green-700 mb-4">
                Professional Installation
              </h3>
              <p className="text-gray-700 mb-4">
                Our expert team ensures that your sod is installed correctly for long-lasting results. We follow a meticulous installation process developed over 37 years of serving Jacksonville homes and businesses.
              </p>
              <p className="text-gray-700 mb-4">
                Jacksonville's climate presents specific challenges for sod installation, including intense heat during summer months. Our installation schedule and techniques are adapted to local conditions, ensuring optimal establishment even during challenging weather periods.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Precision cutting and fitting around Jacksonville landscape features, irrigation systems, and hardscape elements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Tight seam placement to prevent weed invasion and ensure a seamless appearance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Proper sod staggering pattern (like bricklaying) for strength and stability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Rolling of newly installed sod to eliminate air pockets and ensure soil contact</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Initial deep watering to kickstart root establishment</span>
                </li>
              </ul>
            </div>

            {/* Aftercare Support */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Droplet className="text-green-600 h-12 w-12 mb-4" />
              <h3 className="text-3xl font-bold text-green-700 mb-4">
                Aftercare Support
              </h3>
              <p className="text-gray-700 mb-4">
                We provide straightforward aftercare instructions to help your new lawn thrive in Jacksonville's climate. Our practical advice comes from decades of real-world experience installing sod throughout Northeast Florida.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Customized watering schedules based on your specific grass type and local weather conditions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Practical advice on when to resume normal lawn activities and traffic</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Recommendations for seasonal maintenance to keep your lawn looking its best</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
                  <span>Ongoing customer support if you have questions about your new lawn</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <div className="flex items-center mb-6">
              <MapPin className="text-green-600 h-8 w-8 mr-3" />
              <h2 className="text-3xl font-bold text-green-700">
                Service Areas in Northeast Florida
              </h2>
            </div>
            <p className="text-gray-700 mb-6">
              Jax Sod proudly serves homeowners and businesses throughout Northeast Florida. Our extensive knowledge of local conditions and climate challenges allows us to provide exceptional service tailored to each community's specific needs.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-bold text-green-800 mb-2">Jacksonville</h3>
                <p className="text-sm text-gray-700">Including Mandarin, Southside, Arlington, Northside, Riverside, Springfield, and San Marco</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-bold text-green-800 mb-2">St. Augustine</h3>
                <p className="text-sm text-gray-700">Including St. Augustine Beach, Vilano Beach, and World Golf Village</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-bold text-green-800 mb-2">Orange Park</h3>
                <p className="text-sm text-gray-700">Including Fleming Island, Oakleaf, and Middleburg</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-bold text-green-800 mb-2">Ponte Vedra</h3>
                <p className="text-sm text-gray-700">Including Nocatee, Jacksonville Beach, and Neptune Beach</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-bold text-green-800 mb-2">Fernandina Beach</h3>
                <p className="text-sm text-gray-700">Including Amelia Island and Yulee</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-bold text-green-800 mb-2">Green Cove Springs</h3>
                <p className="text-sm text-gray-700">Including Penney Farms and Keystone Heights</p>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/location" className="text-green-600 hover:underline">
                View our complete service area coverage &rarr;
              </Link>
            </div>
          </div>

          {/* Seasonal Timing Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <div className="flex items-center mb-6">
              <Calendar className="text-green-600 h-8 w-8 mr-3" />
              <h2 className="text-3xl font-bold text-green-700">
                Best Time for Sod Installation in Jacksonville
              </h2>
            </div>
            <p className="text-gray-700 mb-6">
              While Jacksonville's mild climate allows for year-round sod installation, certain seasons offer optimal conditions for faster establishment and reduced water requirements.
            </p>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-bold text-green-800 mb-2">Spring (March-May)</h3>
                <p className="text-sm text-gray-700"><span className="font-bold text-green-700">Excellent</span>: Ideal soil temperatures and moderate rainfall help new sod establish quickly before summer heat.</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-bold text-green-800 mb-2">Summer (June-August)</h3>
                <p className="text-sm text-gray-700"><span className="font-bold text-amber-600">Good</span>: Fast growth but requires additional watering during hot, dry periods common in Jacksonville summers.</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-bold text-green-800 mb-2">Fall (September-November)</h3>
                <p className="text-sm text-gray-700"><span className="font-bold text-green-700">Excellent</span>: Cooling temperatures and typically reliable rainfall create ideal conditions for root development.</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-bold text-green-800 mb-2">Winter (December-February)</h3>
                <p className="text-sm text-gray-700"><span className="font-bold text-amber-600">Good</span>: Jacksonville's mild winters allow installation but growth will be slower until spring.</p>
              </div>
            </div>
            <p className="text-gray-700">
              Our experienced team can help you determine the optimal timing for your specific project, taking into account your location in Jacksonville, irrigation setup, and grass variety.
            </p>
          </div>

          {/* Frequently Asked Questions */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Frequently Asked Questions About Sod Installation in Jacksonville
            </h2>
            <FAQ
              title="Sod Installation FAQs for Jacksonville Homeowners"
              items={[
                {
                  question: "How long does it take for newly installed sod to root in Jacksonville?",
                  answer: "In Jacksonville's climate, new sod typically begins rooting within 10-14 days during the growing season (March-October). Complete root establishment usually takes 4-6 weeks for St. Augustine and similar timeframes for other varieties. Our aftercare guidance helps ensure optimal rooting conditions specific to Northeast Florida's climate."
                },
                {
                  question: "How often should I water new sod in Jacksonville?",
                  answer: "For the first 10-14 days after installation in Jacksonville, water your new sod 2-3 times daily for about 15-20 minutes per session, ideally in the early morning and mid-afternoon. After roots begin establishing, reduce to once daily for the next week, then transition to 2-3 times weekly. This schedule may need adjustment based on Jacksonville's rainfall patterns and summer heat."
                },
                {
                  question: "What is the best sod variety for Jacksonville homes?",
                  answer: "St. Augustine Floratam is the most popular choice for Jacksonville homes due to its excellent adaptation to our climate, tolerance to both sun and partial shade, and beautiful appearance. However, the best variety depends on your specific property conditions. Zoysia is excellent for drought resistance, while Bermuda works well for high-traffic areas. We provide personalized recommendations based on your yard's specific conditions."
                },
                {
                  question: "Can you install sod over my existing lawn?",
                  answer: "We don't recommend installing new sod over existing grass. Our process involves completely removing the old lawn with a sod cutter, hauling away the debris, and then installing fresh sod on the cleared ground. This approach prevents issues with root competition, uneven growth, and disease transfer that can occur when new sod is laid over old grass."
                },
                {
                  question: "How long should I stay off newly installed sod?",
                  answer: "We recommend minimizing foot traffic on newly installed sod in Jacksonville for at least 2-3 weeks. This allows the roots to properly establish in our local soil conditions. After that initial period, light traffic is acceptable, but wait 4-6 weeks before resuming normal lawn activities or placing furniture on the new grass."
                }
              ]}
            />
          </div>

          {/* Call to Action */}
          <div className="bg-green-700 text-white p-10 rounded-lg shadow-xl text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Jacksonville Lawn?</h2>
            <p className="text-xl mb-8">
              Contact our team today for a free, no-obligation estimate tailored to your property's specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="tel:9049011457"
                className="flex items-center bg-white text-green-700 px-6 py-3 rounded-lg font-bold text-lg hover:bg-green-100 transition-colors"
              >
                <Phone className="mr-2" size={20} /> (904) 901-1457
              </a>
              <Link
                to="/contact"
                className="flex items-center bg-green-100 text-green-700 px-6 py-3 rounded-lg font-bold text-lg hover:bg-white transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add the related content component at an appropriate place in the page */}
      <div className="container mx-auto px-4 my-16">
        <RelatedContent 
          title="Related Services & Resources" 
          links={relatedLinks}
          showCategories={true}
        />
      </div>
    </>
  );
}
