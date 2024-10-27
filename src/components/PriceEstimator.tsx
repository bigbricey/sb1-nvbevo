const calculateEstimate = (sqft: number) => {
  const baseRate = 2.5; // per square foot
  const bulkDiscount = sqft > 1000 ? 0.2 : 0;
  return (sqft * baseRate * (1 - bulkDiscount)).toFixed(2);
};
