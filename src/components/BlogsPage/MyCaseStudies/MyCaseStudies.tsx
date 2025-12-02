"use client";
import { IMAGES, STROKES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import CaseStudiesCard from "@/components/Reusable/CaseStudiesCard/CaseStudiesCard";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import { useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

const MyCaseStudies = () => {
  const Categories = ["AI", "FINTECH", "HEALTHCARE", "SAAS", "ECOMMERCE"];
  const [currentCategory, setCurrentCategory] = useState(Categories[0]);
  const caseStudies = [
    {
      id: 1,
      imageUrl: IMAGES.productDemo,

      category: "Product",
      date: "July 28, 2025",
      title: "Why Product-Market Fit Starts with Onboarding, Not Features",
      slug: "product-market-fit-onboarding",
    },
    {
      id: 2,
      imageUrl: IMAGES.productDemo,

      category: "Product",
      date: "July 28, 2025",
      title: "Why Product-Market Fit Starts with Onboarding, Not Features",
      slug: "onboarding-first-approach",
    },
    {
      id: 3,
      imageUrl: IMAGES.productDemo,
      category: "Product",
      date: "July 28, 2025",
      title: "Why Product-Market Fit Starts with Onboarding, Not Features",
      slug: "pmf-starts-with-onboarding",
    },
    {
      id: 4,
      imageUrl: IMAGES.productDemo,
      category: "Product",
      date: "July 28, 2025",
      title: "Why Product-Market Fit Starts with Onboarding, Not Features",
      slug: "product-onboarding-strategy",
    },
  ];

  return (
    <div className="relative bg-primary-30 dark:bg-primary-05 h-fit pt-20 md:pt-[100px] py-12 lg:py-52 font-Figtree">
      {/* decorative background - don't let it block pointer events */}
    x

      <Container>
        {/* ensure this content stacks above the decorative image */}
        <div className="flex flex-col md:flex-row gap-4 items-start xs:items-center md:items-start justify-between z-10 relative">
          <Heading
            heading="My Case Studies"
            subheading="Case Studies & Insights"
            alignText="max-w-sm text-left xs:text-center md:text-left"
            alignment="items-start xs:items-center md:items-start"
          />
          <div className="flex flex-col xs:items-center md:items-end max-w-md">
            <p className="text-neutral-50 dark:text-white xs:text-center md:text-left text-sm lg:text-lg">
              A few examples of how I build digital experiences that are simple,
              scalable, and built for impact.
            </p>
            <Button
              label="Contact me"
              icon={<IoArrowUpOutline />}
              classnames="flex-row-reverse w-fit bg-transparent text-black dark:text-white font-semibold mt-6 lg:mt-13"
              iconClassname="rotate-45 md:mt-1"
            />
          </div>
        </div>

        <div className="flex flex-col items-start xs:items-center md:items-start lg:flex-row mt-16 gap-10 md:gap-10 lg:gap-4">
          <div className="w-full overflow-x-scroll lg:overflow-x-hidden lg:w-[23%] flex lg:flex-col flex-row gap-0">
            {Categories.map((category) => {
              const isActive = currentCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setCurrentCategory(category)}
                  aria-pressed={isActive}
                  className={`border-r text-xs lg:text-base text-left lg:border-r-0 lg:border-b cursor-pointer border-neutral-30 px-4 lg:px-3 py-3 uppercase font-medium focus:outline-none ${
                    isActive ? "text-primary-4 dark:text-primary-10" : "text-black dark:text-white"}
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="w-full lg:w-[77%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-10 place-items-center">
              {caseStudies.map((caseStudies, index) => (
                <CaseStudiesCard key={index} caseStudy={caseStudies} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyCaseStudies;
