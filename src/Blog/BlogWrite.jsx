import React from "react";
import "./BlogWrite.css";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";

const BlogWrite = () => {
  const [user, setUser] = useRecoilState(recoilUser);
  const onClickMyBlog = () => {
    window.location.href = `http://localhost:3000/myblog/${user.userid}`;
  };
  return (
    <section className="WriteSection">
      <div className="WriteTopArea">
        <span className="writeNaverLogo" />
        <span className="writeLogo" />
        <div className="WriteTopMenu">
          <span className="WriteTopText" onClick={onClickMyBlog}>
            내 블로그
          </span>
        </div>
      </div>
      <div className="WriteBody">
        <div className="WriteMainSection">
          <div className="WriteHead">
            <select name="" id="">
              <option value="">1</option>
            </select>
            <input type="text" className="WriteTitleInput" />
          </div>
          <input type="text" className="WriteInput" />
          <div className="WriteBtSection">
            <button>확인</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogWrite;
