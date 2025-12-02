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
  icon?: string | React.ReactNode;
  classnames?: string;
  labelClassname?: string;
  iconClassname?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "flex items-center justify-center gap-3 bg-white py-2 px-4 rounded-lg text-neutral-05 font-medium hover:scale-[101%] leading-[19.5px] transition cursor-pointer border dark:border-white border-primary-10 shadow-20 dark:shadow-none",
        classnames
      )}
    >
      {icon && (
        <span className={twMerge("text-base md:text-xl", iconClassname)}>
          {icon}
        </span>
      )}
      {label && (
        <span className={twMerge("text-sm md:text-base", labelClassname)}>
          {label}
        </span>
      )}
    </button>
  );
};

export default Button;
