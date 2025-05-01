import React from 'react';

type ResourceFilterSidebarProps = {
  formatFilter: string[];
  yearFilter: string[];
  tagFilter: string[];
  councilFilter: string[];
  districtFilter: string[];
  partnerFilter: string[];
  disasterTypeFilter: string[];
  populationFilter: string[];
  onFormatFilterChange: (format: string) => void;
  onYearFilterChange: (year: string) => void;
  onTagFilterChange: (tag: string) => void;
  onCouncilFilterChange: (council: string) => void;
  onDistrictFilterChange: (district: string) => void;
  onPartnerFilterChange: (partner: string) => void;
  onDisasterTypeFilterChange: (disasterType: string) => void;
  onPopulationFilterChange: (population: string) => void;
  applyFilters: () => void;
  resetFilters: () => void;
};

const ResourceFilterSidebar: React.FC<ResourceFilterSidebarProps> = ({
  formatFilter,
  yearFilter,
  tagFilter,
  councilFilter,
  districtFilter,
  partnerFilter,
  disasterTypeFilter,
  populationFilter,
  onFormatFilterChange,
  onYearFilterChange,
  onTagFilterChange,
  onCouncilFilterChange,
  onDistrictFilterChange,
  onPartnerFilterChange,
  onDisasterTypeFilterChange,
  onPopulationFilterChange,
  applyFilters,
  resetFilters
}) => {
  return (
    <div className="resource-filter-sidebar p-3 rounded shadow-sm" style={{ top: '90px', backgroundColor: 'white' }}>
      <h5 className="border-bottom pb-2 mb-3">Filter Resources</h5>

      {/* Format Filter */}
      <div className="filter-section mb-3">
        <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#formatFilters" aria-expanded="true">
          <h6 className="d-flex justify-content-between align-items-center mb-0">
            Formats
            <i className="ri-arrow-down-s-line"></i>
          </h6>
        </div>
        <div id="formatFilters" className="collapse show">
          <div className="filter-body pt-2">
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="format-all"
                checked={formatFilter.includes('all')}
                onChange={() => onFormatFilterChange('all')}
              />
              <label className="form-check-label" htmlFor="format-all">
                All Formats
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="format-pdf"
                checked={formatFilter.includes('pdf')}
                onChange={() => onFormatFilterChange('pdf')}
              />
              <label className="form-check-label" htmlFor="format-pdf">
                PDF
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="format-docx"
                checked={formatFilter.includes('docx')}
                onChange={() => onFormatFilterChange('docx')}
              />
              <label className="form-check-label" htmlFor="format-docx">
                DOCX
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="format-image"
                checked={formatFilter.includes('image')}
                onChange={() => onFormatFilterChange('image')}
              />
              <label className="form-check-label" htmlFor="format-image">
                Images (JPG/PNG)
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="format-interactive"
                checked={formatFilter.includes('interactive')}
                onChange={() => onFormatFilterChange('interactive')}
              />
              <label className="form-check-label" htmlFor="format-interactive">
                Interactive
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Council Filter */}
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
                id="council-all"
                checked={councilFilter.includes('all')}
                onChange={() => onCouncilFilterChange('all')}
              />
              <label className="form-check-label" htmlFor="council-all">
                All Councils
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="council-agriculture"
                checked={councilFilter.includes('agriculture')}
                onChange={() => onCouncilFilterChange('agriculture')}
              />
              <label className="form-check-label" htmlFor="council-agriculture">
                Agriculture
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="council-health"
                checked={councilFilter.includes('health')}
                onChange={() => onCouncilFilterChange('health')}
              />
              <label className="form-check-label" htmlFor="council-health">
                Health
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="council-education"
                checked={councilFilter.includes('education')}
                onChange={() => onCouncilFilterChange('education')}
              />
              <label className="form-check-label" htmlFor="council-education">
                Education
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="council-infrastructure"
                checked={councilFilter.includes('infrastructure')}
                onChange={() => onCouncilFilterChange('infrastructure')}
              />
              <label className="form-check-label" htmlFor="council-infrastructure">
                Infrastructure
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* District Filter */}
      <div className="filter-section mb-3">
        <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#districtFilters" aria-expanded="false">
          <h6 className="d-flex justify-content-between align-items-center mb-0">
            Districts
            <i className="ri-arrow-down-s-line"></i>
          </h6>
        </div>
        <div id="districtFilters" className="collapse">
          <div className="filter-body pt-2">
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="district-all"
                checked={districtFilter.includes('all')}
                onChange={() => onDistrictFilterChange('all')}
              />
              <label className="form-check-label" htmlFor="district-all">
                All Districts
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="district-port-louis"
                checked={districtFilter.includes('port-louis')}
                onChange={() => onDistrictFilterChange('port-louis')}
              />
              <label className="form-check-label" htmlFor="district-port-louis">
                Port Louis
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="district-black-river"
                checked={districtFilter.includes('black-river')}
                onChange={() => onDistrictFilterChange('black-river')}
              />
              <label className="form-check-label" htmlFor="district-black-river">
                Black River
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="district-flacq"
                checked={districtFilter.includes('flacq')}
                onChange={() => onDistrictFilterChange('flacq')}
              />
              <label className="form-check-label" htmlFor="district-flacq">
                Flacq
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="district-moka"
                checked={districtFilter.includes('moka')}
                onChange={() => onDistrictFilterChange('moka')}
              />
              <label className="form-check-label" htmlFor="district-moka">
                Moka
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Organization Filter */}
      <div className="filter-section mb-3">
        <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#partnerFilters" aria-expanded="false">
          <h6 className="d-flex justify-content-between align-items-center mb-0">
            Partner Organizations
            <i className="ri-arrow-down-s-line"></i>
          </h6>
        </div>
        <div id="partnerFilters" className="collapse">
          <div className="filter-body pt-2">
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="partner-all"
                checked={partnerFilter.includes('all')}
                onChange={() => onPartnerFilterChange('all')}
              />
              <label className="form-check-label" htmlFor="partner-all">
                All Partners
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="partner-usaid"
                checked={partnerFilter.includes('usaid')}
                onChange={() => onPartnerFilterChange('usaid')}
              />
              <label className="form-check-label" htmlFor="partner-usaid">
                USAID
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="partner-undp"
                checked={partnerFilter.includes('undp')}
                onChange={() => onPartnerFilterChange('undp')}
              />
              <label className="form-check-label" htmlFor="partner-undp">
                UNDP
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="partner-red-cross"
                checked={partnerFilter.includes('red-cross')}
                onChange={() => onPartnerFilterChange('red-cross')}
              />
              <label className="form-check-label" htmlFor="partner-red-cross">
                Red Cross
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="partner-world-bank"
                checked={partnerFilter.includes('world-bank')}
                onChange={() => onPartnerFilterChange('world-bank')}
              />
              <label className="form-check-label" htmlFor="partner-world-bank">
                World Bank
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
                onChange={() => onYearFilterChange('all')}
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
                onChange={() => onYearFilterChange('2025')}
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
                onChange={() => onYearFilterChange('2024')}
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
                onChange={() => onYearFilterChange('2023')}
              />
              <label className="form-check-label" htmlFor="year-2023">
                2023
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Tags Filter */}
      <div className="filter-section mb-3">
        <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#tagFilters" aria-expanded="false">
          <h6 className="d-flex justify-content-between align-items-center mb-0">
            Tags
            <i className="ri-arrow-down-s-line"></i>
          </h6>
        </div>
        <div id="tagFilters" className="collapse">
          <div className="filter-body pt-2">
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="tag-all"
                checked={tagFilter.includes('all')}
                onChange={() => onTagFilterChange('all')}
              />
              <label className="form-check-label" htmlFor="tag-all">
                All Tags
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="tag-safety"
                checked={tagFilter.includes('safety')}
                onChange={() => onTagFilterChange('safety')}
              />
              <label className="form-check-label" htmlFor="tag-safety">
                Safety
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="tag-preparedness"
                checked={tagFilter.includes('preparedness')}
                onChange={() => onTagFilterChange('preparedness')}
              />
              <label className="form-check-label" htmlFor="tag-preparedness">
                Preparedness
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="tag-response"
                checked={tagFilter.includes('response')}
                onChange={() => onTagFilterChange('response')}
              />
              <label className="form-check-label" htmlFor="tag-response">
                Response
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="tag-recovery"
                checked={tagFilter.includes('recovery')}
                onChange={() => onTagFilterChange('recovery')}
              />
              <label className="form-check-label" htmlFor="tag-recovery">
                Recovery
              </label>
            </div>
          </div>
        </div>
      </div>



      {/* Disaster Type Filter */}
      <div className="filter-section mb-3">
        <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#disasterTypeFilters" aria-expanded="false">
          <h6 className="d-flex justify-content-between align-items-center mb-0">
            Disaster Types
            <i className="ri-arrow-down-s-line"></i>
          </h6>
        </div>
        <div id="disasterTypeFilters" className="collapse">
          <div className="filter-body pt-2">
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="disaster-all"
                checked={disasterTypeFilter.includes('all')}
                onChange={() => onDisasterTypeFilterChange('all')}
              />
              <label className="form-check-label" htmlFor="disaster-all">
                All Disaster Types
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="disaster-cyclone"
                checked={disasterTypeFilter.includes('cyclone')}
                onChange={() => onDisasterTypeFilterChange('cyclone')}
              />
              <label className="form-check-label" htmlFor="disaster-cyclone">
                Cyclones
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="disaster-flood"
                checked={disasterTypeFilter.includes('flood')}
                onChange={() => onDisasterTypeFilterChange('flood')}
              />
              <label className="form-check-label" htmlFor="disaster-flood">
                Floods
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="disaster-drought"
                checked={disasterTypeFilter.includes('drought')}
                onChange={() => onDisasterTypeFilterChange('drought')}
              />
              <label className="form-check-label" htmlFor="disaster-drought">
                Droughts
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="disaster-landslide"
                checked={disasterTypeFilter.includes('landslide')}
                onChange={() => onDisasterTypeFilterChange('landslide')}
              />
              <label className="form-check-label" htmlFor="disaster-landslide">
                Landslides
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Affected Population Filter */}
      <div className="filter-section mb-3">
        <div className="filter-header" data-bs-toggle="collapse" data-bs-target="#populationFilters" aria-expanded="false">
          <h6 className="d-flex justify-content-between align-items-center mb-0">
            Affected Population
            <i className="ri-arrow-down-s-line"></i>
          </h6>
        </div>
        <div id="populationFilters" className="collapse">
          <div className="filter-body pt-2">
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="population-all"
                checked={populationFilter.includes('all')}
                onChange={() => onPopulationFilterChange('all')}
              />
              <label className="form-check-label" htmlFor="population-all">
                All Populations
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="population-elderly"
                checked={populationFilter.includes('elderly')}
                onChange={() => onPopulationFilterChange('elderly')}
              />
              <label className="form-check-label" htmlFor="population-elderly">
                Elderly
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="population-children"
                checked={populationFilter.includes('children')}
                onChange={() => onPopulationFilterChange('children')}
              />
              <label className="form-check-label" htmlFor="population-children">
                Children
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="population-disabilities"
                checked={populationFilter.includes('disabilities')}
                onChange={() => onPopulationFilterChange('disabilities')}
              />
              <label className="form-check-label" htmlFor="population-disabilities">
                Persons with Disabilities
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="population-pregnant"
                checked={populationFilter.includes('pregnant')}
                onChange={() => onPopulationFilterChange('pregnant')}
              />
              <label className="form-check-label" htmlFor="population-pregnant">
                Pregnant Women
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
  );
};

export default ResourceFilterSidebar;
