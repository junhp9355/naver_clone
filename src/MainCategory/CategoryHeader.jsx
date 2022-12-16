import React, { useState } from "react";
import "../styles/CategoryHeader.css";
import "../MySlick/slick.css";
import "../MySlick/slick-theme.css";
import Slider from "react-slick";
import Enter from "../MainCategory/Enter";

const CategoryHeader = () => {
  const [number, setNumber] = useState(1);
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
    variableWidth: true,
    draggable: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="CategoryMainSection">
      <Slider {...settings} className="CategoryScale">
        <div className="MainCategoryBlock">
          <div
            className={
              number === 1 ? "Category01 BoxScale" : "MainCategoryHeader Cat01"
            }
          >
            엔터
          </div>
        </div>
        <div className="MainCategoryBlock">
          <div
            className={
              number === 2 ? "Category02 BoxScale" : "MainCategoryHeader Cat02"
            }
          >
            스포츠
          </div>
        </div>
        <div className="MainCategoryBlock">
          <div
            className={
              number === 3 ? "Category03 BoxScale" : "MainCategoryHeader Cat03"
            }
          >
            자동차
          </div>
        </div>
        <div className="MainCategoryBlock">
          <div
            className={
              number === 4 ? "Category04 BoxScale" : "MainCategoryHeader Cat04"
            }
          >
            웹툰
          </div>
        </div>
        <div className="MainCategoryBlock">
          <div
            className={
              number === 5 ? "Category05 BoxScale" : "MainCategoryHeader Cat05"
            }
          >
            경제
          </div>
        </div>
        <div className="MainCategoryBlock">
          <div
            className={
              number === 6 ? "Category06 BoxScale" : "MainCategoryHeader Cat06"
            }
          >
            추천구독
          </div>
        </div>
        <div className="MainCategoryBlock">
          <div
            className={
              number === 7 ? "Category07 BoxScale" : "MainCategoryHeader Cat07"
            }
          >
            레시피
          </div>
        </div>
        <div className="MainCategoryBlock">
          <div
            className={
              number === 8 ? "Category08 BoxScale" : "MainCategoryHeader Cat08"
            }
          >
            리빙
          </div>
        </div>
        <div className="MainCategoryBlock">
          <div
            className={
              number === 9 ? "Category09 BoxScale" : "MainCategoryHeader Cat09"
            }
          >
            책방
          </div>
        </div>
        <div className="MainCategoryBlock">
          <div
            className={
              number === 10 ? "Category10 BoxScale" : "MainCategoryHeader Cat10"
            }
          >
            패션뷰티
          </div>
        </div>
      </Slider>
      <div className="CategoryScale">
        <div className={number === 1 ? undefined : "NoneContents"}>
          <Enter />
        </div>
        <div className={number === 2 ? undefined : "NoneContents"}>
          {/* <Enter /> */}
        </div>
        <div className={number === 3 ? undefined : "NoneContents"}>
          하단 내용
        </div>
        <div className={number === 4 ? undefined : "NoneContents"}>
          하단 내용
        </div>
        <div className={number === 5 ? undefined : "NoneContents"}>
          하단 내용
        </div>
        <div className={number === 6 ? undefined : "NoneContents"}>
          하단 내용
        </div>
        <div className={number === 7 ? undefined : "NoneContents"}>
          하단 내용
        </div>
        <div className={number === 8 ? undefined : "NoneContents"}>
          하단 내용
        </div>
        <div className={number === 9 ? undefined : "NoneContents"}>
          하단 내용
        </div>
        <div className={number === 10 ? undefined : "NoneContents"}>
          하단 내용
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
