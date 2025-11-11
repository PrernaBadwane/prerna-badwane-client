import { ICONS } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems = [{
    label: "Home",
    link: "/"
  }, {
    label: "About",
    link: "/about"
  }, {
    label: "Projects",
    link: "/projects"
  },{
    label:"Blogs"
    ,link:"/blogs"
  },{
    label :"Contact",
    link : "/contact"
  }
];
  return (
    <div className="relative flex items-center justify-center mx-5 z-999">
      <div className="flex items-center justify-between bg-neutral-05 border-[0.3px] w-full max-w-[786px] border-white rounded-2xl shadow-10 font-Figtree py-1 px-2.5 ">
        <div className="flex items-center justify-center gap-1.5">
          <Image src={ICONS.logo} alt="Logo" className="size-7" />
          <h1 className="uppercase font-bold text-sm leading-normal tracking-[0.42px] text-white">
            Prerne <br /> Badwane
          </h1>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          {navItems.map((item, index) => (
            <Link key={index} href={item.link} className="text-sm text-white font-medium leading-normal mx-4 hover:underline underline-offset-4">
              {item.label}
            </Link>
          ))}
        </div>
        <Button label="Download Resume" classname="text-sm px-4 py-2.5 flex-row-reverse my-[3px]" icon={ICONS.content} labelClassname="hidden sm:visible"/>
      </div>
    </div>
  );
};

export default Navbar;
