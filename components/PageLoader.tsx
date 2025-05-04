'use client';

import React, { useEffect, useState, useRef } from 'react';

interface PageLoaderProps {
  fullPage?: boolean;
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'white';
  maxDisplayTime?: number; // Maximum time to display the loader in milliseconds
}

const PageLoader: React.FC<PageLoaderProps> = ({
  fullPage = false,
  message = 'Loading...',
  size = 'md',
  color = 'primary',
  maxDisplayTime = 3000 // Default to 3 seconds max display time
}) => {
  const [visible, setVisible] = useState(true);
  const mountTimeRef = useRef(Date.now());

  // Effect to automatically hide the loader after maxDisplayTime
  useEffect(() => {
    // Set a timeout to hide the loader
    const timeoutId = setTimeout(() => {
      setVisible(false);
    }, maxDisplayTime);

    // Set a safety timeout to force hide all loaders
    const safetyTimeoutId = setTimeout(() => {
      // Force hide any loaders that might be stuck
      const loaders = document.querySelectorAll('.page-loader-overlay, .position-fixed.top-0.start-0.w-100.h-100');
      loaders.forEach(loader => {
        if (loader instanceof HTMLElement) {
          loader.style.display = 'none';
        }
      });
    }, maxDisplayTime + 500); // Add a small buffer

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(safetyTimeoutId);
    };
  }, [maxDisplayTime]);

  // If not visible, don't render anything
  if (!visible) return null;

  // Determine spinner size class
  const spinnerSizeClass = size === 'sm'
    ? 'spinner-border-sm'
    : size === 'lg'
      ? 'spinner-border spinner-border-lg'
      : 'spinner-border';

  // Determine container classes based on fullPage prop
  const containerClasses = fullPage
    ? 'position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white bg-opacity-75 z-1050'
    : 'py-5 d-flex flex-column justify-content-center align-items-center';

  return (
    <div className={containerClasses} style={{ zIndex: 1050 }}>
      <div className="text-center">
        <div className={`${spinnerSizeClass} text-${color} mb-3`} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        {message && <p className="mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default PageLoader;
