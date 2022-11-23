import React from "react";

const MyBlog = () => {
  const onClickHome = () => {
    window.location.href = "http://localhost:3000/";
  };
  const onClickEdit = () => {
    window.location.href = "http://localhost:3000/myblog/edit";
  };
  return (
    <>
      <nav>
        <button onClick={onClickEdit}>관리</button>
        <button onClick={onClickHome}>홈</button>
      </nav>
      <section>내 블로그</section>
    </>
  );
};

export default MyBlog;
