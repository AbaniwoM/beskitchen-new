import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ContactHero from '../components/ContactHero/ContactHero'
import ContactSectionOne from '../components/ContactPage/ContactSectionOne'

const ContactPage = () => {
  return (
    <div>
       <Header />
       <ContactHero />
       <ContactSectionOne />
       <Footer /> 
    </div>
  )
}

export default ContactPage;