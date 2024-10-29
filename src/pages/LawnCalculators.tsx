import React, { useState } from 'react';
import { Calculator, ArrowRight, Info } from 'lucide-react';
import SEO from '../components/SEO';

export default function LawnCalculators() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [result, setResult] = useState(null);

  const calculateSodNeeded = (e) => {
    e.preventDefault();
    const area = parseFloat(length) * parseFloat(width);
    const sodNeeded = Math.ceil(area * 1.1); // Adding 10% for waste
    setResult(sodNeeded);
  };

  return (
    <>
      <SEO
        title="Lawn Calculator | Estimate Sod Needed | Jacksonville Sod Installation"
        description="Free lawn calculator to estimate sod needed for your Jacksonville property. Professional sod installation estimates and consultation available."
      />

      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 flex items-center">
              <Calculator className="mr-4" size={36} />
              Free Lawn Calculator
            </h1>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold text-green-800 mb-6">Calculate Sod Needed</h2>
              
              <form onSubmit={calculateSodNeeded} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Length (feet)
                    </label>
                    <input
                      type="number"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Width (feet)
                    </label>
                    <input
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                      min="1"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition"
                >
                  Calculate Square Footage
                </button>
              </form>

              {result && (
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Estimated Sod Needed:</h3>
                  <p className="text-2xl font-bold text-green-600">{result} Square Feet</p>
                  <p className="text-sm text-green-700 mt-2">
                    *Includes 10% extra for cuts and waste
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Measurement Tips
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Info className="text-green-600 mr-2 mt-1" size={20} />
                  <span>Measure the length and width in feet</span>
                </li>
                <li className="flex items-start">
                  <Info className="text-green-600 mr-2 mt-1" size={20} />
                  <span>For irregular shapes, break into rectangles and add together</span>
                </li>
                <li className="flex items-start">
                  <Info className="text-green-600 mr-2 mt-1" size={20} />
                  <span>Include 10% extra for cuts and waste (automatically added)</span>
                </li>
                <li className="flex items-start">
                  <Info className="text-green-600 mr-2 mt-1" size={20} />
                  <span>Measure twice to ensure accuracy</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-800 text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Want Professional Help?</h2>
              <p className="text-lg mb-6">
                Get a precise measurement and free installation estimate from our team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:904-901-1457"
                  className="bg-white text-green-800 px-8 py-3 rounded-lg inline-flex items-center justify-center hover:bg-green-100 transition"
                >
                  Call (904) 901-1457
                </a>
                <a
                  href="/contact"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg inline-flex items-center justify-center hover:bg-green-700 transition"
                >
                  Request Free Estimate <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}