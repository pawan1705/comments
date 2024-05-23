import React from 'react'
import './About.css';
import {assets} from '../../assets/assets';
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={assets.about2} alt="" className='about-img' />
        <img src={assets.play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h2>Who We Are ?</h2>
        <p>PK has been providing Spoken English & Personality Development training since 2000. With 20+ years of experience, it has helped thousands of students globally, including professionals, teachers, doctors, and businessmen. The institute uses modern technology for effective training, such as audio-visual labs, software, and live online sessions</p>
        <p>We offer training programs in Spoken English, Personality Development, Interview Preparation, Public Speaking, Motivational Training, Confidence and Corporate Training, as well as Teacher's Training.</p>
        <p> With students from various backgrounds, such as IIT, IIM, and corporate executives from companies like Airtel, HDFC, and Pizza Hut, our programs are designed to enhance confidence, create a lasting impression, and improve productivity.</p>
      </div>
    </div>
  )
}

export default About;