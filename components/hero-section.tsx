"use client"

import Link from "next/link"

export function HeroSection() {
  return (
    <section className="hero-wrap style2 hero-wrap-style">
    <video loop muted autoPlay poster="#" className="background-video">
      <source src="/img/flood.mp4" type="video/mp4" />
    </video>
    <div className="hero-slide-item">
      <div className="container">
        <div className="hero-content">
          <span style={{ fontSize: "1.5rem" }}>Mauritius National Disaster Management Center</span>
          <h1>Preparing Communities, Responding to Emergencies</h1>
          <p>The National Disaster Management Center coordinates disaster prevention, preparedness, mitigation, response, and recovery activities to strengthen national resilience and protect our communities.</p>
            <div className="hero-btn-group" style={{ display: "flex", gap: "1rem" }}>
              <a href="/emergency-contacts" className="btn style2" style={{ fontSize: "1.2rem", padding: "0.8rem 1.5rem" }}>Learn More</a>
              <a href="/disaster-alerts" className="btn style1" style={{ fontSize: "1.2rem", padding: "0.8rem 1.5rem" }}>Get Involved</a>
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}
