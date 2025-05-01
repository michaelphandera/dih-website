// app/districts/page.tsx
"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// This is a redirector page - when users visit /districts, 
// we'll redirect them to a specific district or show a district listing
export default function DistrictsPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to a default district
    router.push('/districts/port-louis');
  }, [router]);

  // Show a loading state while the redirect happens
  return (
    <div className="content pt-5 text-center">
      <section className="ptb-100">
        <div className="container">
          <h2>Loading Districts...</h2>
          <p>You will be redirected to the district overview page shortly.</p>
          <div className="spinner-border text-primary mt-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </section>
    </div>
  );
}