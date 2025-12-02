import React from "react";
import Container from "../Container/Container";
import { STROKES } from "@/assets";
import Image from "next/image";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { IoArrowUpOutline } from "react-icons/io5";

const CallToAction = () => {
  return (
    <div className="py-10 md:py-[100px]">
      <Container>
        <div className="relative rounded-[40px] flex flex-col items-center justify-center bg-secondary-05 font-Figtree overflow-hidden">
          <div className="absolute top-0 right-0 left-0 flex items-center justify-center">
            <Image
              src={STROKES.stroke5}
              alt={"web development"}
              className="size-[225px]"
            />
          </div>
          <div className="absolute scale-x-[-1] -top-[150px] md:-top-[50px] md:-right-[100px] -right-[250px] -rotate-15 md:rotate-0">
            <Image src={STROKES.stroke6} alt={"web development"} />
          </div>
          <div className="absolute -top-[250px] md:-top-[150px] md:-left-[100px] -left-[250px] rotate-15 md:rotate-0 ">
            <Image src={STROKES.stroke6} alt={"web development"} />
          </div>
          <div className="flex flex-col items-center justify-center px-2 md:px-10 max-w-3xl py-20 ">
            <div className="flex  items-center justify-center py-1 pr-3.5 pl-2.5 gap-[2px] mb-[23px] border border-neutral-65 rounded-full bg-white">
              <div className="m-1 bg-primary-35/40 rounded-full size-[13px] flex items-center justify-center">
                <div className="bg-primary-35 size-[9px] rounded-full"></div>
              </div>
              <p className="text-n text-sm">
                Available for work{" "}
              </p>
            </div>
            <h3 className="text-xl md:text-3xl xl:text-5xl font-bold text-center md:tracking-[-1.92px] text-white">
              Ready to Scale Your Business with Innovative Technology?
            </h3>
            <p className="text-sm md:text-lg text-white text-center mt-[30px] mb-10 max-w-md">
              Let’s pinpoint your pain points and create a customized solution
              that works for you.
            </p>

            <SecondaryButton
              label="Book a Free Consultation"
              icon={<IoArrowUpOutline />}
              iconClassname="rotate-45"
              classnames="z-[20]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CallToAction;
