import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";
import SocialCard from "./SocialCard";
import { FaFacebook } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { LuFileSymlink } from "react-icons/lu";
import Button from "../Button";
import { IoArrowUpOutline } from "react-icons/io5";

const CallToAction2 = () => {
  const pathname = usePathname() ?? "/";
  const isVisible = pathname != "/contact-us";
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4 pt-[30px] md:gap-6">
      {/* LEFT CARD — unchanged */}
      <div className="w-full md:w-[45%] flex flex-col justify-between  shadow-[inset_0_1px_8px_rgba(225,225,225,0.3)] bg-secondary-20 p-4 rounded-2xl">
        <div>
          <div className="flex items-center gap-6">
            <Image
              src={IMAGES.profile}
              alt="Profile"
              className="rounded-full size-[60px] lg:size-[90px] border-3.5 border-white shadow-20"
            />
            <div className="bg-gradient-40 p-[0.5px] rounded-full">
              <div className="flex items-center justify-center h-fit gap-0.5 bg-secondary-05 rounded-full">
                <div className="bg-neutral-75 py-1 pr-3.5 pl-2.5 rounded-full flex items-center justify-center h-fit">
                  <div className="m-1 bg-white/40 rounded-full size-[13px] flex items-center justify-center">
                    <div className="bg-white size-[9px] rounded-full"></div>
                  </div>
                  <p className="md:text-sm text-xs text-white">
                    Available for work
                  </p>
                </div>
              </div>
            </div>
          </div>

          <>
            <h2 className="font-bold text-xl md:text-2xl mt-4 text-white">
              Prerna Badwane
            </h2>
            <p className="text-sm md:text-base mt-2 text-white">
              I help businesses achieve faster growth through scalable web and
              mobile app solutions.
            </p>
          </>
        </div>
        <div className="flex items-end justify-end mt-10 md:mt-0">
          {isVisible ? (
            <Button
              label="Book A Call "
              icon={<IoArrowUpOutline />}
              classnames="flex-row-reverse w-fit bg-transparent text-black dark:text-white font-semibold"
              iconClassname="rotate-45 md:mt-1"
            />
          ) : (
            <Button
              label="Download Resume"
              classnames="text-sm px-4 py-2.5 w-fit flex-row-reverse my-[3px]"
              icon={<LuFileSymlink />}
              labelClassname="hidden sm:block"
            />
          )}
        </div>
      </div>

      {/* RIGHT GRID — this is where I added everything */}
      <div className="w-full  md:w-[55%]">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* Social Cards */}

          <SocialCard icon={<FaFacebook />} title="Facebook" />
          <SocialCard icon={<FaFacebook />} title="Instagram" />
          <SocialCard icon={<FaFacebook />} title="LinkedIn" />
          <SocialCard icon={<FaFacebook />} title="GitHub" />
          <SocialCard icon={<FaFacebook />} title="Twitter" />
          <SocialCard icon={<FaFacebook />} title="Behance" />

          {/* Email */}
        </div>
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <SocialCard
            icon={<FaFacebook />}
            title="helloprernna@gmail.com"
            fullWidth
          />

          <SocialCard icon={<FaFacebook />} title="+0008813541668" fullWidth />
        </div>
      </div>
    </div>
  );
};

export default CallToAction2;
