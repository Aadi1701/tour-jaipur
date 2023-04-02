import React from "react";
import "./style.css";
import Section2Data from '../../Utils/Section2Data.js';

function Section2AllData(dataSection2){
  return (
    <Section2Card 
      image= {dataSection2.image}
      cityName= {dataSection2.cityName}
      cityDetails= {dataSection2.cityDetails}
    />
  );
}

function Section2Card(props){
    return(
      <div className="Section2Card">
        <img className="Section2Card-image" src={props.image} alt="tour-image" />
        <h1 className="Section2Card-city-name">{props.cityName}</h1>
        <p className="Section2Card-city-details" >{props.cityDetails}</p>
      </div>
    );
}

const Section2=()=>{
    return(
      <div className="Section2">
          {Section2Data.map(Section2AllData)}
      </div>
    );
}

export default Section2;