import React from 'react';
import { IoMdTime } from "react-icons/io";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";

const SectionOne = () => {
  return (
    <div className="flex flex-wrap justify-center">
        <div className="bg-stone-600 w-[20rem] h-[13rem] flex text-center items-center justify-center text-white">
            <div className='flex-col boxes'>
                <div className='text-2xl md:text-[2rem]'><IoMdTime /></div>
                <h3 className='pt-6 font-bold text-lg md:text-[1.3rem]'>Work Hours</h3>
                <p className='text-sm font-extralight md:text-[1.1rem] md:mt-2'>Mon - Sun / 12am - 12pm</p>
            </div>
        </div>
        <div className="bg-stone-600 w-[20rem] h-[13rem] flex justify-center items-center text-center text-white border-l-[0.3px] border-gray-700">
            <div className='flex-col boxes'>
                <div className='text-2xl md:text-[2rem]'><FaBookReader /></div>
                <h3 className='pt-6 font-bold text-lg md:text-[1.3rem]'>Place an Order</h3>
                <p className='text-sm font-extralight md:text-[1.1rem] md:mt-2'>+234-111-1111-111</p>
            </div>
        </div>
        <div className="bg-stone-600 w-[20rem] h-[13rem] flex justify-center items-center text-center text-white border-l-[0.3px] border-gray-700">
            <div className='flex-col boxes'>
                <div className='text-2xl md:text-[2rem]'><MdOutlineMenuBook /></div>
                <h3 className='pt-6 font-bold text-lg md:text-[1.3rem]'>Best Spices & Drinks</h3>
                <p className='text-sm font-extralight md:text-[1.1rem] md:mt-2'>Taste the difference</p>
            </div>
        </div>
    </div>
  )
}

export default SectionOne;