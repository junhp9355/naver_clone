/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./BlogEditor.css";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";
import axios from "axios";
import { BACKEND_URL } from "../Util/Util";
import BlogFuncCategory from "./BlogFuncCategory";

const BlogEditor = () => {
  const [mainBasic, setMainBasic] = useState(false);
  const [contentEdit, setContentEdit] = useState(true);
  const [funcBlogActive, setFuncBlogActive] = useState(false);
  const [funcProfileActive, setFuncProfileActive] = useState(true);
  const [user, setUser] = useRecoilState(recoilUser);
  const [editdata, setEditdata] = useState("");
  const [editblogname, setEditblogname] = useState("");
  const [editintro, setEditintro] = useState("");
  const [editnickname, setEditnickname] = useState("");
  const userid = user.userid;

  const updateBlogname = async (blogname, blogintro, nickname) => {
    try {
      const data = await axios.patch(
        `${BACKEND_URL}/v1/edit/blogname/${userid}`,
        {
          blogname,
          blogintro,
          nickname,
        }
      );
      setEditblogname(data.data);
    } catch (e) {
      console.log("fail");
    }
  };
  const onSubmitBlogData = (e) => {
    updateBlogname(editblogname, editintro, editnickname);
  };
  const onChangeEditBlogname = (e) => {
    setEditblogname(e.target.value);
  };
  const onChangeEditintro = (e) => {
    setEditintro(e.target.value);
  };
  const onChaneEditNickname = (e) => {
    setEditnickname(e.target.value);
  };

  //메인 기본설정
  const onClickMainBasic = () => {
    if (mainBasic === false) {
      setMainBasic(false);
      setContentEdit(true);
    } else if (contentEdit === true) {
      setContentEdit(false);
      setMainBasic(true);
    } else {
      setContentEdit(true);
      setMainBasic(false);
    }
    setFuncProfileActive(true);
    setFuncBlogActive(false);
    setContentEdit(true);
  };

  // 메뉴,글,동영상관리
  const onClcikContentEdit = () => {
    if (mainBasic === false) {
      setMainBasic(true);
      setContentEdit(false);
    }
    setFuncProfileActive(true);
    setFuncBlogActive(true);
    setMainBasic(true);
  };

  // 기본정보-블로그정보
  const onClickSideBlogInfoFunc = () => {
    if (funcBlogActive === false) {
      setFuncBlogActive(false);
    } else setFuncBlogActive((funcBlogActive) => !funcBlogActive);
    if (funcBlogActive === true) {
      setFuncProfileActive(true);
    }
  };
  // 기본정보-프로필정보
  const onClickSideProfileInfoFunc = () => {
    if (funcProfileActive === true) {
      setFuncProfileActive(false);
    } else if (funcProfileActive === false) {
      setFuncProfileActive(false);
    } else {
      setFuncProfileActive((funcProfileActive) => !funcProfileActive);
    }
    if (funcProfileActive === true) {
      setFuncBlogActive(true);
    }
  };
  const onClickNaverLogo = () => {
    window.location.href = "http://localhost:3000/";
  };
  const onClickEditorLogo = () => {
    window.location.href = `http://localhost:3000/myblog/${user.userid}`;
  };
  useEffect(() => {
    const getData = async (e) => {
      try {
        const data = await axios({
          url: `${BACKEND_URL}/v1/myblog`,
          method: "GET",
          params: {
            userid,
          },
        });
        setEditdata(data.data);
      } catch (e) {
        alert("fail");
      }
    };
    getData();
  }, [userid]);
  return (
    <>
      <nav className="EditorTopArea">
        <div className="EditorTopLogo">
          <span className="EditorNaverLogo" onClick={onClickNaverLogo} />
          <span className="EditorBlogLogo" onClick={onClickEditorLogo} />
          <span className="EditorTopBar" />
          <span className="EditorTopTitle">관리</span>
        </div>
      </nav>
      <section className="EditorSection">
        <div className="EditorMainMenuSection">
          <div
            className={mainBasic ? "EditorMainMenu" : "EditorMainMenuActive"}
            onClick={onClickMainBasic}
          >
            기본 설정
          </div>
          <div
            className={contentEdit ? "EditorMainMenu" : "EditorMainMenuActive"}
            onClick={onClcikContentEdit}
          >
            메뉴·글·동영상 관리
          </div>
        </div>
        <div className="EditorFunctionSection">
          <div className="FunctionSideMenu">
            <div
              className={mainBasic ? "FunctionVisibleNone" : "BasicFunction"}
            >
              <span className="FunctionTitle">기본 정보 관리</span>
              <span
                className={
                  funcBlogActive ? "FunctionText" : "ClickFunctionText"
                }
                onClick={onClickSideBlogInfoFunc}
              >
                블로그 정보
              </span>
              <span
                className={
                  funcProfileActive ? "FunctionText" : "ClickFunctionText"
                }
                onClick={onClickSideProfileInfoFunc}
              >
                프로필 정보
              </span>
            </div>

            <div
              className={!contentEdit ? "BasicFunction" : "FunctionVisibleNone"}
            >
              <span className="FunctionTitle">메뉴 관리</span>
              <span
                className={contentEdit ? "FunctionText" : "ClickFunctionText"}
                // onClick={onClickSideBlogInfoFunc}
              >
                블로그
              </span>
            </div>
          </div>
          {/*Edit 블로그정보 페이지*/}
          <form onSubmit={onSubmitBlogData}>
            <div
              className={
                !funcBlogActive ? "FunctionVisible" : "FunctionVisibleNone"
              }
            >
              <div className="FunctionBlogInfoSection">
                <div className="FuncBlogInfoTitle">
                  <span className="FuncBlogInfoTitleText">블로그 정보</span>
                </div>
                <div className="FuncBlogInfoAddress">
                  <span className="FuncSubTitle">블로그 주소</span>
                  <span className="FuncEditArea">
                    http://localhost:3000/myblog/{user.userid}
                  </span>
                  <span className="FuncSupportText">
                    네이버ID로 자동생성된 블로그 주소입니다.
                  </span>
                </div>
                <div className="FuncBlogName">
                  <span className="FuncSubTitle">블로그명</span>
                  <span className="FuncEditArea">
                    <input
                      type="text"
                      className="inputBlogName"
                      onChange={onChangeEditBlogname}
                      value={editblogname}
                      placeholder={editdata.blogname}
                    />
                  </span>
                  <span className="FuncSupportText">
                    한글, 영문, 숫자 혼용가능 (한글 기준 25자 이내)
                  </span>
                </div>
                <div className="FuncNickName">
                  <span className="FuncSubTitle">별명</span>
                  <span className="FuncEditArea">
                    <input
                      type="text"
                      className="inputNickName"
                      placeholder={editdata.nickname}
                      value={editnickname}
                      onChange={onChaneEditNickname}
                    />
                  </span>
                  <span className="FuncSupportText">
                    한글, 영문, 숫자 혼용가능 (한글 기준 10자 이내)
                  </span>
                </div>
                <div className="FuncBlogIntroduction">
                  <span className="FuncSubTitle">소개글</span>
                  <span className="FuncEditArea">
                    <input
                      type="text"
                      className="inputBlogIntroduction"
                      value={editintro}
                      placeholder={editdata.blogintro}
                      onChange={onChangeEditintro}
                    />
                  </span>
                  <span className="FuncSupportText">
                    블로그 프로필 영역의 프로필 이미지 아래에 <br />
                    반영됩니다. (한글 기준 200자 이내)
                  </span>
                </div>
                <div className="FuncBlogCategory">
                  <span className="FuncSubTitle">내 블로그 주제</span>
                  <span className="FuncEditArea">
                    <select name="" id="" className="BlogCategory">
                      <option value="">문학·책</option>
                      <option value="">영화</option>
                      <option value="">미술·디자인</option>
                      <option value="">음악</option>
                      <option value="">일상·생각</option>
                      <option value="">건강·의학</option>
                      <option value="">반려동물</option>
                      <option value="">게임</option>
                      <option value="">스포츠</option>
                      <option value="">교육</option>
                    </select>
                  </span>
                  <span className="FuncSupportText">
                    내 블로그에서 다루는 주제를 선택하세요.
                    <br /> 프로필 영역에 노출됩니다.
                  </span>
                </div>
                <div className="FunctionButtonArea">
                  <button className="FunctionSaveBt" type="submit">
                    확인
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/*Edit 블로그정보 페이지*/}
          {/*Edit 프로필정보 페이지*/}
          <div
            className={
              !funcProfileActive ? "FunctionVisible" : "FunctionVisibleNone"
            }
          >
            <div className="FunctionBlogInfoSection">
              <div className="FuncBlogInfoTitle">
                <span className="FuncBlogInfoTitleText">프로필 정보</span>
              </div>
              <div className="FuncBlogInfoAddress">
                <span className="FuncSubTitle">이름</span>
                <span className="FuncEditArea">{user.username}</span>
                <span className="FuncSupportText">
                  <select name="" id="" defaultValue={"비공개"}>
                    <option value="전체">전체공개</option>
                    <option value="이웃">이웃공개</option>
                    <option value="서로이웃">서로이웃공개</option>
                    <option value="비공개">비공개</option>
                  </select>
                </span>
              </div>
              <div className="FuncBlogInfoAddress">
                <span className="FuncSubTitle">성별</span>
                <span className="FuncEditArea">{user.gender}</span>
                <span className="FuncSupportText">
                  <select name="" id="" defaultValue={"비공개"}>
                    <option value="전체">전체공개</option>
                    <option value="이웃">이웃공개</option>
                    <option value="서로이웃">서로이웃공개</option>
                    <option value="비공개">비공개</option>
                  </select>
                </span>
              </div>
              <div className="FunctionButtonArea">
                <button className="FunctionSaveBt">확인</button>
              </div>
            </div>
          </div>
          {/*Edit 프로필정보 페이지*/}
          {/*Edit 블로그편집 페이지*/}
          <div
            className={!contentEdit ? "FunctionVisible" : "FunctionVisibleNone"}
          >
            <BlogFuncCategory />
          </div>
          {/*Edit 블로그편집 페이지*/}
        </div>
      </section>
    </>
  );
};

export default BlogEditor;
