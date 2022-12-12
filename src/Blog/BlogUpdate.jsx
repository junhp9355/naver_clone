import React, { useState, useEffect } from "react";
import "../BlogStyle/BlogWrite.css";
import { BACKEND_URL } from "../Util/Util";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const BlogUpdate = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(() => "");
  const [content, setContent] = useState(() => "");
  const [editContentDB, setEditContentDB] = useState(() => "");
  const [selectCategory, setSelectCategory] = useState(
    () => editContentDB.maincategory
  );
  const { id } = useParams();
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
  const updateContent = async (id, title, contents) => {
    try {
      await axios.patch(`${BACKEND_URL}/v3/content/${userid}/${id}`, {
        title,
        contents,
      });
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
      navigate(`/myblog/${userid}`);
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
        setTitle(data.data.title);
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
              // placeholder={editContentDB.title}
              onChange={onChangeTitle}
              value={title}
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
