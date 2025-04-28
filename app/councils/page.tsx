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
    <div className="content pt-5">
      <section className="breadcrumb-wrap">
        <div className="overlay op-6" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-title text-center">
                <h2>National Disaster Risk Reduction and
                  Management Council</h2>
                <ul className="breadcrumb-menu list-style">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="councils.html">Councils</a></li>
                  <li>NDRRMC Overview</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Council Dashboard Section */}
      <section className="ptb-100 bg-sand">
        <div className="container">
          {/* Council Overview */}
          <div className="row mb-5">
            <div className="col-lg-8">
              <div className="section-title style3 mb-30">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-6">
                    <span>Agriculture Council Profile</span>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <div className="ministry-dropdown-wrapper text-md-end mb-30">
                      <select id="ministry-dropdown" className="form-select ministry-select">
                        <option value="">Change
                          Council</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="civil-service">
                          Civil Service</option>
                        <option value="education">Education</option>
                        <option value="external-affairs">External
                          Affairs</option>
                        <option value="finance">
                          Finance</option>
                        <option value="fisheries">Ministry
                          of Fisheries</option>
                        <option value="gender-equality">Ministry
                          of Gender Equality</option>
                        <option value="health">Ministry
                          of Health</option>
                        <option value="home-affairs">Ministry
                          of Home Affairs</option>
                        <option value="housing-lands">Ministry
                          of Housing and
                          Lands</option>
                        <option value="local-government">Ministry
                          of Local Government</option>
                        <option value="oceanography">Ministry
                          of Oceanography</option>
                        <option value="public-infrastructure">Ministry
                          of Public
                          Infrastructure</option>
                        <option value="public-utilities">Ministry
                          of Public Utilities</option>
                        <option value="social-security">Ministry
                          of Social Security</option>
                        <option value="tourism">Ministry
                          of Tourism</option>
                      </select>
                    </div>
                  </div>
                </div>
                <h2>National Disaster Risk Reduction and
                  Management Council</h2>
              </div>
              <div className="about-content">
                <p>The National Disaster Risk Reduction and
                  Management Council (NDRRMC) is the apex body
                  responsible for coordinating and overseeing
                  disaster management strategies across
                  Mauritius.</p>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <ul className="content-feature-list list-style">
                      <li><i className="ri-checkbox-circle-line" />Established:
                        2016</li>
                      <li><i className="ri-checkbox-circle-line" />Total
                        Members: 25</li>
                      <li><i className="ri-checkbox-circle-line" />Ministerial
                        Representation: 20+
                        Ministries</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="content-feature-list list-style">
                      <li><i className="ri-checkbox-circle-line" />Emergency
                        Coordination Centers: 6</li>
                      <li><i className="ri-checkbox-circle-line" />Active
                        Response Teams: 12</li>
                      <li><i className="ri-checkbox-circle-line" />Annual
                        Budget: ₨ 250 Million</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card h-10 bg-white p-3 shadow-sm">
                      <h5 className="card-title border-bottom">Risk
                        Management Performance</h5>
                      <div className="risk-gauge-chart" id="ndrrmc-performance-gauge" />
                      <div className="d-flex justify-content-around p-2">
                        <span className="badge py-2 px-3" style={{ backgroundColor: '#ffe0b2', color: '#000' }}>Preparedness:
                          78%</span>
                        <span className="badge py-2 px-3" style={{ backgroundColor: '#ffab40', color: '#000' }}>Response
                          Capability: 85%</span>
                        <span className="badge py-2 px-3" style={{ backgroundColor: '#ff6e40', color: '#fff' }}>Risk
                          Mitigation: 72%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-10 bg-white p-3 shadow-sm">
                <h5 className="card-title p-2 border-bottom">Council
                  Leadership</h5>
                <div className="text-center mb-3">
                  <img src="/img/raj.png" alt="Council Chair" className="rounded-circle mb-3" width={150} />
                  <h6>Dr. Rajesh Ramphul</h6>
                  <p className="text-muted">Chairperson,
                    NDRRMC</p>
                </div>
                <ul className="list-unstyled">
                  <li className="mb-2"><strong>Appointment:</strong>
                    April 2022</li>
                  <li className="mb-2"><strong>Tenure:</strong> 4
                    Years</li>
                  <li><strong>Ministerial Background:</strong>
                    Public Infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Data Filter & Controls */}
          <div className="district-data-controls bg-white p-4 rounded shadow-sm mb-5">
            <div className="row align-items-center">
              <div className="col-md-3">
                <h5 className="mb-md-0">Filter Council
                  Activities</h5>
              </div>
              <div className="col-md-9">
                <div className="row g-2">
                  <div className="col-sm-4">
                    <select className="form-select" id="data-category">
                      <option value="all">All
                        Categories</option>
                      <option value="resilience">Resilience</option>
                      <option value="response">Response</option>
                      <option value="recovery">Recovery</option>
                      <option value="prevention">Prevention</option>
                    </select>
                  </div>
                  <div className="col-sm-3">
                    <select className="form-select" id="data-year">
                      <option value="all">All
                        Years</option>
                      <option value={2025}>2025</option>
                      <option value={2024}>2024</option>
                      <option value={2023}>2023</option>
                    </select>
                  </div>
                  <div className="col-sm-3">
                    <select className="form-select" id="data-ministry">
                      <option value="all">All
                        Ministries</option>
                      <option value="infrastructure">Infrastructure</option>
                      <option value="environment">Environment</option>
                      <option value="health">Health</option>
                      <option value="defense">Defense</option>
                    </select>
                  </div>
                  <div className="col-sm-2">
                    <button id="apply-filters" className="btn style1 w-100">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Activity Tabs */}
          <div className="district-activity-tabs">
            <ul className="nav nav-tabs" id="councilTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="resilience-tab" data-bs-toggle="tab" data-bs-target="#resilience" type="button" role="tab">
                  <i className="ri-shield-check-line me-1" />
                  Resilience Activities
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="response-tab" data-bs-toggle="tab" data-bs-target="#response" type="button" role="tab">
                  <i className="ri-first-aid-kit-line me-1" />
                  Response Capabilities
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="recovery-tab" data-bs-toggle="tab" data-bs-target="#recovery" type="button" role="tab">
                  <i className="ri-recycle-line me-1" />
                  Recovery Initiatives
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="documents-tab" data-bs-toggle="tab" data-bs-target="#documents" type="button" role="tab">
                  <i className="ri-file-list-3-line me-1" />
                  Documents
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="members-tab" data-bs-toggle="tab" data-bs-target="#members" type="button" role="tab">
                  <i className="ri-team-line me-1" /> Council
                  Members
                </button>
              </li>
            </ul>
            <div className="tab-content p-4 bg-white shadow-sm rounded-bottom" id="councilTabContent">
              {/* Resilience Activities Tab */}
              <div className="tab-pane fade show active" id="resilience" role="tabpanel">
                {/* Similar structure to district page but with council-level data */}
                <h4 className="mb-4">Resilience Building
                  Initiatives</h4>
                {/* Resilience Project Cards */}
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="card border-0 shadow-sm">
                      <div className="card-header" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                        <h5 className="mb-0">National Early
                          Warning System Upgrade</h5>
                        <span className="badge bg-success">In
                          Progress</span>
                      </div>
                      <div className="card-body">
                        <div className="progress mb-3" style={{ height: 10 }}>
                          <div className="progress-bar bg-success" role="progressbar" style={{ width: '65%' }} />
                        </div>
                        <p>Comprehensive upgrade of
                          national multi-hazard early
                          warning systems across all
                          districts.</p>
                        <div className="d-flex justify-content-between">
                          <div>
                            <small className="text-muted">Start
                              Date</small>
                            <div>Jan 15, 2025</div>
                          </div>
                          <div>
                            <small className="text-muted">Expected
                              Completion</small>
                            <div>Dec 31, 2025</div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-transparent">
                        <a href="#" className="btn btn-sm style1">View
                          Details</a>
                      </div>
                    </div>
                  </div>
                  {/* More resilience project cards */}
                </div>
              </div>
              {/* Response Capabilities Tab */}
              <div className="tab-pane fade" id="response" role="tabpanel">
                {/* Response readiness and capabilities content */}
                <h4 className="mb-4">National Response
                  Capabilities</h4>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="card text-center h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <div className="readiness-indicator mb-3">
                          <svg width={100} height={100} viewBox="0 0 100 100">
                            <circle cx={50} cy={50} r={45} fill="none" stroke="#e0e0e0" strokeWidth={10} />
                            <circle cx={50} cy={50} r={45} fill="none" stroke="#4CAF50" strokeWidth={10} strokeDasharray={283} strokeDashoffset={28} />
                            <text x={50} y={55} textAnchor="middle" fontSize={24} fontWeight="bold">90%</text>
                          </svg>
                        </div>
                        <h5>Emergency Response
                          Teams</h5>
                        <p className="text-muted">12 of 12
                          national teams ready for
                          deployment</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card text-center h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <div className="readiness-indicator mb-3">
                          <svg width={100} height={100} viewBox="0 0 100 100">
                            <circle cx={50} cy={50} r={45} fill="none" stroke="#e0e0e0" strokeWidth={10} />
                            <circle cx={50} cy={50} r={45} fill="none" stroke="#FFC107" strokeWidth={10} strokeDasharray={283} strokeDashoffset={85} />
                            <text x={50} y={55} textAnchor="middle" fontSize={24} fontWeight="bold">70%</text>
                          </svg>
                        </div>
                        <h5>Emergency Supplies</h5>
                        <p className="text-muted">Supply
                          inventory at 70% national
                          capacity</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card text-center h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <div className="readiness-indicator mb-3">
                          <svg width={100} height={100} viewBox="0 0 100 100">
                            <circle cx={50} cy={50} r={45} fill="none" stroke="#e0e0e0" strokeWidth={10} />
                            <circle cx={50} cy={50} r={45} fill="none" stroke="#2196F3" strokeWidth={10} strokeDasharray={283} strokeDashoffset={42} />
                            <text x={50} y={55} textAnchor="middle" fontSize={24} fontWeight="bold">85%</text>
                          </svg>
                        </div>
                        <h5>Coordination Centers</h5>
                        <p className="text-muted">6 of 6
                          national coordination
                          centers operational</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Recent Response Activities */}
                <h4 className="mb-4 mt-5">Recent National Response
                  Activities</h4>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Date</th>
                        <th>Incident</th>
                        <th>Affected Districts</th>
                        <th>Lead Ministry</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Feb 28, 2025</td>
                        <td>Cyclone Warning
                          Response</td>
                        <td>Eastern &amp; Southern
                          Districts</td>
                        <td>Environment Ministry</td>
                        <td><span className="badge bg-success">Completed</span></td>
                        <td><a href="#" className="btn btn-sm btn-outline-primary">View
                          Report</a></td>
                      </tr>
                      <tr>
                        <td>Jan 15, 2025</td>
                        <td>Flood Mitigation
                          Coordination</td>
                        <td>Port Louis, Black River</td>
                        <td>Infrastructure Ministry</td>
                        <td><span className="badge bg-success">Completed</span></td>
                        <td><a href="#" className="btn btn-sm btn-outline-primary">View
                          Report</a></td>
                      </tr>
                      <tr>
                        <td>Dec 10, 2024</td>
                        <td>Emergency Resource
                          Mobilization</td>
                        <td>All Districts</td>
                        <td>NDRRMC</td>
                        <td><span className="badge bg-success">Completed</span></td>
                        <td><a href="#" className="btn btn-sm btn-outline-primary">View
                          Report</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-center mt-4">
                  <a href="#" className="btn style2">View All
                    Response Activities</a>
                </div>
              </div>
              {/* Recovery Initiatives Tab */}
              <div className="tab-pane fade" id="recovery" role="tabpanel">
                <h4 className="mb-4">National Recovery
                  Initiatives</h4>
                <div className="row g-4 mb-5">
                  <div className="col-lg-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)' }}>
                        <h5 className="mb-0">Post-Disaster
                          Infrastructure
                          Rehabilitation</h5>
                        <span className="badge bg-success">Active</span>
                      </div>
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <div className="progress flex-grow-1 me-3" style={{ height: 8 }}>
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '65%' }} />
                          </div>
                          <span>65% Complete</span>
                        </div>
                        <p>Comprehensive national
                          program for rehabilitating
                          critical infrastructure
                          damaged by recent natural
                          disasters.</p>
                        <div className="row mt-3">
                          <div className="col-6">
                            <small className="text-muted d-block">Start
                              Date</small>
                            <span>Jan 15,
                              2025</span>
                          </div>
                          <div className="col-6">
                            <small className="text-muted d-block">Expected
                              Completion</small>
                            <span>Dec 31,
                              2025</span>
                          </div>
                          <div className="col-6 mt-3">
                            <small className="text-muted d-block">Lead
                              Ministry</small>
                            <span>Infrastructure
                              Ministry</span>
                          </div>
                          <div className="col-6 mt-3">
                            <small className="text-muted d-block">Budget</small>
                            <span>₨ 150
                              Million</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-transparent">
                        <a href="#" className="btn btn-sm style1">View
                          Project Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgba(33, 150, 243, 0.1)' }}>
                        <h5 className="mb-0">Community
                          Resilience Rebuilding
                          Program</h5>
                        <span className="badge bg-info">In
                          Progress</span>
                      </div>
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <div className="progress flex-grow-1 me-3" style={{ height: 8 }}>
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: '45%' }} />
                          </div>
                          <span>45% Complete</span>
                        </div>
                        <p>National program focusing on
                          community-level recovery,
                          social support, and
                          long-term resilience
                          building.</p>
                        <div className="row mt-3">
                          <div className="col-6">
                            <small className="text-muted d-block">Start
                              Date</small>
                            <span>Feb 01,
                              2025</span>
                          </div>
                          <div className="col-6">
                            <small className="text-muted d-block">Expected
                              Completion</small>
                            <span>Jan 31,
                              2026</span>
                          </div>
                          <div className="col-6 mt-3">
                            <small className="text-muted d-block">Lead
                              Ministry</small>
                            <span>Social
                              Services</span>
                          </div>
                          <div className="col-6 mt-3">
                            <small className="text-muted d-block">Budget</small>
                            <span>₨ 75
                              Million</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-transparent">
                        <a href="#" className="btn btn-sm style1">View
                          Project Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Recovery Impact Dashboard */}
                <h4 className="mb-4">National Recovery
                  Performance</h4>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm">
                      <div className="card-header">
                        <h5 className="mb-0">Recovery
                          Financial Overview</h5>
                      </div>
                      <div className="card-body">
                        <div id="recovery-financial-chart" style={{ height: 300 }} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm">
                      <div className="card-header">
                        <h5 className="mb-0">Recovery
                          Timeline Performance</h5>
                      </div>
                      <div className="card-body">
                        <div id="recovery-timeline-chart" style={{ height: 300 }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Documents Tab */}
              <div className="tab-pane fade" id="documents" role="tabpanel">
                {/* Similar to district page documents section */}
                <div className="document-tabs mb-4">
                  <ul className="nav nav-pills justify-content-center" id="document-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active mx-2 mb-2" id="all-docs-tab" data-bs-toggle="tab" type="button" role="tab">
                        All Documents
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link mx-2 mb-2" id="policy-tab" data-bs-toggle="tab" type="button" role="tab">
                        <i className="ri-file-text-line me-1" />Policy
                        Documents
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link mx-2 mb-2" id="strategy-tab" data-bs-toggle="tab" type="button" role="tab">
                        <i className="ri-file-chart-line me-1" />Strategic
                        Plans
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link mx-2 mb-2" id="reports-tab" data-bs-toggle="tab" type="button" role="tab">
                        <i className="ri-file-list-3-line me-1" />Annual
                        Reports
                      </button>
                    </li>
                  </ul>
                </div>
                {/* Document Search Bar */}
                <div className="document-search mb-4">
                  <div className="row g-2">
                    <div className="col-md-8">
                      <div className="position-relative">
                        <input type="text" className="form-control" placeholder="Search national documents by title, category, or keywords" style={{ paddingLeft: 40, height: 50, borderRadius: 25, border: '1px solid rgba(51, 143, 122, 0.3)' }} />
                        <i className="ri-search-line" style={{ position: 'absolute', left: 15, top: 17, color: '#338F7A' }} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <select className="form-select" style={{ height: 50, borderRadius: 25, border: '1px solid rgba(51, 143, 122, 0.3)', paddingLeft: 20 }}>
                        <option selected>Sort By: Most
                          Recent</option>
                        <option>Sort By: Title
                          A-Z</option>
                        <option>Sort By: Most
                          Downloaded</option>
                      </select>
                    </div>
                    <div className="col-md-1">
                      <button className="btn style1 w-100" style={{ height: 50, borderRadius: 25 }}>
                        <i className="ri-filter-3-line" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Document List */}
                {/* (Similar document list structure as district page) */}
              </div>
              {/* Council Members Tab */}
              <div className="tab-pane fade" id="members" role="tabpanel">
                <h4 className="mb-4">National Council
                  Membership</h4>
                <div className="row">
                  <div className="col-lg-4 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-header" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                        <h5 className="mb-0">Council
                          Composition</h5>
                      </div>
                      <div className="card-body">
                        <ul className="list-unstyled">
                          <li className="mb-2">
                            <strong>Total
                              Members:</strong> 25
                          </li>
                          <li className="mb-2">
                            <strong>Ex-Officio
                              Members:</strong> 12
                          </li>
                          <li className="mb-2">
                            <strong>Ministerial
                              Representatives:</strong>
                            10
                          </li>
                          <li>
                            <strong>External
                              Experts:</strong> 3
                          </li>
                        </ul>
                        <div className="text-center mt-3">
                          <span className="badge bg-success">Active
                            Since 2016</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-header" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                        <h5 className="mb-0">Key Council
                          Members</h5>
                      </div>
                      <div className="card-body p-0">
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <thead className="table-light">
                              <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Ministry/Organization</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img src="assets/img/raj.png" alt="Profile" className="rounded-circle me-2" width={40} />
                                    <div>Dr.
                                      Rajesh
                                      Ramphul</div>
                                  </div>
                                </td>
                                <td>Chairperson</td>
                                <td>Public
                                  Infrastructure</td>
                                <td>
                                  <a href="mailto:r.ramphul@ndrrmc.gov.mu" className="btn btn-sm btn-outline-primary me-1"><i className="ri-mail-line" /></a>
                                  <a href="#" className="btn btn-sm btn-outline-secondary"><i className="ri-profile-line" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img src="assets/img/raj.png" alt="Profile" className="rounded-circle me-2" width={40} />
                                    <div>Marie
                                      Lafosse</div>
                                  </div>
                                </td>
                                <td>Deputy
                                  Chairperson</td>
                                <td>Environment
                                  Ministry</td>
                                <td>
                                  <a href="mailto:m.lafosse@ndrrmc.gov.mu" className="btn btn-sm btn-outline-primary me-1"><i className="ri-mail-line" /></a>
                                  <a href="#" className="btn btn-sm btn-outline-secondary"><i className="ri-profile-line" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img src="assets/img/raj.png" alt="Profile" className="rounded-circle me-2" width={40} />
                                    <div>Ahmed
                                      Peerally</div>
                                  </div>
                                </td>
                                <td>Secretary</td>
                                <td>Civil
                                  Service</td>
                                <td>
                                  <a href="mailto:a.peerally@ndrrmc.gov.mu" className="btn btn-sm btn-outline-primary me-1"><i className="ri-mail-line" /></a>
                                  <a href="#" className="btn btn-sm btn-outline-secondary"><i className="ri-profile-line" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img src="assets/img/raj.png" alt="Profile" className="rounded-circle me-2" width={40} />
                                    <div>Sarah
                                      Ramdhani</div>
                                  </div>
                                </td>
                                <td>Technical
                                  Advisor</td>
                                <td>Meteorological
                                  Services</td>
                                <td>
                                  <a href="mailto:s.ramdhani@ndrrmc.gov.mu" className="btn btn-sm btn-outline-primary me-1"><i className="ri-mail-line" /></a>
                                  <a href="#" className="btn btn-sm btn-outline-secondary"><i className="ri-profile-line" /></a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* Ministerial Representation */}
                    <div className="card border-0 shadow-sm">
                      <div className="card-header" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)' }}>
                        <h5 className="mb-0">Ministerial
                          Representation</h5>
                      </div>
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-md-4">
                            <div className="d-flex align-items-center">
                              <div className="me-3">
                                <img src="assets/img/infrastructure.png" alt="Infrastructure" width={40} />
                              </div>
                              <div>
                                <h6 className="mb-1">Infrastructure</h6>
                                <small className="text-muted">Lead
                                  Coordination</small>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="d-flex align-items-center">
                              <div className="me-3">
                                <img src="assets/img/eco-friendly.png" alt="Environment" width={40} />
                              </div>
                              <div>
                                <h6 className="mb-1">Environment</h6>
                                <small className="text-muted">Risk
                                  Assessment</small>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="d-flex align-items-center">
                              <div className="me-3">
                                <img src="assets/img/tooth.png" alt="Health" width={40} />
                              </div>
                              <div>
                                <h6 className="mb-1">Health</h6>
                                <small className="text-muted">Emergency
                                  Response</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-3">
                          <a href="#" className="btn btn-sm style2">View
                            Full Ministerial
                            List</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Council Responsibilities */}
                <div className="row mt-4">
                  <div className="col-lg-12">
                    <div className="card border-0 shadow-sm">
                      <div className="card-header" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                        <h5 className="mb-0">Council
                          Responsibilities</h5>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="d-flex mb-3">
                              <div className="me-3">
                                <i className="ri-shield-check-line" style={{ fontSize: 36, color: '#338F7A' }} />
                              </div>
                              <div>
                                <h6>Risk
                                  Reduction</h6>
                                <p className="small text-muted">Develop
                                  and
                                  implement
                                  national
                                  disaster
                                  risk
                                  reduction
                                  strategies.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="d-flex mb-3">
                              <div className="me-3">
                                <i className="ri-alarm-warning-line" style={{ fontSize: 36, color: '#F59946' }} />
                              </div>
                              <div>
                                <h6>Emergency
                                  Coordination</h6>
                                <p className="small text-muted">Coordinate
                                  multi-agency
                                  response
                                  during
                                  national
                                  emergencies.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="d-flex mb-3">
                              <div className="me-3">
                                <i className="ri-community-line" style={{ fontSize: 36, color: '#2196F3' }} />
                              </div>
                              <div>
                                <h6>Community
                                  Resilience</h6>
                                <p className="small text-muted">Build
                                  and
                                  strengthen
                                  community-level
                                  disaster
                                  preparedness.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <a href="#" className="btn style1">Download
                    Council Membership Directory</a>
                  <a href="#" className="btn style2 ms-2">Council
                    Meeting Calendar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
