import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "../styles/MySwiper.css";
import { useState } from "react";
import { useRef } from "react";

const M3SubNews1 = () => {
  const [swiper, setSwiper] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  SwiperCore.use([Navigation, Autoplay, EffectFade]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const swiperParams = {
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    // onbeforeprint: (swiper) => {
    //   swiper.params.navigation.prevEl = navigationPrevRef.current;
    //   swiper.params.navigation.nextEl = navigationNextRef.current;
    //   swiper.activeIndex = mainImageIndex;
    //   swiper.navigation.update();
    // },
    onSwiper: setSwiper,
    onSlideChange: (e) => setMainImageIndex(e.activeIndex),
  };
  return (
    <div>
      <Swiper
        autoplay={{ delay: 2000 }}
        loop={true}
        slidesPerView={1}
        {...swiperParams}
        ref={setSwiper}
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
        <SwiperSlide>
          <div className="swiper2SubNews3">
            <div className="swiper2SubNewsHead2">이슈</div>
            <p>코로나바이러스감염증-19 현황</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div ref={navigationPrevRef} className="swiperPrevBt">
        <span className="swiperPrevBtImg" />
      </div>
      <div ref={navigationNextRef} className="swiperNextBt">
        <span className="swiperNextBtImg" />
      </div>
    </div>
  );
};

export default M3SubNews1;
