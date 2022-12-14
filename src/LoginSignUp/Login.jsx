/* eslint-disable */
import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";
import "../styles/Login.css";
import { BACKEND_URL } from "../Util/Util";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useRecoilState(recoilUser);
  const [fail, setFail] = useState(true);

  const sendLoginUserdata = async (userid, password) => {
    try {
      const data = await axios.post(`${BACKEND_URL}/v1/login`, {
        userid,
        password,
      });
      setUserid("");
      setPassword("");
      setUser(data.data);
      navigate("/");
    } catch (e) {
      setFail(!fail);
      setPassword("");
    }
  };
  const onSubmitLoginUser = (e) => {
    e.preventDefault();
    sendLoginUserdata(userid, password);
  };
  return (
    <section className="LoginSection">
      <span
        className="LoginLogo"
        onClick={() => {
          navigate("/");
        }}
      ></span>
      <form className="LoginMain" onSubmit={onSubmitLoginUser}>
        <div className="LoginTopHeader">
          <span className="IDLoginIcon"></span>
          <div className="IDLoginText">ID 로그인</div>
        </div>
        <div className="LoginInput">
          <div className="LoginInputIDPos">
            <span className="LoginInputIconID"></span>
            <input
              type="text"
              className="LoginID"
              placeholder="아이디"
              value={userid}
              onChange={(e) => {
                setUserid(e.target.value);
              }}
            />
          </div>
          <div className="LoginInputPWPos">
            <span className="LoginInputIconPW"></span>
            <input
              type="password"
              className="LoginPW"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
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
        <span className={!fail ? "LoginFailText" : "LoginSuccess"}>
          아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.
          <br /> 입력하신 내용을 다시 확인해주세요.
        </span>
        <button
          className={fail ? "LoginMainBtFail" : "LoginMainBtSuccess"}
          type="submit"
        >
          로그인
        </button>
      </form>
      <div className="LoginSubMenu">
        <div>비밀번호 찾기</div>
        <div className="LoginSpace">|</div>
        <div>아이디 찾기</div>
        <div className="LoginSpace">|</div>
        <div
          onClick={() => {
            navigate("/signup");
          }}
          className="LoginSignupBt"
        >
          회원가입
        </div>
      </div>
      <span className="LoginBanner"></span>
    </section>
  );
};

export default Login;
