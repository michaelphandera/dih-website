import React from 'react';

const PromoVideoSection: React.FC = () => {
  return (
    <div className="promo-video style2 bg-f ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div className="content-title style4 text-center mb-40">
              <span>Intro Video <span className="bl-text">Our Video</span></span>
              <h2>Best Way To Make A Difference In The Lives Of Others</h2>
            </div>
            <a className="play-now" data-fancybox href="https://www.youtube.com/watch?v=UNSSuTSQI9I">
              <i className="ri-play-fill"></i>
              <span className="ripple"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoVideoSection;