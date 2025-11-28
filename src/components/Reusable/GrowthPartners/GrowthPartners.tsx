import React from 'react'
import Container from '../Container/Container'
import Heading from '../Heading/Heading'

const GrowthPartners = () => {
  return (
    <div>
        <Container>
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
        </Container>
    </div>
  )
}

export default GrowthPartners