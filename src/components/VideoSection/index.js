import React from 'react';
import './style.css'


const VideoSection = ()=>{
  return(
    <div className='container d-flex justify-content-between'>
        <div className='col-5 bg-danger'>
            Video
        </div>
        <div className='col-5 bg-success'>
            Text
        </div>
    </div>
  );
}

export default VideoSection


