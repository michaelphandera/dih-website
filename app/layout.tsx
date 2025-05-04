import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "@/styles/dc.css"
import { Header } from "@/components/header"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import Footer from "@/components/footer"
import Script from "next/script"
import Scripts from "./script"
import { LoadingProvider } from "@/contexts/LoadingContext"

export const metadata: Metadata = {
  title: "NDRRMC Digital",
  description: "National Disaster Risk Reduction and Management Council Digital Platform",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-bs-theme="light">
      <head>
        {/* Inline style to remove underlines from all links */}
        <style>
          {`
            a, a:hover, a:focus, a:active, a:visited {
              text-decoration: none !important;
            }
          `}
        </style>

        {/* Inline script to hide loaders immediately */}
        <script dangerouslySetInnerHTML={{ __html: `
          // Hide loaders as early as possible
          (function() {
            function hideLoaders() {
              var loaders = document.getElementsByClassName('page-loader-overlay');
              for (var i = 0; i < loaders.length; i++) {
                if (loaders[i]) loaders[i].style.display = 'none';
              }
            }
            hideLoaders();
            document.addEventListener('DOMContentLoaded', hideLoaders);
          })();
        `}} />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/dc@4.2.7/dist/style/dc.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="/css/custom-active.css"
        />
        <link
          rel="stylesheet"
          href="/css/loader.css"
        />
      </head>
      <body>
        <LoadingProvider>
          <ThemeSwitcher />
          <Header />
          <main className="min-vh-100">
            {children}
          </main>
          <Footer />
          <Scripts />
        </LoadingProvider>

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        />

        {/* Initialize Bootstrap Components */}
        <Script id="bootstrap-init">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              // Initialize all tooltips
              var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
              var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
              });

              // Initialize all popovers
              var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
              var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
                return new bootstrap.Popover(popoverTriggerEl);
              });

              // Initialize all tabs
              var tabElList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]'));
              tabElList.forEach(function(tabEl) {
                tabEl.addEventListener('click', function (event) {
                  event.preventDefault();
                  new bootstrap.Tab(tabEl).show();
                });
              });
            });
          `}
        </Script>

        {/* AOS Animation */}
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        <Script id="aos-init">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              AOS.init({
                duration: 1000,
                once: true
              });
            });
          `}
        </Script>

        {/* D3.js and DC.js */}
        <Script src="https://d3js.org/d3.v7.min.js" />
        <Script src="https://unpkg.com/crossfilter2@1.5.4/crossfilter.min.js" />
        <Script src="https://unpkg.com/dc@4.2.7/dist/dc.min.js" />

        {/* Leaflet */}
        <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
        />

        {/* Custom Loader Script */}
        <Script src="/js/loader.js" />

        {/* Immediate script to hide loaders */}
        <Script id="hide-loaders" strategy="afterInteractive">
          {`
            // Hide all loaders
            var loaders = document.querySelectorAll('.page-loader-overlay, .spinner-border, .section-loader');
            for (var i = 0; i < loaders.length; i++) {
              if (loaders[i] && loaders[i].style) {
                loaders[i].style.display = 'none';
              }
            }
          `}
        </Script>
      </body>
    </html>
  )
}
