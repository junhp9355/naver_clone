import React from "react";
import M3 from "./M3";
import M2 from "./M2";
import Top from "./Top";
import "../styles/Main.css";

const Main = () => {
  return (
    <>
      <Top />
      <M2 />
      <div className="MainSpace"></div>
      <M3 />
    </>
  );
};

export default Main;
