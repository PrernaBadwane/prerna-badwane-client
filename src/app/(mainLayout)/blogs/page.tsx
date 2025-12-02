import BlogHeroSection from '@/components/BlogsPage/BlogHeroSection/BlogHeroSection'
import MyCaseStudies from '@/components/BlogsPage/MyCaseStudies/MyCaseStudies'
import Faq from '@/components/Reusable/Faq/Faq'
import Testimonials from '@/components/Reusable/Testimonials/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div className='dark:bg-primary-05 bg-white'>
        <BlogHeroSection/>
        <MyCaseStudies/>
        <Faq/>
        <Testimonials/> 
    </div>
  )
}

export default page