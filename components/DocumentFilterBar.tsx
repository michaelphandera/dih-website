"use client";
import React from 'react';

interface DocumentFilterBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  districtFilter: string;
  setDistrictFilter: (district: string) => void;
}

const DocumentFilterBar: React.FC<DocumentFilterBarProps> = ({
  searchTerm,
  setSearchTerm,
  categoryFilter,
  setCategoryFilter,
  districtFilter,
  setDistrictFilter,
}) => {
  const categories = [
    'All Categories',
    'OFFICIAL',
    'PUBLIC',
    'DISTRICT'
  ];

  const districts = [
    'All Districts',
    'Plaines Wilhems',
    'Port Louis',
    'Flacq',
    'Rivière du Rempart',
    'Grand Port',
    'Savanne',
    'Black River',
    'Tamarin',
    'Moka',
    'Curepipe'
  ];

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    // Filter logic is handled in parent component
  };

  return (
    <div className="document-filter-bar bg-white p-4 mb-5 rounded shadow-sm">
      <form onSubmit={handleFilter}>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search documents by title, category, or keywords"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  paddingLeft: '40px',
                  height: '50px',
                  borderRadius: '25px',
                  border: '1px solid rgba(51, 143, 122, 0.3)'
                }}
              />
              <i
                className="ri-search-line"
                style={{
                  position: 'absolute',
                  left: '15px',
                  top: '17px',
                  color: '#338F7A'
                }}
              ></i>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-5 mb-3 mb-md-0">
                <select
                  className="form-select"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  style={{
                    height: '50px',
                    borderRadius: '25px',
                    border: '1px solid rgba(51, 143, 122, 0.3)',
                    paddingLeft: '20px'
                  }}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <select
                  className="form-select"
                  value={districtFilter}
                  onChange={(e) => setDistrictFilter(e.target.value)}
                  style={{
                    height: '50px',
                    borderRadius: '25px',
                    border: '1px solid rgba(51, 143, 122, 0.3)',
                    paddingLeft: '20px'
                  }}
                >
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <button
                  type="submit"
                  className="btn style1 w-100"
                  style={{ height: '50px', borderRadius: '25px' }}
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DocumentFilterBar;