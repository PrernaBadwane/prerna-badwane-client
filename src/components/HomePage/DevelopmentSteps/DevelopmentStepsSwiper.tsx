"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { STROKES } from "@/assets";

const cards = [
  {
    id: 1,
    title: "Card One",
    desc: "Choose from travel vaccines, prescriptions, or health checks.",
  },
  {
    id: 2,
    title: "Card Two",
    desc: "Choose from travel vaccines, prescriptions, or health checks  ",
  },
  {
    id: 3,
    title: "Card Three",
    desc: "Choose from travel vaccines, prescriptions, or health checks.",
  },
  {
    id: 4,
    title: "Card Four",
    desc: "Choose from travel vaccines, prescriptions, or health checks.",
  },
  {
    id: 5,
    title: "Card One",
    desc: "Choose from travel vaccines, prescriptions, or health checks.",
  },
  {
    id: 6,
    title: "Card One",
    desc: "Choose from travel vaccines, prescriptions, or health checks.",
  },
];

const DevelopmentStepsSwiper = ({ variant }: { variant: boolean }) => {
  const loopCards = [...cards, ...cards];

  return (
    <div className="w-full overflow-hidden px-6 py-2 md:py-4">
      <div className="scroll-container">
        {loopCards.map((c, index) => (
          <motion.article
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            key={index}
            className={`${variant ? "bg-gradient-40" : "border-secondary-05" } relative p-[1px] rounded-xl`}
          >
             <div className="absolute bottom-0 left-0 z-0 pointer-events-none">
                    <Image src={STROKES.stroke9} alt="stroke-background" />
                  </div>
                  <div className="absolute scale-y-[-1] scale-x-[-1]  s top-0 right-0 z-0 pointer-events-none">
                    <Image src={STROKES.stroke9} alt="stroke-background" />
                  </div>
            
            {" "}
            <div
              className={` text-white shrink-0 rounded-xl w-[180px] md:w-[250px] p-4 h-[250px] md:h-[280px] flex flex-col justify-between ${
                variant ? "bg-secondary-05 dark:bg-primary-05" : "bg-secondary-05"
              }
          `}
            >
              <p className="tet-lg md:text-2xl font-medium">Step 0{c.id}</p>

              <div>
                <h5 className="tet-lg md:text-2xl font-medium">{c.title}</h5>

                <div className="w-full border-[0.1px] h-0 border-white my-4  md:my-[30px]" />

                <p className="leading-[150%] text-sm md:text-base whitespace-normal wrap-break-words">
                  {c.desc}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentStepsSwiper;
