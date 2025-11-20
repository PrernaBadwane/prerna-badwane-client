import { ICONS, STROKES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import SecondaryButton from "@/components/Reusable/SecondaryButton/SecondaryButton";
import ServicesAccordion from "@/components/Reusable/ServicesAccordion/ServicesAccordion";
import Image from "next/image";

const Services = () => {
  return (
    <div className="relative w-full h-fit bg-primary-05  ">
      <div className="absolute insert-0 w-full bg-primary-05 ">
        <Image src={STROKES.stroke3} alt="SERVICES" className="w-full h-full" />
      </div>
      <Container>
        <div>
          <ServicesAccordion />
          <div className="w-full flex items-center justify-center mt-10 z-[100]">
  
            <SecondaryButton
              label="See All Services"
              classnames="py-3 px-[27px] rounded-2xl bg-transparent"
              labelClassname="text-white"
              icon={ICONS.whiteTopRightArrow}
              iconClassname="py-2.5 px-2.5 rounded-2xl bg-transparent"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
