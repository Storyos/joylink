import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div>
          <ul className="flex space-x-4">
            <li><Link to="" className="text-gray-800 hover:text-blue-600">JoyLink</Link></li>
            <li><Link to="" className="text-gray-800 hover:text-blue-600">모임찾기</Link></li>
            <li><Link to="" className="text-gray-800 hover:text-blue-600">공지사항</Link></li>
            <li><Link to="" className="text-gray-800 hover:text-blue-600">VR체험관</Link></li>
          </ul>
        </div>
        <div>
          <button className="px-4 py-2 mr-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"><Link to="/login">로그인</Link></button>
          <button className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"><Link to="/join">회원가입</Link></button>
        </div>
      </div>
    </header>
  );
}


