import { IMAGES, STROKES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import SecondaryButton from "@/components/Reusable/SecondaryButton/SecondaryButton";
import SkillStrip from "@/components/Shared/SkillStrip/SkillStrip";
import Image from "next/image";
import React from "react";
import { IoArrowUpOutline } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="relative">
      {" "}
      <div className="relative overflow-hidden w-full h-[95vh] pt-10 font-Figtree">
        <div className="absolute overflow-hidden -top-40 -right-[180px] dark:hidden">
          <Image
            src={STROKES.stroke4}
            alt="Hero Light Background"
            className="object-cover overflow-hidden size-[626px]"
            priority
          />
        </div>
        <div className="absolute overflow-hidden -top-[180px] -left-[200px] dark:hidden">
          <Image
            src={STROKES.stroke4}
            alt="Hero Light Background"
            className="object-cover overflow-hidden size-[626px] rotate-100"
            priority
          />
        </div>

        <Image
          src={IMAGES.heroBg}
          alt="Hero Dark Background"
          fill
          className="absolute object-cover hidden dark:block"
          priority
        />
        <Container>
          {/* Overlay */}
          <div className="relative h-[95vh] flex flex-col z-30 items-center justify-center dark:text-white text-black">
            <Image
              src={IMAGES.profile}
              alt="Profile"
              className="rounded-full size-[60px] sm:size-[90px] lg:size-[100px] border-3.5 border-white shadow-20 "
            />
            <p className="text-2xl text-center sm:text-[44px] lg:text-[52px] font-light tracking-[2.2px]">
              Hi, I&apos;m Prerna Badwane{" "}
            </p>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[2.2px] text-center leading-10 sm:leading-12 lg:leading-16">
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
                icon={<IoArrowUpOutline/>}
                iconClassname="text-black rotate-45 mt-1"
              />
            </div>
          </div>
        </Container>
        <div className="hidden dark:block  absolute bottom-0 left-0 right-0 bg-gradient-10 w-full h-[113px] z-10"></div>
      </div>
      <div className="absolute bottom-[-120] left-0 right-0 z-20 ">
        <SkillStrip />
      </div>
    </div>
  );
};

export default HeroSection;
