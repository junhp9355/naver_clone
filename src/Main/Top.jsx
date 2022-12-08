/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import "../styles/Top.css";
import Weather from "../SwiperComponent/Weather";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";
import { useNavigate } from "react-router-dom";

const Top = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(recoilUser);
  const [searchVisible, setSearchVisible] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );
  const searchBox = useRef();
  console.log(user);
  const onClickBlog = async (userid) => {
    if (user === undefined || user === null) {
      alert("로그인이 필요한 서비스 입니다.");
    } else if (user.userid === undefined || user.userid === null) {
      alert("로그인이 필요한 서비스 입니다.");
    } else {
      navigate(`/myblog/${user.userid}`);
    }
  };

  const onClickClose = (e) => {
    if (searchVisible && searchBox.current.contains(e.target)) {
      setSearchVisible(true);
    }
  };

  const onClickSearchData = (text) => {
    setKeyword(text);
  };

  useEffect(() => {
    if (searchVisible) document.addEventListener("mousedown", onClickClose);
    return () => {
      document.removeEventListener("mousedown", onClickClose);
    };
  });

  const onClickSearchVisible = () => {
    setSearchVisible((searchVisible) => !searchVisible);
  };

  const onChangeSearchKeyWord = (e) => {
    setKeyword(e.target.value);
  };

  const onClickSearch = () => {
    if (keyword) {
      onAddKeyWord(keyword);
      setKeyword("");
    }
  };

  useEffect(() => {
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  const getDate = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${month}.${day}`;
  };

  const onAddKeyWord = (text) => {
    const newKeyword = {
      id: Date.now(),
      text,
      date: getDate(),
    };

    setKeywords([newKeyword, ...keywords]);
  };

  const onRemoveKeyword = (id) => {
    setKeywords(
      keywords.filter((keyword) => {
        return keyword.id !== id;
      })
    );
    setSearchVisible(true);
  };

  const onRemoveAllKeyword = () => {
    setKeywords([]);
  };

  return (
    <section className="TopSection">
      <div className="TopLogoPos">
        <div className="TopLogo" />
        <div className="TopSearchBox" onClick={() => onClickSearchVisible()}>
          <input
            type="text"
            value={keyword}
            onChange={onChangeSearchKeyWord}
            onKeyDown={(e) => {
              if (e.keyCode === 13) onClickSearch();
            }}
            className="Topinputbox"
          ></input>
          <span className="TopinputKeybordIcon"></span>
          <span className="TopinputAuotoCompleteIcon"></span>
          <div className="TopinputSearchBox">
            <span className="TopinputSearchIcon"></span>
          </div>
          <div
            className={
              searchVisible ? "TopSearchDataListNone" : "TopSearchDataList"
            }
            ref={searchBox}
          >
            <div className="TopSearchHeader">
              <div className="TopSearchHeader01">최근 검색어</div>
              <div
                className="TopSearchHeader02"
                onClick={() => onRemoveAllKeyword()}
              >
                전체 삭제
              </div>
            </div>
            <div>
              {keywords.map(({ id, text, date }) => (
                <section className="TopSearchData">
                  <span className="SearchDataIcon"></span>
                  <div
                    className="SearchDataText"
                    onClick={() => {
                      onClickSearchData(text);
                    }}
                  >
                    {text}
                  </div>
                  <div className="SearchDataDate">{date}</div>
                  <button
                    className="SearchDataDelete"
                    onClick={() => onRemoveKeyword(id)}
                  ></button>
                </section>
              ))}
            </div>
          </div>
        </div>
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
