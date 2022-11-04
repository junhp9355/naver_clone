import React from "react";
import M4 from "./M4";
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
      <div className="MainSpace"></div>
      <M4 />
    </>
  );
};

export default Main;
