"use client";

import { useEffect } from 'react';

export default function Scripts() {
  useEffect(() => {
    // Load scripts dynamically
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        console.log(`Attempting to load script: ${src}`);

        // Check if script already exists
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          console.log(`Script already loaded: ${src}`);
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = true;

        script.onload = () => {
          console.log(`Successfully loaded script: ${src}`);
          resolve();
        };

        script.onerror = (error) => {
          console.error(`Failed to load script: ${src}`, error);
          reject(new Error(`Failed to load script: ${src}`));
        };

        document.body.appendChild(script);
      });
    };

    // Load scripts in order
    const loadScripts = async () => {
      try {
        console.log('Starting to load scripts...');

        // jQuery must be loaded first
        try {
          await loadScript('/js/jquery.min.js');
          console.log('jQuery loaded successfully');
        } catch (error) {
          console.error('Error loading jQuery:', error);
          // Continue with other scripts even if jQuery fails
        }

        // Then load other scripts
        const scripts = [
          '/js/bootstrap.bundle.min.js',
          '/js/form-validator.min.js',
          '/js/contact-form-script.js',
          '/js/aos.js',
          '/js/owl.carousel.min.js',
          '/js/owl-thumb.min.js',
          '/js/odometer.js',
          '/js/circle-progressbar.min.js',
          '/js/fancybox.min.js',
          '/js/jquery.appear.js',
          '/js/tweenmax.min.js',
          '/js/main.js'
        ];

        // Load remaining scripts one by one to better track errors
        for (const src of scripts) {
          try {
            await loadScript(src);
          } catch (error) {
            console.error(`Error loading ${src}:`, error);
            // Continue with other scripts
          }
        }

        console.log('All scripts loading process completed');
      } catch (error) {
        console.error('Error in script loading process:', error);
      }
    };

    // Execute script loading
    loadScripts();

    // Cleanup function
    return () => {
      // This is optional and may not be necessary in most cases
      console.log('Scripts component unmounted');
    };
  }, []);

  return null; // This component doesn't render anything
}
