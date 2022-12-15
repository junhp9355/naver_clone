import React from "react";
import "../styles/Top.css";
import Weather from "./Weather";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Top = ({ user, setUser }) => {
  const navigate = useNavigate();

  const onClickBlog = async (userid) => {
    if (user === undefined || user === null) {
      alert("로그인이 필요한 서비스 입니다.");
    } else if (user.userid === undefined || user.userid === null) {
      alert("로그인이 필요한 서비스 입니다.");
    } else {
      navigate(`/myblog/${user.userid}`);
    }
  };

  return (
    <section className="TopSection">
      <div className="TopLogoPos">
        <div className="TopLogo" />
        <Search />
      </div>
      <div className="TopCategory">
        <div className="TopContainer">
          <div className="TopCategoryPos">
            <div className="TopCategoryText">
              <span className="TopMailIcon" />
              <span>메일</span>
            </div>
            <span className="TopCategoryText">카페</span>
            <a href="#!" className="TopCategoryText" onClick={onClickBlog}>
              블로그
            </a>
            <a href="#!" className="TopCategoryText">
              지식iN
            </a>
            <a href="#!" className="TopCategoryText">
              쇼핑
            </a>
            <a href="#!" className="TopCategoryText">
              <span className="TopCategoryShppingLiveIcon"></span>
            </a>
            <a href="#!" className="TopCategoryText">
              Pay
            </a>
            <a href="#!" className="TopCategoryText2">
              TV
              <span className="TopCategoryTVIcon"></span>
            </a>
            <a href="#!" className="TopCategoryText3">
              사전
            </a>
            <a href="#!" className="TopCategoryText3">
              뉴스
            </a>
            <a href="#!" className="TopCategoryText3">
              증권
            </a>
            <a href="#!" className="TopCategoryText3">
              부동산
            </a>
            <a href="#!" className="TopCategoryText3">
              지도
            </a>
            <a href="#!" className="TopCategoryText3">
              VIBE
            </a>
            <a href="#!" className="TopCategoryText3">
              도서
            </a>
            <a href="#!" className="TopCategoryText3">
              웹툰
            </a>
            <a href="#!" className="TopCategoryText3">
              <select name="" id="" className="MoreCategoryInfo">
                <option value="">더보기</option>
              </select>
            </a>
            <div className="TopCategorySpace2" />
            <Weather />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
