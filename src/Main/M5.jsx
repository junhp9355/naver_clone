import React from "react";
import CategoryHeader from "../MainCategory/CategoryHeader";
import "../styles/M5.css";
import Shopping01 from "../Shopping/Shopping01";

const M5 = () => {
  return (
    <section className="M5Section">
      <div className="M5ReadCategory">
        <div className="M5ReadCategoryHead">
          <div className="M5Text">
            <div className="M5T1">오늘 읽을만한 글</div>
            <div className="M5T2">주제별로 분류된 다양한 글 모음</div>
          </div>
          <div className="M5ReadCategorySubHead">
            <div className="M5ReadCategorySubText">
              668 <div className="M5T2">개의 글</div>
            </div>
            <div className="M5SubBar"></div>
            <span className="M5ReadCategorySubIcon"></span>
            <div className="M5T2">관심주제 설정</div>
          </div>
        </div>
        <div className="M5CategorySection">
          <CategoryHeader />
        </div>
      </div>
      <div className="M5Shopping">
        <div className="M5ShoppingHeadText">
          <span className="M5ShoppingNaverIcon"></span>
          <span>
            트랜드쇼핑 <span className="M5ShoppingMoveIcon"></span>
          </span>
          <div className="M5ShoppingSubHead">
            <span className="M5ShoppingSubHeadText">상품</span>
            <span className="M5ShoppingSubHeadText">쇼핑몰</span>
            <span className="M5ShoppingGreenText">MEN</span>
          </div>
        </div>
        <div className="ShoppingContentMain">
          <div className="ShoppingContentSection">
            <div className="ShoppingContentHeadMenu">
              <div className="ShopContentSection1">
                <span className="ShopContentBoldText">쿠팡</span>
                <span className="ShopContentPoint"></span>
                <span>G마켓</span>
                <span className="ShopContentPoint"></span>
                <span>옥션</span>
                <span className="ShopContentPoint"></span>
                <span>11번가</span>
                <span className="ShopContentPoint"></span>
                <span className="ShopContentBoldText">SSG닷컴</span>
                <span className="ShopContentPoint"></span>
                <span>티몬</span>
              </div>
              <div className="ShopContentSection2">
                <span className="ShopContentBoldText">올리브영</span>
                <span className="ShopContentPoint"></span>
                <span>위메프</span>
                <span className="ShopContentPoint"></span>
                <span>GS샵</span>
                <span className="ShopContentPoint"></span>
                <span className="ShopContentBoldText">CJ온스타일</span>
                <span className="ShopContentPoint"></span>
                <span>패션플러스</span>
              </div>
            </div>
            <div className="M5ShoppingSlick">
              <Shopping01 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default M5;
