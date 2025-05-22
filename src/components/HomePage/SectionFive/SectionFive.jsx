import React from 'react'
import { FaQuoteRight } from "react-icons/fa";
import clientLogo from '../../../assets/portrait.jpg'

const SectionFive = () => {
  return (
    <div className='flex sm:flex-col md:flex-col flex-wrap items-center mt-[6rem] p-[5rem] sm:p-[1rem] md:p-[4rem] lg:p-[4rem] lg:gap-8 sm:mb-[5rem] lg:mb-[3rem]'>
        <div className='text-white text-[2rem] w-[45%] lg:w-[34%] sm:w-[100%] md:w-[100%] leading-12 sm:text-[1.4rem] lg:text-[1.5rem] sm:text-center nxxx:text-[1.2rem] nxx:text-[1.2rem] nx:text-[1.2rem]'>"Since I started drinking their herbal blend, my sugar levels balanced - and it is still sweet. My kids do not want soda again. They only want your fruity zobo. Thank you Päradigma!"</div>
        <div className='flex items-center w-[55%] lg:w-[60%] sm:w-[100%] md:w-[100%] sm:mt-12 md:mt-14 md:mb-7'>
        <div className='bg-stone-600 w-[16rem] h-[19rem] nxxx:h-[11rem] sm:w-[16rem] sm:h-[13rem] md:h-[18rem] flex flex-col justify-center pl-5 gap-[5rem] sm:gap-[1.2rem] nxxx:gap-[0.3rem] nxx:gap-[0.3rem] nx:gap-[0.3rem] md:gap-[3rem] text-white'>
            <div className='spice-text text-[1.3rem] nxxx:text-[0.9rem] text-yellow-400'><FaQuoteRight /></div>
            <div>
            <h2 className='text-[1.2rem] pt-7 font-bold md:text-[1.4rem] sm:text-[1.2rem] nxxx:text-[1rem] nxx:text-[1.1rem] nx:text-[1.1rem]'>Beatrice Evans</h2>
            <p className='text-[0.9rem] md:text-[1.2rem] sm:text-[0.9rem] nxxx:text-[0.7rem] nxx:text-[0.8rem] nx:text-[0.8rem]'>Client</p>
            </div>
        </div>
        <div><img src={clientLogo} className="w-[54rem] h-[25rem] nxxx:h-[15rem] sm:w-[44rem] sm:h-[18rem] lg:h-[24rem] lg:w-[64rem]" loading='eager' /></div>
        </div>
    </div>
  )
}

export default SectionFive;