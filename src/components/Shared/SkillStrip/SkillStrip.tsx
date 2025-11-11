import React from "react";

const SkillStrip = () => {
  const skills = [
    "Web Development",
    "App Development",
    "SEO",
    "AI Integration",
    "Web Development",
    "App Development",
    "SEO",
    "AI Integration",
    "Web Development",
    "App Development",
    "SEO",
    "AI Integration",
  ];

  return (
    <div className="relative w-full h-[200px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* First Strip (tilted right) */}
      <div className="absolute w-[150%] left-1/2 -translate-x-1/2 bg-secondary-05 rotate-5 sm:rotate-6 lg:rotate-[4deg] flex items-center justify-around py-2 lg:py-4 font-Figtree">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-white text-[10px] sm:text-sm md:text-lg font-medium uppercase whitespace-nowrap px-4"
          >
            {skill}
          </div>
        ))}
      </div>

      {/* Second Strip (tilted left) */}
      <div className="absolute w-[150%] left-1/2 -translate-x-1/2 bg-secondary-05 -rotate-5 sm:-rotate-6 lg:-rotate-[4deg] flex items-center justify-around py-2 lg:py-4 font-Figtree">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-white text-[10px] sm:text-sm md:text-lg font-medium uppercase whitespace-nowrap px-4"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillStrip;
