import React, { useState } from "react";
import "../BlogStyle/BlogEditor.css";

const BlogEditorTop = ({ user, setUser }) => {
  const [basicShow, setBasicShow] = useState(false);
  const [contentShow, setContentShow] = useState(false);
  const onClickLogout = () => {
    setUser("");
    window.location.href = "http://localhost:3000/";
    localStorage.clear();
  };

  const onClickNaverLogo = () => {
    window.location.href = "http://localhost:3000/";
  };
  const onClickEditorLogo = () => {
    window.location.href = `http://localhost:3000/myblog/${user.userid}`;
  };

  const onClickMainBasic = () => {
    window.location.href = `http://localhost:3000/myblog/${user.userid}/edit`;
  };

  const onClcikContentEdit = (e) => {
    window.location.href = `http://localhost:3000/myblog/${user.userid}/edit/content`;
  };
  return (
    <>
      <nav className="EditorTopArea">
        <div className="EditorTopLogo">
          <span className="EditorNaverLogo" onClick={onClickNaverLogo} />
          <span className="EditorBlogLogo" />
          <span className="EditorTopBar" />
          <span className="EditorTopTitle">관리</span>
        </div>
        <div className="EditorTopFunc">
          <div className="EditorTopFuncText" onClick={onClickEditorLogo}>
            내 블로그
          </div>
          <div className="EditorTopFuncText" onClick={onClickLogout}>
            로그아웃
          </div>
        </div>
      </nav>
      <section className="EditorTopSection">
        <div className="EditorMainMenuSection">
          <div
            className={basicShow ? "EditorMainMenu" : "EditorMainMenuActive"}
            onClick={onClickMainBasic}
          >
            기본 설정
          </div>
          <div
            className={contentShow ? "EditorMainMenuActive" : "EditorMainMenu"}
            onClick={onClcikContentEdit}
          >
            메뉴·글·동영상 관리
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogEditorTop;
