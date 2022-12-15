import React from "react";
import BlogEditorTop2 from "./BlogEditorTop2";
import FuncCategory from "./FuncCategory";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";

const BlogEditorContent = () => {
  const [user, setUser] = useRecoilState(recoilUser);
  const userid = user.userid;
  return (
    <>
      <BlogEditorTop2 user={user} setUser={setUser} />
      <FuncCategory userid={userid} />
    </>
  );
};

export default BlogEditorContent;
