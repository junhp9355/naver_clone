import React from "react";
import M4 from "./M4";
import M3 from "./M3";
import M2 from "./M2";
import Top from "./Top";
import "../styles/Main.css";
import M5 from "./M5";
import Footer from "./Footer";
import { useRecoilState } from "recoil";
import { recoilUser } from "../recoil/RecoilUser";

const Main = () => {
  const [user, setUser] = useRecoilState(recoilUser);
  return (
    <div className="mainsection">
      <Top user={user} setUser={setUser} />
      <M2 user={user} setUser={setUser} />
      <div className="MainSpace"></div>
      <M3 />
      <div className="MainSpace"></div>
      <M4 />
      <div className="MainSpace2"></div>
      <M5 />
      <Footer />
    </div>
  );
};

export default Main;
