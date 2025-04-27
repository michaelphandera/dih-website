"use client";
import React, { useState } from 'react';

interface DocumentCardProps {
  document: {
    id: number;
    title: string;
    description: string;
    type: string;
    size: string;
    date: string;
    category: string;
    color: string;
    icon: string;
  };
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  // Helper function to convert hex to rgb
  const hexToRgb = (hex: string): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  return (
    <div className="col-lg-6 mb-4">
      <div className="document-card bg-white rounded shadow-sm overflow-hidden">
        <div className="row g-0">
          <div className="col-md-4 position-relative">
            <div className="document-preview h-100 d-flex align-items-center justify-content-center"
                 style={{ backgroundColor: `rgba(${hexToRgb(document.color)}, 0.1)` }}>
              <div className="document-icon p-4 bg-white rounded-circle shadow-sm">
                <img src={`/img/document-icons/${document.icon}`} alt={document.type} />
              </div>
              <div className="document-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded"
                   style={{ backgroundColor: document.color, color: 'white' }}>
                {document.category}
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="document-info p-4">
              <div className="document-meta d-flex align-items-center mb-2">
                <span className="document-type me-2 px-2 py-1 rounded"
                      style={{ backgroundColor: `rgba(${hexToRgb(document.color)}, 0.1)`, color: document.color }}>
                  <i className={`ri-file-${document.type.toLowerCase()}-line me-1`}></i>
                  {document.type}
                </span>
                <span className="document-size me-2 px-2 py-1 rounded">
                  {document.size}
                </span>
                <span className="document-date ms-auto">
                  <i className="ri-time-line me-1"></i>Updated: {document.date}
                </span>
              </div>

              <h3 className="document-title mb-2">{document.title}</h3>
              <p className="document-description mb-3">{document.description}</p>

              <div className="document-actions d-flex align-items-center">
                <a href="#" className="btn style2 me-2">
                  <i className="ri-download-line me-1"></i> Download
                </a>
                <a href="#" className="btn style1">
                  <i className="ri-eye-line me-1"></i> View
                </a>
                <button
                  type="button"
                  className="btn-like ms-auto bg-transparent border-0"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
                >
                  <i className={`ri-bookmark-${isBookmarked ? 'fill' : 'line'}`}
                     style={{ color: document.color }}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;