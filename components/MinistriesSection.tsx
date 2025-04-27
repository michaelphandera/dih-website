import React from 'react';

interface Ministry {
  id: number;
  image: string;
  name: string;
  description: string;
  socialLinks: {
    website: string;
    phone: string;
    email: string;
  };
}

const MinistriesSection: React.FC = () => {
  const ministries: Ministry[] = [
    {
      id: 1,
      image: "/img/defence.png",
      name: "Ministry of Defense",
      description: "Emergency Response",
      socialLinks: {
        website: "https://defense.gov/",
        phone: "+1234567890",
        email: "defense@gov.org"
      }
    },
    // ... other ministries
  ];

  return (
    <section className="team-wrap ptb-100 bg-sand">
      <img src="/img/shape-11.png" alt="Shape" className="team-shape-one" />
      <div className="container">
        <div className="section-title style1 text-center mb-40">
          <span>National Disaster Risk Reduction and Management Councils <img src="/img/section-shape.png" alt="Shape" /></span>
          <h2>Key NDRRMC</h2>
          <p>Our integrated disaster management approach brings together multiple ministries to coordinate prevention, preparedness, response, and recovery activities.</p>
        </div>
        <div className="team-slider-two owl-carousel">
          {ministries.map(ministry => (
            <div className="team-card style2" key={ministry.id} data-aos="fade-right">
              <img src={ministry.image} alt={ministry.name} />
              <div className="team-info-wrap">
                <img src="/img/team/team-shape-1.png" alt="Shape" className="team-card-shape" />
                <div className="team-info">
                  <h3><a href={`ministries/${ministry.id}.html`}>{ministry.name}</a></h3>
                  <span>{ministry.description}</span>
                </div>
                <div className="social-link">
                  <span><i className="ri-add-line"></i></span>
                  <ul className="social-profile style1 list-style">
                    <li>
                      <a href={ministry.socialLinks.website} target="_blank" rel="noopener noreferrer">
                        <i className="ri-global-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${ministry.socialLinks.phone}`}>
                        <i className="ri-phone-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${ministry.socialLinks.email}`}>
                        <i className="ri-mail-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;