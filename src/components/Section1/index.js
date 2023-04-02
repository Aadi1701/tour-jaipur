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
         <div className="Section1-search-boxes">
          <input type="text" placeholder="Where to?" />
          <input type="text" placeholder="When?" />
          <input type="text" placeholder="Travel type" />
          <button>Show Results</button>
         </div>
       </div>
    </div>
  );
}

export default Section1;
