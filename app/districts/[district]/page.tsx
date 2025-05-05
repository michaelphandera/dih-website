// app/districts/[district]/page.tsx
"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useParams, useRouter } from 'next/navigation';
import EmergencyModal from "@/components/EmergencyModal";
import CookieConsent from "@/components/CookieConsent";
import { DistrictActivityTabs } from "../district-activity-tabs";
import dynamic from 'next/dynamic';
import RiskDonutChart from '@/components/RiskDonutChart';
import PageTransition from "@/components/PageTransition";
import SectionLoader from "@/components/SectionLoader";
import { useLoading } from "@/contexts/LoadingContext";
import { districtData } from "@/app/districts/district-data";



// Dynamically import Leaflet map component to avoid SSR issues
const LeafletMap = dynamic(() => import('@/components/LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="district-map d-flex justify-content-center align-items-center bg-light">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading map...</span>
      </div>
    </div>
  )
});

// District data is now imported from district-data.ts

// Define district data type
type DistrictKey = keyof typeof districtData;
type DistrictDataType = typeof districtData[DistrictKey];

const DistrictDetails: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const districtId = params.district as string;
  const { startLoading, stopLoading } = useLoading();

  // State for loading
  const [isLoading, setIsLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(true);

  // State for currently selected district
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictKey>(
    // If districtId exists and is valid, use it; otherwise fallback to 'port-louis'
    districtId && districtData[districtId as DistrictKey]
      ? districtId as DistrictKey
      : 'port-louis'
  );
  const [currentDistrictData, setCurrentDistrictData] = useState<DistrictDataType>(districtData['port-louis']);

  // State for map
  const [mapCenter, setMapCenter] = useState<[number, number]>([-20.2759, 57.5703]); // Center of Mauritius
  const [mapZoom, setMapZoom] = useState(10);

  // State for filters
  const [districtFilter, setDistrictFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState<string[]>(['all']);
  const [categoryFilter, setCategoryFilter] = useState<string[]>(['all']);
  const [councilFilter, setCouncilFilter] = useState<string[]>(['all']);

  // State for modals
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  // Combined loading effect for initial load and data changes
  useEffect(() => {
    // Create a loading timeout ID reference
    let loadingTimeoutId: NodeJS.Timeout;

    // Function to handle data loading
    const loadDistrictData = () => {
      // Only show loading state on initial load, not on subsequent data changes
      if (!currentDistrictData || currentDistrictData.name !== districtData[districtId as DistrictKey]?.name) {
        setIsLoading(true);
        setIsDataLoading(true);
      }

      // Process district ID from URL
      if (districtId && districtData[districtId as DistrictKey]) {
        setSelectedDistrict(districtId as DistrictKey);

        const district = districtData[districtId as DistrictKey];
        setCurrentDistrictData(district);
        setMapCenter(district.coordinates as [number, number]);
        setMapZoom(11);
      } else if (districtId && !districtData[districtId as DistrictKey]) {
        // Redirect to default district if invalid district ID is provided
        router.push('/districts/port-louis');
        return; // Exit early as we're redirecting
      }

      // Set a timeout to ensure loading states are cleared
      loadingTimeoutId = setTimeout(() => {
        setIsLoading(false);
        setIsDataLoading(false);
      }, 800);
    };

    // Load the data
    loadDistrictData();

    // Cleanup function
    return () => {
      clearTimeout(loadingTimeoutId);
    };
  }, [districtId, router]);

  // Handle district selection changes (when user selects from dropdown)
  useEffect(() => {
    // Skip on initial render or when district matches URL
    if (selectedDistrict === districtId) {
      return;
    }

    setIsDataLoading(true);

    const district = districtData[selectedDistrict];
    if (district) {
      // Update data
      setCurrentDistrictData(district);
      setMapCenter(district.coordinates as [number, number]);
      setMapZoom(11);

      // Update URL when district changes (without full page reload)
      router.push(`/districts/${selectedDistrict}`, { scroll: false });

      // Clear loading state after a delay
      setTimeout(() => {
        setIsDataLoading(false);
      }, 600);
    }
  }, [selectedDistrict, districtId, router]);

  // Initialize modals on component mount
  useEffect(() => {
    // Check if emergency alert should be shown
    if (!sessionStorage.getItem('alertShown')) {
      setTimeout(() => {
        setShowEmergencyModal(true);
        sessionStorage.setItem('alertShown', 'true');
      }, 3000);
    }

    // Check cookie consent
    if (!localStorage.getItem('cookieConsent')) {
      setShowCookieConsent(true);
    }
  }, []);

  // Handle filter changes
  const handleYearFilterChange = (year: string) => {
    if (year === 'all') {
      setYearFilter(['all']);
    } else {
      const newFilters = yearFilter.includes('all')
        ? [year]
        : yearFilter.includes(year)
          ? yearFilter.filter(y => y !== year)
          : [...yearFilter, year];
      setYearFilter(newFilters.length > 0 ? newFilters : ['all']);
    }
  };

  const handleCategoryFilterChange = (category: string) => {
    if (category === 'all') {
      setCategoryFilter(['all']);
    } else {
      const newFilters = categoryFilter.includes('all')
        ? [category]
        : categoryFilter.includes(category)
          ? categoryFilter.filter(c => c !== category)
          : [...categoryFilter, category];
      setCategoryFilter(newFilters.length > 0 ? newFilters : ['all']);
    }
  };

  const handleCouncilFilterChange = (council: string) => {
    if (council === 'all') {
      setCouncilFilter(['all']);
    } else {
      const newFilters = councilFilter.includes('all')
        ? [council]
        : councilFilter.includes(council)
          ? councilFilter.filter(c => c !== council)
          : [...councilFilter, council];
      setCouncilFilter(newFilters.length > 0 ? newFilters : ['all']);
    }
  };

  // Apply filters
  // Apply filters
  const applyFilters = () => {
    // Update selectedDistrict if a specific district is selected in the filter
    if (districtFilter !== 'all') {
      setSelectedDistrict(districtFilter as DistrictKey);
    }

    // In a real app, this would apply other filters or make API calls
    console.log('Applying filters:', {
      district: districtFilter,
      years: yearFilter,
      categories: categoryFilter,
      councils: councilFilter
    });

    // Additional filtering logic could be added here
    // For example, filtering activity data based on selected filters
  };

  // Reset filters
  // Reset filters
  const resetFilters = () => {
    setDistrictFilter('all');
    setYearFilter(['all']);
    setCategoryFilter(['all']);
    setCouncilFilter(['all']);

    // Optionally reset the selected district to the default
    // Comment this line if you want to keep the current district view when resetting filters
    setSelectedDistrict('port-louis');
  };

  // Handle district selection change
  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDistrict = e.target.value as DistrictKey;
    setSelectedDistrict(newDistrict);
  };

  // Loaders removed as requested

  return (
    <PageTransition forceLoading={isDataLoading}>
      <div className="content">
        {/* District Header Section */}
        <section className="breadcrumb-wrap br-1">
          <div className="overlay op-6"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-title text-center">
                  <h2>{currentDistrictData.title}</h2>
                  <ul className="breadcrumb-menu list-style">
                    <li><a href="/">Home</a></li>
                    <li><a href="/districts">Districts</a></li>
                    <li>{currentDistrictData.name}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ptb-100 bg-sand">
          <div className="container">
            {/* New Layout: Filter on Left, Content on Right */}
            <div className="row">
              {/* Left Side: Filters */}
              <div className="col-lg-3 col-md-4">
                <div className="district-filter-sidebar p-3 rounded shadow-sm" style={{ top: '90px', backgroundColor: 'white' }}>
                  <h5 className="border-bottom pb-2 mb-3">Filter District Data</h5>

                  {/* Districts Filter */}
                  {/* Districts Filter */}
                  {/* Districts Filter */}
                  <div className="filter-section mb-3">
                    <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#districtFilters" aria-expanded="true">
                      <h6 className="d-flex justify-content-between align-items-center mb-0">
                        Districts
                        <i className="ri-arrow-down-s-line"></i>
                      </h6>
                    </div>
                    <div id="districtFilters" className="collapse show">
                      <div className="filter-body pt-2">
                        <div className="form-check mb-2">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="district-all"
                            checked={districtFilter === 'all'}
                            onChange={() => {
                              setDistrictFilter('all');
                              // Update selectedDistrict to default (e.g., 'port-louis') when "All Districts" is selected
                              setSelectedDistrict('port-louis');
                            }}
                          />
                          <label className="form-check-label" htmlFor="district-all">
                            All Districts
                          </label>
                        </div>
                        {/* Dynamically generate radio buttons for all districts */}
                        {Object.entries(districtData).map(([key, district]) => (
                          <div className="form-check mb-2" key={key}>
                            <input
                              type="radio"
                              className="form-check-input"
                              id={`district-${key}`}
                              checked={selectedDistrict === key}
                              onChange={() => {
                                setDistrictFilter(key);
                                setSelectedDistrict(key as DistrictKey); {/* Update the selectedDistrict state */ }
                              }}
                            />
                            <label className="form-check-label" htmlFor={`district-${key}`}>
                              {district.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Councils Filter */}
                  <div className="filter-section mb-3">
                    <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#councilFilters" aria-expanded="false">
                      <h6 className="d-flex justify-content-between align-items-center mb-0">
                        Councils
                        <i className="ri-arrow-down-s-line"></i>
                      </h6>
                    </div>
                    <div id="councilFilters" className="collapse">
                      <div className="filter-body pt-2">
                        <div className="form-check mb-2">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="council-agriculture"
                            checked={councilFilter.includes('agriculture')}
                            onChange={() => handleCouncilFilterChange('agriculture')}
                          />
                          <label className="form-check-label" htmlFor="council-agriculture">
                            Agriculture
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="council-civil-service"
                            checked={councilFilter.includes('civil-service')}
                            onChange={() => handleCouncilFilterChange('civil-service')}
                          />
                          <label className="form-check-label" htmlFor="council-civil-service">
                            Civil Service
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="council-education"
                            checked={councilFilter.includes('education')}
                            onChange={() => handleCouncilFilterChange('education')}
                          />
                          <label className="form-check-label" htmlFor="council-education">
                            Education
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Years Filter */}
                  <div className="filter-section mb-3">
                    <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#yearFilters" aria-expanded="false">
                      <h6 className="d-flex justify-content-between align-items-center mb-0">
                        Years
                        <i className="ri-arrow-down-s-line"></i>
                      </h6>
                    </div>
                    <div id="yearFilters" className="collapse">
                      <div className="filter-body pt-2">
                        <div className="form-check mb-2">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="year-all"
                            checked={yearFilter.includes('all')}
                            onChange={() => handleYearFilterChange('all')}
                          />
                          <label className="form-check-label" htmlFor="year-all">
                            All Years
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="year-2025"
                            checked={yearFilter.includes('2025')}
                            onChange={() => handleYearFilterChange('2025')}
                          />
                          <label className="form-check-label" htmlFor="year-2025">
                            2025
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="year-2024"
                            checked={yearFilter.includes('2024')}
                            onChange={() => handleYearFilterChange('2024')}
                          />
                          <label className="form-check-label" htmlFor="year-2024">
                            2024
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="year-2023"
                            checked={yearFilter.includes('2023')}
                            onChange={() => handleYearFilterChange('2023')}
                          />
                          <label className="form-check-label" htmlFor="year-2023">
                            2023
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Categories Filter */}


                  <button id="apply-filters" className="btn style1 w-100" onClick={applyFilters}>
                    Apply Filters
                  </button>
                  <button id="reset-filters" className="btn btn-outline-secondary w-100 mt-2" onClick={resetFilters}>
                    Reset
                  </button>
                </div>
              </div>




              {/* Right Side: Content */}
              <div className="col-lg-9 col-md-8">
                {/* District Overview */}
                <div className="row mb-5">
                  <div className="col-lg-8">
                    <div className="section-title style3 mb-30">
                      <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6">
                          <span>District Profile</span>
                        </div>
                        <div className="col-lg-5 col-md-6">
                          <div className="ministry-dropdown-wrapper text-md-end mb-30">
                            <select
                              id="district-dropdown"
                              className="form-select dropdown-select"
                              value={selectedDistrict}
                              onChange={handleDistrictChange}
                              disabled={isDataLoading}
                            >
                              <option value="" disabled>Change a District</option>
                              <option value="port-louis">Port Louis</option>
                              <option value="pamplemousses">Pamplemousses</option>
                              <option value="flacq">Flacq</option>
                              <option value="black-river">Black River</option>
                              <option value="grand-port">Grand Port</option>
                              <option value="moka">Moka</option>
                              <option value="plaines-wilhems">Plaines Wilhems</option>
                              <option value="riviere-du-rempart">Rivière du Rempart</option>
                              <option value="savanne">Savanne</option>
                              <option value="rodrigues">Rodrigues</option>
                              <option value="agalega">Agalega</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <h2>{currentDistrictData.name} Overview</h2>
                    </div>
                    <div className="about-content fade-in">
                      <p>{currentDistrictData.description}</p>
                      <div className="row mt-4">
                        <div className="col-md-6">
                          <ul className="content-feature-list list-style">
                            <li><i className="ri-checkbox-circle-line"></i>Population: {currentDistrictData.population}</li>
                            <li><i className="ri-checkbox-circle-line"></i>Area: {currentDistrictData.area}</li>
                            <li><i className="ri-checkbox-circle-line"></i>Elevation: {currentDistrictData.elevation}</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="content-feature-list list-style">
                            <li><i className="ri-checkbox-circle-line"></i>Evacuation Centers: {currentDistrictData.evacuationCenters}</li>
                            <li><i className="ri-checkbox-circle-line"></i>Emergency Response Teams: {currentDistrictData.emergencyTeams}</li>
                            <li><i className="ri-checkbox-circle-line"></i>District Risk Level: {currentDistrictData.riskLevel}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card h-100 bg-white p-3 shadow-sm">
                      <h5 className="card-title p-2 border-bottom">{currentDistrictData.name}</h5>
                      <div className="district-map">
                        <LeafletMap
                          districts={districtData}
                          selectedDistrict={selectedDistrict}
                          onDistrictSelect={(district: string) => setSelectedDistrict(district as DistrictKey)}
                          center={mapCenter}
                          zoom={mapZoom}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* District Risk Analysis Card */}
                <div className="card mb-4 bg-white p-4 shadow-sm fade-in">
                  <h5 className="card-title border-bottom pb-2 mb-4">Risk Analysis</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <Suspense fallback={
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                          <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading chart...</span>
                          </div>
                        </div>
                      }>
                        <RiskDonutChart
                          districtName={currentDistrictData.name}
                          lowRisk={currentDistrictData.riskData.lowRisk}
                          mediumRisk={currentDistrictData.riskData.mediumRisk}
                          highRisk={currentDistrictData.riskData.highRisk}
                          lowRiskAreas={currentDistrictData.lowRiskAreas}
                          mediumRiskAreas={currentDistrictData.mediumRiskAreas}
                          highRiskAreas={currentDistrictData.highRiskAreas}
                        />
                      </Suspense>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                      <div className="risk-stats">
                        <div className="risk-stat-item d-flex align-items-center mb-3">
                          <div className="risk-indicator me-3" style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#ffe0b2' }}></div>
                          <div>
                            <h6 className="mb-0">Low Risk Areas</h6>
                            <p className="mb-0 text-muted">{currentDistrictData.riskData.lowRisk}% of district</p>
                            <small>{currentDistrictData.lowRiskAreas}</small>
                          </div>
                        </div>
                        <div className="risk-stat-item d-flex align-items-center mb-3">
                          <div className="risk-indicator me-3" style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#ffab40' }}></div>
                          <div>
                            <h6 className="mb-0">Medium Risk Areas</h6>
                            <p className="mb-0 text-muted">{currentDistrictData.riskData.mediumRisk}% of district</p>
                            <small>{currentDistrictData.mediumRiskAreas}</small>
                          </div>
                        </div>
                        <div className="risk-stat-item d-flex align-items-center">
                          <div className="risk-indicator me-3" style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#ff6e40' }}></div>
                          <div>
                            <h6 className="mb-0">High Risk Areas</h6>
                            <p className="mb-0 text-muted">{currentDistrictData.riskData.highRisk}% of district</p>
                            <small>{currentDistrictData.highRiskAreas}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-top">
                    <p className="text-muted mb-0"><small>Risk assessment based on historical data, topographical analysis, and infrastructure evaluation. Last updated: April 2025</small></p>
                  </div>
                </div>

                {/* District Activity Tabs */}
                <DistrictActivityTabs districtId={selectedDistrict} />
              </div>
            </div>
          </div>
        </section>


      </div>
    </PageTransition>
  );
};

export default DistrictDetails;