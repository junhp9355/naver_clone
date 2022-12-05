import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";
import "./MyBlog.css";
import "./MyBlogMain.css";
import BlogContent from "./BlogContent";
import BlogCategory from "./BlogCategory";
import BlogDetailContent from "./BlogDetailContent";
import axios from "axios";
import { BACKEND_URL } from "../Util/Util";

const MyBlog = () => {
  const [user, setUser] = useRecoilState(recoilUser);
  const [topArrowVisible, setTopArrowVisible] = useState(false);
  const [topArrowVisible2, setTopArrowVisible2] = useState(false);
  const [myMenueVisible, setMyMenuVisible] = useState(false);
  const [getAllDB, setGetAllDB] = useState(() => []);
  const [mydata, setMydate] = useState(() => "");
  const [listvisible, setListvisible] = useState(true);
  const [chooseCat, setChooseCat] = useState(() => "");
  const [catDB, setCatDB] = useState(() => []);
  const [detailDB, setDetailDB] = useState(() => []);
  const onClickEditBt = () => {
    window.location.href = `http://localhost:3000/myblog/${user.userid}/edit`;
  };

  const selectDetailDB = getAllDB.filter(
    (value) => value.maincategory === chooseCat
  );
  const onClickAllContentList = () => {
    setChooseCat("");
  };
  const onClickChooseCat = (e) => {
    setChooseCat(e);
  };
  const onClinckListBt = () => {
    setListvisible((listvisible) => !listvisible);
  };
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
  console.log("전체DB", getAllDB);
  console.log("선택 DB", detailDB);
  console.log("선택", chooseCat);
  console.log("테스트", selectDetailDB);

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
  useEffect(() => {
    const getData = async (e) => {
      try {
        const data = await axios({
          url: `${BACKEND_URL}/v3/content/${userid}`,
          method: "GET",
          params: {
            userid,
          },
        });
        setGetAllDB(data.data.reverse());
      } catch (e) {
        alert("실패");
      }
    };
    getData();
  }, [userid]);

  useEffect(() => {
    const getData = async (e) => {
      try {
        const data = await axios({
          url: `${BACKEND_URL}/v2/maincategory`,
          method: "GET",
          params: {
            userid,
          },
        });
        setCatDB(data.data);
      } catch (e) {
        alert("fail");
      }
    };
    getData();
  }, [userid]);
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
          <section className="BlogContentCategory">
            <div className="BlogContentCategoryArea">
              <div className="BlogContentCatHead">
                <span>카테고리</span>
                <span className="ContentShowBt">^</span>
                <div className="BlogContCatMain">
                  <div className="AllContent">
                    <span className="BlogContCatIcon"></span>
                    <span onClick={onClickAllContentList}>전체보기</span>
                    <span>({getAllDB.length})</span>
                    <span
                      className="ContentEditBt"
                      onClick={onClickEditBt}
                    ></span>
                  </div>
                  <div className="BlogCatAreaDashed">
                    {/*세부 카테고리map pos*/}
                    {catDB.map((item, index) => (
                      <div className="BlogContCatDetail" key={index}>
                        <span className="BlogContCatIcon"></span>
                        <span
                          className="BlogContCatTitle"
                          onClick={() => onClickChooseCat(item.maincategory)}
                        >
                          {item.maincategory}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/*세부 카테고리map pos*/}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="MyBlogMainSection">
          <div className="BlogMainTop">
            <div className="BlogMainTopContent">
              <span
                className="BlogTopContentAll"
                onClick={onClickAllContentList}
              >
                전체보기
              </span>
              <span className="BlogTopContentCount">
                {getAllDB.length}개의 글
              </span>
              <div className="BlogTopContentList">
                <span
                  className={
                    listvisible ? "BlogTopContentListText" : "ListTextNone"
                  }
                  onClick={onClinckListBt}
                >
                  목록열기
                </span>
                <span
                  className={
                    !listvisible ? "BlogTopContentListText" : "ListTextNone"
                  }
                  onClick={onClinckListBt}
                >
                  목록닫기
                </span>
              </div>
            </div>
          </div>
          <div className={!listvisible ? "BlogListShow" : "ListTextNone"}>
            <div className="BlogAllContentLineListHead">
              <div className="LineListHeadTitle">
                <span>제목</span>
                <span>작성일</span>
              </div>
              {getAllDB.map((allDB, index) => (
                <div key={index} className="BlogAllContentLineList">
                  <span>{allDB.title}</span>
                  <span>
                    {allDB.date[0]}.{allDB.date[1]}.{allDB.date[2]}{" "}
                    {allDB.date[3]}:{allDB.date[4]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/*콘텐츠 map*/}
          <div
            className={chooseCat === "" ? "BlogAllContentList" : "ListTextNone"}
          >
            <BlogContent getAllDB={getAllDB} userid={userid} />
          </div>
          <div
            className={
              chooseCat === "" ? "ListTextNone" : "BlogDetailContentList"
            }
          >
            <BlogDetailContent
              selectDetailDB={selectDetailDB}
              userid={userid}
            />
          </div>
          {/*콘텐츠 map*/}
        </div>
      </section>
    </div>
  );
};

export default MyBlog;
