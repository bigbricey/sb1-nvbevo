# Google Analytics 4 (GA4) Tracking Guide

This documentation explains how to use the Google Analytics 4 (GA4) tracking system implemented in this project.

## Setup

Google Analytics 4 is already set up in the project. You need to replace the placeholder measurement ID with your actual GA4 ID:

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use an existing one
3. Go to Admin → Data Streams → Web
4. Create a new stream or select an existing one
5. Copy the Measurement ID (starts with G-)
6. Open `src/main.tsx` and replace `'G-XXXXXXXXXX'` with your actual Measurement ID

```tsx
// Replace this line in src/main.tsx
initializeGA('G-XXXXXXXXXX')
```

## Page View Tracking

Page views are automatically tracked by the `AnalyticsWrapper` component, which is already included in the app structure.

## Conversion Tracking

Conversions are important user actions you want to track. This project provides two ways to track conversions:

### 1. Automatic Tracking

The `AnalyticsWrapper` component automatically tracks the following conversions:

- **Form Submissions**: Any `<form>` element submission
- **Phone Calls**: Clicks on links with `href="tel:..."` 
- **Quote Requests**: Clicks on elements with class `.quote-request-btn` or `[data-conversion="quote"]`
- **Newsletter Signups**: Submissions of forms with class `.newsletter-form` or `[data-conversion="newsletter"]`
- **File Downloads**: Clicks on links to PDF, DOC, DOCX, XLS, XLSX, or CSV files

### 2. Manual Tracking with useAnalytics Hook

For more control, you can use the `useAnalytics` hook in your components:

```tsx
import useAnalytics from '../hooks/useAnalytics';

const MyComponent = () => {
  const { logFormSubmission, logQuoteRequest, logPhoneCall } = useAnalytics();
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Log the conversion
    logFormSubmission('contact_form', 'Contact Form', {
      source: 'contact_page'
    });
    
    // Process the form
    // ...
  };
  
  return (
    <form onSubmit={handleFormSubmit}>
      {/* Form fields */}
      <button type="submit">Submit</button>
    </form>
  );
};
```

## Available Tracking Methods

The `useAnalytics` hook provides the following methods:

- `logEvent(eventName, params)` - Track any custom event
- `logFormSubmission(formId, formName, additionalParams)` - Track form submissions
- `logContactRequest(contactType, additionalParams)` - Track contact requests
- `logServiceInquiry(serviceName, additionalParams)` - Track service inquiries
- `logQuoteRequest(quoteType, additionalParams)` - Track quote requests
- `logNewsletterSignup(source, additionalParams)` - Track newsletter signups
- `logDownload(fileName, fileType, additionalParams)` - Track file downloads
- `logPhoneCall(phoneNumber, additionalParams)` - Track phone calls

## Standard Conversion Event Names

For consistency, use the standard conversion event names exported from the hook:

```tsx
const { conversionEvents } = useAnalytics();

// Use these standard names for tracking
trackEvent(conversionEvents.FORM_SUBMISSION, { ... });
trackEvent(conversionEvents.CONTACT_REQUEST, { ... });
trackEvent(conversionEvents.SERVICE_INQUIRY, { ... });
// etc.
```

## Setting Up Conversions in GA4

After implementing tracking in your code, you need to set up conversions in the GA4 interface:

1. Go to your GA4 property
2. Navigate to **Configure** → **Events**
3. Find your conversion events in the list (e.g., `form_submission`, `quote_request`)
4. Click the **Mark as conversion** toggle for each event you want to track as a conversion

## Example Implementation

See `src/components/ConversionExample.tsx` for a full example of how to implement conversion tracking in your components.

## Best Practices

1. **Use Consistent Event Names**: Stick to the predefined event names in `CONVERSION_EVENTS` for consistency
2. **Add Relevant Parameters**: Include additional context with each event (e.g., form name, service type)
3. **Track User Journey**: Consider tracking important steps in user flows, not just the final conversion
4. **Respect Privacy**: Don't track personally identifiable information (PII)
5. **Test Your Implementation**: Use the GA4 DebugView to ensure events are firing correctly

## Debugging

To check if your events are being tracked properly:

1. Go to your GA4 property
2. Navigate to **Configure** → **DebugView**
3. Load your website and perform the actions you want to track
4. Check if the events appear in the DebugView

You can also use the browser console to see if events are being sent by looking for `gtag` calls in the network tab. 