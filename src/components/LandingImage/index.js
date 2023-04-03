import React from 'react';
import './style.css'
import LandingImage from '../../assets/rajasthan.jpg'

const Section1=()=>{
  return(
    <div className='wrapper'>
      <img className='landing-carousel' src={LandingImage} alt='landing'/>
       <div className="Section1-container">
        <div className="Section1-items">
         <h1 className="Section1-heading">Your Journey Begins</h1>
         <p className='tag-line'>A journey of 1000 miles starts with a single step.</p>
         <p className='tag-line'>So make your first step</p>

         </div>
         <div className="Section1-search-boxes d-flex container flex-wrap">
          <input className=' col-12 col-md-3' type="text" placeholder="Where to?" />
          <input className=' col-12 col-md-3' type="text" placeholder="When?" />
          <input className=' col-12 col-md-3' type="text" placeholder="Travel type" />
          <button className=' col-12 col-md-3'>Show Results</button>
         </div>
       </div>
    </div>
  );
}

export default Section1;
