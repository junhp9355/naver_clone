import React, { useState, useRef } from "react";
import "../BlogStyle/BlogWrite.css";
import { BACKEND_URL } from "../Util/Util";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const BlogWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectCategory, setSelectCategory] = useState(() => "");
  const navigate = useNavigate();
  const location = useLocation();
  const categoryDB = location.state.catDB;
  const userid = location.state.userid;
  const formData = new FormData();
  const contentRef = useRef();

  console.log(contentRef);
  const onClickMyBlog = () => {
    navigate(`/myblog/${userid}`);
  };
  const onChangeEditor = (e) => {
    setContent(e.target.value);
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
          <div className="EditorArea">
            <Editor
              initialValue="내용을 작성해주세요."
              previewStyle="vertical"
              height="600px"
              width="1000px"
              initialEditType="markdown"
              useCommandShortcut={true}
              ref={contentRef}
            />
          </div>
          <div className="WriteBtSection">
            <button className="WriteSaveBt" onClick={onSubmitWriteData}>
              발행
            </button>
          </div>
          {/* <input
            type="file"
            multiple
            onChange={(e) => {
              console.log(e.target.files.length);
              for (let i = 0; i < e.target.files.length; i++) {
                formData.append("files", e.target.files[i]);
              }
            }}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default BlogWrite;
