import React from "react";
import "./BlogEditor.css";

const BlogEditor = () => {
  const onClickNaverLogo = () => {
    window.location.href = "http://localhost:3000/";
  };
  const onClickEditorLogo = () => {
    window.location.href = "http://localhost:3000/myblog";
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
      <section className="EditorSection">
        <div className="EditorMainMenuSection">
          <div className="EditorMainMenu">기본 설정</div>
          <div className="EditorMainMenu">메뉴·글·동영상 관리</div>
        </div>
        <div className="EditorFunctionSection">
          <div className="FunctionSideMenu">
            <div className="BasicFunction">
              <span className="FunctionTitle">기본 정보 관리</span>
              <span className="FunctionText">블로그 정보</span>
              <span className="FunctionText">프로필 정보</span>
            </div>
          </div>
          <div className="FunctionBlogInfoSection">
            <div className="FuncBlogInfoTitle">
              <span className="FuncBlogInfoTitleText">블로그 정보</span>
            </div>
            <div className="FuncBlogInfoAddress">
              <span className="FuncSubTitle">블로그 주소</span>
              <span className="FuncEditArea">http://localhost:3000/myblog</span>
              <span className="FuncSupportText">
                네이버ID로 자동생성된 블로그 주소입니다.
              </span>
            </div>
            <div className="FuncBlogName">
              <span className="FuncSubTitle">블로그명</span>
              <span className="FuncEditArea">
                <input type="text" className="inputBlogName " />
              </span>
              <span className="FuncSupportText">
                한글, 영문, 숫자 혼용가능 (한글 기준 25자 이내)
              </span>
            </div>
            <div className="FuncNickName">
              <span className="FuncSubTitle">별명</span>
              <span className="FuncEditArea">
                <input type="text" className="inputNickName" />
              </span>
              <span className="FuncSupportText">
                한글, 영문, 숫자 혼용가능 (한글 기준 10자 이내)
              </span>
            </div>
            <div className="FuncBlogIntroduction">
              <span className="FuncSubTitle">소개글</span>
              <span className="FuncEditArea">
                <input type="text" className="inputBlogIntroduction" />
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
              <button className="FunctionSaveBt">확인</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogEditor;
