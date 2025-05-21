import React from 'react'

const SectionThree = () => {
  return (
    <div className="bg-[url('../../../chef.jpg')] relative bg-cover h-[90vh] flex-col flex-wrap justify-center text-center gap-[1rem] pt-[6rem] sm:pt-[13rem] xxl:pt-[10rem] md:pt-[13rem] lg:pt-[13rem]">
        <div className="absolute inset-0 bg-black opacity-45" ></div>
        <h3 className="spice-text text-white relative z-10 text-4xl sm:text-[2.1rem] md:text-[2.5rem] nx:text-[1.7rem] nxx:text-[1.7rem] nxxx:text-[1.7rem]">We spice up your meals</h3>
        <p className="text-white relative z-10 pt-8 nx:pt-4 nxx:pt-4 nxxx:pt-4 font-extralight sm:text-center sm:text-[1.2rem] sm:pl-[3rem] sm:pr-[3rem] md:pl-[5rem] md:pr-[5rem] lg:pl-[10rem] lg:pr-[10rem] md:text-[1.5rem] lg:text-[1.3rem] md:text-center nx:text-[0.9rem] nxx:text-[0.9rem] nxxx:text-[0.9rem]">Etiam convallis elementum sapien, a aliquam turpis aliquam vitae. Praesent sollicitudin felis <br/> vel mi facilisis posuere. Nulla ultrices facilisis.</p>
    </div>
  )
}

export default SectionThree;