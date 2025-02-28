import React, { Suspense, lazy, ComponentType } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  forceLoad?: boolean;
  children?: React.ReactNode;
  id?: string;
  preloadDistance?: number;
  skipPreload?: boolean;
}

/**
 * LazyComponent
 * 
 * An enhanced component that lazily loads other components when they are about to enter the viewport
 * using react-intersection-observer. This improves initial page load performance by
 * only loading components when they're needed.
 * 
 * @param component - Function that returns a dynamic import of a component
 * @param fallback - React node to show while the component is loading
 * @param threshold - Visibility threshold to trigger loading (0-1)
 * @param rootMargin - Margin around the root similar to CSS margin
 * @param forceLoad - Whether to force loading regardless of visibility
 * @param children - Children to pass to the lazy-loaded component
 * @param id - Optional ID for the container element
 * @param preloadDistance - Distance in pixels to preload before component is visible
 * @param skipPreload - Whether to skip preloading and only load when in view
 */
const LazyComponent: React.FC<LazyComponentProps> = ({
  component,
  fallback = <div className="min-h-[100px] bg-gray-100 animate-pulse rounded"></div>,
  threshold = 0.1,
  rootMargin = '200px 0px',
  forceLoad = false,
  children,
  id,
  preloadDistance = 300,
  skipPreload = false,
}) => {
  // Use react-intersection-observer hook for better performance
  const { ref, inView } = useInView({
    threshold,
    rootMargin: `${preloadDistance}px 0px`,
    triggerOnce: true,
  });
  
  // Determine if we should load the component
  const shouldLoad = forceLoad || (!skipPreload && inView);
  
  // Dynamically import the component using React.lazy
  const LazyLoadedComponent = lazy(component);
  
  // Prefetch the component when it's about to enter the viewport
  React.useEffect(() => {
    if (inView && !forceLoad && !shouldLoad) {
      // Prefetch the component
      component().then(() => {
        // This will ensure the code is loaded but not rendered yet
        console.debug('Component prefetched:', component.toString().slice(0, 50));
      }).catch(e => {
        console.error('Error prefetching component:', e);
      });
    }
  }, [inView, forceLoad, component, shouldLoad]);
  
  return (
    <div 
      ref={ref} 
      id={id} 
      className={`transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      {shouldLoad ? (
        <Suspense fallback={fallback}>
          <LazyLoadedComponent>{children}</LazyLoadedComponent>
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

// Pre-load high-priority paths (e.g., for essential navigation routes)
export const preloadComponent = (componentImport: () => Promise<{ default: ComponentType<any> }>) => {
  // We don't actually render anything, just trigger the import
  componentImport().catch(err => console.warn('Error preloading component:', err));
};

export default LazyComponent; 