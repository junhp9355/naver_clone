import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Virtual, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "../styles/MySwiper.css";

const MainBanner = () => {
  SwiperCore.use([Virtual, Autoplay, EffectFade]);
  return (
    <div>
      <Swiper
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop={true}
        slidesPerView={1}
        className="MySwiperMainBanner"
      >
        <SwiperSlide>
          <div className="SwiperMainBanner1"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="SwiperMainBanner2"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="SwiperMainBanner3"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainBanner;
