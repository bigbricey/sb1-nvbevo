import React, { useState } from 'react';
import SEO from '../components/SEO';

const Calculator = () => {
  const [sodLength, setSodLength] = useState('');
  const [sodWidth, setSodWidth] = useState('');
  const [mulchArea, setMulchArea] = useState('');
  const [mulchDepth, setMulchDepth] = useState('');
  const [soilArea, setSoilArea] = useState('');
  const [soilDepth, setSoilDepth] = useState('');

  // Sod Calculator
  const sodCalculation = () => {
    const length = parseFloat(sodLength);
    const width = parseFloat(sodWidth);
    if (!isNaN(length) && !isNaN(width) && length > 0 && width > 0) {
      const totalSquareFeet = length * width;
      return `Total Sod Needed: ${totalSquareFeet.toFixed(2)} square feet`;
    }
    return '';
  };

  // Mulch Calculator
  const mulchCalculation = () => {
    const area = parseFloat(mulchArea);
    const depth = parseFloat(mulchDepth);
    if (!isNaN(area) && !isNaN(depth) && area > 0 && depth > 0) {
      const cubicYards = ((area * (depth / 12)) / 27).toFixed(2); // Convert depth from inches to feet, then calculate cubic yards
      return `Total Mulch Needed: ${cubicYards} cubic yard(s)`;
    }
    return '';
  };

  // Soil Calculator
  const soilCalculation = () => {
    const area = parseFloat(soilArea);
    const depth = parseFloat(soilDepth);
    if (!isNaN(area) && !isNaN(depth) && area > 0 && depth > 0) {
      const cubicYards = ((area * (depth / 12)) / 27).toFixed(2);
      return `Total Soil Needed: ${cubicYards} cubic yard(s)`;
    }
    return '';
  };

  return (
    <>
      <SEO
        title="Sod, Mulch, and Soil Calculators | Jax Sod"
        description="Calculate the amount of sod, mulch, or soil you need for your project. Get expert tips on proper installation depths from Jax Sod."
      />
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <h1 className="text-5xl font-bold text-green-800 mb-10 text-center">
              Sod, Mulch, and Soil Calculators
            </h1>
            <p className="text-xl text-gray-700 mb-12 text-center">
              Use our calculators below to estimate how much material you'll need for your project. Plus, get expert tips on proper installation depths.
            </p>

            {/* Sod Calculator */}
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-green-700 mb-6">
                Sod Calculator
              </h2>
              <p className="text-gray-700 mb-4">
                Enter the length and width of the area you wish to sod (in feet):
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="number"
                  min="0"
                  placeholder="Length in Feet"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={sodLength}
                  onChange={(e) => setSodLength(e.target.value)}
                />
                <input
                  type="number"
                  min="0"
                  placeholder="Width in Feet"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={sodWidth}
                  onChange={(e) => setSodWidth(e.target.value)}
                />
              </div>
              {sodCalculation() && (
                <p className="text-green-800 font-semibold mt-2">
                  {sodCalculation()}
                </p>
              )}
              <h3 className="text-2xl font-semibold text-green-600 mt-6 mb-2">
                Tip:
              </h3>
              <p className="text-gray-700">
                Always purchase an extra 5-10% of sod to account for cutting and shaping around curves and obstacles.
              </p>
            </section>

            {/* Mulch Calculator */}
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-green-700 mb-6">
                Mulch Calculator
              </h2>
              <p className="text-gray-700 mb-4">
                Enter the area and desired depth to calculate the amount of mulch needed:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="number"
                  min="0"
                  placeholder="Area in Square Feet"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={mulchArea}
                  onChange={(e) => setMulchArea(e.target.value)}
                />
                <input
                  type="number"
                  min="0"
                  placeholder="Depth in Inches"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={mulchDepth}
                  onChange={(e) => setMulchDepth(e.target.value)}
                />
              </div>
              {mulchCalculation() && (
                <p className="text-green-800 font-semibold mt-2">
                  {mulchCalculation()}
                </p>
              )}
              <h3 className="text-2xl font-semibold text-green-600 mt-6 mb-2">
                Tip:
              </h3>
              <p className="text-gray-700">
                A depth of 2-3 inches is ideal for mulch to suppress weeds and retain moisture.
              </p>
            </section>

            {/* Soil Calculator */}
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-green-700 mb-6">
                Soil Calculator
              </h2>
              <p className="text-gray-700 mb-4">
                Enter the area and desired depth to calculate the amount of soil needed:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="number"
                  min="0"
                  placeholder="Area in Square Feet"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={soilArea}
                  onChange={(e) => setSoilArea(e.target.value)}
                />
                <input
                  type="number"
                  min="0"
                  placeholder="Depth in Inches"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={soilDepth}
                  onChange={(e) => setSoilDepth(e.target.value)}
                />
              </div>
              {soilCalculation() && (
                <p className="text-green-800 font-semibold mt-2">
                  {soilCalculation()}
                </p>
              )}
              <h3 className="text-2xl font-semibold text-green-600 mt-6 mb-2">
                Tip:
              </h3>
              <p className="text-gray-700">
                For new garden beds or lawns, a depth of 6-8 inches of quality topsoil is recommended.
              </p>
            </section>

            {/* Call to Action */}
            <section className="text-center bg-green-800 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Need Professional Assistance?
              </h2>
              <p className="text-xl mb-6">
                Contact us today for expert advice and quality materials.
              </p>
              <a
                href="/contact"
                className="bg-white text-green-800 px-8 py-3 rounded-lg inline-flex items-center hover:bg-green-100 transition"
              >
                Get a Free Quote
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
