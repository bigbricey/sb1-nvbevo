import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of sod do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a variety of premium Grade-A sod types including St. Augustine, Zoysia, and Bermuda, suitable for different lawn needs and preferences."
        }
      },
      {
        "@type": "Question",
        "name": "How do I prepare my lawn for sod installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proper soil preparation is crucial. This includes removing old grass and weeds, grading the soil, and adding nutrient-rich topsoil if necessary. Our team handles all preparation to ensure optimal sod growth."
        }
      },
      {
        "@type": "Question",
        "name": "How long does sod installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The duration depends on the size of the area and the type of sod. Typically, a standard residential lawn can be completed in one day."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I water my new sod?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "New sod should be watered daily for the first two weeks to ensure proper rooting. After that, you can reduce watering to 2-3 times per week."
        }
      },
      {
        "@type": "Question",
        "name": "When can I mow my new sod?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can mow your new sod once it has firmly rooted, usually after 2-3 weeks. Ensure your mower blades are sharp to avoid damaging the grass."
        }
      },
      {
        "@type": "Question",
        "name": "What maintenance does sod require?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Regular watering, mowing, and fertilization are key to maintaining healthy sod. We provide detailed aftercare instructions to help you keep your lawn in top condition."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Sod Installation FAQ | Expert Tips & Advice | Jax Sod Jacksonville"
        description="Get expert answers about sod installation, lawn maintenance, and care in Jacksonville. Learn about watering schedules, mowing tips, and maintenance from Jax Sod's professionals."
        schema={faqSchema}
        canonicalUrl="/faq"
      />

      <main className="container mx-auto px-4 py-16">
        <section className="text-center max-w-5xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-green-800 mb-8">
            Frequently Asked Questions About Sod Installation
          </h1>
          <p className="text-xl text-gray-700 mb-10">
            Expert answers to common questions about sod installation, maintenance, and lawn care services in Jacksonville and St. Augustine, FL.
          </p>
        </section>

        <section className="mb-20" aria-labelledby="installation-faqs">
          <h2 id="installation-faqs" className="text-4xl font-bold text-green-700 text-center mb-12">
            Sod Installation FAQs
          </h2>
          <div className="space-y-8">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-2xl font-semibold text-green-800 mb-4" itemProp="name">
                What types of sod do you offer?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-700" itemProp="text">
                  We offer a variety of premium Grade-A sod types including St. Augustine, Zoysia, and Bermuda, suitable for different lawn needs and preferences.
                </p>
              </div>
            </div>
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-2xl font-semibold text-green-800 mb-4" itemProp="name">
                How do I prepare my lawn for sod installation?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-700" itemProp="text">
                  Proper soil preparation is crucial. This includes removing old grass and weeds, grading the soil, and adding nutrient-rich topsoil if necessary. Our team handles all preparation to ensure optimal sod growth.
                </p>
              </div>
            </div>
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-2xl font-semibold text-green-800 mb-4" itemProp="name">
                How long does sod installation take?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-700" itemProp="text">
                  The duration depends on the size of the area and the type of sod. Typically, a standard residential lawn can be completed in one day.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20" aria-labelledby="maintenance-faqs">
          <h2 id="maintenance-faqs" className="text-4xl font-bold text-green-700 text-center mb-12">
            Sod Maintenance FAQs
          </h2>
          <div className="space-y-8">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-2xl font-semibold text-green-800 mb-4" itemProp="name">
                How often should I water my new sod?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-700" itemProp="text">
                  New sod should be watered daily for the first two weeks to ensure proper rooting. After that, you can reduce watering to 2-3 times per week.
                </p>
              </div>
            </div>
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-2xl font-semibold text-green-800 mb-4" itemProp="name">
                When can I mow my new sod?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-700" itemProp="text">
                  You can mow your new sod once it has firmly rooted, usually after 2-3 weeks. Ensure your mower blades are sharp to avoid damaging the grass.
                </p>
              </div>
            </div>
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-2xl font-semibold text-green-800 mb-4" itemProp="name">
                What maintenance does sod require?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-700" itemProp="text">
                  Regular watering, mowing, and fertilization are key to maintaining healthy sod. We provide detailed aftercare instructions to help you keep your lawn in top condition.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-green-50 rounded-lg">
          <h2 className="text-4xl font-bold text-green-700 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-700 mb-10">
            Contact our sod installation experts today for personalized advice and a free quote.
          </p>
          <Link
            to="/contact"
            className="bg-green-600 text-white px-10 py-4 rounded-lg inline-flex items-center hover:bg-green-700 transition"
            aria-label="Contact Jax Sod for more information"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </section>
      </main>
    </>
  );
}