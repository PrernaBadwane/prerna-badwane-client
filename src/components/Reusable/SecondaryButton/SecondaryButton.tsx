import Image, { StaticImageData } from 'next/image';
import React from 'react'
import { twMerge } from 'tailwind-merge';

const SecondaryButton = ({
  label,
  icon,
  classnames,
  iconClassname,
  labelClassname,
  onClick,
}: {
  label: string;    
  icon: string | StaticImageData;
  classnames?: string;
  labelClassname?: string;
  iconClassname?: string;
  onClick?: () => void;
})  => {
  return (
   
    <button onClick={onClick} className='flex gap-0 hover:scale-[101%]'>
        <div  className={twMerge(
        "flex items-center justify-center gap-3 bg-white py-2 px-4 rounded-2xl text-neutral-05 font-semibold hover:scale-[101%] leading-[19.5px] transition cursor-pointer border border-white",
        classnames
      )}><span className={`${labelClassname}`}>{label}</span></div>
      <div className={twMerge(
        "flex items-center justify-center gap-3 bg-white rounded-2xl  font-semibold hover:scale-[101%] leading-[19.5px] transition cursor-pointer border border-white",
        iconClassname
      )}><Image  src={icon} alt={label}/></div>
        
    </button>
  )
}

export default SecondaryButton