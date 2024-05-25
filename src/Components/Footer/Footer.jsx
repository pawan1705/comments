import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="social-links">
      <ul>
      <li><img src={assets.fb} alt="" /> </li>
      <li><img src={assets.insta} alt="" /> </li>
        <li><img src={assets.youtube} alt=""  className='y'/> </li>
        <li><img src={assets.x} alt="" className='x' /> </li>
      </ul>
      </div>
      <div className="other">
      <p>@ 2024 PK English ,All Rights Reserve.</p>
      <ul>
        <li> Term of Service</li>
        <li> Privacy Policy </li>
      </ul>
      </div>
      
    </div>
  )
}

export default Footer