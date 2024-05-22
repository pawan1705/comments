import React from 'react'
import './Institute.css';
import {assets} from '../../assets/assets'
const Institute = () => {
  return (
    <div className='institute'>
      <div className="gallery">
        <img src={assets.gallery_1} alt="" />
        <img src={assets.gallery_2} alt="" />
        <img src={assets.gallery_3} alt="" />
        <img src={assets.gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See More Here <img src={assets.white_arrow} alt="" /></button>
    </div>
  )
}

export default Institute