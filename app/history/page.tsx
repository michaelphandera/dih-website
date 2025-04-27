"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HistoryPage() {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">Our History</h1>
              <p className="lead">The evolution of disaster management in our country</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/about" className="text-white">About Us</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">History</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Our Journey Through Time</h2>
              <p className="lead">The National Disaster Risk Reduction and Management Council has evolved over the years to better serve the nation during times of crisis.</p>
            </div>
          </div>

          <div className="timeline position-relative">
            {/* Timeline Item 1 */}
            <div className="row timeline-item mb-5">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 mb-3">Establishment of the National Disaster Coordinating Council</h3>
                    <p>The National Disaster Coordinating Council (NDCC) was established as the highest policy-making body for disaster management in the country.</p>
                    <p>It was tasked with coordinating the activities of various government agencies and private organizations to ensure maximum utilization of resources during disasters.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0 d-flex align-items-center">
                <div className="timeline-date bg-primary text-white p-3 rounded text-center">
                  <h4 className="mb-0">1978</h4>
                </div>
                <div className="timeline-image ms-4">
                  <Image 
                    src="/placeholder.svg" 
                    alt="NDCC Establishment" 
                    width={400} 
                    height={250}
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="row timeline-item mb-5">
              <div className="col-lg-6 order-lg-2">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 mb-3">Implementation of the Calamity Fund</h3>
                    <p>The government established the Calamity Fund to provide financial resources for relief, rehabilitation, reconstruction, and other services in areas affected by disasters.</p>
                    <p>This fund was crucial in ensuring that resources were available for immediate response to disasters.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1 mb-4 mb-lg-0 d-flex align-items-center justify-content-end">
                <div className="timeline-image me-4">
                  <Image 
                    src="/placeholder.svg" 
                    alt="Calamity Fund" 
                    width={400} 
                    height={250}
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="timeline-date bg-primary text-white p-3 rounded text-center">
                  <h4 className="mb-0">1990</h4>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="row timeline-item mb-5">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 mb-3">Adoption of the Hyogo Framework for Action</h3>
                    <p>The Philippines adopted the Hyogo Framework for Action (HFA), a global blueprint for disaster risk reduction efforts.</p>
                    <p>This framework guided the country's disaster risk reduction efforts and helped in building the resilience of communities to disasters.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0 d-flex align-items-center">
                <div className="timeline-date bg-primary text-white p-3 rounded text-center">
                  <h4 className="mb-0">2005</h4>
                </div>
                <div className="timeline-image ms-4">
                  <Image 
                    src="/placeholder.svg" 
                    alt="Hyogo Framework" 
                    width={400} 
                    height={250}
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="row timeline-item mb-5">
              <div className="col-lg-6 order-lg-2">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 mb-3">Enactment of the Disaster Risk Reduction and Management Act</h3>
                    <p>The Philippine Disaster Risk Reduction and Management Act of 2010 (Republic Act 10121) was enacted, which transformed the NDCC into the National Disaster Risk Reduction and Management Council (NDRRMC).</p>
                    <p>This law institutionalized a comprehensive, all-hazard, multi-sectoral, inter-agency, and community-based approach to disaster risk reduction and management.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1 mb-4 mb-lg-0 d-flex align-items-center justify-content-end">
                <div className="timeline-image me-4">
                  <Image 
                    src="/placeholder.svg" 
                    alt="DRRM Act" 
                    width={400} 
                    height={250}
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="timeline-date bg-primary text-white p-3 rounded text-center">
                  <h4 className="mb-0">2010</h4>
                </div>
              </div>
            </div>

            {/* Timeline Item 5 */}
            <div className="row timeline-item">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="h4 mb-3">Present Day NDRRMC</h3>
                    <p>Today, the NDRRMC continues to lead the nation's disaster risk reduction and management efforts, focusing on building resilient communities and ensuring the safety of all citizens.</p>
                    <p>The council has expanded its capabilities and resources to better respond to the increasing frequency and intensity of disasters due to climate change.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0 d-flex align-items-center">
                <div className="timeline-date bg-primary text-white p-3 rounded text-center">
                  <h4 className="mb-0">Present</h4>
                </div>
                <div className="timeline-image ms-4">
                  <Image 
                    src="/placeholder.svg" 
                    alt="Present Day NDRRMC" 
                    width={400} 
                    height={250}
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Key Milestones</h2>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <i className="flaticon-calendar text-primary" style={{ fontSize: '36px' }}></i>
                    </div>
                    <h3 className="h5 mb-0">2013</h3>
                  </div>
                  <h4 className="h6 mb-3">Response to Typhoon Haiyan (Yolanda)</h4>
                  <p>Led the largest disaster response operation in the country's history following Typhoon Haiyan, which affected over 14 million people.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <i className="flaticon-calendar text-primary" style={{ fontSize: '36px' }}></i>
                    </div>
                    <h3 className="h5 mb-0">2015</h3>
                  </div>
                  <h4 className="h6 mb-3">Adoption of the Sendai Framework</h4>
                  <p>Adopted the Sendai Framework for Disaster Risk Reduction, which guides the country's disaster risk reduction efforts until 2030.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <i className="flaticon-calendar text-primary" style={{ fontSize: '36px' }}></i>
                    </div>
                    <h3 className="h5 mb-0">2020</h3>
                  </div>
                  <h4 className="h6 mb-3">COVID-19 Pandemic Response</h4>
                  <p>Played a crucial role in the country's response to the COVID-19 pandemic, coordinating efforts to mitigate its impact.</p>
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
              <h2 className="mb-2">Learn more about our work</h2>
              <p className="lead mb-0">Discover how we're building on our history to create a safer future.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href="/resources" className="btn btn-light btn-lg">
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
