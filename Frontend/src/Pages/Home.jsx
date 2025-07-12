import React from 'react'
import UpperHeroSection from '../Components/UpperHeroSection'
import Navbar from '../Components/Navbar'
import '../App.css'
import LowerHomeSection from '../Components/LowerHomeSection'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <UpperHeroSection />
            <LowerHomeSection />
            <Footer />
        </>
    )
}

export default Home
