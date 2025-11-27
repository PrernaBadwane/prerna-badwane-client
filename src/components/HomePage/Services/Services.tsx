import { ICONS, STROKES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import SecondaryButton from "@/components/Reusable/SecondaryButton/SecondaryButton";
import ServicesAccordion from "@/components/Reusable/ServicesAccordion/ServicesAccordion";
import Image from "next/image";
import { IoArrowUpOutline } from "react-icons/io5";

const Services = () => {
  return (
    <div className="relative w-full h-fit md:py-10 ">
      <div className="absolute insert-0 w-full ">
        <Image
          src={STROKES.stroke3}
          alt="SERVICES"
          className="hidden dark:block w-full h-full md:max-w-[800px]"
        />
      </div>
      <Container>
        <div className="relative z-[30]">
          <div className="mb-[70px] space-y-1.5 max-w-2xl mx-auto">
            <Heading
              heading="My Works"
              subheading="Building Smarter, Faster, and Scalable Systems"
              alignText=" text-center"
              alignment="items-center "
            />
            <p className="text-neutral-50 dark:text-white text-center text-sm lg:text-lg ">
              A few examples of how I build digital experiences that are simple,
              scalable, and built for impact.
            </p>
          </div>

          <ServicesAccordion />
          <div className="w-full flex items-center justify-center mt-10 ">
            <SecondaryButton
              label="See All Services"
              icon={<IoArrowUpOutline />}
              iconClassname="text-black dark:text-white rotate-45"
              classnames="bg-transparent dark:text-white"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
