import React, { useState } from "react";
import Slider from "react-slick";
import "../MySlick/slick.css";
import "../MySlick/slick-theme.css";
import "./Shopping01.css";
import ShoppingContents01 from "./ShoppingContents01";

const Shopping01 = () => {
  const [page, setPage] = useState(1);
  const onClickPageNumPrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const onClickPageNumNext = () => {
    if (page < 6) {
      setPage(page + 1);
    }
  };
  //   const ArrowonClick = (e) => {
  //     function clickHandler(options, e) {
  //       if (e) {
  //         e.preventDefault();
  //       }
  //       this.props.clickHandler(options, e);
  //     }
  //   };
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="ShoppingNextArrowBt" onClick={onClick}>
        <div onClick={onClickPageNumNext}>
          <div className="ShoppingNextArrow" />
        </div>
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="ShoppingPrevArrowBt" onClick={onClick}>
        <div onClick={onClickPageNumPrev}>
          <div className="ShoppingPrevArrow" />
        </div>
      </div>
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="Shopping01Main">
      <span className="ShoppingPageNum1">
        {page}
        <span className="ShoppingPageNum2"> / 6</span>
      </span>
      <Slider {...settings}>
        <div>
          <ShoppingContents01 />
        </div>
        <div id="02">
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <span className="ShoppingPageNum3">
        {page}
        <span className="ShoppingPageNum2"> / 6</span>
      </span>
      {/* <div className="ShoppingNextArrowBt">
        <div onClick={onClickPageNumNext}>
          <div className="ShoppingNextArrow" />
        </div>
      </div>
      <div className="ShoppingPrevArrowBt">
        <div onClick={onClickPageNumPrev}>
          <div className="ShoppingPrevArrow" />
        </div>
      </div> */}
    </div>
  );
};

export default Shopping01;
