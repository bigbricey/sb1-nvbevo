/**
 * Performance Optimization Utilities
 * 
 * This file contains utility functions to improve core web vitals and overall
 * website performance, focusing on:
 * 1. Largest Contentful Paint (LCP)
 * 2. First Input Delay (FID)
 * 3. Cumulative Layout Shift (CLS)
 * 4. Interaction to Next Paint (INP)
 */

// Types
interface ResourceHint {
  url: string;
  type: 'preload' | 'prefetch' | 'preconnect' | 'dns-prefetch';
  as?: string;
  crossOrigin?: boolean;
  importance?: 'high' | 'low' | 'auto';
}

// Constants
const PRIORITY_ELEMENTS = ['img', 'picture', 'video', 'svg'];
const THIRD_PARTY_DOMAINS = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://www.googletagmanager.com',
];

/**
 * Preloads critical assets to improve LCP
 * @param assets Array of URLs to preload
 * @param importance Priority level for the preload
 */
export const preloadCriticalAssets = (assets: string[], importance: 'high' | 'low' | 'auto' = 'high') => {
  assets.forEach(asset => {
    const linkElem = document.createElement('link');
    linkElem.rel = 'preload';
    
    // Determine the appropriate as attribute based on file extension
    if (asset.endsWith('.js')) {
      linkElem.as = 'script';
    } else if (asset.endsWith('.css')) {
      linkElem.as = 'style';
    } else if (asset.endsWith('.jpg') || asset.endsWith('.jpeg') || asset.endsWith('.png') || asset.endsWith('.webp') || asset.endsWith('.avif')) {
      linkElem.as = 'image';
    } else if (asset.endsWith('.woff2') || asset.endsWith('.woff') || asset.endsWith('.ttf')) {
      linkElem.as = 'font';
      linkElem.crossOrigin = 'anonymous';
    }
    
    // Set importance attribute
    if (importance !== 'auto') {
      linkElem.setAttribute('importance', importance);
    }
    
    linkElem.href = asset;
    document.head.appendChild(linkElem);
  });
};

/**
 * Defers non-critical JavaScript execution
 * @param scriptURL The URL of the script to defer
 * @param loadDelayMs Optional delay in milliseconds before loading the script
 */
export const loadScriptDeferred = (scriptURL: string, loadDelayMs = 3000) => {
  // Use requestIdleCallback if available, otherwise fall back to setTimeout
  const scheduleLoad = () => {
    const script = document.createElement('script');
    script.src = scriptURL;
    script.async = true;
    document.body.appendChild(script);
  };
  
  if ('requestIdleCallback' in window) {
    // @ts-ignore - TypeScript doesn't recognize requestIdleCallback
    window.requestIdleCallback(() => {
      setTimeout(scheduleLoad, loadDelayMs);
    });
  } else {
    setTimeout(scheduleLoad, loadDelayMs);
  }
};

/**
 * Sets font display to swap to prevent invisible text during font loading
 */
