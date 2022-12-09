import React, { useState } from "react";
import "../BlogStyle/BlogWrite.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { BACKEND_URL } from "../Util/Util";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const BlogWrite = () => {
  const [title, setTitle] = useState(() => "");
  const [content, setContent] = useState(() => "");
  const [selectCategory, setSelectCategory] = useState(() => "");
  const navigate = useNavigate();
  const location = useLocation();
  const categoryDB = location.state.catDB;
  const userid = location.state.userid;

  const onClickMyBlog = () => {
    navigate(`/myblog/${userid}`);
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
      await axios.post(`${BACKEND_URL}/v3/content`, {
        maincategory,
        title,
        userid,
        contents,
      });
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
      navigate(`/myblog/${userid}`);
    }
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
            <button className="WriteSaveBt" onClick={onSubmitWriteData}>
              발행
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogWrite;
