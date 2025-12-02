import { IMAGES, STROKES } from "@/assets";
import CounterSection from "@/components/HomePage/CounterSection/CounterSection";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="relative h-full pt-32 pb-14 lg:pt-52 lg:pb-24">
      <div className="hidden dark:block absolute top-10 h-full">
        <Image
          src={STROKES.stroke8}
          alt="stroke-background"
          className="h-full w-full"
        />
      </div>
      <>
        <Container>
          <div className="text-black mb-[70px] dark:text-white text-center text-lg md:text-3xl leading-relaxed">
            <p>
              Hi, I’m Prerna Badwane{" "}
              <span className="inline-flex items-center">
                <Image
                  src={IMAGES.profile}
                  alt="profile-image"
                  className="inline-block w-auto h-[18px] md:h-[30px] rounded-lg ml-2 mr-3"
                />
              </span>
              A Passionate Frontend Developer with over a year of experience in
              web development,
              <span className="text-neutral-700 dark:text-neutral-300">
                {" "}
                I focus on creating seamless user interfaces that are both
                intuitive and impactful. My expertise lies in React, Next.js,
                and Tailwind CSS
              </span>
              , but what{" "}
              <span className="inline-flex items-center">
                <Image
                  src={IMAGES.profile}
                  alt="profile-image"
                  className="inline-block w-auto h-[18px] md:h-[30px] rounded-lg ml-2 mr-3"
                />
              </span>{" "}
              truly drives me is finding creative solutions to real business
              challenges.
            </p>
          </div>

          <div className="relative flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 z-20 mb-[70px]">
            <div className="w-full lg:w-[40%]">
              <Image
                src={IMAGES.profile}
                alt="profile-image"
                className="w-auto h-[300px] lg:h-full rounded-lg mx-auto"
              />
            </div>
            <div className="w-full lg:w-[60%]">
              <p className="text-base md:text-lg lg:text-xl leading-[140%] text-black dark:text-white font-medium">
                I started my journey in <strong> software development </strong>
                with a Bachelor of Technology (B.Tech) degree in{" "}
                <strong>Computer Science & Engineering</strong> . From the
                beginning, I’ve been focused on merging technical skill with a
                business-centric mindset, delivering value through
                high-performance web and mobile applications.
                <br />
                <br />I thrive on simplifying complex problems and creating
                solutions that make digital experiences easier and more engaging
                for users. My goal is to always stay ahead in the tech world,
                adapting to new tools and trends, ensuring that the solutions I
                build not only solve problems but drive business growth.
              </p>
            </div>
          </div>
          <CounterSection />
        </Container>
      </>
    </div>
  );
};

export default AboutMe;
