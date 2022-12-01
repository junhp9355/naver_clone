import React from "react";
import BlogEditorTop2 from "./BlogEditorTop2";
import BlogFuncCategory from "./BlogFuncCategory";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";

const FuncEditContent = () => {
  const [user, setUser] = useRecoilState(recoilUser);
  return (
    <>
      <BlogEditorTop2 user={user} />
      <BlogFuncCategory />
    </>
  );
};

export default FuncEditContent;
