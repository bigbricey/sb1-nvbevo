import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({ items, title = 'Frequently Asked Questions', className = '' }) => {
  // Generate schema.org FAQPage structured data
  const generateFAQSchema = () => {
    const mainEntity = items.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }));
    
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': mainEntity
    };
  };
  
  return (
    <div className={`faq-section ${className}`}>
      {/* Structured data for FAQ */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateFAQSchema())}
        </script>
      </Helmet>
      
      <h2 className="text-3xl font-bold text-green-800 mb-6">{title}</h2>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                <span className="text-lg font-semibold text-green-700">{item.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" 
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="text-gray-700 p-4 pt-0">
                <p>{item.answer}</p>
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
