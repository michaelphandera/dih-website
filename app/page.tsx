
'use client';

import { Suspense, lazy, useEffect, useState } from 'react';
import { HeroSection } from "@/components/hero-section";
import PromoSection from "@/components/PromoSection";
import AboutSection from "@/components/AboutSection";
import DocumentSection from "@/components/DocumentSection";
import InfographicsSection from "@/components/InfographicsSection";
import StatisticsSectionWrapper from "@/components/StatisticsSectionWrapper";
import DisasterDashboardWrapper from "@/components/DisasterDashboardWrapper";
import MinistriesSection from "@/components/MinistriesSection";
import UpdatesSection from "@/components/UpdatesSection";
import EmergencyPortalSection from "@/components/EmergencyPortalSection";
import FormAccessSection from "@/components/FormAccessSection";
import CommunityCTASection from "@/components/CommunityCTASection";
import PromoVideoSection from "@/components/PromoVideoSection";
import EmergencyModal from "@/components/EmergencyModal";
import CookieConsent from "@/components/CookieConsent";
import PageTransition from "@/components/PageTransition";
import SectionLoader from "@/components/SectionLoader";
import { useLoading } from "@/contexts/LoadingContext";

export default function Home() {
  // Loaders removed as requested

  return (
    <PageTransition>
      <HeroSection />
      <div id="promo-section-container" className="mb-5">
        <PromoSection />
      </div>
      <AboutSection />

      <Suspense fallback={<SectionLoader title="Documents" subtitle="Loading document resources..." />}>
        <DocumentSection />
      </Suspense>

      <Suspense fallback={<SectionLoader title="Infographics" subtitle="Loading infographic resources..." />}>
        <InfographicsSection />
      </Suspense>

      <StatisticsSectionWrapper />
      <DisasterDashboardWrapper />

      <Suspense fallback={<SectionLoader title="Ministries" subtitle="Loading ministry information..." />}>
        <MinistriesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader title="Updates" subtitle="Loading latest updates..." />}>
        <UpdatesSection />
      </Suspense>

      <EmergencyPortalSection />
      <FormAccessSection />
      <CommunityCTASection />
      <PromoVideoSection />
      <EmergencyModal />
      <CookieConsent />
    </PageTransition>
  );
}
