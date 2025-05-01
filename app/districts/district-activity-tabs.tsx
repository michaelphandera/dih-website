
type DistrictActivityTabsProps = {
    districtId: string;
};

export function DistrictActivityTabs({ districtId }: DistrictActivityTabsProps) {
    return (
        <div className="district-activity-tabs">
            <ul className="nav nav-tabs" id="districtTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="resilience-tab" data-bs-toggle="tab" data-bs-target="#resilience" type="button" role="tab">
                        <i className="ri-shield-check-line me-1" /> Resilience
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="response-tab" data-bs-toggle="tab" data-bs-target="#response" type="button" role="tab">
                        <i className="ri-first-aid-kit-line me-1" /> Response
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="recovery-tab" data-bs-toggle="tab" data-bs-target="#recovery" type="button" role="tab">
                        <i className="ri-recycle-line me-1" /> Recovery
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="documents-tab" data-bs-toggle="tab" data-bs-target="#documents" type="button" role="tab">
                        <i className="ri-file-list-3-line me-1" /> Documents
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab">
                        <i className="ri-contacts-line me-1" /> Contact
                    </button>
                </li>
            </ul>
            <div className="tab-content p-4 bg-white shadow-sm rounded-bottom" id="districtTabContent">
                {/* Resilience Tab */}
                <div className="tab-pane fade show active" id="resilience" role="tabpanel">
                    <div className="row mb-4">
                        <div className="col-md-8">
                            <h4 className="mb-4">Resilience Building</h4>
                        </div>
                    </div>

                    <div className="row g-4 mb-4">
                        <div className="col-lg-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                                    <h5 className="mb-0">Flood Mitigation Project</h5>
                                    <span className="badge" style={{ backgroundColor: '#338F7A' }}>Environment
                                        Ministry</span>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="progress flex-grow-1 me-3" style={{ height: 8 }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} />
                                        </div>
                                        <span>75% Complete</span>
                                    </div>
                                    <p>Construction of enhanced drainage systems in
                                        flood-prone areas of Port Louis to mitigate
                                        risks during heavy rainfall events.</p>
                                    <div className="d-flex mt-3">
                                        <div className="me-4">
                                            <small className="text-muted d-block">Start
                                                Date</small>
                                            <span>Jan 15, 2025</span>
                                        </div>
                                        <div>
                                            <small className="text-muted d-block">End
                                                Date</small>
                                            <span>May 30, 2025</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-transparent">
                                    <a href="#" className="btn btn-sm style1">View
                                        Details</a>
                                    <a href="#" className="btn btn-sm btn-outline-secondary ms-2">Related
                                        Documents</a>
                                </div>
                            </div>
                        </div>
                        {/* Activity 2 */}
                        <div className="col-lg-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)' }}>
                                    <h5 className="mb-0">Community Training Program</h5>
                                    <span className="badge" style={{ backgroundColor: '#F59946' }}>Health
                                        Ministry</span>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="progress flex-grow-1 me-3" style={{ height: 8 }}>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '40%' }} />
                                        </div>
                                        <span>40% Complete</span>
                                    </div>
                                    <p>Training community volunteers in basic first aid,
                                        emergency response, and coordination with
                                        official emergency services.</p>
                                    <div className="d-flex mt-3">
                                        <div className="me-4">
                                            <small className="text-muted d-block">Start
                                                Date</small>
                                            <span>Feb 10, 2025</span>
                                        </div>
                                        <div>
                                            <small className="text-muted d-block">End
                                                Date</small>
                                            <span>Jul 15, 2025</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-transparent">
                                    <a href="#" className="btn btn-sm style1">View
                                        Details</a>
                                    <a href="#" className="btn btn-sm btn-outline-secondary ms-2">Related
                                        Documents</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Activity Timeline */}
                    <div className="district-activity-timeline mt-5">
                        <h4 className="mb-4">Activity Timeline</h4>
                        <div className="timeline-container position-relative">
                            <div className="timeline-line" />
                            {/* Timeline items */}
                            <div className="timeline-item">
                                <div className="timeline-date">Apr 10, 2025</div>
                                <div className="timeline-content">
                                    <h5>Infrastructure Assessment Report Published</h5>
                                    <p>Final assessment report on critical
                                        infrastructure resilience published by
                                        Infrastructure Ministry.</p>
                                    <div className="timeline-meta">
                                        <span className="badge" style={{ backgroundColor: '#6EB4F0' }}>Infrastructure
                                            Ministry</span>
                                        <a href="#" className="ms-2"><i className="ri-file-text-line" /> View
                                            Report</a>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">Mar 25, 2025</div>
                                <div className="timeline-content">
                                    <h5>Community Training Session #2 Completed</h5>
                                    <p>Successfully trained 45 community volunteers in
                                        emergency first aid procedures.</p>
                                    <div className="timeline-meta">
                                        <span className="badge" style={{ backgroundColor: '#F59946' }}>Health
                                            Ministry</span>
                                        <a href="#" className="ms-2"><i className="ri-image-line" /> View
                                            Gallery</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <a href="#" className="btn style2">Load More</a>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="response" role="tabpanel">
                    <div className="row mb-4">
                        <div className="col-md-8">
                            <h4 className="mb-4">Response Building</h4>
                        </div>
                    </div>

                    <div className="row g-4 mb-4">
                        <div className="col-lg-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                                    <h5 className="mb-0">Flood Mitigation Project</h5>
                                    <span className="badge" style={{ backgroundColor: '#338F7A' }}>Environment
                                        Ministry</span>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="progress flex-grow-1 me-3" style={{ height: 8 }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} />
                                        </div>
                                        <span>75% Complete</span>
                                    </div>
                                    <p>Construction of enhanced drainage systems in
                                        flood-prone areas of Port Louis to mitigate
                                        risks during heavy rainfall events.</p>
                                    <div className="d-flex mt-3">
                                        <div className="me-4">
                                            <small className="text-muted d-block">Start
                                                Date</small>
                                            <span>Jan 15, 2025</span>
                                        </div>
                                        <div>
                                            <small className="text-muted d-block">End
                                                Date</small>
                                            <span>May 30, 2025</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-transparent">
                                    <a href="#" className="btn btn-sm style1">View
                                        Details</a>
                                    <a href="#" className="btn btn-sm btn-outline-secondary ms-2">Related
                                        Documents</a>
                                </div>
                            </div>
                        </div>
                        {/* Activity 2 */}
                        <div className="col-lg-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)' }}>
                                    <h5 className="mb-0">Community Training Program</h5>
                                    <span className="badge" style={{ backgroundColor: '#F59946' }}>Health
                                        Ministry</span>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="progress flex-grow-1 me-3" style={{ height: 8 }}>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '40%' }} />
                                        </div>
                                        <span>40% Complete</span>
                                    </div>
                                    <p>Training community volunteers in basic first aid,
                                        emergency response, and coordination with
                                        official emergency services.</p>
                                    <div className="d-flex mt-3">
                                        <div className="me-4">
                                            <small className="text-muted d-block">Start
                                                Date</small>
                                            <span>Feb 10, 2025</span>
                                        </div>
                                        <div>
                                            <small className="text-muted d-block">End
                                                Date</small>
                                            <span>Jul 15, 2025</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-transparent">
                                    <a href="#" className="btn btn-sm style1">View
                                        Details</a>
                                    <a href="#" className="btn btn-sm btn-outline-secondary ms-2">Related
                                        Documents</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Activity Timeline */}
                    <div className="district-activity-timeline mt-5">
                        <h4 className="mb-4">Activity Timeline</h4>
                        <div className="timeline-container position-relative">
                            <div className="timeline-line" />
                            {/* Timeline items */}
                            <div className="timeline-item">
                                <div className="timeline-date">Apr 10, 2025</div>
                                <div className="timeline-content">
                                    <h5>Infrastructure Assessment Report Published</h5>
                                    <p>Final assessment report on critical
                                        infrastructure resilience published by
                                        Infrastructure Ministry.</p>
                                    <div className="timeline-meta">
                                        <span className="badge" style={{ backgroundColor: '#6EB4F0' }}>Infrastructure
                                            Ministry</span>
                                        <a href="#" className="ms-2"><i className="ri-file-text-line" /> View
                                            Report</a>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">Mar 25, 2025</div>
                                <div className="timeline-content">
                                    <h5>Community Training Session #2 Completed</h5>
                                    <p>Successfully trained 45 community volunteers in
                                        emergency first aid procedures.</p>
                                    <div className="timeline-meta">
                                        <span className="badge" style={{ backgroundColor: '#F59946' }}>Health
                                            Ministry</span>
                                        <a href="#" className="ms-2"><i className="ri-image-line" /> View
                                            Gallery</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <a href="#" className="btn style2">Load More</a>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="recovery" role="tabpanel">
                    <div className="row mb-4">
                        <div className="col-md-8">
                            <h4 className="mb-4">Recovery Building</h4>
                        </div>
                    </div>

                    <div className="row g-4 mb-4">
                        <div className="col-lg-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                                    <h5 className="mb-0">Flood Mitigation Project</h5>
                                    <span className="badge" style={{ backgroundColor: '#338F7A' }}>Environment
                                        Ministry</span>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="progress flex-grow-1 me-3" style={{ height: 8 }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} />
                                        </div>
                                        <span>75% Complete</span>
                                    </div>
                                    <p>Construction of enhanced drainage systems in
                                        flood-prone areas of Port Louis to mitigate
                                        risks during heavy rainfall events.</p>
                                    <div className="d-flex mt-3">
                                        <div className="me-4">
                                            <small className="text-muted d-block">Start
                                                Date</small>
                                            <span>Jan 15, 2025</span>
                                        </div>
                                        <div>
                                            <small className="text-muted d-block">End
                                                Date</small>
                                            <span>May 30, 2025</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-transparent">
                                    <a href="#" className="btn btn-sm style1">View
                                        Details</a>
                                    <a href="#" className="btn btn-sm btn-outline-secondary ms-2">Related
                                        Documents</a>
                                </div>
                            </div>
                        </div>
                        {/* Activity 2 */}
                        <div className="col-lg-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)' }}>
                                    <h5 className="mb-0">Community Training Program</h5>
                                    <span className="badge" style={{ backgroundColor: '#F59946' }}>Health
                                        Ministry</span>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="progress flex-grow-1 me-3" style={{ height: 8 }}>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '40%' }} />
                                        </div>
                                        <span>40% Complete</span>
                                    </div>
                                    <p>Training community volunteers in basic first aid,
                                        emergency response, and coordination with
                                        official emergency services.</p>
                                    <div className="d-flex mt-3">
                                        <div className="me-4">
                                            <small className="text-muted d-block">Start
                                                Date</small>
                                            <span>Feb 10, 2025</span>
                                        </div>
                                        <div>
                                            <small className="text-muted d-block">End
                                                Date</small>
                                            <span>Jul 15, 2025</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-transparent">
                                    <a href="#" className="btn btn-sm style1">View
                                        Details</a>
                                    <a href="#" className="btn btn-sm btn-outline-secondary ms-2">Related
                                        Documents</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Activity Timeline */}
                    <div className="district-activity-timeline mt-5">
                        <h4 className="mb-4">Activity Timeline</h4>
                        <div className="timeline-container position-relative">
                            <div className="timeline-line" />
                            {/* Timeline items */}
                            <div className="timeline-item">
                                <div className="timeline-date">Apr 10, 2025</div>
                                <div className="timeline-content">
                                    <h5>Infrastructure Assessment Report Published</h5>
                                    <p>Final assessment report on critical
                                        infrastructure resilience published by
                                        Infrastructure Ministry.</p>
                                    <div className="timeline-meta">
                                        <span className="badge" style={{ backgroundColor: '#6EB4F0' }}>Infrastructure
                                            Ministry</span>
                                        <a href="#" className="ms-2"><i className="ri-file-text-line" /> View
                                            Report</a>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">Mar 25, 2025</div>
                                <div className="timeline-content">
                                    <h5>Community Training Session #2 Completed</h5>
                                    <p>Successfully trained 45 community volunteers in
                                        emergency first aid procedures.</p>
                                    <div className="timeline-meta">
                                        <span className="badge" style={{ backgroundColor: '#F59946' }}>Health
                                            Ministry</span>
                                        <a href="#" className="ms-2"><i className="ri-image-line" /> View
                                            Gallery</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <a href="#" className="btn style2">Load More</a>
                        </div>
                    </div>
                </div>
                {/* Documents Tab */}
                <div className="tab-pane fade" id="documents" role="tabpanel">
                    {/* Document Categories */}
                    <div className="document-tabs mb-4">
                        <ul className="nav nav-pills" id="document-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active mx-2 mb-2" id="all-docs-tab" data-bs-toggle="tab" data-bs-target="#all-docs" type="button" role="tab">
                                    All Documents
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link mx-2 mb-2" id="reports-tab" data-bs-toggle="tab" data-bs-target="#reports" type="button" role="tab">
                                    <i className="ri-file-chart-line me-1" />Reports
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link mx-2 mb-2" id="infographics-tab" data-bs-toggle="tab" data-bs-target="#infographics" type="button" role="tab">
                                    <i className="ri-image-line me-1" />Infographics
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link mx-2 mb-2" id="maps-tab" data-bs-toggle="tab" data-bs-target="#maps" type="button" role="tab">
                                    <i className="ri-map-2-line me-1" />Maps
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link mx-2 mb-2" id="manuals-tab" data-bs-toggle="tab" data-bs-target="#manuals" type="button" role="tab">
                                    <i className="ri-book-open-line me-1" />User Manuals
                                </button>
                            </li>
                        </ul>
                    </div>
                    {/* Document Search Bar */}
                    <div className="document-search mb-4">
                        <div className="position-relative">
                            <input type="text" className="form-control" placeholder="Search documents by title, category, or keywords" style={{ paddingLeft: 40, height: 50, borderRadius: 25, border: '1px solid rgba(51, 143, 122, 0.3)' }} />
                            <i className="ri-search-line" style={{ position: 'absolute', left: 15, top: 17, color: '#338F7A' }} />
                        </div>
                    </div>
                    {/* Document Tab Content */}
                    <div className="tab-content">
                        {/* All Documents Tab */}
                        <div className="tab-pane fade show active" id="all-docs" role="tabpanel">
                            <div className="row">
                                {/* Document 1 */}
                                <div className="col-lg-6 mb-4">
                                    <div className="document-card bg-white rounded shadow-sm overflow-hidden">
                                        <div className="row g-0">
                                            <div className="col-md-3 position-relative">
                                                <div className="document-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                                                    <div className="document-icon p-3 bg-white rounded-circle shadow-sm">
                                                        <img src="assets/img/document-icons/pdf-icon.svg" alt="PDF" style={{ width: 40, height: 40 }} />
                                                    </div>
                                                    <div className="document-badge position-absolute top-0 start-0 m-2 px-2 py-1 rounded" style={{ backgroundColor: '#338F7A', color: 'white', fontSize: 11 }}>
                                                        OFFICIAL
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="document-info p-3">
                                                    <div className="document-meta d-flex align-items-center mb-2">
                                                        <span className="document-type me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)', color: '#338F7A', fontSize: 11 }}>
                                                            <i className="ri-file-pdf-line me-1" />PDF
                                                        </span>
                                                        <span className="document-size me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 11 }}>
                                                            2.8 MB
                                                        </span>
                                                        <span className="document-date ms-auto" style={{ fontSize: 11, color: '#666' }}>
                                                            <i className="ri-time-line me-1" />Updated:
                                                            Apr 1, 2025
                                                        </span>
                                                    </div>
                                                    <h5 className="document-title mb-2">Port
                                                        Louis Disaster Response
                                                        Plan</h5>
                                                    <p className="document-description mb-2" style={{ fontSize: 13, color: '#666' }}>
                                                        Comprehensive plan detailing
                                                        response protocols for various
                                                        disaster scenarios in Port Louis
                                                        district.
                                                    </p>
                                                    <div className="document-actions d-flex align-items-center">
                                                        <a href="#" className="btn style2 me-2" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-download-line me-1" />
                                                            Download
                                                        </a>
                                                        <a href="#" className="btn style1" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-eye-line me-1" />
                                                            View
                                                        </a>
                                                        <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                                            <i className="ri-bookmark-line" style={{ fontSize: 18, color: '#338F7A' }} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Document 2 */}
                                <div className="col-lg-6 mb-4">
                                    <div className="document-card bg-white rounded shadow-sm overflow-hidden">
                                        <div className="row g-0">
                                            <div className="col-md-3 position-relative">
                                                <div className="document-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)' }}>
                                                    <div className="document-icon p-3 bg-white rounded-circle shadow-sm">
                                                        <img src="assets/img/document-icons/ppt-icon.svg" alt="PPT" style={{ width: 40, height: 40 }} />
                                                    </div>
                                                    <div className="document-badge position-absolute top-0 start-0 m-2 px-2 py-1 rounded" style={{ backgroundColor: '#F59946', color: 'white', fontSize: 11 }}>
                                                        TRAINING
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="document-info p-3">
                                                    <div className="document-meta d-flex align-items-center mb-2">
                                                        <span className="document-type me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)', color: '#F59946', fontSize: 11 }}>
                                                            <i className="ri-file-ppt-line me-1" />PPT
                                                        </span>
                                                        <span className="document-size me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 11 }}>
                                                            5.2 MB
                                                        </span>
                                                        <span className="document-date ms-auto" style={{ fontSize: 11, color: '#666' }}>
                                                            <i className="ri-time-line me-1" />Updated:
                                                            Mar 15, 2025
                                                        </span>
                                                    </div>
                                                    <h5 className="document-title mb-2">Community
                                                        Training Materials</h5>
                                                    <p className="document-description mb-2" style={{ fontSize: 13, color: '#666' }}>
                                                        Training presentation for
                                                        community volunteers covering
                                                        emergency response procedures
                                                        and coordination.
                                                    </p>
                                                    <div className="document-actions d-flex align-items-center">
                                                        <a href="#" className="btn style2 me-2" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-download-line me-1" />
                                                            Download
                                                        </a>
                                                        <a href="#" className="btn style1" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-eye-line me-1" />
                                                            View
                                                        </a>
                                                        <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                                            <i className="ri-bookmark-line" style={{ fontSize: 18, color: '#F59946' }} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-3 mb-4">
                                <button className="btn style1">Load More Documents</button>
                            </div>
                        </div>
                        {/* Plans & Strategies Tab */}
                        <div className="tab-pane fade" id="plans" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="document-card bg-white rounded shadow-sm overflow-hidden">
                                        <div className="row g-0">
                                            <div className="col-md-3 position-relative">
                                                <div className="document-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                                                    <div className="document-icon p-3 bg-white rounded-circle shadow-sm">
                                                        <img src="assets/img/document-icons/pdf-icon.svg" alt="PDF" style={{ width: 40, height: 40 }} />
                                                    </div>
                                                    <div className="document-badge position-absolute top-0 start-0 m-2 px-2 py-1 rounded" style={{ backgroundColor: '#338F7A', color: 'white', fontSize: 11 }}>
                                                        OFFICIAL
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="document-info p-3">
                                                    <div className="document-meta d-flex align-items-center mb-2">
                                                        <span className="document-type me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)', color: '#338F7A', fontSize: 11 }}>
                                                            <i className="ri-file-pdf-line me-1" />PDF
                                                        </span>
                                                        <span className="document-size me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 11 }}>
                                                            2.8 MB
                                                        </span>
                                                        <span className="document-date ms-auto" style={{ fontSize: 11, color: '#666' }}>
                                                            <i className="ri-time-line me-1" />Updated:
                                                            Apr 1, 2025
                                                        </span>
                                                    </div>
                                                    <h5 className="document-title mb-2">Port
                                                        Louis Disaster Response
                                                        Plan</h5>
                                                    <p className="document-description mb-2" style={{ fontSize: 13, color: '#666' }}>
                                                        Comprehensive plan detailing
                                                        response protocols for various
                                                        disaster scenarios in Port Louis
                                                        district.
                                                    </p>
                                                    <div className="document-actions d-flex align-items-center">
                                                        <a href="#" className="btn style2 me-2" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-download-line me-1" />
                                                            Download
                                                        </a>
                                                        <a href="#" className="btn style1" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-eye-line me-1" />
                                                            View
                                                        </a>
                                                        <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                                            <i className="ri-bookmark-line" style={{ fontSize: 18, color: '#338F7A' }} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Infographics Tab */}
                        <div className="tab-pane fade" id="infographics" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card h-100 shadow-sm">
                                        <img src="assets/img/12035.jpg" className="card-img-top" alt="Flood Safety Infographic" />
                                        <div className="card-body">
                                            <h5 className="card-title">Flood Safety
                                                Guidelines</h5>
                                            <p className="card-text">Essential safety
                                                measures before, during, and after
                                                flooding events.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span className="badge me-1" style={{ backgroundColor: '#338F7A' }}>Safety</span>
                                                    <span className="badge" style={{ backgroundColor: '#6EB4F0' }}>Port
                                                        Louis</span>
                                                </div>
                                                <small className="text-muted">Updated: Mar
                                                    15, 2025</small>
                                            </div>
                                        </div>
                                        <div className="card-footer bg-transparent">
                                            <a href="#" className="btn style1 btn-sm">View
                                                Infographic</a>
                                            <a href="#" className="btn btn-outline-secondary btn-sm ms-1">Download</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card h-100 shadow-sm">
                                        <img src="assets/img/22301.jpg" className="card-img-top" alt="Emergency Kit Infographic" />
                                        <div className="card-body">
                                            <h5 className="card-title">Emergency Kit
                                                Essentials</h5>
                                            <p className="card-text">Comprehensive guide to
                                                building and maintaining emergency kits
                                                for different scenarios.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span className="badge me-1" style={{ backgroundColor: '#F59946' }}>Preparedness</span>
                                                    <span className="badge" style={{ backgroundColor: '#6EB4F0' }}>All
                                                        Districts</span>
                                                </div>
                                                <small className="text-muted">Updated: Feb
                                                    22, 2025</small>
                                            </div>
                                        </div>
                                        <div className="card-footer bg-transparent">
                                            <a href="#" className="btn style1 btn-sm">View
                                                Infographic</a>
                                            <a href="#" className="btn btn-outline-secondary btn-sm ms-1">Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Maps Tab */}
                        <div className="tab-pane fade" id="maps" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card h-100 shadow-sm">
                                        <div className="card-img-top p-2 bg-light">
                                            <img src="assets/img/maps/Port_Louis_in_Mauritius.svg.png" className="img-fluid rounded" alt="Port Louis Flood Risk Map" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Port Louis Flood Risk
                                                Map</h5>
                                            <p className="card-text">Detailed map showing
                                                flood risk zones across Port Louis with
                                                emergency routes and evacuation
                                                centers.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span className="badge me-1" style={{ backgroundColor: '#6EB4F0' }}>Risk
                                                        Assessment</span>
                                                    <span className="badge" style={{ backgroundColor: '#338F7A' }}>Port
                                                        Louis</span>
                                                </div>
                                                <small className="text-muted">Updated: Apr
                                                    2, 2025</small>
                                            </div>
                                        </div>
                                        <div className="card-footer bg-transparent">
                                            <a href="#" className="btn style1 btn-sm">View
                                                Interactive Map</a>
                                            <a href="#" className="btn btn-outline-secondary btn-sm ms-1">Download
                                                PDF</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card h-100 shadow-sm">
                                        <div className="card-img-top p-2 bg-light">
                                            <div style={{ height: 200, backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                                <i className="ri-map-2-line" style={{ fontSize: 48, color: '#ccc' }} />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Port Louis Evacuation
                                                Routes</h5>
                                            <p className="card-text">Interactive map showing
                                                primary and secondary evacuation routes
                                                with real-time traffic integration.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span className="badge me-1" style={{ backgroundColor: '#F59946' }}>Evacuation</span>
                                                    <span className="badge" style={{ backgroundColor: '#338F7A' }}>Port
                                                        Louis</span>
                                                </div>
                                                <small className="text-muted">Updated: Mar
                                                    25, 2025</small>
                                            </div>
                                        </div>
                                        <div className="card-footer bg-transparent">
                                            <a href="#" className="btn style1 btn-sm">View
                                                Interactive Map</a>
                                            <a href="#" className="btn btn-outline-secondary btn-sm ms-1">Download
                                                PDF</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Forms Tab */}
                        <div className="tab-pane fade" id="forms" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="document-card bg-white rounded shadow-sm overflow-hidden">
                                        <div className="row g-0">
                                            <div className="col-md-3 position-relative">
                                                <div className="document-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(110, 180, 240, 0.1)' }}>
                                                    <div className="document-icon p-3 bg-white rounded-circle shadow-sm">
                                                        <img src="assets/img/document-icons/doc-icon.svg" alt="DOC" style={{ width: 40, height: 40 }} />
                                                    </div>
                                                    <div className="document-badge position-absolute top-0 start-0 m-2 px-2 py-1 rounded" style={{ backgroundColor: '#6EB4F0', color: 'white', fontSize: 11 }}>
                                                        FORM
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="document-info p-3">
                                                    <div className="document-meta d-flex align-items-center mb-2">
                                                        <span className="document-type me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(110, 180, 240, 0.1)', color: '#6EB4F0', fontSize: 11 }}>
                                                            <i className="ri-file-word-line me-1" />DOC
                                                        </span>
                                                        <span className="document-size me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 11 }}>
                                                            215 KB
                                                        </span>
                                                        <span className="document-date ms-auto" style={{ fontSize: 11, color: '#666' }}>
                                                            <i className="ri-time-line me-1" />Updated:
                                                            Mar 10, 2025
                                                        </span>
                                                    </div>
                                                    <h5 className="document-title mb-2">Damage
                                                        Assessment Form</h5>
                                                    <p className="document-description mb-2" style={{ fontSize: 13, color: '#666' }}>
                                                        Standard form for documenting
                                                        and reporting property damage
                                                        after disaster events.
                                                    </p>
                                                    <div className="document-actions d-flex align-items-center">
                                                        <a href="#" className="btn style2 me-2" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-download-line me-1" />
                                                            Download
                                                        </a>
                                                        <a href="#" className="btn style1" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-eye-line me-1" />
                                                            View
                                                        </a>
                                                        <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                                            <i className="ri-bookmark-line" style={{ fontSize: 18, color: '#6EB4F0' }} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="document-card bg-white rounded shadow-sm overflow-hidden">
                                        <div className="row g-0">
                                            <div className="col-md-3 position-relative">
                                                <div className="document-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(110, 180, 240, 0.1)' }}>
                                                    <div className="document-icon p-3 bg-white rounded-circle shadow-sm">
                                                        <img src="assets/img/document-icons/pdf-icon.svg" alt="PDF" style={{ width: 40, height: 40 }} />
                                                    </div>
                                                    <div className="document-badge position-absolute top-0 start-0 m-2 px-2 py-1 rounded" style={{ backgroundColor: '#6EB4F0', color: 'white', fontSize: 11 }}>
                                                        FORM
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="document-info p-3">
                                                    <div className="document-meta d-flex align-items-center mb-2">
                                                        <span className="document-type me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(110, 180, 240, 0.1)', color: '#6EB4F0', fontSize: 11 }}>
                                                            <i className="ri-file-pdf-line me-1" />PDF
                                                        </span>
                                                        <span className="document-size me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 11 }}>
                                                            320 KB
                                                        </span>
                                                        <span className="document-date ms-auto" style={{ fontSize: 11, color: '#666' }}>
                                                            <i className="ri-time-line me-1" />Updated:
                                                            Feb 25, 2025
                                                        </span>
                                                    </div>
                                                    <h5 className="document-title mb-2">Relief
                                                        Assistance Application Form</h5>
                                                    <p className="document-description mb-2" style={{ fontSize: 13, color: '#666' }}>
                                                        Application form for
                                                        disaster-affected residents to
                                                        request relief assistance and
                                                        support.
                                                    </p>
                                                    <div className="document-actions d-flex align-items-center">
                                                        <a href="#" className="btn style2 me-2" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-download-line me-1" />
                                                            Download
                                                        </a>
                                                        <a href="#" className="btn style1" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-eye-line me-1" />
                                                            View
                                                        </a>
                                                        <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                                            <i className="ri-bookmark-line" style={{ fontSize: 18, color: '#6EB4F0' }} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" tab-pane fade" id="reports" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="document-card bg-white rounded shadow-sm overflow-hidden">
                                        <div className="row g-0">
                                            <div className="col-md-3 position-relative">
                                                <div className="document-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(110, 180, 240, 0.1)' }}>
                                                    <div className="document-icon p-3 bg-white rounded-circle shadow-sm">
                                                        <img src="assets/img/document-icons/pdf-icon.svg" alt="PDF" style={{ width: 40, height: 40 }} />
                                                    </div>
                                                    <div className="document-badge position-absolute top-0 start-0 m-2 px-2 py-1 rounded" style={{ backgroundColor: '#6EB4F0', color: 'white', fontSize: 11 }}>
                                                        REPORT
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="document-info p-3">
                                                    <div className="document-meta d-flex align-items-center mb-2">
                                                        <span className="document-type me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(110, 180, 240, 0.1)', color: '#6EB4F0', fontSize: 11 }}>
                                                            <i className="ri-file-pdf-line me-1" />PDF
                                                        </span>
                                                        <span className="document-size me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 11 }}>
                                                            1.5
                                                            MB
                                                        </span>
                                                        <span className="document-date ms-auto" style={{ fontSize: 11, color: '#666' }}>
                                                            <i className="ri-time-line me-1" />Updated:
                                                            Apr
                                                            5,
                                                            2025
                                                        </span>
                                                    </div>
                                                    <h5 className="document-title mb-2">Port
                                                        Louis
                                                        Flood
                                                        Risk
                                                        Assessment
                                                        Report</h5>
                                                    <p className="document-description mb-2" style={{ fontSize: 13, color: '#666' }}>
                                                        Comprehensive
                                                        analysis
                                                        of
                                                        flood
                                                        risks
                                                        in
                                                        Port
                                                        Louis
                                                        with
                                                        vulnerability
                                                        mapping
                                                        and
                                                        recommendations.
                                                    </p>
                                                    <div className="document-actions d-flex align-items-center">
                                                        <a href="#" className="btn style2 me-2" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-download-line me-1" />
                                                            Download
                                                        </a>
                                                        <a href="#" className="btn style1" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-eye-line me-1" />
                                                            View
                                                        </a>
                                                        <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                                            <i className="ri-bookmark-line" style={{ fontSize: 18, color: '#6EB4F0' }} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="document-card bg-white rounded shadow-sm overflow-hidden">
                                        <div className="row g-0">
                                            <div className="col-md-3 position-relative">
                                                <div className="document-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(110, 180, 240, 0.1)' }}>
                                                    <div className="document-icon p-3 bg-white rounded-circle shadow-sm">
                                                        <img src="assets/img/document-icons/pdf-icon.svg" alt="PDF" style={{ width: 40, height: 40 }} />
                                                    </div>
                                                    <div className="document-badge position-absolute top-0 start-0 m-2 px-2 py-1 rounded" style={{ backgroundColor: '#6EB4F0', color: 'white', fontSize: 11 }}>
                                                        REPORT
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="document-info p-3">
                                                    <div className="document-meta d-flex align-items-center mb-2">
                                                        <span className="document-type me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(110, 180, 240, 0.1)', color: '#6EB4F0', fontSize: 11 }}>
                                                            <i className="ri-file-pdf-line me-1" />PDF
                                                        </span>
                                                        <span className="document-size me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 11 }}>
                                                            2.3
                                                            MB
                                                        </span>
                                                        <span className="document-date ms-auto" style={{ fontSize: 11, color: '#666' }}>
                                                            <i className="ri-time-line me-1" />Updated:
                                                            Mar
                                                            20,
                                                            2025
                                                        </span>
                                                    </div>
                                                    <h5 className="document-title mb-2">Annual
                                                        Disaster
                                                        Preparedness
                                                        Status
                                                        Report</h5>
                                                    <p className="document-description mb-2" style={{ fontSize: 13, color: '#666' }}>
                                                        Annual
                                                        assessment
                                                        of
                                                        Port
                                                        Louis
                                                        district's
                                                        disaster
                                                        preparedness
                                                        levels,
                                                        capabilities,
                                                        and
                                                        improvement
                                                        plans.
                                                    </p>
                                                    <div className="document-actions d-flex align-items-center">
                                                        <a href="#" className="btn style2 me-2" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-download-line me-1" />
                                                            Download
                                                        </a>
                                                        <a href="#" className="btn style1" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-eye-line me-1" />
                                                            View
                                                        </a>
                                                        <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                                            <i className="ri-bookmark-line" style={{ fontSize: 18, color: '#6EB4F0' }} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-3 mb-4">
                                <button className="btn style1">Load
                                    More Reports</button>
                            </div>
                        </div>
                        {/* For Plans & Strategies Tab */}
                        <div className="tab-pane fade" id="plans" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="document-card bg-white rounded shadow-sm overflow-hidden">
                                        <div className="row g-0">
                                            <div className="col-md-3 position-relative">
                                                <div className="document-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                                                    <div className="document-icon p-3 bg-white rounded-circle shadow-sm">
                                                        <img src="assets/img/document-icons/pdf-icon.svg" alt="PDF" style={{ width: 40, height: 40 }} />
                                                    </div>
                                                    <div className="document-badge position-absolute top-0 start-0 m-2 px-2 py-1 rounded" style={{ backgroundColor: '#338F7A', color: 'white', fontSize: 11 }}>
                                                        PLAN
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="document-info p-3">
                                                    <div className="document-meta d-flex align-items-center mb-2">
                                                        <span className="document-type me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)', color: '#338F7A', fontSize: 11 }}>
                                                            <i className="ri-file-pdf-line me-1" />PDF
                                                        </span>
                                                        <span className="document-size me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 11 }}>
                                                            2.8
                                                            MB
                                                        </span>
                                                        <span className="document-date ms-auto" style={{ fontSize: 11, color: '#666' }}>
                                                            <i className="ri-time-line me-1" />Updated:
                                                            Apr
                                                            1,
                                                            2025
                                                        </span>
                                                    </div>
                                                    <h5 className="document-title mb-2">Port
                                                        Louis
                                                        Disaster
                                                        Response
                                                        Plan</h5>
                                                    <p className="document-description mb-2" style={{ fontSize: 13, color: '#666' }}>
                                                        Comprehensive
                                                        plan
                                                        detailing
                                                        response
                                                        protocols
                                                        for
                                                        various
                                                        disaster
                                                        scenarios
                                                        in
                                                        Port
                                                        Louis
                                                        district.
                                                    </p>
                                                    <div className="document-actions d-flex align-items-center">
                                                        <a href="#" className="btn style2 me-2" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-download-line me-1" />
                                                            Download
                                                        </a>
                                                        <a href="#" className="btn style1" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-eye-line me-1" />
                                                            View
                                                        </a>
                                                        <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                                            <i className="ri-bookmark-line" style={{ fontSize: 18, color: '#338F7A' }} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="document-card bg-white rounded shadow-sm overflow-hidden">
                                        <div className="row g-0">
                                            <div className="col-md-3 position-relative">
                                                <div className="document-preview h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                                                    <div className="document-icon p-3 bg-white rounded-circle shadow-sm">
                                                        <img src="assets/img/document-icons/pdf-icon.svg" alt="PDF" style={{ width: 40, height: 40 }} />
                                                    </div>
                                                    <div className="document-badge position-absolute top-0 start-0 m-2 px-2 py-1 rounded" style={{ backgroundColor: '#338F7A', color: 'white', fontSize: 11 }}>
                                                        STRATEGY
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="document-info p-3">
                                                    <div className="document-meta d-flex align-items-center mb-2">
                                                        <span className="document-type me-2 px-2 py-1 rounded" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)', color: '#338F7A', fontSize: 11 }}>
                                                            <i className="ri-file-pdf-line me-1" />PDF
                                                        </span>
                                                        <span className="document-size me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 11 }}>
                                                            3.4
                                                            MB
                                                        </span>
                                                        <span className="document-date ms-auto" style={{ fontSize: 11, color: '#666' }}>
                                                            <i className="ri-time-line me-1" />Updated:
                                                            Mar
                                                            12,
                                                            2025
                                                        </span>
                                                    </div>
                                                    <h5 className="document-title mb-2">Port
                                                        Louis
                                                        5-Year
                                                        Resilience
                                                        Strategy</h5>
                                                    <p className="document-description mb-2" style={{ fontSize: 13, color: '#666' }}>
                                                        Long-term
                                                        strategic
                                                        plan
                                                        for
                                                        building
                                                        community
                                                        and
                                                        infrastructure
                                                        resilience
                                                        across
                                                        Port
                                                        Louis
                                                        district.
                                                    </p>
                                                    <div className="document-actions d-flex align-items-center">
                                                        <a href="#" className="btn style2 me-2" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-download-line me-1" />
                                                            Download
                                                        </a>
                                                        <a href="#" className="btn style1" style={{ fontSize: 13, padding: '6px 12px' }}>
                                                            <i className="ri-eye-line me-1" />
                                                            View
                                                        </a>
                                                        <button type="button" className="btn-like ms-auto bg-transparent border-0">
                                                            <i className="ri-bookmark-line" style={{ fontSize: 18, color: '#338F7A' }} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-3 mb-4">
                                <button className="btn style1">Load
                                    More Plans &amp;
                                    Strategies</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="contact" role="tabpanel">
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-header" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                                    <h5 className="mb-0">District Disaster Management Office</h5>
                                </div>
                                <div className="card-body">
                                    <div className="contact-info mb-4">
                                        <h6 className="mb-3"><i className="ri-map-pin-2-line me-2" style={{ color: '#338F7A' }} />Office Location</h6>
                                        <p>Port Louis District Administration Building<br />
                                            3rd Floor, Disaster Management Wing<br />
                                            Sir William Newton Street<br />
                                            Port Louis, Mauritius</p>
                                    </div>
                                    <div className="contact-info mb-4">
                                        <h6 className="mb-3"><i className="ri-phone-line me-2" style={{ color: '#338F7A' }} />Phone Numbers</h6>
                                        <p><strong>Emergency Hotline:</strong> <a href="tel:+23059712000">+230 597-12000</a> (24/7)<br />
                                            <strong>Office:</strong> <a href="tel:+23059712001">+230 597-12001</a> (8:30 AM - 4:30 PM)<br />
                                            <strong>Fax:</strong> +230 597-12002</p>
                                    </div>
                                    <div className="contact-info mb-4">
                                        <h6 className="mb-3"><i className="ri-mail-line me-2" style={{ color: '#338F7A' }} />Email Addresses</h6>
                                        <p><strong>General Inquiries:</strong> <a href="mailto:portlouis@ndmc.mu">portlouis@ndmc.mu</a><br />
                                            <strong>Emergency Reporting:</strong> <a href="mailto:emergency.portlouis@ndmc.mu">emergency.portlouis@ndmc.mu</a><br />
                                            <strong>Training &amp; Volunteers:</strong> <a href="mailto:training.portlouis@ndmc.mu">training.portlouis@ndmc.mu</a></p>
                                    </div>
                                    <div className="contact-info">
                                        <h6 className="mb-3"><i className="ri-time-line me-2" style={{ color: '#338F7A' }} />Office Hours</h6>
                                        <p><strong>Monday - Friday:</strong> 8:30 AM - 4:30 PM<br />
                                            <strong>Saturday:</strong> 9:00 AM - 12:00 PM<br />
                                            <strong>Sunday &amp; Public Holidays:</strong> Closed (Emergency services available 24/7)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 mb-4">
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-header" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                                    <h5 className="mb-0">Key Personnel</h5>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Contact</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src="assets/img/team/team-1.jpg" alt="Profile" className="rounded-circle me-2" width={40} />
                                                            <div>Sarah Ramdhani</div>
                                                        </div>
                                                    </td>
                                                    <td>District Disaster Coordinator</td>
                                                    <td><a href="tel:+23059712010">+230 597-12010</a></td>
                                                    <td>
                                                        <a href="mailto:s.ramdhani@ndmc.mu" className="btn btn-sm btn-outline-primary me-1"><i className="ri-mail-line" /></a>
                                                        <a href="#" className="btn btn-sm btn-outline-secondary"><i className="ri-profile-line" /></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src="assets/img/team/team-2.jpg" alt="Profile" className="rounded-circle me-2" width={40} />
                                                            <div>James Leung</div>
                                                        </div>
                                                    </td>
                                                    <td>Emergency Response Lead</td>
                                                    <td><a href="tel:+23059712011">+230 597-12011</a></td>
                                                    <td>
                                                        <a href="mailto:j.leung@ndmc.mu" className="btn btn-sm btn-outline-primary me-1"><i className="ri-mail-line" /></a>
                                                        <a href="#" className="btn btn-sm btn-outline-secondary"><i className="ri-profile-line" /></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src="assets/img/team/team-3.jpg" alt="Profile" className="rounded-circle me-2" width={40} />
                                                            <div>Ahmed Peerally</div>
                                                        </div>
                                                    </td>
                                                    <td>Community Preparedness Officer</td>
                                                    <td><a href="tel:+23059712012">+230 597-12012</a></td>
                                                    <td>
                                                        <a href="mailto:a.peerally@ndmc.mu" className="btn btn-sm btn-outline-primary me-1"><i className="ri-mail-line" /></a>
                                                        <a href="#" className="btn btn-sm btn-outline-secondary"><i className="ri-profile-line" /></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src="assets/img/team/team-4.jpg" alt="Profile" className="rounded-circle me-2" width={40} />
                                                            <div>Marie Lafosse</div>
                                                        </div>
                                                    </td>
                                                    <td>Risk Assessment Manager</td>
                                                    <td><a href="tel:+23059712013">+230 597-12013</a></td>
                                                    <td>
                                                        <a href="mailto:m.lafosse@ndmc.mu" className="btn btn-sm btn-outline-primary me-1"><i className="ri-mail-line" /></a>
                                                        <a href="#" className="btn btn-sm btn-outline-secondary"><i className="ri-profile-line" /></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* Office Location Map */}
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-header" style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
                                    <h5 className="mb-0">Location Map</h5>
                                </div>
                                <div className="card-body p-0">
                                    <div id="district-map" style={{ height: 300, backgroundColor: '#f8f9fa', borderRadius: '0 0 5px 5px', position: 'relative' }}>
                                        {/* This would be replaced with an actual map implementation */}
                                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                                            <i className="ri-map-2-line" style={{ fontSize: 48, color: '#ccc' }} />
                                            <p className="mt-2">Interactive map would be displayed here</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Emergency Contacts Section */}
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-header" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)' }}>
                            <h5 className="mb-0">Emergency Services Contact Information</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="emergency-contact-card p-3 rounded" style={{ border: '1px solid rgba(245, 153, 70, 0.3)' }}>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="emergency-icon me-3 p-2 rounded-circle" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)' }}>
                                                <i className="ri-hospital-line" style={{ fontSize: 24, color: '#F59946' }} />
                                            </div>
                                            <h6 className="mb-0">Medical Emergency</h6>
                                        </div>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2"><strong>Ambulance:</strong> <a href="tel:+230114">114</a></li>
                                            <li className="mb-2"><strong>Port Louis Hospital:</strong> <a href="tel:+23059781000">+230 5978-1000</a></li>
                                            <li><strong>Medical Emergency Line:</strong> <a href="tel:+23059781001">+230 5978-1001</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="emergency-contact-card p-3 rounded" style={{ border: '1px solid rgba(245, 153, 70, 0.3)' }}>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="emergency-icon me-3 p-2 rounded-circle" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)' }}>
                                                <i className="ri-fire-line" style={{ fontSize: 24, color: '#F59946' }} />
                                            </div>
                                            <h6 className="mb-0">Fire &amp; Rescue</h6>
                                        </div>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2"><strong>Fire Emergency:</strong> <a href="tel:+230115">115</a></li>
                                            <li className="mb-2"><strong>Port Louis Fire Station:</strong> <a href="tel:+23059784000">+230 5978-4000</a></li>
                                            <li><strong>Fire Prevention Office:</strong> <a href="tel:+23059784001">+230 5978-4001</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="emergency-contact-card p-3 rounded" style={{ border: '1px solid rgba(245, 153, 70, 0.3)' }}>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="emergency-icon me-3 p-2 rounded-circle" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)' }}>
                                                <i className="ri-police-car-line" style={{ fontSize: 24, color: '#F59946' }} />
                                            </div>
                                            <h6 className="mb-0">Police</h6>
                                        </div>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2"><strong>Police Emergency:</strong> <a href="tel:+230999">999</a></li>
                                            <li className="mb-2"><strong>Port Louis Police HQ:</strong> <a href="tel:+23059785000">+230 5978-5000</a></li>
                                            <li><strong>Traffic Police:</strong> <a href="tel:+23059785001">+230 5978-5001</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="emergency-contact-card p-3 rounded" style={{ border: '1px solid rgba(245, 153, 70, 0.3)' }}>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="emergency-icon me-3 p-2 rounded-circle" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)' }}>
                                                <i className="ri-flood-line" style={{ fontSize: 24, color: '#F59946' }} />
                                            </div>
                                            <h6 className="mb-0">Flood Response</h6>
                                        </div>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2"><strong>Flood Hotline:</strong> <a href="tel:+23059786000">+230 5978-6000</a></li>
                                            <li className="mb-2"><strong>Drainage Unit:</strong> <a href="tel:+23059786001">+230 5978-6001</a></li>
                                            <li><strong>Water Services:</strong> <a href="tel:+23059786002">+230 5978-6002</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="emergency-contact-card p-3 rounded" style={{ border: '1px solid rgba(245, 153, 70, 0.3)' }}>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="emergency-icon me-3 p-2 rounded-circle" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)' }}>
                                                <i className="ri-alert-line" style={{ fontSize: 24, color: '#F59946' }} />
                                            </div>
                                            <h6 className="mb-0">Weather Alerts</h6>
                                        </div>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2"><strong>Meteorological Services:</strong> <a href="tel:+23059787000">+230 5978-7000</a></li>
                                            <li className="mb-2"><strong>Cyclone Alerts:</strong> <a href="tel:+23059787001">+230 5978-7001</a></li>
                                            <li><strong>Weather Forecast:</strong> <a href="tel:+23059787002">+230 5978-7002</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="emergency-contact-card p-3 rounded" style={{ border: '1px solid rgba(245, 153, 70, 0.3)' }}>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="emergency-icon me-3 p-2 rounded-circle" style={{ backgroundColor: 'rgba(245, 153, 70, 0.1)' }}>
                                                <i className="ri-building-4-line" style={{ fontSize: 24, color: '#F59946' }} />
                                            </div>
                                            <h6 className="mb-0">Utilities Emergency</h6>
                                        </div>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2"><strong>Electricity Emergency:</strong> <a href="tel:+23059788000">+230 5978-8000</a></li>
                                            <li className="mb-2"><strong>Water Emergency:</strong> <a href="tel:+23059788001">+230 5978-8001</a></li>
                                            <li><strong>Gas Emergency:</strong> <a href="tel:+23059788002">+230 5978-8002</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <a href="#" className="btn style1">Download Contact Directory</a>
                        <a href="#" className="btn style2 ms-2">Subscribe to Emergency Alerts</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

