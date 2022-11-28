import React from "react";
import "./BlogCategory.css";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";

const BlogCategory = () => {
  const [user, setUser] = useRecoilState(recoilUser);
  const onClickEditBt = () => {
    window.location.href = `http://localhost:3000/myblog/${user.userid}/edit`;
  };
  return (
    <section className="BlogContentCategory">
      <div className="BlogContentCategoryArea">
        <div className="BlogContentCatHead">
          <span>카테고리</span>
          <span className="ContentShowBt">^</span>
          <div className="BlogContCatMain">
            <div className="AllContent">
              <span className="BlogContCatIcon"></span>
              <span>전체보기</span>
              <span>(3)</span>
              <span className="ContentEditBt" onClick={onClickEditBt}></span>
            </div>
            {/*세부 카테고리map pos*/}
            <div className="BlogContCatDetail">hed</div>
            {/*세부 카테고리map pos*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCategory;
