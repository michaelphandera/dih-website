"use client";
import React from 'react';

interface RecentDocument {
  id: number;
  name: string;
  category: string;
  format: string;
  uploaded: string;
  icon: string;
  iconColor: string;
}

const RecentDocumentsTable: React.FC<{ documents: RecentDocument[] }> = ({ documents }) => {
  const getFileIcon = (format: string) => {
    switch (format.toLowerCase()) {
      case 'pdf':
        return 'ri-file-pdf-line';
      case 'doc':
      case 'docx':
        return 'ri-file-word-line';
      case 'xls':
      case 'xlsx':
        return 'ri-file-excel-line';
      case 'ppt':
      case 'pptx':
        return 'ri-file-ppt-line';
      case 'zip':
        return 'ri-file-zip-line';
      default:
        return 'ri-file-line';
    }
  };

  return (
    <div className="recent-uploads mt-5">
      <h4 className="mb-4">Recent Document Uploads</h4>
      <div className="table-responsive">
        <table className="table table-hover bg-white shadow-sm rounded">
          <thead className="bg-light">
            <tr>
              <th style={{ width: '40%' }}>Document Name</th>
              <th style={{ width: '15%' }}>Category</th>
              <th style={{ width: '15%' }}>Format</th>
              <th style={{ width: '15%' }}>Uploaded</th>
              <th style={{ width: '15%' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <i className={`${getFileIcon(doc.format)} me-2`} 
                       style={{ fontSize: '18px', color: doc.iconColor }}></i>
                    <span>{doc.name}</span>
                  </div>
                </td>
                <td>
                  <span className="badge" style={{ backgroundColor: doc.iconColor }}>
                    {doc.category}
                  </span>
                </td>
                <td>{doc.format}</td>
                <td>{doc.uploaded}</td>
                <td>
                  <div className="btn-group">
                    <a href="#" className="btn btn-sm" style={{ backgroundColor: '#f5f5f5' }}>
                      <i className="ri-eye-line"></i>
                    </a>
                    <a href="#" className="btn btn-sm" style={{ backgroundColor: '#338F7A', color: 'white' }}>
                      <i className="ri-download-line"></i>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentDocumentsTable;