import React from "react";

const FuncProfileInfo = ({ user }) => {
  return (
    <div className="FunctionBlogInfoSection">
      <div className="FuncBlogInfoTitle">
        <span className="FuncBlogInfoTitleText">프로필 정보</span>
      </div>
      <div className="FuncBlogInfoAddress">
        <span className="FuncSubTitle">이름</span>
        <span className="FuncEditArea">{user.username}</span>
        <span className="FuncSupportText">
          <select name="" id="" defaultValue={"비공개"}>
            <option value="전체">전체공개</option>
            <option value="이웃">이웃공개</option>
            <option value="서로이웃">서로이웃공개</option>
            <option value="비공개">비공개</option>
          </select>
        </span>
      </div>
      <div className="FuncBlogInfoAddress">
        <span className="FuncSubTitle">성별</span>
        <span className="FuncEditArea">{user.gender}</span>
        <span className="FuncSupportText">
          <select name="" id="" defaultValue={"비공개"}>
            <option value="전체">전체공개</option>
            <option value="이웃">이웃공개</option>
            <option value="서로이웃">서로이웃공개</option>
            <option value="비공개">비공개</option>
          </select>
        </span>
      </div>
      <div className="FunctionButtonArea">
        <button className="FunctionSaveBt">확인</button>
      </div>
    </div>
  );
};

export default FuncProfileInfo;
