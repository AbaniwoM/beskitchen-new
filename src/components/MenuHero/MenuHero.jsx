import React from 'react'

const MenuHero = () => {
  return (
    <div>
        <div className="bg-[url('../../../topBg.jpg')] relative bg-cover h-[80vh] flex flex-col flex-wrap justify-center items-center text-center gap-[1rem]">
        <div className="absolute inset-0 bg-black opacity-60" ></div>
        <h3 className="spice-text text-white relative z-8 text-4xl md:text-5xl sm:text-[2.2rem]">Menu</h3>
        </div>
    </div>
  )
}

export default MenuHero;