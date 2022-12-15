import axios from "axios";
import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../Util/Util";
import "../BlogStyle/BlogEditor.css";
import "../BlogStyle/BlogCategory.css";
import { useNavigate } from "react-router-dom";

const FuncCategory = ({ userid }) => {
  const [categoryname, setCategoryname] = useState("");
  const [editCatDB, setEditCatDB] = useState([]);
  const [selectId, setSeletId] = useState(0);
  const navigate = useNavigate();
  const id = selectId;

  const onChangeCatName = (e) => {
    setCategoryname(e.target.value);
  };
  const onClickSelect = (cat, num) => {
    setCategoryname(cat);
    setSeletId(num);
  };
  const onClickUpdateCat = () => {
    updateCategory(categoryname);
  };
  const onClickDeleteCat = () => {
    deleteCategory(categoryname, userid);
  };
  const onClickAddCat = () => {
    if (categoryname === "") {
      alert("카테고리명을 입력하세요.");
    } else {
      postCategory(categoryname, userid);
    }
  };
  const updateCategory = async (maincategory) => {
    try {
      await axios.patch(`${BACKEND_URL}/v2/${id}/update/category`, {
        maincategory,
      });
    } catch (e) {}
  };
  const deleteCategory = async () => {
    try {
      await axios.delete(`${BACKEND_URL}/v2/${id}/maincategory`);
      alert("삭제");
    } catch (e) {
      alert("fail");
    }
  };
  const postCategory = async (maincategory, userid) => {
    try {
      await axios.post(`${BACKEND_URL}/v2/${userid}/maincategory`, {
        maincategory,
        userid,
      });
      setCategoryname("");
    } catch (e) {
      alert("fail");
    }
  };

  useEffect(() => {
    const getData = async (e) => {
      try {
        const data = await axios({
          url: `${BACKEND_URL}/v2/maincategory`,
          method: "GET",
          params: {
            userid,
          },
        });
        setEditCatDB(data.data);
      } catch (e) {
        alert("fail");
      }
    };
    getData();
  }, [userid]);

  return (
    <>
      <section className="EditorSection">
        <div className="EditorFunctionSection">
          <div className="FunctionSideMenu">
            <div className="BasicFunction">
              <span className="FunctionTitle">메뉴 관리</span>
              <span className="ClickFunctionText">블로그</span>
            </div>
          </div>
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
                <div className="FuncSubTitle2">카테고리 관리 · 설정</div>
                <div className="FuncCatGenerate">
                  <div>
                    <div className="CatBoxLine">
                      <div className="CatListBox">
                        {/* 카테고리 영역*/}
                        <div className="DBCatArea">
                          {editCatDB.map((cat) => (
                            <div className="CatMapArea" key={cat.id}>
                              <span className="BlogContCatIcon"></span>
                              <div
                                className="BlogContCatTitle1"
                                onClick={() =>
                                  onClickSelect(cat.maincategory, cat.id)
                                }
                              >
                                {cat.maincategory}
                              </div>
                            </div>
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
                    <div className="FuncCatEditBtArea">
                      <button
                        className="FuncCatBt CatAddBt"
                        onClick={onClickAddCat}
                        onSubmit={postCategory}
                      >
                        카테고리 추가
                      </button>
                      <button
                        className="FuncCatBt CatUpdateBt"
                        onClick={onClickUpdateCat}
                        onSubmit={updateCategory}
                      >
                        카테고리 수정
                      </button>
                      <button
                        className="FuncCatBt CatDelBt"
                        onClick={onClickDeleteCat}
                        onSubmit={deleteCategory}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="FunctionButtonArea">
                <button
                  className="FunctionSaveBt"
                  type="button"
                  onClick={() => {
                    navigate(`/myblog/${userid}`);
                  }}
                >
                  확인
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default FuncCategory;
