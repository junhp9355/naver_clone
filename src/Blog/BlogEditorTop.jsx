import React, { useState } from "react";
import "./BlogEditor.css";

const BlogEditorTop = ({ user }) => {
  const [basicShow, setBasicShow] = useState(false);
  const [contentShow, setContentShow] = useState(false);

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
          <span className="EditorBlogLogo" onClick={onClickEditorLogo} />
          <span className="EditorTopBar" />
          <span className="EditorTopTitle">관리</span>
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
