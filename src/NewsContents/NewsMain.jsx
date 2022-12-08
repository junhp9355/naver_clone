import React, { useState } from "react";
import Slider from "react-slick";
import "../MySlick/slick.css";
import "../MySlick/slick-theme.css";
import NewsContent01 from "./NewsContent01";
import NewsContent02 from "./NewsContent02";
import NewsContent03 from "./NewsContent02";
import "../NewsContents/NewsContent01.css";

const NewsMain = () => {
  const [page, setPage] = useState(1);
  const [nextArrowVisible, setNextArrowVisible] = useState(true);
  const [prevArrowVisible, setPrevArrowVisible] = useState(false);
  const onClickArrowNext = () => {
    setPrevArrowVisible(true);
    if (page === 3) {
      setNextArrowVisible((nextArrowVisible) => !nextArrowVisible);
    } else {
      setNextArrowVisible(true);
    }
    if (page < 3) {
      setPage(page + 2);
    }
  };
  const onClickArrowPrev = () => {
    setNextArrowVisible(true);
    if (page === 1) {
      setPrevArrowVisible((prevArrowVisible) => !prevArrowVisible);
    } else {
      setPrevArrowVisible(true);
    }
    if (page > 1) {
      setPage(page - 2);
    }
  };
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="NewsNextArrowBt" onClick={onClick}>
        <div onClick={onClickArrowNext}>
          <div className={nextArrowVisible ? "NewsNextArrow" : "NoneArrow"} />
        </div>
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="NewsPrevArrowBt" onClick={onClick}>
        <div onClick={onClickArrowPrev}>
          <div className={prevArrowVisible ? "NewsPrevArrow" : "NoneArrow"} />
        </div>
      </div>
    );
  };
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="NewsMainContent">
      <Slider {...settings}>
        <div>
          <NewsContent01 />
        </div>
        <div>
          <NewsContent02 />
        </div>
        <div>
          <NewsContent03 />
        </div>
      </Slider>
    </div>
  );
};

export default NewsMain;
