import AboutMe from "@/components/AboutMePage/AboutMe/AboutMe";
import AboutMeHeroSection from "@/components/AboutMePage/AboutMeHeroSection/AboutMeHeroSection";import Experience from "@/components/AboutMePage/Experience/Experience";

import DevelopmentSteps from "@/components/HomePage/DevelopmentSteps/DevelopmentSteps";
import Testimonials from "@/components/Reusable/Testimonials/Testimonials";
import Tools from "@/components/Tools/Tools";
import React from "react";

const page = () => {
  return (
    <div className="dark:bg-primary-05 bg-white">
      <AboutMeHeroSection />
      <AboutMe />
      <Experience/>
      <Tools/>
      <DevelopmentSteps variant={true}/>
      <Testimonials />
    </div>
  );
};

export default page;
