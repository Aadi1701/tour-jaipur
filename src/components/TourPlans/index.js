import React from "react";
import "./style.css";
import Section2Data from "../../Utils/Section2Data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,Pagination } from "swiper";

function Section2AllData(dataSection2, index) {
  return (
    <SwiperSlide>
      <Section2Card
        image={dataSection2.image}
        cityName={dataSection2.cityName}
        cityDetails = {dataSection2.cityDetails}
      />
      {/* <Section2Card
        image={dataSection2.image}
        cityName={dataSection2.cityName}
        cityDetails={dataSection2.cityDetails}
      /> */}
    </SwiperSlide>
    // <div className="col-12 col-md-6 col-lg-4" key={index}>
    //   <div className="px-2">
    //     <Section2Card
          
    //       image={dataSection2.image}
    //       cityName={dataSection2.cityName}
    //       cityDetails={dataSection2.cityDetails}
    //     />
    //   </div>
    // </div>
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
    <div className="container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        
        pagination={{
          clickable: true,
        }}
        autoplay={
          {
            duration:5500,
            disableOnInteraction: false,
          }
        }
        navigation={true}
        centeredSlides={true}
        modules={[Navigation,Autoplay]}
        className="mySwiper"
      >
        {
          Section2Data.map(Section2AllData)
        }
        
      </Swiper>
      {/* {Section2Data.slice(0,3).map(Section2AllData)}  */}
    </div>
  );
};

export default Section2;
