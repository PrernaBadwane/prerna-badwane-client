import BlogHeroSection from '@/components/BlogsPage/BlogHeroSection/BlogHeroSection'
import Testimonials from '@/components/Reusable/Testimonials/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div className='dark:bg-primary-05 bg-white'>
        <BlogHeroSection/>
        <Testimonials/>
    </div>
  )
}

export default page