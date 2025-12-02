import Image, { StaticImageData } from "next/image";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { IoArrowUpOutline } from "react-icons/io5";
export type TCaseStudy = {
  title: string;
  imageUrl: string | StaticImageData;
  date: string;
  category: string;
  slug: string;
};
const CaseStudiesCard = ({ caseStudy }: { caseStudy: TCaseStudy }) => {
  return (
    <div className="space-y-4 font-Figtree ">
      <div className="relative w-full group">
        <div className="absolute flex lg:hidden items-end justify-end transition duration-300 inset-0 h-[246px] w-full rounded-[20px] bg-gradient-10 p-4">
          <SecondaryButton
            label="Live View"
            classnames="bg-transparent"
            labelClassname="text-white"
            icon={<IoArrowUpOutline />}
            iconClassname=" bg-transparent rotate-45 text-white"
          />
        </div>
        <div className="absolute opacity-0 flex group-hover:opacity-100 transition duration-300 items-center justify-center inset-0 h-[246px] w-full
         rounded-[20px] bg-neutral-35 backdrop-blur-2xl">
          <SecondaryButton
            label="Live View"
            classnames=" rounded-2xl"
            icon={<IoArrowUpOutline />}
            iconClassname="rotate-45"
          />
        </div>
        <Image
          src={caseStudy.imageUrl}
          alt={caseStudy.title}
          className="h-[246px] w-full rounded-[20px] object-cover"
        />
      </div>
      <div className="w-full space-y-[5px] md:space-y-[9px]">
        <div className="space-x-3 py-2 md:py-3"><span className="text-primary-40 text-xs md:text-sm dark:text-primary-10">{caseStudy.slug}</span> <span className="text-black dark:text-white text-xs md:text-sm">{caseStudy.date}</span></div>
        <h3 className=" text-black dark:text-white text-3xl leading-[132%]">
          {caseStudy.title}
        </h3>
      </div>
    </div>
  );
};

export default CaseStudiesCard;
