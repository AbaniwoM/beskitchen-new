import React from 'react'
import AboutOne from '../../assets/woman.jpg'

const AboutSectionOne = () => {
  return (
    <div className='flex justify-around sm:flex-col md:flex-col m-[6rem] lg:m-[3rem] lg:gap-8 sm:m-[2rem] md:m-[3rem] items-center'>
        <div className='sm:w-[100%] md:w-[100%]'>
        <img src={AboutOne} className="w-[22rem] md:w-[25rem] lg:w-[22rem] h-[29rem] sp:h-[26rem] lg:h-[28rem] md:h-[34rem] z-5" />
        </div>
        <div className='flex w-[50%] flex-col sm:w-[100%] md:w-[100%] text-white gap-6 md:gap-8'>
            <h3 className='text-2xl md:text-4xl lg:text-3xl font-bold sm:mt-10 md:mt-10 sm:text-[2rem] sp:text-[1.8rem]'>Our Founder</h3>
            <p className='md:text-[1.4rem] sm:text-[1.1rem] sp:text-[1rem]'>Aenean sed lorem est. Sed quis neque ut nibh suscipit imperdiet ac non augue. Aenean ornare sit amet lectus non tristique. Nunc ut volutpat lectus. Nulla velit augue, pulvinar sed nisi sit amet, eleifend fermentum est.</p>
            <p className='md:text-[1.4rem] sm:text-[1.1rem] sp:text-[1rem]'>Quisque nibh justo, congue ut erat at, aliquet efficitur purus. Integer venenatis odio vitae orci efficitur mollis. Donec ultrices diam dictum dignissim vestibulum. Proin eleifend nunc nunc. Sed non arcu eget lorem viverra sodales.</p>
            <h3 className='text-4xl slogan sm:text-2xl'>Isiya Esther</h3>
        </div>
    </div>
  )
}

export default AboutSectionOne;