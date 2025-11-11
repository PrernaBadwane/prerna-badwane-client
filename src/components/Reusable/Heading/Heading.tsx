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
    <div className={`flex flex-col font-Figtree space-y-3 lg:space-y-6 ${alignment}`}>
      <h2 className="uppercase border text-white leading-4 lg:leading-[21px] border-neutral-10 bg-secondary-10 w-fit rounded-full py-1 px-2 lg:px-3 text-xs lg:text-sm font-bold">{`// ${heading}`}</h2>
      <h3
        className={`text-white leading-[24.24px] lg:leading-[48.48px] text-2xl lg:text-[48px] tracking-[-1.12px] lg:tracking-[-1.92px] font-bold ${alignText}`}
      >
        {subheading}
      </h3>
    </div>
  );
};

export default Heading;
