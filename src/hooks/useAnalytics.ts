import { useCallback } from 'react';
import { trackEvent, trackConversion, CONVERSION_EVENTS } from '../utils/analytics';

/**
 * Custom hook for using analytics in components
 * 
 * Provides methods for tracking events and conversions
 */
const useAnalytics = () => {
  /**
   * Track a general event
   */
  const logEvent = useCallback((eventName: string, params: Record<string, any> = {}) => {
    trackEvent(eventName, params);
  }, []);

  /**
   * Track a form submission conversion
   */
  const logFormSubmission = useCallback((formId: string, formName: string, additionalParams: Record<string, any> = {}) => {
    trackConversion(CONVERSION_EVENTS.FORM_SUBMISSION, {
      form_id: formId,
      form_name: formName,
      ...additionalParams,
    });
  }, []);

  /**
   * Track a contact request conversion
   */
  const logContactRequest = useCallback((contactType: string, additionalParams: Record<string, any> = {}) => {
    trackConversion(CONVERSION_EVENTS.CONTACT_REQUEST, {
      contact_type: contactType,
      ...additionalParams,
    });
  }, []);

  /**
   * Track a service inquiry conversion
   */
  const logServiceInquiry = useCallback((serviceName: string, additionalParams: Record<string, any> = {}) => {
    trackConversion(CONVERSION_EVENTS.SERVICE_INQUIRY, {
      service_name: serviceName,
      ...additionalParams,
    });
  }, []);

  /**
   * Track a quote request conversion
   */
  const logQuoteRequest = useCallback((quoteType: string, additionalParams: Record<string, any> = {}) => {
    trackConversion(CONVERSION_EVENTS.QUOTE_REQUEST, {
      quote_type: quoteType,
      ...additionalParams,
    });
  }, []);

  /**
   * Track a newsletter signup conversion
   */
  const logNewsletterSignup = useCallback((source: string, additionalParams: Record<string, any> = {}) => {
    trackConversion(CONVERSION_EVENTS.NEWSLETTER_SIGNUP, {
      signup_source: source,
      ...additionalParams,
    });
  }, []);

  /**
   * Track a download conversion
   */
  const logDownload = useCallback((fileName: string, fileType: string, additionalParams: Record<string, any> = {}) => {
    trackConversion(CONVERSION_EVENTS.DOWNLOAD, {
      file_name: fileName,
      file_type: fileType,
      ...additionalParams,
    });
  }, []);

  /**
   * Track a phone call conversion
   */
  const logPhoneCall = useCallback((phoneNumber: string, additionalParams: Record<string, any> = {}) => {
    trackConversion(CONVERSION_EVENTS.PHONE_CALL, {
      phone_number: phoneNumber,
      ...additionalParams,
    });
  }, []);

  return {
    logEvent,
    logFormSubmission,
    logContactRequest,
    logServiceInquiry,
    logQuoteRequest,
    logNewsletterSignup,
    logDownload,
    logPhoneCall,
    conversionEvents: CONVERSION_EVENTS
  };
};

export default useAnalytics; 