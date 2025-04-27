"use client"

import React from 'react';
import { keyPersonnel } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function LeadershipPage() {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">Our Leadership</h1>
              <p className="lead">Meet the team leading our disaster management efforts</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/about" className="text-white">About Us</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Leadership</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Executive Leadership</h2>
          
          <div className="row g-4 justify-content-center">
            {keyPersonnel.map((person) => (
              <div key={person.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-4 position-relative mx-auto" style={{ width: '150px', height: '150px' }}>
                      <Image 
                        src={person.image || "/placeholder.svg"} 
                        alt={person.name} 
                        width={150} 
                        height={150}
                        className="rounded-circle img-thumbnail"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h3 className="h4 mb-2">{person.name}</h3>
                    <p className="text-muted mb-3">{person.title}</p>
                    <div className="d-flex justify-content-center align-items-center">
                      <a href={`tel:${person.contact}`} className="btn btn-sm btn-outline-primary me-2">
                        <i className="flaticon-phone-call-1 me-1"></i> Call
                      </a>
                      <a href={`mailto:contact@ndrrmc.org`} className="btn btn-sm btn-outline-primary">
                        <i className="flaticon-email-3 me-1"></i> Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Leadership */}
          <h2 className="text-center mb-5 mt-5">Department Heads</h2>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3 position-relative mx-auto" style={{ width: '100px', height: '100px' }}>
                    <Image 
                      src="/placeholder.svg" 
                      alt="Department Head" 
                      width={100} 
                      height={100}
                      className="rounded-circle img-thumbnail"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h3 className="h5 mb-1">Sarah Thompson</h3>
                  <p className="text-muted mb-3">Head, Disaster Preparedness</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3 position-relative mx-auto" style={{ width: '100px', height: '100px' }}>
                    <Image 
                      src="/placeholder.svg" 
                      alt="Department Head" 
                      width={100} 
                      height={100}
                      className="rounded-circle img-thumbnail"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h3 className="h5 mb-1">Michael Chen</h3>
                  <p className="text-muted mb-3">Head, Emergency Response</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3 position-relative mx-auto" style={{ width: '100px', height: '100px' }}>
                    <Image 
                      src="/placeholder.svg" 
                      alt="Department Head" 
                      width={100} 
                      height={100}
                      className="rounded-circle img-thumbnail"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h3 className="h5 mb-1">Amara Patel</h3>
                  <p className="text-muted mb-3">Head, Recovery & Rehabilitation</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3 position-relative mx-auto" style={{ width: '100px', height: '100px' }}>
                    <Image 
                      src="/placeholder.svg" 
                      alt="Department Head" 
                      width={100} 
                      height={100}
                      className="rounded-circle img-thumbnail"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h3 className="h5 mb-1">James Wilson</h3>
                  <p className="text-muted mb-3">Head, Risk Assessment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Organizational Structure</h2>
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <Image 
                      src="/placeholder.svg" 
                      alt="Organizational Chart" 
                      width={800} 
                      height={500}
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-center mb-0">
                    <a href="#" className="btn style2">
                      <i className="flaticon-file me-2"></i> Download Organizational Chart
                    </a>
                  </p>
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
              <h2 className="mb-2">Want to join our team?</h2>
              <p className="lead mb-0">We're always looking for dedicated professionals to join our mission.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href="/careers" className="btn btn-light btn-lg">
                View Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
