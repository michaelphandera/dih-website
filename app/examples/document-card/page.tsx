'use client';

import React, { useState } from 'react';
import DocumentCard from '@/components/DocumentCard';

export default function DocumentCardExamplePage() {
  // Example documents data
  const documents = [
    {
      id: 1,
      title: "National Emergency Response Plan",
      description: "Comprehensive planning document detailing national response protocols for various disaster scenarios.",
      type: "PDF",
      size: "3.2 MB",
      date: "Apr 2, 2023",
      icon: "pdf-icon.svg",
      color: "#F59946",
      isOfficial: true,
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      id: 2,
      title: "Flood Risk Assessment Report",
      description: "Technical analysis of flood risks across different regions with vulnerability mapping and mitigation recommendations.",
      type: "PDF",
      size: "5.7 MB",
      date: "Jun 15, 2023",
      category: "REPORT",
      icon: "pdf-icon.svg",
      color: "#338F7A",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      id: 3,
      title: "Cyclone Preparedness Guidelines",
      description: "Step-by-step procedures for communities and response teams to prepare for and respond to cyclone events.",
      type: "DOCX",
      size: "1.8 MB",
      date: "Mar 10, 2023",
      category: "GUIDE",
      icon: "doc-icon.svg",
      color: "#4285F4",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      id: 4,
      title: "Emergency Contact Directory",
      description: "Comprehensive list of emergency contacts for all districts and agencies involved in disaster response.",
      type: "XLSX",
      size: "950 KB",
      date: "May 5, 2023",
      icon: "xls-icon.svg",
      color: "#34A853",
      downloadUrl: "#",
      viewUrl: "#"
    }
  ];

  // State for bookmarked documents
  const [bookmarkedDocs, setBookmarkedDocs] = useState<number[]>([]);

  // Toggle bookmark function
  const toggleBookmark = (id: number) => {
    setBookmarkedDocs(prev => 
      prev.includes(id) 
        ? prev.filter(docId => docId !== id) 
        : [...prev, id]
    );
  };

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12">
          <h1 className="mb-4">Document Card Component Examples</h1>
          <p className="lead">
            This page demonstrates how to use the reusable DocumentCard component in different configurations.
          </p>
        </div>
      </div>

      <h2 className="mb-4">Basic Document Cards</h2>
      <div className="row">
        {documents.map(doc => (
          <div className="col-lg-6 mb-4" key={doc.id}>
            <DocumentCard 
              document={doc}
              isBookmarked={bookmarkedDocs.includes(doc.id || 0)}
              onBookmark={() => toggleBookmark(doc.id || 0)}
            />
          </div>
        ))}
      </div>

      <h2 className="mb-4 mt-5">Official Document Example</h2>
      <div className="row">
        <div className="col-12 mb-4">
          <DocumentCard 
            document={documents[0]}
            isBookmarked={bookmarkedDocs.includes(documents[0].id || 0)}
            onBookmark={() => toggleBookmark(documents[0].id || 0)}
          />
        </div>
      </div>

      <h2 className="mb-4 mt-5">Without Bookmark Button</h2>
      <div className="row">
        <div className="col-12 mb-4">
          <DocumentCard 
            document={documents[1]}
            showBookmark={false}
          />
        </div>
      </div>

      <h2 className="mb-4 mt-5">Custom Styling Example</h2>
      <div className="row">
        <div className="col-12 mb-4">
          <DocumentCard 
            document={documents[2]}
            className="border border-primary"
            isBookmarked={bookmarkedDocs.includes(documents[2].id || 0)}
            onBookmark={() => toggleBookmark(documents[2].id || 0)}
          />
        </div>
      </div>
    </div>
  );
}
