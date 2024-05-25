import React, { useEffect, useState } from 'react'
import './Navbar.css';
import {assets} from '../../assets/assets'
import { Link } from 'react-scroll';
const Navbar = () => {

  const[sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >100 ?setSticky(true):setSticky(false);
    })
  },[])
 const[mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky?'dark-nav':""}` }>
      <img src={assets.logo} alt=""  className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-250} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-250} duration={500}>About</Link></li>
        <li><Link to='institute' smooth={true} offset={-250} duration={500}>Institute</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
        <li><Link  to='contact' smooth={true} offset={-250} duration={500} className='btn'> Contact Us</Link> </li>

        <li><a href='https://wa.me/+919009240816'><button className=' btn wts'><img src={assets.whatsapp} alt="" /> Whatsapp Now</button></a> </li>
      </ul>
      <img src={assets.menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar