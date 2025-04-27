"use client"

import React from 'react';
import { aboutContent } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function MissionVisionPage() {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">Mission & Vision</h1>
              <p className="lead">Our guiding principles and aspirations</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/about" className="text-white">About Us</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Mission & Vision</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Content */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="position-relative">
                <Image 
                  src="/placeholder.svg" 
                  alt="Our Mission" 
                  width={600} 
                  height={400}
                  className="img-fluid rounded shadow-lg"
                />
                <div className="position-absolute top-0 start-0 bg-primary text-white p-3 rounded-end" style={{ marginTop: '20px' }}>
                  <i className="flaticon-verified me-2"></i> Our Mission
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 mb-4">Our Mission</h2>
              <p className="lead mb-4">{aboutContent.mission}</p>
              <div className="d-flex mb-3">
                <div className="me-3">
                  <i className="flaticon-check-mark text-primary" style={{ fontSize: '24px' }}></i>
                </div>
                <div>
                  <h4>Coordination</h4>
                  <p>Coordinate disaster risk reduction and management activities across all levels of government.</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="me-3">
                  <i className="flaticon-check-mark text-primary" style={{ fontSize: '24px' }}></i>
                </div>
                <div>
                  <h4>Integration</h4>
                  <p>Integrate disaster risk reduction into development policies, plans, and programs.</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="me-3">
                  <i className="flaticon-check-mark text-primary" style={{ fontSize: '24px' }}></i>
                </div>
                <div>
                  <h4>Implementation</h4>
                  <p>Implement comprehensive disaster risk reduction and management programs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-5 pt-5">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <div className="position-relative">
                <Image 
                  src="/placeholder.svg" 
                  alt="Our Vision" 
                  width={600} 
                  height={400}
                  className="img-fluid rounded shadow-lg"
                />
                <div className="position-absolute top-0 end-0 bg-accent text-white p-3 rounded-start" style={{ marginTop: '20px' }}>
                  <i className="flaticon-secure-shield me-2"></i> Our Vision
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2 className="display-5 mb-4">Our Vision</h2>
              <p className="lead mb-4">{aboutContent.vision}</p>
              <div className="d-flex mb-3">
                <div className="me-3">
                  <i className="flaticon-check-mark text-accent" style={{ fontSize: '24px' }}></i>
                </div>
                <div>
                  <h4>Resilience</h4>
                  <p>Building communities that can withstand, adapt to, and recover from disasters.</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="me-3">
                  <i className="flaticon-check-mark text-accent" style={{ fontSize: '24px' }}></i>
                </div>
                <div>
                  <h4>Safety</h4>
                  <p>Ensuring the safety of people, property, and the environment from disasters.</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="me-3">
                  <i className="flaticon-check-mark text-accent" style={{ fontSize: '24px' }}></i>
                </div>
                <div>
                  <h4>Preparedness</h4>
                  <p>Creating communities that are prepared and ready to respond to disasters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Core Values</h2>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="flaticon-heart text-primary" style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3 className="h4">Compassion</h3>
                  <p>We care deeply about the communities we serve and the people affected by disasters.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="flaticon-support text-primary" style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3 className="h4">Service</h3>
                  <p>We are dedicated to serving the public and meeting their needs during disasters.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="flaticon-secure-shield text-primary" style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3 className="h4">Integrity</h3>
                  <p>We uphold the highest standards of honesty, transparency, and ethical conduct.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="flaticon-campaign text-primary" style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3 className="h4">Excellence</h3>
                  <p>We strive for excellence in all our activities and continuously improve our services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Strategic Goals</h2>
          
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h3 className="mb-4">Short-term Goals (1-2 Years)</h3>
                  <ul className="list-unstyled">
                    <li className="d-flex mb-3">
                      <i className="flaticon-right-arrow text-primary me-3 mt-1"></i>
                      <div>Enhance early warning systems in high-risk areas</div>
                    </li>
                    <li className="d-flex mb-3">
                      <i className="flaticon-right-arrow text-primary me-3 mt-1"></i>
                      <div>Conduct comprehensive risk assessments in all districts</div>
                    </li>
                    <li className="d-flex mb-3">
                      <i className="flaticon-right-arrow text-primary me-3 mt-1"></i>
                      <div>Develop and implement disaster preparedness training programs</div>
                    </li>
                    <li className="d-flex">
                      <i className="flaticon-right-arrow text-primary me-3 mt-1"></i>
                      <div>Strengthen coordination mechanisms with local governments</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h3 className="mb-4">Long-term Goals (3-5 Years)</h3>
                  <ul className="list-unstyled">
                    <li className="d-flex mb-3">
                      <i className="flaticon-right-arrow text-primary me-3 mt-1"></i>
                      <div>Build resilient infrastructure in all vulnerable communities</div>
                    </li>
                    <li className="d-flex mb-3">
                      <i className="flaticon-right-arrow text-primary me-3 mt-1"></i>
                      <div>Integrate disaster risk reduction into all development plans</div>
                    </li>
                    <li className="d-flex mb-3">
                      <i className="flaticon-right-arrow text-primary me-3 mt-1"></i>
                      <div>Establish a comprehensive disaster management information system</div>
                    </li>
                    <li className="d-flex">
                      <i className="flaticon-right-arrow text-primary me-3 mt-1"></i>
                      <div>Develop sustainable funding mechanisms for disaster risk reduction</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="mb-2">Help us achieve our mission</h2>
              <p className="lead mb-0">Join our efforts to build a disaster-resilient community.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href="/volunteer" className="btn btn-light btn-lg">
                Volunteer Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
