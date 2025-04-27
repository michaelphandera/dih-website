"use client";
import React, { useState } from 'react';

const EmergencyPortalSection: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const districts = [
    { value: "PLAINES_WILHEMS", label: "Plaines Wilhems" },
    { value: "PORT_LOUIS", label: "Port Louis" },
    { value: "FLACQ", label: "Flacq" },
    { value: "RIVIERE_DU_REMPART", label: "Rivière du Rempart" },
    { value: "GRAND_PORT", label: "Grand Port" },
    { value: "SAVANNE", label: "Savanne" },
    { value: "BLACK_RIVER", label: "Black River" },
    { value: "TAMARIN", label: "Tamarin" },
    { value: "MOKA", label: "Moka" },
    { value: "CUREPIPE", label: "Curepipe" }
  ];

  return (
    <div className="container mt-100">
      <div className="donate-box ptb-100" data-aos="fade-up" style={{ backgroundColor: "#f5f5f5" }}>
        <img src="/img/shape-6.png" alt="Shape" className="donate-shape-one" />
        <div className="content-title style2 text-center mb-40">
          <span style={{ color: "#338f7a" }}>Disaster Preparedness<img src="/img/section-shape.png" alt="Shape" /></span>
          <h2 style={{ color: "#338f7a" }}>Access Emergency Preparedness Resources</h2>
          <p>Select your district to view location-specific emergency plans, evacuation routes, and resource centers.</p>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-md-8">
            <div className="form-group">
              <select 
                className="form-control form-select" 
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                style={{ height: "60px", borderRadius: "10px" }}
              >
                <option value="">Select Your District</option>
                {districts.map(district => (
                  <option key={district.value} value={district.value}>
                    {district.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {selectedDistrict && (
          <div className="row text-center district-resource-buttons" id="district-resources">
            <div className="col-md-4 mb-3">
              <a 
                href={`districts/${selectedDistrict}/evacuation-plans.html`} 
                className="btn style1 w-100"
              >
                Evacuation Plans
              </a>
            </div>
            <div className="col-md-4 mb-3">
              <a 
                href={`districts/${selectedDistrict}/emergency-contacts.html`} 
                className="btn style1 w-100"
              >
                Emergency Contacts
              </a>
            </div>
            <div className="col-md-4 mb-3">
              <a 
                href={`districts/${selectedDistrict}/resource-centers.html`} 
                className="btn style1 w-100"
              >
                Resource Centers
              </a>
            </div>
          </div>
        )}
        <div className="text-center mt-4">
          <a href="preparedness/index.html" className="btn style2">View All Preparedness Resources</a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPortalSection;