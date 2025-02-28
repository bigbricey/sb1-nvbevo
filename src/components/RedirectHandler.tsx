import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getRedirectUrl } from '../utils/urlHelpers';

/**
 * RedirectHandler Component
 * 
 * This component handles redirects from old URL structures to the new SEO-friendly URLs.
 * It's used to maintain backward compatibility while improving SEO.
 * 
 * Add this component at the top level of your application to ensure redirects work across all pages.
 */
const RedirectHandler: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Get the current path
    const path = location.pathname;
    
    // Check if this path needs to be redirected
    const redirectUrl = getRedirectUrl(path);
    
    // If a redirect is needed, navigate to the new URL
    if (redirectUrl) {
      // Preserve any query parameters or hash fragments
      const queryString = location.search || '';
      const hashFragment = location.hash || '';
      
      // Navigate to the new URL
      navigate(`${redirectUrl}${queryString}${hashFragment}`, {
        // Use replace to avoid adding an entry in the browser history
        replace: true
      });
    }
  }, [location, navigate]); // Re-check when location changes
  
  // This component doesn't render anything
  return null;
};

export default RedirectHandler; 