"use client";
import { IMAGES, STROKES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import ProjectCard, {
  TProject,
} from "@/components/Reusable/ProjectCard/ProjectCard";
import Image from "next/image";
import { useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

const MyWorks = () => {
  const Categories = ["AI", "FINTECH", "HEALTHCARE", "SAAS", "ECOMMERCE"];
  const [currentCategory, setCurrentCategory] = useState(Categories[0]);
  const projects: TProject[] = [
    {
      title: "Project Alpha",
      description:
        "A brief description of Project Alpha, highlighting its key features and purpose.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      imageUrl: IMAGES.productDemo,
    },{
      title: "Project Beta",
      description:
        "This is Project Beta, a cool application built with modern web technologies.",
      tags: ["Vue.js", "Node.js", "MongoDB"],
      imageUrl: IMAGES.productDemo,
    },
    {
      title: "Project Gamma",
      description:
        "Project Gamma focuses on data visualization and interactive dashboards.",
      tags: ["Angular", "D3.js", "Firebase"],
      imageUrl: IMAGES.productDemo,
    },
    {
      title: "Project Delta",
      description:
        "An e-commerce platform developed with a focus on user experience.",
      tags: ["Next.js", "Stripe", "TypeScript"],
      imageUrl: IMAGES.productDemo,
    },

    
  ];

  return (
    <div className="relative bg-primary-30 dark:bg-primary-05 h-fit py-12 lg:py-52 font-Figtree">
      {/* decorative background - don't let it block pointer events */}
      <div className="absolute top-0 left-0 z-0 pointer-events-none">
        <Image src={STROKES.stroke2} alt="stroke-background" />
      </div>

      <Container>
        {/* ensure this content stacks above the decorative image */}
        <div className="flex flex-col md:flex-row gap-4 items-start xs:items-center md:items-start justify-between z-10 relative">
          <Heading
            heading="My Works"
            subheading="my selected works"
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
              icon={<IoArrowUpOutline/>}
              classnames="flex-row-reverse w-fit bg-transparent text-black dark:text-white font-semibold py-3.5 px-5 mt-6 lg:mt-13"
                iconClassname="rotate-45 mt-1"
            />
          </div>
        </div>

        <div className="flex flex-col items-start xs:items-center md:items-start lg:flex-row mt-16 gap-10 md:gap-10 lg:gap-4">
          <div className="w-full overflow-x-scroll lg:overflow-x-hidden lg:w-[33%] flex lg:flex-col flex-row gap-0">
            {Categories.map((category) => {
              const isActive = currentCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setCurrentCategory(category)}
                  aria-pressed={isActive}
                  className={`border-r text-xs lg:text-base text-left text-black dark:text-white lg:border-r-0 lg:border-b cursor-pointer border-neutral-30 px-4 lg:px-3 py-3 uppercase font-medium focus:outline-none ${
                    isActive ? "bg-secondary-05 text-white" : "bg-transparent"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="w-full lg:w-[64%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-10 place-items-center">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyWorks;
