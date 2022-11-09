import React from "react";
import "../styles/Login.css";

const Login = () => {
  const onClickSignUpBt = () => {
    window.location.href = "http://localhost:3000/signup";
  };
  return (
    <section className="LoginSection">
      <a href="http://localhost:3000/" className="LoginLogo"></a>
      <nav className="LoginMain">
        <div className="LoginTopHeader">
          <span className="IDLoginIcon"></span>
          <div className="IDLoginText">ID 로그인</div>
        </div>
        <div className="LoginInput">
          <div className="LoginInputIDPos">
            <span className="LoginInputIconID"></span>
            <input type="text" className="LoginID" placeholder="아이디" />
          </div>
          <div className="LoginInputPWPos">
            <span className="LoginInputIconPW"></span>
            <input type="text" className="LoginPW" placeholder="비밀번호" />
          </div>
        </div>
        <div className="LoginSubfunction">
          <div className="LoginContinueBlock">
            <span className="LoginContinue"></span>
            <div>로그인상태 유지</div>
          </div>
          <div className="IPBlock">
            <div>IP보안</div>
            <div className="IPSlideBack">
              <div className="IPSlideIcon"></div>
            </div>
          </div>
        </div>
        <div className="LoginMainBt">로그인</div>
      </nav>
      <div className="LoginSubMenu">
        <div>비밀번호 찾기</div>
        <div className="LoginSpace">|</div>
        <div>아이디 찾기</div>
        <div className="LoginSpace">|</div>
        <div onClick={onClickSignUpBt}>회원가입</div>
      </div>
      <span className="LoginBanner"></span>
    </section>
  );
};

export default Login;
