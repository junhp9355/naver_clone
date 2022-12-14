import React from "react";
import "../styles/M4.css";
import M4Advertisment from "./M4Advertisment";
import NewsMain from "../NewsContents/NewsMain";

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
        <div className="NewMainSection">
          <NewsMain />
        </div>
      </div>
      <div className="M4SubAdvertisement">
        <M4Advertisment />
      </div>
    </section>
  );
};

export default M4;
