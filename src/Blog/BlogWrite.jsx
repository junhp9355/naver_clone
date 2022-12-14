import React, { useState, useRef } from "react";
import "../BlogStyle/BlogWrite.css";
import { BACKEND_URL } from "../Util/Util";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const BlogWrite = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imageIdList, setImageIdList] = useState([]);
  const [selectCategory, setSelectCategory] = useState(() => "");
  const navigate = useNavigate();
  const location = useLocation();
  const categoryDB = location.state.catDB;
  const userid = location.state.userid;
  const formData = new FormData();
  const contentRef = useRef();

  const onSubmitWriteData = (e) => {
    if (selectCategory === "null" || selectCategory === "") {
      alert("게시판을 선택해주세요.");
      e.preventDefault();
    } else if (title === "") {
      alert("제목을 입력해주세요");
      return;
    }
    formData.append("title", title);
    formData.append(
      "contents",
      contentRef.current?.getInstance().getMarkdown()
    );
    formData.append("maincategory", selectCategory);
    formData.append("userid", userid);
    formData.append("imageIdList", imageIdList);

    const postWritedata = async () => {
      try {
        const data = await axios({
          method: "POST",
          url: `${BACKEND_URL}/v3/content`,
          data: formData,
        });
        console.log(data);
        navigate(`/myblog/${userid}`);
      } catch (e) {
        alert("post fail");
      }
    };
    postWritedata();
  };
  return (
    <section className="WriteSection">
      <div className="WriteTopArea">
        <span className="writeNaverLogo" />
        <span className="writeLogo" />
        <div className="WriteTopMenu">
          <span
            className="WriteTopText"
            onClick={() => {
              navigate(`/myblog/${userid}`);
            }}
          >
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
              onClick={(e) => {
                setSelectCategory(e.target.value);
              }}
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
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </div>
          <div className="EditorArea">
            <Editor
              initialValue="내용을 작성해주세요."
              previewStyle="vertical"
              height="600px"
              initialEditType="markdown"
              useCommandShortcut={true}
              ref={contentRef}
              hooks={{
                addImageBlobHook: async (blob, callback) => {
                  const formData = new FormData();
                  formData.append("file", blob);
                  const data = await axios({
                    method: "POST",
                    url: `${BACKEND_URL}/v4/content/image`,
                    data: formData,
                  });
                  setImageIdList((prev) => prev.concat(parseInt(data.data.id)));

                  // 1. 첨부된 이미지 파일을 서버로 전송후, 이미지 경로 url을 받아온다.

                  // 2. 첨부된 이미지를 화면에 표시
                  callback(data.data.imgUrl, "");
                  console.log("imgdata", data);
                },
              }}
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
