/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ICONS, STROKES } from "@/assets";
import CallToAction2 from "@/components/Reusable/Button/CallToAction2/CallToAction2";
import Container from "@/components/Reusable/Container/Container";
import { SocialMediaLinks } from "@/constents/SocialMedia";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Footer = () => {
  const pathname = usePathname() ?? "/";
  const isVisible = !(
    pathname === "/" ||
    pathname === "/services" ||
    pathname.startsWith("/services/")
  );
  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about-me" },
    { label: "Projects", link: "/projects" },
    { label: "Blogs", link: "/blogs" },
    { label: "Contact", link: "/contact-us" },
  ];
  // footerData.ts

  const footerSections = [
    {
      title: "Services",
      items: [
        "Web Development",
        "App Development",
        "SEO & Digital Visibility",
        "AI Integration",
      ],
    },
    {
      title: "Contact",
      items: [
        {
          icon: "📞",
          text: "+91 9420832505",
        },
        {
          icon: "✉️",
          text: "prernabadwane@gmail.com",
        },
        {
          icon: "📍",
          text: "Ch. Sambhajinagar, Maharashtra, India",
        },
      ],
    },
  ];

  return (
    <div className="relative bg-primary-05 font-Figtree">
      <Image
        src={STROKES.stroke3}
        alt="hero section"
        fill
        priority
        className="hidden dark:block scale-y-[-1] scale-X-[-1] object-cover opacity-70"
      />

      <Container>
        <div>
          <div className={`${isVisible?"hidden dark:block":"hidden"} relative  z-[30]`}>   <CallToAction2 /></div>
          <div className="relative flex flex-col w-full items-center justify-center gap-[70px] text-center h-fit py-10 z-[20]">
            {/* TOP NAV */}
            <div className="flex items-center justify-between w-full py-1 px-2.5">
              <div className="flex items-center justify-center gap-1.5">
                <Image src={ICONS.logo} alt="Logo" className="size-7" />
                <h1 className="uppercase font-bold text-sm tracking-[0.42px] text-left text-white">
                  Prerna <br /> Badwane
                </h1>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.link;

                  return (
                    <Link
                      key={index}
                      href={item.link}
                      className={`text-sm font-medium mx-4 underline-offset-4 transition-all
                      ${
                        isActive
                          ? "text-white dark:bg-neutral-75 bg-neutral-30 dark:shadow-30 dark:border border-white font-semibold py-2 px-5 rounded-full" // active
                          : "text-white " // normal
                      }
                    `}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <div className={`${!isVisible?"block":"hidden"} flex items-center justify-start gap-2 md:gap-6`}>
                {SocialMediaLinks.map(({ link, icon }, i) => (
                  <Link
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[10px] hover:bg-secondary-05 transition transition-300 ease-out group"
                  >
                    <span className="text-md md:text-2xl text-black dark:text-white group-hover:text-white  transition duration-200">
                      {icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-10 lg:gap-0 px-4">
              {/* LEFT PARAGRAPH */}
              <p className="text-white lg:max-w-md text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                totam fugiat saepe eligendi. Sit ea ut laboriosam inventore
                expedita? Distinctio ad asperiores doloribus reprehenderit
                dolorum vitae suscipit fugiat deleniti. Minima.
              </p>

              {/* RIGHT SECTIONS */}
              <div className="flex flex-col sm:flex-row gap-10">
                {footerSections.map((section, idx) => (
                  <div key={idx} className="flex flex-col gap-3 text-left">
                    <h3 className="text-white font-semibold text-lg">
                      {section.title}
                    </h3>

                    <ul className="space-y-2">
                      {section.items.map((item: any, i: number) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-white/80"
                        >
                          {/* FIXED: Safe check for icon */}
                          {typeof item === "object" && "icon" in item ? (
                            <>
                              <span className="text-lg">{item.icon}</span>
                              <span>{item.text}</span>
                            </>
                          ) : (
                            <span>{item}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <p className="border-t-2 border-neutral-75 w-full pt-7 text-neutral-40">
              © Copyright 2025, Prerna All Rights Reserved
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
