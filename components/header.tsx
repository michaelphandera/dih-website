// components/Header.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  // Function to check if a link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

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
                  <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/councils/agriculture" className={`nav-link ${pathname.startsWith('/councils') ? 'active' : ''}`} onClick={(e) => e.preventDefault()}>
                    Councils
                    <i className="ri-add-line" />
                  </Link>
                  <ul className="dropdown-menu ministry-dropdown">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <li className="nav-item">
                          <Link href="/councils/agriculture" className={`nav-link ${isActive('/councils/agriculture') ? 'active' : ''}`}>Agriculture</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/civil-service" className={`nav-link ${isActive('/councils/civil-service') ? 'active' : ''}`}>Civil Service</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/education" className={`nav-link ${isActive('/councils/education') ? 'active' : ''}`}>Education</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/external-affairs" className={`nav-link ${isActive('/councils/external-affairs') ? 'active' : ''}`}>External Affairs</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/disaster-management" className={`nav-link ${isActive('/councils/disaster-management') ? 'active' : ''}`}>Disaster Management</Link>
                        </li>
                      </div>
                      <div className="col-md-3">
                        <li className="nav-item">
                          <Link href="/councils/external-communications" className={`nav-link ${isActive('/councils/external-communications') ? 'active' : ''}`}>External Communications</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/finance" className={`nav-link ${isActive('/councils/finance') ? 'active' : ''}`}>Finance</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/fisheries" className={`nav-link ${isActive('/councils/fisheries') ? 'active' : ''}`}>Fisheries</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/gender-equality" className={`nav-link ${isActive('/councils/gender-equality') ? 'active' : ''}`}>Gender Equality</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/health" className={`nav-link ${isActive('/councils/health') ? 'active' : ''}`}>Health</Link>
                        </li>
                      </div>
                      <div className="col-md-3">
                        <li className="nav-item">
                          <Link href="/councils/home-affairs" className={`nav-link ${isActive('/councils/home-affairs') ? 'active' : ''}`}>Home Affairs</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/housing-lands" className={`nav-link ${isActive('/councils/housing-lands') ? 'active' : ''}`}>Housing and Lands</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/local-government" className={`nav-link ${isActive('/councils/local-government') ? 'active' : ''}`}>Local Government</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/oceanography" className={`nav-link ${isActive('/councils/oceanography') ? 'active' : ''}`}>Oceanography</Link>
                        </li>
                      </div>
                      <div className="col-md-3">
                        <li className="nav-item">
                          <Link href="/councils/public-infrastructure" className={`nav-link ${isActive('/councils/public-infrastructure') ? 'active' : ''}`}>Public Infrastructure</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/public-utilities" className={`nav-link ${isActive('/councils/public-utilities') ? 'active' : ''}`}>Public Utilities</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/social-security" className={`nav-link ${isActive('/councils/social-security') ? 'active' : ''}`}>Social Security</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/councils/tourism" className={`nav-link ${isActive('/councils/tourism') ? 'active' : ''}`}>Tourism</Link>
                        </li>
                      </div>
                    </div>
                    <div className="dropdown-divider" />
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/districts/port-louis" className={`nav-link ${pathname.startsWith('/districts') ? 'active' : ''}`} onClick={(e) => e.preventDefault()}>
                    Districts
                    <i className="ri-add-line" />
                  </Link>
                  <ul className="dropdown-menu district-dropdown">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <li className="nav-item">
                          <Link href="/districts/port-louis" className={`nav-link ${isActive('/districts/port-louis') ? 'active' : ''}`}>Port Louis</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/black-river" className={`nav-link ${isActive('/districts/black-river') ? 'active' : ''}`}>Black River</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/flacq" className={`nav-link ${isActive('/districts/flacq') ? 'active' : ''}`}>Flacq</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/grand-port" className={`nav-link ${isActive('/districts/grand-port') ? 'active' : ''}`}>Grand Port</Link>
                        </li>
                      </div>
                      <div className="col-md-4">
                        <li className="nav-item">
                          <Link href="/districts/moka" className={`nav-link ${isActive('/districts/moka') ? 'active' : ''}`}>Moka</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/pamplemousses" className={`nav-link ${isActive('/districts/pamplemousses') ? 'active' : ''}`}>Pamplemousses</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/plaines-wilhems" className={`nav-link ${isActive('/districts/plaines-wilhems') ? 'active' : ''}`}>Plaines Wilhems</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/riviere-du-rempart" className={`nav-link ${isActive('/districts/riviere-du-rempart') ? 'active' : ''}`}>Rivière du Rempart</Link>
                        </li>
                      </div>
                      <div className="col-md-4">
                        <li className="nav-item">
                          <Link href="/districts/savanne" className={`nav-link ${isActive('/districts/savanne') ? 'active' : ''}`}>Savanne</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/rodrigues" className={`nav-link ${isActive('/districts/rodrigues') ? 'active' : ''}`}>Rodrigues</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/agalega" className={`nav-link ${isActive('/districts/agalega') ? 'active' : ''}`}>Agalega</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/districts/cargados-carajos" className={`nav-link ${isActive('/districts/cargados-carajos') ? 'active' : ''}`}>Cargados Carajos</Link>
                        </li>
                      </div>
                    </div>
                    <div className="dropdown-divider" />
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/districts/rodrigues" className={`nav-link ${pathname.includes('/districts/rodrigues') || pathname.includes('/districts/agalega') || pathname.includes('/districts/cargados-carajos') || pathname.includes('/districts/tromelin') ? 'active' : ''}`} onClick={(e) => e.preventDefault()}>
                    Outer Islands
                    <i className="ri-add-line" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/districts/rodrigues" className={`nav-link ${isActive('/districts/rodrigues') ? 'active' : ''}`}>Rodrigues Island</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/districts/agalega" className={`nav-link ${isActive('/districts/agalega') ? 'active' : ''}`}>Agaléga Islands</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/districts/cargados-carajos" className={`nav-link ${isActive('/districts/cargados-carajos') ? 'active' : ''}`}>Saint Brandon</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/districts/tromelin" className={`nav-link ${isActive('/districts/tromelin') ? 'active' : ''}`}>Tromelin Island</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/resources/documents" className={`nav-link ${pathname.startsWith('/resources') ? 'active' : ''}`} onClick={(e) => e.preventDefault()}>
                    Resources
                    <i className="ri-add-line" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/resources/infographics" className={`nav-link ${isActive('/resources/infographics') ? 'active' : ''}`}>Infographics</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/documents" className={`nav-link ${isActive('/resources/documents') ? 'active' : ''}`}>Documents</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/maps" className={`nav-link ${isActive('/resources/maps') ? 'active' : ''}`}>Interactive Maps</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/forms" className={`nav-link ${isActive('/resources/forms') ? 'active' : ''}`}>Forms</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/resources/manuals" className={`nav-link ${isActive('/resources/manuals') ? 'active' : ''}`}>User Manuals</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/weather" className={`nav-link ${isActive('/weather') ? 'active' : ''}`}>Weather</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/weather" className={`nav-link ${isActive('/weather') ? 'active' : ''}`}>
                     Weather
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                    Contact Us
                  </Link>
                </li>
              </ul>
              {/* <div className="other-options md-none">
                <div className="option-item">
                  <button className="searchbtn d-xl-none"><i className="ri-search-line" /></button>
                  <div className="searchbox lg-none">
                    <input type="search" placeholder="Search for resources, districts..." />
                    <button><i className="flaticon-search-1" /></button>
                  </div>
                </div>
              </div> */}
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