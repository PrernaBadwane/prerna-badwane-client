"use client";

import { ICONS } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface OrbitProps {
  radius: number;
  duration: number;
  icons: string[];
  offsetY: string;
  size1: number;
  size2: number;
  size3: number;
}

const icons: string[] = [
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
  ICONS.facebook,
];

export default function OrbitSection() {
  const [radius, setRadius] = useState(420);

  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 440) setRadius(150);
      else if (w < 564) setRadius(210);
      else if (w < 764) setRadius(250);
      else if (w < 1024) setRadius(350);
      else setRadius(450);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center h-[400px] sm:h-[500px] md:h-[660px] lg:[800px]  text-white overflow-hidden">
      {/* Heading */}

      {/* Orbits */}
      <Orbit
        radius={radius}
        duration={55}
        icons={icons}
        offsetY="top-[-140px] sm:top-[-200px] md:top-[-260px] lg:top-[-420px]"
        size1={40}
        size2={28}
        size3={20}
      />
      <Orbit
        radius={radius}
        duration={55}
        icons={icons}
        offsetY="top-[-200px] sm:top-[-320px] md:top-[-360px] lg:top-[-580px]"
        size1={32}
        size2={20}
        size3={16}
      />
      <Orbit
        radius={radius}
        duration={55}
        icons={icons}
        offsetY="top-[-260px] sm:top-[-400px] md:top-[-460px] lg:top-[-720px]"
        size1={28}
        size2={16}
        size3={12}
      />
    </section>
  );
}

/* ---------------------------- ORBIT COMPONENT ---------------------------- */
function Orbit({
  radius,
  duration,
  icons,
  offsetY,
  size1,
  size2,
  size3,
}: OrbitProps) {
  const [size, setSize] = useState(420);

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 440) setSize(size3);
      else if (w < 764) setSize(size2);
      else setSize(size1);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <motion.div
      className={`absolute origin-center top-0 ${offsetY}`}
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration,
      }}
    >
      {/* ORBIT RING */}
      <div className="absolute inset-0 rounded-full border border-primary-05 dark:border-white/30" />

      {/* ICONS */}
      {icons.map((icon, index) => {
        const angle = (index / icons.length) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              width: size,
              height: size,
              left: radius + x - size / 2,
              top: radius + y - size / 2,
            }}
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration,
            }}
          >
            <Image
              src={icon}
              alt={`orbit-icon-${index}`}
              fill
              className="object-contain"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
