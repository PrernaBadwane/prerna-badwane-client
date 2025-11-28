import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import React from "react";
import DevelopmentStepsSwiper from "./DevelopmentStepsSwiper";

const DevelopmentSteps = () => {
  return (
    <div className="bg-primary-30 dark:bg-primary-05 md:py-[100px]">
      <Container>
        <div className="flex flex-col md:flex-row gap-4 items-start xs:items-center md:items-end justify-between z-10 relative pb-[70px]">
          <Heading
            heading="How it works"
            subheading="Building digital solutions with purpose"
            alignText="max-w-lg text-left xs:text-center md:text-left"
            alignment="items-start xs:items-center md:items-start"
          />
          <div className="flex flex-col xs:items-center md:items-end max-w-md">
            <p className="text-neutral-50 dark:text-white xs:text-center md:text-left text-sm lg:text-lg">
              A few examples of how I build digital experiences that are simple,
              scalable, and built for impact.
            </p>
          </div>
        </div>
        
      </Container>
      <DevelopmentStepsSwiper/>
    </div>
  );
};

export default DevelopmentSteps;
