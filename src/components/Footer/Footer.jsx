import React from 'react'
import logo from '../../assets/ribbon-logo.png';
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-stone-600 h-[80vh] md:h-[122vh] sm:h-[180vh] nx:h-[135vh] yx:h-[152vh] nxx:h-[135vh] nxxx:h-[135vh] spxxx:h-[150vh] lg:h-[110vh] spx:h-[142vh] spxx:h-[230vh]  md:text-center lg:text-center md:justify-center sm:text-center sm:justify-center flex flex-col sm:flex-col flex-wrap justify-center gap-[5rem] items-center text-white sm:text-[1.2rem] yx:text-[1rem] nx:text-[0.9rem] nxx:text-[0.9rem] nxxx:text-[0.9rem] md:text-[1.4rem] lg:text-[1.4rem]'>
       <div className='flex flex-col items-center gap-6'>
       <img src={logo} className="w-[5rem] h-[5rem]" />
       <div className='text-center w-[40%] sm:w-[60%]'>Our mission is to put real wellness in every bottle. No additives. No shortcuts. We just give you the best.</div>
       </div>
       <div className='flex flex-wrap gap-[3rem] sm:justify-center sm:flex-col md:justify-center lg:justify-center md:flex-col lg:flex-col spxx:flex spxx:flex-col'>
        <div className='flex-col'>
            <h3>Opening Hours</h3>
            <h3>Mon - Sat / 9am - 5pm</h3>
        </div>
        <div className='flex-col'>
            <h3>Phone: +234-111-1111-111</h3>
            <h3>Email: paradigma@mail.com</h3>
        </div>
        <div className='flex-col'>
            <h3>34 South Curdinal St.</h3>
            <h3>Durchuster Center, Lagos, Nigeria</h3>
        </div>
        <div className='flex-col'>
            <h3>Rich red zobo leaves from the North.</h3>
            <h3>Spicy ginger from the south.</h3>
        </div>
       </div>
       <div className="flex flex-wrap gap-[41rem] sm:flex-col sm:gap-[1rem] md:flex-col lg:flex-col md:gap-[1rem] lg:gap-[1rem] sm:items-center md:items-center lg:items-center lg:text-center">
        <div className='flex flex-col'>
        <div>Copyright © 2025 - Päradigma</div>
        <p>Designed by DeuxM</p>
        </div>
        <div className='flex gap-3 flex-wrap'>
            <div className='cursor-pointer hover:text-yellow-400 text-2xl md:text-[1.9rem] lg:text-[1.9rem] yx:text-[1.4rem]'><IoLogoWhatsapp /></div>
            <div className='cursor-pointer hover:text-yellow-400 text-2xl md:text-[1.9rem] lg:text-[1.9rem] yx:text-[1.4rem]'><AiFillInstagram /></div>
            <div className='cursor-pointer hover:text-yellow-400 text-2xl md:text-[1.9rem] lg:text-[1.9rem] yx:text-[1.4rem]'><FaYoutube /></div>
        </div>
       </div>
    </div>
  )
}

export default Footer;