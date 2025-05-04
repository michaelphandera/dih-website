"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { featuredDocuments, recentDocuments } from '@/lib/data';

export default function DocumentsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', 'plans', 'reports', 'guidelines', 'manuals'];

  return (
    <div className="page-wrapper">
      <section className="breadcrumb-wrap br-1">
        <div className="overlay op-6" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-title text-center">
                <h2>Resources</h2>
                <ul className="breadcrumb-menu list-style">
                  <li><a href="index.html">Home</a></li>
                  <li>Disaster Management Resources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Resources Page Content Start */}
      <div className="container mt-5">
        {/* Page Title Section */}
        <div className="section-title style3 text-center mb-40">
          <span>Knowledge Center</span>
          <h2>Disaster Management Resources</h2>
          <p>Access official documents, infographics, interactive maps, and forms to support disaster preparedness, response, and recovery activities across Mauritius.</p>
        </div>
        {/* Resource Filter Bar */}
        <div className="resource-filter-bar bg-white p-4 mb-4 rounded shadow-sm">
          <div className="row align-items-center">
            <div className="col-md-5 mb-3 mb-lg-0">
              <div className="position-relative">
                <input type="text" className="form-control" placeholder="Search resources by title, category, or keywords" style={{ paddingLeft: 40, height: 50, borderRadius: 25, border: '1px solid rgba(51, 143, 122, 0.3)' }} />
                <i className="ri-search-line" style={{ position: 'absolute', left: 15, top: 17, color: '#338F7A' }} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4 mb-3 mb-md-0">
                  <select className="form-select" id="district-filter" style={{ height: 50, borderRadius: 25, border: '1px solid rgba(51, 143, 122, 0.3)', paddingLeft: 20 }}>
                    <option selected>All Districts</option>
                    <option>Northern District</option>
                    <option>Eastern District</option>
                    <option>Southern District</option>
                    <option>Western District</option>
                    <option>Central District</option>
                    <option>Rodrigues</option>
                    <option>Agalega</option>
                    <option>Cargados Carajos</option>
                  </select>
                </div>
                <div className="col-md-5 mb-3 mb-md-0">
                  <select className="form-select" id="ministry-filter" style={{ height: 50, borderRadius: 25, border: '1px solid rgba(51, 143, 122, 0.3)', paddingLeft: 20 }}>
                    <option selected>All Ministries</option>
                    <option>Ministry of Defence</option>
                    <option>Ministry of Health</option>
                    <option>Ministry of Environment</option>
                    <option>Ministry of Finance</option>
                    <option>Ministry of Infrastructure</option>
                    <option>Ministry of Education</option>
                    <option>Ministry of Social Security</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <button className="btn style1 w-100" style={{ height: 50, borderRadius: 25 }}>
                    <i className="ri-filter-3-line me-1" /> Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Resource Categories Tabs */}
        <ul className="nav nav-pills resource-tabs mb-4 justify-content-center" id="resources-tab" role="tablist">
          <li className="nav-item mx-2 mb-3" role="presentation">
            <button className="nav-link active px-4 py-2" id="documents-tab" data-bs-toggle="pill" data-bs-target="#documents" type="button" role="tab" aria-controls="documents" aria-selected="true">
              <i className="ri-file-text-line me-2" />Documents
            </button>
          </li>
          <li className="nav-item mx-2 mb-3" role="presentation">
            <button className="nav-link px-4 py-2" id="infographics-tab" data-bs-toggle="pill" data-bs-target="#infographics" type="button" role="tab" aria-controls="infographics" aria-selected="false">
              <i className="ri-bar-chart-grouped-line me-2" />Infographics
            </button>
          </li>
          <li className="nav-item mx-2 mb-3" role="presentation">
            <button className="nav-link px-4 py-2" id="maps-tab" data-bs-toggle="pill" data-bs-target="#maps" type="button" role="tab" aria-controls="maps" aria-selected="false">
              <i className="ri-map-2-line me-2" />Interactive Maps
            </button>
          </li>
          <li className="nav-item mx-2 mb-3" role="presentation">
            <button className="nav-link px-4 py-2" id="forms-tab" data-bs-toggle="pill" data-bs-target="#forms" type="button" role="tab" aria-controls="forms" aria-selected="false">
              <i className="ri-file-list-3-line me-2" />Forms
            </button>
          </li>
        </ul>
        {/* Tab Content */}
        <div className="tab-content" id="resources-tabContent">
          {/* Documents Tab */}
          <div className="tab-pane fade show active" id="documents" role="tabpanel" aria-labelledby="documents-tab">
            {/* Document Category Sub-Tabs */}
            <div className="document-subtabs mb-4">
              <ul className="nav nav-pills nav-fill mb-3 bg-light p-2 rounded" id="document-category-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="all-docs-tab" data-bs-toggle="pill" data-bs-target="#all-docs" type="button" role="tab">
                    All Documents
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="plans-tab" data-bs-toggle="pill" data-bs-target="#plans" type="button" role="tab">
                    <i className="ri-file-chart-line me-1" />Emergency Plans
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="guidelines-tab" data-bs-toggle="pill" data-bs-target="#guidelines" type="button" role="tab">
                    <i className="ri-draft-line me-1" />Guidelines
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="reports-tab" data-bs-toggle="pill" data-bs-target="#reports" type="button" role="tab">
                    <i className="ri-file-list-3-line me-1" />Reports
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="legislation-tab" data-bs-toggle="pill" data-bs-target="#legislation" type="button" role="tab">
                    <i className="ri-government-line me-1" />Legislation
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="document-category-content">
                {/* All Documents Tab */}
                <div className="tab-pane fade show active" id="all-docs" role="tabpanel">
                  <div className="row">
                    {/* National Emergency Response Plan */}
                    <div className="col-lg-6 mb-4">
                      <div className="document-card bg-white rounded shadow-sm overflow-hidden">
                        <div className="row g-0">
                          <div className="col-md-4 position-relative">
                            <div className="document-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                              <div className="document-icon p-4 bg-white rounded-circle shadow-sm">
                                <img src="assets/img/document-icons/pdf-icon.svg" alt="PDF" style={{ width: 50, height: 50 }} />
                              </div>
                              <div className="document-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#338F7A', color: 'white', fontSize: 12 }}>
                                OFFICIAL
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="document-info p-4">
                              <div className="document-meta d-flex align-items-center mb-2">
                                <span className="document-type me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)', color: '#338F7A', fontSize: 12 }}>
                                  <i className="ri-file-pdf-line me-1" />PDF
                                </span>
                                <span className="document-size me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 12 }}>
                                  3.2 MB
                                </span>
                                <span className="document-date ms-auto" style={{ fontSize: 12, color: '#666' }}>
                                  <i className="ri-time-line me-1" />Updated: Apr 2, 2025
                                </span>
                              </div>
                              <h3 className="document-title mb-2" style={{ fontSize: 20 }}>National Emergency Response Plan</h3>
                              <p className="document-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                                Comprehensive planning document detailing national response protocols for various disaster scenarios including cyclones, floods, and other emergencies across Mauritius.
                              </p>
                              <div className="document-actions d-flex align-items-center">
                                <a href="docs/emergency-response-plan.pdf" className="btn style2 me-2" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-download-line me-1" /> Download
                                </a>
                                <a href="docs/emergency-response-plan.pdf" className="btn style1" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-eye-line me-1" /> View Document
                                </a>
                                <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                  <i className="ri-bookmark-line" style={{ fontSize: 20, color: '#338F7A' }} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Evacuation Guidelines */}
                    <div className="col-lg-6 mb-4">
                      <div className="document-card bg-white rounded shadow-sm overflow-hidden">
                        <div className="row g-0">
                          <div className="col-md-4 position-relative">
                            <div className="document-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)' }}>
                              <div className="document-icon p-4 bg-white rounded-circle shadow-sm">
                                <img src="assets/img/document-icons/doc-icon.svg" alt="DOC" style={{ width: 50, height: 50 }} />
                              </div>
                              <div className="document-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#F59946', color: 'white', fontSize: 12 }}>
                                ESSENTIAL
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="document-info p-4">
                              <div className="document-meta d-flex align-items-center mb-2">
                                <span className="document-type me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)', color: '#F59946', fontSize: 12 }}>
                                  <i className="ri-file-word-line me-1" />DOC
                                </span>
                                <span className="document-size me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 12 }}>
                                  1.8 MB
                                </span>
                                <span className="document-date ms-auto" style={{ fontSize: 12, color: '#666' }}>
                                  <i className="ri-time-line me-1" />Updated: Mar 15, 2025
                                </span>
                              </div>
                              <h3 className="document-title mb-2" style={{ fontSize: 20 }}>Evacuation Guidelines</h3>
                              <p className="document-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                                Essential guidelines for safe and effective evacuations during emergency situations across different regions. Includes detailed evacuation routes for all districts.
                              </p>
                              <div className="document-actions d-flex align-items-center">
                                <a href="docs/evacuation-guidelines.doc" className="btn style2 me-2" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-download-line me-1" /> Download
                                </a>
                                <a href="docs/evacuation-guidelines.doc" className="btn style1" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-eye-line me-1" /> View Document
                                </a>
                                <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                  <i className="ri-bookmark-line" style={{ fontSize: 20, color: '#F59946' }} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* NDRRM Act 2016 */}
                    <div className="col-lg-6 mb-4">
                      <div className="document-card bg-white rounded shadow-sm overflow-hidden">
                        <div className="row g-0">
                          <div className="col-md-4 position-relative">
                            <div className="document-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(73, 100, 150, 0.1)' }}>
                              <div className="document-icon p-4 bg-white rounded-circle shadow-sm">
                                <img src="assets/img/document-icons/pdf-icon.svg" alt="PDF" style={{ width: 50, height: 50 }} />
                              </div>
                              <div className="document-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#496496', color: 'white', fontSize: 12 }}>
                                LEGISLATION
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="document-info p-4">
                              <div className="document-meta d-flex align-items-center mb-2">
                                <span className="document-type me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(73, 100, 150, 0.1)', color: '#496496', fontSize: 12 }}>
                                  <i className="ri-file-pdf-line me-1" />PDF
                                </span>
                                <span className="document-size me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 12 }}>
                                  2.1 MB
                                </span>
                                <span className="document-date ms-auto" style={{ fontSize: 12, color: '#666' }}>
                                  <i className="ri-time-line me-1" />Published: Apr 16, 2016
                                </span>
                              </div>
                              <h3 className="document-title mb-2" style={{ fontSize: 20 }}>National Disaster Risk Reduction and Management Act 2016</h3>
                              <p className="document-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                                Official legislative document establishing the framework for disaster risk reduction and management in Mauritius, including roles and responsibilities of key institutions.
                              </p>
                              <div className="document-actions d-flex align-items-center">
                                <a href="docs/ndrrm-act-2016.pdf" className="btn style2 me-2" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-download-line me-1" /> Download
                                </a>
                                <a href="docs/ndrrm-act-2016.pdf" className="btn style1" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-eye-line me-1" /> View Document
                                </a>
                                <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                  <i className="ri-bookmark-line" style={{ fontSize: 20, color: '#496496' }} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Earthquake Safety Manual */}
                    <div className="col-lg-6 mb-4">
                      <div className="document-card bg-white rounded shadow-sm overflow-hidden">
                        <div className="row g-0">
                          <div className="col-md-4 position-relative">
                            <div className="document-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(160, 120, 200, 0.1)' }}>
                              <div className="document-icon p-4 bg-white rounded-circle shadow-sm">
                                <img src="assets/img/document-icons/ppt-icon.svg" alt="PPT" style={{ width: 50, height: 50 }} />
                              </div>
                              <div className="document-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#A078C8', color: 'white', fontSize: 12 }}>
                                TRAINING
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="document-info p-4">
                              <div className="document-meta d-flex align-items-center mb-2">
                                <span className="document-type me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(160, 120, 200, 0.1)', color: '#A078C8', fontSize: 12 }}>
                                  <i className="ri-file-ppt-line me-1" />PPT
                                </span>
                                <span className="document-size me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 12 }}>
                                  8.7 MB
                                </span>
                                <span className="document-date ms-auto" style={{ fontSize: 12, color: '#666' }}>
                                  <i className="ri-time-line me-1" />Updated: Feb 28, 2025
                                </span>
                              </div>
                              <h3 className="document-title mb-2" style={{ fontSize: 20 }}>Earthquake Safety Manual</h3>
                              <p className="document-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                                Safety protocols and guidelines for before, during, and after earthquake events for various building types. Includes building code references and inspection procedures.
                              </p>
                              <div className="document-actions d-flex align-items-center">
                                <a href="docs/earthquake-safety.ppt" className="btn style2 me-2" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-download-line me-1" /> Download
                                </a>
                                <a href="docs/earthquake-safety.ppt" className="btn style1" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-eye-line me-1" /> View Document
                                </a>
                                <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                  <i className="ri-bookmark-line" style={{ fontSize: 20, color: '#A078C8' }} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Recent Document Uploads */}
                  <div className="recent-uploads mt-5">
                    <h4 className="mb-4">Recently Added Documents</h4>
                    <div className="table-responsive">
                      <table className="table table-hover bg-white shadow-sm rounded">
                        <thead className="bg-light">
                          <tr>
                            <th style={{ width: '40%' }}>Document Name</th>
                            <th style={{ width: '15%' }}>Category</th>
                            <th style={{ width: '15%' }}>Format</th>
                            <th style={{ width: '15%' }}>Uploaded</th>
                            <th style={{ width: '15%' }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <i className="ri-file-excel-line me-2" style={{ fontSize: 18, color: '#2E7D32' }} />
                                <span>Disaster Resource Inventory</span>
                              </div>
                            </td>
                            <td><span className="badge" style={{ backgroundColor: '#338F7A' }}>Resources</span></td>
                            <td>Excel</td>
                            <td>April 1, 2025</td>
                            <td>
                              <div className="btn-group">
                                <a href="#" className="btn btn-sm" style={{ backgroundColor: '#f5f5f5' }}><i className="ri-eye-line" /></a>
                                <a href="#" className="btn btn-sm" style={{ backgroundColor: '#338F7A', color: 'white' }}><i className="ri-download-line" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <i className="ri-file-pdf-line me-2" style={{ fontSize: 18, color: '#C62828' }} />
                                <span>Cyclone Season Preparedness Checklist</span>
                              </div>
                            </td>
                            <td><span className="badge" style={{ backgroundColor: '#F59946' }}>Safety</span></td>
                            <td>PDF</td>
                            <td>March 30, 2025</td>
                            <td>
                              <div className="btn-group">
                                <a href="#" className="btn btn-sm" style={{ backgroundColor: '#f5f5f5' }}><i className="ri-eye-line" /></a>
                                <a href="#" className="btn btn-sm" style={{ backgroundColor: '#338F7A', color: 'white' }}><i className="ri-download-line" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <i className="ri-file-word-line me-2" style={{ fontSize: 18, color: '#1565C0' }} />
                                <span>Medical Emergency Response Protocol</span>
                              </div>
                            </td>
                            <td><span className="badge" style={{ backgroundColor: '#6EB4F0' }}>Health</span></td>
                            <td>Word</td>
                            <td>March 28, 2025</td>
                            <td>
                              <div className="btn-group">
                                <a href="#" className="btn btn-sm" style={{ backgroundColor: '#f5f5f5' }}><i className="ri-eye-line" /></a>
                                <a href="#" className="btn btn-sm" style={{ backgroundColor: '#338F7A', color: 'white' }}><i className="ri-download-line" /></a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <a href="documents.html" className="btn style1">View All Documents</a>
                  </div>
                </div>
                {/* Plans Tab (Content will be similar to above, filtered for just emergency plans) */}
                <div className="tab-pane fade" id="plans" role="tabpanel">
                  <div className="alert alert-info">
                    <i className="ri-information-line me-2" /> Showing emergency plans and disaster response documents
                  </div>
                  {/* Emergency plans would be listed here */}
                </div>
                {/* Guidelines Tab */}
                <div className="tab-pane fade" id="guidelines" role="tabpanel">
                  <div className="alert alert-info">
                    <i className="ri-information-line me-2" /> Showing guidelines and procedure documents
                  </div>
                  {/* Guidelines would be listed here */}
                </div>
                {/* Reports Tab */}
                <div className="tab-pane fade" id="reports" role="tabpanel">
                  <div className="alert alert-info">
                    <i className="ri-information-line me-2" /> Showing reports and assessments
                  </div>
                  {/* Reports would be listed here */}
                </div>
                {/* Legislation Tab */}
                <div className="tab-pane fade" id="legislation" role="tabpanel">
                  <div className="alert alert-info">
                    <i className="ri-information-line me-2" /> Showing legislation, acts, and regulations
                  </div>
                  {/* Legislation documents would be listed here */}
                </div>
              </div>
            </div>
          </div>
          {/* Infographics Tab */}
          <div className="tab-pane fade" id="infographics" role="tabpanel" aria-labelledby="infographics-tab">
            {/* Infographics Category Sub-Tabs */}
            <div className="infographics-subtabs mb-4">
              <ul className="nav nav-pills nav-fill mb-3 bg-light p-2 rounded" id="infographic-category-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="all-infographics-tab" data-bs-toggle="pill" data-bs-target="#all-infographics" type="button" role="tab">
                    All Infographics
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="safety-tab" data-bs-toggle="pill" data-bs-target="#safety" type="button" role="tab">
                    <i className="ri-shield-check-line me-1" />Safety Guidelines
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="preparedness-tab" data-bs-toggle="pill" data-bs-target="#preparedness" type="button" role="tab">
                    <i className="ri-calendar-check-line me-1" />Preparedness
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="response-tab" data-bs-toggle="pill" data-bs-target="#response" type="button" role="tab">
                    <i className="ri-alarm-warning-line me-1" />Response</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="awareness-tab" data-bs-toggle="pill" data-bs-target="#awareness" type="button" role="tab">
                    <i className="ri-lightbulb-line me-1" />Public Awareness
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="infographic-category-content">
                {/* All Infographics Tab */}
                <div className="tab-pane fade show active" id="all-infographics" role="tabpanel">
                  <div className="row">
                    {/* Flood Safety Infographic */}
                    <div className="col-lg-6 mb-4">
                      <div className="infographic-card bg-white rounded shadow-sm overflow-hidden">
                        <div className="row g-0">
                          <div className="col-md-12">
                            <img src="assets/img/12035.jpg" alt="Flood Safety Infographic" className="img-fluid w-100" style={{ maxHeight: 250, objectFit: 'cover' }} />
                            <div className="infographic-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#338F7A', color: 'white', fontSize: 12 }}>
                              FEATURED
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="infographic-info p-4">
                              <div className="infographic-meta d-flex align-items-center mb-2">
                                <span className="category me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)', color: '#338F7A', fontSize: 12 }}>
                                  <i className="ri-shield-check-line me-1" />Safety Guidelines
                                </span>
                                <span className="district me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 12 }}>
                                  <i className="ri-map-pin-line me-1" />Coastal Districts
                                </span>
                                <span className="date ms-auto" style={{ fontSize: 12, color: '#666' }}>
                                  <i className="ri-time-line me-1" />Mar 15, 2025
                                </span>
                              </div>
                              <h3 className="infographic-title mb-2" style={{ fontSize: 20 }}>Flood Safety Guidelines</h3>
                              <p className="infographic-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                                Essential safety measures before, during, and after flooding events. Includes evacuation preparation tips and property protection advice.
                              </p>
                              <div className="infographic-actions d-flex align-items-center">
                                <a href="infographics/flood-safety.html" className="btn style1" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-eye-line me-1" /> View Full Size
                                </a>
                                <a href="infographics/flood-safety.jpg" download className="btn style2 ms-2" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-download-line me-1" /> Download
                                </a>
                                <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                  <i className="ri-bookmark-line" style={{ fontSize: 20, color: '#338F7A' }} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Emergency Kit Infographic */}
                    <div className="col-lg-6 mb-4">
                      <div className="infographic-card bg-white rounded shadow-sm overflow-hidden">
                        <div className="row g-0">
                          <div className="col-md-12">
                            <img src="assets/img/22301.jpg" alt="Emergency Kit Infographic" className="img-fluid w-100" style={{ maxHeight: 250, objectFit: 'cover' }} />
                            <div className="infographic-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#F59946', color: 'white', fontSize: 12 }}>
                              ESSENTIAL
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="infographic-info p-4">
                              <div className="infographic-meta d-flex align-items-center mb-2">
                                <span className="category me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)', color: '#F59946', fontSize: 12 }}>
                                  <i className="ri-calendar-check-line me-1" />Preparedness
                                </span>
                                <span className="ministry me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 12 }}>
                                  <i className="ri-building-line me-1" />Health Ministry
                                </span>
                                <span className="date ms-auto" style={{ fontSize: 12, color: '#666' }}>
                                  <i className="ri-time-line me-1" />Feb 28, 2025
                                </span>
                              </div>
                              <h3 className="infographic-title mb-2" style={{ fontSize: 20 }}>Emergency Kit Essentials</h3>
                              <p className="infographic-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                                Comprehensive guide to building and maintaining emergency kits for different disaster scenarios and family sizes.
                              </p>
                              <div className="infographic-actions d-flex align-items-center">
                                <a href="infographics/emergency-kit.html" className="btn style1" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-eye-line me-1" /> View Full Size
                                </a>
                                <a href="infographics/emergency-kit.jpg" download className="btn style2 ms-2" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-download-line me-1" /> Download
                                </a>
                                <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                  <i className="ri-bookmark-line" style={{ fontSize: 20, color: '#F59946' }} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Earthquake Response Infographic */}
                    <div className="col-lg-6 mb-4">
                      <div className="infographic-card bg-white rounded shadow-sm overflow-hidden">
                        <div className="row g-0">
                          <div className="col-md-12">
                            <img src="assets/img/7463.jpg" alt="Earthquake Response Infographic" className="img-fluid w-100" style={{ maxHeight: 250, objectFit: 'cover' }} />
                            <div className="infographic-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#6EB4F0', color: 'white', fontSize: 12 }}>
                              RESPONSE
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="infographic-info p-4">
                              <div className="infographic-meta d-flex align-items-center mb-2">
                                <span className="category me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(110, 180, 240, 0.1)', color: '#6EB4F0', fontSize: 12 }}>
                                  <i className="ri-alarm-warning-line me-1" />Response
                                </span>
                                <span className="district me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 12 }}>
                                  <i className="ri-map-pin-line me-1" />Central District
                                </span>
                                <span className="date ms-auto" style={{ fontSize: 12, color: '#666' }}>
                                  <i className="ri-time-line me-1" />Jan 15, 2025
                                </span>
                              </div>
                              <h3 className="infographic-title mb-2" style={{ fontSize: 20 }}>Earthquake Response Protocols</h3>
                              <p className="infographic-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                                Step-by-step actions to take during and after an earthquake, including building safety assessment guidelines.
                              </p>
                              <div className="infographic-actions d-flex align-items-center">
                                <a href="infographics/earthquake-response.html" className="btn style1" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-eye-line me-1" /> View Full Size
                                </a>
                                <a href="infographics/earthquake-response.jpg" download className="btn style2 ms-2" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-download-line me-1" /> Download
                                </a>
                                <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                  <i className="ri-bookmark-line" style={{ fontSize: 20, color: '#6EB4F0' }} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Hurricane Tracking Infographic */}
                    <div className="col-lg-6 mb-4">
                      <div className="infographic-card bg-white rounded shadow-sm overflow-hidden">
                        <div className="row g-0">
                          <div className="col-md-12">
                            <img src="assets/img/22590.jpg" alt="Hurricane Tracking Infographic" className="img-fluid w-100" style={{ maxHeight: 250, objectFit: 'cover' }} />
                            <div className="infographic-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#A078C8', color: 'white', fontSize: 12 }}>
                              AWARENESS
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="infographic-info p-4">
                              <div className="infographic-meta d-flex align-items-center mb-2">
                                <span className="category me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(160, 120, 200, 0.1)', color: '#A078C8', fontSize: 12 }}>
                                  <i className="ri-lightbulb-line me-1" />Public Awareness
                                </span>
                                <span className="district me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 12 }}>
                                  <i className="ri-map-pin-line me-1" />Island Regions
                                </span>
                                <span className="date ms-auto" style={{ fontSize: 12, color: '#666' }}>
                                  <i className="ri-time-line me-1" />Jan 5, 2025
                                </span>
                              </div>
                              <h3 className="infographic-title mb-2" style={{ fontSize: 20 }}>Hurricane Tracking Guide</h3>
                              <p className="infographic-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                                Guide to understanding hurricane forecasts, tracking systems, and warning classifications for coastal communities.
                              </p>
                              <div className="infographic-actions d-flex align-items-center">
                                <a href="infographics/hurricane-tracking.html" className="btn style1" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-eye-line me-1" /> View Full Size
                                </a>
                                <a href="infographics/hurricane-tracking.jpg" download className="btn style2 ms-2" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-download-line me-1" /> Download
                                </a>
                                <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                  <i className="ri-bookmark-line" style={{ fontSize: 20, color: '#A078C8' }} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <a href="infographics.html" className="btn style1">View All Infographics</a>
                  </div>
                </div>
                {/* Safety Guidelines Tab (Content would be filtered) */}
                <div className="tab-pane fade" id="safety" role="tabpanel">
                  <div className="alert alert-info">
                    <i className="ri-information-line me-2" /> Showing Safety Guidelines infographics
                  </div>
                  {/* Safety infographics would be listed here */}
                </div>
                {/* Preparedness Tab */}
                <div className="tab-pane fade" id="preparedness" role="tabpanel">
                  <div className="alert alert-info">
                    <i className="ri-information-line me-2" /> Showing Preparedness infographics
                  </div>
                  {/* Preparedness infographics would be listed here */}
                </div>
                {/* Response Tab */}
                <div className="tab-pane fade" id="response" role="tabpanel">
                  <div className="alert alert-info">
                    <i className="ri-information-line me-2" /> Showing Response infographics
                  </div>
                  {/* Response infographics would be listed here */}
                </div>
                {/* Public Awareness Tab */}
                <div className="tab-pane fade" id="awareness" role="tabpanel">
                  <div className="alert alert-info">
                    <i className="ri-information-line me-2" /> Showing Public Awareness infographics
                  </div>
                  {/* Awareness infographics would be listed here */}
                </div>
              </div>
            </div>
          </div>
          {/* Interactive Maps Tab */}
          <div className="tab-pane fade" id="maps" role="tabpanel" aria-labelledby="maps-tab">
            {/* Map Category Sub-Tabs */}
            <div className="maps-subtabs mb-4">
              <ul className="nav nav-pills nav-fill mb-3 bg-light p-2 rounded" id="map-category-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="all-maps-tab" data-bs-toggle="pill" data-bs-target="#all-maps" type="button" role="tab">
                    All Maps
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="hazard-maps-tab" data-bs-toggle="pill" data-bs-target="#hazard-maps" type="button" role="tab">
                    <i className="ri-alarm-warning-line me-1" />Hazard Maps
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="evacuation-maps-tab" data-bs-toggle="pill" data-bs-target="#evacuation-maps" type="button" role="tab">
                    <i className="ri-route-line me-1" />Evacuation Routes
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="facility-maps-tab" data-bs-toggle="pill" data-bs-target="#facility-maps" type="button" role="tab">
                    <i className="ri-building-4-line me-1" />Facilities
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="map-category-content">
                {/* All Maps Tab */}
                <div className="tab-pane fade show active" id="all-maps" role="tabpanel">
                  <div className="row">
                    {/* Mauritius Hazard Risk Map */}
                    <div className="col-lg-6 mb-4">
                      <div className="map-card bg-white rounded shadow-sm overflow-hidden h-100">
                        <div className="map-preview position-relative" style={{ height: 250, backgroundColor: '#f5f5f5' }}>
                          <div id="mauritius-hazard-map" className="w-100 h-100" style={{ backgroundImage: 'url("assets/img/maps/hazard-map-preview.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                          <div className="map-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#F59946', color: 'white', fontSize: 12 }}>
                            HAZARD MAP
                          </div>
                        </div>
                        <div className="map-info p-4">
                          <h3 className="map-title mb-2" style={{ fontSize: 20 }}>Mauritius Multi-Hazard Risk Map</h3>
                          <p className="map-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                            Interactive map showing areas at risk from various hazards including cyclones, flooding, landslides and earthquakes across all districts of Mauritius.
                          </p>
                          <div className="map-actions">
                            <a href="maps/hazard-risk.html" className="btn style1 w-100">
                              <i className="ri-map-pin-line me-1" /> View Interactive Map
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Evacuation Routes Map */}
                    <div className="col-lg-6 mb-4">
                      <div className="map-card bg-white rounded shadow-sm overflow-hidden h-100">
                        <div className="map-preview position-relative" style={{ height: 250, backgroundColor: '#f5f5f5' }}>
                          <div id="evacuation-routes-map" className="w-100 h-100" style={{ backgroundImage: 'url("assets/img/maps/evacuation-map-preview.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                          <div className="map-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#338F7A', color: 'white', fontSize: 12 }}>
                            EVACUATION ROUTES
                          </div>
                        </div>
                        <div className="map-info p-4">
                          <h3 className="map-title mb-2" style={{ fontSize: 20 }}>National Evacuation Routes</h3>
                          <p className="map-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                            Interactive map showing primary and secondary evacuation routes, emergency shelters, and assembly points across all districts.
                          </p>
                          <div className="map-actions">
                            <a href="maps/evacuation-routes.html" className="btn style1 w-100">
                              <i className="ri-route-line me-1" /> View Interactive Map
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Emergency Facilities Map */}
                    <div className="col-lg-6 mb-4">
                      <div className="map-card bg-white rounded shadow-sm overflow-hidden h-100">
                        <div className="map-preview position-relative" style={{ height: 250, backgroundColor: '#f5f5f5' }}>
                          <div id="facilities-map" className="w-100 h-100" style={{ backgroundImage: 'url("assets/img/maps/facilities-map-preview.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                          <div className="map-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#6EB4F0', color: 'white', fontSize: 12 }}>
                            FACILITIES
                          </div>
                        </div>
                        <div className="map-info p-4">
                          <h3 className="map-title mb-2" style={{ fontSize: 20 }}>Emergency Facilities Map</h3>
                          <p className="map-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                            Map of emergency facilities including hospitals, police stations, fire stations, shelters, and disaster management centers.
                          </p>
                          <div className="map-actions">
                            <a href="maps/emergency-facilities.html" className="btn style1 w-100">
                              <i className="ri-building-4-line me-1" /> View Interactive Map
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Flood Prone Areas Map */}
                    <div className="col-lg-6 mb-4">
                      <div className="map-card bg-white rounded shadow-sm overflow-hidden h-100">
                        <div className="map-preview position-relative" style={{ height: 250, backgroundColor: '#f5f5f5' }}>
                          <div id="flood-map" className="w-100 h-100" style={{ backgroundImage: 'url("assets/img/maps/flood-map-preview.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                          <div className="map-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#A078C8', color: 'white', fontSize: 12 }}>
                            FLOOD RISK
                          </div>
                        </div>
                        <div className="map-info p-4">
                          <h3 className="map-title mb-2" style={{ fontSize: 20 }}>Flood Prone Areas</h3>
                          <p className="map-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                            Detailed map showing areas prone to flooding based on historical data and topographical analysis across Mauritius.
                          </p>
                          <div className="map-actions">
                            <a href="maps/flood-prone-areas.html" className="btn style1 w-100">
                              <i className="ri-water-flash-line me-1" /> View Interactive Map
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <a href="maps/index.html" className="btn style1">View All Maps</a>
                  </div>
                </div>
                {/* Hazard Maps Tab */}
                <div className="tab-pane fade" id="hazard-maps" role="tabpanel">
                  <div className="alert alert-info">
                    <i className="ri-information-line me-2" /> Showing hazard risk maps
                  </div>
                  {/* Hazard maps would be listed here */}
                </div>
                {/* Evacuation Routes Tab */}
                <div className="tab-pane fade" id="evacuation-maps" role="tabpanel">
                  <div className="alert alert-info">
                    <i className="ri-information-line me-2" /> Showing evacuation route maps
                  </div>
                  {/* Evacuation maps would be listed here */}
                </div>
                {/* Facilities Tab */}
                <div className="tab-pane fade" id="facility-maps" role="tabpanel">
                  <div className="alert alert-info">
                    <i className="ri-information-line me-2" /> Showing facility location maps
                  </div>
                  {/* Facility maps would be listed here */}
                </div>
              </div>
            </div>
          </div>
          {/* Forms Tab */}
          <div className="tab-pane fade" id="forms" role="tabpanel" aria-labelledby="forms-tab">
            {/* Form Category Sub-Tabs */}
            <div className="forms-subtabs mb-4">
              <ul className="nav nav-pills nav-fill mb-3 bg-light p-2 rounded" id="form-category-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="all-forms-tab" data-bs-toggle="pill" data-bs-target="#all-forms" type="button" role="tab">
                    All Forms
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="reports-forms-tab" data-bs-toggle="pill" data-bs-target="#reports-forms" type="button" role="tab">
                    <i className="ri-file-list-3-line me-1" />Reporting Forms
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="assessment-forms-tab" data-bs-toggle="pill" data-bs-target="#assessment-forms" type="button" role="tab">
                    <i className="ri-survey-line me-1" />Assessment Forms
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="assistance-forms-tab" data-bs-toggle="pill" data-bs-target="#assistance-forms" type="button" role="tab">
                    <i className="ri-service-line me-1" />Assistance Forms
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="form-category-content">
                {/* All Forms Tab */}
                <div className="tab-pane fade show active" id="all-forms" role="tabpanel">
                  <div className="row">
                    {/* Incident Report Form */}
                    <div className="col-lg-6 mb-4">
                      <div className="form-card bg-white rounded shadow-sm overflow-hidden h-100">
                        <div className="row g-0">
                          <div className="col-md-4 position-relative">
                            <div className="form-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                              <div className="form-icon p-4 bg-white rounded-circle shadow-sm">
                                <i className="ri-file-list-3-line" style={{ fontSize: 40, color: '#338F7A' }} />
                              </div>
                              <div className="form-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#338F7A', color: 'white', fontSize: 12 }}>
                                REPORTING
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="form-info p-4">
                              <h3 className="form-title mb-2" style={{ fontSize: 20 }}>Incident Report Form</h3>
                              <p className="form-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                                Standard form for reporting disaster incidents. Used by local authorities, emergency services, and community members to document incidents.
                              </p>
                              <div className="form-meta mb-3">
                                <span className="badge bg-light text-dark me-2"><i className="ri-file-pdf-line me-1" />PDF &amp; Word</span>
                                <span className="badge bg-light text-dark me-2"><i className="ri-global-line me-1" />Also available online</span>
                              </div>
                              <div className="form-actions d-flex">
                                <a href="forms/incident-report.pdf" className="btn style2 me-2" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-download-line me-1" /> Download
                                </a>
                                <a href="forms/online/incident-report.html" className="btn style1" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-global-line me-1" /> Fill Online
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Damage Assessment Form */}
                    <div className="col-lg-6 mb-4">
                      <div className="form-card bg-white rounded shadow-sm overflow-hidden h-100">
                        <div className="row g-0">
                          <div className="col-md-4 position-relative">
                            <div className="form-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)' }}>
                              <div className="form-icon p-4 bg-white rounded-circle shadow-sm">
                                <i className="ri-survey-line" style={{ fontSize: 40, color: '#F59946' }} />
                              </div>
                              <div className="form-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#F59946', color: 'white', fontSize: 12 }}>
                                ASSESSMENT
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="form-info p-4">
                              <h3 className="form-title mb-2" style={{ fontSize: 20 }}>Damage Assessment Form</h3>
                              <p className="form-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                                Form used to assess and document property damage after disasters. Essential for recovery planning and insurance claims.
                              </p>
                              <div className="form-meta mb-3">
                                <span className="badge bg-light text-dark me-2"><i className="ri-file-pdf-line me-1" />PDF &amp; Excel</span>
                                <span className="badge bg-light text-dark me-2"><i className="ri-global-line me-1" />Also available online</span>
                              </div>
                              <div className="form-actions d-flex">
                                <a href="forms/damage-assessment.pdf" className="btn style2 me-2" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-download-line me-1" /> Download
                                </a>
                                <a href="forms/online/damage-assessment.html" className="btn style1" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-global-line me-1" /> Fill Online
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Relief Assistance Request Form */}
                    <div className="col-lg-6 mb-4">
                      <div className="form-card bg-white rounded shadow-sm overflow-hidden h-100">
                        <div className="row g-0">
                          <div className="col-md-4 position-relative">
                            <div className="form-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(110, 180, 240, 0.1)' }}>
                              <div className="form-icon p-4 bg-white rounded-circle shadow-sm">
                                <i className="ri-service-line" style={{ fontSize: 40, color: '#6EB4F0' }} />
                              </div>
                              <div className="form-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#6EB4F0', color: 'white', fontSize: 12 }}>
                                ASSISTANCE
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="form-info p-4">
                              <h3 className="form-title mb-2" style={{ fontSize: 20 }}>Relief Assistance Request</h3>
                              <p className="form-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                                Form for individuals or families to request disaster relief assistance, including temporary shelter, food, and medical aid.
                              </p>
                              <div className="form-meta mb-3">
                                <span className="badge bg-light text-dark me-2"><i className="ri-file-pdf-line me-1" />PDF &amp; Word</span>
                                <span className="badge bg-light text-dark me-2"><i className="ri-global-line me-1" />Also available online</span>
                              </div>
                              <div className="form-actions d-flex">
                                <a href="forms/relief-assistance.pdf" className="btn style2 me-2" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-download-line me-1" /> Download
                                </a>
                                <a href="forms/online/relief-assistance.html" className="btn style1" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-global-line me-1" /> Fill Online
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Situation Report Form */}
                    <div className="col-lg-6 mb-4">
                      <div className="form-card bg-white rounded shadow-sm overflow-hidden h-100">
                        <div className="row g-0">
                          <div className="col-md-4 position-relative">
                            <div className="form-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(160, 120, 200, 0.1)' }}>
                              <div className="form-icon p-4 bg-white rounded-circle shadow-sm">
                                <i className="ri-file-chart-line" style={{ fontSize: 40, color: '#A078C8' }} />
                              </div>
                              <div className="form-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded" style={{ backgroundColor: '#A078C8', color: 'white', fontSize: 12 }}>
                                REPORTING
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="form-info p-4">
                              <h3 className="form-title mb-2" style={{ fontSize: 20 }}>Situation Report Form</h3>
                              <p className="form-description mb-3" style={{ fontSize: 14, color: '#666' }}>
                                Official form for disaster response teams to report current situation, needs, and resources during emergencies.
                              </p>
                              <div className="form-meta mb-3">
                                <span className="badge bg-light text-dark me-2"><i className="ri-file-pdf-line me-1" />PDF &amp; Excel</span>
                                <span className="badge bg-light text-dark me-2"><i className="ri-lock-line me-1" />Requires authorization</span>
                              </div>
                              <div className="form-actions d-flex">
                                <a href="forms/situation-report.pdf" className="btn style2 me-2" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-download-line me-1" /> Download
                                </a>
                                <a href="forms/online/situation-report.html" className="btn style1" style={{ fontSize: 14, padding: '8px 15px' }}>
                                  <i className="ri-global-line me-1" /> Fill Online
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Ministry-Specific Forms Section */}
                  <div className="ministry-forms mt-5">
                    <h4 className="mb-4">Ministry-Specific Forms</h4>
                    <div className="alert alert-info">
                      <i className="ri-information-line me-2" /> These forms are specific to individual ministries and may require authorization for access.
                    </div>
                    <div className="table-responsive">
                      <table className="table table-hover bg-white shadow-sm rounded">
                        <thead className="bg-light">
                          <tr>
                            <th style={{ width: '40%' }}>Form Name</th>
                            <th style={{ width: '20%' }}>Ministry</th>
                            <th style={{ width: '15%' }}>Format</th>
                            <th style={{ width: '25%' }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <i className="ri-file-word-line me-2" style={{ fontSize: 18, color: '#1565C0' }} />
                                <span>Health Emergency Response Form</span>
                              </div>
                            </td>
                            <td>Ministry of Health</td>
                            <td>Word, PDF</td>
                            <td>
                              <div className="btn-group">
                                <a href="#" className="btn btn-sm" style={{ backgroundColor: '#f5f5f5' }}><i className="ri-eye-line" /> Preview</a>
                                <a href="#" className="btn btn-sm" style={{ backgroundColor: '#338F7A', color: 'white' }}><i className="ri-lock-line" /> Request Access</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <i className="ri-file-excel-line me-2" style={{ fontSize: 18, color: '#2E7D32' }} />
                                <span>Infrastructure Damage Assessment</span>
                              </div>
                            </td>
                            <td>Ministry of Infrastructure</td>
                            <td>Excel, PDF</td>
                            <td>
                              <div className="btn-group">
                                <a href="#" className="btn btn-sm" style={{ backgroundColor: '#f5f5f5' }}><i className="ri-eye-line" /> Preview</a>
                                <a href="#" className="btn btn-sm" style={{ backgroundColor: '#338F7A', color: 'white' }}><i className="ri-lock-line" /> Request Access</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <i className="ri-file-pdf-line me-2" style={{ fontSize: 18, color: '#C62828' }} />
                                <span>Rapid Environmental Impact Assessment</span>
                              </div>
                            </td>
                            <td>Ministry of Environment</td>
                            <td>PDF, Online</td>
                            <td>
                              <div className="btn-group">
                                <a href="#" className="btn btn-sm" style={{ backgroundColor: '#f5f5f5' }}><i className="ri-eye-line" /> Preview</a>
                                <a href="#" className="btn btn-sm" style={{ backgroundColor: '#338F7A', color: 'white' }}><i className="ri-lock-line" /> Request Access</a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <a href="forms/index.html" className="btn style1">View All Forms</a>
                  </div>
                </div>
                {/* Reporting Forms Tab */}
                <div className="tab-pane fade" id="reports-forms" role="tabpanel">
                  <div className="alert alert-info">
                    <i className="ri-information-line me-2" /> Showing reporting forms
                  </div>
                  {/* Reporting forms would be listed here */}
                </div>
                {/* Assessment Forms Tab */}
                <div className="tab-pane fade" id="assessment-forms" role="tabpanel">
                  <div className="alert alert-info">
                    <i className="ri-information-line me-2" /> Showing assessment forms
                  </div>
                  {/* Assessment forms would be listed here */}
                </div>
                {/* Assistance Forms Tab */}
                <div className="tab-pane fade" id="assistance-forms" role="tabpanel">
                  <div className="alert alert-info">
                    <i className="ri-information-line me-2" /> Showing assistance request forms
                  </div>
                  {/* Assistance forms would be listed here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
