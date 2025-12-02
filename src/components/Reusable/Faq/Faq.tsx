/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {STROKES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import {useState } from "react";
import Heading from "../Heading/Heading";
import { AnimatePresence, motion } from 'framer-motion';
import { HiChevronDown } from "react-icons/hi";

const Faq = () => {
 const accordionItems = [
  {
    id: 1,
    title: "E-commerce App & Website",
    content:
      "A full-stack e-commerce solution built with Next.js, TypeScript, and Tailwind CSS. Includes custom admin dashboard, product management, dynamic filters, cart system, and secured checkout. Designed for 2x faster load time and 40% higher conversions.",
    
  },
  {
    id: 2,
    title: "Interior Design Portfolio Website",
    content:
      "A modern, SEO-optimized portfolio website for an interior design studio with 3D room previews, AR furniture tryout, and interactive project galleries. Boosted inbound leads by 3x for the client.",
    
  },
  {
    id: 3,
    title: "Healthcare Appointment Platform",
    content:
      "Built a complete appointment booking platform for dermatologists and dental clinics. Features include patient management, automated reminders, WhatsApp integration, and analytics dashboard.",
  
  },
  {
    id: 4,
    title: "Restaurant POS System",
    content:
      "Developed a POS system for restaurants and food courts with order management, live inventory sync, KOT printing, analytics, and multi-user roles. Optimized for low latency and offline fallback.",

  },
  {
    id: 5,
    title: "AI-Powered Job Board Platform",
    content:
      "AI-driven job platform built using Next.js, MongoDB, and OpenAI API. Includes smart job matching, resume scoring, real-time notifications, employer dashboard, chat system, and course modules.",
    
  },
];

    const [activeId, setActiveId] = useState(1);

    const toggleAccordion = (id:any) => {
        setActiveId(activeId === id ? null : id);
    };

  return (
    <div className="relative bg-primary-30 dark:bg-primary-05 font-Figtree py-10 md:py-[100px]">
      <Image
        src={STROKES.stroke10}
        alt="hero section"
        fill
        priority
        className="hidden dark:block scale-x-[-1] object-cover opacity-70"
      />

      <Container>
        <div className="relative z-[30]">
          <div className="mb-[70px] space-y-1.5 max-w-2xl mx-auto">
            <Heading
              heading="My Works"
              subheading="Building Smarter, Faster, and Scalable Systems"
              alignText=" text-center"
              alignment="items-center "
            />
            <p className="text-neutral-50 dark:text-white text-center text-sm lg:text-lg ">
              A few examples of how I build digital experiences that are simple,
              scalable, and built for impact.
            </p>
          </div>
          <div className="bg-primary-50 dark:bg-neutral-80 rounded-xl p-3 md:p-12 space-y-2 md:space-y-6">
                {accordionItems.map((item, index) => (
                <motion.div
                    key={item.id}
                    className="rounded-lg bg-primary-60 dark:bg-transparent border border-neutral-90 dark:border-neutral-85 overflow-hidden"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: index * 0.1, duration: 0.5}}
                    layout
                >
                    <motion.div
                        className="w-full"
                    >
                        <motion.button
                            className={`${activeId === item.id ? "text-gray-800 dark:text-[#d2e5f5]" : "text-gray-600 dark:text-[#d2e5f5]/60"} w-full p-4 text-left font-medium text-base md:text-lg flex justify-between items-center`}
                            onClick={() => toggleAccordion(item.id)}
                        >
                            <motion.span
                                className="font-bold"
                                animate={{
                                    scale: activeId === item.id ? 1.05 : 1,
                                }}
                                transition={{duration: 0.2}}
                            >
                                {item.title}
                            </motion.span>
                            <motion.div
                                animate={{
                                    rotate: activeId === item.id ? 180 : 0,
                                }}
                                transition={{duration: 0.3}}
                                className="text-2xl"
                            >
                                <HiChevronDown className={`${activeId !== item.id?"text-white":"text-primary-40"}`}/>
                            </motion.div>
                        </motion.button>
                    </motion.div>

                    <AnimatePresence>
                        {activeId === item.id && (
                            <motion.div
                                className="overflow-hidden "
                                initial={{height: 0}}
                                animate={{height: "auto"}}
                                exit={{height: 0}}
                                transition={{duration: 0.3}}
                            >
                                <div className="px-3 pb-6 dark:text-[#d2e5f5] text-gray-800 relative">
                                    {item.content.split(" ").map((word, wordIndex) => (
                                        <motion.span
                                            key={wordIndex}
                                            className="inline-block mr-1"
                                            initial={{opacity: 0, y: 20}}
                                            animate={{opacity: 1, y: 0}}
                                            transition={{
                                                delay: wordIndex * 0.02,
                                                duration: 0.3
                                            }}
                                            exit={{
                                                opacity: 0,
                                                transition: {duration: 0.1}
                                            }}
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                   
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
