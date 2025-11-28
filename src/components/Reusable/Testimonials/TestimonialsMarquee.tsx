"use client";

import { IMAGES } from "@/assets";
import { testimonials } from "@/constents/TestimonialData";
import Image from "next/image";
import React from "react";

const VerticalMarquee = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="flex flex-col bg-primary-30 dark:bg-primary-05 lg:flex-row gap-5 font-Figtree items-center justify-center">
      {/* COLUMN 1 */}
      <div
        className="slider-container h-fit lg:h-[80vh] w-full relative overflow-hidden 
     "
      >
        <div className="marqueeSliderUp hidden lg:flex flex-col items-center gap-5">
          {doubled.map((item, index) => (
            <div
              className="p-6 flex flex-col gap-5 shrink-0 w-[300px] dark:bg-neutral-55
              bg-white border dark:border-neutral-60 border-primary-25 rounded-xl"
              key={index}
            >
              <p className="text-black dark:text-white text-lg font-bold">
                {item.title}
              </p>
              <p className="text-neutral-50 dark:text-white text-sm">
                {item.message}
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={IMAGES.profile}
                  alt={item.title}
                  className="size-10 rounded-full"
                />

                <div>
                  <h5 className="text-black dark:text-white text-sm font-medium">
                    {item.name}
                  </h5>
                  <h6 className="text-black dark:text-white text-sm">
                    {item.role}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="marqueeSliderRight flex flex-row lg:hidden items-center gap-5">
          {doubled.map((item, index) => (
            <div
              className="p-6 flex flex-col gap-5 shrink-0 w-[300px] dark:bg-neutral-55
              bg-white border dark:border-neutral-60 border-primary-25 rounded-xl"
              key={index}
            >
              <p className="text-black dark:text-white text-lg font-bold">
                {item.title}
              </p>
              <p className="text-neutral-50 dark:text-white text-sm">
                {item.message}
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={IMAGES.profile}
                  alt={item.title}
                  className="size-10 rounded-full"
                />

                <div>
                  <h5 className="text-black dark:text-white text-sm font-medium">
                    {item.name}
                  </h5>
                  <h6 className="text-black dark:text-white text-sm">
                    {item.role}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COLUMN 2 */}
      <div
        className="slider-container h-fit lg:h-[80vh] w-full relative overflow-hidden 
     "
      >
        <div className="marqueeSliderDown hidden lg:flex flex-col items-center gap-5">
          {doubled.map((item, index) => (
            <div
              className="p-6 flex flex-col gap-5 shrink-0 w-[300px] dark:bg-neutral-55
              bg-white border dark:border-neutral-60 border-primary-25 rounded-xl"
              key={index}
            >
              <p className="text-black dark:text-white text-lg font-bold">
                {item.title}
              </p>
              <p className="text-neutral-50 dark:text-white text-sm">
                {item.message}
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={IMAGES.profile}
                  alt={item.title}
                  className="size-10 rounded-full"
                />

                <div>
                  <h5 className="text-black dark:text-white text-sm font-medium">
                    {item.name}
                  </h5>
                  <h6 className="text-black dark:text-white text-sm">
                    {item.role}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" marqueeSliderLeft flex flex-row lg:hidden items-center gap-5">
          {doubled.map((item, index) => (
            <div
              className="p-6 flex flex-col gap-5 shrink-0 w-[300px] dark:bg-neutral-55
              bg-white border dark:border-neutral-60 border-primary-25 rounded-xl"
              key={index}
            >
              <p className="text-black dark:text-white text-lg font-bold">
                {item.title}
              </p>
              <p className="text-neutral-50 dark:text-white text-sm">
                {item.message}
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={IMAGES.profile}
                  alt={item.title}
                  className="size-10 rounded-full"
                />

                <div>
                  <h5 className="text-black dark:text-white text-sm font-medium">
                    {item.name}
                  </h5>
                  <h6 className="text-black dark:text-white text-sm">
                    {item.role}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalMarquee;
