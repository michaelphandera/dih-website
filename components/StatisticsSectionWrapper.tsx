"use client"

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the StatisticsSection component with no SSR
const StatisticsSection = dynamic(
  () => import('./StatisticsSection'),
  { ssr: false }
);

// Loading fallback component
const StatisticsLoading = () => (
  <div className="counter-wrap style2 bg-lochi pt-100 pb-75" id="profile">
    <div className="container">
      <div className="section-title style4 text-center mb-40">
        <span>Profile Statistics</span>
        <h2>Mauritius Disaster Status Dashboard</h2>
        <p className="text-white">Loading statistics...</p>
      </div>
      <div className="row">
        <div className="col-12 text-center py-5">
          <div className="spinner-border text-white" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-white">Loading charts and statistics...</p>
        </div>
      </div>
    </div>
  </div>
);

const StatisticsSectionWrapper = () => {
  return (
    <Suspense fallback={<StatisticsLoading />}>
      <StatisticsSection />
    </Suspense>
  );
};

export default StatisticsSectionWrapper;
