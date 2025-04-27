'use client';

import React, { useState, useEffect, useRef } from 'react';
import EmergencyModal from "@/components/EmergencyModal"
import CookieConsent from "@/components/CookieConsent"
import { DistrictActivityTabs } from "./district-activity-tabs"
import dynamic from 'next/dynamic';
import Image from 'next/image';
import RiskDonutChart from '@/components/RiskDonutChart';

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

// District data with risk profiles and coordinates for map
const districtData = {
  'port-louis': {
    name: 'Port Louis',
    title: 'Port Louis District',
    description: 'Port Louis is the capital city of Mauritius, located on the northwest coast of the island. As a major urban center, it faces unique disaster management challenges including flash floods, urban fires, and coastal threats.',
    population: '147,600',
    area: '42.7 km²',
    elevation: '0-650m',
    evacuationCenters: '14',
    emergencyTeams: '8',
    riskLevel: 'Medium',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.1637, 57.5045], // [latitude, longitude]
    riskData: {
      lowRisk: 20,
      mediumRisk: 55,
      highRisk: 25
    },
    lowRiskAreas: 'Coastal regions, elevated areas',
    mediumRiskAreas: 'Urban residential zones, commercial areas',
    highRiskAreas: 'Low-lying areas, flood plains, industrial zones'
  },
  'black-river': {
    name: 'Black River',
    title: 'Black River District',
    description: 'Black River (Rivière Noire) is located on the western coast of Mauritius. The district is known for its beautiful beaches, mountains, and natural parks, but faces challenges related to coastal erosion and flash floods.',
    population: '83,500',
    area: '259.0 km²',
    elevation: '0-828m',
    evacuationCenters: '9',
    emergencyTeams: '5',
    riskLevel: 'Medium-Low',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.3484, 57.3696],
    riskData: {
      lowRisk: 45,
      mediumRisk: 40,
      highRisk: 15
    },
    lowRiskAreas: 'Elevated regions, inland areas',
    mediumRiskAreas: 'Coastal settlements, river valleys',
    highRiskAreas: 'Beach fronts, river mouths, low-lying areas'
  },
  'flacq': {
    name: 'Flacq',
    title: 'Flacq District',
    description: 'Flacq is the largest district in Mauritius, located on the eastern coast. It is primarily agricultural with some coastal tourism development, facing risks from cyclones and agricultural drought.',
    population: '138,400',
    area: '297.9 km²',
    elevation: '0-425m',
    evacuationCenters: '12',
    emergencyTeams: '6',
    riskLevel: 'Medium',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.2300, 57.7129],
    riskData: {
      lowRisk: 30,
      mediumRisk: 50,
      highRisk: 20
    },
    lowRiskAreas: 'Central highlands, protected inland areas',
    mediumRiskAreas: 'Agricultural plains, rural settlements',
    highRiskAreas: 'Coastal areas, flood-prone agricultural lands'
  },
  'pamplemousses': {
    name: 'Pamplemousses',
    title: 'Pamplemousses District',
    description: 'Pamplemousses is located in the north of Mauritius, known for its botanical garden and historical sites. The district faces moderate risks from flooding and tropical storms.',
    population: '142,900',
    area: '178.7 km²',
    elevation: '0-550m',
    evacuationCenters: '11',
    emergencyTeams: '7',
    riskLevel: 'Medium-Low',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.1038, 57.5800],
    riskData: {
      lowRisk: 40,
      mediumRisk: 45,
      highRisk: 15
    },
    lowRiskAreas: 'Elevated regions, central areas',
    mediumRiskAreas: 'Suburban zones, agricultural areas',
    highRiskAreas: 'Low-lying areas, water catchment zones'
  },
  'grand-port': {
    name: 'Grand Port',
    title: 'Grand Port District',
    description: 'Grand Port is located in the southeast of Mauritius. It has historical significance as the site of the only Mauritian naval victory against the British. The district faces risks from coastal flooding and erosion.',
    population: '112,600',
    area: '259.6 km²',
    elevation: '0-621m',
    evacuationCenters: '10',
    emergencyTeams: '6',
    riskLevel: 'Medium',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.4000, 57.6700],
    riskData: {
      lowRisk: 35,
      mediumRisk: 45,
      highRisk: 20
    },
    lowRiskAreas: 'Inland elevated areas, central regions',
    mediumRiskAreas: 'Coastal towns, agricultural zones',
    highRiskAreas: 'Low-lying coastal areas, river mouths'
  },
  'moka': {
    name: 'Moka',
    title: 'Moka District',
    description: 'Moka is an inland district in Mauritius, known for its cooler climate and educational institutions. The district faces moderate risks from landslides and flash floods during heavy rainfall.',
    population: '89,800',
    area: '230.5 km²',
    elevation: '200-828m',
    evacuationCenters: '8',
    emergencyTeams: '5',
    riskLevel: 'Low-Medium',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.2167, 57.5833],
    riskData: {
      lowRisk: 50,
      mediumRisk: 40,
      highRisk: 10
    },
    lowRiskAreas: 'Higher elevation areas, central plateau',
    mediumRiskAreas: 'Sloped terrain, river valleys',
    highRiskAreas: 'Steep slopes, water catchment areas'
  },
  'plaines-wilhems': {
    name: 'Plaines Wilhems',
    title: 'Plaines Wilhems District',
    description: 'Plaines Wilhems is the most populous district in Mauritius, containing major urban centers like Curepipe and Quatre Bornes. The district faces challenges related to urban flooding and infrastructure stress.',
    population: '368,500',
    area: '203.3 km²',
    elevation: '250-700m',
    evacuationCenters: '18',
    emergencyTeams: '12',
    riskLevel: 'Medium',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.3167, 57.5167],
    riskData: {
      lowRisk: 30,
      mediumRisk: 50,
      highRisk: 20
    },
    lowRiskAreas: 'Higher elevation urban areas, well-drained zones',
    mediumRiskAreas: 'Densely populated urban centers, suburban areas',
    highRiskAreas: 'Urban flood plains, areas with aging infrastructure'
  },
  'riviere-du-rempart': {
    name: 'Rivière du Rempart',
    title: 'Rivière du Rempart District',
    description: 'Rivière du Rempart is located in the north of Mauritius. The district has a mix of agricultural lands and coastal tourism areas, facing risks from coastal erosion and tropical cyclones.',
    population: '108,300',
    area: '147.6 km²',
    elevation: '0-340m',
    evacuationCenters: '9',
    emergencyTeams: '6',
    riskLevel: 'Medium',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.0500, 57.6833],
    riskData: {
      lowRisk: 25,
      mediumRisk: 55,
      highRisk: 20
    },
    lowRiskAreas: 'Inland elevated areas, protected zones',
    mediumRiskAreas: 'Agricultural plains, rural settlements',
    highRiskAreas: 'Northern coastal areas, low-lying regions'
  },
  'savanne': {
    name: 'Savanne',
    title: 'Savanne District',
    description: 'Savanne is located in the southern part of Mauritius. The district is known for its natural beauty, including the Rochester Falls and Gris Gris cliffs. It faces risks from coastal erosion and landslides.',
    population: '68,900',
    area: '244.8 km²',
    elevation: '0-621m',
    evacuationCenters: '7',
    emergencyTeams: '4',
    riskLevel: 'Medium-Low',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.5000, 57.5000],
    riskData: {
      lowRisk: 40,
      mediumRisk: 45,
      highRisk: 15
    },
    lowRiskAreas: 'Inland elevated areas, central regions',
    mediumRiskAreas: 'Coastal settlements, agricultural zones',
    highRiskAreas: 'Cliff areas, coastal erosion zones, river valleys'
  }
};

