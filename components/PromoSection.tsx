'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image"

const PromoSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ensure the component is visible when mounted
    setIsVisible(true);

    // Force a re-render after a short delay to ensure proper positioning
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <section className="promo-section">
      <div className="container">
        <div className="promo-wrap style2" style={{ position: 'relative', zIndex: 5, marginTop: '-150px' }}>
          <Image
            src="/img/shape-8.png"
            alt="Shape"
            className="promo-shape-one"
            width={100}
            height={100}
          />
          {/* Using the same shape image for both since shape-9.png doesn't exist */}
          <Image
            src="/img/shape-8.png"
            alt="Shape"
            className="promo-shape-two"
            width={100}
            height={100}
          />

          <div className="promo-card">
            <span className="promo-icon">
              <i className="flaticon-verified" />
            </span>
            <h3>Profile</h3>
            <p className="mb-3">Learn about our mission and organization structure</p>
            <a href="#profile" className="link style1">
              View More <i className="flaticon-right-arrow" />
            </a>
          </div>

          <div className="promo-card">
            <span className="promo-icon">
              <i className="flaticon-campaign" />
            </span>
            <h3>Response</h3>
            <p className="mb-3">Discover our emergency response protocols</p>
            <a href="#infographics" className="link style1">
              View More <i className="flaticon-right-arrow" />
            </a>
          </div>

          <div className="promo-card">
            <span className="promo-icon">
              <i className="flaticon-secure-shield" />
            </span>
            <h3>Resilience</h3>
            <p className="mb-3">Building stronger communities through preparedness</p>
            <a href="#infographics" className="link style1">
              View More <i className="flaticon-right-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;