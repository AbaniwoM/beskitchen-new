import React from 'react'
import zoboOne from '../../../assets/cocktail.jpg'
import zoboTwo from '../../../assets/pouring.jpg'

const SectionTwo = () => {
  return (
    <div className='flex sm:flex-col md:flex-col pt-[6rem] pb-[6rem] pl-[4.8rem] sm:pl-[1.5rem] pr-[4.2rem] sm:pr-[1.5rem] gap-[4rem] lg:gap-[4rem]'>
        <div className='flex w-[60%] sm:w-[100%]  md:w-[100%] items-center'>
            <img src={zoboOne} className="w-[18rem] h-[20rem] sm:h-[18rem] spxx:h-[16rem] z-5" />
            <img src={zoboTwo} className="w-[25rem] lg:w-[30rem] h-[25rem] sm:h-[22rem] spxx:h-[20rem] spxx:w-[22rem] ml-[-5rem] sm:ml-[-11rem] spxx:ml-[-14rem] lg:ml-[-13rem]" />
        </div>
        <div className='flex flex-col w-[40%]  sm:w-[100%] md:w-[100%] text-white justify-center gap-8'>
            <h3 className='zoboText text-2xl w-[65%] sm:w-[80%] sp:w-[85%] md:w-[90%] md:text-[2rem] md:leading-[2.5rem]'>Bringing you a nice blend of Zobo drinks specially made to suite your taste</h3>
            <p className='md:text-[1.3rem]'>Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismod cursus non justo. Sed sagittis et urna non efficitur nulla nec lacus tincidunt.</p>
        </div>
    </div>
  )
}

export default SectionTwo;