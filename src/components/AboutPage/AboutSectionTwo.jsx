import React from 'react'
import TeamOne from '../../assets/confident.jpg'
import TeamTwo from '../../assets/happy.jpg'
import TeamThree from '../../assets/medium.jpg'

const AboutSectionTwo = () => {
  return (
    <div className='flex flex-col gap-8 items-center p-[5rem] sm:p-[2rem] md:p-[4rem] lg:p-[2rem] sm:mt-[5rem] lg:mt-[6rem]'>
        <div className='text-white font-bold text-2xl md:text-3xl lg:text-3xl'>Meet Our Team</div>
        <div className='flex sm:flex-col md:flex-col gap-6'>
            <div className='flex flex-col items-center gap-5'>
            <img src={TeamOne} className="w-[80rem] md:w-[26rem] h-[30rem] md:h-[34rem] lg:h-[24rem]" />
            <div className='flex flex-col items-center gap-2'>
            <h3 className='text-white font-bold text-[1.2rem] md:text-[1.6rem]'>Bobby Porter</h3>
            <p className='text-gray-400 md:text-[1.4rem]'>Co-founder</p>
            </div>
            </div>
            <div className='flex flex-col items-center gap-5 sm:mt-4 md:mt-8'>
            <img src={TeamTwo} className="w-[80rem] h-[30rem] md:w-[26rem] md:h-[34rem] lg:h-[24rem]" />
            <div className='flex flex-col items-center gap-2'>
            <h3 className='text-white font-bold text-[1.2rem] md:text-[1.6rem]'>Bianca Powell</h3>
            <p className='text-gray-400 md:text-[1.4rem]'>Accounts</p>
            </div>
            </div>
            <div className='flex flex-col items-center gap-5 sm:mt-4 md:mt-8'>
            <img src={TeamThree} className="w-[80rem] h-[30rem] md:w-[26rem] md:h-[34rem] lg:h-[24rem]" />
            <div className='flex flex-col items-center gap-2'>
            <h3 className='text-white font-bold text-[1.2rem] md:text-[1.6rem]'>Jeremy Elliot</h3>
            <p className='text-gray-400 md:text-[1.4rem]'>Distribution</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSectionTwo;