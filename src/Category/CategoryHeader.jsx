import React from "react";
import "../styles/CategoryHeader.css";

const CategoryHeader = () => {
  return (
    <section className="CetegoryBody">
      <div className="CategorySection">
        <div className="CategoryNav">
          <span className="CategoryHeaderBlock">엔터</span>
          <span className="CategoryHeaderBlock">스포츠</span>
          <span className="CategoryHeaderBlock">자동차</span>
          <span className="CategoryHeaderBlock">웹툰</span>
          <span className="CategoryHeaderBlock">경제</span>
          <span className="CategoryHeaderBlock">추천구독</span>
          <span className="CategoryHeaderBlock">레시피</span>
          <span className="CategoryHeaderBlock">리빙</span>
          <span className="CategoryHeaderBlock">책방</span>
          <span className="CategoryHeaderBlock">패션뷰티</span>
        </div>
      </div>
      <div className="CategoryHeaderPrevBt">
        <span className="CHPrevBtImg"></span>
      </div>
      <div className="CategoryHeaderNextBt">
        <span className="CHNextImg"></span>
      </div>
    </section>
  );
};

export default CategoryHeader;
