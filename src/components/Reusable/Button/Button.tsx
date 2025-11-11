import Image, { StaticImageData } from "next/image";
import React from "react";

const Button = ({
  label,
  icon,
  classname,
  iconClassname,
  labelClassname,
  onClick
}: {
  label?: string;
  icon?: string | StaticImageData;
  classname?:string;
  labelClassname?:string;
  iconClassname?:string;
  onClick?:()=>void;
}) => {
  return (
    <button onClick={onClick} className={`flex items-center justify-center gap-3 bg-white py-2 px-4 rounded-md text-neutral-05 font-semibold hover:scale-[101%] leading-[19.5px] transition `}>
        {icon && <Image src={icon} alt="icon" className={`w-5 h-5 ${iconClassname}`} />}
        {label && <span className={`${labelClassname}`}>{label}</span>}

    </button>
  );
};

export default Button;
