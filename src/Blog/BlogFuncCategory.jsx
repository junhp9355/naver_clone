import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../Util/Util";
import "./BlogEditor.css";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";

const BlogFuncCategory = () => {
  const [lineCount, setLineCount] = useState([0]);
  const [mainCatCount, setMainCatCount] = useState([0]);
  const [categoryname, setCategoryname] = useState("");
  const [user, setUser] = useRecoilState(recoilUser);
  const userid = user.userid;
  console.log("userid", userid);

  const onChangeCatName = (e) => {
    setCategoryname(e.target.value);
  };
  const postCategory = async (maincategory, userid) => {
    try {
      const data = await axios.post(
        `${BACKEND_URL}/v2/${userid}/maincategory`,
        {
          maincategory,
          userid,
        }
      );
      setCategoryname("");
    } catch (e) {
      alert("fail");
    }
  };

  const onClickAddCat = (e) => {
    e.preventDefault();
    postCategory(categoryname, userid);
  };
  const onClickAddLine = (e) => {
    e.preventDefault();
    var countArr = [...lineCount];
    var counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter); // index 사용 X
    // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
    setLineCount(countArr);
  };

  const SubCategory = {
    display: "block",
    width: "150px",
    backgroundColor: "red",
    position: "relative",
    left: "30px",
  };

  return (
    <form>
      <div className="FunctionBlogInfoSection">
        <div className="FuncBlogInfoTitle">
          <span className="FuncBlogInfoTitleText">블로그</span>
        </div>
        <div className="FuncBlogInfoAddress">
          <span className="FuncSubTitle">페이지당 글</span>
          <span className="FuncEditArea">
            <span>
              <input type="radio" />
              <span>1개</span>
            </span>
            <span>
              <input type="radio" />
              <span>3개</span>
            </span>
            <span>
              <input type="radio" />
              <span>5개</span>
            </span>
            <span>
              <input type="radio" />
              <span>10개</span>
            </span>
          </span>
        </div>
        <div className="FuncBlogcategoryEdit">
          <form>
            <div className="FuncSubTitle2">카테고리 관리 · 설정</div>
            <div className="FuncCatEditBtArea">
              <button
                className="FuncCatBt CatAddBt"
                onClick={onClickAddCat}
                onSubmit={postCategory}
              >
                카테고리 추가
              </button>
              <button
                className="FuncCatBt CatLineAddBt"
                onClick={onClickAddLine}
              >
                구분선 추가
              </button>
              <button className="FuncCatBt CatDelBt">삭제</button>
            </div>
            <div className="FuncCatGenerate">
              <div>
                <div className="CatBoxLine">
                  <div className="CatListBox">
                    {/* 카테고리 영역*/}
                    <div className="DBCatArea">
                      {lineCount.map((item, i) => (
                        <div className="CatLine" />
                      ))}
                    </div>
                    {/* 카테고리 영역*/}
                  </div>
                </div>
              </div>
              <div className="FunCatDetailInfoArea">
                <div className="FunCatDetailInfo">
                  <span className="FunCatDetailInfoTitle">카테고리명</span>
                  <input
                    type="text"
                    onChange={onChangeCatName}
                    value={categoryname}
                  />
                </div>
                <div className="FunCatDetailInfo">
                  <span className="FunCatDetailInfoTitle">공개설정</span>
                  <span>
                    <input type="radio" />
                    <span>공개</span>
                    <input type="radio" />
                    <span>비공개</span>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="FunctionButtonArea">
          <button className="FunctionSaveBt">확인</button>
        </div>
      </div>
    </form>
  );
};

export default BlogFuncCategory;
