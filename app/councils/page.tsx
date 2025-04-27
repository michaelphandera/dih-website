"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navigationLinks } from '@/lib/data';

export default function CouncilsPage() {
  // Extract councils from navigation links
  const councilsData = navigationLinks.find(link => link.name === "Councils")?.columns || [];
  
  // Flatten the array of arrays into a single array
  const allCouncils = councilsData.flat();

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">Disaster Management Councils</h1>
              <p className="lead">Coordinating bodies for disaster management across different sectors</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Councils</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Councils Overview */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">About Our Councils</h2>
              <p className="lead">The National Disaster Risk Reduction and Management Council works with various sectoral councils to ensure comprehensive disaster management across all areas of governance.</p>
            </div>
          </div>

          <div className="row g-4">
            {allCouncils.map((council, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3">
                        <i className="flaticon-verified text-primary" style={{ fontSize: '36px' }}></i>
                      </div>
                      <h3 className="h5 mb-0">{council.name} Council</h3>
                    </div>
                    <p>Responsible for coordinating disaster management efforts in the {council.name.toLowerCase()} sector, ensuring preparedness, response, and recovery.</p>
                    <Link href={council.href} className="btn style2 mt-3">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Council Structure */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Council Structure</h2>
          
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="mb-4">National Level</h3>
                  <ul className="list-unstyled">
                    <li className="d-flex mb-3">
                      <i className="flaticon-right-arrow text-primary me-3 mt-1"></i>
                      <div>
                        <strong>National Disaster Risk Reduction and Management Council (NDRRMC)</strong>
                        <p>The highest policy-making body for disaster management at the national level.</p>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <i className="flaticon-right-arrow text-primary me-3 mt-1"></i>
                      <div>
                        <strong>Office of Civil Defense (OCD)</strong>
                        <p>The implementing arm of the NDRRMC, responsible for administering a comprehensive disaster management program.</p>
                      </div>
                    </li>
                    <li className="d-flex">
                      <i className="flaticon-right-arrow text-primary me-3 mt-1"></i>
                      <div>
                        <strong>Sectoral Councils</strong>
                        <p>Specialized councils focusing on specific sectors such as agriculture, health, education, etc.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="mb-4">Local Level</h3>
                  <ul className="list-unstyled">
                    <li className="d-flex mb-3">
                      <i className="flaticon-right-arrow text-primary me-3 mt-1"></i>
                      <div>
                        <strong>Regional Disaster Risk Reduction and Management Councils (RDRRMCs)</strong>
                        <p>Coordinate disaster management efforts at the regional level.</p>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <i className="flaticon-right-arrow text-primary me-3 mt-1"></i>
                      <div>
                        <strong>Provincial Disaster Risk Reduction and Management Councils (PDRRMCs)</strong>
                        <p>Coordinate disaster management efforts at the provincial level.</p>
                      </div>
                    </li>
                    <li className="d-flex">
                      <i className="flaticon-right-arrow text-primary me-3 mt-1"></i>
                      <div>
                        <strong>City/Municipal Disaster Risk Reduction and Management Councils (C/MDRRMCs)</strong>
                        <p>Coordinate disaster management efforts at the city or municipal level.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Council Functions */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Key Functions of Councils</h2>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="flaticon-secure-shield text-primary" style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3 className="h5">Disaster Prevention</h3>
                  <p>Implementing measures to avoid or reduce the adverse impacts of hazards in their respective sectors.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="flaticon-verified text-primary" style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3 className="h5">Disaster Preparedness</h3>
                  <p>Building the knowledge and capacities to effectively anticipate and respond to disasters.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="flaticon-campaign text-primary" style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3 className="h5">Disaster Response</h3>
                  <p>Providing emergency services and public assistance during or immediately after a disaster.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="flaticon-support text-primary" style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3 className="h5">Disaster Recovery</h3>
                  <p>Restoring and improving facilities, livelihoods, and living conditions of disaster-affected communities.</p>
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
              <h2 className="mb-2">Want to learn more about a specific council?</h2>
              <p className="lead mb-0">Explore our sectoral councils and their disaster management initiatives.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href="/contact" className="btn btn-light btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
