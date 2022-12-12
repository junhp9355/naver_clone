import React from "react";
import "../BlogStyle/BlogContent.css";
import axios from "axios";
import { BACKEND_URL } from "../Util/Util";
import { useNavigate } from "react-router-dom";

const BlogDetailContent = ({ selectDetailDB, userid, page, limit }) => {
  const navigate = useNavigate();
  const offset = (page - 1) * limit;
  const onClickUpdateBt = (id) => {
    if (id === undefined) {
      alert("fail");
    } else {
      navigate(`/myblog/${userid}/update/${id}`);
    }
  };
  const onClickDeletBt = (id) => {
    deleteContents(id);
  };
  const deleteContents = async (id) => {
    try {
      await axios.delete(`${BACKEND_URL}/v3/content/delete/${id}`);
      navigate(`/myblog/${userid}`);
    } catch (e) {}
  };
  return (
    <section>
      {selectDetailDB.slice(offset, offset + limit).map((content, index) => (
        <div className="BlogContentMain" key={index}>
          <div className="BlogContentTop">
            <div className="BlogContentTopHead">
              <span className="BlogContentTitle">{content.title}</span>
              <span className="BlogContentTopBar1" />
              <span className="BlogContentTopCategory">
                {content.maincategory}
              </span>
            </div>
            <div className="BlogContentTopSubMenu">
              <span className="BlogContentTopDate">
                {content.date[0]}.{content.date[1]}.{content.date[2]}{" "}
                {content.date[3]}:{content.date[4]}
              </span>
              <span className="BlogContentTopBar" />
              <span
                className="BlogContentTopText"
                onClick={() => onClickUpdateBt(content.id)}
              >
                수정
              </span>
              <span className="BlogContentTopBar" />
              <span
                className="BlogContentTopText"
                onClick={() => onClickDeletBt(content.id)}
              >
                삭제
              </span>
            </div>
          </div>
          <div className="BlogContentMainBody">
            <div className="BlogContentFixTop">
              <span className="BlogContentFixTopText">
                http://localhost:3000/myblog/{userid}/{content.id}
              </span>
            </div>
            <div>{content.contents}</div>
          </div>
          <div className="BlogContentBottom">
            <span className="ContentMemoIcon" />
            <div className="ContentIconBox">
              <span className="ContentShareIcon" />
            </div>
            <div className="ContentEditbox">
              <div className="ContentIconBox2">
                <span onClick={() => onClickUpdateBt(content.id)}>수정</span>
              </div>
              <div className="ContentIconBox2">
                <span onClick={() => onClickDeletBt(content.id)}>삭제</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogDetailContent;
