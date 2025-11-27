import { SocialMediaLinks } from "@/constents/SocialMedia";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="mt-4 md:mt-9 space-y-3 md:space-y-6 ">
      <h5 className="font-Figtree text-black dark:text-white text-[10px] md:text-sm leading-3.5">
        Social Media
      </h5>
      <div className="flex items-center justify-start gap-2 md:gap-4">
        {SocialMediaLinks.map(({ link, icon }, i) => (
          <Link
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border bg-secondary-15 dark:bg-neutral-20 border-neutral-15 p-2 md:p-3 rounded-[10px] hover:bg-secondary-05 transition transition-300 ease-out group"
          >
             <span className="text-md md:text-xl text-black dark:text-white group-hover:text-white  transition duration-200">{icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
