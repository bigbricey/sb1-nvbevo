import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FAQ from '../components/FAQ';
import Breadcrumbs from '../components/Breadcrumbs';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import FAQPageSchema from '../components/FAQPageSchema';
import BreadcrumbListSchema from '../components/BreadcrumbListSchema';

export default function FAQPage() {
  // Installation FAQs
  const installationFAQs = [
    {
      question: "What types of sod do you offer?",
      answer: "We offer a variety of premium Grade-A sod types including St. Augustine, Zoysia, and Bermuda, suitable for different lawn needs and preferences."
    },
    {
      question: "How do I prepare my lawn for sod installation?",
      answer: "Proper soil preparation is crucial. This includes removing old grass and weeds, grading the soil, and adding nutrient-rich topsoil if necessary. Our team handles all preparation to ensure optimal sod growth."
    },
    {
      question: "How long does sod installation take?",
      answer: "The duration depends on the size of the area and the type of sod. Typically, a standard residential lawn can be completed in one day."
    }
  ];
  
  // Maintenance FAQs
  const maintenanceFAQs = [
    {
      question: "How often should I water my new sod?",
      answer: "New sod should be watered daily for the first two weeks to ensure proper rooting. After that, you can reduce watering to 2-3 times per week."
    },
    {
      question: "When can I mow my new sod?",
      answer: "You can mow your new sod once it has firmly rooted, usually after 2-3 weeks. Ensure your mower blades are sharp to avoid damaging the grass."
    },
    {
      question: "What maintenance does sod require?",
      answer: "Regular watering, mowing, and fertilization are key to maintaining healthy sod. We provide detailed aftercare instructions to help you keep your lawn in top condition."
    }
  ];
  
  // Combine all FAQs for schema
  const allFAQs = [...installationFAQs, ...maintenanceFAQs];

  return (
    <>
      <SEO
        title="Sod Installation FAQs | Cost, Timing & Maintenance | Jax Sod"
        description="Expert answers about sod installation in Jacksonville: costs, best grass types, watering needs, installation times & lawn care. Get all your sod questions answered."
        canonicalUrl="/faq"
      />
      
      {/* FAQ Page Schema */}
      <FAQPageSchema 
        faqs={allFAQs}
        mainEntity={{
          name: "Jax Sod",
          description: "Professional sod installation services in Jacksonville, FL",
          url: "https://www.jaxsod.com",
          logo: "https://www.jaxsod.com/logo.png",
          image: "https://www.jaxsod.com/images/jax-sod-team.jpg",
          sameAs: [
            "https://www.facebook.com/jaxsod",
            "https://www.instagram.com/jaxsod",
            "https://twitter.com/jaxsod"
          ]
        }}
        pageUrl="https://www.jaxsod.com/faq"
        datePublished="2023-01-15"
        dateModified="2023-12-10"
        keywords={[
          "sod installation",
          "sod maintenance",
          "Jacksonville sod",
          "lawn care",
          "grass types",
          "watering new sod",
          "sod cost",
          "sod FAQ"
        ]}
      />
      
      {/* LocalBusiness Schema */}
      <LocalBusinessSchema
        type="LandscapeService"
        name="Jax Sod - Jacksonville Sod Installation FAQs"
        telephone="904-901-1457"
        description="Professional sod installation services in Jacksonville, FL. Find answers to all your questions about sod types, installation, and maintenance."
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
      />
      
      {/* BreadcrumbList Schema */}
      <BreadcrumbListSchema
        items={[
          { name: 'Home', item: 'https://www.jaxsod.com/' },
          { name: 'FAQs', item: 'https://www.jaxsod.com/faq' }
        ]}
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Frequently Asked Questions
        </h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Installation FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Sod Installation
            </h2>
            <div className="border rounded-lg overflow-hidden">
              {installationFAQs.map((faq, index) => (
                <FAQ 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isLast={index === installationFAQs.length - 1}
                  showSchema={false}
                />
              ))}
            </div>
          </section>
          
          {/* Maintenance FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Sod Maintenance
            </h2>
            <div className="border rounded-lg overflow-hidden">
              {maintenanceFAQs.map((faq, index) => (
                <FAQ 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isLast={index === maintenanceFAQs.length - 1}
                  showSchema={false}
                />
              ))}
            </div>
          </section>
          
          {/* Contact Banner */}
          <div className="bg-green-800 text-white p-8 rounded-lg text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Have More Questions?</h2>
            <p className="mb-6">Our team is ready to help you with any additional questions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:904-901-1457"
                className="bg-white text-green-800 px-8 py-3 rounded-lg inline-flex items-center justify-center hover:bg-green-100 transition"
              >
                Call (904) 901-1457
              </a>
              <Link
                to="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg inline-flex items-center justify-center hover:bg-green-700 transition"
              >
                Contact Us <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
