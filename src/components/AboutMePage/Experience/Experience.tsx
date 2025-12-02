import { STROKES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import React from "react";

const Experience = () => {
  const experience = [
    {
      role: "Frontend Developer ",
      company: "Mitr Consultancy",
      duration: {
        from: "Feb 2025",
        to: "Mar 2025",
      },
      location: "Remote",
      description:
        "Assisted in building and maintaining scalable UI components for web applications using React.js. Focused on improving overall site performance and mobile responsiveness.",
      skills: ["Web Development", "TypeScript", "React.js"],
    },
    {
      role: "Frontend Developer ",
      company: "Mitr Consultancy",
      duration: {
        from: "Feb 2025",
        to: "Mar 2025",
      },
      location: "Remote",
      description:
        "Assisted in building and maintaining scalable UI components for web applications using React.js. Focused on improving overall site performance and mobile responsiveness.",
      skills: ["Web Development", "TypeScript", "React.js"],
    },
    {
      role: "Frontend Developer ",
      company: "Mitr Consultancy",
      duration: {
        from: "Feb 2025",
        to: "Mar 2025",
      },
      location: "Remote",
      description:
        "Assisted in building and maintaining scalable UI components for web applications using React.js. Focused on improving overall site performance and mobile responsiveness.",
      skills: ["Web Development", "TypeScript", "React.js"],
    },
  ];

  return (
    <div className="relative bg-primary-30 dark:bg-primary-05 h-fit py-[70px] font-Figtree">
      {/* decorative background - don't let it block pointer events */}
      <div className="absolute top-0 left-0 z-0 pointer-events-none">
        <Image src={STROKES.stroke8} alt="stroke-background" />
      </div>
      <div className="absolute scale-x-[-1] s top-20 right-0 z-0 pointer-events-none">
        <Image src={STROKES.stroke8} alt="stroke-background" />
      </div>

      <Container>
        {/* ensure this content stacks above the decorative image */}
        <div className="flex flex-col lg:flex-row gap-auto items-start xs:items-center md:items-start justify-between z-10 relative">
          <div className="w-full lg:w-[36%] flex flex-col items-start xs:items-center md:items-start gap-10 md:gap-10 lg:gap-4">
            <Heading
              heading="experience"
              subheading="Check my experience."
              alignText="max-w-sm text-left xs:text-center md:text-left"
              alignment="items-start xs:items-center md:items-start"
            />
            <div className="flex flex-col xs:items-center md:items-end max-w-md">
              <p className="text-neutral-50 dark:text-white xs:text-center md:text-left text-sm lg:text-lg">
                A few examples of how I build digital experiences that are
                simple, scalable, and built for impact.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[64%]">
            <div className="flex-col gap-[17px] place-items-center">
              {experience.map((experience, index) => (
                <div key={index} className="py-3 pl-2 md:py-6 md:pl-4">
                  <div className="flex flex-col md:flex-row gap-3 md:gap-6 md-2 md:mb-4">
                    <p className="text-black text-lg md:text-3xl dark:text-white font-semibold">
                      {experience.role}
                    </p>
                    <p className="text-primary-40 text-lg md:text-3xl dark:text-primary-10 font-semibold">
                      {experience.company}
                    </p>
                  </div>
                  <>
                    <p className="text-black dark:text-white">
                      {experience.duration.from}- {experience.duration.to}{" "}
                      <span className="border border-black dark:border-white mx-2"></span>
                      {experience.location}
                    </p>
                  </>
                  <p className="text-black/70 dark:text-neutral-50 text-xs md:text-sm md:mt-6 md:mb-[26px] mt-3 mb-[16px]">
                    {experience.description}
                  </p>
                  <div className="flex gap-2 md:gap-3">
                    {experience.skills.map((skill, skillIndex) => (
                      <button
                        key={skillIndex}
                        className="
    relative inline-block px-3 py-2 rounded-xl font-medium
    text-black dark:text-white
    bg-[#F7F9F8]  /* light mode */
    shadow-[0_4px_12px_rgba(0,0,0,0.08)]  /* soft shadow */
    border border-black/10
    dark:bg-gradient-to-b dark:from-[#153428]/80 dark:to-[#070B09FF]/100
    dark:border-white/10 dark:shadow-[0_10px_30px_rgba(0,0,0,0.7)]
    overflow-visible
    focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/20
  "
                      >
                        <span className="relative z-10 text-xs md:text-sm">
                          {skill}
                        </span>

                        {/* glossy highlight */}
                        <span
                          aria-hidden
                          className="absolute left-1 top-1 w-1/2 h-1/4 rounded-full pointer-events-none"
                          style={{
                            background:
                              "radial-gradient(closest-side, rgba(255,255,255,0.25), rgba(255,255,255,0) 70%)",
                            transform: "translateY(-20%)",
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
