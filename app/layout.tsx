import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "@/styles/dc.css"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"
import Scripts from "./script"

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
      </head>
      <body>
        <Header />
        <main className="min-vh-100">
          {children}
        </main>
        <Footer />
        <Scripts />

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        />

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
      </body>
    </html>
  )
}
