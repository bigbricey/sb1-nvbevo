import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Jax Sod</h3>
            <p>Your trusted sod installation experts in Northeast Florida</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-green-200">About Us</Link></li>
              <li><Link to="/services" className="hover:text-green-200">Services</Link></li>
              <li><Link to="/contact" className="hover:text-green-200">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-green-200">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p>Phone: (904) 901-1457</p>
            <p>Email: info@jaxsod.com</p>
            <p>Jacksonville & Green Cove Springs, FL</p>
          </div>
        </div>
        <div className="text-center mt-8 pt-4 border-t border-green-700">
          <p>&copy; {new Date().getFullYear()} Jax Sod. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;