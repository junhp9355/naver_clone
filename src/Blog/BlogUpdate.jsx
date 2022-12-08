/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../BlogStyle/BlogWrite.css";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { BACKEND_URL } from "../Util/Util";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogUpdate = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(recoilUser);
  const [title, setTitle] = useState(() => "");
  const [content, setContent] = useState(() => "");
  const [editContentDB, setEditContentDB] = useState(() => "");
  const [selectCategory, setSelectCategory] = useState(
    () => editContentDB.maincategory
  );
  const [categoryDB, setCategoryDB] = useState([]);
  const { id } = useParams();
  const userid = user.userid;

  const onClickMyBlog = () => {
    navigate(`/myblog/${user.userid}`);
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
  const updateContent = async (id, title, contents) => {
    try {
      const data = await axios.patch(
        `${BACKEND_URL}/v3/content/${userid}/${id}`,
        {
          title,
          contents,
        }
      );
    } catch (e) {}
  };

  const onSubmitUpdateData = (e) => {
    if (selectCategory === "null" || selectCategory === "") {
      alert("게시판을 선택해주세요.");
      e.preventDefault();
    } else if (title === "") {
      alert("제목을 입력해주세요");
    } else {
      updateContent(id, title, content);
    }
  };

  useEffect(() => {
    const getData = async (e) => {
      try {
        const data = await axios({
          url: `${BACKEND_URL}/v3/content/update/${id}`,
          method: "GET",
        });
        setEditContentDB(data.data);
      } catch (e) {}
    };
    getData();
  }, [id]);

  useEffect(() => {
    const getDatas = async (e) => {
      try {
        const datas = await axios({
          url: `${BACKEND_URL}/v2/maincategory`,
          method: "GET",
          params: {
            userid,
          },
        });
        setCategoryDB(datas.data);
      } catch (e) {}
    };
    getDatas();
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
      <form onSubmit={onSubmitUpdateData}>
        <div className="WriteBody">
          <div className="WriteMainSection">
            <div className="WriteHead">
              <select
                name=""
                id=""
                className="WriteCatSelet"
                onClick={onClickCategory}
                defaultValue={editContentDB.maincategory}
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
                placeholder={editContentDB.title}
                onChange={onChangeTitle}
                value={title}
              />
            </div>
            <CKEditor
              editor={ClassicEditor}
              data={editContentDB.contents}
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

export default BlogUpdate;
