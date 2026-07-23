import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import DomainExpertiseSection from "@/components/DomainExpertiseSection";
import CourseSegmentationSection from "@/components/CourseSegmentationSection";
import WhoShouldJoinSection from "@/components/WhoShouldJoinSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DeliveryResultsSection from "@/components/DeliveryResultsSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClosingCtaSection from "@/components/ClosingCtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        <StatsSection />
        <PartnershipsSection />
        <DomainExpertiseSection />
        <CourseSegmentationSection />
        <WhoShouldJoinSection />
        <HowItWorksSection />
        <DeliveryResultsSection />
        <FAQSection />
        <TestimonialsSection />
        <ClosingCtaSection />
      </main>
      <Footer />
    </>
  );
}
