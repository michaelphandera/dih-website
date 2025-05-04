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
  },
  'rodrigues': {
    name: 'Rodrigues',
    title: 'Rodrigues Island',
    description: 'Rodrigues is an autonomous outer island of the Republic of Mauritius, located in the Indian Ocean. The island faces significant risks from cyclones, coastal flooding, and water scarcity during drought periods.',
    population: '43,500',
    area: '108 km²',
    elevation: '0-398m',
    evacuationCenters: '12',
    emergencyTeams: '5',
    riskLevel: 'High',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-19.7300, 63.4242],
    riskData: {
      lowRisk: 20,
      mediumRisk: 35,
      highRisk: 45
    },
    lowRiskAreas: 'Central highland areas',
    mediumRiskAreas: 'Inland settlements, sheltered bays',
    highRiskAreas: 'Coastal villages, low-lying areas, exposed eastern shore'
  },
  'agalega': {
    name: 'Agalega',
    title: 'Agalega Islands',
    description: 'Agalega consists of two small islands in the Indian Ocean governed by Mauritius. With limited infrastructure and remote location, these islands face significant challenges during extreme weather events.',
    population: '300',
    area: '26 km²',
    elevation: '0-8m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Very High',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-10.4000, 56.6167],
    riskData: {
      lowRisk: 5,
      mediumRisk: 25,
      highRisk: 70
    },
    lowRiskAreas: 'Central areas with some elevation',
    mediumRiskAreas: 'Inner settlements',
    highRiskAreas: 'Most of the coastline, low-lying areas'
  },
  'cargados-carajos': {
    name: 'Cargados Carajos',
    title: 'Saint Brandon (Cargados Carajos) Archipelago',
    description: 'Cargados Carajos, also known as Saint Brandon, is a remote group of islands and islets in the Indian Ocean. These largely uninhabited islands are extremely vulnerable to climate changes and natural disasters, with minimal infrastructure and limited emergency resources.',
    population: '0',
    area: '0.72 km²',
    elevation: '0-5m',
    evacuationCenters: '0',
    emergencyTeams: '1',
    riskLevel: 'Extreme',
    mapImage: '/img/maps/cargados-carajos.svg',
    coordinates: [-16.3167, 59.7833],
    riskData: {
      lowRisk: 5,
      mediumRisk: 15,
      highRisk: 80
    },
    lowRiskAreas: 'Minimal rocky areas',
    mediumRiskAreas: 'Small elevated sections',
    highRiskAreas: 'Entire archipelago, low-lying islands'
  },

  'tromelin': {
    name: 'Tromelin',
    title: 'Tromelin Island',
    description: 'Tromelin is a small, isolated island in the Indian Ocean, technically administered by France but geographically close to Mauritius. The island is extremely vulnerable to cyclones, sea-level rise, and other extreme weather events due to its low elevation and isolated location.',
    population: '0',
    area: '1.7 km²',
    elevation: '0-7m',
    evacuationCenters: '0',
    emergencyTeams: '1',
    riskLevel: 'Extreme',
    mapImage: '/img/maps/tromelin.svg',
    coordinates: [-15.8667, 54.5167],
    riskData: {
      lowRisk: 5,
      mediumRisk: 15,
      highRisk: 80
    },
    lowRiskAreas: 'Small rocky areas',
    mediumRiskAreas: 'Minimal elevated sections',
    highRiskAreas: 'Entire island, coastal regions'
  }
};

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
              setSelectedDistrict(key as DistrictKey); {/* Update the selectedDistrict state */}
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