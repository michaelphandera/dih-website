'use client';

import React from 'react';

interface SectionLoaderProps {
  title?: string;
  subtitle?: string;
  height?: string | number;
  type?: 'spinner' | 'skeleton';
  className?: string;
}

const SectionLoader: React.FC<SectionLoaderProps> = ({
  title,
  subtitle = 'Loading content...',
  height = '300px',
  type = 'spinner',
  className = ''
}) => {
  const containerStyle = {
    minHeight: typeof height === 'number' ? `${height}px` : height
  };

  if (type === 'skeleton') {
    return (
      <div className={`section-loader ${className}`} style={containerStyle}>
        <div className="container py-4">
          {title && (
            <div className="text-skeleton title skeleton-loader mb-3"></div>
          )}
          <div className="text-skeleton subtitle skeleton-loader mb-4"></div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card-skeleton skeleton-loader"></div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card-skeleton skeleton-loader"></div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card-skeleton skeleton-loader"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`section-loader d-flex flex-column justify-content-center align-items-center ${className}`} style={containerStyle}>
      {title && <h3 className="mb-2">{title}</h3>}
      <div className="spinner-border text-primary mb-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-muted">{subtitle}</p>
    </div>
  );
};

export default SectionLoader;
