import React from 'react';
import { IoMdTime } from "react-icons/io";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";

const SectionOne = () => {
  return (
    <div className="flex flex-wrap justify-center">
        <div className="bg-stone-600 w-[20rem] h-[13rem] nx:w-[17rem] nx:h-[12rem] nxx:w-[17rem] nxx:h-[12rem] nxxx:w-[15rem] nxxx:h-[11rem] flex text-center items-center justify-center text-white">
            <div className='flex-col boxes'>
                <div className='text-2xl md:text-[2rem] sm:text-[1.8rem] nx:text-[1.4rem] nxx:text-[1.4rem] nxxx:text-[1.4rem]'><IoMdTime /></div>
                <h3 className='pt-6 font-bold text-lg md:text-[1.3rem] sm:text-[1.2rem] nx:text-[1.2rem] nxx:text-[1.1rem] nxxx:text-[1rem]'>Work Hours</h3>
                <p className='text-sm font-extralight md:text-[1.1rem] sm:text-[0.9rem] md:mt-2 nx:text-[0.8rem] nxx:text-[0.8rem] nxxx:text-[0.7rem]'>Mon - Sat / 9am - 5pm</p>
            </div>
        </div>
        <div className="bg-stone-600 w-[20rem] h-[13rem] nx:w-[17rem] nx:h-[12rem] nxx:w-[17rem] nxx:h-[12rem] nxxx:w-[15rem] nxxx:h-[11rem] flex justify-center items-center text-center text-white border-l-[0.3px] border-gray-700">
            <div className='flex-col boxes'>
                <div className='text-2xl md:text-[2rem] sm:text-[1.8rem] nx:text-[1.4rem] nxx:text-[1.4rem] nxxx:text-[1.4rem]'><FaBookReader /></div>
                <h3 className='pt-6 font-bold text-lg md:text-[1.3rem] sm:text-[1.2rem] nx:text-[1.2rem] nxx:text-[1.1rem] nxxx:text-[1rem]'>Place an Order</h3>
                <p className='text-sm font-extralight md:text-[1.1rem] sm:text-[0.9rem] md:mt-2 nx:text-[0.8rem] nxx:text-[0.8rem] nxxx:text-[0.7rem]'>+234-111-1111-111</p>
            </div>
        </div>
        <div className="bg-stone-600 w-[20rem] h-[13rem] nx:w-[17rem] nx:h-[12rem] nxx:w-[17rem] nxx:h-[12rem] nxxx:w-[15rem] nxxx:h-[11rem] flex justify-center items-center text-center text-white border-l-[0.3px] border-gray-700">
            <div className='flex-col boxes'>
                <div className='text-2xl md:text-[2rem] sm:text-[1.8rem] nx:text-[1.4rem] nxx:text-[1.4rem] nxxx:text-[1.4rem]'><MdOutlineMenuBook /></div>
                <h3 className='pt-6 font-bold text-lg md:text-[1.3rem] sm:text-[1.2rem] nx:text-[1.2rem] nxx:text-[1.1rem] nxxx:text-[1rem]'>Best Spices & Drinks</h3>
                <p className='text-sm font-extralight md:text-[1.1rem] sm:text-[0.9rem] md:mt-2 nx:text-[0.8rem] nxx:text-[0.8rem] nxxx:text-[0.7rem]'>Taste the difference</p>
            </div>
        </div>
    </div>
  )
}

export default SectionOne;