import React from 'react'
import './Hero.css';
import {assets} from '../../assets/assets';
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure Better Education For a Better World</h1>
        <p>Improve your public speaking by uncovering and communicating your personal story</p>
        <button className='btn'>Explore More <img src={assets.dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero