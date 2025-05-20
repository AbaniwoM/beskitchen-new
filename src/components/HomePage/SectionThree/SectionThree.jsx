import React from 'react'

const SectionThree = () => {
  return (
    <div className="bg-[url('../../../chef.jpg')] relative bg-cover h-[90vh] flex-col flex-wrap justify-center text-center gap-[1rem] pt-[6rem] sm:pt-[13rem] md:pt-[13rem] lg:pt-[13rem]">
        <div className="absolute inset-0 bg-black opacity-45" ></div>
        <h3 className="spice-text text-white relative z-10 text-4xl md:text-[2.5rem]">We spice up your meals</h3>
        <p className="text-white relative z-10 pt-8 font-extralight sm:text-center sm:pl-[1.2rem] sm:pr-[1.2rem] md:pl-[5rem] md:pr-[5rem] lg:pl-[10rem] lg:pr-[10rem] md:text-[1.5rem] lg:text-[1.3rem] md:text-center">Etiam convallis elementum sapien, a aliquam turpis aliquam vitae. Praesent sollicitudin felis <br/> vel mi facilisis posuere. Nulla ultrices facilisis.</p>
    </div>
  )
}

export default SectionThree;