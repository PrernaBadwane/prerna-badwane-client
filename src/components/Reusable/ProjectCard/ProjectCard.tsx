import Image, { StaticImageData } from "next/image";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { ICONS } from "@/assets";
import { IoArrowUpOutline } from "react-icons/io5";
export type TProject = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string | StaticImageData;
};
const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <div className="space-y-4 max-w-[373px] font-Figtree ">
      <div className="w-full space-y-[5px] md:space-y-[9px]">
        <h3 className=" text-black dark:text-white text-3xl leading-[132%]">
          {project.title}
        </h3>
        <p className="text-black dark:text-neutral-40 text-xs ">
          {project.description}
        </p>
      </div>
      <div className="w-full flex gap-1">
        {project.tags.map((tag) => (
          <p
            key={tag}
            className="px-2 py-1  rounded-full bg-primary-25 dark:bg-primary-15 text-black dark:text-primary-10 text-[8px]"
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="relative w-full group">
        <div className="absolute flex lg:hidden items-end justify-end transition duration-300 inset-0 h-[446px] w-full rounded-[20px] bg-gradient-10 p-4">
          <SecondaryButton
            label="Live View"
            classnames="bg-transparent"
            labelClassname="text-white"
            icon={<IoArrowUpOutline />}
            iconClassname=" bg-transparent rotate-45 text-white"
          />
        </div>
        <div className="absolute opacity-0 flex group-hover:opacity-100 transition duration-300 items-center justify-center inset-0 h-[446px] w-full rounded-[20px] bg-neutral-35 backdrop-blur-2xl">
          <SecondaryButton
            label="Live View"
            classnames=" rounded-2xl"
            icon={<IoArrowUpOutline />}
            iconClassname="rotate-45"
          />
        </div>
        <Image
          src={project.imageUrl}
          alt={project.title}
          className="h-[446px] w-[373px] rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
