import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackConversion, CONVERSION_EVENTS } from '../utils/analytics';

/**
 * Google Analytics 4 Wrapper Component
 * 
 * This component tracks page views automatically and provides methods for tracking conversions.
 * The actual GA4 initialization is done in main.tsx.
 */

const AnalyticsWrapper = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    
    useEffect(() => {
        // Track page views on route change
        trackPageView(location.pathname, document.title);
        
        // Set up event listeners for common conversion actions
        setupConversionTracking();
        
        return () => {
            // Clean up event listeners on unmount
            cleanupConversionTracking();
        };
    }, [location]);
    
    // Set up automatic conversion tracking for common user actions
    const setupConversionTracking = () => {
        // Track form submissions
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', handleFormSubmission);
        });
        
        // Track outbound links (like phone calls)
        document.querySelectorAll('a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', handlePhoneCall);
        });
        
        // Track quote request button clicks
        document.querySelectorAll('.quote-request-btn, [data-conversion="quote"]').forEach(btn => {
            btn.addEventListener('click', handleQuoteRequest);
        });
        
        // Track newsletter signups
        document.querySelectorAll('.newsletter-form, [data-conversion="newsletter"]').forEach(form => {
            form.addEventListener('submit', handleNewsletterSignup);
        });
        
        // Track file downloads
        document.querySelectorAll('a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"], a[href$=".xls"], a[href$=".xlsx"], a[href$=".csv"]')
            .forEach(link => {
                link.addEventListener('click', handleDownload);
            });
    };
    
    // Clean up event listeners
    const cleanupConversionTracking = () => {
        document.querySelectorAll('form').forEach(form => {
            form.removeEventListener('submit', handleFormSubmission);
        });
        
        document.querySelectorAll('a[href^="tel:"]').forEach(link => {
            link.removeEventListener('click', handlePhoneCall);
        });
        
        document.querySelectorAll('.quote-request-btn, [data-conversion="quote"]').forEach(btn => {
            btn.removeEventListener('click', handleQuoteRequest);
        });
        
        document.querySelectorAll('.newsletter-form, [data-conversion="newsletter"]').forEach(form => {
            form.removeEventListener('submit', handleNewsletterSignup);
        });
        
        document.querySelectorAll('a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"], a[href$=".xls"], a[href$=".xlsx"], a[href$=".csv"]')
            .forEach(link => {
                link.removeEventListener('click', handleDownload);
            });
    };
    
    // Event handlers for different conversion types
    const handleFormSubmission = (e: Event) => {
        const form = e.currentTarget as HTMLFormElement;
        const formId = form.id || 'unknown_form';
        const formName = form.getAttribute('name') || 'Unknown Form';
        
        trackConversion(CONVERSION_EVENTS.FORM_SUBMISSION, {
            form_id: formId,
            form_name: formName,
            page_path: location.pathname,
        });
    };
    
    const handlePhoneCall = (e: Event) => {
        const link = e.currentTarget as HTMLAnchorElement;
        const phoneNumber = link.href.replace('tel:', '');
        
        trackConversion(CONVERSION_EVENTS.PHONE_CALL, {
            phone_number: phoneNumber,
            page_path: location.pathname,
        });
    };
    
    const handleQuoteRequest = (e: Event) => {
        const element = e.currentTarget as HTMLElement;
        const quoteType = element.getAttribute('data-quote-type') || 'general';
        
        trackConversion(CONVERSION_EVENTS.QUOTE_REQUEST, {
            quote_type: quoteType,
            page_path: location.pathname,
        });
    };
    
    const handleNewsletterSignup = (e: Event) => {
        const form = e.currentTarget as HTMLFormElement;
        const source = form.getAttribute('data-source') || 'website';
        
        trackConversion(CONVERSION_EVENTS.NEWSLETTER_SIGNUP, {
            signup_source: source,
            page_path: location.pathname,
        });
    };
    
    const handleDownload = (e: Event) => {
        const link = e.currentTarget as HTMLAnchorElement;
        const filePath = link.href;
        const fileName = filePath.substring(filePath.lastIndexOf('/') + 1);
        const fileType = fileName.substring(fileName.lastIndexOf('.') + 1);
        
        trackConversion(CONVERSION_EVENTS.DOWNLOAD, {
            file_name: fileName,
            file_type: fileType,
            file_path: filePath,
            page_path: location.pathname,
        });
    };

    return <>{children}</>;
};

export default AnalyticsWrapper;
