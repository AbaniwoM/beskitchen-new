import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AboutHero from '../components/AboutHero/AboutHero'
import AboutSectionOne from '../components/AboutPage/AboutSectionOne'
import AboutSectionTwo from '../components/AboutPage/AboutSectionTwo'
import AboutSectionThree from '../components/AboutPage/AboutSectionThree'

const AboutPage = () => {
  return (
    <div>
        <Header />
        <AboutHero />
        <AboutSectionOne />
        <AboutSectionTwo />
        <AboutSectionThree />
        <Footer />
    </div>
  )
}

export default AboutPage;