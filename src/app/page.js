import Availability from "@/components/Availability";
import Deliver from "@/components/deliver";
import FeaturesServices from "@/components/featuresServices";
import Footer from "@/components/Footer";
import HeroSection from "@/components/heroSection";
import Order from "@/components/order";
import PatientJourney from "@/components/patient journey";
import Protecting from "@/components/Protecting";
import Technology from "@/components/Technology";
import Testimonial from "@/components/Testimonial";
import WhyChoose from "@/components/whyChoose";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChoose />
      <FeaturesServices />
      <Order />
      <Deliver />
      <Availability />
      <PatientJourney />
      <Testimonial />
      <Technology />
      <Protecting />
      <Footer />
    </>
  );
}
