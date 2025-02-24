import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
}

/**
 * OptimizedImage Component
 * 
 * A component for rendering optimized, responsive images with proper SEO attributes.
 * Features:
 * - Lazy loading by default
 * - Responsive image support with srcSet
 * - Proper alt text for accessibility and SEO
 * - Async decoding for performance
 * - Support for fetch priority
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  sizes = '100vw',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto'
}) => {
  // Generate srcSet for responsive images
  // This is a simplified version - in a real implementation, you would
  // have actual different sized versions of the image
  const generateSrcSet = () => {
    // Extract file extension
    const extension = src.split('.').pop();
    const basePath = src.substring(0, src.lastIndexOf('.'));
    
    // For this example, we'll just append width indicators to the filename
    // In a real implementation, you would have actual different sized images
    return `
      ${basePath}-small.${extension} 480w,
      ${basePath}-medium.${extension} 800w,
      ${basePath}-large.${extension} 1200w
    `;
  };
  
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      sizes={sizes}
      srcSet={generateSrcSet()}
    />
  );
};

export default OptimizedImage;
