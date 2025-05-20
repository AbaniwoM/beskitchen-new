import React from 'react'

const SectionFour = () => {
  return (
    <div className='flex flex-wrap flex-col justify-center items-center pt-[6rem]'>
        <h3 className='offerHead text-4xl text-white sm:text-center sm:text-[2.2rem] md:text-[2.5rem]'>Today's Best Offers</h3>
        <div className='flex pt-[3rem]'>
        <div className="bg-[url('../../../../chilli.jpg')] relative bg-cover w-[14rem] h-[14rem] sm:w-[11rem] sm:h-[11rem] lg:w-[12rem] lg:h-[12rem] md:w-[18rem] md:h-[18rem] flex justify-center items-center">
            <div className="absolute inset-0 bg-black opacity-70" ></div>
            <div className="text-white z-10 offerText text-3xl md:text-[2.2rem]">$25</div>
        </div>
        <div className='bg-stone-600 w-[14rem] h-[14rem] sm:w-[11rem] sm:h-[11rem] md:w-[18rem] md:h-[18rem] lg:w-[12rem] lg:h-[12rem] flex flex-col justify-center pl-5 gap-2 text-white'>
            <h3 className='spice-text text-[1.3rem] md:text-[1.5rem] sm:text-[1.2rem]'>Pepper Spice</h3>
            <p className='text-[0.9rem] md:text-[1.2rem] sm:text-[0.8rem]'>Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna.</p>
        </div>
        <div className="bg-[url('../../../../chilli.jpg')] relative bg-cover w-[14rem] h-[14rem] lg:w-[12rem] lg:h-[12rem] flex justify-center items-center sm:hidden md:hidden">
            <div className="absolute inset-0 bg-black opacity-70" ></div>
            <div className="text-white z-10 offerText text-3xl">$25</div>
        </div>
        <div className='bg-stone-600 w-[14rem] h-[14rem] lg:w-[12rem] lg:h-[12rem] flex flex-col justify-center pl-5 gap-2 text-white sm:hidden md:hidden'>
            <h3 className='spice-text text-[1.3rem]'>Chicken Spice</h3>
            <p className='text-[0.9rem]'>Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna.</p>
        </div>
        </div>
        <div className='flex'>
        <div className='bg-stone-600 w-[14rem] h-[14rem] lg:w-[12rem] lg:h-[12rem] sm:w-[11rem] sm:h-[11rem] md:w-[18rem] md:h-[18rem] flex flex-col justify-center pl-5 gap-2 text-white'>
            <h3 className='spice-text text-[1.3rem] md:text-[1.5rem] sm:text-[1.2rem]'>Vegie Spice</h3>
            <p className='text-[0.9rem] md:text-[1.2rem] sm:text-[0.8rem]'>Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna.</p>
        </div>
        <div className="bg-[url('../../../../chilli.jpg')] relative bg-cover w-[14rem] h-[14rem] lg:w-[12rem] lg:h-[12rem] sm:w-[11rem] md:w-[18rem] md:h-[18rem] sm:h-[11rem] flex justify-center items-center">
            <div className="absolute inset-0 bg-black opacity-70" ></div>
            <div className="text-white z-10 offerText text-3xl md:text-[2.2rem]">$25</div>
        </div>
        <div className='bg-stone-600 w-[14rem] h-[14rem] lg:w-[12rem] lg:h-[12rem] flex flex-col justify-center pl-5 gap-2 text-white sm:hidden md:hidden'>
            <h3 className='spice-text text-[1.3rem]'>Meat Spice</h3>
            <p className='text-[0.9rem]'>Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna.</p>
        </div>
        <div className="bg-[url('../../../../chilli.jpg')] relative bg-cover w-[14rem] h-[14rem] lg:w-[12rem] lg:h-[12rem] flex justify-center items-center sm:hidden md:hidden">
            <div className="absolute inset-0 bg-black opacity-70" ></div>
            <div className="text-white z-10 offerText text-3xl">$25</div>
        </div>
        </div>
    </div>
  )
}

export default SectionFour;