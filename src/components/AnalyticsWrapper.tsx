import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

/**
 * Google Analytics 4 Wrapper Component
 * 
 * IMPORTANT: Replace the placeholder measurement ID below with your actual GA4 ID
 * To get your GA4 ID:
 * 1. Go to https://analytics.google.com/
 * 2. Create a new property if you don't have one
 * 3. Go to Admin > Data Streams > Web
 * 4. Create a new stream or select an existing one
 * 5. Copy the Measurement ID (starts with G-)
 */

// Your GA4 Measurement ID - REPLACE THIS WITH YOUR ACTUAL ID
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';

const AnalyticsWrapper = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    
    useEffect(() => {
        // Initialize GA4 with your measurement ID
        ReactGA.initialize(GA4_MEASUREMENT_ID);
        
        // Log a message to the console to remind about replacing the ID
        if (GA4_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
            console.warn('⚠️ Google Analytics Warning: Please replace the placeholder GA4 ID in src/components/AnalyticsWrapper.tsx with your actual measurement ID');
        } else {
            console.log('✅ Google Analytics initialized successfully');
        }
    }, []);
    
    useEffect(() => {
        // Track page views on route change
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }, [location]);

    return <>{children}</>;
};

export default AnalyticsWrapper;
