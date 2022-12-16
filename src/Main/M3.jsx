import React from "react";
import "../styles/M3.css";
import M3SubNews1 from "./M3SubNews1";
import M3SubNews2 from "./M3SubNews2";

const M3 = () => {
  return (
    <section className="M3Section">
      <div className="M3SubNews1">
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
      </div>
      <div className="M3SubNews2">
        <M3SubNews2 />
      </div>
    </section>
  );
};

export default M3;
