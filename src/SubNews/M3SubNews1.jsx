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
        direction="vertical"
        Virtual
        autoplay={{ delay: 1000 }}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        className="MySwiper1"
      >
        <SwiperSlide>
          [이태원 참사] 尹대통령, '원스톱 통합지원센터' 개설 지시
        </SwiperSlide>
        <SwiperSlide>
          정부, '만원 지하철' 인파관리한다…안전관리지침 제정
        </SwiperSlide>
        <SwiperSlide>
          '특수한 수단' 자랑했던 北, ICBM 실패…'고공엔진' 성능결함?{" "}
        </SwiperSlide>
        <SwiperSlide>
          MBN, 6개월 업무정지 취소 소송 패소…'블랙아웃' 위기
        </SwiperSlide>
        <SwiperSlide>내일부터 초겨울 추위…서울 아침 최저기온 '0도'</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default M3SubNews1;
