import AboutMeSection from "@/components/HomePage/AboutMeSection/AboutMeSection";
import DevelopmentSteps from "@/components/HomePage/DevelopmentSteps/DevelopmentSteps";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import MyWorks from "@/components/HomePage/MyWorks/MyWorks";
import Services from "@/components/HomePage/Services/Services";

export default function Home() {
  return (
    <div className="dark:bg-primary-05">
      <HeroSection/>
      <AboutMeSection/>
      <MyWorks/>
      <Services/>
      <DevelopmentSteps/>
    </div>
  
  );
}
