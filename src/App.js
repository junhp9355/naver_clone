import "./App.css";
import Main from "./Main/Main";
import Login from "./LoginSignUp/Login";
import SignUpMain from "./LoginSignUp/SignUpMain";
import SignUp from "./LoginSignUp/SignUp";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyBlog from "./Blog/MyBlog";
import BlogEditor from "./Blog/BlogEditor";
import BlogWrite from "./Blog/BlogWrite";

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
            <Route path="/myblog/:userid" element={<MyBlog />} />
            <Route path="/myblog/:userid/edit" element={<BlogEditor />} />
            <Route path="/myblog/:userid/write" element={<BlogWrite />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
