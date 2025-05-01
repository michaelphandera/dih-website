"use client";

import React from 'react';

interface CouncilActivityTabsProps {
  councilId: string;
}

export function CouncilActivityTabs({ councilId }: CouncilActivityTabsProps) {
  return (
    <div className="council-activity-tabs">
      <ul className="nav nav-tabs" id="councilTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="resilience-tab" data-bs-toggle="tab" data-bs-target="#resilience" type="button" role="tab">
            <i className="ri-shield-check-line me-1" /> Resilience Activities
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="response-tab" data-bs-toggle="tab" data-bs-target="#response" type="button" role="tab">
            <i className="ri-alarm-warning-line me-1" /> Response
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="recovery-tab" data-bs-toggle="tab" data-bs-target="#recovery" type="button" role="tab">
            <i className="ri-health-book-line me-1" /> Recovery
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="preparedness-tab" data-bs-toggle="tab" data-bs-target="#preparedness" type="button" role="tab">
            <i className="ri-calendar-check-line me-1" /> Preparedness
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="members-tab" data-bs-toggle="tab" data-bs-target="#members" type="button" role="tab">
            <i className="ri-team-line me-1" /> Council Members
          </button>
        </li>
      </ul>
      <div className="tab-content p-4 bg-white shadow-sm rounded-bottom" id="councilTabContent">
        {/* Resilience Tab */}
        <div className="tab-pane fade show active" id="resilience" role="tabpanel">
          <div className="row mb-4">
            <div className="col-md-8">
              <h4 className="mb-4">Resilience Building Initiatives</h4>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Resilience Project 1</h5>
                  <p className="card-text">Description of the resilience project and its impact on disaster risk reduction.</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="badge bg-success">Active</span>
                    <small className="text-muted">Started: Jan 2024</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Resilience Project 2</h5>
                  <p className="card-text">Description of another resilience project focusing on infrastructure strengthening.</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="badge bg-success">Active</span>
                    <small className="text-muted">Started: Mar 2024</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="btn style2">Load More</a>
          </div>
        </div>

        {/* Response Tab */}
        <div className="tab-pane fade" id="response" role="tabpanel">
          <h4 className="mb-4">Response Capabilities</h4>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Emergency Response Protocol</h5>
                  <p className="card-text">Details about the council's emergency response protocols and procedures.</p>
                  <div className="mt-3">
                    <span className="badge bg-info">Last Updated: April 2024</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Resource Mobilization Plan</h5>
                  <p className="card-text">Information about how resources are mobilized during emergencies.</p>
                  <div className="mt-3">
                    <span className="badge bg-info">Last Updated: March 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="mb-4 mt-5">Recent Response Activities</h4>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Incident</th>
                  <th>Location</th>
                  <th>Lead Agency</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>May 10, 2024</td>
                  <td>Flash Flood Response</td>
                  <td>Eastern Region</td>
                  <td>Water Resources</td>
                  <td><span className="badge bg-success">Completed</span></td>
                  <td><a href="#" className="btn btn-sm btn-outline-primary">View Report</a></td>
                </tr>
                <tr>
                  <td>April 5, 2024</td>
                  <td>Drought Mitigation</td>
                  <td>Southern Districts</td>
                  <td>Agriculture</td>
                  <td><span className="badge bg-warning">Ongoing</span></td>
                  <td><a href="#" className="btn btn-sm btn-outline-primary">View Details</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recovery Tab */}
        <div className="tab-pane fade" id="recovery" role="tabpanel">
          <h4 className="mb-4">Recovery Programs</h4>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Recovery Program 1</h5>
                  <p className="card-text">Description of the recovery program and its objectives.</p>
                  <div className="progress mt-3" style={{ height: '10px' }}>
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <small>Progress: 75%</small>
                    <small>Budget: ₨ 15M</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Recovery Program 2</h5>
                  <p className="card-text">Description of another recovery program focusing on community rehabilitation.</p>
                  <div className="progress mt-3" style={{ height: '10px' }}>
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <small>Progress: 40%</small>
                    <small>Budget: ₨ 22M</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="btn style2">View All Recovery Programs</a>
          </div>
        </div>

        {/* Preparedness Tab */}
        <div className="tab-pane fade" id="preparedness" role="tabpanel">
          <h4 className="mb-4">Preparedness Initiatives</h4>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Training Program</h5>
                  <p className="card-text">Regular training programs to prepare stakeholders for various disaster scenarios.</p>
                  <ul className="list-unstyled mt-3">
                    <li><i className="ri-check-line text-success me-2"></i> 500+ personnel trained</li>
                    <li><i className="ri-check-line text-success me-2"></i> Quarterly sessions</li>
                    <li><i className="ri-check-line text-success me-2"></i> Practical exercises included</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Early Warning Systems</h5>
                  <p className="card-text">Development and maintenance of early warning systems for various hazards.</p>
                  <ul className="list-unstyled mt-3">
                    <li><i className="ri-check-line text-success me-2"></i> Multiple hazard coverage</li>
                    <li><i className="ri-check-line text-success me-2"></i> Real-time monitoring</li>
                    <li><i className="ri-check-line text-success me-2"></i> Public alert mechanisms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h4 className="mb-4 mt-5">Upcoming Preparedness Activities</h4>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Activity</th>
                  <th>Location</th>
                  <th>Participants</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>June 15, 2024</td>
                  <td>Disaster Simulation Exercise</td>
                  <td>Central Region</td>
                  <td>Emergency Services, Volunteers</td>
                  <td><a href="#" className="btn btn-sm btn-outline-primary">Details</a></td>
                </tr>
                <tr>
                  <td>July 10, 2024</td>
                  <td>Community Preparedness Workshop</td>
                  <td>Multiple Locations</td>
                  <td>Community Leaders, Public</td>
                  <td><a href="#" className="btn btn-sm btn-outline-primary">Register</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Members Tab */}
        <div className="tab-pane fade" id="members" role="tabpanel">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                  <h5 className="mb-0">Council Composition</h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    <li className="mb-2"><strong>Total Members:</strong> 25</li>
                    <li className="mb-2"><strong>Ex-Officio Members:</strong> 12</li>
                    <li className="mb-2"><strong>Ministerial Representatives:</strong> 10</li>
                    <li><strong>External Experts:</strong> 3</li>
                  </ul>
                  <div className="text-center mt-3">
                    <span className="badge bg-success">Active Since 2016</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                  <h5 className="mb-0">Key Council Members</h5>
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
                              <img src="/img/raj.png" alt="Profile" className="rounded-circle me-2" width={40} />
                              <div>Dr. Rajesh Ramphul</div>
                            </div>
                          </td>
                          <td>Chairperson</td>
                          <td>Public Infrastructure</td>
                          <td>
                            <a href="mailto:r.ramphul@ndrrmc.gov.mu" className="btn btn-sm btn-outline-primary me-1"><i className="ri-mail-line"></i></a>
                            <a href="#" className="btn btn-sm btn-outline-secondary"><i className="ri-profile-line"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src="/img/placeholder.jpg" alt="Profile" className="rounded-circle me-2" width={40} />
                              <div>Mrs. Leela Devi</div>
                            </div>
                          </td>
                          <td>Deputy Chair</td>
                          <td>Environment</td>
                          <td>
                            <a href="mailto:l.devi@ndrrmc.gov.mu" className="btn btn-sm btn-outline-primary me-1"><i className="ri-mail-line"></i></a>
                            <a href="#" className="btn btn-sm btn-outline-secondary"><i className="ri-profile-line"></i></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card border-0 shadow-sm">
                <div className="card-header" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                  <h5 className="mb-0">Council Functions</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="d-flex mb-3">
                        <div className="me-3">
                          <i className="ri-government-line" style={{ fontSize: 36, color: '#338F7A' }}></i>
                        </div>
                        <div>
                          <h6>Policy Development</h6>
                          <p className="small text-muted">Develop and review disaster management policies.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex mb-3">
                        <div className="me-3">
                          <i className="ri-team-line" style={{ fontSize: 36, color: '#338F7A' }}></i>
                        </div>
                        <div>
                          <h6>Coordination</h6>
                          <p className="small text-muted">Coordinate multi-agency response during emergencies.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex mb-3">
                        <div className="me-3">
                          <i className="ri-community-line" style={{ fontSize: 36, color: '#338F7A' }}></i>
                        </div>
                        <div>
                          <h6>Community Resilience</h6>
                          <p className="small text-muted">Build community-level disaster preparedness.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="btn style1">Download Council Membership Directory</a>
            <a href="#" className="btn style2 ms-2">Council Meeting Calendar</a>
          </div>
        </div>
      </div>
    </div>
  );
}
