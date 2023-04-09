import React from "react";
import Section1 from './components/LandingImage'
import Layout from "./components/Layout";
import Section2 from "./components/TourPlans";
import "swiper/css";
import "swiper/css/pagination";
import VideoSection from "./components/VideoSection";

const App = ()=> {
  return (
    <Layout>
      <Section1/>
      {/* <VideoSection/> */}
      <Section2/>
    </Layout>
  );
}

export default App;
