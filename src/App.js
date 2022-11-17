import "./App.css";
import Main from "./Main/Main";
import Login from "./LoginSignUp/Login";
import SignUpMain from "./LoginSignUp/SignUpMain";
import SignUp from "./LoginSignUp/SignUp";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Main />}></Route>
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signupJoin" element={<SignUpMain />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
