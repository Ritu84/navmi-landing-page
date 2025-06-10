import HeroSection from "@/components/hero-section/hero-section";
import BenefitsSection from "@/components/benefits-section/benefits-section";
import { type ReactElement } from "react";
import FAQsThree from "@/components/faqs";
import JoinUs from "@/components/join-us";
  
export default function Home(): ReactElement {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <JoinUs />
      <FAQsThree />
    </div>
  );
} 