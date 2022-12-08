import React, { useState } from "react";
import { BACKEND_URL } from "../Util/Util";
import axios from "axios";

const FuncBlogInfo = ({ editdata, userid, user }) => {
  const [editblogname, setEditblogname] = useState("");
  const [editintro, setEditintro] = useState("");
  const [editnickname, setEditnickname] = useState("");
  const updateBlogname = async (blogname, blogintro, nickname) => {
    try {
      const data = await axios.patch(
        `${BACKEND_URL}/v1/edit/blogname/${userid}`,
        {
          blogname,
          blogintro,
          nickname,
        }
      );
      setEditblogname(data.data);
    } catch (e) {}
  };
  const onSubmitBlogData = () => {
    if (editblogname === "") {
      alert("블로그명을 입력하세요");
    } else if (editintro === "") {
      alert("소개글을 입력하세요");
    } else if (editnickname === "") {
      alert("별명을 입력주세요");
    } else {
      updateBlogname(editblogname, editintro, editnickname);
    }
  };

  const onChangeEditBlogname = (e) => {
    setEditblogname(e.target.value);
  };
  const onChangeEditintro = (e) => {
    setEditintro(e.target.value);
  };
  const onChaneEditNickname = (e) => {
    setEditnickname(e.target.value);
  };
  return (
    <form onSubmit={onSubmitBlogData}>
      <div className="FunctionBlogInfoSection">
        <div className="FuncBlogInfoTitle">
          <span className="FuncBlogInfoTitleText">블로그 정보</span>
        </div>
        <div className="FuncBlogInfoAddress">
          <span className="FuncSubTitle">블로그 주소</span>
          <span className="FuncEditArea">
            http://localhost:3000/myblog/{user.userid}
          </span>
          <span className="FuncSupportText">
            네이버ID로 자동생성된 블로그 주소입니다.
          </span>
        </div>
        <div className="FuncBlogName">
          <span className="FuncSubTitle">블로그명</span>
          <span className="FuncEditArea">
            <input
              type="text"
              className="inputBlogName"
              onChange={onChangeEditBlogname}
              value={editblogname}
              placeholder={editdata.blogname}
            />
          </span>
          <span className="FuncSupportText">
            한글, 영문, 숫자 혼용가능 (한글 기준 25자 이내)
          </span>
        </div>
        <div className="FuncNickName">
          <span className="FuncSubTitle">별명</span>
          <span className="FuncEditArea">
            <input
              type="text"
              className="inputNickName"
              placeholder={editdata.nickname}
              value={editnickname}
              onChange={onChaneEditNickname}
            />
          </span>
          <span className="FuncSupportText">
            한글, 영문, 숫자 혼용가능 (한글 기준 10자 이내)
          </span>
        </div>
        <div className="FuncBlogIntroduction">
          <span className="FuncSubTitle">소개글</span>
          <span className="FuncEditArea">
            <input
              type="text"
              className="inputBlogIntroduction"
              value={editintro}
              placeholder={editdata.blogintro}
              onChange={onChangeEditintro}
            />
          </span>
          <span className="FuncSupportText">
            블로그 프로필 영역의 프로필 이미지 아래에 <br />
            반영됩니다. (한글 기준 200자 이내)
          </span>
        </div>
        <div className="FuncBlogCategory">
          <span className="FuncSubTitle">내 블로그 주제</span>
          <span className="FuncEditArea">
            <select name="" id="" className="BlogCategory">
              <option value="">문학·책</option>
              <option value="">영화</option>
              <option value="">미술·디자인</option>
              <option value="">음악</option>
              <option value="">일상·생각</option>
              <option value="">건강·의학</option>
              <option value="">반려동물</option>
              <option value="">게임</option>
              <option value="">스포츠</option>
              <option value="">교육</option>
            </select>
          </span>
          <span className="FuncSupportText">
            내 블로그에서 다루는 주제를 선택하세요.
            <br /> 프로필 영역에 노출됩니다.
          </span>
        </div>
        <div className="FunctionButtonArea">
          <button className="FunctionSaveBt" type="submit">
            확인
          </button>
        </div>
      </div>
    </form>
  );
};

export default FuncBlogInfo;
