/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../BlogStyle/BlogEditor.css";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";
import axios from "axios";
import { BACKEND_URL } from "../Util/Util";
import BlogEditorTop from "./BlogEditorTop";
import FuncBlogInfo from "./FuncBlogInfo";
import FuncProfileInfo from "./FuncProfileInfo";

const BlogEditor = () => {
  const [user, setUser] = useRecoilState(recoilUser);
  const [editdata, setEditdata] = useState("");
  const [bloginfo, setBloginfo] = useState(false);
  const [profileinfo, setProfileinfo] = useState(true);
  const userid = user.userid;
  useEffect(() => {
    const getData = async (e) => {
      try {
        const data = await axios({
          url: `${BACKEND_URL}/v1/myblog`,
          method: "GET",
          params: {
            userid,
          },
        });
        setEditdata(data.data);
      } catch (e) {}
    };
    getData();
  }, [userid]);
  const onClickBlogInfo = () => {
    setBloginfo(false);
    setProfileinfo(true);
  };
  const onClickProfileInfo = () => {
    setBloginfo(true);
    setProfileinfo(false);
  };
  return (
    <>
      <BlogEditorTop user={user} setUser={setUser} />
      <section className="EditorSection">
        <div className="EditorFunctionSection">
          <div className="FunctionSideMenu">
            <div className="BasicFunction">
              <span className="FunctionTitle">기본 정보 관리</span>
              <span
                className={bloginfo ? "FunctionText" : "ClickFunctionText"}
                onClick={onClickBlogInfo}
              >
                블로그 정보
              </span>
              <span
                className={profileinfo ? "FunctionText" : "ClickFunctionText"}
                onClick={onClickProfileInfo}
              >
                프로필 정보
              </span>
            </div>
          </div>
          <div className={bloginfo ? "FunctionVisibleNone" : "FunctionVisible"}>
            <FuncBlogInfo editdata={editdata} userid={userid} user={user} />
          </div>
          <div
            className={profileinfo ? "FunctionVisibleNone" : "FunctionVisible"}
          >
            <FuncProfileInfo user={user} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogEditor;
