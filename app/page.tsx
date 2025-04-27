
import { HeroSection } from "@/components/hero-section"
import PromoSection  from "@/components/PromoSection"
import DocumentSection from "@/components/DocumentSection"
import InfographicsSection from "@/components/InfographicsSection"
import StatisticsSectionWrapper from "@/components/StatisticsSectionWrapper"
import DisasterDashboardWrapper from "@/components/DisasterDashboardWrapper"
import MinistriesSection from "@/components/MinistriesSection"
import UpdatesSection from "@/components/UpdatesSection"
import EmergencyPortalSection from "@/components/EmergencyPortalSection"
import FormAccessSection from "@/components/FormAccessSection"
import CommunityCTASection from "@/components/CommunityCTASection"
import PromoVideoSection from "@/components/PromoVideoSection"
import EmergencyModal from "@/components/EmergencyModal"
import CookieConsent from "@/components/CookieConsent"
import AboutSection from "@/components/AboutSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <PromoSection />
      <AboutSection />
      <DocumentSection />
      <InfographicsSection />
      <StatisticsSectionWrapper />
      <DisasterDashboardWrapper />
      <MinistriesSection />
      <UpdatesSection />
      <EmergencyPortalSection />
      <FormAccessSection />
      <CommunityCTASection />
      <PromoVideoSection />
      <EmergencyModal />
      <CookieConsent />
    </>
  )
}
