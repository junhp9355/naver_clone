import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Virtual,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/MySwiper.css";

const M3SubNews1 = () => {
  SwiperCore.use([Navigation, Autoplay]);
  return (
    <div>
      <Swiper
        Virtual
        autoplay={{ delay: 1500 }}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        className="MySwiper2"
      >
        <SwiperSlide>
          <div className="swiper2SubNews1">
            <p className="swiper2SubNewsHead">증시</p>
            <div className="swiperSlash" />
            <p>유로톡스50</p>
            <p>3,594.98</p>
            <p>▼ 27.33 -0.75%</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper2SubNews2">
            <p className="swiper2SubNewsHead">환율</p>
            <div className="swiperSlash" />
            <span className="swiper2SubNewsAmerica"></span>
            <p>USD</p>
            <p>1427.00</p>
            <p>▲ 6.00 +0.42%</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default M3SubNews1;
