import React from "react";

const MyBlog = () => {
  const onClickEdit = () => {
    window.location.href = "http://localhost:3000/myblog/edit";
  };
  return (
    <>
      <nav>
        <button onClick={onClickEdit}>관리</button>
      </nav>
      <section>내 블로그</section>
    </>
  );
};

export default MyBlog;
