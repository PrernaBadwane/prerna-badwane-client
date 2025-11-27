import React from "react";

const Heading = ({
  heading,
  subheading,
  alignment = "items-start",
  alignText = "text-left",
}: {
  heading?: string;
  subheading?: string;
  alignment?: string;
  alignText?: string;
}) => {
  return (
    <div
      className={`flex w-full flex-col font-Figtree space-y-3 lg:space-y-6 ${alignment}`}
    >
      <h2
        className={`uppercase border text-white leading-4 lg:leading-[21px] border-neutral-10 bg-secondary-05 dark:bg-secondary-10 w-fit rounded-full py-1 px-2 lg:px-3 text-xs lg:text-sm font-bold ${alignText}`}
      >{`// ${heading}`}</h2>
      <h3
        className={`w-full capitalize text-black dark:text-white leading-[24.24px] lg:leading-[48.48px] text-2xl lg:text-[48px]  lg:tracking-[-1.2px] font-bold ${alignText}`}
      >
        {subheading}
      </h3>
    </div>
  );
};

export default Heading;
