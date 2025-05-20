import React from 'react'

const MenuSectionThree = () => {
  return (
    <div>
        <div className="bg-[url('../../../spice.jpg')] relative bg-cover sm:bg-center md:bg-center lg:bg-center h-[80vh] spxx:h-[105vh] md:h-[75vh] flex flex-col flex-wrap justify-end gap-[1rem] m-[4rem] sm:m-[2rem]">
        <div className="absolute inset-0 bg-black opacity-50" ></div>
        <div className='flex flex-col pl-10 pr-10 pb-16 gap-2 sm:gap-6 sm:text-center'>
        <div className='flex sm:flex-col text-white z-10 items-center justify-between sm:gap-5'>
        <h3 className="spice-text text-white relative z-10 text-4xl md:text-5xl sm:text-[2.5rem]">Spicies</h3>
        <p className='slogan'>Starting From</p>
        </div>
        <div className='flex sm:flex-col text-white z-10 justify-between items-center sm:gap-4'>
        <p className='md:text-[1.3rem] lg:text-[1.3rem] lg:w-[80%] sm:text-[1.1rem]'>Choose your favorite category mauris orci dignissim nisl, id gravida nunc enim quis nibh.</p>
        <h3 className='spice-text text-2xl md:text-3xl lg:text-[1.6rem] sm:text-[1.8rem]'>₦500</h3>
        </div>
        </div>
        </div>
    </div>
  )
}

export default MenuSectionThree;