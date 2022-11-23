import React from "react";
import "./BlogEditor.css";

const BlogEditor = () => {
  return (
    <>
      <nav className="EditorTopArea">
        <div className="EditorTopLogo">
          <span className="EditorNaverLogo" />
          <span className="EditorBlogLogo" />
          <span className="EditorTopBar" />
          <span className="EditorTopTitle">관리</span>
        </div>
      </nav>
      <section className="EditorSection">
        <div className="EditorMainMenuSection">
          <div className="EditorMainMenu">기본 설정</div>
          <div className="EditorMainMenu">메뉴·글·동영상 관리</div>
        </div>
        <div className="EditorFunctionSection">
          <div className="FunctionSideMenu">
            <div className="BasicFunction01">
              <span className="FunctionTitle">기본 정보 관리</span>
              <span className="FunctionText">블로그 정보</span>
              <span className="FunctionText">프로필 정보</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogEditor;
