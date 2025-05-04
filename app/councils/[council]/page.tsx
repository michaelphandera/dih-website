"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useParams, useRouter } from 'next/navigation';
import EmergencyModal from "@/components/EmergencyModal";
import CookieConsent from "@/components/CookieConsent";
import { CouncilActivityTabs } from "../council-activity-tabs";
import councilData, { CouncilKey, CouncilDataType } from '../council-data';
import PageTransition from "@/components/PageTransition";
import SectionLoader from "@/components/SectionLoader";
import { useLoading } from "@/contexts/LoadingContext";

const CouncilDetails: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const councilId = params.council as string;
  const { startLoading, stopLoading } = useLoading();

  // State for loading
  const [isLoading, setIsLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(true);

  // State for currently selected council
  const [selectedCouncil, setSelectedCouncil] = useState<CouncilKey>(
    // If councilId exists and is valid, use it; otherwise fallback to 'agriculture'
    councilId && councilData[councilId as CouncilKey]
      ? councilId as CouncilKey
      : 'agriculture'
  );

  // State for current council data
  const [currentCouncilData, setCurrentCouncilData] = useState<CouncilDataType>(
    councilData[selectedCouncil]
  );

  // State for filters
  const [yearFilter, setYearFilter] = useState<string[]>(['all']);
  const [categoryFilter, setCategoryFilter] = useState<string[]>(['all']);
  const [councilFilter, setCouncilFilter] = useState<string>('all');
  const [ministryFilter, setMinistryFilter] = useState<string[]>(['all']);

  // State for modals
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  // Combined loading effect for initial load and data changes
  useEffect(() => {
    // Start global loading on component mount
    startLoading();
    setIsLoading(true);
    setIsDataLoading(true);

    // Create a loading timeout ID reference
    let loadingTimeoutId: NodeJS.Timeout;

    // Function to handle data loading
    const loadCouncilData = () => {
      // Process council ID from URL
      if (councilId && councilData[councilId as CouncilKey]) {
        setSelectedCouncil(councilId as CouncilKey);
        setCurrentCouncilData(councilData[councilId as CouncilKey]);
      } else if (councilId && !councilData[councilId as CouncilKey]) {
        // Redirect to default council if invalid council ID is provided
        router.push('/councils/agriculture');
        return; // Exit early as we're redirecting
      }

      // Set a timeout to ensure loading states are cleared
      loadingTimeoutId = setTimeout(() => {
        stopLoading();
        setIsLoading(false);
        setIsDataLoading(false);
      }, 800);
    };

    // Load the data
    loadCouncilData();

    // Cleanup function
    return () => {
      clearTimeout(loadingTimeoutId);
      stopLoading();
    };
  }, [councilId, router, startLoading, stopLoading]);

  // Handle council selection changes (when user selects from dropdown)
  useEffect(() => {
    // Skip on initial render or when council matches URL
    if (selectedCouncil === councilId) {
      return;
    }

    setIsDataLoading(true);

    const council = councilData[selectedCouncil];
    if (council) {
      // Update data
      setCurrentCouncilData(council);

      // Update URL when council changes (without full page reload)
      router.push(`/councils/${selectedCouncil}`, { scroll: false });

      // Clear loading state after a delay
      setTimeout(() => {
        setIsDataLoading(false);
      }, 600);
    }
  }, [selectedCouncil, councilId, router]);

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

  const handleMinistryFilterChange = (ministry: string) => {
    if (ministry === 'all') {
      setMinistryFilter(['all']);
    } else {
      const newFilters = ministryFilter.includes('all')
        ? [ministry]
        : ministryFilter.includes(ministry)
          ? ministryFilter.filter(m => m !== ministry)
          : [...ministryFilter, ministry];
      setMinistryFilter(newFilters.length > 0 ? newFilters : ['all']);
    }
  };

  // Apply filters
  const applyFilters = () => {
    // Update selectedCouncil if a specific council is selected in the filter
    if (councilFilter !== 'all') {
      setSelectedCouncil(councilFilter as CouncilKey);
    }

    // In a real app, this would apply other filters or make API calls
    console.log('Applying filters:', {
      council: councilFilter,
      years: yearFilter,
      categories: categoryFilter,
      ministries: ministryFilter
    });
  };

  // Reset filters
  const resetFilters = () => {
    setYearFilter(['all']);
    setCategoryFilter(['all']);
    setCouncilFilter('all');
    setMinistryFilter(['all']);
  };

  // Handle council selection change
  const handleCouncilChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCouncil = e.target.value as CouncilKey;
    if (newCouncil && councilData[newCouncil]) {
      setSelectedCouncil(newCouncil);
      // Navigate directly to avoid any potential state synchronization issues
      router.push(`/councils/${newCouncil}`, { scroll: false });
    }
  };

  // Loaders removed as requested

  return (
    <PageTransition forceLoading={isDataLoading}>
      <div className="content">
        {/* Council Header Section */}
        <section className="breadcrumb-wrap br-1">
          <div className="overlay op-6"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-title text-center">
                  <h2>{currentCouncilData.title}</h2>
                  <ul className="breadcrumb-menu list-style">
                    <li><a href="/">Home</a></li>
                    <li><a href="/councils">Councils</a></li>
                    <li>{currentCouncilData.name}</li>
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
              <div className="council-filter-sidebar p-3 rounded shadow-sm" style={{ top: '90px', backgroundColor: 'white' }}>
                <h5 className="border-bottom pb-2 mb-3">Filter Council Data</h5>

                {/* Councils Filter */}
                <div className="filter-section mb-3">
                  <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#councilFilters" aria-expanded="true">
                    <h6 className="d-flex justify-content-between align-items-center mb-0">
                      Councils
                      <i className="ri-arrow-down-s-line"></i>
                    </h6>
                  </div>
                  <div id="councilFilters" className="collapse show">
                    <div className="filter-body pt-2">
                      <div className="form-check mb-2">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="council-all"
                          checked={councilFilter === 'all'}
                          onChange={() => {
                            setCouncilFilter('all');
                            // Update selectedCouncil to default when "All Councils" is selected
                            setSelectedCouncil('agriculture');
                          }}
                        />
                        <label className="form-check-label" htmlFor="council-all">
                          All Councils
                        </label>
                      </div>
                      {/* Dynamically generate radio buttons for all councils */}
                      {Object.entries(councilData).map(([key, council]) => (
                        <div className="form-check mb-2" key={key}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id={`council-${key}`}
                            checked={selectedCouncil === key}
                            onChange={() => {
                              setCouncilFilter(key);
                              setSelectedCouncil(key as CouncilKey); // Update the selectedCouncil state
                            }}
                          />
                          <label className="form-check-label" htmlFor={`council-${key}`}>
                            {council.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Year Filter */}
                <div className="filter-section mb-3">
                  <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#yearFilters" aria-expanded="true">
                    <h6 className="d-flex justify-content-between align-items-center mb-0">
                      Year
                      <i className="ri-arrow-down-s-line"></i>
                    </h6>
                  </div>
                  <div id="yearFilters" className="collapse show">
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
                      {['2025', '2024', '2023', '2022'].map(year => (
                        <div className="form-check mb-2" key={year}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`year-${year}`}
                            checked={yearFilter.includes(year)}
                            onChange={() => handleYearFilterChange(year)}
                          />
                          <label className="form-check-label" htmlFor={`year-${year}`}>
                            {year}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Category Filter */}
                <div className="filter-section mb-3">
                  <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#categoryFilters" aria-expanded="true">
                    <h6 className="d-flex justify-content-between align-items-center mb-0">
                      Category
                      <i className="ri-arrow-down-s-line"></i>
                    </h6>
                  </div>
                  <div id="categoryFilters" className="collapse show">
                    <div className="filter-body pt-2">
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="category-all"
                          checked={categoryFilter.includes('all')}
                          onChange={() => handleCategoryFilterChange('all')}
                        />
                        <label className="form-check-label" htmlFor="category-all">
                          All Categories
                        </label>
                      </div>
                      {['Resilience', 'Response', 'Recovery', 'Preparedness'].map(category => (
                        <div className="form-check mb-2" key={category}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`category-${category.toLowerCase()}`}
                            checked={categoryFilter.includes(category.toLowerCase())}
                            onChange={() => handleCategoryFilterChange(category.toLowerCase())}
                          />
                          <label className="form-check-label" htmlFor={`category-${category.toLowerCase()}`}>
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ministry Filter */}
                <div className="filter-section mb-3">
                  <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#ministryFilters" aria-expanded="true">
                    <h6 className="d-flex justify-content-between align-items-center mb-0">
                      Ministry
                      <i className="ri-arrow-down-s-line"></i>
                    </h6>
                  </div>
                  <div id="ministryFilters" className="collapse show">
                    <div className="filter-body pt-2">
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="ministry-all"
                          checked={ministryFilter.includes('all')}
                          onChange={() => handleMinistryFilterChange('all')}
                        />
                        <label className="form-check-label" htmlFor="ministry-all">
                          All Ministries
                        </label>
                      </div>
                      {['Infrastructure', 'Environment', 'Health', 'Defense'].map(ministry => (
                        <div className="form-check mb-2" key={ministry}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`ministry-${ministry.toLowerCase()}`}
                            checked={ministryFilter.includes(ministry.toLowerCase())}
                            onChange={() => handleMinistryFilterChange(ministry.toLowerCase())}
                          />
                          <label className="form-check-label" htmlFor={`ministry-${ministry.toLowerCase()}`}>
                            {ministry}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Filter Buttons */}
                <div className="filter-buttons mt-4">
                  <button className="btn style1 w-100 mb-2" onClick={applyFilters}>Apply Filters</button>
                  <button className="btn btn-outline-secondary w-100" onClick={resetFilters}>Reset Filters</button>
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="col-lg-9 col-md-8">
                  {/* Council Overview */}
                  <div className="row mb-5">
                    <div className="col-lg-8">
                      <div className="section-title style3 mb-30">
                        <div className="row align-items-center">
                          <div className="col-lg-7 col-md-6">
                            <span>Council Profile</span>
                          </div>
                          <div className="col-lg-5 col-md-6">
                            <div className="council-dropdown-wrapper text-md-end mb-30">
                              <select
                                id="council-dropdown"
                                className="form-select dropdown-select"
                                value={selectedCouncil}
                                onChange={handleCouncilChange}
                                disabled={isDataLoading}
                              >
                                <option value="" disabled>Change Council</option>
                                <option value="agriculture">Agriculture</option>
                                <option value="civil-service">Civil Service</option>
                                <option value="education">Education</option>
                                <option value="external-affairs">External Affairs</option>
                                <option value="disaster-management">Disaster Management</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <h2>{currentCouncilData.name} Overview</h2>
                      </div>
                      <div className="about-content fade-in">
                        <p>{currentCouncilData.description}</p>
                        <div className="row mt-4">
                          <div className="col-md-6">
                            <ul className="content-feature-list list-style">
                              <li><i className="ri-checkbox-circle-line"></i>Established: {currentCouncilData.established}</li>
                              <li><i className="ri-checkbox-circle-line"></i>Total Members: {currentCouncilData.memberCount}</li>
                              <li><i className="ri-checkbox-circle-line"></i>Ministerial Representation: {currentCouncilData.ministerialRepresentation}</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="content-feature-list list-style">
                              <li><i className="ri-checkbox-circle-line"></i>Coordination Centers: {currentCouncilData.coordinationCenters}</li>
                              <li><i className="ri-checkbox-circle-line"></i>Response Teams: {currentCouncilData.responseTeams}</li>
                              <li><i className="ri-checkbox-circle-line"></i>Annual Budget: {currentCouncilData.annualBudget}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card h-100 bg-white p-3 shadow-sm">
                        <h5 className="card-title p-2 border-bottom">Council Leadership</h5>
                        <div className="text-center mb-3">
                          <img src="/img/raj.png" alt="Council Chair" className="rounded-circle mb-3" width={150} />
                          <h6>{currentCouncilData.leadership.name}</h6>
                          <p className="text-muted">{currentCouncilData.leadership.position}</p>
                        </div>
                        <ul className="list-unstyled">
                          <li className="mb-2"><strong>Appointment:</strong> {currentCouncilData.leadership.appointment}</li>
                          <li className="mb-2"><strong>Tenure:</strong> {currentCouncilData.leadership.tenure}</li>
                          <li><strong>Background:</strong> {currentCouncilData.leadership.background}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

              {/* Council Activity Tabs */}
              <CouncilActivityTabs councilId={selectedCouncil} />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Modal and Cookie Consent */}
      {showEmergencyModal && <EmergencyModal show={true} onClose={() => setShowEmergencyModal(false)} />}
      {showCookieConsent && <CookieConsent />}
    </div>
    </PageTransition>
  );
};

export default CouncilDetails;
