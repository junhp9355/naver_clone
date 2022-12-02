import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";
import "./BlogContent.css";
import ReactHtmlParser from "react-html-parser";
import { BACKEND_URL } from "../Util/Util";
import axios from "axios";

const BlogContent = ({ getAllDB, userid }) => {
  return (
    <section>
      {getAllDB
        .sort((a, b) => {})
        .map((content, index) => (
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
                <span className="BlogContentTopText">수정</span>
                <span className="BlogContentTopBar" />
                <span className="BlogContentTopText">삭제</span>
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
                  <span>수정</span>
                </div>
                <div className="ContentIconBox2">
                  <span>삭제</span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default BlogContent;
