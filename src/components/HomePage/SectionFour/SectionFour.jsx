import React from 'react'

const SectionFour = () => {
  return (
    <div className='flex flex-wrap flex-col justify-center items-center pt-[6rem]'>
        <h3 className='offerHead text-4xl text-white sm:text-center sm:text-[2.2rem] md:text-[2.5rem] nxxx:text-[1.7rem] nxx:text-[1.7rem] nx:text-[1.7rem]'>Today's Best Offers</h3>
        <div className='flex pt-[3rem]'>
        <div className="bg-[url('../../../../chilli-transformed.jpeg')] relative bg-cover w-[14rem] h-[14rem] nxxx:w-[9rem] nxxx:h-[9rem] sm:w-[11rem] sm:h-[11rem] lg:w-[12rem] lg:h-[12rem] md:w-[18rem] md:h-[18rem] flex justify-center items-center">
            <div className="absolute inset-0 bg-black opacity-70" ></div>
            <div className="text-white z-10 offerText text-3xl md:text-[2.2rem] nxxx:text-[1.6rem]">$25</div>
        </div>
        <div className='bg-stone-600 w-[14rem] h-[14rem] nxxx:w-[9rem] nxxx:h-[9rem] sm:w-[11rem] sm:h-[11rem] md:w-[18rem] md:h-[18rem] lg:w-[12rem] lg:h-[12rem] flex flex-col justify-center pl-5 gap-2 text-white'>
            <h3 className='spice-text text-[1.3rem] md:text-[1.5rem] sm:text-[1.2rem] nxxx:text-[1.1rem]'>Cloves Spice</h3>
            <p className='text-[0.9rem] md:text-[1.2rem] sm:text-[0.8rem] nxxx:text-[0.7rem]'>Warm, slightly sweet and aromatic flavour. It adds bold aroma and preserves freshness naturally.</p>
        </div>
        <div className="bg-[url('../../../../chilli-transformed.jpeg')] relative bg-cover w-[14rem] h-[14rem] lg:w-[12rem] lg:h-[12rem] flex justify-center items-center sm:hidden md:hidden">
            <div className="absolute inset-0 bg-black opacity-70" ></div>
            <div className="text-white z-10 offerText text-3xl">$25</div>
        </div>
        <div className='bg-stone-600 w-[14rem] h-[14rem] lg:w-[12rem] lg:h-[12rem] flex flex-col justify-center pl-5 gap-2 text-white sm:hidden md:hidden'>
            <h3 className='spice-text text-[1.3rem]'>Ginger Spice</h3>
            <p className='text-[0.9rem]'>Peppery, spicy and pungent flavour. Gives the drink a warming, spicy edge.</p>
        </div>
        </div>
        <div className='flex'>
        <div className='bg-stone-600 w-[14rem] h-[14rem] lg:w-[12rem] lg:h-[12rem] sm:w-[11rem] sm:h-[11rem] nxxx:w-[9rem] nxxx:h-[9rem] md:w-[18rem] md:h-[18rem] flex flex-col justify-center pl-5 gap-2 text-white'>
            <h3 className='spice-text text-[1.3rem] md:text-[1.5rem] sm:text-[1.2rem] nxxx:text-[1.1rem]'>Lemongrass Spice</h3>
            <p className='text-[0.9rem] md:text-[1.2rem] sm:text-[0.8rem] nxxx:text-[0.7rem]'>Citrusy, Light and fresh flavour. Often steeped with Zobo or boiled as herbal tea.</p>
        </div>
        <div className="bg-[url('../../../../chilli-transformed.jpeg')] relative bg-cover w-[14rem] h-[14rem] nxxx:w-[9rem] nxxx:h-[9rem] lg:w-[12rem] lg:h-[12rem] sm:w-[11rem] md:w-[18rem] md:h-[18rem] sm:h-[11rem] flex justify-center items-center">
            <div className="absolute inset-0 bg-black opacity-70" ></div>
            <div className="text-white z-10 offerText text-3xl md:text-[2.2rem] nxxx:text-[1.6rem]">$25</div>
        </div>
        <div className='bg-stone-600 w-[14rem] h-[14rem] lg:w-[12rem] lg:h-[12rem] flex flex-col justify-center pl-5 gap-2 text-white sm:hidden md:hidden'>
            <h3 className='spice-text text-[1.3rem]'>Bay Leaf Spice</h3>
            <p className='text-[0.9rem]'>Mild, woody and slightly floral flavour. Enhances soups, sauces, and some zobo recipes.</p>
        </div>
        <div className="bg-[url('../../../../chilli-transformed.jpeg')] relative bg-cover w-[14rem] h-[14rem] lg:w-[12rem] lg:h-[12rem] flex justify-center items-center sm:hidden md:hidden">
            <div className="absolute inset-0 bg-black opacity-70" ></div>
            <div className="text-white z-10 offerText text-3xl">$25</div>
        </div>
        </div>
    </div>
  )
}

export default SectionFour;