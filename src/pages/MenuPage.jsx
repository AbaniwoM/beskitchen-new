import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MenuHero from '../components/MenuHero/MenuHero'
import MenuSectionOne from '../components/MenuPage/MenuSectionOne'
import MenuSectionTwo from '../components/MenuPage/MenuSectionTwo'
import MenuSectionThree from '../components/MenuPage/MenuSectionThree'
import MenuSectionFour from '../components/MenuPage/MenuSectionFour'

const MenuPage = () => {
  return (
    <div>
        <Header />
        <MenuHero />
        <MenuSectionOne />
        <MenuSectionTwo />
        <MenuSectionThree />
        <MenuSectionFour />
        <Footer />
    </div>
  )
}

export default MenuPage;