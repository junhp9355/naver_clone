import React, { useState } from "react";
import "../styles/CategoryHeader.css";
import "../MySlick/slick.css";
import "../MySlick/slick-theme.css";
import Slider from "react-slick";
import Enter from "../Category/Enter";

const CategoryHeader = () => {
  const [number, setNumber] = useState(1);
  const [prevVisible, setPrevVisible] = useState(true);
  const [nextVisible, setNextVisible] = useState(true);
  const onClickNextBt = () => {
    setNumber(number + 1);
  };
  const onClickPrevBt = () => {
    setNumber(number - 1);
  };
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="CategoryNextArrowBt"
        onClick={number >= 8 ? onClick : undefined}
      >
        <div onClick={onClickNextBt}>
          <div className={number === 10 ? "NoneArrow" : "CategoryNextArrow"} />
        </div>
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="CategoryPrevArrowBt" onClick={onClick}>
        <div onClick={onClickPrevBt}>
          <div className={number === 1 ? "NoneArrow" : "CategorysPrevArrow"} />
        </div>
      </div>
    );
  };
  const settings = {
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="CategoryMainSection">
      <Slider {...settings}>
        <div className="MainCategoryBlock">
          <div className={number === 1 ? "Category01" : "MainCategoryHeader"}>
            엔터
          </div>
          <div className={number === 1 ? undefined : "NoneContents"}>
            <Enter />
          </div>
        </div>
        <div className="MainCategoryBlock">
          <div className={number === 2 ? "Category02" : "MainCategoryHeader"}>
            스포츠
          </div>
          <div className={number === 2 ? undefined : "NoneContents"}>
            하단 내용
          </div>
        </div>
        <div className="MainCategoryBlock">
          <div className={number === 3 ? "Category03" : "MainCategoryHeader"}>
            자동차
          </div>
          <div className={number === 3 ? undefined : "NoneContents"}>
            하단 내용
          </div>
        </div>
        <div className="MainCategoryBlock">
          <div className={number === 4 ? "Category04" : "MainCategoryHeader"}>
            웹툰
          </div>
          <div className={number === 4 ? undefined : "NoneContents"}>
            하단 내용
          </div>
        </div>
        <div className="MainCategoryBlock">
          <div className={number === 5 ? "Category05" : "MainCategoryHeader"}>
            경제
          </div>
          <div className={number === 5 ? undefined : "NoneContents"}>
            하단 내용
          </div>
        </div>
        <div className="MainCategoryBlock">
          <div className={number === 6 ? "Category06" : "MainCategoryHeader"}>
            추천구독
          </div>
          <div className={number === 6 ? undefined : "NoneContents"}>
            하단 내용
          </div>
        </div>
        <div className="MainCategoryBlock">
          <div className={number === 7 ? "Category07" : "MainCategoryHeader"}>
            레시피
          </div>
          <div className={number === 7 ? undefined : "NoneContents"}>
            하단 내용
          </div>
        </div>
        <div>
          <div className={number === 8 ? "Category08" : "MainCategoryHeader"}>
            리빙
          </div>
          <div className={number === 8 ? undefined : "NoneContents"}>
            하단 내용
          </div>
        </div>
        <div>
          <div className={number === 9 ? "Category09" : "MainCategoryHeader"}>
            책방
          </div>
          <div className={number === 9 ? undefined : "NoneContents"}>
            하단 내용
          </div>
        </div>
        <div>
          <div className={number === 10 ? "Category10" : "MainCategoryHeader"}>
            패션뷰티
          </div>
          <div className={number === 10 ? undefined : "NoneContents"}>
            하단 내용
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CategoryHeader;
