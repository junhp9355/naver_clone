import React from "react";
import "./BlogContent.css";

const BlogContent = () => {
  return (
    <section>
      <div className="BlogContentTop">
        <div className="BlogContentTopHead">
          <span className="BlogContentTitle">콘텐츠 제목</span>
          <span className="BlogContentTopBar1" />
          <span className="BlogContentTopCategory">카테고리</span>
        </div>
        <div className="BlogContentTopSubMenu">
          <span className="BlogContentTopDate">2022.11.24 17:19</span>
          <span className="BlogContentTopBar" />
          <span className="BlogContentTopText">수정</span>
          <span className="BlogContentTopBar" />
          <span className="BlogContentTopText">삭제</span>
        </div>
      </div>
      <div className="BlogContentMainBody">
        <div className="BlogContentFixTop">
          <span className="BlogContentFixTopText">블로그주소+게시물id</span>
        </div>
        <p>게시물 내용 타타다타다타가ㅏㅏ타타자닥아나ㅏ</p>
        <p>게시물 내용 타타다타다타가ㅏㅏ타타자닥아나ㅏ</p>
        <p>게시물 내용 타타다타다타가ㅏㅏ타타자닥아나ㅏ</p>
        <p>게시물 내용 타타다타다타가ㅏㅏ타타자닥아나ㅏ</p>
        <p>게시물 내용 타타다타다타가ㅏㅏ타타자닥아나ㅏ</p>
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
    </section>
  );
};

export default BlogContent;
