import React from "react";
import "./style.css";
import Section2Data from "../../Utils/Section2Data.js";

function Section2AllData(dataSection2, index) {
  return (
    <div className="col-12 col-md-6 col-lg-4" key={index}>
      <div className="px-2">
        <Section2Card
          
          image={dataSection2.image}
          cityName={dataSection2.cityName}
          cityDetails={dataSection2.cityDetails}
        />
      </div>
    </div>
  );
}

function Section2Card(props) {
  return (
    <div className="Section2Card">
      <img className="Section2Card-image" src={props.image} alt="tour" />
      <div className="overlay"></div>
      <h1 className="Section2Card-city-name">{props.cityName}</h1>
      <p className="Section2Card-city-details">{props.cityDetails}</p>
    </div>
  );
}

const Section2 = () => {
  return (
    <div className="container d-flex justify-content-between flex-wrap">
      {Section2Data.slice(0,3).map(Section2AllData)} {/*Slice method is used to get only 3 elements*/}
    </div>
  );
};

export default Section2;
