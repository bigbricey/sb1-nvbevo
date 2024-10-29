import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertySize: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      // Here you would typically send this to your backend
      // For now, we'll simulate the email being sent to brice@jaxsod.com
      const estimate = calculateEstimate(Number(formData.propertySize));
      
      // In a real implementation, this would be your API endpoint
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     ...formData,
      //     estimate,
      //     to: 'brice@jaxsod.com'
      //   })
      // });

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        propertySize: ''
      });
    } catch (err) {
      setError('There was an error submitting your request. Please try again.');
    }
  };

  const calculateEstimate = (sqft: number) => {
    const baseRate = 2.5; // per square foot
    const bulkDiscount = sqft > 1000 ? 0.2 : 0;
    return (sqft * baseRate * (1 - bulkDiscount)).toFixed(2);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-green-50 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-green-700 mb-2">Thank You!</h3>
        <p className="text-green-600">
          Your estimate request has been received. We'll contact you soon at the provided email address.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Get Your Free Estimate</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="propertySize" className="block text-gray-700 font-medium mb-2">
          Property Size (sq ft)
        </label>
        <input
          type="number"
          id="propertySize"
          name="propertySize"
          value={formData.propertySize}
          onChange={handleChange}
          required
          min="1"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Additional Details</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200"
      >
        Get Estimate
      </button>
    </form>
  );
};

export default ContactForm;
