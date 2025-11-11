import {ReactNode } from 'react'

const Container = ({children}:{children:ReactNode}) => {
  return (
    <div className='px-5 md:px-10 lg:px-0 max-w-5xl xl:max-w-[1200px] 2xl:max-w-[1400px] w-full mx-auto'>
        {children}
    </div>
  )
}

export default Container