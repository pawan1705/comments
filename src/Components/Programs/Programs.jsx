import React,{useRef} from 'react'
import './Programs.css';
import {assets} from '../../assets/assets';
const Programs = () => {
  // start
  const slider=useRef();
  let tx=0;
  const slideForword = () => {
    if(tx> -50){
      tx -=12.5;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  };

  const slideBackword = () => {
    if(tx< 0){
      tx +=12.5;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  };

  // end

  return (
    <>
    
    {/* // start */}
    <div className="programs">
      {/* pawan sangare */}
      <img
        src={assets.next_icon}
        alt=""
        className="next-btn"
        onClick={slideForword}
      />
      <img
        src={assets.back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackword}
      />
      <div className="sliderP">
        <ul ref={slider}>
          <li>
          <div className="program">
        <img src={assets.program_1} alt="" />
        <div className="caption">
          <img src={assets.program_icon_2} alt="" />
          <p> Competitive Classes </p>
        </div>
      </div>
          </li>
          
          <li>
          <div className="program">
        <img src={assets.pd} alt="" />
        <div className="caption">
          <img src={assets.pd_icon} alt="" />
          <p>Personality Development</p>
        </div>
      </div>
          </li>
          <li>
          <div className="program">
        <img src={assets.gd} alt="" />
        <div className="caption">
          <img src={assets.gd_icon} alt="" />
          <p> G.D. , P.I</p>
        </div>
      </div>
          </li>
          <li>
          <div className="program">
        <img src={assets.np} alt="" />
        <div className="caption">
          <img src={assets.program_icon_1} alt="" />
          <p>Newspaper Reading (English)</p>
        </div>
      </div>
          </li>
          <li>
          <div className="program">
        <img src={assets.cc} alt="" />
        <div className="caption">
          <img src={assets.cc_icon} alt="" />
          <p>Computer Classes </p>
        </div>
      </div>
          </li>
          <li>
          <div className="program">
        <img src={assets.program_3} alt="" />
        <div className="caption">
          <img src={assets.program_icon_1} alt="" />
          <p>Paid library</p>
        </div>
      </div>
          </li>
          <li>
          <div className="program">
        <img src={assets.program_1} alt="" />
        <div className="caption">
          <img src={assets.program_icon_3} alt="" />
          <p>Online Classes</p>
        </div>
      </div>
          </li>
          <li>
          <div className="program">
        <img src={assets.program_3} alt="" />
        <div className="caption">
          <img src={assets.program_icon_1} alt="" />
          <p>Paid library</p>
        </div>
      </div>
          </li>
          
        </ul>
      </div>
    </div>
    {/* // end */}
    </>
  )
}

export default Programs