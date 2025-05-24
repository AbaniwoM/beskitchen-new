import React from 'react'
import AboutOne from '../../../public/woman.webp'

const AboutSectionOne = () => {
  return (
    <div className='flex justify-around sm:flex-col md:flex-col m-[6rem] lg:m-[3rem] lg:gap-8 sm:m-[2rem] md:m-[3rem] nxx:m-[3rem] nx:m-[4rem] items-center'>
        <div className='sm:w-[100%] md:w-[100%]'>
        <img src={AboutOne} className="w-[22rem] md:w-[25rem] lg:w-[22rem] h-[29rem] nxxx:h-[22rem] nxx:h-[22rem] nx:h-[25rem] sp:h-[26rem] lg:h-[28rem] md:h-[34rem] z-5" loading='eager' />
        </div>
        <div className='flex w-[50%] flex-col sm:w-[100%] md:w-[100%] text-white gap-6 md:gap-8'>
            <h3 className='text-2xl md:text-4xl lg:text-3xl font-bold sm:mt-10 md:mt-10 sm:text-[2rem] sp:text-[1.8rem] nxxx:text-[1.5rem] nxx:text-[1.5rem] nx:text-[1.5rem]'>Our Founder</h3>
            <p className='md:text-[1.4rem] sm:text-[1.1rem] sp:text-[1rem] nxxx:text-[0.9rem] nxx:text-[0.9rem] nx:text-[0.9rem]'>Misa Martha is a passionate Nigerian entrepreneur, herbal wellness advocate and the creative force behind Päradigma. Born and raised in Abuja, she grew up watching her grandmother mix roots, spices and hibiscus into healing brews that soothed everything from belly aches to heartbreak.</p>
            <p className='md:text-[1.4rem] sm:text-[1.1rem] sp:text-[1rem] nxxx:text-[0.9rem] nxx:text-[0.9rem] nx:text-[0.9rem]'>Martha started her brand in 2019 after struggling to find authentic chemical-free spice blends and natural Zobo options on the market. Tired of overly processed products, she began creating her own dry blends using locally sourced hibiscus, cloves, ginger and medicinal herbs from across Nigeria.</p>
            <h3 className='text-4xl slogan sm:text-2xl nxxx:text-[1.2rem] nxx:text-[1.2rem] nx:text-[1.2rem]'>Misa Martha</h3>
        </div>
    </div>
  )
}

export default AboutSectionOne;