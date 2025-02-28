import React, { useState, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Utility function to generate better alt text from image filenames
 * This is a fallback for developers but should not replace proper descriptive alt text
 * 
 * @param imagePath The path or URL of the image
 * @param prefix Optional prefix to add context, e.g. "Image of" or "Photograph showing"
 * @returns A more descriptive alt text based on the filename
 */
export const generateDescriptiveAlt = (imagePath: string, prefix = ''): string => {
  // Extract just the filename without extension
  const filename = imagePath.split('/').pop()?.split('.')[0] || '';
  
  // Replace hyphens and underscores with spaces
  const readable = filename.replace(/[_-]/g, ' ');
  
  // Capitalize words
  const capitalized = readable
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Add prefix if provided
  return prefix ? `${prefix} ${capitalized}` : capitalized;
};

interface OptimizedImageProps {
  src: string;
  /**
   * Descriptive alternative text for the image.
   * - Should be meaningful and describe the content/purpose of the image
   * - For decorative images, use an empty string and aria-hidden="true"
   * - Avoid generic terms like "image" or "photo"
   * - Should be concise but descriptive (recommended 10-120 characters)
   */
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
  placeholderColor?: string;
  aboveTheFold?: boolean;
  quality?: number; // Image quality parameter for optimization services
  blur?: boolean; // Whether to use blur-up technique
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  preloadThreshold?: number;
  lqip?: string; // Low Quality Image Placeholder URL
}

/**
 * OptimizedImage Component
 * 
 * An enhanced component for rendering optimized, responsive images with proper SEO attributes
 * and Core Web Vitals optimization.
 * 
 * Features:
 * - Lazy loading with IntersectionObserver
 * - Responsive image support with srcSet and automatic WebP conversion
 * - AVIF format support for modern browsers
 * - Proper alt text for accessibility and SEO
 * - Async decoding for performance
 * - Support for fetch priority
 * - Image dimensions to prevent Cumulative Layout Shift (CLS)
 * - Low Quality Image Placeholder (LQIP) support with blur-up technique
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  sizes = '(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw', // More granular responsive sizes
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  placeholderColor = '#f3f4f6',
  aboveTheFold = false,
  quality = 80,
  blur = false,
  objectFit = 'cover',
  preloadThreshold = 200, // 200px before element enters viewport
  lqip
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [supportsWebp, setSupportsWebp] = useState(false);
  const [supportsAvif, setSupportsAvif] = useState(false);
  
  // Use the react-intersection-observer hook instead of manual implementation
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: `${preloadThreshold}px 0px`,
    threshold: 0.01,
  });
  
  // Alt text quality check
  useEffect(() => {
    // Check for empty or generic alt text in development mode
    if (process.env.NODE_ENV === 'development') {
      const lowQualityAltTexts = ['image', 'photo', 'picture', ''];
      const altLower = alt.toLowerCase().trim();
      
      if (altLower === '') {
        console.warn(`[Accessibility Warning] Empty alt text for image: ${src}. Non-decorative images should have descriptive alt text.`);
      } else if (lowQualityAltTexts.includes(altLower) || altLower.length < 10) {
        console.warn(`[Accessibility Warning] Generic or short alt text "${alt}" for image: ${src}. Please provide more descriptive alt text.`);
      }
    }
  }, [alt, src]);
  
  // If image is above the fold, override lazy loading
  const loadingStrategy = aboveTheFold ? 'eager' : loading;
  // Set high fetch priority for above-the-fold images
  const priorityStrategy = aboveTheFold ? 'high' : fetchPriority;
  
  // Determine when to load the full image
  const shouldLoadImage = aboveTheFold || inView;

  // Create a base path and file extension for generating different formats
  const { basePath, extension } = useMemo(() => {
    const ext = src.split('.').pop() || '';
    const base = src.substring(0, src.lastIndexOf('.'));
    return { basePath: base, extension: ext };
  }, [src]);
  
  // Generate different image format URLs (WebP and AVIF)
  const imageUrls = useMemo(() => {
    return {
      original: src,
      webp: `${basePath}.webp`,
      avif: `${basePath}.avif`,
    };
  }, [basePath, src]);

  // Generate srcSet for responsive images
  const generateSrcSet = useMemo(() => {
    // Include more sizes for mobile devices
    const widths = [320, 480, 640, 768, 1024, 1200, 1600]; // Added 320 and 640 for mobile
    const formatSrcSet = (format: string) => {
      return widths
        .map(w => `${basePath}-${w}.${format} ${w}w`)
        .join(', ');
    };
    
    // Generate srcsets for different formats
    return {
      original: formatSrcSet(extension),
      webp: formatSrcSet('webp'),
      avif: formatSrcSet('avif'),
    };
  }, [basePath, extension]);

  // Calculate aspect ratio for placeholder if both width and height are provided
  const aspectRatio = width && height ? (width / height) : undefined;
  
  // Add inline styles for the placeholder
  const placeholderStyle = !isLoaded ? {
    backgroundColor: placeholderColor,
    aspectRatio: aspectRatio ? `${aspectRatio}` : undefined,
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto'
  } : {};

  // Detect modern image format support
  useEffect(() => {
    // Check for WebP support
    const checkWebpSupport = async () => {
      const supported = await testImageFormat('webp');
      setSupportsWebp(supported);
    };
    
    // Check for AVIF support
    const checkAvifSupport = async () => {
      const supported = await testImageFormat('avif');
      setSupportsAvif(supported);
    };
    
    checkWebpSupport();
    checkAvifSupport();
  }, []);

  // Helper function to test image format support
  const testImageFormat = (format: string): Promise<boolean> => {
    return new Promise(resolve => {
      const image = new Image();
      image.onload = () => resolve(true);
      image.onerror = () => resolve(false);
      
      // Test strings for different formats
      const testSrc = format === 'webp' 
        ? 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA='
        : 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
      
      image.src = testSrc;
    });
  };
  
  // Handle image load and error events
  const handleLoad = () => setIsLoaded(true);
  const handleError = () => {
    setError(true);
    setIsLoaded(true); // Consider it loaded to remove placeholder
  };
  
  // Generate blur-up effect classes for transition
  const blurClasses = blur && !isLoaded ? 'filter blur-sm transition-all duration-500' : 'transition-all duration-500';
  const loadedClasses = isLoaded ? 'blur-0' : '';

  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden ${error ? 'bg-gray-200' : ''}`} 
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        aspectRatio: aspectRatio ? `${aspectRatio}` : undefined,
        maxWidth: '100%', // Ensure image container doesn't overflow on mobile
      }}
    >
      {/* Placeholder that maintains aspect ratio to prevent layout shift */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-opacity-50" 
          style={placeholderStyle}
          aria-hidden="true"
        >
          {/* Show LQIP if provided */}
          {lqip && (
            <img 
              src={lqip} 
              alt="" 
              className="w-full h-full object-cover opacity-50 filter blur-md"
              aria-hidden="true"
              role="presentation"
              loading="eager"
              width={width}
              height={height}
            />
          )}
        </div>
      )}
      
      {/* Only render the actual image when it should be loaded (based on viewport) */}
      {shouldLoadImage && (
        <picture>
          {/* AVIF format for browsers that support it */}
          {supportsAvif && (
            <source
              srcSet={generateSrcSet.avif}
              sizes={sizes}
              type="image/avif"
            />
          )}
          
          {/* WebP format for browsers that support it */}
          {supportsWebp && (
            <source
              srcSet={generateSrcSet.webp}
              sizes={sizes}
              type="image/webp"
            />
          )}
          
          {/* Original format as fallback */}
          <source 
            srcSet={generateSrcSet.original}
            sizes={sizes}
            type={`image/${extension}`}
          />
          
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            onLoad={handleLoad}
            onError={handleError}
            loading={loadingStrategy}
            decoding={decoding}
            fetchPriority={priorityStrategy}
            className={`w-full h-full ${objectFit} ${className} ${blurClasses} ${loadedClasses}`}
            style={{ opacity: isLoaded ? 1 : 0 }}
          />
        </picture>
      )}
      
      {/* Show error message if image fails to load */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm p-2 text-center">
          <span>Image could not be loaded</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
