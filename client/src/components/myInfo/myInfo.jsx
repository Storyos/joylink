import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChattingModal from "../chattingModal";

export default function MyInfo() {
  const handleOpenChatting = () => {
    window.open(
      "/chatting",
      "chatting",
      "width=500, height=500, top=300, left=450"
    );
  };
  return (
    <div className="border rounded-xl p-5 m-12">
      <div className="p-1 m-2">
        <h2 className="text-lg">내 정보</h2>
        <br></br>
        <div className="text-sm space-y-1">
          <h3>회원등급 : 평민</h3>
          <h3>게시글 수 : 10</h3>
          <h3>댓글 수 : 10</h3>
        </div>
        <br></br>
      </div>

      <div className="border-t"></div>
      <div className="p-1 m-2">
        <Link to="/clubManagementPage">
          <button className="m-1">Club Management</button>
        </Link>
      </div>

      <div className="border-t"></div>

      <div className="p-1 m-3">
        <button onClick={handleOpenChatting}>채팅</button>
      </div>

      <div className="border-t"></div>

      <div className="p-1 m-3">
        <Link to="/ViewAccountPage">
          <button>장부</button>
        </Link>
      </div>

      <div className="border-t"></div>

      <div className="p-1 m-3">
        <h3>카테고리</h3>
        <br></br>
        <div className="flex flex-col items-center space-y-2">
          <Link to="/gallery">
            <button>갤러리</button>
          </Link>
          <Link to="/clubNotice">
            <button>동아리 공지사항</button>
          </Link>
          <Link to="/freeBoard">
            <button>자유게시판</button>
          </Link>
          <Link to="/questionBoard">
            <button>질문게시판</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
