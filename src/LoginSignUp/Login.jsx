import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <section className="LoginSection">
      <a href="http://localhost:3000/" className="LoginLogo"></a>
      <nav className="LoginMain">
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
      </nav>
      <div className="LoginSubMenu">
        <div>비밀번호 찾기</div>
        <div className="LoginSpace">|</div>
        <div>아이디 찾기</div>
        <div className="LoginSpace">|</div>
        <div>회원가입</div>
      </div>
      <span className="LoginBanner"></span>
    </section>
  );
};

export default Login;
