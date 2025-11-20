import AboutMeSection from "@/components/HomePage/AboutMeSection/AboutMeSection";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import MyWorks from "@/components/HomePage/MyWorks/MyWorks";
import Services from "@/components/HomePage/Services/Services";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutMeSection/>
      <MyWorks/>
      <Services/>
    </div>
  
  );
}
