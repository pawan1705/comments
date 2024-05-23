import React from 'react'
import './VideoPlayer.css';
import {assets} from '../../assets/assets'
import { useRef } from 'react';
const VideoPlayer = ({playState,setPlayState}) => {
  const player=useRef(null);

  const closePlayer=(e)=>{
    if(e.target ===player.current){
      setPlayState(false);
    }
  }
  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video src={assets.libVid} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer