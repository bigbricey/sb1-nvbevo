import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-green-600 text-black py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Jax Sod</Link>
          <div className="space-x-6">
            <Link to="/" className="hover:text-green-800">Home</Link>
            <Link to="/about" className="hover:text-green-800">About</Link>
            <Link to="/services" className="hover:text-green-800">Services</Link>
            <Link to="/sod-types" className="hover:text-green-800">Sod Types</Link>
            <Link to="/lawn-calculators" className="hover:text-green-800">Calculators</Link>
            <Link to="/contact" className="hover:text-green-800">Contact</Link>
            <Link to="/faq" className="hover:text-green-800">FAQ</Link> {/* Added FAQ link */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
