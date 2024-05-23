import React, { useRef } from "react";
import "./Testimonials.css";
import { assets } from "../../assets/assets";
const Testimonials = () => {
  const slider=useRef();
  let tx=0;
  const slideForword = () => {
    if(tx> -50){
      tx -=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  };

  const slideBackword = () => {
    if(tx< 0){
      tx +=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
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
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.rahul} alt="" />
                <div>
                  <h3>Rahul Gandhi</h3>
                  <span>Delhi ,India</span>
                </div>
              </div>
              <p>
              Initially I had a lot of hesitation WHILE SPEAKING IN ENGLISH. Now it has gone away. I dont say i have started speaking in English flawlessly but (90% I speak correct and can talk on any thing now. Thanks to my trainer and BodhiSutra.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.modi} alt="" />
                <div>
                  <h3>Narendra Modi</h3>
                  <span>Delhi ,India</span>
                </div>
              </div>
              <p>
              It’s a great experience which I was looking for since last few month. Thanks for making such an innovative where anyone can learn more English through online classes instead of wasting time to go classes.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.kejri} alt="" />
                <div>
                  <h3>Arvindra Kejriwal</h3>
                  <span>Delhi ,India</span>
                </div>
              </div>
              <p>
              The organization “BODHISUTRA,’ is a great route to improvement and speaking English.. And as much as appreciation to be given is less with respect to this portal.. And I want to be associated with this organisation for a long
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.maya} alt="" />
                <div>
                  <h3>Mayawati</h3>
                  <span>Uttar Pradesh ,India</span>
                </div>
              </div>
              <p>
              Program is very good.. I found a lot of changes in my speaking. I\’m very much confident now, their teachings are really very good. My trainer really good and polite she is giving me a good training. She taught me so many skills everyday..
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
