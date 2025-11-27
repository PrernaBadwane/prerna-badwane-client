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
  icon: string | React.ReactNode;
  classnames?: string;
  labelClassname?: string;
  iconClassname?: string;
  onClick?: () => void;
})  => {
  return (
   
    <button onClick={onClick} className='flex gap-0 hover:scale-[101%]'>
        <div  className={twMerge(
        "flex items-center justify-center gap-3 px-4 bg-white rounded-2xl text-neutral-05 font-semibold hover:scale-[101%]  transition cursor-pointer border dark:border-white border-primary-10 shadow-20 dark:shadow-none",
        classnames
      )}><span className={`${labelClassname}`}>{label}</span></div>
      <div className={twMerge(
        "flex items-center justify-center gap-3 p-2.5 bg-white rounded-2xl hover:scale-[101%] transition cursor-pointer border dark:border-white border-primary-10 shadow-20 dark:shadow-none text-xl",
       classnames
      )}><span className={(twMerge( iconClassname))}>{icon}</span></div>
        
    </button>
  )
}

export default SecondaryButton