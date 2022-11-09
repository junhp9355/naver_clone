import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Virtual, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/MySwiper.css";
import "../styles/Weather.css";

const Weather = () => {
  SwiperCore.use([Navigation, Autoplay, Virtual]);
  return (
    <div>
      <Swiper
        direction="vertical"
        Virtual
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
              <td>18.5º 맑음</td>
              <td>5.0º</td>
              <td>/</td>
              <td>20.0º</td>
              <td>둔산동</td>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="DustSection1">
            <td>미세</td>
            <span className="DustIcon"></span>
            <td>보통</td>
            <td>|</td>
            <td>초미세</td>
            <span className="DustIcon"></span>
            <td>보통</td>
            <td>둔산동</td>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Weather;
