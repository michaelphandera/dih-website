'use client';

import React, { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';

export default function WeatherPage() {
  const [isLoading, setIsLoading] = useState(false);

  // Use coordinates for the center of Mauritius
  const mauritiusCoordinates = [-20.348, 57.552]; // Adjusted to better center the island

  // Create a state for the iframe URL
  const [iframeUrl, setIframeUrl] = useState('');

  // Initialize iframe URL on first load
  useEffect(() => {
    // Set initial URL with zoom level 10 to show a closer view of Mauritius with visible districts
    const newUrl = `https://embed.windy.com/embed2.html?lat=${mauritiusCoordinates[0]}&lon=${mauritiusCoordinates[1]}&zoom=11&level=surface&overlay=wind&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=kt&metricTemp=%C2%B0C&radarRange=-1`;
    console.log(`Setting iframe URL: ${newUrl}`);

    // Set the URL
    setIframeUrl(newUrl);

    // Reset loading state after a delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <PageTransition>
      <div className="content">
        <div className="breadcrumb-wrap bg-f br-1">
          <div className="container">
            <div className="breadcrumb-title text-center">
              <h2>Weather Forecast</h2>
              <ul className="breadcrumb-menu list-style">
                <li><a href="/">Home</a></li>
                <li>Weather</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="weather-section pt-2 mt-2 bg-sand">
          <div className="container-fluid px-4">
            <div className="card bg-white p-3 shadow-sm mb-4" style={{ maxWidth: '100%' }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">
                  <i className="ri-map-pin-line me-2"></i>
                  Currently viewing: <span className="text-primary">Mauritius</span>
                </h5>
                <div>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => {
                      setIsLoading(true);
                      // Force reload by setting URL to empty and then back
                      setIframeUrl('');
                      setTimeout(() => {
                        const newUrl = `https://embed.windy.com/embed2.html?lat=${mauritiusCoordinates[0]}&lon=${mauritiusCoordinates[1]}&zoom=10&level=surface&overlay=wind&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=kt&metricTemp=%C2%B0C&radarRange=-1`;
                        setIframeUrl(newUrl);
                      }, 100);
                    }}
                  >
                    <i className="ri-refresh-line me-1"></i> Reload Map
                  </button>
                  <span className="badge bg-light text-dark">
                    <i className="ri-map-pin-line me-1"></i>
                    Coordinates: {mauritiusCoordinates[0].toFixed(4)}, {mauritiusCoordinates[1].toFixed(4)}
                  </span>
                </div>
              </div>

              <div className="embed-responsive embed-responsive-16by9 mb-4 position-relative">
                {isLoading && (
                  <div className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center bg-light bg-opacity-75" style={{ zIndex: 5 }}>
                    <div className="text-center">
                      <div className="spinner-border text-primary mb-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="mb-0">Loading weather map for Mauritius...</p>
                    </div>
                  </div>
                )}
                {iframeUrl ? (
                  <iframe
                    key={`windy-map-mauritius-${Date.now()}`}
                    className="embed-responsive-item"
                    src={iframeUrl}
                    width="100%"
                    height="950px"
                    style={{ border: 'none' }}
                    title="Windy.com - Mauritius Weather Map"
                    onLoad={() => setIsLoading(false)}
                  ></iframe>
                ) : (
                  <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: '950px' }}>
                    <div className="text-center">
                      <div className="spinner-border text-primary mb-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <h5>Loading Windy Map</h5>
                      <p className="text-muted">Please wait while we load the weather map for Mauritius</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="text-center">
                <p className="text-muted">Weather data provided by <a href="https://www.windy.com" target="_blank" rel="noopener noreferrer">Windy.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
