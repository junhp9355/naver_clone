import React from "react";
import { useState } from "react";
import "../styles/CategoryHeader.css";

const CategoryHeader = () => {
  return (
    <body className="CetegoryBody">
      <section className="CategorySection">
        <nav className="CategoryNav">
          <div className="CategoryHeaderBlock">엔터</div>
          <div className="CategoryHeaderBlock">스포츠</div>
          <div className="CategoryHeaderBlock">자동차</div>
          <div className="CategoryHeaderBlock">웹툰</div>
          <div className="CategoryHeaderBlock">경제</div>
          <div className="CategoryHeaderBlock">추천구독</div>
          <div className="CategoryHeaderBlock">레시피</div>
          <div className="CategoryHeaderBlock">리빙</div>
          <div className="CategoryHeaderBlock">책방</div>
          <div className="CategoryHeaderBlock">패션뷰티</div>
        </nav>
      </section>
      <div className="CategoryHeaderPrevBt">
        <span className="CHPrevBtImg"></span>
      </div>
      <div className="CategoryHeaderNextBt">
        <span className="CHNextImg"></span>
      </div>
    </body>
  );
};

export default CategoryHeader;
