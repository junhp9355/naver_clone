import React from "react";
import "../styles/M4.css";
import M4NewsCategory from "../SwiperComponent/M4NewsCategory";

const M4 = () => {
  return (
    <section className="M4Section">
      <div className="M4NewsCategory">
        <div className="M4SubNewsCategory">
          <span className="M4SubNewsCategoryHeadIcon" />
          <div className="M4SubNewsCategoryT1">뉴스스탠드</div>
          <span className="M4SubNewsCategoryArrowIcon" />
          <div className="M4SubNewsCategoryT2">구독한 언론사</div>
          <div className="M4SubNewsPoint" />
          <div className="M4SubNewsCategoryT3">전체언론사</div>
          <div className="M4SubNewsIconList">
            <span className="M4SubNewsListIcon"></span>
            <span className="M4SubNewsThumbnailIcon"></span>
            <span className="M4SubNewsSettingIcon"></span>
          </div>
        </div>
        <M4NewsCategory />
      </div>
      <div className="M4Space"></div>
      <div className="M4SubAdvertisement">
        <div>광고 페이지 구현 예정</div>
      </div>
    </section>
  );
};

export default M4;
