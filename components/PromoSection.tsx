import React from 'react';
import Image from "next/image"

const PromoSection: React.FC = () => {
  return (
    <div className="container">
      <div className="promo-wrap style2" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={200}>
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
  );
};

export default PromoSection;