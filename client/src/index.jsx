import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login.jsx"
import Join from "./pages/join/join.jsx";
import Chatting from "./pages/chatting/chatting.jsx";
import MyPage from "./pages/mypage/mypage.jsx"
import './index.css';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/join" element={<Join/>}></Route>
        <Route path="/chatting" element={<Chatting/>}></Route>

      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

