import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-green-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-green-800">{question}</h3>
        {isOpen ? <ChevronUp className="text-green-600" /> : <ChevronDown className="text-green-600" />}
      </button>
      {isOpen && <div className="mt-2 text-green-700">{answer}</div>}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs: FAQItemProps[] = [
    {
      question: "How long does sod installation take?",
      answer: "The duration of sod installation depends on the size of your lawn and the complexity of the project. For an average residential lawn in Jacksonville, installation typically takes 1-2 days. Larger properties or those requiring extensive preparation may take longer. We always aim to complete the installation as efficiently as possible while maintaining our high-quality standards."
    },
    {
      question: "How soon after sod installation can I walk on my new lawn?",
      answer: "We recommend avoiding foot traffic on your newly installed sod for at least 2-3 weeks. This allows the roots to establish and the sod to knit together. After this initial period, you can begin light use, but try to minimize heavy traffic for about 4-6 weeks to give your new lawn the best chance to thrive in Jacksonville's climate."
    },
    {
      question: "What type of sod do you recommend for Jacksonville lawns?",
      answer: "For most Jacksonville lawns, we highly recommend St. Augustine Floratam sod. It's well-adapted to our local climate, tolerates heat and humidity well, and provides a lush, green appearance. However, the best choice can depend on factors like sun exposure, soil type, and your specific needs. We also offer other varieties like Zoysia and Bermuda for certain situations. During our consultation, we'll assess your property and recommend the best sod type for your specific conditions."
    },
    {
      question: "How often should I water my new sod?",
      answer: (
        <div>
          <p>Proper watering is crucial for new sod in Jacksonville's climate. Here's a general guideline:</p>
          <ul className="list-disc list-inside mt-2">
            <li>First two weeks: Water daily in the early morning. Avoid evening watering.</li>
            <li>Summer (June-August): You may need to water twice a day—once at 4:00 AM and again at 4:00 PM.</li>
            <li>Third week: Switch to every other day.</li>
            <li>After rooting (around three weeks): Switch to normal watering twice a week.</li>
          </ul>
          <p className="mt-2">Watering time per zone can vary from 20 to 45 minutes depending on factors like sprinkler head type, shade, and soil conditions. We'll provide detailed care instructions specific to your lawn after installation.</p>
        </div>
      ),
    },
    {
      question: "When can I mow my newly installed sod?",
      answer: "Generally, you should wait about three weeks before mowing your new sod, or until it is well-rooted. This may take longer during cooler months in Jacksonville (up to six weeks or more). Mowing too early can damage the sod, especially if the mower pulls up small, unrooted pieces. When you do mow for the first time, ensure your mower blades are sharp and set to a higher cutting height to avoid stressing the new grass."
    },
    {
      question: "Do you offer sod installation year-round in Jacksonville?",
      answer: "Yes, we offer sod installation services all year round in Jacksonville, FL. Our climate allows for successful sod establishment in any season. However, installation during cooler months (late fall to early spring) can be more forgiving if there are any issues with watering. During summer installations, we take extra care to ensure proper hydration of the new sod. If temperatures drop below freezing in winter, we provide specific care instructions to protect your new lawn."
    },
    {
      question: "Can you match new sod to my existing lawn?",
      answer: "Yes, we always aim to match new sod to your existing lawn as closely as possible. This is particularly important for partial lawn replacements or expansions. We'll assess your current grass type and condition, and recommend the best matching sod variety. Keep in mind that there might be slight variations in color and texture initially, but with proper care, the new sod will blend with your existing lawn over time."
    },
    {
      question: "When can I fertilize my newly installed sod?",
      answer: "You should wait at least 30 days before fertilizing new sod to avoid burning it. The sod is already fertilized at the farm, but heavy watering during establishment will dilute these nutrients. After the 30-day period, we recommend using a balanced, slow-release fertilizer appropriate for your sod type and Jacksonville's climate. We'll provide specific fertilization guidelines as part of our post-installation care instructions."
    },
    {
      question: "Do you provide any guarantees on your sod installation?",
      answer: "Yes, at Jax Sod, we stand behind the quality of our work. We offer a satisfaction guarantee on our sod installation services. If you experience any issues with the sod we've installed within the first 30 days (assuming proper care instructions have been followed), we'll address the problem promptly. Our goal is to ensure you have a healthy, thriving lawn that you love."
    },
    {
      question: "How do I prepare my yard for sod installation?",
      answer: "While we handle most of the preparation as part of our installation service, there are a few things you can do to help:\n      1. Remove any debris, rocks, or personal items from the area.\n      2. Mark sprinkler heads, shallow utility lines, or other obstacles.\n      3. Ensure easy access to the installation area for our equipment.\n      4. If you have pets, make arrangements to keep them away from the area during and after installation.\n      We'll take care of the rest, including removing old grass, grading the soil, and preparing the ground for your new sod."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <SEO
        title="Sod Installation FAQ - Jax Sod Jacksonville"
        description="Find answers to frequently asked questionsabout sod installation, maintenance, and care in Jacksonville. Learn about watering, mowing, and caring for your new sod from Jacksonville's sod experts."
        canonicalUrl="/faq"
      />
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">Frequently Asked Questions About Sod Installation</h1>
          <p className="text-xl text-green-700 mb-8">
            Find answers to common questions about sod installation and maintenance in Jacksonville. If you don't see your question here, feel free to contact us for more information.
          </p>
          <div className="bg-white rounded-lg shadow-md p-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-semibold text-green-800 mb-6">Still Have Questions About Sod Installation?</h2>
            <p className="text-xl mb-8">Our Jacksonville sod installation experts are here to help. Contact us for personalized advice and answers to your specific questions.</p>
            <a href="/contact" className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;