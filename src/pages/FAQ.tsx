import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FAQ from '../components/FAQ';
import Breadcrumbs from '../components/Breadcrumbs';
import LocalBusinessSchema from '../components/LocalBusinessSchema';

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

  return (
    <>
      <SEO
        title="Frequently Asked Questions | Jax Sod"
        description="Find answers to common questions about sod installation, maintenance, and services in Jacksonville, FL. Contact Jax Sod for more information."
        canonicalUrl="/faq"
      />
      
      {/* LocalBusiness Schema */}
      <LocalBusinessSchema
        type="LandscapeService"
        name="Jax Sod"
        telephone="904-901-1457"
        description="Professional sod installation services in Jacksonville, FL."
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
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs />

      <main className="container mx-auto px-4 py-16">
        <section className="text-center max-w-5xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-green-800 mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 mb-10">
            Get answers to the most common questions about sod installation, maintenance, and our services in Jacksonville, FL.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-12">
            Sod Installation FAQs
          </h2>
          <FAQ items={installationFAQs} />
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-12">
            Sod Maintenance FAQs
          </h2>
          <FAQ items={maintenanceFAQs} />
        </section>

        {/* Call to Action */}
        <section className="text-center py-16">
          <h2 className="text-4xl font-bold text-green-700 mb-6">Need More Information?</h2>
          <p className="text-xl text-gray-700 mb-10">
            Contact us today to learn more about our sod installation and maintenance services.
          </p>
          <Link
            to="/contact"
            className="bg-green-600 text-white px-10 py-4 rounded-lg inline-flex items-center hover:bg-green-700 transition"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>
      </main>
    </>
  );
}
