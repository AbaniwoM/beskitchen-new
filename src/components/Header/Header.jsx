import React from 'react'
import logo from '../../assets/ribbon-logo.png';
import { useNavigate } from "react-router-dom";
import Hamburger from './Hamburger';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap justify-around bg-white fixed top-0 z-20 w-full">
      <img src={logo} className="w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] sm:hidden md:hidden" />
      <div className="flex items-center gap-7 text-sm lg:text-[1.1rem] cursor-pointer sm:hidden md:hidden">
        <div className='hover:text-stone-500' onClick={() => navigate("/home")}>Home</div>
        <div className='hover:text-stone-500' onClick={() => navigate("/menu")}>Menu</div>
        <div className='hover:text-stone-500' onClick={() => navigate("/about")}>About</div>
        <div className='hover:text-stone-500' onClick={() => navigate("/contact")}>Contact</div>
        <div className='bg-stone-600 w-[9rem] h-[2rem] lg:w-[11rem] lg:h-[2.5rem] flex items-center justify-center text-white ml-5 cursor-pointer hover:bg-stone-500'>+234-111-1111-111</div>
      </div>
      <div className='hidden sm:flex sm:items-center sm:justify-around sm:gap-[7rem] md:flex md:items-center md:justify-around md:gap-[18rem] sm:fixed sm:top-0 sm:z-10 md:fixed md:top-0 md:z-10 bg-white w-full'>
        <img src={logo} className="w-[4rem] md:w-[4.5rem] h-[4rem] yx:h-[3.5rem] yx:w-[3.6rem] md:h-[4.5rem] sm:w-[3.5rem] sm:h-[3.5rem]" />
        <Hamburger />
      </div>
    </div>
  )
}

export default Header;