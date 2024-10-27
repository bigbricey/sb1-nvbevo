import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import SEO from '../components/SEO';

const LawnCalculators: React.FC = () => {
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [depth, setDepth] = useState<number>(2);
  const [calculatorType, setCalculatorType] = useState<'sod' | 'mulch'>('sod');

  const calculateSodArea = () => {
    return length * width;
  };

  const calculateMulchVolume = () => {
    const cubicFeet = (length * width * depth) / 12;
    const cubicYards = cubicFeet / 27;
    return {
      cubicFeet: cubicFeet.toFixed(2),
      cubicYards: cubicYards.toFixed(2)
    };
  };

  return (
    <>
      <SEO
        title="Lawn Calculators - Sod and Mulch Estimator | Jax Sod"
        description="Use our free lawn calculators to estimate sod square footage and mulch volume for your landscaping projects. Plan your lawn renovation with Jax Sod's tools."
        canonicalUrl="/lawn-calculators"
      />
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 flex items-center">
            <Calculator className="mr-4" size={36} />
            Lawn Calculators
          </h1>
          <p className="text-xl text-green-700 mb-8">
            Use our free calculators to estimate the amount of sod or mulch you need for your landscaping project.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="mb-4">
              <label className="block text-green-700 font-semibold mb-2">Calculator Type</label>
              <div className="flex space-x-4">
                <button
                  className={`px-4 py-2 rounded ${calculatorType === 'sod' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700'}`}
                  onClick={() => setCalculatorType('sod')}
                >
                  Sod Calculator
                </button>
                <button
                  className={`px-4 py-2 rounded ${calculatorType === 'mulch' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700'}`}
                  onClick={() => setCalculatorType('mulch')}
                >
                  Mulch Calculator
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-green-700 font-semibold mb-2" htmlFor="length">
                  Length (feet)
                </label>
                <input
                  type="number"
                  id="length"
                  className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-green-700 font-semibold mb-2" htmlFor="width">
                  Width (feet)
                </label>
                <input
                  type="number"
                  id="width"
                  className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                />
              </div>
            </div>

            {calculatorType === 'mulch' && (
              <div className="mb-4">
                <label className="block text-green-700 font-semibold mb-2" htmlFor="depth">
                  Depth (inches)
                </label>
                <input
                  type="number"
                  id="depth"
                  className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={depth}
                  onChange={(e) => setDepth(Number(e.target.value))}
                />
              </div>
            )}

            <div className="bg-green-100 p-4 rounded-md">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Result:</h3>
              {calculatorType === 'sod' ? (
                <p className="text-green-700">
                  You need approximately <strong>{calculateSodArea()} square feet</strong> of sod.
                </p>
              ) : (
                <div>
                  <p className="text-green-700">
                    You need approximately:
                  </p>
                  <ul className="list-disc list-inside text-green-700">
                    <li><strong>{calculateMulchVolume().cubicFeet} cubic feet</strong> of mulch</li>
                    <li><strong>{calculateMulchVolume().cubicYards} cubic yards</strong> of mulch</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Tips for Accurate Measurements</h2>
            <ul className="list-disc list-inside text-green-700 space-y-2">
              <li>Measure the length and width of your lawn area in feet.</li>
              <li>For irregular shapes, divide the area into rectangles and calculate each separately.</li>
              <li>When ordering sod, add 5-10% extra to account for cuts and waste.</li>
              <li>For mulch, a depth of 2-4 inches is typically recommended for most applications.</li>
              <li>Consider ordering slightly more material than calculated to ensure full coverage.</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xl text-green-700 mb-4">
              Need professional help with your lawn project?
            </p>
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Contact Jax Sod for a Free Estimate
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LawnCalculators;

const memoizedCalculation = useMemo(() => {
  return calculateSodArea();
}, [length, width]);

// Add input validation
const validateInput = (value: string) => {
  const num = parseFloat(value);
  return !isNaN(num) && num >= 0 && num <= 10000;
};

useEffect(() => {
  const savedData = localStorage.getItem('calculatorData');
  if (savedData) {
    const { length, width, depth } = JSON.parse(savedData);
    setLength(length);
    setWidth(width);
    setDepth(depth);
  }
}, []);
