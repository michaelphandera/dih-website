import React from 'react';

interface CTAButton {
  text: string;
  link: string;
  style: 'style1' | 'style2';
}

const CommunityCTASection: React.FC = () => {
  const buttons: CTAButton[] = [
    { text: "Become a Volunteer", link: "community/volunteer.html", style: "style1" },
    { text: "Attend Training", link: "community/training.html", style: "style2" }
  ];

  return (
    <section className="cta-wrap style2 bg-f ptb-100" style={{ backgroundImage: "url('/img/feature-bg.jpg')" }}>
      <img src="/img/bird-2.png" alt="Bird" className="cta-shape-one flyRight" />
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
            <div className="content-title style1 text-center mb-40" data-aos="fade-up">
              <span>Be Prepared <img src="/img/section-shape.png" alt="Shape" /></span>
              <h2>Join Our Community Preparedness Program</h2>
            </div>
            <div className="cta-btn" data-aos="fade-up">
              {buttons.map((button, index) => (
                <a key={index} href={button.link} className={`btn ${button.style}`}>
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityCTASection;