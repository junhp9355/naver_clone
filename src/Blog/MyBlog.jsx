/* eslint-disable */
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";
import "./MyBlog.css";
import "./MyBlogMain.css";
import BlogContent from "./BlogContent";

const MyBlog = () => {
  const [user, setUser] = useRecoilState(recoilUser);
  const [topArrowVisible, setTopArrowVisible] = useState(false);
  const [topArrowVisible2, setTopArrowVisible2] = useState(false);
  const [myMenueVisible, setMyMenuVisible] = useState(false);
  const onClickTopArrow = () => {
    setTopArrowVisible((topArrowVisible) => !topArrowVisible);
    setMyMenuVisible((myMenueVisible) => !myMenueVisible);
  };
  const onClickTopArrow2 = () => {
    setTopArrowVisible2((topArrowVisible2) => !topArrowVisible2);
  };
  const onClickHome = () => {
    window.location.href = "http://localhost:3000/";
  };
  const onClickEdit = () => {
    window.location.href = `http://localhost:3000/myblog/${user.userid}/edit`;
  };
  return (
    <body className="MyBlogBody">
      <nav className="MyBlogTopNav">
        <div className="MyBlogTopMenu">
          <span className="MyBlogTopMenuText" onClick={onClickHome}>
            네이버 홈
          </span>
          <span className="MyBlogTopMenuText" onClick={onClickTopArrow}>
            내 메뉴
            <span
              className={
                topArrowVisible ? "BlogTopMenuArrow" : "BlogTopMenuArrowActive"
              }
            />
            <div className={myMenueVisible ? "BlogMyMenu" : "MenuNone"}>
              <span className="BackAngle"></span>
              <div className="BlogMyMenuList">
                <span className="BlogMyMenueText" onClick={onClickEdit}>
                  관리
                </span>
              </div>
            </div>
          </span>
          <span className="MyBlogTopMenuText" onClick={onClickTopArrow2}>
            {user.nickname}
            <span
              className={
                topArrowVisible2 ? "BlogTopMenuArrow" : "BlogTopMenuArrowActive"
              }
            />
          </span>
        </div>
        <div className="MyBlogTopHead">
          <span className="MyBlogName">블로그 이름</span>
          <div className="MyBlogSubMenu">
            <span className="MyBlogSubMenuText">지도</span>
            <span className="MyblogSubMenuBar" />
            <span className="MyBlogSubMenuText">서재</span>
            <span className="MyblogSubMenuBar" />
            <span className="MyBlogSubMenuText">메모</span>
            <span className="MyblogSubMenuBar" />
            <span className="MyBlogSubMenuText">안부</span>
          </div>
        </div>
      </nav>
      <section className="MyBlogMainBody">
        <div className="MyBlogSideBody">
          <span className="BlogSideHeadBlank" />
          <span className="BlogProfileImg" />
          <div className="BlogProfileInfo">
            <span className="BlogProfileNickName">{user.nickname}</span>
            <span className="BlogProfileID">{user.userid}</span>
          </div>
          <div className="BlogIntroductionArea">
            <span>소개글 내용</span>
          </div>
          <div className="BlogManagement">
            <span className="BlogWrittingIcon" />
            <span className="BlogWrittingText">글쓰기</span>
            <span className="BlogSettingIcon" />
            <span className="BlogSettingText" onClick={onClickEdit}>
              관리
            </span>
            <span>·</span>
            <span className="BlogSettingText">통계</span>
          </div>
        </div>
        <div className="MyBlogMainSection">
          <div className="BlogMainTop">
            <div className="BlogMainTopContent">
              <span className="BlogTopContentAll">전체보기</span>
              <span className="BlogTopContentCount">3개의 글</span>
            </div>
            <div className="BlogTopContentList">
              <span className="BlogTopContentListText">목록열기</span>
              {/* <span>목록닫기</span> */}
            </div>
          </div>
          {/*콘텐츠 map*/}
          <div>
            <BlogContent />
          </div>
          {/*콘텐츠 map*/}
        </div>
      </section>
    </body>
  );
};

export default MyBlog;
