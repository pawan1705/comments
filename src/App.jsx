import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Institute from './Components/Institute/Institute'
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {
  const[playState,setPlayState]=useState(false);
  return (
    <>
    
    <Navbar/>
    <Hero/>
    <div className="container">
     <Title subtitle='OUR PROGRAM' title='What We Offer'/>
    <Programs/>
    <Title title='ABOUT INSTITUTE'/>
    <About setPlayState={setPlayState}/>
    <Title subtitle='gallery' title='Institute Photos'/>
    <Institute/>
    <Title subtitle='testimonials' title='What Student Says'/>
    <Testimonials/>
    <Title subtitle='Contact us' title='Get In Touch'/>
    <Contact/>
    </div>
    <Footer/>
    <VideoPlayer playState={playState}  setPlayState={setPlayState}/>
    
    
    </>
    
  )
}

export default App