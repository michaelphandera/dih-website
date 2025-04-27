'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Define the props for the LeafletMap component
interface LeafletMapProps {
  districts: Record<string, any>;
  selectedDistrict: string;
  onDistrictSelect: (district: string) => void;
  center: [number, number];
  zoom: number;
}

// Dynamically import the map component with no SSR
// This is crucial to avoid the "this.getPane() is undefined" error
const MapWithNoSSR = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="district-map d-flex justify-content-center align-items-center bg-light">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading map...</span>
      </div>
    </div>
  )
});

const LeafletMap: React.FC<LeafletMapProps> = (props) => {
  return (
    <div className="district-map-wrapper" style={{ height: '300px', width: '100%', position: 'relative' }}>
      <MapWithNoSSR {...props} />
    </div>
  );
};

export default LeafletMap;
