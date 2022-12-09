import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";
import "../BlogStyle/MyBlog.css";
import "../BlogStyle/MyBlogMain.css";
import BlogContent from "./BlogContent";
import BlogDetailContent from "./BlogDetailContent";
import axios from "axios";
import { BACKEND_URL } from "../Util/Util";
import Pagination from "../Pagination/Pagination";
import ListPagination from "../Pagination/ListPagination";
import { useNavigate } from "react-router-dom";

const MyBlog = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(recoilUser);
  const [topArrowVisible, setTopArrowVisible] = useState(false);
  const [topArrowVisible2, setTopArrowVisible2] = useState(false);
  const [myMenueVisible, setMyMenuVisible] = useState(false);
  const [myMenueVisible2, setMyMenuVisible2] = useState(false);
  const [getAllDB, setGetAllDB] = useState(() => []);
  const [mydata, setMydate] = useState(() => "");
  const [listvisible, setListvisible] = useState(true);
  const [chooseCat, setChooseCat] = useState(() => "");
  const [catDB, setCatDB] = useState(() => []);
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const [listlimit, setListLimit] = useState(4);
  const [listpage, setListPage] = useState(1);
  const userid = user.userid;
  const listoffset = (listpage - 1) * listlimit;
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
    if (topArrowVisible2 === true) {
      setTopArrowVisible2(false);
      setMyMenuVisible2(false);
    }
    setTopArrowVisible((topArrowVisible) => !topArrowVisible);
    setMyMenuVisible((myMenueVisible) => !myMenueVisible);
  };
  const onClickTopArrow2 = () => {
    if (topArrowVisible === true) {
      setTopArrowVisible(false);
      setMyMenuVisible(false);
    }
    setTopArrowVisible2((topArrowVisible2) => !topArrowVisible2);
    setMyMenuVisible2((myMenueVisible2) => !myMenueVisible2);
  };
  const onClickHome = () => {
    navigate("/");
  };
  const onClickEdit = () => {
    navigate(`/myblog/${user.userid}/edit`, {
      state: { mydata: mydata },
    });
  };
  const onClickWrite = () => {
    navigate(`/myblog/${user.userid}/write`, {
      state: { catDB: catDB, userid: userid },
    });
  };
  const onClickLogout = () => {
    setUser("");
    navigate("/");
    localStorage.clear();
  };
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
      } catch (e) {}
    };
    getData();
    const getContentData = async (e) => {
      try {
        const contentdata = await axios({
          url: `${BACKEND_URL}/v3/content/${userid}`,
          method: "GET",
          params: {
            userid,
          },
        });
        setGetAllDB(contentdata.data.reverse());
      } catch (e) {}
    };
    getContentData();
    const getCategoryData = async (e) => {
      try {
        const categorydata = await axios({
          url: `${BACKEND_URL}/v2/maincategory`,
          method: "GET",
          params: {
            userid,
          },
        });
        setCatDB(categorydata.data);
      } catch (e) {}
    };
    getCategoryData();
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
                  관 리
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
            <div className={myMenueVisible2 ? "BlogMyMenu2" : "MenuNone"}>
              <span className="BackAngle2"></span>
              <div className="BlogMyMenuList2">
                <span className="BlogMyMenueText" onClick={onClickLogout}>
                  로그아웃
                </span>
              </div>
            </div>
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
                <div className="BlogContCatMain">
                  <div className="AllContent">
                    <span className="BlogContCatIcon"></span>
                    <span onClick={onClickAllContentList}>전체보기</span>
                    <span>({getAllDB.length})</span>
                    <span
                      className="ContentEditBt"
                      onClick={onClickEdit}
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
                <div className="BlogSearchArea">
                  <input type="text" className="BlogSearchBox" />
                  <span className="BlogSearchIcon" />
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
              {getAllDB
                .slice(listoffset, listoffset + listlimit)
                .map((allDB, index) => (
                  <div key={index} className="BlogAllContentLineList">
                    <span>{allDB.title}</span>
                    <span>
                      {allDB.date[0]}.{allDB.date[1]}.{allDB.date[2]}{" "}
                      {allDB.date[3]}:{allDB.date[4]}
                    </span>
                  </div>
                ))}
            </div>
            <ListPagination
              listlimit={listlimit}
              setListLimit={setListLimit}
              listpage={listpage}
              setListPage={setListPage}
              total={getAllDB.length}
            />
          </div>
          {/*콘텐츠 map*/}
          <div
            className={chooseCat === "" ? "BlogAllContentList" : "ListTextNone"}
          >
            <BlogContent
              getAllDB={getAllDB}
              userid={userid}
              page={page}
              limit={limit}
              setLimit={setLimit}
              catDB={catDB}
            />
            <Pagination
              limit={limit}
              page={page}
              setPage={setPage}
              total={getAllDB.length}
            />
          </div>
          <div
            className={
              chooseCat === "" ? "ListTextNone" : "BlogDetailContentList"
            }
          >
            <BlogDetailContent
              selectDetailDB={selectDetailDB}
              userid={userid}
              page={page}
              limit={limit}
            />
            <Pagination
              limit={limit}
              page={page}
              setPage={setPage}
              total={selectDetailDB.length}
            />
          </div>
          {/*콘텐츠 map*/}
        </div>
      </section>
    </div>
  );
};

export default MyBlog;
