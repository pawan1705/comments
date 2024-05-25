import React, { useState } from 'react'
import './Institute.css';
import {assets} from '../../assets/assets'
const Institute = () => {
  const[more,setMore]=useState(false);
  const[hide,setHide]=useState(true);
  return (
    <div className='institute'>
      <div className="gallery" >
      <img src={assets.gallery_1} alt="" />
        <img src={assets.gallery_2} alt="" />
        <img src={assets.gallery_3} alt="" />
        <img src={assets.gallery_4} alt="" />
      </div>
      
       { 
          more
         ?
        <div className="gallery">
        <img src={assets.kejri} alt="" />
          <img src={assets.gallery_2} alt="" />
          <img src={assets.gallery_3} alt="" />
          <img src={assets.gallery_4} alt="" />
        </div>
        : 
        null
       }  

     {
        hide ?
        <button className='btn dark-btn' onClick={()=>{
          setMore(!more)
          setHide(!hide)
        }}>See More Here <img src={assets.white_arrow} alt="" /></button>
        : 
        

        <button className='btn dark-btn' onClick={()=>{
          setMore(false)
          setHide(!hide)
        }}>See Less Here <img src={assets.back_icon} alt="" /></button>
       }
  
    </div>
  )
}

export default Institute