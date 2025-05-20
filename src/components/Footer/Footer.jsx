import React from 'react'
import logo from '../../assets/logo.jpeg';
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-stone-600 h-[80vh] md:h-[122vh] sm:h-[150vh] spxxx:h-[165vh] lg:h-[110vh] spx:h-[142vh] spxx:h-[230vh]  md:text-center lg:text-center md:justify-center sm:text-center sm:justify-center flex flex-col flex-wrap justify-center gap-[5rem] items-center text-white sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.4rem]'>
       <div className='flex flex-col items-center gap-6'>
       <img src={logo} className="w-[4rem] h-[4rem]" />
       <div className='text-center w-[40%] sm:w-[60%]'>Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metusurabitur.</div>
       </div>
       <div className='flex flex-wrap gap-[3rem] sm:justify-center sm:flex-col md:justify-center lg:justify-center md:flex-col lg:flex-col spxx:flex spxx:flex-col'>
        <div className='flex-col'>
            <h3>Opening Hours</h3>
            <h3>Mon - Sun / 12am - 12pm</h3>
        </div>
        <div className='flex-col'>
            <h3>Phone: +234-111-1111-111</h3>
            <h3>Email: company@mail.com</h3>
        </div>
        <div className='flex-col'>
            <h3>304 North Cardinal St.</h3>
            <h3>Dorchester Center, MA 02124</h3>
        </div>
        <div className='flex-col'>
            <h3>Nam nec nisl placerat tempus erat</h3>
            <h3>Condimentum metusurabitur</h3>
        </div>
       </div>
       <div className="flex flex-wrap gap-[41rem] sm:flex-col sm:gap-[1rem] md:flex-col lg:flex-col md:gap-[1rem] lg:gap-[1rem] sm:items-center md:items-center lg:items-center lg:text-center">
        <div className='flex flex-col'>
        <div>Copyright © 2025 - Be's Kitchen</div>
        <p>Designed by Mercy & Michael</p>
        </div>
        <div className='flex gap-3 flex-wrap'>
            <div className='cursor-pointer hover:text-yellow-400 text-2xl md:text-[1.9rem] lg:text-[1.9rem]'><IoLogoWhatsapp /></div>
            <div className='cursor-pointer hover:text-yellow-400 text-2xl md:text-[1.9rem] lg:text-[1.9rem]'><AiFillInstagram /></div>
            <div className='cursor-pointer hover:text-yellow-400 text-2xl md:text-[1.9rem] lg:text-[1.9rem]'><FaYoutube /></div>
        </div>
       </div>
    </div>
  )
}

export default Footer;