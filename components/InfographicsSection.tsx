import React from 'react';

interface InfographicItem {
  id: number;
  image: string;
  tag: string;
  title: string;
  category: { name: string; link: string };
  location: { name: string; link: string };
  description: string;
}

const InfographicsSection: React.FC = () => {
  return (
    
 <div className="container" id="infographics">
 <div className="section-title style3 text-center mt-4 mb-40">
   <span>Visual Resources </span>
   <h2>Disaster Preparedness Infographics</h2>
 </div>
 <div className="row">
   <div className="col-xl-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={200}>
     <div className="event-card style2">
       <div className="event-img">
         <img src="/img/12035.jpg" alt="Flood Safety Infographic" />
         <span className="event-date">Featured</span>
       </div>
       <div className="event-info">
         <h3><a href="infographics/flood-safety.html">Flood Safety Guidelines</a></h3>
         <ul className="event-metainfo list-style">
           <li><a href="infographics/categories/safety.html"><i className="ri-file-list-line" />Safety Guidelines</a></li>
           <li><a href="districts/coastal.html"><i className="ri-map-pin-line" />Coastal Districts</a></li>
         </ul>
         <p>Essential safety measures before, during, and after flooding events. Includes evacuation preparation tips and property protection advice.</p>
       </div>
     </div>
   </div>
   <div className="col-xl-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={300}>
     <div className="event-card style2">
       <div className="event-img">
         <img src="/img/22301.jpg" alt="Emergency Kit Infographic" />
         <span className="event-date">Essential</span>
       </div>
       <div className="event-info">
         <h3><a href="infographics/emergency-kit.html">Emergency Kit Essentials</a></h3>
         <ul className="event-metainfo list-style">
           <li><a href="infographics/categories/preparedness.html"><i className="ri-file-list-line" />Preparedness</a></li>
           <li><a href="ministries/health.html"><i className="ri-building-line" />Health Ministry</a></li>
         </ul>
         <p>Comprehensive guide to building and maintaining emergency kits for different disaster scenarios and family sizes.</p>
       </div>
     </div>
   </div>
   <div className="col-xl-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={400}>
     <div className="event-card style2">
       <div className="event-img">
         <img src="/img/7463.jpg" alt="Earthquake Response Infographic" />
         <span className="event-date">Safety</span>
       </div>
       <div className="event-info">
         <h3><a href="infographics/earthquake-response.html">Earthquake Response Protocols</a></h3>
         <ul className="event-metainfo list-style">
           <li><a href="infographics/categories/response.html"><i className="ri-file-list-line" />Response</a></li>
           <li><a href="districts/central.html"><i className="ri-map-pin-line" />Central District</a></li>
         </ul>
         <p>Step-by-step actions to take during and after an earthquake, including building safety assessment guidelines.</p>
       </div>
     </div>
   </div>
   <div className="col-xl-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={500}>
     <div className="event-card style2">
       <div className="event-img">
         <img src="/img/22590.jpg" alt="Hurricane Tracking Infographic" />
         <span className="event-date">Tracking</span>
       </div>
       <div className="event-info">
         <h3><a href="infographics/hurricane-tracking.html">Hurricane Tracking Guide</a></h3>
         <ul className="event-metainfo list-style">
           <li><a href="infographics/categories/monitoring.html"><i className="ri-file-list-line" />Monitoring</a></li>
           <li><a href="districts/island.html"><i className="ri-map-pin-line" />Island Regions</a></li>
         </ul>
         <p>Guide to understanding hurricane forecasts, tracking systems, and warning classifications for coastal communities.</p>
       </div>
     </div>
   </div>
 </div>
 <div className="text-center mt-4 mb-5">
   <a href="infographics.html" className="btn style1">View All Infographics</a>
 </div>
</div>
  );
};

export default InfographicsSection;