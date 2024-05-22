import React from 'react'
import './Programs.css';
import {assets} from '../../assets/assets';
const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={assets.program_1} alt="" />
        <div className="caption">
          <img src={assets.program_icon_3} alt="" />
          <p>Online Classes</p>
        </div>
      </div>
      <div className="program">
        <img src={assets.program_2} alt="" />
        <div className="caption">
          <img src={assets.program_icon_2} alt="" />
          <p> Speaking Classes</p>
        </div>
      </div>
      <div className="program">
        <img src={assets.program_3} alt="" />
        <div className="caption">
          <img src={assets.program_icon_1} alt="" />
          <p>Paid library</p>
        </div>
      </div>
    </div>
  )
}

export default Programs