import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

/**
 * Component that automatically tracks page views in Google Analytics
 * Place this component once at the app root level
 */
const AnalyticsTracker: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Track the page view whenever the location changes
    const path = location.pathname;
    const title = document.title;
    trackPageView(path, title);
  }, [location]);

  // This component doesn't render anything
  return null;
};

export default AnalyticsTracker; 