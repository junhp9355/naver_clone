import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Search/Search";
import Login from "./LoginSignUp/Login";
import SignUp from "./LoginSignUp/SignUp";
import SignUpMain from "./LoginSignUp/SignUpMain";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" element={<Search />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signupJoin" element={<SignUpMain />} />
    </Routes>
  </BrowserRouter>
);
