"use client";

import React, { useEffect, useState } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent-banner" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.9)',
      color: 'white',
      padding: '15px 0',
      zIndex: 999
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <p className="mb-lg-0 mb-3">
              This website uses cookies to ensure you get the best experience on our website and to enable emergency alert functionality.
              By continuing to use this site, you consent to our use of cookies.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <button
              id="acceptCookies"
              className="btn style2 me-2"
              onClick={acceptCookies}
            >
              Accept
            </button>
            <a href="privacy-policy.html" className="btn style6">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;