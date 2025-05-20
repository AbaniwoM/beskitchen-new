import React from 'react'

const DetailFour = () => {
  return (
    <div className='flex flex-col gap-3'>
        <div className='flex flex-col lg:mt-5 md:mt-5'>
        <h2 className='spice-text lg:text-[1.5rem] md:text-[1.5rem]'>Ingredients</h2>
        <p className='lg:text-[1.3rem] md:text-[1.3rem]'>Maecenas interdum lorem eleifend orci aliquam mollis.</p>
        </div>
        <div className='flex flex-col'>
        <h2 className='spice-text lg:text-[1.5rem] md:text-[1.5rem]'>Nutritional Value</h2>
        <p className='lg:text-[1.3rem] md:text-[1.3rem]'>Maecenas interdum lorem eleifend orci aliquam mollis.</p>
        </div>
    </div>
  )
}

export default DetailFour;