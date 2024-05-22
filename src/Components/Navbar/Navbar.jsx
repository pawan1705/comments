import React, { useEffect, useState } from 'react'
import './Navbar.css';
import {assets} from '../../assets/assets'
const Navbar = () => {

  const[sticky,setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >100 ?setSticky(true):setSticky(false);
    })
  },[])
  return (
    <nav className={`container ${sticky?'dark-nav':""}` }>
      <img src={assets.logo} alt=""  className='logo'/>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'> Contact</button> </li>
      </ul>
    </nav>
  )
}

export default Navbar