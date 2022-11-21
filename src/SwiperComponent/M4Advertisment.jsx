import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "../styles/MySwiper.css";
import "../styles/M4Advertisement.css";

const M4Advertisment = () => {
  SwiperCore.use([Autoplay, EffectFade]);
  return (
    <div>
      <Swiper
        effect="fade"
        loop={true}
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
        className="M4SwiperAdMain"
      >
        <SwiperSlide>
          <span className="SwiperAdvertisement01"></span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="SwiperAdvertisement02"></span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="SwiperAdvertisement03"></span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="SwiperAdvertisement04"></span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default M4Advertisment;
