// Google Analytics 4 (GA4) utility for tracking events and conversions
// This file provides a consistent interface for working with GA4

/**
 * Defines the structure for event parameters
 */
interface EventParams {
  [key: string]: string | number | boolean | null | undefined;
}

/**
 * Initialize Google Analytics (only call once at app initialization)
 * @param measurementId - Your GA4 measurement ID (G-XXXXXXXXXX)
 */
export const initializeGA = (measurementId: string): void => {
  // Skip analytics initialization during development if needed
  if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_ENABLE_GA !== 'true') {
    console.log('Google Analytics disabled in development');
    return;
  }

  // Create script elements for Google Analytics
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  
  // Initialize gtag
  const inlineScript = document.createElement('script');
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '${measurementId}', { send_page_view: false });
  `;
  
  // Add scripts to document
  document.head.appendChild(gtagScript);
  document.head.appendChild(inlineScript);
};

/**
 * Track a page view in Google Analytics
 * @param path - The page path (e.g., '/home')
 * @param title - The page title
 */
export const trackPageView = (path: string, title: string): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
      page_location: window.location.href,
    });
  }
};

/**
 * Track a custom event in Google Analytics
 * @param eventName - Name of the event to track
 * @param params - Additional parameters to include with the event
 */
export const trackEvent = (eventName: string, params: EventParams = {}): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};

/**
 * Track a conversion (an important user action)
 * @param conversionName - Name of the conversion to track
 * @param params - Additional parameters for the conversion
 */
export const trackConversion = (conversionName: string, params: EventParams = {}): void => {
  // For GA4, conversions are just regular events that you mark as conversions in the GA4 interface
  trackEvent(conversionName, {
    ...params,
    conversion: true, // This is a custom parameter to easily identify conversion events
  });
};

// Common conversion events - use these constants for consistency
export const CONVERSION_EVENTS = {
  FORM_SUBMISSION: 'form_submission',
  CONTACT_REQUEST: 'contact_request',
  SERVICE_INQUIRY: 'service_inquiry',
  PHONE_CALL: 'phone_call',
  QUOTE_REQUEST: 'quote_request',
  NEWSLETTER_SIGNUP: 'newsletter_signup',
  DOWNLOAD: 'file_download',
}; 