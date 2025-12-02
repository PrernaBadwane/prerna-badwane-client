import MyWorks from '@/components/HomePage/MyWorks/MyWorks'
import Services from '@/components/HomePage/Services/Services'
import Testimonials from '@/components/Reusable/Testimonials/Testimonials'
import ServicesHeroSection from '@/components/ServicesPage/ServicesHeroSection/ServicesHeroSection'
import React from 'react'
import CallToAction from './../../../components/Reusable/CallToAction/CallToAction';
import Faq from '@/components/Reusable/Faq/Faq'

const page = () => {
  return (
    <div className='bg-white dark:bg-primary-05'>
        <ServicesHeroSection    />
        <Services/>
        <MyWorks/>
        <Faq/>
        <Testimonials/>
        <CallToAction/>
    </div>
  )
}

export default page