"use client"

import React from 'react';

const EmergencyContactsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="section-title style3 text-center mb-40">
          <span>Emergency Contacts</span>
          <h2>Important Numbers to Remember</h2>
          <p>Keep these emergency contact numbers handy for quick access during emergencies</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            <div className="contact-card d-flex align-items-center p-4 mb-4 rounded shadow-sm border-start border-5 border-danger">
              <div className="contact-icon me-4">
                <i className="flaticon-telephone text-danger" style={{ fontSize: '36px' }}></i>
              </div>
              <div className="contact-info">
                <h3 className="h5 mb-1">National Emergency</h3>
                <p className="mb-0 fw-bold fs-4">999</p>
                <p className="text-muted small mb-0">Police, Fire, Ambulance</p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <div className="contact-card d-flex align-items-center p-4 mb-4 rounded shadow-sm border-start border-5 border-primary">
              <div className="contact-icon me-4">
                <i className="flaticon-call text-primary" style={{ fontSize: '36px' }}></i>
              </div>
              <div className="contact-info">
                <h3 className="h5 mb-1">Disaster Management Center</h3>
                <p className="mb-0 fw-bold fs-4">405-5555</p>
                <p className="text-muted small mb-0">24/7 Emergency Hotline</p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
            <div className="contact-card d-flex align-items-center p-4 mb-4 rounded shadow-sm border-start border-5 border-success">
              <div className="contact-icon me-4">
                <i className="flaticon-phone-call-1 text-success" style={{ fontSize: '36px' }}></i>
              </div>
              <div className="contact-info">
                <h3 className="h5 mb-1">Medical Emergency</h3>
                <p className="mb-0 fw-bold fs-4">114</p>
                <p className="text-muted small mb-0">SAMU Medical Service</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            <div className="contact-card d-flex align-items-center p-4 mb-4 rounded shadow-sm border-start border-5 border-warning">
              <div className="contact-icon me-4">
                <i className="flaticon-pin-1 text-warning" style={{ fontSize: '36px' }}></i>
              </div>
              <div className="contact-info">
                <h3 className="h5 mb-1">Coast Guard</h3>
                <p className="mb-0 fw-bold fs-4">212-2747</p>
                <p className="text-muted small mb-0">Maritime Emergencies</p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <div className="contact-card d-flex align-items-center p-4 mb-4 rounded shadow-sm border-start border-5 border-info">
              <div className="contact-icon me-4">
                <i className="flaticon-email-3 text-info" style={{ fontSize: '36px' }}></i>
              </div>
              <div className="contact-info">
                <h3 className="h5 mb-1">Weather Information</h3>
                <p className="mb-0 fw-bold fs-4">171</p>
                <p className="text-muted small mb-0">Meteorological Services</p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
            <div className="contact-card d-flex align-items-center p-4 mb-4 rounded shadow-sm border-start border-5 border-secondary">
              <div className="contact-icon me-4">
                <i className="flaticon-mail text-secondary" style={{ fontSize: '36px' }}></i>
              </div>
              <div className="contact-info">
                <h3 className="h5 mb-1">Fire Services</h3>
                <p className="mb-0 fw-bold fs-4">115</p>
                <p className="text-muted small mb-0">Fire Emergency</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <a href="/emergency-contacts" className="btn style2">
            <i className="flaticon-phone-call me-2"></i> View All Emergency Contacts
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContactsSection;
