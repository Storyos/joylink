import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../App";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인이 되어있는경우를 check
    useEffect( () => {
        // 페이지 로드 시 로그인 세션 확인
        async function getsession() {
        const session = await supabase.auth.getUser(); 
        console.log("session값임 ",session.data.user);
        setIsLoggedIn(session?.data.user != null);  // access_token의 존재 여부로 로그인 상태 결정
      }
      getsession();
    }, []);

  return (
    <header className="bg-white shadow-md ">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-800 hover:text-blue-600">JoyLink</Link></li>
            <li><Link to="/clubpromotionweb" className="text-gray-800 hover:text-blue-600">모임찾기</Link></li>
            <li><Link to="/notice" className="text-gray-800 hover:text-blue-600">공지사항</Link></li>
            <li><Link className="text-gray-800 hover:text-blue-600">VR체험관</Link></li>
          </ul>
        </div>
        <div>
          <div>
            {
              isLoggedIn?
            (<button className="px-4 py-2 mr-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"><Link to="/login">로그아웃</Link></button>)
            :
            (<button className="px-4 py-2 mr-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"><Link to="/login">로그인</Link></button>)
            }
          </div>
          <button className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"><Link to="/join">회원가입</Link></button>
          <button className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"><Link to="/getInfo">회원가입 추가정보 받기</Link></button>
        </div>
      </div>
    </header>
  );
}


