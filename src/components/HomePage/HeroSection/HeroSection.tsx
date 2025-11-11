import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import SkillStrip from "@/components/Shared/SkillStrip/SkillStrip";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[90vh] font-Figtree">
      <Container>
        <Image
          src={IMAGES.heroBg}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col z-20 items-center justify-center text-white">
          <Image
            src={IMAGES.profile}
            alt="Profile"
            className="rounded-full size-[60px] sm:size-[90px] lg:size-[120px] mb-4 border-3.5 border-white"
          />
          <p className="text-2xl sm:text-[44px] lg:text-[55px] font-light tracking-[2.2px]">
            Hi, I&apos;m Prerna Badwane{" "}
          </p>
          <p className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-[2.2px] text-center leading-10 sm:leading-12 lg:leading-18">
            Empowering Businesses with <br />
            Smart Digital Solutions.
          </p>
          <p className="mt-6 text-base lg:text-lg max-w-lg text-center">
            I help businesses optimize and scale operations through
            technology-driven solutions.
          </p>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-10 w-full h-[113px] z-20"></div>
      <div className="absolute bottom-[-120] left-0 right-0 z-20 ">
        <SkillStrip />
      </div>
    </div>
  );
};

export default HeroSection;
