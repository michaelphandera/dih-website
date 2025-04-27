"use client"

import React from 'react';
import Link from 'next/link';

const DisasterTypesSection: React.FC = () => {
  return (
    <section className="py-12 bg-light">
      <div className="container">
        <div className="section-title style3 text-center mb-40">
          <span>Disaster Types</span>
          <h2>Preparing for Different Emergencies</h2>
          <p>Learn about different types of disasters and how to prepare for them</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            <div className="disaster-type-card text-center p-4 mb-4 rounded shadow-sm">
              <div className="disaster-icon mb-3">
                <i className="flaticon-insurance text-primary" style={{ fontSize: '48px' }}></i>
              </div>
              <h3 className="h5 mb-3">Cyclones</h3>
              <p className="mb-3">Prepare for tropical cyclones with our comprehensive guides</p>
              <Link href="/disasters/cyclones" className="link style1">
                Learn More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <div className="disaster-type-card text-center p-4 mb-4 rounded shadow-sm">
              <div className="disaster-icon mb-3">
                <i className="flaticon-health-care text-primary" style={{ fontSize: '48px' }}></i>
              </div>
              <h3 className="h5 mb-3">Floods</h3>
              <p className="mb-3">Protect your family and property from flood damage</p>
              <Link href="/disasters/floods" className="link style1">
                Learn More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
            <div className="disaster-type-card text-center p-4 mb-4 rounded shadow-sm">
              <div className="disaster-icon mb-3">
                <i className="flaticon-support text-primary" style={{ fontSize: '48px' }}></i>
              </div>
              <h3 className="h5 mb-3">Earthquakes</h3>
              <p className="mb-3">Know what to do before, during and after an earthquake</p>
              <Link href="/disasters/earthquakes" className="link style1">
                Learn More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
            <div className="disaster-type-card text-center p-4 mb-4 rounded shadow-sm">
              <div className="disaster-icon mb-3">
                <i className="flaticon-money-box text-primary" style={{ fontSize: '48px' }}></i>
              </div>
              <h3 className="h5 mb-3">Tsunamis</h3>
              <p className="mb-3">Coastal safety and evacuation plans for tsunami events</p>
              <Link href="/disasters/tsunamis" className="link style1">
                Learn More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            <div className="disaster-type-card text-center p-4 mb-4 rounded shadow-sm">
              <div className="disaster-icon mb-3">
                <i className="flaticon-application text-primary" style={{ fontSize: '48px' }}></i>
              </div>
              <h3 className="h5 mb-3">Droughts</h3>
              <p className="mb-3">Water conservation and management during drought periods</p>
              <Link href="/disasters/droughts" className="link style1">
                Learn More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <div className="disaster-type-card text-center p-4 mb-4 rounded shadow-sm">
              <div className="disaster-icon mb-3">
                <i className="flaticon-heart text-primary" style={{ fontSize: '48px' }}></i>
              </div>
              <h3 className="h5 mb-3">Pandemics</h3>
              <p className="mb-3">Public health guidelines and emergency response</p>
              <Link href="/disasters/pandemics" className="link style1">
                Learn More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
            <div className="disaster-type-card text-center p-4 mb-4 rounded shadow-sm">
              <div className="disaster-icon mb-3">
                <i className="flaticon-share text-primary" style={{ fontSize: '48px' }}></i>
              </div>
              <h3 className="h5 mb-3">Landslides</h3>
              <p className="mb-3">Identifying risks and safety measures for landslide-prone areas</p>
              <Link href="/disasters/landslides" className="link style1">
                Learn More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
            <div className="disaster-type-card text-center p-4 mb-4 rounded shadow-sm">
              <div className="disaster-icon mb-3">
                <i className="flaticon-check-mark text-primary" style={{ fontSize: '48px' }}></i>
              </div>
              <h3 className="h5 mb-3">All Hazards</h3>
              <p className="mb-3">General emergency preparedness for all types of disasters</p>
              <Link href="/disasters/all-hazards" className="link style1">
                Learn More <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisasterTypesSection;
