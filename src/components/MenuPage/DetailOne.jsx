import React from 'react'

const DetailOne = () => {
  return (
    <div className='flex flex-col gap-3'>
        <div className='flex flex-col lg:mt-5 md:mt-5'>
        <h2 className='spice-text lg:text-[1.5rem] md:text-[1.5rem] sm:text-[1.4rem] nx:text-[1.2rem] nxx:text-[1.2rem] nxxx:text-[1.2rem]'>Ingredients</h2>
        <p className='lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem] nx:text-[0.9rem] nxx:text-[0.9rem] nxxx:text-[0.9rem]'>Dried hibiscus petals, water.</p>
        </div>
        <div className='flex flex-col'>
        <h2 className='spice-text lg:text-[1.5rem] md:text-[1.5rem] sm:text-[1.4rem] nx:text-[1.2rem] nxx:text-[1.2rem] nxxx:text-[1.2rem]'>Health Benefits</h2>
        <p className='lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem] nx:text-[0.9rem] nxx:text-[0.9rem] nxxx:text-[0.9rem]'>- Lowers blood pressure.</p>
        <p className='lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem] nx:text-[0.9rem] nxx:text-[0.9rem] nxxx:text-[0.9rem]'>- Supports liver health.</p>
        <p className='lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem] nx:text-[0.9rem] nxx:text-[0.9rem] nxxx:text-[0.9rem]'>- Aids digestion.</p>
        <p className='lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem] nx:text-[0.9rem] nxx:text-[0.9rem] nxxx:text-[0.9rem]'>- Helps detox the body naturally.</p>
        </div>
    </div>
  )
}

export default DetailOne;