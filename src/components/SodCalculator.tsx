import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const SodCalculator = () => {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [area, setArea] = useState<number | null>(null);
    const [pallets, setPallets] = useState<number | null>(null);

    const calculateArea = () => {
        const lengthNum = parseFloat(length);
        const widthNum = parseFloat(width);
        if (!isNaN(lengthNum) && !isNaN(widthNum)) {
            const calculatedArea = lengthNum * widthNum;
            setArea(calculatedArea);
            // Standard pallet covers approximately 450 square feet
            setPallets(Math.ceil(calculatedArea / 450));
        } else {
            setArea(null);
            setPallets(null);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            calculateArea();
        }
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
                <Calculator className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-2" />
                <h2 className="text-xl md:text-2xl font-bold text-green-800">Sod Calculator</h2>
            </div>
            <p className="text-sm md:text-base text-gray-700 mb-6">Calculate the amount of sod you need for your lawn.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                <div>
                    <label 
                        htmlFor="length-input"
                        className="block text-gray-700 mb-2 text-sm md:text-base font-medium"
                    >
                        Length (feet):
                    </label>
                    <input
                        id="length-input"
                        type="number"
                        inputMode="decimal"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-base md:text-lg"
                        placeholder="Enter length"
                    />
                </div>
                <div>
                    <label 
                        htmlFor="width-input"
                        className="block text-gray-700 mb-2 text-sm md:text-base font-medium"
                    >
                        Width (feet):
                    </label>
                    <input
                        id="width-input"
                        type="number"
                        inputMode="decimal"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-base md:text-lg"
                        placeholder="Enter width"
                    />
                </div>
            </div>
            
            <button
                onClick={calculateArea}
                className="w-full md:w-auto bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-base md:text-lg font-medium touch-manipulation"
                aria-label="Calculate sod area"
            >
                Calculate
            </button>
            
            {area !== null && (
                <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-lg">
                    <p className="text-gray-800 text-base md:text-lg">
                        <strong>Area:</strong> {area.toLocaleString()} square feet
                    </p>
                    <p className="text-gray-800 mt-2 text-base md:text-lg">
                        <strong>Estimated pallets needed:</strong> {pallets}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        For a precise quote, <a href="/contact" className="text-green-600 underline">contact us</a>.
                    </p>
                </div>
            )}
        </div>
    );
};

export default SodCalculator;
