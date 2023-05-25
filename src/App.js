import React from "react";
import Section1 from "./components/LandingImage";
import Layout from "./components/Layout";
import Section2 from "./components/TourPlans";
import "swiper/css";
import "swiper/css/bundle";
import VideoSection from "./components/VideoSection";

const App = () => {
  return (
    <>
      <Section1 />
      {/* <VideoSection/> */}
      <Section2 />
    </>
  );
};

export default App;
