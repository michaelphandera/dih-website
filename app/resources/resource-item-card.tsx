import React from 'react';
import Link from 'next/link';

type ResourceItemProps = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  format: string;
  size: string;
  date: string;
  category: string;
  tags: string[];
};

const ResourceItemCard: React.FC<{ item: ResourceItemProps }> = ({ item }) => {
  // Function to determine badge color based on format
  const getBadgeColor = (format: string) => {
    switch (format.toLowerCase()) {
      case 'pdf':
        return 'danger';
      case 'docx':
        return 'primary';
      case 'xlsx':
        return 'success';
      case 'png':
      case 'jpg':
        return 'info';
      case 'interactive':
        return 'warning';
      case 'online':
        return 'purple';
      case 'ebook':
        return 'teal';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="document-card bg-white rounded shadow-sm overflow-hidden mb-4">
      <div className="row g-0">
        <div className="col-md-3 position-relative">
          <div className="document-preview h-100 d-flex align-items-center justify-content-center" 
               style={{ backgroundColor: 'rgba(51, 143, 122, 0.1)' }}>
            <div className="document-thumbnail">
              {item.thumbnail ? (
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="img-fluid rounded" 
                  style={{ maxHeight: '120px', objectFit: 'cover' }}
                />
              ) : (
                <div className="document-icon p-3 bg-white rounded-circle shadow-sm">
                  <img 
                    src={`/img/document-icons/${item.format.toLowerCase()}-icon.svg`} 
                    alt={item.format} 
                    style={{ width: 40, height: 40 }}
                  />
                </div>
              )}
            </div>
            <div 
              className="document-badge position-absolute top-0 start-0 m-2 px-2 py-1 rounded" 
              style={{ 
                backgroundColor: item.category === 'Official' ? '#338F7A' : 
                                 item.category === 'Training' ? '#F59946' : 
                                 item.category === 'Technical' ? '#6EB4F0' : '#8e44ad',
                color: 'white', 
                fontSize: 11 
              }}
            >
              {item.category.toUpperCase()}
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="document-info p-3">
            <div className="document-meta d-flex align-items-center mb-2">
              <span 
                className="document-type me-2 px-2 py-1 rounded" 
                style={{ 
                  backgroundColor: `rgba(${getBadgeColor(item.format) === 'danger' ? '220, 53, 69' : 
                                         getBadgeColor(item.format) === 'primary' ? '13, 110, 253' :
                                         getBadgeColor(item.format) === 'success' ? '25, 135, 84' :
                                         getBadgeColor(item.format) === 'info' ? '13, 202, 240' :
                                         getBadgeColor(item.format) === 'warning' ? '255, 193, 7' :
                                         getBadgeColor(item.format) === 'purple' ? '142, 68, 173' :
                                         getBadgeColor(item.format) === 'teal' ? '32, 201, 151' : '108, 117, 125'}, 0.1)`, 
                  color: getBadgeColor(item.format) === 'danger' ? '#dc3545' : 
                         getBadgeColor(item.format) === 'primary' ? '#0d6efd' :
                         getBadgeColor(item.format) === 'success' ? '#198754' :
                         getBadgeColor(item.format) === 'info' ? '#0dcaf0' :
                         getBadgeColor(item.format) === 'warning' ? '#ffc107' :
                         getBadgeColor(item.format) === 'purple' ? '#8e44ad' :
                         getBadgeColor(item.format) === 'teal' ? '#20c997' : '#6c757d', 
                  fontSize: 11 
                }}
              >
                <i className={`ri-file-${item.format.toLowerCase()}-line me-1`} />{item.format}
              </span>
              <span className="document-size me-2 px-2 py-1 rounded" style={{ backgroundColor: '#f5f5f5', fontSize: 11 }}>
                {item.size}
              </span>
              <span className="document-date ms-auto" style={{ fontSize: 11, color: '#666' }}>
                <i className="ri-time-line me-1" />Updated: {item.date}
              </span>
            </div>
            <h5 className="document-title mb-2">{item.title}</h5>
            <p className="document-description mb-2" style={{ fontSize: 13, color: '#666' }}>
              {item.description}
            </p>
            <div className="document-tags mb-3">
              {item.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="badge me-1" 
                  style={{ backgroundColor: '#f0f0f0', color: '#666', fontSize: 10 }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="document-actions d-flex align-items-center">
              <a href={item.url} className="btn style2 me-2" style={{ fontSize: 13, padding: '6px 12px' }}>
                <i className="ri-download-line me-1" />Download
              </a>
              <Link href={item.url} className="btn style1" style={{ fontSize: 13, padding: '6px 12px' }}>
                <i className="ri-eye-line me-1" />View
              </Link>
              <button type="button" className="btn-like ms-auto bg-transparent border-0">
                <i className="ri-bookmark-line" style={{ fontSize: 18, color: '#338F7A' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceItemCard;
