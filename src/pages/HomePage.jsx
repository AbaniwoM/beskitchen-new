import React from 'react'
import Hero from '../components/Hero/Hero'
import Header from '../components/Header/Header'
import SectionOne from '../components/HomePage/SectionOne/SectionOne'
import SectionThree from '../components/HomePage/SectionThree/SectionThree'
import SectionTwo from '../components/HomePage/SectionTwo/SectionTwo'
import SectionFour from '../components/HomePage/SectionFour/SectionFour'
import SectionFive from '../components/HomePage/SectionFive/SectionFive'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <Footer />
    </div>
  )
}

export default HomePage;