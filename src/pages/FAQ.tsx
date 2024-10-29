import React from 'react';

const FAQ: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Frequently Asked Questions (FAQ)</h1>
      <p className="text-gray-600 mb-8">Find answers to common questions about our sod installation services.</p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-6">Installation Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-green-600 mb-3">What is the best time to install sod?</h3>
            <p className="text-gray-700">The best time to install sod is during the cooler months of spring and fall when temperatures are mild. This allows the grass to establish strong roots before facing extreme weather conditions.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-green-600 mb-3">Can I install sod myself?</h3>
            <p className="text-gray-700">While it's possible to install sod yourself, hiring professionals ensures proper installation and better results. Professional installation includes proper soil preparation, precise cutting, and expert placement for optimal growth.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-green-600 mb-3">How long does it take for sod to root?</h3>
            <p className="text-gray-700">Sod typically takes 2-3 weeks to establish roots, depending on weather conditions and care. During this time, proper watering and minimal foot traffic are crucial for successful establishment.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-6">Maintenance Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-green-600 mb-3">How often should I water my new sod?</h3>
            <p className="text-gray-700">New sod should be watered daily for the first two weeks, then gradually reduce to every other day. The soil should remain moist but not waterlogged. Morning watering is recommended for best results.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-green-600 mb-3">What type of sod is best for shaded areas?</h3>
            <p className="text-gray-700">For shaded areas, consider using a shade-tolerant sod variety like Zoysia or St. Augustine. These varieties can thrive with as little as 4-6 hours of direct sunlight daily.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-green-600 mb-3">When can I mow my new sod?</h3>
            <p className="text-gray-700">Wait at least 2-3 weeks after installation before the first mowing. This allows the roots to establish properly. When you do mow, ensure the grass is at least 3 inches tall.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-6">Service Area Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-green-600 mb-3">What areas do you service?</h3>
            <p className="text-gray-700">We service Jacksonville, St. Augustine, Orange Park, and Ponte Vedra areas. Contact us to confirm if we cover your specific location.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-green-600 mb-3">Do you offer free estimates?</h3>
            <p className="text-gray-700">Yes, we provide free estimates for all sod installation projects. Contact us to schedule an on-site evaluation of your property.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
