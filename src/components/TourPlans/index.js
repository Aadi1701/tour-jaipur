import React from "react";
import "./style.css";
import Section2Data from "../../Utils/Section2Data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

function Section2AllData(dataSection2, index) {
  return (
    <SwiperSlide>
      <Section2Card
        image={dataSection2.image}
        cityName={dataSection2.cityName}
        cityDetails={dataSection2.cityDetails}
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
    <Swiper
      slidesPerView={3}
      spaceBetween={50}
      navigation={false}
      pagination={{ clickable: true }}
      autoplay={{ disableOnInteraction: true, duration: 55000 }}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper container "
    >
      {Section2Data.map((item, index) => (
        <SwiperSlide>
          <Link to='/tour' state={{to:item.cityName}}>
            <Section2Card
              image={item.image}
              cityName={item.cityName}
              cityDetails={item.cityDetails}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Section2;
