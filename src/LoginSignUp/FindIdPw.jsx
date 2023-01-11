/* eslint-disable */
import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";
import "../styles/FindIdPw.css";
import { BACKEND_URL } from "../Util/Util";
import { useNavigate } from "react-router-dom";

const FindIdPW = () => {
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useRecoilState(recoilUser);
  const [fail, setFail] = useState(true);
  const [clickFindID, setClickFindID] = useState(false);
  const [clickFindPW, setClickFindPW] = useState(false);

  return (
    <section className="LoginSection">
      <span
        className="LoginLogo"
        onClick={() => {
          navigate("/");
        }}
      ></span>
      <div className="FindSelectArea">
        <div
          className="FindSelectBox"
          onClick={() => setClickFindID(!clickFindID)}
        >
          <div>아이디 찾기</div>
        </div>
        <div
          className="FindSelectBox"
          onClick={() => {
            setClickFindPW(!clickFindPW);
          }}
        >
          <div>비밀번호 찾기</div>
        </div>
      </div>
      {clickFindID ? (
        <form className="FindForm">
          <div className="FindInfoBox">
            <div className="FindHeadArea">
              <div className="FindHeadText">
                회원정보에 등록한 이름과 이메일 인증
              </div>
              <div className="FindSubText">
                회원정보에 등록한 정보와 입력한 정보가 일치하여야 확인
                가능합니다.
              </div>
            </div>
            <div className="FindInputBox">
              <div className="FindInput">
                <div className="FindTitle">이름</div>
                <input className="inputBox" type="text" />
              </div>
              <div className="FindInput">
                <div className="FindTitle">이메일</div>
                <input className="inputBox" type="text" />
              </div>
            </div>
          </div>
          <button
            className="FindBt"
            onClick={() => {
              setClickFindID(false);
              setClickFindPW(false);
            }}
          >
            다음
          </button>
        </form>
      ) : null}
      {clickFindPW ? (
        <form className="FindForm">
          <div className="FindInfoBox">
            <div className="FindHeadArea">
              <div className="FindHeadText">
                회원정보에 등록한 이름과 이메일 인증
              </div>
              <div className="FindSubText">
                회원정보에 등록한 정보와 입력한 정보가 일치하여야 확인
                가능합니다.
              </div>
            </div>
            <div className="FindInputBox">
              <div className="FindInput">
                <div className="FindTitle">아이디</div>
                <input className="inputBox" type="text" />
              </div>
              <div className="FindInput">
                <div className="FindTitle">이름</div>
                <input className="inputBox" type="text" />
              </div>
              <div className="FindInput">
                <div className="FindTitle">이메일</div>
                <input className="inputBox" type="text" />
              </div>
            </div>
          </div>
          <button
            className="FindPWBt"
            onClick={() => {
              setClickFindID(false);
              setClickFindPW(false);
            }}
          >
            다음
          </button>
        </form>
      ) : null}
    </section>
  );
};

export default FindIdPW;
