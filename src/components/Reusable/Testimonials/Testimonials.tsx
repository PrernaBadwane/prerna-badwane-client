import React from "react";
import VerticalMarquee from "./TestimonialsMarquee";
import Heading from "../Heading/Heading";
import { STROKES } from "@/assets";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="relative bg-primary-30 dark:bg-primary-05 py-10 lg:py-[100px] overflow-hidden">
      <div className="absolute overflow-hidden top-0 -left-[400px] hidden dark:block">
        <Image
          src={STROKES.stroke4}
          alt="Hero Light Background"
          className="object-cover overflow-hidden size-[826px] rotate-270"
          priority
        />
      </div>
      <div className="lg:px-0 max-w-5xl xl:max-w-[1200px] w-full mx-auto">
        <div className="lg:flex h-fit">
          <div className="px-5 md:px-10 w-full lg:w-[35%] xl:w-[45%] py-10 lg:py-[100px]">
            <Heading
              heading="About me"
              subheading="Crafting Digital Solutions That Drive Success"
            />
            <p></p>
          </div>
          <div className=" relative bg-primary-30 dark:hidden w-full h-fit lg:w-[65%] xl:w-[55%]">
            <div className="hidden lg:block absolute top-0 left-0 right-0 bg-gradient-30  w-full h-[278px] opacity-80 z-10" />
            <div className="hidden lg:block absolute bottom-0 left-0 right-0 bg-gradient-30  w-full h-[278px] opacity-80  rotate-180 z-10" />
            <VerticalMarquee />
          </div>
          <div className=" relative bg-primary-30  hidden dark:block w-full h-full lg:w-[65%] xl:w-[55%]">
            <div className="hidden lg:block absolute top-0 left-0 right-0 bg-gradient-20  w-full h-[278px] opacity-80 z-10" />
            <div className="hidden lg:block absolute bottom-0 left-0 right-0 bg-gradient-20  w-full h-[278px] opacity-80  rotate-180 z-10" />
            <VerticalMarquee />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
