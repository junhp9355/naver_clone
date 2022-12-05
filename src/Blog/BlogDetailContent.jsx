import React, { useState } from "react";
import "./BlogContent.css";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";
import { BACKEND_URL } from "../Util/Util";

const BlogDetailContent = ({ selectDetailDB, userid }) => {
  const onClickUpdateBt = (id) => {
    if (id === undefined) {
      alert("fail");
    } else {
      window.location.href = `http://localhost:3000/myblog/${userid}/update/${id}`;
    }
  };
  const onClickDeletBt = (id) => {
    deleteContents(id);
  };
  const deleteContents = async (id, e) => {
    try {
      const data = await axios.delete(`${BACKEND_URL}/v3/content/delete/${id}`);
      window.location.href = `http://localhost:3000/myblog/${userid}`;
    } catch (e) {}
  };
  return (
    <section>
      {selectDetailDB.map((content, index) => (
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
            <div>{ReactHtmlParser(content.contents)}</div>
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
