import Testimonials from '@/components/Reusable/Testimonials/Testimonials'
import ServicesHeroSection from '@/components/ServicesPage/ServicesHeroSection/ServicesHeroSection'
import Faq from '@/components/Reusable/Faq/Faq'
import CallToAction from '@/components/Reusable/CallToAction/CallToAction'

const page = () => {
  return (
    <div className='bg-white dark:bg-primary-05'>
        <ServicesHeroSection    />
        <Faq/>
        <Testimonials/>
        <CallToAction/>
    </div>
  )
}

export default page