export const optimizeFontLoading = () => {
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-display: swap !important;
    }
  `;
  document.head.appendChild(style);
  
  // Add font loading optimization with Font Loading API if available
  if ('fonts' in document) {
    // Attempt to preload and cache critical fonts
    document.fonts.ready.then(() => {
      console.debug('Fonts loaded and ready');
    });
  }
};

/**
 * Preconnect to critical third-party domains to save connection setup time
 * @param domains Array of domains to preconnect to
 */
export const preconnectToDomains = (domains: string[]) => {
  domains.forEach(domain => {
    // Add DNS-prefetch as fallback
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = domain;
    document.head.appendChild(dnsPrefetch);
    
    // Add preconnect
    const linkElem = document.createElement('link');
    linkElem.rel = 'preconnect';
    linkElem.href = domain;
    linkElem.crossOrigin = 'anonymous';
    document.head.appendChild(linkElem);
  });
};

/**
 * Sets appropriate size attributes on image elements to prevent layout shifts
 */
export const fixImageDimensions = () => {
  const images = document.querySelectorAll('img:not([width]):not([height])');
  images.forEach(img => {
    if (img instanceof HTMLImageElement) {
      // Add a transparent placeholder until the image loads
      if (!img.getAttribute('src')?.startsWith('data:')) {
        const aspectRatio = 16 / 9; // Default aspect ratio
        img.style.aspectRatio = `${aspectRatio}`;
        img.style.width = '100%';
        img.style.height = 'auto';
      }
    }
  });
};

/**
 * Optimizes animations to reduce main thread work and improve INP
 */
export const optimizeAnimations = () => {
  // Add a CSS class that forces hardware acceleration for animations
  const style = document.createElement('style');
  style.textContent = `
    .optimize-animation {
      transform: translateZ(0);
      will-change: transform;
      backface-visibility: hidden;
    }
  `;
  document.head.appendChild(style);
  
  // Apply the class to animated elements
  setTimeout(() => {
    const animatedElements = document.querySelectorAll('.animate-*, .transition-*');
    animatedElements.forEach(el => {
      el.classList.add('optimize-animation');
    });
  }, 1000);
};

/**
 * Detects LCP element and optimizes it specifically
 */
export const optimizeLCP = () => {
  // Use PerformanceObserver to detect LCP element if supported
  if ('PerformanceObserver' in window) {
    try {
      // Track LCP element
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const lastEntry = entries[entries.length - 1];
          // @ts-ignore - TypeScript doesn't know about the element property
          const lcpElement = lastEntry.element;
          
          if (lcpElement) {
            // Apply optimizations to the LCP element
            lcpElement.setAttribute('fetchpriority', 'high');
            
            // If it's an image, ensure it's loaded eagerly
            if (lcpElement instanceof HTMLImageElement) {
              lcpElement.loading = 'eager';
            }
            
            console.debug('LCP element optimized', lcpElement);
          }
        }
      });
      
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      console.warn('LCP detection not supported', e);
    }
  }
};

/**
 * Prioritizes above-the-fold content and defers below-the-fold
 */
export const prioritizeVisibleContent = () => {
  // Set high priority on potential LCP elements in the viewport
  const prioritizeViewportContent = () => {
    const viewportHeight = window.innerHeight;
    
    PRIORITY_ELEMENTS.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // Check if element is in the viewport
        if (rect.top < viewportHeight) {
          if (el instanceof HTMLImageElement) {
            el.loading = 'eager';
            el.setAttribute('fetchpriority', 'high');
          } else {
            el.setAttribute('importance', 'high');
          }
        }
      });
    });
  };
  
  // Run immediately and after content loads
  prioritizeViewportContent();
  window.addEventListener('load', prioritizeViewportContent);
};

/**
 * Sets up an intersection observer for lazy loading elements
 */
const setupLazyLoadingObserver = () => {
  // Observer for lazy loading images, iframes, and other elements
  const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        
        // Handle different element types
        if (target instanceof HTMLImageElement) {
          const dataSrc = target.getAttribute('data-src');
          if (dataSrc) {
            target.src = dataSrc;
            target.removeAttribute('data-src');
          }
        } else if (target instanceof HTMLIFrameElement) {
          const dataSrc = target.getAttribute('data-src');
          if (dataSrc) {
            target.src = dataSrc;
            target.removeAttribute('data-src');
          }
        }
        
        // Stop observing after loading
        lazyLoadObserver.unobserve(target);
      }
    });
  }, {
    rootMargin: '200px 0px',  // Start loading when element is 200px from viewport
  });
  
  // Observe all elements with data-src attribute
  document.querySelectorAll('[data-src]').forEach(element => {
    lazyLoadObserver.observe(element);
  });
};

/**
 * Initializes performance optimizations
 */
export const initializePerformanceOptimizations = () => {
  // Optimize font loading
  optimizeFontLoading();
  
  // Preconnect to critical domains
  preconnectToDomains(THIRD_PARTY_DOMAINS);
  
  // Fix image dimensions to prevent layout shifts
  document.addEventListener('DOMContentLoaded', fixImageDimensions);
  
  // Add intersection observer for lazy loading
  if ('IntersectionObserver' in window) {
    setupLazyLoadingObserver();
  }
  
  // New optimizations
  optimizeAnimations();
  optimizeLCP();
  prioritizeVisibleContent();
  
  // Register event listeners for interaction tracing if needed
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    registerInteractionTracing();
  }
};

/**
 * Registers interaction tracing for INP optimization
 */
const registerInteractionTracing = () => {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          // Log slow interactions (> 200ms) for debugging
          // @ts-ignore - TypeScript doesn't know about duration property
          if (entry.duration > 200) {
            console.warn('Slow interaction detected:', entry);
          }
        });
      });
      
      // Observe interaction timings
      observer.observe({ 
        type: 'event', 
        buffered: true
      });
    } catch (e) {
      console.warn('Interaction tracing not supported', e);
    }
  }
};

export default initializePerformanceOptimizations; 