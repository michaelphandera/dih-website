"use client"

import React from 'react';
import { aboutContent } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">About NDRRMC</h1>
              <p className="lead">{aboutContent.subtitle}</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">About Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="mb-4">Our Mission</h2>
              <p className="lead">{aboutContent.mission}</p>
              
              <h2 className="mb-4 mt-5">Our Vision</h2>
              <p className="lead">{aboutContent.vision}</p>
              
              <h2 className="mb-4 mt-5">What We Do</h2>
              <p>{aboutContent.description}</p>
              
              <div className="mt-5">
                <Link href="/leadership" className="btn style2 me-3">
                  <i className="flaticon-user me-2"></i> Our Leadership
                </Link>
                <Link href="/history" className="btn style1">
                  <i className="flaticon-calendar me-2"></i> Our History
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative rounded overflow-hidden shadow-lg h-100">
                <Image 
                  src={aboutContent.image || "/placeholder.svg"} 
                  alt="NDRRMC Operations" 
                  width={600} 
                  height={400}
                  className="img-fluid rounded"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Key Objectives</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="flaticon-verified text-primary" style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3 className="h5">Disaster Prevention</h3>
                  <p>Implementing measures to avoid or reduce the adverse impacts of hazards.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="flaticon-secure-shield text-primary" style={{ fontSize: '48px' }}></i>
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
              <h2 className="mb-2">Ready to get involved?</h2>
              <p className="lead mb-0">Join us in building a disaster-resilient community.</p>
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
