import React from 'react';

interface PriceEstimatorProps {
  squareFootage: number;
}

const PriceEstimator: React.FC<PriceEstimatorProps> = ({ squareFootage }) => {
  const calculateEstimate = (sqft: number) => {
    const baseRate = 2.5; // per square foot
    const bulkDiscount = sqft > 1000 ? 0.2 : 0;
    return (sqft * baseRate * (1 - bulkDiscount)).toFixed(2);
  };

  const estimate = calculateEstimate(squareFootage);
  const hasDiscount = squareFootage > 1000;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Estimated Price</h3>
      <div className="text-3xl font-bold text-green-600 mb-2">
        ${estimate}
      </div>
      {hasDiscount && (
        <p className="text-sm text-gray-600">
          Includes bulk discount for orders over 1,000 sq ft
        </p>
      )}
      <p className="text-sm text-gray-500 mt-4">
        *This is an estimate. Final price may vary based on specific requirements and site conditions.
      </p>
    </div>
  );
};

export default PriceEstimator;
