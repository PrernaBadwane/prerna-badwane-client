import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import SecondaryButton from "@/components/Reusable/SecondaryButton/SecondaryButton";
import SkillStrip from "@/components/Shared/SkillStrip/SkillStrip";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[90vh] pt-10 font-Figtree">
      <Container>
        <Image
          src={IMAGES.heroBg}
          alt="Hero Background"
          fill
          className="object-cover overflow-hidden"
          priority
        />

        {/* Overlay */}
        <div className="absolute pt-10 inset-0  flex flex-col z-30 items-center justify-center text-white">
          <Image
            src={IMAGES.profile}
            alt="Profile"
            className="rounded-full size-[60px] sm:size-[90px] lg:size-[120px] border-3.5 border-white"
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
          <div className="flex mt-6  lg:mt-8">
            <SecondaryButton
              label="Book a free consultation"
              classnames="py-3 px-[27px] rounded-2xl"
              icon={ICONS.topRightArrow}
              iconClassname="py-2.5 px-2.5 rounded-2xl"
            />
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-10 w-full h-[113px] z-10"></div>
      <div className="absolute bottom-[-120] left-0 right-0 z-20 ">
        <SkillStrip />
      </div>
    </div>
  );
};

export default HeroSection;
