import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "../styles/M2UserMenu.css";
import "swiper/css";
import "swiper/css/pagination";

const M2UserMenu = () => {
  const onClickBlog = () => {
    window.location.href = "http://localhost:3000/myblog";
  };
  SwiperCore.use([Navigation]);
  return (
    <div>
      <Swiper slidesPerView={5}>
        <SwiperSlide>
          <span className="UserMenuSwipeText">알림</span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="UserMenuSwipeText">구독</span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="UserMenuSwipeText">메일</span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="UserMenuSwipeText">카페</span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="UserMenuSwipeText" onClick={onClickBlog}>
            블로그
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="UserMenuSwipeText">페이</span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="UserMenuSwipeText">포스트</span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="UserMenuSwipeText">MYBOX</span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="UserMenuSwipeText">오피스</span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="UserMenuSwipeText">캘린더</span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="UserMenuSwipeText">해피빈</span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="UserMenuSwipeText">지식iN</span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="UserMenuSwipeText">메모</span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="UserMenuSwipeText">설정</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default M2UserMenu;
