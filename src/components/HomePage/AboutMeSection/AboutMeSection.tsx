import { ICONS, STROKES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import SocialMedia from "./SocialMedia";
import Button from "@/components/Reusable/Button/Button";
import CounterSection from "../CounterSection/CounterSection";

const AboutMeSection = () => {
  return (
    <div className="relative bg-primary-05 h-full pt-32 pb-14 lg:pt-52 lg:pb-24">
      <div className="absolute top-10 h-full">
        <Image src={STROKES.stroke1} alt="stroke-background" className="h-full w-full" />
      </div>
      <>
        <Container>
          <div className="relative flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 z-20 mb-[70px]">
            <div className="w-full lg:w-[50%]">
              <Heading
                heading="About me"
                subheading="Crafting Digital Solutions That Drive Success"
              />
              <SocialMedia />
            </div>
            <div className="w-full lg:w-[50%]">
              <p className="text-base md:text-lg lg:text-2xl text-white font-medium">
                I’m Prerna Badwane, a developer passionate about solving
                real-world challenges through smart, intuitive software. I build
                digital systems that streamline operations, boost efficiency,
                and empower teams to grow faster and achieve their goals.
                <br />
                <br />
                My approach goes beyond just design or code it&apos;s about making a
                meaningful impact. Every project I undertake is aimed at
                simplifying processes, increasing productivity, and ensuring
                sustainable business growth.
              </p>
              <Button
                label="Discover More"
                icon={ICONS.whiteTopRightArrow}
                classnames="flex-row-reverse bg-transparent text-white border-white font-semibold py-3.5 px-5 mt-6 lg:mt-13"
              />
            </div>
          </div>
          <CounterSection/>
        </Container>
      </>
    </div>
  );
};

export default AboutMeSection;
