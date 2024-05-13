import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChattingModal from "../chattingModal";

export default function MyInfo() {
  const [chattingDisplay, setChattingDisplay] = useState("Close");
  const handleCloseChatting = () => {
    setChattingDisplay("Close");
  };
  return (
    <div>
      <div className="border-indigo-400 p-2 border-2 rounded-lg m-3 bg-gray-100">
        <h2>내 정보</h2>
        <br></br>
        <br></br>
        <Link to="/clubManagementPage">
          <button className="m-2">Club Management</button>
        </Link>
      </div>
      <div className="border-indigo-400 p-2 border-2 rounded-lg m-3 bg-gray-100">
        <button onClick={() => setChattingDisplay("Open")}>채팅</button>
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
        <div className="flex flex-col items-center">
          <Link to="/gallery"><button>갤러리</button></Link>
          <Link to="/clubNotice"><button>동아리 공지사항</button></Link>
          <Link to="/freeBoard"><button>자유게시판</button></Link>
          <Link to="/questionBoard"><button>질문게시판</button></Link>
        </div>
      </div>

      {chattingDisplay === "Open" && (
        <ChattingModal handleCloseChatting={handleCloseChatting} />
      )}
    </div>
  );
}
