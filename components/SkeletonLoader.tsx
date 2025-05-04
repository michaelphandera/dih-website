'use client';

import React from 'react';

interface SkeletonLoaderProps {
  type: 'card' | 'text' | 'image' | 'circle' | 'table' | 'chart';
  count?: number;
  height?: string | number;
  width?: string | number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  type,
  count = 1,
  height,
  width,
  className = ''
}) => {
  const style: React.CSSProperties = {
    height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
    width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined
  };

  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return <div className={`card-skeleton skeleton-loader ${className}`} style={style}></div>;
      case 'text':
        return <div className={`text-skeleton skeleton-loader ${className}`} style={style}></div>;
      case 'image':
        return <div className={`image-skeleton skeleton-loader ${className}`} style={style}></div>;
      case 'circle':
        return <div className={`circle-skeleton skeleton-loader ${className}`} style={style}></div>;
      case 'table':
        return (
          <div className={`w-100 ${className}`}>
            <div className="text-skeleton skeleton-loader mb-3" style={{ height: '30px' }}></div>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="text-skeleton skeleton-loader mb-2" style={{ height: '20px' }}></div>
            ))}
          </div>
        );
      case 'chart':
        return <div className={`skeleton-loader ${className}`} style={{ ...style, borderRadius: '8px' }}></div>;
      default:
        return <div className={`text-skeleton skeleton-loader ${className}`} style={style}></div>;
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <React.Fragment key={index}>
          {renderSkeleton()}
        </React.Fragment>
      ))}
    </>
  );
};

export default SkeletonLoader;
