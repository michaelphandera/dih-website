// components/Header.jsx
"use client";

import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="header-wrap">
      <div className="header-bottom">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/" className="navbar-brand">
              <img className="logo-light" src="/img/flogo.png" alt="National Disaster Management Center" />
            </Link>
            <div className="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
              <div className="menu-close d-lg-none">
                <a href="javascript:void(0)"> <i className="ri-close-line" /></a>
              </div>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
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
                          <Link href="/councils/agriculture" className="nav-link">Agriculture</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/civil-service" className="nav-link">Civil Service</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/education" className="nav-link">Education</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/external-affairs" className="nav-link">External Affairs</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/disaster-management" className="nav-link">Disaster Management</Link>
                        </li>
                      </div>
                      <div className="col-md-3">
                        <li className="nav-item">
                          <Link href="/councils/external-communications" className="nav-link">External Communications</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/finance" className="nav-link">Finance</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/fisheries" className="nav-link">Fisheries</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/gender-equality" className="nav-link">Gender Equality</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/health" className="nav-link">Health</Link>
                        </li>
                      </div>
                      <div className="col-md-3">
                        <li className="nav-item">
                          <Link href="/councils/home-affairs" className="nav-link">Home Affairs</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/housing-lands" className="nav-link">Housing and Lands</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/local-government" className="nav-link">Local Government</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/oceanography" className="nav-link">Oceanography</Link>
                        </li>
                      </div>
                      <div className="col-md-3">
                        <li className="nav-item">
                          <Link href="/councils/public-infrastructure" className="nav-link">Public Infrastructure</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/public-utilities" className="nav-link">Public Utilities</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/social-security" className="nav-link">Social Security</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/tourism" className="nav-link">Tourism</Link>
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
                          <Link href="/districts/port-louis" className="nav-link">Port Louis</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/black-river" className="nav-link">Black River</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/flacq" className="nav-link">Flacq</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/grand-port" className="nav-link">Grand Port</Link>
                        </li>
                      </div>
                      <div className="col-md-4">
                        <li className="nav-item">
                          <Link href="/districts/moka" className="nav-link">Moka</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/pamplemousses" className="nav-link">Pamplemousses</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/plaines-wilhems" className="nav-link">Plaines Wilhems</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/riviere-du-rempart" className="nav-link">Rivière du Rempart</Link>
                        </li>
                      </div>
                      <div className="col-md-4">
                        <li className="nav-item">
                          <Link href="/districts/savanne" className="nav-link">Savanne</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/rodrigues" className="nav-link">Rodrigues</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/agalega" className="nav-link">Agalega</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/cargados-carajos" className="nav-link">Cargados Carajos</Link>
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
                      <Link href="/districts/rodrigues" className="nav-link">Rodrigues Island</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/districts/agalega" className="nav-link">Agaléga Islands</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/districts/cargados-carajos" className="nav-link">Saint Brandon</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/districts/tromelin" className="nav-link">Tromelin Island</Link>
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
                      <Link href="/resources/infographics" className="nav-link">Infographics</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/documents" className="nav-link">Documents</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/maps" className="nav-link">Interactive Maps</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/forms" className="nav-link">Forms</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/manuals" className="nav-link">User Manuals</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link">
                    Contact Us
                  </Link>
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
  );
}