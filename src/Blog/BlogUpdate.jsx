import React, { useState, useEffect, useRef } from "react";
import "../BlogStyle/BlogWrite.css";
import { BACKEND_URL } from "../Util/Util";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const BlogUpdate = () => {
  const navigate = useNavigate();
  const [testImgdata, setTestImgdata] = useState(() => "");
  const [title, setTitle] = useState(() => "");
  const [content, setContent] = useState(() => "");
  const [imageIdList, setImageIdList] = useState([]);
  const [editContentDB, setEditContentDB] = useState(() => "");
  const [selectCategory, setSelectCategory] = useState(
    editContentDB.maincategory
  );
  const { id } = useParams();
  const location = useLocation();
  const categoryDB = location.state.catDB;
  const userid = location.state.userid;
  const contentRef = useRef();
  const formDatas = new FormData();

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

  const onSubmitUpdateData = (e) => {
    if (selectCategory === "null" || selectCategory === undefined) {
      alert("게시판을 선택해주세요.");
      e.preventDefault();
    } else if (title === "") {
      alert("제목을 입력해주세요");
      return;
    }
    formDatas.append("title", title);
    formDatas.append(
      "contents",
      contentRef.current?.getInstance().getMarkdown()
    );
    formDatas.append("maincategory", selectCategory);
    formDatas.append("imageIdList", imageIdList);
    const updateContent = async () => {
      try {
        await axios({
          method: "PATCH",
          url: `${BACKEND_URL}/v3/content/${id}`,
          data: formDatas,
        });
        navigate(`/myblog/${userid}`);
      } catch (e) {
        alert("PATCH FAIL");
      }
    };
    updateContent();
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: `${BACKEND_URL}/v3/content/update/${id}`,
          method: "GET",
        });
        setEditContentDB(data.data);
        setTitle(data.data.title);
        contentRef.current?.getInstance().setMarkdown(data.data.contents);
      } catch (e) {}
    };
    getData();
  }, [id]);

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
              onChange={onChangeTitle}
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
            <button className="WriteSaveBt" onClick={onSubmitUpdateData}>
              발행
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogUpdate;
