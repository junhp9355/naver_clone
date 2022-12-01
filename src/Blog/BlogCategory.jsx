import React, { useEffect, useState } from "react";
import "./BlogCategory.css";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";
import axios from "axios";
import { BACKEND_URL } from "../Util/Util";

const BlogCategory = () => {
  const [user, setUser] = useRecoilState(recoilUser);
  const [catDB, setCatDB] = useState([]);
  const onClickEditBt = () => {
    window.location.href = `http://localhost:3000/myblog/${user.userid}/edit`;
  };
  const userid = user.userid;
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
        setCatDB(data.data);
      } catch (e) {
        alert("fail");
      }
    };
    getData();
  }, [userid]);

  console.log("CATDB", catDB);
  return (
    <section className="BlogContentCategory">
      <div className="BlogContentCategoryArea">
        <div className="BlogContentCatHead">
          <span>카테고리</span>
          <span className="ContentShowBt">^</span>
          <div className="BlogContCatMain">
            <div className="AllContent">
              <span className="BlogContCatIcon"></span>
              <span>전체보기</span>
              <span>(3)</span>
              <span className="ContentEditBt" onClick={onClickEditBt}></span>
            </div>
            <div className="BlogCatAreaDashed">
              {/*세부 카테고리map pos*/}
              {catDB.map((item, index) => (
                <div className="BlogContCatDetail">
                  <span className="BlogContCatIcon"></span>
                  <span className="BlogContCatTitle">{item.maincategory}</span>
                </div>
              ))}
            </div>
            {/*세부 카테고리map pos*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCategory;
