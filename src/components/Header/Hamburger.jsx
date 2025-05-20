import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";


const Hamburger = () => {
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  const showNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <header className="">
        {/* hamburger */}
        {nav ? (
          // close button
          <i
            className="fixed left-[19.5rem] sm:text-[1.5rem] sp:left-[18.3rem] spx:left-[21.5rem] sm:left-[21.8rem] md:left-[40rem] top-[1rem] sm:top-[0.9rem] md:top-[1.2rem] md:text-4xl text-3xl text-black z-50 sm:block md:block cursor-pointer"
            aria-hidden="true"
            onClick={showNav}
          ><LiaTimesSolid /></i>
        ) : (
          <i
            className="text-3xl sm:text-[1.5rem] md:block sm:block cursor-pointer"
            aria-hidden="true"
            onClick={showNav}
          ><RxHamburgerMenu /></i>
        )}

        {/* mobile nav */}
        <nav
          className={`h-full fixed overflow-y-auto top-[0px] w-[100%] md:w-[100%] sm:flex sm:items-center sm:justify-center sm:text-center md:flex md:items-center md:justify-center md:text-center sm:z-40 md:z-40 sm:block md:block sm:bg-white md:bg-white z-50 duration-1000 ${
            nav ? "left-[0px]" : "left-[-100vw]"
          } `}
        >
        <div className='sm:text-black sm:flex sm:flex-col sm:gap-[2rem] sm:text-[1.1rem] md:flex md:flex-col md:gap-[3rem] md:text-[2rem]'>
        <div className='hover:text-stone-500' onClick={() => navigate("/home")}>Home</div>
        <div className='hover:text-stone-500' onClick={() => navigate("/menu")}>Menu</div>
        <div className='hover:text-stone-500' onClick={() => navigate("/about")}>About</div>
        <div className='hover:text-stone-500' onClick={() => navigate("/contact")}>Contact</div>
        <div className='bg-stone-600 w-[13rem] sm:w-[12rem] sm:h-[2.8rem] md:w-[21rem] h-[3rem] md:h-[5rem] flex items-center justify-center text-white ml-5 cursor-pointer hover:bg-stone-500'>+234-111-1111-111</div>
        </div>
        </nav>
      </header>
    </>
  );
};

export default Hamburger;
