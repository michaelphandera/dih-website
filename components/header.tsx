"use client"
import React, { useState, useRef, useEffect } from "react"

export function Header() {
  return (
    <header className="header-wrap">
      <div className="header-bottom">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="#">
              <img className="logo-light" src="/img/flogo.png" alt="National Disaster Management Center" />
            </a>
            <div className="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
              <div className="menu-close d-lg-none">
                <a href="javascript:void(0)"> <i className="ri-close-line" /></a>
              </div>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Councils
                    <i className="ri-add-line" />
                  </a>
                  <ul className="dropdown-menu ministry-dropdown">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Agriculture</a>
                        </li>
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Civil Service</a>
                        </li>
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Education</a>
                        </li>
                        <li className="nav-item">
                          <a href="councils" className="nav-link">External Affairs</a>
                        </li>
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Disaster Management</a>
                        </li>
                      </div>
                      <div className="col-md-3">
                        <li className="nav-item">
                          <a href="councils" className="nav-link">External Communications</a>
                        </li>
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Finance</a>
                        </li>
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Fisheries</a>
                        </li>
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Gender Equality</a>
                        </li>
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Health</a>
                        </li>
                      </div>
                      <div className="col-md-3">
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Home Affairs</a>
                        </li>
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Housing and Lands</a>
                        </li>
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Local Government</a>
                        </li>
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Oceanography</a>
                        </li>
                      </div>
                      <div className="col-md-3">
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Public Infrastructure</a>
                        </li>
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Public Utilities</a>
                        </li>
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Social Security</a>
                        </li>
                        <li className="nav-item">
                          <a href="councils" className="nav-link">Tourism</a>
                        </li>
                      </div>
                    </div>
                    <div className="dropdown-divider" />
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Districts
                    <i className="ri-add-line" />
                  </a>
                  <ul className="dropdown-menu district-dropdown">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <li className="nav-item">
                          <a href="districts" className="nav-link">Port Louis</a>
                        </li>
                        <li className="nav-item">
                          <a href="districts" className="nav-link">Black River</a>
                        </li>
                        <li className="nav-item">
                          <a href="districts" className="nav-link">Flacq</a>
                        </li>
                        <li className="nav-item">
                          <a href="districts" className="nav-link">Grand Port</a>
                        </li>
                      </div>
                      <div className="col-md-4">
                        <li className="nav-item">
                          <a href="districts" className="nav-link">Moka</a>
                        </li>
                        <li className="nav-item">
                          <a href="districts" className="nav-link">Pamplemousses</a>
                        </li>
                        <li className="nav-item">
                          <a href="districts" className="nav-link">Plaines Wilhems</a>
                        </li>
                        <li className="nav-item">
                          <a href="districts" className="nav-link">Rivière du Rempart</a>
                        </li>
                      </div>
                      <div className="col-md-4">
                        <li className="nav-item">
                          <a href="districts" className="nav-link">Savanne</a>
                        </li>
                        <li className="nav-item">
                          <a href="districts" className="nav-link">Rodrigues</a>
                        </li>
                        <li className="nav-item">
                          <a href="districts" className="nav-link">Agalega</a>
                        </li>
                        <li className="nav-item">
                          <a href="districts" className="nav-link">Cargados Carajos</a>
                        </li>
                      </div>
                    </div>
                    <div className="dropdown-divider" />
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Outer Islands
                    <i className="ri-add-line" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="districts" className="nav-link">Rodrigues Island</a>
                    </li>
                    <li className="nav-item">
                      <a href="districts" className="nav-link">Agaléga Islands</a>
                    </li>
                    <li className="nav-item">
                      <a href="districts" className="nav-link">Saint Brandon</a>
                    </li>
                    <li className="nav-item">
                      <a href="districts" className="nav-link">Tromelin Island</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Resources
                    <i className="ri-add-line" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="documents" className="nav-link">Infographics</a>
                    </li>
                    <li className="nav-item">
                      <a href="documents" className="nav-link">Documents</a>
                    </li>
                    <li className="nav-item">
                      <a href="documents" className="nav-link">Interactive Maps</a>
                    </li>
                    <li className="nav-item">
                      <a href="documents" className="nav-link">Forms</a>
                    </li>
                    <li className="nav-item">
                      <a href="documents" className="nav-link">User Manuals</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="other-options md-none">
                <div className="option-item">
                  <button className="searchbtn d-xl-none"><i className="ri-search-line" /></button>
                  <div className="searchbox lg-none">
                    <input type="search" placeholder="Search for resources, districts..." />
                    <button><i className="flaticon-search-1" /></button>
                  </div>
                </div>
              </div>
              <img src="/img/ddrc.png" className="other-options md-none" width={70} />
            </div>
          </nav>
          <div className="search-area">
            <input type="search" placeholder="Search for resources, districts..." />
            <button type="submit"><i className="ri-search-line" /></button>
          </div>
          <div className="mobile-bar-wrap">
            <button className="searchbtn d-lg-none"><i className="ri-search-line" /></button>
            <div className="mobile-menu d-lg-none">
              <a href="javascript:void(0)"><i className="ri-menu-line" /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}