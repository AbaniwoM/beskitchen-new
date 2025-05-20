import React from 'react'

const DetailSix = () => {
  return (
    <div className='flex flex-col gap-3'>
        <div className='flex flex-col lg:mt-5 md:mt-5'>
        <h2 className='spice-text lg:text-[1.5rem] md:text-[1.5rem] sm:text-[1.4rem]'>Ingredients</h2>
        <p className='lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem]'>Maecenas interdum lorem eleifend orci aliquam mollis.</p>
        </div>
        <div className='flex flex-col'>
        <h2 className='spice-text lg:text-[1.5rem] md:text-[1.5rem] sm:text-[1.4rem]'>Nutritional Value</h2>
        <p className='lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem]'>Maecenas interdum lorem eleifend orci aliquam mollis.</p>
        </div>
    </div>
  )
}

export default DetailSix;