import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChattingModal from "../chattingModal";

export default function MyInfo() {
  
  const handleOpenChatting = () => {
    window.open("/chatting","chatting","width=500, height=500, top=300, left=450")
  };
  return (
    <div>
      <div className="p-2 m-3 bg-gray-100 border-2 border-indigo-400 rounded-lg">
        <h2>내 정보</h2>
        <br></br>
        <br></br>
        <Link to="/clubManagementPage">
          <button className="m-2">Club Management</button>
        </Link>
      </div>
      <div className="p-2 m-3 bg-gray-100 border-2 border-indigo-400 rounded-lg">
        <button onClick={handleOpenChatting}>채팅</button>
      </div>
      <div className="border-indigo-400 p-2 border-2 rounded-lg ... m-3 bg-gray-100">
        <Link to="/ViewAccountPage">
          <button>장부</button>
        </Link>
      </div>
      <div className="border-indigo-400 p-2 border-2 rounded-lg ... m-3 bg-gray-100">
        <h3>카테고리</h3>
        <br></br>
        <br></br>
        <div className="flex flex-col">
          <button className="">갤러리</button>
          <button className="">동아리 공지사항</button>
          <button className="">자유게시판</button>
          <button className="">질문게시판</button>
        </div>
      </div>
    </div>
  );
}
