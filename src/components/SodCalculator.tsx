import React, { useState } from 'react';

const SodCalculator = () => {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [area, setArea] = useState<number | null>(null);

    const calculateArea = () => {
        const lengthNum = parseFloat(length);
        const widthNum = parseFloat(width);
        if (!isNaN(lengthNum) && !isNaN(widthNum)) {
            setArea(lengthNum * widthNum);
        } else {
            setArea(null);
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Sod Calculator</h2>
            <p className="text-gray-700 mb-4">Calculate the amount of sod you need for your lawn.</p>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Length (feet):</label>
                <input
                    type="text"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Width (feet):</label>
                <input
                    type="text"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <button
                onClick={calculateArea}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
                Calculate
            </button>
            {area !== null && (
                <div className="mt-4 text-gray-700">
                    <strong>Area:</strong> {area} square feet
                </div>
            )}
        </div>
    );
};

export default SodCalculator;
