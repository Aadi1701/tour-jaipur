import React from 'react';
import './style.css'

const Section1=()=>{
  return(
    <div>
       <div className="Section1-container">
        <div className="Section1-items">
         <h1 className="Section1-heading">Your journey begins</h1>
         <p>A journey of 1000 miles starts with a single step.</p>
         <p>So make your first step</p>

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
