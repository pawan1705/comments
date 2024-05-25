import React from 'react'
import './Hero.css';
import {assets} from '../../assets/assets';
import { Link } from 'react-scroll';
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure Better Education For a Better World</h1>
        <p>Improve your public speaking by uncovering and communicating your personal story</p>
        <Link to='about' smooth={true} offset={-250} duration={500}><button className='btn'>Explore More <img src={assets.dark_arrow} alt="" /></button></Link>
      </div>
    </div>
  )
}

export default Hero