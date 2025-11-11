import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import React from "react";

const Button = ({
  label,
  icon,
  classnames,
  iconClassname,
  labelClassname,
  onClick,
}: {
  label?: string;
  icon?: string | StaticImageData;
  classnames?: string;
  labelClassname?: string;
  iconClassname?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "flex items-center justify-center gap-3 bg-white py-2 px-4 rounded-lg text-neutral-05 font-semibold hover:scale-[101%] leading-[19.5px] transition cursor-pointer border border-white",
        classnames
      )}
    >
      {icon && (
        <Image src={icon} alt="icon" className={twMerge("w-5 h-5", iconClassname)} />
      )}
      {label && <span className={labelClassname}>{label}</span>}
    </button>
  );
};

export default Button;
