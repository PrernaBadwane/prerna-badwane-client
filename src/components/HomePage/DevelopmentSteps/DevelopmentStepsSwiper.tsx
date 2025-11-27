"use client";

import React from "react";
import { motion } from "framer-motion";

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

const DevelopmentStepsSwiper = () => {
  const loopCards = [...cards, ...cards];

  return (
    <div className="w-full overflow-hidden px-6 py-4">
      <div className="scroll-container">
        {loopCards.map((c, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-secondary-05 text-white shrink-0 rounded-xl w-[250px] p-4 h-[280px] flex flex-col justify-between "
          >
            <p className="text-2xl font-medium">Step 0{c.id}</p>

            <div>
              <h5 className="text-2xl font-medium">{c.title}</h5>

              <div className="w-full border-[0.1px] h-0 border-white my-[30px]" />

              <p className="leading-[150%] whitespace-normal break-words">{c.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentStepsSwiper;
