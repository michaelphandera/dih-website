"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { featuredDocuments, recentDocuments } from '@/lib/data';

export default function DocumentsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', 'plans', 'reports', 'guidelines', 'manuals'];

  // Filter documents based on active category
  const filteredDocuments = activeCategory === 'all' 
    ? [...featuredDocuments, ...recentDocuments]
    : [...featuredDocuments, ...recentDocuments].filter(doc => 
        doc.title.toLowerCase().includes(activeCategory) || 
        (doc.category && doc.category.toLowerCase() === activeCategory)
      );

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">Documents</h1>
              <p className="lead">Access disaster management documents, plans, and reports</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/resources" className="text-white">Resources</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Documents</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Document Categories */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Document Library</h2>
              <p className="lead">Browse our comprehensive collection of disaster management documents.</p>
              
              <div className="category-filter mt-4">
                <div className="btn-group" role="group" aria-label="Document categories">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      className={`btn ${activeCategory === category ? 'style2' : 'btn-outline-secondary'}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {filteredDocuments.map((document, index) => (
              <div key={`${document.id}-${index}`} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3">
                        <i className="flaticon-file text-primary" style={{ fontSize: '36px' }}></i>
                      </div>
                      <div>
                        <h3 className="h5 mb-1">{document.title}</h3>
                        <div>
                          <span className="badge bg-primary me-2">{document.fileType}</span>
                          <small className="text-muted">{document.fileSize || '3.5 MB'}</small>
                        </div>
                      </div>
                    </div>
                    <p>{document.description || 'This document provides important information for disaster management and preparedness.'}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <small className="text-muted">{document.date || 'Updated recently'}</small>
                      <a href={document.url} className="btn btn-sm style2" download>
                        <i className="flaticon-download me-1"></i> Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <div className="text-center py-5">
              <i className="flaticon-file text-muted" style={{ fontSize: '64px' }}></i>
              <h3 className="mt-3">No documents found</h3>
              <p>No documents match the selected category. Please try another category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Document Search */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="text-center mb-4">Search Documents</h3>
                  
                  <form className="mb-4">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search for documents..." aria-label="Search for documents" />
                      <button className="btn style2" type="submit">
                        <i className="flaticon-search-1 me-1"></i> Search
                      </button>
                    </div>
                  </form>
                  
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select" id="documentType" aria-label="Document type">
                          <option value="">All Types</option>
                          <option value="plan">Plans</option>
                          <option value="report">Reports</option>
                          <option value="guideline">Guidelines</option>
                          <option value="manual">Manuals</option>
                        </select>
                        <label htmlFor="documentType">Document Type</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select" id="documentYear" aria-label="Document year">
                          <option value="">All Years</option>
                          <option value="2023">2023</option>
                          <option value="2022">2022</option>
                          <option value="2021">2021</option>
                          <option value="2020">2020</option>
                        </select>
                        <label htmlFor="documentYear">Year</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Request */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="mb-4">Can't Find What You're Looking For?</h2>
              <p>If you can't find the document you're looking for, you can request it from our document repository. Our team will assist you in finding the information you need.</p>
              <ul className="list-unstyled">
                <li className="d-flex mb-3">
                  <i className="flaticon-check-mark text-primary me-3 mt-1"></i>
                  <div>Access to historical documents</div>
                </li>
                <li className="d-flex mb-3">
                  <i className="flaticon-check-mark text-primary me-3 mt-1"></i>
                  <div>Specialized disaster management resources</div>
                </li>
                <li className="d-flex">
                  <i className="flaticon-check-mark text-primary me-3 mt-1"></i>
                  <div>Technical reports and research papers</div>
                </li>
              </ul>
              <Link href="/contact" className="btn style2 mt-3">
                Request Document
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="position-relative" style={{ height: '400px' }}>
                <Image 
                  src="/placeholder.svg" 
                  alt="Document Repository" 
                  fill
                  className="img-fluid rounded shadow-lg"
                  style={{ objectFit: 'cover' }}
                />
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
              <h2 className="mb-2">Need assistance with documents?</h2>
              <p className="lead mb-0">Our team is ready to help you find the information you need.</p>
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
