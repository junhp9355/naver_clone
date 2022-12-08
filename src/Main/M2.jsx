import React from "react";
import "../styles/M2.css";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";
import MainBanner from "../SwiperComponent/MainBanner";
import "../styles/M2LoginUser.css";
import M2UserMenu from "../SwiperComponent/M2UserMenu";
import { useNavigate } from "react-router-dom";

const M2 = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(recoilUser);

  const onClickMainLoginBt = () => {
    navigate("/Login");
  };

  const onClickLogout = () => {
    setUser("");
    localStorage.clear();
  };
  return (
    <section className="M2Section">
      <div className="M2BannerNav">
        <MainBanner />
      </div>
      <div className="M2Space"></div>
      <div className="M2LoginPosition">
        {user ? (
          <div className="M2LoginUserSection">
            <div>
              <div className="M2LoginUserManinSection">
                <span className="M2UserProfileImg">
                  <span className="M2UserProfileSetting"></span>
                </span>
                <div className="M2UserMainInfo">
                  <div className="M2UserInfo">
                    <span className="M2UserID">{user.nickname}</span>
                    <span className="M2Userbar">|</span>
                    <span className="M2UserFlatform">네이버ID</span>
                    <span className="M2UserSecurityIcon"></span>
                    <button className="M2LogoutBt" onClick={onClickLogout}>
                      로그아웃
                    </button>
                  </div>
                  <span className="M2UserEmailAdress">
                    {user.userid}@naver.com
                  </span>
                  <div className="M2UserSubInfo">
                    <span className="M2UserMail">메일</span>
                    <span className="M2UserMailCount">64</span>
                    <span className="M2Usermessage">쪽지</span>
                    <span className="M2UsermessageCount">116</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="M2LoginUserSpace"></div>
            <div className="M2LoginUserBottmMenu">
              <M2UserMenu />
            </div>
          </div>
        ) : (
          <div className="M2Login">
            <p>네이버를 더 안전하고 편리하게 이용하세요</p>
            <div className="M2LoginMainBt" onClick={onClickMainLoginBt}>
              NAVER 로그인
            </div>
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
        )}
      </div>
    </section>
  );
};

export default M2;
