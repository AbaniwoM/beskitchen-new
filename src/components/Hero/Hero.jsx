import React from 'react'
import heroLogo from '../../../public/spices.webp'
import heroLogoTwo from '../../../public/drink.webp'

const Hero = () => {
  return (
    <div className="bg-[url('../../../bg-transformed.webp')] bg-cover h-[85vh] nxxx:h-[97vh] nxx:h-[107vh] nx:h-[108vh] spxx:h-[120vh] spy:h-[90vh] spxxx:h-[100vh] flex flex-wrap justify-start gap-[1rem] sm:gap-[0rem] pt-[9rem] xxl:pt-[11rem] md:pt-[12rem] spxx:pt-[7.5rem] sm:pt-[10rem] lg:pt-[14rem]">
        <div className="flex flex-col pl-[6rem] sm:pl-[3rem] spxx:pl-[3rem] justify-center">
        <div className="font-style sm:text-[3rem] spxx:text-[2.5rem]">Päradigma</div>
        <p className="slogan">Doing the best!</p>
        </div>
        <div className='flex'>
          <img src={heroLogoTwo} className="w-[25rem] h-[22rem] sm:h-[20rem] spxx:ml-[-4rem] sm:ml-[-4rem]" loading='eager' />
          <img src={heroLogo} className="w-[25rem] sm:w-[20rem] h-[30rem] sm:h-[24rem] ml-[-13rem]" loading='eager' />
        </div>
    </div>
  )
}

export default Hero;