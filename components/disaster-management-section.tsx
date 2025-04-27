import Link from "next/link"

export function DisasterManagementSection() {
  return (
    <section className="position-relative mt-n4">
      {/* Hero Banner with Background Image */}
      <div className="position-relative" style={{ zIndex: 10 }}>
        <div
          className="position-absolute top-0 start-0 end-0 bottom-0 bg-image"
          style={{
            backgroundImage: "url('/images/tropical-storm.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-dark opacity-60"></div>
        </div>
        <div className="container position-relative py-5 py-md-6 text-white" style={{ zIndex: 10 }}>
          <p className="text-small fw-medium mb-2" style={{ color: "#F59946" }}>Mauritius National Disaster Management Center</p>
          <h1 className="display-4 fw-bold mb-4 lh-sm" style={{ maxWidth: "36rem" }}>
            Preparing<br />Communities,<br />Responding to<br />Emergencies
          </h1>
          <p className="small mb-4" style={{ maxWidth: "36rem" }}>
            The National Disaster Management Center coordinates disaster prevention, preparedness,
            mitigation, response, and recovery activities to strengthen national resilience and protect our
            communities.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link
              href="/learn-more"
              className="btn-style2"
              style={{ backgroundColor: "#F59946" }}
            >
              Learn More
            </Link>
            <Link
              href="/get-involved"
              className="btn-style2"
              style={{ backgroundColor: "#338F7A" }}
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      {/* Three Column Feature Section */}
      <div className="bg-white position-relative mt-n5" style={{ zIndex: 20 }}>
        <div className="container px-4">
          <div className="row g-0 shadow rounded overflow-hidden">
            {/* Profile Column */}
            <div className="col-12 col-md-4 bg-white p-4 p-md-5 text-center border-end">
              <div
                className="d-flex align-items-center justify-content-center mx-auto mb-4 rounded-circle"
                style={{
                  width: "4rem",
                  height: "4rem",
                  border: "2px solid #F59946"
                }}
              >
                <div style={{ color: "#F59946" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 11.5C14.2091 11.5 16 9.70914 16 7.5C16 5.29086 14.2091 3.5 12 3.5C9.79086 3.5 8 5.29086 8 7.5C8 9.70914 9.79086 11.5 12 11.5Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3.5 19.5C3.5 15.9101 7.41015 13 12 13C16.5899 13 20.5 15.9101 20.5 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="fs-4 fw-bold mb-4">Profile</h3>
              <Link href="/profile" className="d-flex align-items-center justify-content-center gap-1 small" style={{ color: "#338F7A", textDecoration: "none" }}>
                View More <span className="ms-1">→</span>
              </Link>
            </div>

            {/* Response Column */}
            <div className="col-12 col-md-4 bg-white p-4 p-md-5 text-center border-end">
              <div
                className="d-flex align-items-center justify-content-center mx-auto mb-4 rounded-circle"
                style={{
                  width: "4rem",
                  height: "4rem",
                  border: "2px solid #F59946"
                }}
              >
                <div style={{ color: "#F59946" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 16.5V14.5M14 16.5V14.5M9 7.5L12 4.5M15 7.5L12 4.5M3 10.5H21M5 19.5H19C20.1046 19.5 21 18.6046 21 17.5V9.5C21 8.39543 20.1046 7.5 19 7.5H5C3.89543 7.5 3 8.39543 3 9.5V17.5C3 18.6046 3.89543 19.5 5 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="fs-4 fw-bold mb-4">Response</h3>
              <Link href="/response" className="d-flex align-items-center justify-content-center gap-1 small" style={{ color: "#338F7A", textDecoration: "none" }}>
                View More <span className="ms-1">→</span>
              </Link>
            </div>

            {/* Resilience Column */}
            <div className="col-12 col-md-4 bg-white p-4 p-md-5 text-center">
              <div
                className="d-flex align-items-center justify-content-center mx-auto mb-4 rounded-circle"
                style={{
                  width: "4rem",
                  height: "4rem",
                  border: "2px solid #F59946"
                }}
              >
                <div style={{ color: "#F59946" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="fs-4 fw-bold mb-4">Resilience</h3>
              <Link href="/resilience" className="d-flex align-items-center justify-content-center gap-1 small" style={{ color: "#338F7A", textDecoration: "none" }}>
                View More <span className="ms-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
