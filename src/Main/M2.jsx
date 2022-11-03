import React from "react";
import "../styles/M2.css";
import { Link } from "react-router-dom";

const M2 = () => {
  return (
    <section className="M2Section">
      <nav className="M2BannerNav"></nav>
      <div className="M2Space"></div>
      <nav className="M2LoginPosition">
        <div className="M2Login">
          <p>네이버를 더 안전하고 편리하게 이용하세요</p>
          <Link to="/Login">
            <div className="M2LoginMainBt">NAVER 로그인</div>
          </Link>
          <div className="M2LoginSubMenu">
            <span className="M2LoginLockImg"></span>
            <div className="M2LoginID">아이디</div>
            <span>/</span>
            <div className="M2LoginPW">비밀번호찾기</div>
            <div className="M2LoginSignUP">
              <span className="M2LoginSignUpImg"></span>
              <a href="/signup">회원가입</a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default M2;
