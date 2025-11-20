"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { ICONS, IMAGES } from "@/assets";
import { title } from "process";
import Image from "next/image";
import { useIsBelowMD } from "@/hook/isBoolean";

// data
const accordionData = [
  {
    "order": 1,
    "title": "Web Development",
    "subtitle": "Websites That Work, Not Just Look Good",
    "description": "I design and develop modern websites that load fast, convert visitors, and reflect your brand’s story. Whether it’s a portfolio or a full business site, I focus on performance and growth.",
    "services": [
      "Responsive Design",
      "CMS Integration",
      "SEO Optimization",
      "Full Website Design",
      "Client Training",
      "E-commerce Setup"
    ],
    "image": "/images/web-development.png"
  },
  {
    "order": 2,
    "title": "App Development",
    "subtitle": "Mobile Apps That Scale With Your Business",
    "description": "I build high-performance mobile applications designed for real-world usage and long-term scalability. From UI/UX to backend integration, I ensure your app delivers a smooth, intuitive experience.",
    "services": [
      "Android & iOS Development",
      "Cross-Platform Apps (React Native / Flutter)",
      "API Integration",
      "App UI/UX Design",
      "Performance Optimization",
      "App Store Deployment & Support"
    ],
    "image": "/images/app-development.png"
  },
  {
    "order": 3,
    "title": "SEO Services",
    "subtitle": "Rank Higher, Get Found, Grow Faster",
    "description": "My SEO strategy focuses on long-term, sustainable growth. I optimize your website to improve visibility across search engines, boost organic traffic, and convert visitors into customers.",
    "services": [
      "Technical SEO",
      "On-Page Optimization",
      "Keyword Research",
      "Website Speed Optimization",
      "Local SEO Setup",
      "Analytics & Reporting"
    ],
    "image": "/images/seo-services.png"
  },
  {
    "order": 4,
    "title": "AI Integration",
    "subtitle": "Bring Intelligence Into Your Business Workflow",
    "description": "I integrate AI tools and automation systems to streamline operations, cut costs, and increase efficiency. From chatbots to AI-powered analytics, I help your business stay ahead of the curve.",
    "services": [
      "AI Chatbots & Assistants",
      "Workflow Automation",
      "AI-Powered Analytics",
      "Recommendation Engines",
      "Custom LLM Integrations",
      "Data Processing Automation"
    ],
    "image": "/images/ai-integration.png"
  }
]
;

const ServicesAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const controls = useAnimation();
  const isMobile = useIsBelowMD();
  useEffect(() => {
    controls.start("visible");
  }, [expandedIndex, controls]);



  return (
    <div className="flex flex-col w-full rounded-xl overflow-hidden font-Figtree">
      {accordionData.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
          <motion.div
            key={item.order}
            className="relative cursor-pointer overflow-hidden border-b-[0.3px] border-white"
            animate={{
              height: isExpanded ? (isMobile?"800px":"470px" ): "80px",
            }}
            initial={{ height: index === 0 ? (isMobile?"800px":"420px" ) : "80px" }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 70,
              damping: 15,
            }}
            onClick={() => setExpandedIndex(index)}
            whileHover={{
              height: isExpanded ? (isMobile?"800px":"420px" ) : "100px",
            }}
            layout
          >
            <motion.div
              className="absolute inset-0"
              transition={{ duration: 0.6 }}
            />

            <div className="absolute inset-0 flex flex-col py-6 text-white">
              <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: { transition: { staggerChildren: 0.05 } },
                }}
              >
                <motion.div className="flex items-center justify-between">
                <motion.div className="flex lg:gap-[150px] items-center justify-between ">
                  <motion.h3
                    className="text-base lg:text-xl font-bold pr-2 lg:w-10"
                    variants={{
                      visible: { y: 0, opacity: 1 },
                      hidden: { y: -20, opacity: 0 },
                    }}
                  >
                    ({item.order})
                  </motion.h3>{" "}
                  <motion.h3
                    className="text-base lg:text-xl font-bold"
                    variants={{
                      visible: { y: 0, opacity: 1 },
                      hidden: { y: -20, opacity: 0 },
                    }}
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>
                <motion.div className="flex gap-[150px] ">
                  <motion.div
                    className={`flex items-center bg-primary-20 hover:bg-secondary-05 justify-center border  hover:border-secondary-05  p-2.5 rounded-xl md:rounded-2xl transition duration-300 ${isExpanded? "bg-secondary-05 border-secondary-05":"border-white"}`}
                    variants={{
                      visible: { y: 0, opacity: 1 },
                      hidden: { y: -20, opacity: 0 },
                    }}
                  >
                    <Image src={ICONS.whiteTopRightArrow} alt={item.title} className="size-3 md:size-5" />
                  </motion.div>
                  
                </motion.div>
                </motion.div>

                <AnimatePresence mode="wait">
                  {isExpanded && (
                    <motion.div>
                      <motion.div
                        variants={{
                          visible: {
                            height: "auto",
                            opacity: 1,
                            transition: {
                              when: "beforeChildren",
                              staggerChildren: 0.1,
                              delayChildren: 0.2,
                            },
                          },
                          hidden: {
                            height: 0,
                            opacity: 0,
                            transition: {
                              when: "afterChildren",
                              staggerChildren: 0.05,
                            },
                          },
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="overflow-hidden pl-2 lg:pl-[190px] flex flex-col md:flex-row justify-between mt-8 mb-10 gap-10"
                      >
                        <motion.div className="w-full md:w-[50%]">
                            <motion.p
                            variants={{
                              visible: { y: 0, opacity: 1 },
                              hidden: { y: 20, opacity: 0 },
                            }}
                            className="text-base mb-4"
                          >
                            <span className="text-bold text-primary-10 pr-2">{"// "}</span>  {item.subtitle}
                          </motion.p>
                          <motion.p
                            variants={{
                              visible: { y: 0, opacity: 1 },
                              hidden: { y: 20, opacity: 0 },
                            }}
                            className="text-base mb-6"
                          >
                            {item.description}
                          </motion.p>

                          <motion.div
                            variants={{
                              visible: { y: 0, opacity: 1 },
                              hidden: { y: 20, opacity: 0 },
                            }}
                            className="space-x-2 grid grid-cols-1 lg:grid-cols-2 gap-2"
                          >
                          {item.services.map((service)=><p key={service} className="text-white text-nowrap"><span className="text-neutral-45 pr-1">↳ </span>{service}</p>)}
                          
                          </motion.div>
                        </motion.div>
                        <motion.div className="w-full md:w-[40%] ">
                          <Image src={IMAGES.service} alt={title} className="w-[380px]"/>
                        </motion.div> 
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServicesAccordion;
