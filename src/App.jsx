
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import TextPage from './Components/TextPage'
import AnimatedVideo from './Components/AnimatedVideo'
import Projects from './Components/Projects'
import Cards from './Components/Cards'
import StartProject from './Components/StartProject'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll'



function App() {

  const locomotiveScroll =new LocomotiveScroll();
  
  return (
    <div className="w-full h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <TextPage />
      <AnimatedVideo />
      <Projects />
      <Cards />
      <StartProject />
      <Footer />
    </div>
  )
}

export default App

