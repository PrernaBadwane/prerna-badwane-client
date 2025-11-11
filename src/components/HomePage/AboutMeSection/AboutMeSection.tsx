import { STROKES } from '@/assets'
import Container from '@/components/Reusable/Container/Container'
import Image from 'next/image'
import React from 'react'

const AboutMeSection = () => {
  return (
    <div className='relative bg-primary-05 h-[120vh] pt-52'>
        <div className='absolute top-[-220]'>
            <Image src={STROKES.stroke1} alt="stroke-background" />
        </div>
        <>
        <Container>
            <div className='flex flex-col gap-8 md:gap-12 lg:gap-16 '>

            </div>
        </Container>
        </>
    </div>
  )
}

export default AboutMeSection