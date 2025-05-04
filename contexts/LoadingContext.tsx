'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import PageLoader from '@/components/PageLoader';
import { usePathname, useSearchParams } from 'next/navigation';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingCount, setLoadingCount] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Use refs to track loading timeouts and component mount state
  const loadingTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const safetyTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = React.useRef(true);
  const lastLoadingTimeRef = React.useRef<number>(0);

  // Debounce function to prevent rapid loading state changes
  const debounce = (fn: Function, ms = 300) => {
    let timeoutId: NodeJS.Timeout;
    return function(...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), ms);
    };
  };

  // Debounced set loading function
  const debouncedSetIsLoading = React.useCallback(
    debounce((value: boolean) => {
      if (isMountedRef.current) {
        setIsLoading(value);
      }
    }, 100),
    []
  );

  const setLoading = (loading: boolean) => {
    // Clear any existing timeout
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
      loadingTimeoutRef.current = null;
    }

    // Prevent rapid toggling by enforcing a minimum time between state changes
    const now = Date.now();
    const timeSinceLastLoading = now - lastLoadingTimeRef.current;

    if (loading) {
      // Increment loading count
      setLoadingCount(prev => prev + 1);
      lastLoadingTimeRef.current = now;
      debouncedSetIsLoading(true);

      // Safety timeout - ensure loading state doesn't get stuck
      loadingTimeoutRef.current = setTimeout(() => {
        if (isMountedRef.current) {
          setLoadingCount(0);
          debouncedSetIsLoading(false);
        }
      }, 2000); // Reduced from 3000ms to 2000ms for faster response
    } else {
      // Only turn off loading if we're not in a rapid toggle situation
      if (timeSinceLastLoading > 500 || !isLoading) {
        // Decrement loading count
        setLoadingCount(prev => Math.max(0, prev - 1));

        // Small delay before turning off loading to prevent flickering
        setTimeout(() => {
          if (isMountedRef.current) {
            debouncedSetIsLoading(false);
          }
        }, 200); // Reduced from 300ms to 200ms
      }
    }
  };

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  // Set mounted flag and clean up on unmount
  React.useEffect(() => {
    isMountedRef.current = true;

    // Always set a global safety timeout to prevent stuck loading states
    safetyTimeoutRef.current = setTimeout(() => {
      if (isMountedRef.current && isLoading) {
        console.log('Safety timeout triggered - forcing loading state to false');
        setLoadingCount(0);
        debouncedSetIsLoading(false);
      }
    }, 3000);

    return () => {
      isMountedRef.current = false;
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      if (safetyTimeoutRef.current) {
        clearTimeout(safetyTimeoutRef.current);
      }
    };
  }, [isLoading, debouncedSetIsLoading]);

  // Effect to handle loading count changes
  React.useEffect(() => {
    if (loadingCount <= 0 && isLoading) {
      debouncedSetIsLoading(false);
    }
  }, [loadingCount, isLoading, debouncedSetIsLoading]);

  // Reset loading state on route change
  useEffect(() => {
    // Short delay to allow any new page to start its loading if needed
    const routeChangeTimeout = setTimeout(() => {
      if (isLoading) {
        console.log('Route changed - resetting loading state');
        setLoadingCount(0);
        debouncedSetIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(routeChangeTimeout);
  }, [pathname, searchParams, isLoading, debouncedSetIsLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading, startLoading, stopLoading }}>
      {/* Loaders removed as requested */}
      {children}
    </LoadingContext.Provider>
  );
};
