import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Institute from './Components/Institute/Institute'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
     <Title subtitle='OUR PROGRAM' title='What We Offer'/>
    <Programs/>
    <About/>
    <Title subtitle='gallery' title='Institute photos'/>
    <Institute/>
    </div>
    
    </>
    
  )
}

export default App