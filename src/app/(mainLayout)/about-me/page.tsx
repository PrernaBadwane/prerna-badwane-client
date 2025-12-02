import AboutMe from "@/components/AboutMePage/AboutMe/AboutMe";
import AboutMeHeroSection from "@/components/AboutMePage/AboutMeHeroSection/AboutMeHeroSection";
import DevelopmentSteps from "@/components/HomePage/DevelopmentSteps/DevelopmentSteps";
import Testimonials from "@/components/Reusable/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="dark:bg-primary-05 bg-white">
      <AboutMeHeroSection />
      <AboutMe />
      <DevelopmentSteps />
      <Testimonials />
    </div>
  );
};

export default page;
