import React from 'react'

const AboutHero = () => {
  return (
    <div>
        <div className="bg-[url('../../../topBg.jpg')] relative bg-cover h-[80vh] flex flex-col flex-wrap justify-center items-center text-center gap-[1rem]">
        <div className="absolute inset-0 bg-black opacity-60" ></div>
        <h3 className="spice-text text-white relative z-10 text-4xl sm:text-[2.2rem] sp:text-[1.9rem] nxxx:text-[1.7rem] nxx:text-[1.7rem] nx:text-[1.7rem]">About Us</h3>
        </div>
    </div>
  )
}

export default AboutHero;