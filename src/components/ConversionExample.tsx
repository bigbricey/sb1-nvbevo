import React from 'react';
import useAnalytics from '../hooks/useAnalytics';

/**
 * Example component showing how to use the analytics hook to track conversions
 * This is for demonstration purposes - integrate these functions into your actual components
 */
const ConversionExample: React.FC = () => {
  const { 
    logFormSubmission, 
    logQuoteRequest, 
    logPhoneCall,
    logServiceInquiry, 
    logNewsletterSignup 
  } = useAnalytics();

  // Example handlers for different conversion types
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Log the form submission conversion
    logFormSubmission('contact_form', 'Contact Form', {
      source: 'contact_page',
      user_type: 'new_customer'
    });
    
    // Process the form submission normally
    console.log('Form submitted!');
    // Your form submission code here...
  };

  const handleQuoteClick = () => {
    // Log the quote request conversion
    logQuoteRequest('installation', {
      service_type: 'sod_installation',
      location: 'Jacksonville'
    });
    
    // Proceed with quote request
    console.log('Quote requested!');
    // Your quote request code here...
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // The phone number tracking is handled automatically by AnalyticsWrapper,
    // but you can also track it manually like this:
    logPhoneCall('904-555-1234', {
      source: 'header_cta'
    });
    
    // The click will proceed normally to make the call
  };

  const handleServiceInquiry = (serviceName: string) => {
    // Log the service inquiry conversion
    logServiceInquiry(serviceName, {
      source: 'services_page',
      section: 'featured_services'
    });
    
    // Proceed with service inquiry
    console.log(`Inquiry about ${serviceName}`);
    // Your service inquiry code here...
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Log the newsletter signup conversion
    logNewsletterSignup('footer', {
      campaign: 'spring_tips',
      user_type: 'returning_visitor'
    });
    
    // Process the newsletter signup
    console.log('Newsletter signup!');
    // Your newsletter signup code here...
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Conversion Tracking Examples</h2>
      <p className="mb-6 text-gray-700">
        This component demonstrates how to track conversions using the useAnalytics hook.
        In a real application, you would integrate these tracking functions into your actual components.
      </p>
      
      {/* Example Contact Form */}
      <div className="mb-8 p-4 border rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Contact Form Example</h3>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit (Tracks Form Submission)
          </button>
        </form>
      </div>
      
      {/* Example Quote Button */}
      <div className="mb-8 p-4 border rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Quote Request Example</h3>
        <p className="mb-4 text-gray-700">Request a quote for our services:</p>
        <button 
          onClick={handleQuoteClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded quote-request-btn"
          data-quote-type="installation"
        >
          Get a Quote (Tracks Quote Request)
        </button>
      </div>
      
      {/* Example Phone Call */}
      <div className="mb-8 p-4 border rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Phone Call Example</h3>
        <p className="mb-4 text-gray-700">Call us directly:</p>
        <a 
          href="tel:904-555-1234" 
          onClick={handlePhoneClick}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded inline-block"
        >
          Call 904-555-1234 (Tracks Phone Call)
        </a>
      </div>
      
      {/* Example Service Inquiry */}
      <div className="mb-8 p-4 border rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Service Inquiry Example</h3>
        <p className="mb-4 text-gray-700">Learn more about our services:</p>
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => handleServiceInquiry('Sod Installation')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Sod Installation (Tracks Service Inquiry)
          </button>
          <button 
            onClick={() => handleServiceInquiry('Lawn Maintenance')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Lawn Maintenance (Tracks Service Inquiry)
          </button>
        </div>
      </div>
      
      {/* Example Newsletter Signup */}
      <div className="mb-8 p-4 border rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Newsletter Signup Example</h3>
        <form onSubmit={handleNewsletterSubmit} className="space-y-4 newsletter-form" data-source="example_page">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <button 
            type="submit" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Subscribe (Tracks Newsletter Signup)
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConversionExample; 