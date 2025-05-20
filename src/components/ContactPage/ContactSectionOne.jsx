import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ContactSectionOne = () => {
  return (
    <div className='flex sm:flex-col md:flex-col bg-stone-600 h-[13rem] sm:h-[32rem] md:h-[32rem] sp:m-[3rem] md:m-[6rem] spxx:m-[2rem] spxxx:m-[3rem] m-[4rem] sm:m-[1.5rem] lg:m-[2rem] sm:mb-[5.5rem] spxx:mb-[5.5rem] spxx:mt-[5.5rem] sp:mb-[5.5rem] sp:mt-[5.5rem] lg:mb-[5.5rem] lg:mt-[5.5rem] spxxx:mb-[5.5rem] spxxx:mt-[5.5rem] sm:mt-[5.5rem] items-center sm:text-center justify-center gap-[4rem] sm:gap-[4.5rem]'>
        <div className='flex items-center gap-4 sm:gap-2 md:gap-5'>
            <div className='text-4xl md:text-5xl spxx:text-3xl text-yellow-400'><FaLocationDot /></div>
            <div className='flex flex-col text-white'>
                <h3 className='font-bold text-[1.2rem] md:text-[1.5rem]'>Physical Address</h3>
                <p className='text-[0.9rem] md:text-[1.2rem]'>304 North Cardinal St. <br/> Dorchester Center, MA 02124</p>
            </div>
        </div>
        <div className='flex items-center gap-4 md:gap-6'>
            <div className='text-4xl md:text-5xl spxx:text-3xl text-yellow-400'><FaPhoneAlt /></div>
            <div className='flex flex-col text-white'>
                <h3 className='font-bold text-[1.2rem] md:text-[1.5rem]'>Phone Numbers</h3>
                <p className='text-[0.9rem] md:text-[1.2rem]'> (850)324-7023 <br/> 1-800-123-4567</p>
            </div>
        </div>
        <div className='flex items-center gap-4 md:gap-6'>
            <div className='text-4xl md:text-5xl spxx:text-3xl text-yellow-400'><IoMdMail /></div>
            <div className='flex flex-col text-white'>
                <h3 className='font-bold text-[1.2rem] md:text-[1.5rem]'>Email Address</h3>
                <p className='text-[0.9rem] md:text-[1.2rem]'>info@mail.com <br/> contact@company.com</p>
            </div>
        </div>
    </div>
  )
}

export default ContactSectionOne;