import React from 'react';
import TestComponent from './TestComponent';
import SEO from './components/SEO';

function App() {
  return (
    <>
      <SEO 
        title="Jax Sod | Professional Sod Installation in Northeast Florida"
        description="Expert sod installation services in Jacksonville and Green Cove Springs. With over 37 years of experience, Jax Sod delivers premium quality sod and installation for homes and businesses."
      />
      <div>
        <h1>Welcome to Jax Sod</h1>
        <TestComponent />
      </div>
    </>
  );
}

export default App;