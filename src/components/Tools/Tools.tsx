import React from "react";
import OrbitSection from "./OrbitSection";
import Container from "../Reusable/Container/Container";
import Heading from "../Reusable/Heading/Heading";

const Tools = () => {
  return (
    <div className="bg-primary-30 dark:bg-primary-05 h-fit pt-20 md:pt-[100px] py-12 lg:py-52 font-Figtree">
      <Container>
        <Heading
          heading="Tools"
          subheading="Building Smarter, Faster, and Scalable Systems"
          alignText=" text-center"
          alignment="items-center mx-auto max-w-2xl"
        />
        <OrbitSection />
      </Container>
    </div>
  );
};

export default Tools;
