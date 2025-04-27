"use client"

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the DisasterDashboard component with no SSR
const DisasterDashboard = dynamic(
  () => import('./DisasterDashboard'),
  { ssr: false }
);

// Loading fallback component
const DashboardLoading = () => (
  <div className="disaster-dashboard pt-100 pb-75 bg-sand">
    <div className="container">
      <div className="section-title style3 text-center mb-40">
        <span>Interactive Dashboard</span>
        <h2>Disaster Impact Analysis</h2>
        <p>Loading dashboard data...</p>
      </div>
      <div className="row">
        <div className="col-12 text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading interactive charts...</p>
        </div>
      </div>
    </div>
  </div>
);

const DisasterDashboardWrapper = () => {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DisasterDashboard />
    </Suspense>
  );
};

export default DisasterDashboardWrapper;
