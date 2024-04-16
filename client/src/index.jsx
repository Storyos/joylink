import React from "react";
import ReactDOM from "react-dom/client";
import MyInfo from "./components/myInfo/myInfo";
import Header from "./components/header/header";
import MyClubPage from "./pages/myClubPage/myClub";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header></Header>
  </React.StrictMode>
);

