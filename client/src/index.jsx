import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login.jsx"
import Join from "./pages/join/join.jsx";
import MyInfo from "./components/myInfo/myInfo.jsx";
import Main from "./Main.jsx";
import './index.css';


ReactDOM.render(
  <>
    <Main></Main>
  </>,
  document.getElementById("root")
);

