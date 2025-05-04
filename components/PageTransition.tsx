'use client';

import React, { useEffect, useState, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import PageLoader from './PageLoader';
import { useLoading } from '@/contexts/LoadingContext';

interface PageTransitionProps {
  children: React.ReactNode;
  forceLoading?: boolean;
}

// Global variable to track if a loader is currently active
let isGlobalLoaderActive = false;

// Debounce function to prevent rapid loading state changes
const debounce = (fn: Function, ms = 300) => {
  let timeoutId: NodeJS.Timeout;
  return function(...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), ms);
  };
};

const PageTransition: React.FC<PageTransitionProps> = ({ children, forceLoading = false }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const prevPathRef = useRef(pathname);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const initialRenderRef = useRef(true);
  const { stopLoading } = useLoading();

  // Track if component is mounted
  const isMountedRef = useRef(true);

  useEffect(() => {
    // Set mounted flag
    isMountedRef.current = true;

    // Cleanup function
    return () => {
      isMountedRef.current = false;
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      // Ensure global loader is reset when component unmounts
      isGlobalLoaderActive = false;
    };
  }, []);

  // Debounced set loading function to prevent rapid changes
  const debouncedSetLoading = useRef(
    debounce((value: boolean) => {
      if (isMountedRef.current) {
        // Only set loading to true if no other loader is active
        if (value) {
          if (!isGlobalLoaderActive) {
            isGlobalLoaderActive = true;
            setIsLoading(true);
          }
        } else {
          isGlobalLoaderActive = false;
          setIsLoading(false);
        }
      }
    }, 100)
  ).current;

  // Listen for route changes
  useEffect(() => {
    // Skip the initial render
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    // Check if this is a real route change (not just initial render)
    if (prevPathRef.current !== pathname) {
      // Only show loading for significant navigation changes
      // Skip loading for hash changes or query param changes
      const isSignificantNavigation =
        prevPathRef.current.split('?')[0].split('#')[0] !==
        pathname.split('?')[0].split('#')[0];

      if (isSignificantNavigation && !isGlobalLoaderActive) {
        debouncedSetLoading(true);
      }

      // Store the new path
      prevPathRef.current = pathname;

      // Set a timeout to ensure loading state doesn't get stuck
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }

      loadingTimeoutRef.current = setTimeout(() => {
        if (isMountedRef.current) {
          debouncedSetLoading(false);
          stopLoading(); // Also stop any global loading
        }
      }, 500);
    }
  }, [pathname, searchParams, debouncedSetLoading, stopLoading]);

  // Handle forced loading state from parent
  useEffect(() => {
    if (forceLoading && isMountedRef.current && !isGlobalLoaderActive) {
      debouncedSetLoading(true);
    } else if (!forceLoading && isMountedRef.current) {
      // Add a small delay before turning off loading to prevent flickering
      setTimeout(() => {
        if (isMountedRef.current) {
          debouncedSetLoading(false);
        }
      }, 200); // Reduced from 300ms to 200ms
    }
  }, [forceLoading, debouncedSetLoading]);

  // Safety timeout to ensure loading state doesn't get stuck
  useEffect(() => {
    if (isLoading) {
      const safetyTimeout = setTimeout(() => {
        if (isMountedRef.current) {
          console.log('PageTransition safety timeout triggered');
          debouncedSetLoading(false);
          stopLoading(); // Also stop any global loading

          // Force hide any loaders that might be stuck
          const loaders = document.querySelectorAll('.page-loader-overlay, .position-fixed.top-0.start-0.w-100.h-100');
          loaders.forEach(loader => {
            (loader as HTMLElement).style.display = 'none';
          });
        }
      }, 1200); // Reduced for faster response

      return () => clearTimeout(safetyTimeout);
    }
  }, [isLoading, debouncedSetLoading, stopLoading]);

  return (
    <>
      {/* Loaders removed as requested */}
      <div className="opacity-100">
        {children}
      </div>
    </>
  );
};

export default PageTransition;
