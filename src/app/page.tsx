import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";
import WhyBoomRocks from "../components/WhyBoomRocks";
import GetStartedSteps from "../components/GetStartedSteps";
import WhoWeAre from "../components/WhoWeAre";
import VirtualConsultations from "../components/VirtualConsultations";
import ClientTestimonials from "../components/ClientTestimonials";
import PricingSection from "../components/PricingSection";
import theme from "../components/theme";

export default function Home() {
  return (
    <main className={`${theme.background} min-h-screen w-full`}>
      <HeroSection />
      <VideoSection />
      <WhyBoomRocks />
      <GetStartedSteps />
      <WhoWeAre />
      <VirtualConsultations />
      <ClientTestimonials />
      <PricingSection />
    </main>
  );
}