// Define district data type for TypeScript
type DistrictKey = keyof typeof districtData;
type DistrictDataType = typeof districtData[DistrictKey];

const DistrictDetails: React.FC = () => {
  // State for tabs
  const [activeTab, setActiveTab] = useState('resilience');
  const [documentTab, setDocumentTab] = useState('all-docs');

  // State for selected district
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictKey>('port-louis');
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

  // Update current district data and map center when selected district changes
  useEffect(() => {
    const district = districtData[selectedDistrict];
    if (district) {
      setCurrentDistrictData(district);
      // Type assertion to ensure coordinates is treated as a tuple
      setMapCenter(district.coordinates as [number, number]);
      setMapZoom(11); // Zoom in when a district is selected
    }
  }, [selectedDistrict]);

  // No longer needed as we're using the RiskDonutChart component

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

  // Chart initialization is now handled by the RiskDonutChart component

  // Sample data
  const resilienceActivities = [
    {
      title: "Flood Mitigation Project",
      ministry: "Environment Ministry",
      progress: 75,
      description: "Construction of enhanced drainage systems in flood-prone areas of Port Louis to mitigate risks during heavy rainfall events.",
      startDate: "Jan 15, 2025",
      endDate: "May 30, 2025"
    },
    {
      title: "Community Training Program",
      ministry: "Health Ministry",
      progress: 40,
      description: "Training community volunteers in basic first aid, emergency response, and coordination with official emergency services.",
      startDate: "Feb 10, 2025",
      endDate: "Jul 15, 2025"
    }
  ];

  const timelineItems = [
    {
      date: "Apr 10, 2025",
      title: "Infrastructure Assessment Report Published",
      description: "Final assessment report on critical infrastructure resilience published by Infrastructure Ministry.",
      ministry: "Infrastructure Ministry",
      link: "#",
      linkText: "View Report"
    },
    {
      date: "Mar 25, 2025",
      title: "Community Training Session #2 Completed",
      description: "Successfully trained 45 community volunteers in emergency first aid procedures.",
      ministry: "Health Ministry",
      link: "#",
      linkText: "View Gallery"
    }
  ];

  const documents = {
    all: [
      {
        id: 1,
        title: "Port Louis Disaster Response Plan",
        type: "pdf",
        size: "2.8 MB",
        date: "Apr 1, 2025",
        description: "Comprehensive plan detailing response protocols for various disaster scenarios in Port Louis district.",
        badge: "OFFICIAL",
        badgeColor: "#338F7A"
      },
      {
        id: 2,
        title: "Community Training Materials",
        type: "ppt",
        size: "5.2 MB",
        date: "Mar 15, 2025",
        description: "Training presentation for community volunteers covering emergency response procedures and coordination.",
        badge: "TRAINING",
        badgeColor: "#F59946"
      }
    ],
    plans: [
      {
        id: 1,
        title: "Port Louis Disaster Response Plan",
        type: "pdf",
        size: "2.8 MB",
        date: "Apr 1, 2025",
        description: "Comprehensive plan detailing response protocols for various disaster scenarios in Port Louis district.",
        badge: "OFFICIAL",
        badgeColor: "#338F7A"
      }
    ],
    infographics: [
      {
        id: 1,
        title: "Flood Safety Guidelines",
        image: "assets/img/12035.jpg",
        description: "Essential safety measures before, during, and after flooding events.",
        badges: [
          { text: "Safety", color: "#338F7A" },
          { text: "Port Louis", color: "#6EB4F0" }
        ],
        date: "Mar 15, 2025"
      }
    ]
  };

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
  const applyFilters = () => {
    // In a real app, this would filter data or make API calls
    console.log('Applying filters:', {
      district: districtFilter,
      years: yearFilter,
      categories: categoryFilter,
      councils: councilFilter
    });
  };

  // Reset filters
  const resetFilters = () => {
    setDistrictFilter('all');
    setYearFilter(['all']);
    setCategoryFilter(['all']);
    setCouncilFilter(['all']);
  };

  return (
    // -mt-4 here represents a negative margin-top to adjust the spacing
    <div className="content pt-5">
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
                        onChange={(e) => setSelectedDistrict(e.target.value as DistrictKey)}
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
                      </select>
                    </div>
                  </div>
                </div>
                <h2>{currentDistrictData.name} Overview</h2>
              </div>
              <div className="about-content">
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

          {/* New Layout: Filter on Left, Content on Right */}
          <div className="row">
            {/* Left Side: Filters */}
            <div className="col-lg-3 col-md-4">
              <div className="district-filter-sidebar p-3 rounded shadow-sm sticky-top" style={{ top: '90px' }}>
                <h5 className="border-bottom pb-2 mb-3">Filter District Data</h5>

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
                          onChange={() => setDistrictFilter('all')}
                        />
                        <label className="form-check-label" htmlFor="district-all">
                          All Districts
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="district-port-louis"
                          checked={districtFilter === 'port-louis'}
                          onChange={() => setDistrictFilter('port-louis')}
                        />
                        <label className="form-check-label" htmlFor="district-port-louis">
                          Port Louis
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="district-black-river"
                          checked={districtFilter === 'black-river'}
                          onChange={() => setDistrictFilter('black-river')}
                        />
                        <label className="form-check-label" htmlFor="district-black-river">
                          Black River
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="district-flacq"
                          checked={districtFilter === 'flacq'}
                          onChange={() => setDistrictFilter('flacq')}
                        />
                        <label className="form-check-label" htmlFor="district-flacq">
                          Flacq
                        </label>
                      </div>
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
                <div className="filter-section mb-3">
                  <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#categoryFilters" aria-expanded="false">
                    <h6 className="d-flex justify-content-between align-items-center mb-0">
                      Categories
                      <i className="ri-arrow-down-s-line"></i>
                    </h6>
                  </div>
                  <div id="categoryFilters" className="collapse">
                    <div className="filter-body pt-2">
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="cat-all"
                          checked={categoryFilter.includes('all')}
                          onChange={() => handleCategoryFilterChange('all')}
                        />
                        <label className="form-check-label" htmlFor="cat-all">
                          All Categories
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="cat-events"
                          checked={categoryFilter.includes('events')}
                          onChange={() => handleCategoryFilterChange('events')}
                        />
                        <label className="form-check-label" htmlFor="cat-events">
                          Disaster Events
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="cat-projects"
                          checked={categoryFilter.includes('projects')}
                          onChange={() => handleCategoryFilterChange('projects')}
                        />
                        <label className="form-check-label" htmlFor="cat-projects">
                          Projects
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="cat-resources"
                          checked={categoryFilter.includes('resources')}
                          onChange={() => handleCategoryFilterChange('resources')}
                        />
                        <label className="form-check-label" htmlFor="cat-resources">
                          Resources
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

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
              {/* District Risk Analysis Card */}
              <div className="card mb-4 bg-white p-4 shadow-sm">
                <h5 className="card-title border-bottom pb-2 mb-4">Risk Analysis</h5>
                <div className="row">
                  <div className="col-md-6">
                    <RiskDonutChart
                      districtName={currentDistrictData.name}
                      lowRisk={currentDistrictData.riskData.lowRisk}
                      mediumRisk={currentDistrictData.riskData.mediumRisk}
                      highRisk={currentDistrictData.riskData.highRisk}
                      lowRiskAreas={currentDistrictData.lowRiskAreas}
                      mediumRiskAreas={currentDistrictData.mediumRiskAreas}
                      highRiskAreas={currentDistrictData.highRiskAreas}
                    />
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
               <DistrictActivityTabs/>
            </div>
          </div>
        </div>
      </section>
      <EmergencyModal />
      <CookieConsent />
      </div>
  );
};

export default DistrictDetails;