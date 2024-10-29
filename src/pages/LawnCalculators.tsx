import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Alert, AlertDescription } from '../components/ui/Alert';
import { Calculator, Info } from 'lucide-react';
import SEO from '../components/SEO';

interface Results {
  totalArea: string;
  areaWithWaste: string;
  unit: string;
}

const SodCalculator = () => {
  const [measurements, setMeasurements] = useState({
    length: '',
    width: '',
    irregularAreas: '',
    waste: '7'
  });
  
  const [unit, setUnit] = useState('feet');
  const [results, setResults] = useState<Results | null>(null);
  const [showTips, setShowTips] = useState(false);

  const handleCalculate = () => {
    const length = parseFloat(measurements.length);
    const width = parseFloat(measurements.width);
    const irregularAreas = parseFloat(measurements.irregularAreas) || 0;
    const wastePercentage = parseFloat(measurements.waste) / 100;

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
      alert('Please enter valid length and width measurements');
      return;
    }

    const totalArea = (length * width) - irregularAreas;
    const areaWithWaste = totalArea * (1 + wastePercentage);

    setResults({
      totalArea: Math.max(0, totalArea).toFixed(2),
      areaWithWaste: Math.max(0, areaWithWaste).toFixed(2),
      unit
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasurements(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleUnit = () => {
    if (unit === 'feet') {
      setUnit('meters');
      setMeasurements(prev => ({
        ...prev,
        length: prev.length ? (parseFloat(prev.length) * 0.3048).toFixed(2) : '',
        width: prev.width ? (parseFloat(prev.width) * 0.3048).toFixed(2) : '',
        irregularAreas: prev.irregularAreas ? (parseFloat(prev.irregularAreas) * 0.092903).toFixed(2) : ''
      }));
    } else {
      setUnit('feet');
      setMeasurements(prev => ({
        ...prev,
        length: prev.length ? (parseFloat(prev.length) / 0.3048).toFixed(2) : '',
        width: prev.width ? (parseFloat(prev.width) / 0.3048).toFixed(2) : '',
        irregularAreas: prev.irregularAreas ? (parseFloat(prev.irregularAreas) / 0.092903).toFixed(2) : ''
      }));
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg">
      <CardHeader className="bg-green-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-2xl font-bold">
          <Calculator className="w-6 h-6" />
          Professional Sod Calculator
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="flex justify-end">
            <button
              onClick={toggleUnit}
              className="bg-green-100 text-green-700 px-4 py-2 rounded-md hover:bg-green-200 transition-colors"
            >
              Switch to {unit === 'feet' ? 'Meters' : 'Feet'}
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Length ({unit})
              </label>
              <input
                type="number"
                name="length"
                value={measurements.length}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                min="0"
                step="0.1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Width ({unit})
              </label>
              <input
                type="number"
                name="width"
                value={measurements.width}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                min="0"
                step="0.1"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Irregular Areas to Subtract ({unit === 'feet' ? 'sq ft' : 'sq m'})
              </label>
              <input
                type="number"
                name="irregularAreas"
                value={measurements.irregularAreas}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                min="0"
                step="0.1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Waste Factor (%) <Info className="w-4 h-4 inline-block text-gray-500 ml-1" />
                <span className="block text-xs text-gray-500 mt-1">
                  Recommended 5-10%. This extra amount accounts for damaged pieces that can occur during delivery 
                  (like sun exposure during transport or pieces that may fall apart), cuts around edges, and 
                  having replacements for any lower quality pieces you might find in the pallet.
                </span>
              </label>
              <input
                type="number"
                name="waste"
                value={measurements.waste}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                min="0"
                max="100"
                step="1"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors font-medium"
          >
            Calculate Sod Needed
          </button>

          {results && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Results</h3>
              <div className="space-y-2 text-green-700">
                <p className="font-semibold">Total Area Needed: {results.totalArea} {unit === 'feet' ? 'sq ft' : 'sq m'}</p>
                <p className="text-sm">Area including {measurements.waste}% waste factor: {results.areaWithWaste} {unit === 'feet' ? 'sq ft' : 'sq m'}</p>
                <p className="mt-4 text-sm italic">Please contact us for current pallet sizes and pricing for different sod varieties.</p>
              </div>
            </div>
          )}

          <div className="mt-4">
            <button
              onClick={() => setShowTips(!showTips)}
              className="flex items-center gap-2 text-green-600 hover:text-green-700"
            >
              <Info className="w-5 h-5" />
              {showTips ? 'Hide Tips' : 'Show Installation Tips'}
            </button>
            
            {showTips && (
              <Alert className="mt-4 bg-blue-50 border-blue-200">
                <AlertDescription>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-blue-800">
                    <li>Measure your lawn carefully, including any curved edges or obstacles</li>
                    <li>Order extra sod (5-10%) to account for cuts and potential damage</li>
                    <li>Prepare your soil properly before installation</li>
                    <li>Install sod within 24 hours of delivery</li>
                    <li>Water thoroughly immediately after installation</li>
                    <li>Avoid walking on newly installed sod for the first week</li>
                  </ul>
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function LawnCalculators() {
  return (
    <>
      <SEO
        title="Lawn Calculators | Estimate Materials Needed | Jacksonville Sod Installation"
        description="Free calculators to estimate sod, mulch, and topsoil needed for your Jacksonville property. Professional installation estimates available."
      />
      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <SodCalculator />
        </div>
      </div>
    </>
  );
}
