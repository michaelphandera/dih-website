"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sample infographics data
const infographicsData = [
  {
    id: 1,
    title: "Flood Safety Guidelines",
    description: "Learn how to stay safe before, during, and after a flood.",
    category: "safety",
    image: "/placeholder.svg",
    url: "/infographics/flood-safety"
  },
  {
    id: 2,
    title: "Earthquake Response Protocols",
    description: "Know what to do before, during, and after an earthquake.",
    category: "safety",
    image: "/placeholder.svg",
    url: "/infographics/earthquake-response"
  },
  {
    id: 3,
    title: "Emergency Kit Essentials",
    description: "Learn what to include in your emergency kit for different disaster scenarios.",
    category: "preparedness",
    image: "/placeholder.svg",
    url: "/infographics/emergency-kit"
  },
  {
    id: 4,
    title: "Cyclone Warning System",
    description: "Understanding cyclone warning categories and recommended actions.",
    category: "warning",
    image: "/placeholder.svg",
    url: "/infographics/cyclone-warning"
  },
  {
    id: 5,
    title: "Evacuation Planning Guide",
    description: "How to create and implement an effective evacuation plan for your family.",
    category: "preparedness",
    image: "/placeholder.svg",
    url: "/infographics/evacuation-planning"
  },
  {
    id: 6,
    title: "Disaster Risk Map",
    description: "Visual representation of disaster risks across different regions.",
    category: "risk",
    image: "/placeholder.svg",
    url: "/infographics/risk-map"
  },
  {
    id: 7,
    title: "First Aid Basics",
    description: "Essential first aid techniques for disaster situations.",
    category: "response",
    image: "/placeholder.svg",
    url: "/infographics/first-aid"
  },
  {
    id: 8,
    title: "Community Resilience Framework",
    description: "Building stronger, more resilient communities through collaborative action.",
    category: "resilience",
    image: "/placeholder.svg",
    url: "/infographics/community-resilience"
  },
  {
    id: 9,
    title: "Climate Change Impact",
    description: "Understanding how climate change affects disaster frequency and intensity.",
    category: "awareness",
    image: "/placeholder.svg",
    url: "/infographics/climate-change"
  }
];

export default function InfographicsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', 'safety', 'preparedness', 'warning', 'response', 'resilience', 'risk', 'awareness'];

  // Filter infographics based on active category
  const filteredInfographics = activeCategory === 'all' 
    ? infographicsData
    : infographicsData.filter(infographic => infographic.category === activeCategory);

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">Infographics</h1>
              <p className="lead">Visual guides for disaster preparedness and response</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/resources" className="text-white">Resources</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Infographics</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Infographics Categories */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Visual Resources</h2>
              <p className="lead">Browse our collection of infographics designed to help you understand and prepare for disasters.</p>
              
              <div className="category-filter mt-4">
                <div className="btn-group flex-wrap" role="group" aria-label="Infographic categories">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      className={`btn ${activeCategory === category ? 'style2' : 'btn-outline-secondary'} m-1`}
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
            {filteredInfographics.map((infographic) => (
              <div key={infographic.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-0">
                    <div className="position-relative" style={{ height: '200px' }}>
                      <Image 
                        src={infographic.image} 
                        alt={infographic.title} 
                        fill
                        className="img-fluid"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="position-absolute top-0 end-0 m-2">
                        <span className={`badge bg-${getCategoryColor(infographic.category)}`}>
                          {infographic.category.charAt(0).toUpperCase() + infographic.category.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="h5 mb-3">{infographic.title}</h3>
                      <p className="mb-3">{infographic.description}</p>
                      <Link href={infographic.url} className="btn btn-sm style2">
                        View Infographic
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredInfographics.length === 0 && (
            <div className="text-center py-5">
              <i className="flaticon-file text-muted" style={{ fontSize: '64px' }}></i>
              <h3 className="mt-3">No infographics found</h3>
              <p>No infographics match the selected category. Please try another category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Infographic */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Featured Infographic</h2>
          
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="position-relative" style={{ height: '400px' }}>
                <Image 
                  src="/placeholder.svg" 
                  alt="Disaster Preparedness Cycle" 
                  fill
                  className="img-fluid rounded shadow-lg"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4">Disaster Preparedness Cycle</h3>
              <p className="lead mb-4">Understanding the continuous cycle of disaster preparedness, response, recovery, and mitigation.</p>
              <div className="d-flex mb-3">
                <div className="me-3">
                  <i className="flaticon-check-mark text-primary" style={{ fontSize: '24px' }}></i>
                </div>
                <div>
                  <h4 className="h6">Preparedness</h4>
                  <p>Activities that prepare for disaster response, such as planning, training, and exercises.</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="me-3">
                  <i className="flaticon-check-mark text-primary" style={{ fontSize: '24px' }}></i>
                </div>
                <div>
                  <h4 className="h6">Response</h4>
                  <p>Actions taken during and immediately after a disaster to save lives and protect property.</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="me-3">
                  <i className="flaticon-check-mark text-primary" style={{ fontSize: '24px' }}></i>
                </div>
                <div>
                  <h4 className="h6">Recovery</h4>
                  <p>Efforts to restore affected areas to their pre-disaster state or better.</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="me-3">
                  <i className="flaticon-check-mark text-primary" style={{ fontSize: '24px' }}></i>
                </div>
                <div>
                  <h4 className="h6">Mitigation</h4>
                  <p>Actions taken to reduce or eliminate the risk of future disasters.</p>
                </div>
              </div>
              <Link href="/infographics/preparedness-cycle" className="btn style2 mt-4">
                View Full Infographic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Infographic Request */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Need a Specific Infographic?</h2>
              <p className="lead mb-4">If you can't find the infographic you're looking for, you can request it from our team. We're constantly developing new visual resources to help communities prepare for and respond to disasters.</p>
              <Link href="/contact" className="btn style2">
                Request Infographic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="mb-2">Share these resources with your community</h2>
              <p className="lead mb-0">Help spread awareness about disaster preparedness and response.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#" className="btn btn-light btn-lg">
                <i className="flaticon-share me-2"></i> Share Resources
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function to get category color
function getCategoryColor(category: string): string {
  switch (category) {
    case 'safety':
      return 'danger';
    case 'preparedness':
      return 'primary';
    case 'warning':
      return 'warning';
    case 'response':
      return 'info';
    case 'resilience':
      return 'success';
    case 'risk':
      return 'secondary';
    case 'awareness':
      return 'dark';
    default:
      return 'primary';
  }
}
