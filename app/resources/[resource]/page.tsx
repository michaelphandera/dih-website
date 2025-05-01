"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import resourceData, { ResourceKey, ResourceDataType } from '../resource-data';
import ResourceItemCard from '../resource-item-card';
import ResourceFilterSidebar from '../resource-filter-sidebar';
import EmergencyModal from "@/components/EmergencyModal";
import CookieConsent from "@/components/CookieConsent";

const ResourceDetails: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const resourceId = params.resource as string;

  // State for currently selected resource - initialize from URL parameter if valid
  const initialResource = resourceData[params.resource as ResourceKey] ?
    (params.resource as ResourceKey) : 'infographics';
  const [selectedResource, setSelectedResource] = useState<ResourceKey>(initialResource);
  const [currentResourceData, setCurrentResourceData] = useState<ResourceDataType>(resourceData[initialResource]);

  // State for filters
  const [formatFilter, setFormatFilter] = useState<string[]>(['all']);
  const [yearFilter, setYearFilter] = useState<string[]>(['all']);
  const [tagFilter, setTagFilter] = useState<string[]>(['all']);
  const [councilFilter, setCouncilFilter] = useState<string[]>(['all']);
  const [districtFilter, setDistrictFilter] = useState<string[]>(['all']);
  const [partnerFilter, setPartnerFilter] = useState<string[]>(['all']);
  const [disasterTypeFilter, setDisasterTypeFilter] = useState<string[]>(['all']);
  const [populationFilter, setPopulationFilter] = useState<string[]>(['all']);
  const [searchQuery, setSearchQuery] = useState('');

  // State for modals
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  // Effect to handle URL parameter changes - only redirect if invalid
  useEffect(() => {
    if (resourceId && !resourceData[resourceId as ResourceKey]) {
      // Redirect to default resource if invalid resource ID is provided
      router.push('/resources/infographics');
    }
  }, [resourceId, router]);

  // Update current resource data when selected resource changes
  useEffect(() => {
    const resource = resourceData[selectedResource];
    if (resource) {
      setCurrentResourceData(resource);

      // Update URL when resource changes (without full page reload)
      // Only update URL if it's different from the current URL to avoid loops
      if (selectedResource !== resourceId) {
        router.push(`/resources/${selectedResource}`, { scroll: false });
      }
    }
  }, [selectedResource, resourceId, router]);

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
  const handleFormatFilterChange = (format: string) => {
    if (format === 'all') {
      setFormatFilter(['all']);
    } else {
      const newFilters = formatFilter.includes('all')
        ? [format]
        : formatFilter.includes(format)
          ? formatFilter.filter(f => f !== format)
          : [...formatFilter, format];
      setFormatFilter(newFilters.length > 0 ? newFilters : ['all']);
    }
  };



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

  const handleTagFilterChange = (tag: string) => {
    if (tag === 'all') {
      setTagFilter(['all']);
    } else {
      const newFilters = tagFilter.includes('all')
        ? [tag]
        : tagFilter.includes(tag)
          ? tagFilter.filter(t => t !== tag)
          : [...tagFilter, tag];
      setTagFilter(newFilters.length > 0 ? newFilters : ['all']);
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

  const handleDistrictFilterChange = (district: string) => {
    if (district === 'all') {
      setDistrictFilter(['all']);
    } else {
      const newFilters = districtFilter.includes('all')
        ? [district]
        : districtFilter.includes(district)
          ? districtFilter.filter(d => d !== district)
          : [...districtFilter, district];
      setDistrictFilter(newFilters.length > 0 ? newFilters : ['all']);
    }
  };

  const handlePartnerFilterChange = (partner: string) => {
    if (partner === 'all') {
      setPartnerFilter(['all']);
    } else {
      const newFilters = partnerFilter.includes('all')
        ? [partner]
        : partnerFilter.includes(partner)
          ? partnerFilter.filter(p => p !== partner)
          : [...partnerFilter, partner];
      setPartnerFilter(newFilters.length > 0 ? newFilters : ['all']);
    }
  };

  const handleDisasterTypeFilterChange = (disasterType: string) => {
    if (disasterType === 'all') {
      setDisasterTypeFilter(['all']);
    } else {
      const newFilters = disasterTypeFilter.includes('all')
        ? [disasterType]
        : disasterTypeFilter.includes(disasterType)
          ? disasterTypeFilter.filter(d => d !== disasterType)
          : [...disasterTypeFilter, disasterType];
      setDisasterTypeFilter(newFilters.length > 0 ? newFilters : ['all']);
    }
  };

  const handlePopulationFilterChange = (population: string) => {
    if (population === 'all') {
      setPopulationFilter(['all']);
    } else {
      const newFilters = populationFilter.includes('all')
        ? [population]
        : populationFilter.includes(population)
          ? populationFilter.filter(p => p !== population)
          : [...populationFilter, population];
      setPopulationFilter(newFilters.length > 0 ? newFilters : ['all']);
    }
  };

  // Apply filters
  const applyFilters = () => {
    // In a real app, this would filter data or make API calls
    console.log('Applying filters:', {
      formats: formatFilter,
      years: yearFilter,
      tags: tagFilter,
      councils: councilFilter,
      districts: districtFilter,
      partners: partnerFilter,
      disasterTypes: disasterTypeFilter,
      populations: populationFilter,
      search: searchQuery
    });
  };

  // Reset filters
  const resetFilters = () => {
    setFormatFilter(['all']);
    setYearFilter(['all']);
    setTagFilter(['all']);
    setCouncilFilter(['all']);
    setDistrictFilter(['all']);
    setPartnerFilter(['all']);
    setDisasterTypeFilter(['all']);
    setPopulationFilter(['all']);
    setSearchQuery('');
  };

  // Handle resource selection change
  const handleResourceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newResource = e.target.value as ResourceKey;
    if (newResource && resourceData[newResource]) {
      setSelectedResource(newResource);
      // Navigate directly to avoid any potential state synchronization issues
      router.push(`/resources/${newResource}`, { scroll: false });
    }
  };

  // Filter resource items based on search query
  const filteredResourceItems = currentResourceData.resourceItems.filter(item => {
    if (searchQuery === '') return true;

    return (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="content pt-5">
      {/* Resource Header Section */}
      <section className="breadcrumb-wrap br-1">
        <div className="overlay op-6"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-title text-center">
                <h2>{currentResourceData.title}</h2>
                <ul className="breadcrumb-menu list-style">
                  <li><a href="/">Home</a></li>
                  <li><a href="/resources">Resources</a></li>
                  <li>{currentResourceData.name}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ptb-100 bg-sand">
        <div className="container">
        <div className="row">
            {/* Left Side: Filters */}
            <div className="col-lg-3 col-md-4">
              <ResourceFilterSidebar
                formatFilter={formatFilter}
                yearFilter={yearFilter}
                tagFilter={tagFilter}
                councilFilter={councilFilter}
                districtFilter={districtFilter}
                partnerFilter={partnerFilter}
                disasterTypeFilter={disasterTypeFilter}
                populationFilter={populationFilter}
                onFormatFilterChange={handleFormatFilterChange}
                onYearFilterChange={handleYearFilterChange}
                onTagFilterChange={handleTagFilterChange}
                onCouncilFilterChange={handleCouncilFilterChange}
                onDistrictFilterChange={handleDistrictFilterChange}
                onPartnerFilterChange={handlePartnerFilterChange}
                onDisasterTypeFilterChange={handleDisasterTypeFilterChange}
                onPopulationFilterChange={handlePopulationFilterChange}
                applyFilters={applyFilters}
                resetFilters={resetFilters}
              />
            </div>
         

          {/* Filter on Left, Content on Right */}
       

            {/* Right Side: Content */}
            <div className="col-lg-9 col-md-8">
               {/* Resource Overview */}
          <div className="row mb-5">
            <div className="col-lg-8">
              <div className="section-title style3 mb-30">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-6">
                    <span>Resource Collection</span>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <div className="resource-dropdown-wrapper text-md-end mb-30">
                      <select
                        id="resource-dropdown"
                        className="form-select dropdown-select"
                        value={selectedResource}
                        onChange={handleResourceChange}
                      >
                        <option value="" disabled>Change Resource Type</option>
                        <option value="infographics">Infographics</option>
                        <option value="documents">Documents</option>
                        <option value="maps">Maps</option>
                        <option value="forms">Forms</option>
                        <option value="manuals">Manuals</option>
                      </select>
                    </div>
                  </div>
                </div>
                <h2>{currentResourceData.name} Overview</h2>
              </div>
              <div className="about-content">
                <p>{currentResourceData.description}</p>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <ul className="content-feature-list list-style">
                      <li><i className="ri-checkbox-circle-line"></i>Total Items: {currentResourceData.count}</li>
                      <li><i className="ri-checkbox-circle-line"></i>Formats: {currentResourceData.formats}</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="content-feature-list list-style">
                      <li><i className="ri-checkbox-circle-line"></i>Languages: {currentResourceData.languages}</li>
                      <li><i className="ri-checkbox-circle-line"></i>Access Level: {currentResourceData.accessLevel}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 bg-white p-3 shadow-sm">
                <h5 className="card-title p-2 border-bottom">{currentResourceData.name}</h5>
                <div className="resource-image">
                  <img
                    src={currentResourceData.featuredImage || "/img/resources/placeholder.jpg"}
                    alt={currentResourceData.name}
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="search-box">
                <div className="form-group mb-0 position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Search ${currentResourceData.name}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="search-btn">
                    <i className="ri-search-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
              {/* Resource Items */}
              <div className="resource-items">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="mb-0">Available {currentResourceData.name}</h4>
                  <div className="resource-count">
                    <span className="badge bg-light text-dark">
                      {filteredResourceItems.length} items found
                    </span>
                  </div>
                </div>

                {filteredResourceItems.length > 0 ? (
                  filteredResourceItems.map(item => (
                    <ResourceItemCard key={item.id} item={item} />
                  ))
                ) : (
                  <div className="alert alert-info">
                    No resources found matching your criteria. Try adjusting your filters or search query.
                  </div>
                )}

                {filteredResourceItems.length > 0 && (
                  <div className="text-center mt-4">
                    <button className="btn style1">Load More</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Modal and Cookie Consent */}
      {showEmergencyModal && <EmergencyModal show={true} onClose={() => setShowEmergencyModal(false)} />}
      {showCookieConsent && <CookieConsent />}
    </div>
  );
};

export default ResourceDetails;