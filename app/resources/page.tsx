"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { resources, featuredDocuments, recentDocuments } from '@/lib/data';

export default function ResourcesPage() {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">Resources</h1>
              <p className="lead">Access disaster management resources, documents, and information</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Resources</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Resource Categories</h2>
              <p className="lead">Explore our comprehensive collection of disaster management resources.</p>
            </div>
          </div>

          <div className="row g-4">
            {resources.map((resource) => (
              <div key={resource.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3">
                        <i className={`flaticon-file text-primary`} style={{ fontSize: '36px' }}></i>
                      </div>
                      <h3 className="h5 mb-0">{resource.title}</h3>
                    </div>
                    <p>{resource.description}</p>
                    <Link href={resource.url} className="btn style2 mt-3">
                      View Resources
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <i className="flaticon-pin-1 text-primary" style={{ fontSize: '36px' }}></i>
                    </div>
                    <h3 className="h5 mb-0">Interactive Maps</h3>
                  </div>
                  <p>Access interactive maps showing disaster risks, evacuation routes, and emergency facilities.</p>
                  <Link href="/resources/maps" className="btn style2 mt-3">
                    View Maps
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <i className="flaticon-application text-primary" style={{ fontSize: '36px' }}></i>
                    </div>
                    <h3 className="h5 mb-0">Forms</h3>
                  </div>
                  <p>Download forms for disaster-related assistance, reporting, and other administrative purposes.</p>
                  <Link href="/resources/forms" className="btn style2 mt-3">
                    View Forms
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <i className="flaticon-edit text-primary" style={{ fontSize: '36px' }}></i>
                    </div>
                    <h3 className="h5 mb-0">User Manuals</h3>
                  </div>
                  <p>Access user manuals for disaster management systems, equipment, and procedures.</p>
                  <Link href="/resources/manuals" className="btn style2 mt-3">
                    View Manuals
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Documents */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Featured Documents</h2>
          
          <div className="row g-4">
            {featuredDocuments.map((document) => (
              <div key={document.id} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="text-center mb-3">
                      <i className="flaticon-file text-primary" style={{ fontSize: '48px' }}></i>
                      <span className={`badge bg-${document.category === 'orange' ? 'warning' : document.category} ms-2`}>
                        {document.fileType}
                      </span>
                    </div>
                    <h3 className="h5 mb-3 text-center">{document.title}</h3>
                    <p className="mb-3">{document.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small">{document.fileSize}</span>
                      <a href={document.url} className="btn btn-sm style2" download>
                        <i className="flaticon-download me-1"></i> Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Documents */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Recent Documents</h2>
          
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Date</th>
                  <th scope="col">Type</th>
                  <th scope="col">Size</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentDocuments.map((document) => (
                  <tr key={document.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <i className="flaticon-file text-primary me-2"></i>
                        <span>{document.title}</span>
                      </div>
                    </td>
                    <td>{document.date}</td>
                    <td>
                      <span className="badge bg-primary">{document.type}</span>
                    </td>
                    <td>{document.size}</td>
                    <td>
                      <a href={document.url} className="btn btn-sm style2" download>
                        <i className="flaticon-download me-1"></i> Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-4">
            <Link href="/resources/documents" className="btn style1">
              View All Documents
            </Link>
          </div>
        </div>
      </section>

      {/* Infographics */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Infographics</h2>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-0">
                  <div className="position-relative" style={{ height: '200px' }}>
                    <Image 
                      src="/placeholder.svg" 
                      alt="Flood Safety Infographic" 
                      fill
                      className="img-fluid"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h5 mb-3">Flood Safety Guidelines</h3>
                    <p className="mb-3">Learn how to stay safe before, during, and after a flood.</p>
                    <Link href="/resources/infographics/flood-safety" className="btn btn-sm style2">
                      View Infographic
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-0">
                  <div className="position-relative" style={{ height: '200px' }}>
                    <Image 
                      src="/placeholder.svg" 
                      alt="Earthquake Response Infographic" 
                      fill
                      className="img-fluid"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h5 mb-3">Earthquake Response Protocols</h3>
                    <p className="mb-3">Know what to do before, during, and after an earthquake.</p>
                    <Link href="/resources/infographics/earthquake-response" className="btn btn-sm style2">
                      View Infographic
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-0">
                  <div className="position-relative" style={{ height: '200px' }}>
                    <Image 
                      src="/placeholder.svg" 
                      alt="Emergency Kit Infographic" 
                      fill
                      className="img-fluid"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h5 mb-3">Emergency Kit Essentials</h3>
                    <p className="mb-3">Learn what to include in your emergency kit for different disaster scenarios.</p>
                    <Link href="/resources/infographics/emergency-kit" className="btn btn-sm style2">
                      View Infographic
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link href="/resources/infographics" className="btn style1">
              View All Infographics
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="mb-2">Can't find what you're looking for?</h2>
              <p className="lead mb-0">Contact us for assistance in finding the resources you need.</p>
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
