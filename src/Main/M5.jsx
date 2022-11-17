import React from "react";
import CategoryHeader from "../Category/CategoryHeader";
import Enter from "../Category/Enter";
import "../styles/M5.css";

const M5 = () => {
  return (
    <section className="M5Section">
      <div className="M5ReadCategory">
        <div className="M5ReadCategoryHead">
          <div className="M5T1">오늘 읽을만한 글</div>
          <div className="M5T2">주제별로 분류된 다양한 글 모음</div>
          <div className="M5ReadCategorySubHead">
            <div className="M5ReadCategorySubText">
              668 <div className="M5T2">개의 글</div>
            </div>
            <div className="M5SubBar"></div>
            <span className="M5ReadCategorySubIcon"></span>
            <div className="M5T2">관심주제 설정</div>
          </div>
        </div>
        <CategoryHeader />
        <Enter />
      </div>
      <div className="M5Space"></div>
      <div className="M5Shopping">
        <div className="M5ShoppingText">쇼핑 페이지 구현 예정</div>
      </div>
    </section>
  );
};

export default M5;
