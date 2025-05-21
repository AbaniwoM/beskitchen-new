import React from 'react'
import TeamOne from '../../assets/confident.jpg'
import TeamTwo from '../../assets/happy.jpg'
import TeamThree from '../../assets/medium.jpg'

const AboutSectionTwo = () => {
  return (
    <div className='flex flex-col gap-8 items-center p-[5rem] sm:p-[2rem] md:p-[4rem] lg:p-[2rem] sm:mt-[5rem] lg:mt-[6rem]'>
        <div className='text-white font-bold text-2xl md:text-3xl lg:text-3xl sm:text-[2rem] sp:text-[1.8rem] nxxx:text-[1.5rem] nxx:text-[1.5rem] nx:text-[1.5rem]'>Meet Our Team</div>
        <div className='flex sm:flex-col md:flex-col gap-6'>
            <div className='flex flex-col items-center gap-5'>
            <img src={TeamOne} className="w-[80rem] md:w-[26rem] h-[30rem] nxxx:h-[22rem] nxx:h-[23rem] nxx:w-[17rem] nx:h-[25rem] nx:w-[19rem] sm:h-[32rem] sp:h-[28rem] md:h-[34rem] lg:h-[24rem]" />
            <div className='flex flex-col items-center gap-2 nxxx:gap-[0.1rem] nxx:gap-[0.1rem] nx:gap-[0.1rem]'>
            <h3 className='text-white font-bold text-[1.2rem] md:text-[1.6rem] sm:text-[1.4rem] sp:text-[1.3rem] nxxx:text-[1.1rem] nxx:text-[1.1rem] nx:text-[1.1rem]'>Bobby Porter</h3>
            <p className='text-gray-400 md:text-[1.4rem] sm:text-[1.1rem] sp:text-[1.1rem] nxxx:text-[0.9rem] nxx:text-[0.9rem] nx:text-[0.9rem]'>Co-founder</p>
            </div>
            </div>
            <div className='flex flex-col items-center gap-5 sm:mt-4 md:mt-8'>
            <img src={TeamTwo} className="w-[80rem] h-[30rem] nxxx:h-[22rem] sm:h-[32rem] nxx:h-[23rem] nxx:w-[17rem] nx:h-[25rem] nx:w-[19rem] sp:h-[28rem] md:w-[26rem] md:h-[34rem] lg:h-[24rem]" />
            <div className='flex flex-col items-center gap-2 nxxx:gap-[0.1rem] nxx:gap-[0.1rem] nx:gap-[0.1rem]'>
            <h3 className='text-white font-bold text-[1.2rem] md:text-[1.6rem] sm:text-[1.4rem] sp:text-[1.3rem] nxxx:text-[1.1rem] nxx:text-[1.1rem] nx:text-[1.1rem]'>Bianca Powell</h3>
            <p className='text-gray-400 md:text-[1.4rem] sm:text-[1.1rem] sp:text-[1.1rem] nxxx:text-[0.9rem] nxx:text-[0.9rem] nx:text-[0.9rem]'>Accounts</p>
            </div>
            </div>
            <div className='flex flex-col items-center gap-5 sm:mt-4 md:mt-8'>
            <img src={TeamThree} className="w-[80rem] h-[30rem] nxxx:h-[22rem] nxx:h-[23rem] nxx:w-[17rem] nx:h-[25rem] nx:w-[19rem] sm:h-[32rem] sp:h-[28rem] md:w-[26rem] md:h-[34rem] lg:h-[24rem]" />
            <div className='flex flex-col items-center gap-2 nxxx:gap-[0.1rem] nxx:gap-[0.1rem] nx:gap-[0.1rem]'>
            <h3 className='text-white font-bold text-[1.2rem] md:text-[1.6rem] sm:text-[1.4rem] sp:text-[1.3rem] nxxx:text-[1.1rem] nxx:text-[1.1rem] nx:text-[1.1rem]'>Jeremy Elliot</h3>
            <p className='text-gray-400 md:text-[1.4rem] sm:text-[1.1rem] sp:text-[1.1rem] nxxx:text-[0.9rem] nxx:text-[0.9rem] nx:text-[0.9rem]'>Distribution</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSectionTwo;