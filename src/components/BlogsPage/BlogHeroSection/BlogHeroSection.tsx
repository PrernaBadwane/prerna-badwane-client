import { STROKES } from '@/assets';
import Container from '@/components/Reusable/Container/Container';
import Heading from '@/components/Reusable/Heading/Heading';
import SkillStrip from '@/components/Shared/SkillStrip/SkillStrip';
import Image from 'next/image';
import React from 'react'

const BlogHeroSection = () => {
  return (

    <div className="relative">
      {" "}
      <div className="relative overflow-hidden flex flex-col items-center justify-center w-full h-full py-10 font-Figtree">
        <div className="absolute overflow-hidden -top-40 -right-[180px]">
          <Image
            src={STROKES.stroke4}
            alt="Hero Light Background"
            className="object-cover overflow-hidden size-[626px]"
            priority
          />
        </div>
        <div className="absolute overflow-hidden -top-[180px] -left-[200px]">
          <Image
            src={STROKES.stroke4}
            alt="Hero Light Background"
            className="object-cover overflow-hidden size-[626px] rotate-100"
            priority
          />
        </div>
        <div className="absolute overflow-hidden top-0 right-0 rotate-90 opacity-45 md:dark:block hidden">
          <Image
            src={STROKES.stroke7}
            alt="Hero Light Background"
            className="object-cover overflow-hidden size-[626px]"
            priority
          />
        </div>
        <div className="absolute overflow-hidden -top-[100px] rotate-90 opacity-30 left-[100px] md:dark:block hidden">
          <Image
            src={STROKES.stroke7}
            alt="Hero Light Background"
            className="object-cover overflow-hidden size-[626px] rotate-100"
            priority
          />
        </div>

        <Container>
          {/* Overlay */}

          <div className="relative h-full flex flex-col z-30 pt-[100px] items-start justify-start dark:text-white text-black">
            <Heading
              heading="Blogs"
              subheading="The People, Purpose, and Principles Behind Our Investments"
              alignText=" text-center"
              alignment="items-center md:max-w-2xl lg:max-w-4xl mx-auto"
            />
            <p className="text-neutral-50 md:max-w-2xl lg:max-w-4xl mx-auto dark:text-white mt-4 md:mt-6 text-center w-full text-sm lg:text-lg">
              We invest with purpose, guided by a clear vision, strong values,
              and a team dedicated to long-term impact.
            </p>
            <div className='flex flex-col md:flex-row'></div>
          </div>
        </Container>
      </div>
      <div className="absolute bottom-[-120] left-0 right-0 z-30 ">
        <SkillStrip />
      </div>
    </div>
  );
};

export default BlogHeroSection;

