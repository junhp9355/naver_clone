/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";
import "./MyBlog.css";
import "./MyBlogMain.css";
import BlogContent from "./BlogContent";
import BlogCategory from "./BlogCategory";
import axios from "axios";
import { BACKEND_URL } from "../Util/Util";

const MyBlog = () => {
  const [user, setUser] = useRecoilState(recoilUser);
  const [topArrowVisible, setTopArrowVisible] = useState(false);
  const [topArrowVisible2, setTopArrowVisible2] = useState(false);
  const [myMenueVisible, setMyMenuVisible] = useState(false);
  const [mydata, setMydate] = useState("");
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
  const onClickWrite = () => {
    window.location.href = `http://localhost:3000/myblog/${user.userid}/write`;
  };
  const userid = user.userid;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: `${BACKEND_URL}/v1/myblog`,
          method: "GET",
          params: {
            userid,
          },
        });
        setMydate(data.data);
      } catch (e) {
        alert("fail");
      }
    };
    getData();
  }, [userid]);

  console.log(mydata);
  return (
    <div className="MyBlogBody">
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
          <span className="MyBlogName">{mydata.blogname}</span>
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
            <span className="BlogProfileNickName">{mydata.nickname}</span>
            <span className="BlogProfileID">{user.userid}</span>
          </div>
          <div className="BlogIntroductionArea">
            <span>{mydata.blogintro}</span>
          </div>
          <div className="BlogManagement">
            <span className="BlogWrittingIcon" />
            <span className="BlogWrittingText" onClick={onClickWrite}>
              글쓰기
            </span>
            <span className="BlogSettingIcon" />
            <span className="BlogSettingText" onClick={onClickEdit}>
              관리
            </span>
            <span>·</span>
            <span className="BlogSettingText">통계</span>
          </div>
          <BlogCategory />
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
    </div>
  );
};

export default MyBlog;
