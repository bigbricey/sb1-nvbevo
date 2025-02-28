import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    name: string;
    type?: string;
    url?: string;
  };
  image?: string;
}

interface FAQProps {
  items?: FAQItem[];
  question?: string;
  answer?: string;
  isLast?: boolean;
  title?: string;
  className?: string;
  showSchema?: boolean;
}

/**
 * FAQ Component
 * 
 * A versatile component that can render either a single FAQ item or a list of FAQ items.
 * Optionally includes schema.org markup for better SEO and rich results.
 * 
 * @param items - Array of FAQ items (for multiple question mode)
 * @param question - Single question text (for single question mode)
 * @param answer - Single answer text (for single question mode)
 * @param isLast - Whether this is the last item in a list
 * @param title - Section title for multiple questions mode
 * @param className - Additional CSS classes
 * @param showSchema - Whether to include schema.org markup (defaults to true)
 */
const FAQ: React.FC<FAQProps> = ({ 
  items, 
  question, 
  answer, 
  isLast = false,
  title = 'Frequently Asked Questions', 
  className = '',
  showSchema = true
}) => {
  // Determine if we're rendering a single FAQ item or multiple items
  const isSingleItem = question !== undefined && answer !== undefined;
  
  // Generate schema.org FAQPage structured data
  const generateFAQSchema = () => {
    if (!showSchema) return null;
    
    // For single item mode
    if (isSingleItem && question && answer) {
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [{
          '@type': 'Question',
          'name': question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': answer
          }
        }]
      };
    }
    
    // For multiple items mode
    if (items && items.length > 0) {
      const mainEntity = items.map(item => {
        const questionObj: any = {
          '@type': 'Question',
          'name': item.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer
          }
        };
        
        // Add optional properties if provided
        if (item.datePublished) {
          questionObj.datePublished = item.datePublished;
        }
        
        if (item.dateModified) {
          questionObj.dateModified = item.dateModified;
        }
        
        if (item.author) {
          questionObj.author = {
            '@type': item.author.type || 'Person',
            'name': item.author.name,
            ...(item.author.url ? { url: item.author.url } : {})
          };
        }
        
        if (item.image) {
          questionObj.image = item.image;
        }
        
        return questionObj;
      });
      
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': mainEntity
      };
    }
    
    return null;
  };
  
  // Render a single FAQ item
  if (isSingleItem) {
    return (
      <div className={`faq-item ${isLast ? '' : 'border-b'} ${className}`}>
        {showSchema && (
          <Helmet>
            <script type="application/ld+json">
              {JSON.stringify(generateFAQSchema())}
            </script>
          </Helmet>
        )}
        
        <details className="group py-4 px-6">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span className="text-lg font-semibold text-green-700">{question}</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" 
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <div className="text-gray-700 mt-3">
            <p>{answer}</p>
          </div>
        </details>
      </div>
    );
  }
  
  // Render multiple FAQ items
  return (
    <div className={`faq-section ${className}`}>
      {showSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(generateFAQSchema())}
          </script>
        </Helmet>
      )}
      
      {title && <h2 className="text-3xl font-bold text-green-800 mb-6">{title}</h2>}
      
      <div className="space-y-4">
        {items?.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                <span className="text-lg font-semibold text-green-700">{item.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" 
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
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
