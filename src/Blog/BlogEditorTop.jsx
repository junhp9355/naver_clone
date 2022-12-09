import React from "react";
import "../BlogStyle/BlogEditor.css";
import { useNavigate } from "react-router-dom";

const BlogEditorTop = ({ user, setUser }) => {
  const navigate = useNavigate();
  const onClickLogout = () => {
    setUser("");
    navigate("/");
    localStorage.clear();
  };

  const onClickNaverLogo = () => {
    navigate("/");
  };
  const onClickEditorLogo = () => {
    navigate(`/myblog/${user.userid}`);
  };

  const onClickMainBasic = () => {
    navigate(`/myblog/${user.userid}/edit`);
  };

  const onClcikContentEdit = (e) => {
    navigate(`/myblog/${user.userid}/edit/content`);
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
          <div className="EditorMainMenuActive" onClick={onClickMainBasic}>
            기본 설정
          </div>
          <div className="EditorMainMenu" onClick={onClcikContentEdit}>
            메뉴·글·동영상 관리
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogEditorTop;
