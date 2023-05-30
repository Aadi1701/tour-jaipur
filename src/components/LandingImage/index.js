import React, { useEffect, useState } from "react";
import "./style.css";
import LandingImage from "../../assets/rajasthan.jpg";
import Section2Data from "../../Utils/Section2Data";
import { Link } from "react-router-dom";

const Section1 = () => {
  const [filters, setFilters] = useState({
    from: undefined,
    to: Section2Data[0].cityName,
    when: undefined,
  });

  const handleFilter = (key, value) =>
    setFilters((old) => {
      return {
        ...old,
        [key]: value,
      };
    });

  useEffect(() => {
    console.log("filters", filters);
  }, [filters]);

  return (
    <div className="wrapper">
      <img className="landing-carousel" src={LandingImage} alt="landing" />
      <div className="Section1-container">
        <div className="Section1-items">
          <h1 className="Section1-heading">Your Journey Begins</h1>
          <p className="tag-line">
            A journey of 1000 miles starts with a single step.
          </p>
          <p className="tag-line">So make your first step</p>
        </div>
        <div className="Section1-search-boxes d-flex container flex-wrap">
          <select
            className="col-12 col-md-3"
            onChange={(e) => handleFilter("from", e.target.value)}
          >
            <option value="">From Where</option>
            {Section2Data.map((item, index) => (
              <option key={index} value={item.cityName}>
                {item.cityName}
              </option>
            ))}
          </select>
          <select
            className="col-12 col-md-3"
            onChange={(e) => handleFilter("to", e.target.value)}
          >
            <option value="">Where To</option>
            {Section2Data.map((item, index) => {
              if (item.cityName == filters.from) return;
              return (
                <option key={index} value={item.cityName}>
                  {item.cityName}
                </option>
              );
            })}
          </select>
          <input className=" col-12 col-md-3" type="date" placeholder="When?" onChange={(e)=>handleFilter("to",e.target.value)}/>
          <Link to={filters.to==undefined?'/':'/tour'} state={filters} className=" col-12 col-md-3">
            <button className="w-100 h-100">Show Results</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Section1;
