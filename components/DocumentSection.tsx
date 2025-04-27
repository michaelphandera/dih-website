
"use client";
import React, { useState } from 'react';
import DocumentCard from './DocumentCard';
import DocumentFilterBar from './DocumentFilterBar';
import RecentDocumentsTable from './RecentDocumentsTable';

interface Document {
  id: number;
  title: string;
  description: string;
  type: string;
  size: string;
  date: string;
  category: string;
  color: string;
  icon: string;
  district?: string;
}

const DocumentSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All Categories');
  const [districtFilter, setDistrictFilter] = useState<string>('All Districts');

  const documents: Document[] = [
    {
      id: 1,
      title: "National Emergency Response Plan",
      description: "Comprehensive planning document detailing national response protocols for various disaster scenarios.",
      type: "PDF",
      size: "3.2 MB",
      date: "Apr 2, 2023",
      category: "OFFICIAL",
      color: "#338F7A",
      icon: "pdf-icon.svg",
      district: "All Districts"
    },
    {
      id: 2,
      title: "Cyclone Preparedness Guide",
      description: "Guidelines for communities and individuals on preparing for and responding to cyclone events.",
      type: "PDF",
      size: "2.8 MB",
      date: "Mar 15, 2023",
      category: "PUBLIC",
      color: "#F59946",
      icon: "pdf-icon.svg",
      district: "All Districts"
    },
    {
      id: 3,
      title: "Flood Evacuation Routes - Port Louis",
      description: "Detailed maps and instructions for evacuation during flooding events in Port Louis district.",
      type: "PDF",
      size: "4.5 MB",
      date: "Feb 28, 2023",
      category: "DISTRICT",
      color: "#4285F4",
      icon: "pdf-icon.svg",
      district: "Port Louis"
    },
    {
      id: 4,
      title: "Emergency Contact Directory",
      description: "Comprehensive list of emergency contacts for all districts and government agencies.",
      type: "XLSX",
      size: "1.2 MB",
      date: "Jan 10, 2023",
      category: "OFFICIAL",
      color: "#338F7A",
      icon: "excel-icon.svg",
      district: "All Districts"
    },
    {
      id: 5,
      title: "Disaster Recovery Framework",
      description: "Strategic framework for post-disaster recovery operations and community rebuilding.",
      type: "PDF",
      size: "5.7 MB",
      date: "Dec 12, 2022",
      category: "OFFICIAL",
      color: "#338F7A",
      icon: "pdf-icon.svg",
      district: "All Districts"
    },
    {
      id: 6,
      title: "Community Resilience Toolkit",
      description: "Resources and activities for communities to build disaster resilience and preparedness.",
      type: "ZIP",
      size: "8.3 MB",
      date: "Nov 5, 2022",
      category: "PUBLIC",
      color: "#F59946",
      icon: "zip-icon.svg",
      district: "All Districts"
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All Categories' || doc.category === categoryFilter;
    const matchesDistrict = districtFilter === 'All Districts' || doc.district === districtFilter;

    return matchesSearch && matchesCategory && matchesDistrict;
  });

  return (
    <section className="document-section ptb-100 bg-sand">
      <div className="container">
        <div className="section-title style3 text-center mb-40">
          <span>Resources Documents</span>
          <h2>Featured Documents</h2>
          <p>Essential disaster management resources and documentation for NDRRMC, districts, and the public.</p>
        </div>

        <DocumentFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          districtFilter={districtFilter}
          setDistrictFilter={setDistrictFilter}
        />

        <div className="row">
          {filteredDocuments.map(doc => (
            <DocumentCard key={doc.id} document={doc} />
          ))}
        </div>

        <RecentDocumentsTable documents={filteredDocuments.slice(0, 4).map(doc => ({
          id: doc.id,
          name: doc.title,
          category: doc.category,
          format: doc.type,
          uploaded: doc.date,
          icon: doc.icon,
          iconColor: doc.color
        }))} />

        <div className="text-center mt-4">
          <a href="documents.html" className="btn style1">View All Documents</a>
        </div>
      </div>
    </section>
  );
};

export default DocumentSection;