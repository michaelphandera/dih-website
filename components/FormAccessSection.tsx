import React from 'react';

interface AccessCard {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonStyle: 'style1' | 'style2';
  color: string;
}

const FormAccessSection: React.FC = () => {
  const accessCards: AccessCard[] = [
    {
      icon: "ri-government-line",
      title: "NDRRMC Officials",
      description: "Access ministry-specific dashboards, upload documents, and coordinate with districts.",
      buttonText: "Ministry Login",
      buttonLink: "portal/ministry-login.html",
      buttonStyle: "style1",
      color: "#338F7A"
    },
    {
      icon: "ri-map-pin-2-line",
      title: "District Officials",
      description: "Manage district resources, update local emergency plans, and submit situation reports.",
      buttonText: "District Login",
      buttonLink: "portal/district-login.html",
      buttonStyle: "style2",
      color: "#F59946"
    }
  ];

  return (
    <section className="cta-wrap style1 bg-f ptb-100" style={{ backgroundImage: "url('/img/cta-bg-1.jpg')" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
            <div className="content-title style1 text-center mb-40" data-aos="fade-up">
              <span>Secure Access <img src="/img/section-shape.png" alt="Shape" /></span>
              <h2>NDRRMC & District Official Portal</h2>
              <p>Authorized officials can access secure forms, upload documents, and manage district-specific resources.</p>
            </div>
            <div className="row" data-aos="fade-up">
              {accessCards.map((card, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <div className="card h-100" style={{ borderRadius: "10px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
                    <div className="card-body p-4 text-center">
                      <i className={card.icon} style={{ 
                        fontSize: "48px", 
                        color: card.color, 
                        marginBottom: "15px" 
                      }}></i>
                      <h4>{card.title}</h4>
                      <p>{card.description}</p>
                      <a href={card.buttonLink} className={`btn ${card.buttonStyle} mt-3`}>
                        {card.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormAccessSection;