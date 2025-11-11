import { SocialMediaLinks } from "@/constents/SocialMedia";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className=" mt-9 space-y-6">
      <h5 className="font-Figtree text-white text-sm leading-3.5">
        Social Media
      </h5>
      <div className="flex items-center justify-start gap-4">
        {SocialMediaLinks.map(({ link, icon }, i) => (
          <Link
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border bg-neutral-20 border-neutral-15 p-3 rounded-[10px] hover:bg-secondary-05 transition transition-300 ease-out"
          >
            <Image src={icon} alt={"Prerna"} className=" size-6" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
