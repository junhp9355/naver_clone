import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/MySwiper.css";
import "../styles/Weather.css";

const Weather = () => {
  SwiperCore.use([Navigation, Autoplay]);
  return (
    <div>
      <Swiper
        direction="vertical"
        autoplay={{ delay: 1000 }}
        loop={true}
        slidesPerView={1}
        spaceBetween={5}
        pagination={{ clickable: true }}
        className="MySwiper10"
      >
        <SwiperSlide>
          <div className="WeaterSection1">
            <span className="WeatherIcon"></span>
            <div className="WeatherSubInfo">
              <span>18.5º 맑음</span>
              <span>5.0º</span>
              <span>/</span>
              <span>20.0º</span>
              <span>둔산동</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="DustSection1">
            <span>미세</span>
            <span className="DustIcon"></span>
            <span>보통</span>
            <span>|</span>
            <span>초미세</span>
            <span className="DustIcon"></span>
            <span>보통</span>
            <span>둔산동</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Weather;
