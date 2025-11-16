import { ICONS, STROKES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";

const MyWorks = () => {
  return (
    <div className="relative bg-primary-05 h-fit py-12 lg:py-52">
      <div className="absolute top-0">
        <Image src={STROKES.stroke2} alt="stroke-background" />
      </div>
      <>
        <Container>
          <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
            <Heading heading="My Works" subheading="my selected works" alignText="max-w-sm"/>
            <div className="flex flex-col md:items-end max-w-sm">
              <p className="text-white text-lg">A few examples of how I build digital experiences that are simple, scalable, and built for impact.</p>
              <Button
                label="Contact me"
                icon={ICONS.whiteTopRightArrow}
                classnames="flex-row-reverse bg-transparent text-white border-white w-fit font-semibold py-3.5 px-5 mt-6"
              />
            </div>
          </div>
          <div>
            
          </div>
        </Container>
      </>
    </div>
  );
};

export default MyWorks;
