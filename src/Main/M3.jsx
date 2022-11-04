import React from "react";
import "../styles/M3.css";
import M3SubNews1 from "../SwiperComponent/M3SubNews1";
import M3SubNews2 from "../SwiperComponent/M3SubNews2";

const M3 = () => {
  return (
    <section className="M3Section">
      <nav className="M3SubNews1">
        <div className="M3SubNewsHead">연합뉴스</div>
        <div className="M3SubNewsIcon"></div>
        <M3SubNews1 />
        <div className="M3SubNewsText1">
          뉴스홈
          <div className="M3SubNews1Point" />
        </div>
        <div className="M3SubNewsText2">연예</div>
        <div className="M3SubNewsText2">스포츠</div>
        <div className="M3SubNewsText2">경제</div>
      </nav>
      <div className="M3Space"></div>
      <nav className="M3SubNews2">
        <M3SubNews2 />
      </nav>
    </section>
  );
};

export default M3;
