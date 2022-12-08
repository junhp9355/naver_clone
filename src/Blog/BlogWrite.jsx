/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../BlogStyle/BlogWrite.css";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { BACKEND_URL } from "../Util/Util";
import axios from "axios";

const BlogWrite = () => {
  const [user, setUser] = useRecoilState(recoilUser);
  const [title, setTitle] = useState(() => "");
  const [content, setContent] = useState(() => "");
  const [categoryDB, setCategoryDB] = useState(() => []);
  const [selectCategory, setSelectCategory] = useState(() => "");
  const userid = user.userid;
  const onClickMyBlog = () => {
    window.location.href = `http://localhost:3000/myblog/${user.userid}`;
  };
  const onChangeEditor = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onClickCategory = (e) => {
    setSelectCategory(e.target.value);
  };
  const postWritedata = async (maincategory, title, userid, contents) => {
    try {
      const data = await axios.post(`${BACKEND_URL}/v3/content`, {
        maincategory,
        title,
        userid,
        contents,
      });
      window.location.href = `http://localhost:3000/myblog/${userid}`;
    } catch (e) {}
  };
  const onSubmitWriteData = (e) => {
    if (selectCategory === "null" || selectCategory === "") {
      alert("게시판을 선택해주세요.");
      e.preventDefault();
    } else if (title === "") {
      alert("제목을 입력해주세요");
    } else {
      postWritedata(selectCategory, title, userid, content);
    }
  };
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
        setCategoryDB(data.data);
      } catch (e) {}
    };
    getData();
  }, [userid]);

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
      <form onSubmit={onSubmitWriteData}>
        <div className="WriteBody">
          <div className="WriteMainSection">
            <div className="WriteHead">
              <select
                name=""
                id=""
                className="WriteCatSelet"
                onClick={onClickCategory}
                defaultValue="null"
              >
                <option value="null" className="ChoiceCat">
                  게시판 선택
                </option>
                {categoryDB.map((cat, index) => (
                  <option value={cat.maincategory} key={index}>
                    {cat.maincategory}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="WriteTitleInput"
                placeholder="제목"
                onChange={onChangeTitle}
                value={title}
              />
            </div>
            <CKEditor
              editor={ClassicEditor}
              config={{
                placeholder: "내용을 입력하세요.",
              }}
              onReady={(editor) => {}}
              onChange={(event, editor) => {
                onChangeEditor(event, editor);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
            <div className="WriteBtSection">
              <button className="WriteSaveBt" type="submit">
                발행
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default BlogWrite;
