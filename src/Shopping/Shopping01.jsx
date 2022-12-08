import React, { useState } from "react";
import Slider from "react-slick";
import "../MySlick/slick.css";
import "../MySlick/slick-theme.css";
import "./Shopping01.css";
import ShoppingContents01 from "./ShoppingContents01";
import ShoppingContents02 from "./ShoppingContents02";
import ShoppingContents03 from "./ShoppingContents03";

const Shopping01 = () => {
  const [page, setPage] = useState(1);
  const onClickPageNumPrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const onClickPageNumNext = () => {
    if (page < 3) {
      setPage(page + 1);
    }
  };
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <section className="ShoppingArrowSection">
        <div className="ShoppingNextArrowBt" onClick={onClick}>
          <div onClick={onClickPageNumNext}>
            <div className="ShoppingNextArrow" />
          </div>
        </div>
        <div className="ShoppingNextArrowBt2" onClick={onClick}>
          <div onClick={onClickPageNumNext}>
            <div className="ShoppingNextArrow" />
          </div>
        </div>
      </section>
    );
  };
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <section className="ShoppingArrowSection">
        <div className="ShoppingPrevArrowBt" onClick={onClick}>
          <div onClick={onClickPageNumPrev}>
            <div className="ShoppingPrevArrow" />
          </div>
        </div>
        <div className="ShoppingPrevArrowBt2" onClick={onClick}>
          <div onClick={onClickPageNumPrev}>
            <div className="ShoppingPrevArrow" />
          </div>
        </div>
      </section>
    );
  };
  const settings = {
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    draggable: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="Shopping01Main">
      <span className="ShoppingPageNum1">
        {page}
        <span className="ShoppingPageNum2"> / 3</span>
      </span>
      <Slider {...settings} className="ShoppingSlider">
        <div className="ShoppingContnts">
          <ShoppingContents01 />
        </div>
        <div>
          <ShoppingContents02 />
        </div>
        <div>
          <ShoppingContents03 />
        </div>
      </Slider>
      <span className="ShoppingPageNum3">
        {page}
        <span className="ShoppingPageNum2"> / 3</span>
      </span>
    </div>
  );
};

export default Shopping01;
