import React from 'react';

const FAQ: React.FC = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">
        Frequently Asked Questions (FAQ)
      </h1>
      <p className="text-gray-700 mb-12">
        Find answers to the most common questions about our sod installation services, maintenance tips, and more.
      </p>

      {/* Installation Questions */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-green-700 mb-8">
          Installation Questions
        </h2>

        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium text-green-600 mb-4">
              What is the best time to install sod?
            </h3>
            <p className="text-gray-800 leading-relaxed">
              The optimal time to install sod is during the cooler months of spring and fall when temperatures are mild. This timing allows the grass to establish strong roots without the stress of extreme heat or cold. However, with proper care, sod can be installed at almost any time of the year.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium text-green-600 mb-4">
              Can I install sod myself?
            </h3>
            <p className="text-gray-800 leading-relaxed">
              While DIY sod installation is possible, hiring professionals ensures proper soil preparation, precise installation, and optimal results. Our experts handle everything from removing old grass to leveling the soil and installing the new sod seamlessly.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium text-green-600 mb-4">
              How long does it take for sod to root?
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Sod typically takes about 2 to 3 weeks to establish a strong root system, depending on weather conditions and care practices. During this period, it's crucial to keep the sod well-watered and minimize foot traffic to promote healthy growth.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium text-green-600 mb-4">
              Do you remove the old grass before installing new sod?
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Yes, we thoroughly remove the existing grass and weeds before installing new sod. This process ensures that the new sod has direct contact with the soil, promoting better root establishment and long-term lawn health.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance Questions */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-green-700 mb-8">
          Maintenance Questions
        </h2>

        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium text-green-600 mb-4">
              How often should I water my new sod?
            </h3>
            <p className="text-gray-800 leading-relaxed">
              New sod requires consistent moisture to establish roots. Water your new sod daily for the first two weeks, ensuring the soil is moist but not waterlogged. After the initial period, you can reduce watering to 2-3 times per week, depending on rainfall and temperature.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium text-green-600 mb-4">
              What type of sod is best for shaded areas?
            </h3>
            <p className="text-gray-800 leading-relaxed">
              For shaded areas, we recommend shade-tolerant sod varieties like Zoysia or St. Augustine grass. These grasses thrive with limited sunlight and are ideal for lawns with trees or structures that cast significant shade.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium text-green-600 mb-4">
              When can I mow my new sod?
            </h3>
            <p className="text-gray-800 leading-relaxed">
              You should wait until the sod has firmly rooted into the soil before mowing, which usually takes about 2 to 3 weeks. Ensure the grass blades are at least 3 inches tall and use a sharp mower blade set to a high setting to avoid stressing the new grass.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium text-green-600 mb-4">
              How do I prevent weeds in my new sod?
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Maintaining a healthy lawn is the best defense against weeds. Regular mowing, proper watering, and fertilization create a dense turf that leaves little room for weeds to establish. We also offer weed control services to help keep your lawn pristine.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Questions */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-green-700 mb-8">
          Service Area Questions
        </h2>

        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium text-green-600 mb-4">
              What areas do you service?
            </h3>
            <p className="text-gray-800 leading-relaxed">
              We proudly serve Jacksonville, St. Augustine, Orange Park, Ponte Vedra, and surrounding areas in Florida. If you're unsure whether we cover your location, please <a href="/contact" className="text-green-600 underline">contact us</a> for confirmation.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium text-green-600 mb-4">
              Do you offer free estimates?
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Yes, we provide complimentary, no-obligation estimates for all sod installation projects. Schedule an on-site evaluation by calling us at <a href="tel:+1234567890" className="text-green-600 underline">(123) 456-7890</a> or filling out our <a href="/contact" className="text-green-600 underline">online contact form</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Questions */}
      <section>
        <h2 className="text-3xl font-semibold text-green-700 mb-8">
          Additional Questions
        </h2>

        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium text-green-600 mb-4">
              What payment methods do you accept?
            </h3>
            <p className="text-gray-800 leading-relaxed">
              We accept various payment methods, including cash, checks, and major credit cards like Visa, MasterCard, and American Express. Payment plans are also available upon request.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium text-green-600 mb-4">
              Are your services insured and guaranteed?
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Absolutely. We are fully insured for your peace of mind, and we offer a satisfaction guarantee on all our sod installation services. If you're not happy with the results, we'll make it right.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium text-green-600 mb-4">
              How soon can you start my sod installation project?
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Project start times vary based on current bookings and sod availability. Typically, we can begin within 1 to 2 weeks after the estimate. Contact us to schedule your installation at the earliest convenience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
